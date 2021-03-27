const { Op } = require("sequelize");
const { Tag, Game } = require("../models");
const sequelize = require("sequelize");

exports.findAll = (req, res) => {
  let order = req.query.order;

  let query = {
    order: [["id", "ASC"]],
  };

  if (order) {
    switch (order) {
      case "AZ-ASC":
        query.order = [["name", "ASC"]];
        break;

      case "AZ-DESC":
        query.order = [["name", "DESC"]];
        break;

      case "games_count-ASC":
        query.order = [["games_count", "ASC"]];
        break;

      case "games_count-DESC":
        query.order = [["games_count", "DESC"]];
        break;

      case "revenue-ASC":
        query.group = ["Tag.name"];
        query.include = [
          {
            model: Game,
            as: "game",
            attributes: ["revenue"],
            required: false,
            right: false,
          },
        ];
        query.attributes = [
          [sequelize.fn("SUM", sequelize.col("Game.revenue")), "revenue"],
          "id",
          "games_count",
          "revenue_0k_5k",
          "revenue_5k_25k",
          "revenue_25k_100k",
          "revenue_100k_200k",
          "revenue_200k_500k",
          "revenue_500k_1M",
          "revenue_1M_5M",
          "revenue_5M",
        ];
        query.order = [[sequelize.literal("revenue"), "ASC"]];

        Tag.findAll(query)
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message,
            });
          });
        break;

      case "revenue-DESC":
        query.group = ["Tag.name"];
        query.include = [
          {
            model: Game,
            as: "game",
            attributes: ["revenue"],
            required: false,
            right: false,
          },
        ];
        query.attributes = [
          [sequelize.fn("SUM", sequelize.col("Game.revenue")), "revenue"],
          "id",
          "games_count",
          "revenue_0k_5k",
          "revenue_5k_25k",
          "revenue_25k_100k",
          "revenue_100k_200k",
          "revenue_200k_500k",
          "revenue_500k_1M",
          "revenue_1M_5M",
          "revenue_5M",
        ];
        query.order = [[sequelize.literal("revenue"), "DESC"]];

        Tag.findAll(query)
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message,
            });
          });
        break;

      default:
        break;
    }
  }

  Tag.findAll(query)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findByName = (req, res) => {
  if (Object.keys(req.query).length === 0 || req.query.tags == null) {
    res.status(400).send({
      status: 400,
      message: "Bad Request!",
    });
  }
  let tags = req.query.tags.split(",");
  let order = req.query.order;

  let query = {
    order: [["id", "ASC"]],
    where: {
      name: tags,
    },
  };

  if (order) {
    switch (order) {
      case "AZ-ASC":
        query.order = [["name", "ASC"]];
        break;

      case "AZ-DESC":
        query.order = [["name", "DESC"]];
        break;

      case "games_count-ASC":
        query.order = [["games_count", "ASC"]];
        break;

      case "games_count-DESC":
        query.order = [["games_count", "DESC"]];
        break;

      case "revenue-ASC":
        query.group = ["Tag.name"];
        query.include = [
          {
            model: Game,
            as: "game",
            attributes: ["revenue"],
            required: false,
            right: false,
          },
        ];
        query.attributes = [
          [sequelize.fn("SUM", sequelize.col("Game.revenue")), "revenue"],
          "id",
          "games_count",
          "revenue_0k_5k",
          "revenue_5k_25k",
          "revenue_25k_100k",
          "revenue_100k_200k",
          "revenue_200k_500k",
          "revenue_500k_1M",
          "revenue_1M_5M",
          "revenue_5M",
        ];
        query.order = [[sequelize.literal("revenue"), "ASC"]];

        Tag.findAll(query)
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message,
            });
          });
        break;

      case "revenue-DESC":
        query.group = ["Tag.name"];
        query.include = [
          {
            model: Game,
            as: "game",
            attributes: ["revenue"],
            required: false,
            right: false,
          },
        ];
        query.attributes = [
          [sequelize.fn("SUM", sequelize.col("Game.revenue")), "revenue"],
          "id",
          "games_count",
          "revenue_0k_5k",
          "revenue_5k_25k",
          "revenue_25k_100k",
          "revenue_100k_200k",
          "revenue_200k_500k",
          "revenue_500k_1M",
          "revenue_1M_5M",
          "revenue_5M",
        ];
        query.order = [[sequelize.literal("revenue"), "DESC"]];

        Tag.findAll(query)
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message,
            });
          });
        break;

      default:
        break;
    }
  }

  Tag.findAll(query)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findByOptions = (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.status(400).send({
      status: 400,
      message: "Bad Request!",
    });
  }

  let query = {
    order: [["id", "ASC"]],
  };

  let where = {};
  let revenueQuery = [];

  if (req.query.tags) {
    let tagsArray = req.query.tags.split(",");
    let tagsObj = { name: tagsArray };
    Object.assign(where, tagsObj);
  }

  if (req.query.revenue) {
    let filtersArray = req.query.revenue.split(",");
    filtersArray.forEach((element) => {
      let obj = {
        [element]: { [Op.gt]: 0 },
      };
      revenueQuery.push(obj);
    });
  }

  if (req.query.games_count) {
    let count = { games_count: { [Op.gte]: req.query.games_count } };
    Object.assign(where, count);
  }

  if (revenueQuery.length > 0) {
    let orOperation = { [Op.or]: revenueQuery };
    Object.assign(where, orOperation);
  }

  query.where = where;

  let order = req.query.order;
  if (order) {
    switch (order) {
      case "AZ-ASC":
        query.order = [["name", "ASC"]];
        break;

      case "AZ-DESC":
        query.order = [["name", "DESC"]];
        break;

      case "games_count-ASC":
        query.order = [["games_count", "ASC"]];
        break;

      case "games_count-DESC":
        query.order = [["games_count", "DESC"]];
        break;

      case "revenue-ASC":
        query.group = ["Tag.name"];
        query.include = [
          {
            model: Game,
            as: "game",
            attributes: ["revenue"],
            required: false,
            right: false,
          },
        ];
        query.attributes = [
          [sequelize.fn("SUM", sequelize.col("Game.revenue")), "revenue"],
          "id",
          "games_count",
          "revenue_0k_5k",
          "revenue_5k_25k",
          "revenue_25k_100k",
          "revenue_100k_200k",
          "revenue_200k_500k",
          "revenue_500k_1M",
          "revenue_1M_5M",
          "revenue_5M",
        ];
        query.order = [[sequelize.literal("revenue"), "ASC"]];

        Tag.findAll(query)
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message,
            });
          });
        break;

      case "revenue-DESC":
        query.group = ["Tag.name"];
        query.include = [
          {
            model: Game,
            as: "game",
            attributes: ["revenue"],
            required: false,
            right: false,
          },
        ];
        query.attributes = [
          [sequelize.fn("SUM", sequelize.col("Game.revenue")), "revenue"],
          "id",
          "games_count",
          "revenue_0k_5k",
          "revenue_5k_25k",
          "revenue_25k_100k",
          "revenue_100k_200k",
          "revenue_200k_500k",
          "revenue_500k_1M",
          "revenue_1M_5M",
          "revenue_5M",
        ];
        query.order = [[sequelize.literal("revenue"), "DESC"]];

        Tag.findAll(query)
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message,
            });
          });
        break;

      default:
        break;
    }
  }

  Tag.findAll(query)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
