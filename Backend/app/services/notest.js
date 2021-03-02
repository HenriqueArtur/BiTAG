const Tags = require("../controllers/tag.controller.js");
const { Tag } = require("../models");

let tagTest1 = {
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
};

let tagTest2 = [
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
];

async function a() {
  await Tag.destroy({
    where: {},
  });

  await Tags.create(tagTest1);
  await Tags.createMany(tagTest2);

  console.log(await Tags.findById(1));
}

a();
