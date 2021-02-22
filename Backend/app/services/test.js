var fs = require("fs");
const { Game, Tag, Screenshot } = require("../models");

var imageData = fs.readFileSync("scroll.png");

Game.bulkCreate([
  {
    id: 1,
    name: "Teodoro",
    price: 2.0,
    inital_price: 2.0,
    revenue: 0,
    positive_reviews: 0,
    negative_reviews: 0,
    owners: 0,
    release_date: Date.now(),
    website: "oi",
    developer_name: "CosMonkeys",
    publisher_name: "CosMonkeys",
    header_image: imageData,
    about: "Jogo Muito bom",
    short_description: "Lindo",
    detailed_description: "Muito lindo",
  },
])
  .then((games) => {
    Tag.bulkCreate([
      {
        id: 1,
        name: "Cute",
        games_count: 10,
        revenue_0k_5k: 0.3,
        revenue_5k_25k: 0.3,
        revenue_25k_100k: 0.21,
        revenue_100k_200k: 0.19,
        revenue_200k_500k: 0.0,
        revenue_500k_1M: 0.0,
        revenue_1M_5M: 0.0,
        revenue_5M: 0.0,
      },
      {
        id: 2,
        name: "Fofo",
        games_count: 1,
        revenue_0k_5k: 0.3,
        revenue_5k_25k: 0.3,
        revenue_25k_100k: 0.21,
        revenue_100k_200k: 0.19,
        revenue_200k_500k: 0.0,
        revenue_500k_1M: 0.0,
        revenue_1M_5M: 0.0,
        revenue_5M: 0.0,
      },
      {
        id: 3,
        name: "Sokoban",
        games_count: 10,
        revenue_0k_5k: 0.3,
        revenue_5k_25k: 0.3,
        revenue_25k_100k: 0.21,
        revenue_100k_200k: 0.19,
        revenue_200k_500k: 0.0,
        revenue_500k_1M: 0.0,
        revenue_1M_5M: 0.0,
        revenue_5M: 0.0,
      },
    ]).then((tags) => {
      games
        .forEach((game) => {
          tags.forEach((tag) => {
            game.addTag(tag);
          });
          console.log(game);
        })
        .catch((err) => console.log(`Erro add: ${err}`));
    });
  })
  .catch((err) => console.log(`Erro games: ${err}`));
