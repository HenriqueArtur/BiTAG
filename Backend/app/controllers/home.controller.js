const { Game, Tag } = require("../models");
const sequelize = require("sequelize");

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

  let tags = []

  try {
    tags = await Tag.findAll({
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
      order: [[sequelize.literal("revenue"), "DESC"]],
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      message: error,
    });
  }
  
  let bigerPropotionalRevenue = 0;
  let bigerPropotionalRevenueName = '';
  let gamesCount = 0;
  let gamesCountName = '';
  let bigerHistoricalRevenue = 0;
  let bigerHistoricalRevenueName = '';

  for (const tag in tags) {
    if (Object.hasOwnProperty.call(tags, tag)) {
      const element = tags[tag].dataValues;
      const proportion = element.revenue/element.games_count;

      if(proportion > bigerPropotionalRevenue) {
        bigerPropotionalRevenue = proportion;
        bigerPropotionalRevenueName = element.name;
      }

      if(element.games_count > gamesCount) {
        gamesCount = element.games_count;
        gamesCountName = element.name;
      }

      if(element.revenue > bigerHistoricalRevenue) {
        bigerHistoricalRevenue = element.revenue;
        bigerHistoricalRevenueName = element.name;
      }
    }
  }
  
  /* PROPOTIONAL REVENUE */
  try {
    let propotionalQuery = {
      order: [["revenue", "DESC"]],
      include: [
        {
          model: Tag,
          as: "tag",
          attributes: ["id", "name"],
          where: { name: bigerPropotionalRevenueName },
          required: true,
        },
      ],
      limit: 5,
    };
  
    await Game.findAll(propotionalQuery).then(data => {
      response.proportionalRevenue = {
        tag: bigerPropotionalRevenueName,
        games: data
      }
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      message: error,
    });
  }

  /* Games quantitie */
  try {
    let quantitieQuery = {
      order: [["revenue", "DESC"]],
      include: [
        {
          model: Tag,
          as: "tag",
          attributes: ["id", "name"],
          where: { name: gamesCountName },
          required: true,
        },
      ],
      limit: 5,
    };
  
    await Game.findAll(quantitieQuery).then(data => {
      response.gamesCount = {
        tag: gamesCountName,
        games: data
      }
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      message: error,
    });
  }

  /* Historical Revenue */
  try {
    let historicalQuery = {
      order: [["revenue", "DESC"]],
      include: [
        {
          model: Tag,
          as: "tag",
          attributes: ["id", "name"],
          where: { name: bigerHistoricalRevenueName },
          required: true,
        },
      ],
      limit: 5,
    };
  
    await Game.findAll(historicalQuery).then(data => {
      response.historicalRevenue = {
        tag: bigerHistoricalRevenueName,
        games: data
      }
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      message: error,
    });
  }

  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      message: error,
    });
  }
}