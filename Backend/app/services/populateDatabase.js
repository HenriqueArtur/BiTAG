const got = require("got");
const { Game, Screenshot, Tag, GamesTags } = require("../models");

exports.populateDatabase = async (timeOut, lastPagSteamSpy, range) => {
  const steamSpy = "https://steamspy.com/api.php?request=all&page=";
  const storeFront = "https://store.steampowered.com/api/appdetails?appids=";
  const tagsURI = "https://steamspy.com/api.php?request=appdetails&appid=";

  for (let i = lastPagSteamSpy; i >= lastPagSteamSpy - range; i--) {
    await getGames(steamSpy + i, storeFront, tagsURI);
  }

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
        console.log(tags);

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
