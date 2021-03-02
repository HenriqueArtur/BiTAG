const tagController = require("../app/controllers/tag.controller.js");
const { Tag } = require("../app/models");

test("Persist TAG in the database", async () => {
  await Tag.destroy({
    where: {},
  });

  const tag = {
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

  let newTag = await Tag.create(tag);
  let testTag = await Tag.findAll({ where: { id: 1 } });
  expect(newTag).toEqual(testTag[0]);
});
