const got = require("got");
const { Op } = require("sequelize");
const { Game, Screenshot, Tag, GamesTags } = require("../models");

exports.populateDatabase = async (timeOut, lastPagSteamSpy, range) => {
  const steamSpy = "https://steamspy.com/api.php?request=all&page=";
  const storeFront = "https://store.steampowered.com/api/appdetails?appids=";
  const tagsURI = "https://steamspy.com/api.php?request=appdetails&appid=";

  // try {
  //   new Promise(() => {
  //     for (let i = lastPagSteamSpy; i >= lastPagSteamSpy - range; i--) {
  //       setInterval(async() => {
  //         await getGames(steamSpy + i, storeFront, tagsURI);
  //       }, 50)
  //     }
  //   }).then(() => {
  //     calcTagInfos();
  //   })
  // } catch (error) {
  //   calcTagInfos();
  // }

  calcTagInfos();

  // setInterval(() => {
  //   this.populateDatabase(timeOut, lastPagSteamSpy, range);
  // }, timeOut);
};

async function getGames(steamSpy, storeFront, tagsURI) {
  try {
    // await GamesTags.destroy({
    //   where: {},
    // });
    // await Screenshot.destroy({
    //   where: {},
    // });
    // await Game.destroy({
    //   where: {},
    // });
    // await Tag.destroy({
    //   where: {},
    // });

    let sp = await got.get(steamSpy);
    let spJSON = await JSON.parse(sp.body);

    for (var k in spJSON) {
      let sf = await got.get(`${storeFront}${spJSON[k].appid}`);
      let sfJSON = JSON.parse(sf.body);
      let sfObj = sfJSON[spJSON[k].appid];

      if (sfObj.data) {
        let tagsReq = await got.get(`${tagsURI}${spJSON[k].appid}`);
        let tagsJSON = JSON.parse(tagsReq.body);
        let tags = tagsJSON.tags;
        // console.log(tags);

        let screenshots = sfObj.data.screenshots;

        let price = spJSON[k].price;

        let owners = (spJSON[k].positive + spJSON[k].negative) * 50;

        let revenue = owners * price * 0.93 * 0.92 * 0.8 * 0.8 * 0.8;

        // let dateToConvert = sfObj.data.release_date.date.replace(/,/g, "");
        // let release_date = convertDateStringToNumber(dateToConvert);
        let release_date = sfObj.data.release_date.date;

        let about = sfObj.data.about_the_game
          .replace(/<[^>]*>?/gm, "")
          .replace(/&quot;/g, '"');

        let short_description = sfObj.data.short_description
          .replace(/<[^>]*>?/gm, "")
          .replace(/&quot;/g, '"');

        let detailed_description = sfObj.data.detailed_description
          .replace(/<[^>]*>?/gm, "")
          .replace(/&quot;/g, '"');

        const game = {
          name: spJSON[k].name,
          price: price,
          inital_price: spJSON[k].initialprice,
          revenue: revenue,
          positive_reviews: spJSON[k].positive,
          negative_reviews: spJSON[k].negative,
          owners: owners,
          release_date: release_date,
          website: sfObj.data.website,
          developer_name: spJSON[k].developer,
          publisher_name: spJSON[k].publisher,
          header_image: sfObj.data.header_image,
          about: about,
          short_description: short_description,
          detailed_description: detailed_description,
        };
        try {
          let currentGame = await Game.findOrCreate({
            where: { id: spJSON[k].appid },
            defaults: game,
          });

          for (let src in screenshots) {
            await Screenshot.findOrCreate({
              where: {
                id: parseInt(screenshots[src].id, 10),
                id_game: currentGame[0].dataValues.id,
              },
              attributes: [`id`, `image`, `id_game`, `createdAt`, `updatedAt`],
              defaults: { image: screenshots[src].path_full },
            });
          }

          for (let tag in tags) {
            let currentTag = await Tag.findOrCreate({
              where: {
                name: tag,
              },
            });
            await GamesTags.findOrCreate({
              where: {
                id_game: currentGame[0].dataValues.id,
                id_tag: currentTag[0].dataValues.id,
              },
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function calcTagInfos() {
  let allTags = await Tag.findAll();
  try {
    for (const tag in allTags) {
      let gamesCount = await Game.findAndCountAll({
        include: [
          {
            model: Tag,
            as: "tag",
            where: { id: allTags[tag].dataValues.id },
          },
        ],
      });
  
      let revenue_0k_5k     = await getGamesByRevenue(0, 500000);
      let revenue_5k_25k    = await getGamesByRevenue(500001, 2500000);
      let revenue_25k_100k  = await getGamesByRevenue(2500001, 10000000);
      let revenue_100k_200k = await getGamesByRevenue(10000001, 20000000);
      let revenue_200k_500k = await getGamesByRevenue(20000001, 50000000);
      let revenue_500k_1M   = await getGamesByRevenue(50000001, 100000000);
      let revenue_1M_5M     = await getGamesByRevenue(100000001, 500000000);
      let revenue_5M        = await getGamesByRevenue(500000001);
  
      let revenueCount =
        revenue_0k_5k
        + revenue_5k_25k
        + revenue_25k_100k
        + revenue_100k_200k
        + revenue_200k_500k
        + revenue_500k_1M
        + revenue_1M_5M
        + revenue_5M;
      
      await allTags[tag].update({
        games_count: gamesCount.count,
        revenue_0k_5k: revenue_0k_5k/revenueCount,
        revenue_5k_25k: revenue_5k_25k/revenueCount,
        revenue_25k_100k: revenue_25k_100k/revenueCount,
        revenue_100k_200k: revenue_100k_200k/revenueCount,
        revenue_200k_500k: revenue_200k_500k/revenueCount,
        revenue_500k_1M: revenue_500k_1M/revenueCount,
        revenue_1M_5M: revenue_1M_5M/revenueCount,
        revenue_5M: revenue_5M/revenueCount,
      })
    }
  } catch (error) {
    console.log(error);
  }
}

async function getGamesByRevenue(min, max) {
  let revenue = await Game.findAndCountAll({
    where: { revenue: { [Op.between]: [min, max] } },
  });
  return revenue.count;
}

async function getGamesByRevenue(max) {
  let revenue = await Game.findAndCountAll({
    where: { revenue: { [Op.gte]: max } },
  });
  return revenue.count;
}

// function convertDateStringToNumber(date) {
//   let months = {
//     Jan: "01",
//     Feb: "02",
//     Mar: "03",
//     Apr: "04",
//     May: "05",
//     Jun: "06",
//     Jul: "07",
//     Aug: "08",
//     Sep: "09",
//     Oct: "10",
//     Nov: "11",
//     Dec: "12",
//   };

//   for (let month in months) {
//     if (date.includes(month)) {
//       let newDate = date
//         .replace(month, months[month])
//         .split(" ")
//         .reverse()
//         .join("-");
//       let dataTypeDate = new Date(newDate);
//       return dataTypeDate;
//     }
//   }
// }

// async function createOrUpdate(model, parnsTofind, paransToCreate) {
//   await model.findOne({ where: parnsTofind }).then(async (game) => {
//     if (game) return await game.Update(paransToCreate);
//     return await model.findOrCreate({
//       where: { id: parnsTofind },
//       defaults: paransToCreate,
//     });
//   });
// }
