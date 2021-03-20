const got = require("got");
const { Op } = require("sequelize");
const { Game, Tag, GamesTags } = require("../models");
const fs = require("fs");

async function calcTagInfos() {
  let allTags = await Tag.findAll({
    where: {
      id: { [Op.gte]: 279 },
    },
  });
  try {
    for (const tag in allTags) {
      let tagID = allTags[tag].dataValues.id;
      let gamesCount = await Game.findAndCountAll({
        include: [
          {
            model: Tag,
            as: "tag",
            where: { id: tagID },
          },
        ],
      });

      let revenue_0k_5k = (await getGamesByRevenue(tagID, 0, 500000)) || 0;
      let revenue_5k_25k =
        (await getGamesByRevenue(tagID, 500001, 2500000)) || 0;
      let revenue_25k_100k =
        (await getGamesByRevenue(tagID, 2500001, 10000000)) || 0;
      let revenue_100k_200k =
        (await getGamesByRevenue(tagID, 10000001, 20000000)) || 0;
      let revenue_200k_500k =
        (await getGamesByRevenue(tagID, 20000001, 50000000)) || 0;
      let revenue_500k_1M =
        (await getGamesByRevenue(tagID, 50000001, 100000000)) || 0;
      let revenue_1M_5M =
        (await getGamesByRevenue(tagID, 100000001, 500000000)) || 0;
      let revenue_5M = (await getGamesByRevenue(tagID, 500000001)) || 0;

      let revenueCount =
        revenue_0k_5k +
        revenue_5k_25k +
        revenue_25k_100k +
        revenue_100k_200k +
        revenue_200k_500k +
        revenue_500k_1M +
        revenue_1M_5M +
        revenue_5M;

      let dataToUpdate = {
        games_count: gamesCount.count,
        revenue_0k_5k: revenue_0k_5k / revenueCount || 0,
        revenue_5k_25k: revenue_5k_25k / revenueCount || 0,
        revenue_25k_100k: revenue_25k_100k / revenueCount || 0,
        revenue_100k_200k: revenue_100k_200k / revenueCount || 0,
        revenue_200k_500k: revenue_200k_500k / revenueCount || 0,
        revenue_500k_1M: revenue_500k_1M / revenueCount || 0,
        revenue_1M_5M: revenue_1M_5M / revenueCount || 0,
        revenue_5M: revenue_5M / revenueCount || 0,
      };

      await allTags[tag].update(dataToUpdate);
    }
  } catch (error) {
    console.log(error);
  }
}

async function getGamesByRevenue(tagID, min, max) {
  let revenue = await Game.findAndCountAll({
    include: [
      {
        model: Tag,
        as: "tag",
        where: { id: tagID },
      },
    ],
    where: {
      revenue: {
        [Op.between]: [min, max],
      },
    },
  });
  return revenue.count;
}

function populateTags() {
  fs.readFile("./app/services/tagsRef.json", "utf8", function (err, data) {
    if (err) throw err;
    let tags = JSON.parse(data);
    tags.forEach(async (tag) => {
      await Tag.findOrCreate({
        where: { id: tag["#"] },
        defaults: { name: tag.Tag },
      }).catch((err) => {
        console.log(`Erro ao criar tag:\n${err}`);
      });
    });
  }).catch((err) => {
    console.log(`Erro ao ler arquivo:\n${err}`);
  });
}

function populateGames(pagsAppsArray) {
  let currentInterval = 3000;
  let ONE_MINUTE = 1000 * 60 + currentInterval;
  let pagsApps = pagsAppsArray;
  let pagsLength = pagsApps.length;
  let pagCount = 0;

  const steamSpyEndpointAll = "https://steamspy.com/api.php?request=all&page=";

  setInterval(async () => {
    try {
      let steamSpyData = await got.get(
        `${steamSpyEndpointAll}${pagsApps.shift()}`
      );
      let steamSpyObj = await JSON.parse(steamSpyData.body);
      await addGames(steamSpyObj);
      if (pagCount++ >= pagsLength - 1) process.exit();
    } catch (error) {
      console.log(error);
    }
  }, ONE_MINUTE);
}

async function addGames(games) {
  try {
    for (const game in games) {
      let currentGame = games[game];

      let price = currentGame.price;
      let owners = (currentGame.positive + currentGame.negative) * 50;
      let revenue = owners * price * 0.93 * 0.92 * 0.8 * 0.8 * 0.8;

      let gameMock = {
        name: currentGame.name,
        price: price,
        inital_price: currentGame.initialprice,
        revenue: revenue,
        positive_reviews: currentGame.positive,
        negative_reviews: currentGame.negative,
        owners: owners,
        developer_name: currentGame.developer,
        publisher_name: currentGame.publisher,
      };
      await Game.findOrCreate({
        where: { id: currentGame.appid },
        defaults: gameMock,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateGameInfoWithTags() {
  let idsArray = [];
  let idsLength = 0;
  let ONE_SECOND_AND_HALF = 1500;

  let gamesId = await Game.findAll({
    attributes: ["id"],
    // where: {
    //   id: { [Op.gte]: 567640 },
    // },
  });

  for (const game in gamesId) {
    let id = gamesId[game].id;
    idsArray.push(id);
  }
  idsLength = idsArray.length;
  console.log(idsArray);
  setInterval(async () => {
    try {
      let currentId = idsArray.shift();

      let steamSPYObj = await got.get(
        `https://steamspy.com/api.php?request=appdetails&appid=${currentId}`
      );
      let steamAPIObj = await got.get(
        `https://store.steampowered.com/api/appdetails?appids=${currentId}`
      );

      let steamSPY = JSON.parse(steamSPYObj.body);
      let steamAPI = JSON.parse(steamAPIObj.body);

      let tags = steamSPY.tags;

      addTagsToGame(currentId, tags);
      updateGameWithNewParams(currentId, steamAPI);
      idsLength--;
      if (idsLength <= 0) process.exit();
    } catch (error) {
      console.log(error);
    }
  }, ONE_SECOND_AND_HALF);
}

async function addTagsToGame(gameId, tagsObj) {
  for (const tag in tagsObj) {
    let name = tag;
    try {
      let currentTag = await Tag.findOne({
        where: { name: name },
      });

      let currentGame = await Game.findOne({
        where: { id: gameId },
      });

      await GamesTags.findOrCreate({
        where: {
          id_tag: currentTag.dataValues.id,
          id_game: currentGame.dataValues.id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

async function updateGameWithNewParams(id, steamAPI) {
  let gameData = steamAPI[id].data;

  let release_date = gameData.release_date.date || "";
  let website = gameData.website;
  let header_image = gameData.header_image;
  let about = gameData.about_the_game
    .replace(/(<([^>]+)>)/gi, "")
    .replace(/&quot;/g, '"')
    .replace(/\[(.*?)\]/g, "")
    .replace(/\【(.*?)\】/g, "");
  let short_description = gameData.short_description
    .replace(/(<([^>]+)>)/gi, "")
    .replace(/&quot;/g, '"')
    .replace(/\[(.*?)\]/g, "")
    .replace(/\【(.*?)\】/g, "");
  let detailed_description = gameData.detailed_description
    .replace(/(<([^>]+)>)/gi, "")
    .replace(/&quot;/g, '"')
    .replace(/\[(.*?)\]/g, "")
    .replace(/\【(.*?)\】/g, "");

  let newParansToGame = {
    release_date: release_date,
    website: website,
    header_image: header_image,
    about: about,
    short_description: short_description,
    detailed_description: detailed_description,
  };

  try {
    let game = await Game.findOne({
      where: { id: id },
    });

    game.update(newParansToGame);
  } catch (error) {
    console.log(error);
  }
}

// updateGameInfoWithTags();
calcTagInfos();
