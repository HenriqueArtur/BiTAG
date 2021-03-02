const got = require("got");
const { Game } = require("../models");

exports.populateDatabase = (timeOut) => {
  const steamSpy = "https://steamspy.com/api.php?request=all&page=1";
  const storeFront = "https://store.steampowered.com/api/appdetails?appids=";

  getGames(steamSpy, storeFront);
};

async function getGames(steamSpy, storeFront) {
  let games;
  try {
    let sp = await got.get(steamSpy);
    let spJSON = JSON.parse(sp.body);

    let count = 1;

    await Game.destroy({
      where: {},
    });

    for (var k in spJSON) {
      if (count < 10) {
        let sf = await got.get(`${storeFront}${spJSON[k].appid}`);
        let sfJSON = JSON.parse(sf.body);
        let sfObj = sfJSON[spJSON[k].appid];

        let price = spJSON[k].price;

        let owners = (spJSON[k].positive + spJSON[k].negative) * 50;

        let revenue = owners * price * 0.93 * 0.92 * 0.8 * 0.8 * 0.8;

        let dateToConvert = sfObj.data.release_date.date.replace(/,/g, "");
        let release_date = convertDateStringToNumber(dateToConvert);

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
          id: spJSON[k].appid,
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
          Game.create(game);
        } catch (error) {
          console.log(error);
        }
        count++;
      }
    }
  } catch (error) {
    console.log(error.response.body);
  }
}

function convertDateStringToNumber(date) {
  let months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  for (let month in months) {
    if (date.includes(month)) {
      let newDate = date
        .replace(month, months[month])
        .split(" ")
        .reverse()
        .join("-");
      let dataTypeDate = new Date(newDate);
      return dataTypeDate;
    }
  }
}
