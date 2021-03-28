const { Game, Tag } = require("../models");
const { Op } = require("sequelize");

exports.getInfos = async (req, res) => {
    if (Object.keys(req.query).length > 0) {
        res.status(400).send({
          status: 400,
          message: "Bad Request!",
        });
      }

      let response = {
        proportionalRevenue: {},
        gamesCount: {},
        historicalRevenue: {},
      }

      let tags = await Tag.findAll({
        group: ["Tag.name"],
        include: [
            {
              model: Game,
              as: "game",
              attributes: ["revenue"],
              required: false,
            },
          ],
        attributes: [
            [sequelize.fn("SUM", sequelize.col("Game.revenue")), "revenue"],
            "id",
            "name",
            "games_count",
            "revenue_0k_5k",
            "revenue_5k_25k",
            "revenue_25k_100k",
            "revenue_100k_200k",
            "revenue_200k_500k",
            "revenue_500k_1M",
            "revenue_1M_5M",
            "revenue_5M",
          ],
        order: [[sequelize.literal("revenue"), "ASC"]],
      })
}