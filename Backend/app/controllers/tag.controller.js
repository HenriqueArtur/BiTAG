const { Op } = require("sequelize");
const { Tag } = require("../models");

exports.findAll = (req, res) => {
  Tag.findAll()
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
  let tags = req.query.tags.split(",");
  Tag.findAll({
    where: {
      name: tags,
    },
  })
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
  let query = {};
  let revenueQuery = [];

  if (req.query.tags) {
    let tagsArray = req.query.tags.split(",");
    let tagsObj = { name: tagsArray };
    Object.assign(query, tagsObj);
  }

  if (req.query.revenue_0k_5k) {
    let revenue = { revenue_0k_5k: { [Op.gt]: 0 } };
    revenueQuery.push(revenue);
  }

  if (req.query.revenue_5k_25k) {
    let revenue = { revenue_5k_25k: { [Op.gt]: 0 } };
    revenueQuery.push(revenue);
  }

  if (req.query.revenue_25k_100k) {
    let revenue = { revenue_25k_100k: { [Op.gt]: 0 } };
    revenueQuery.push(revenue);
  }

  if (req.query.revenue_100k_200k) {
    let revenue = { revenue_100k_200k: { [Op.gt]: 0 } };
    revenueQuery.push(revenue);
  }

  if (req.query.revenue_200k_500k) {
    let revenue = { revenue_200k_500k: { [Op.gt]: 0 } };
    revenueQuery.push(revenue);
  }

  if (req.query.revenue_500k_1M) {
    let revenue = { revenue_500k_1M: { [Op.gt]: 0 } };
    revenueQuery.push(revenue);
  }

  if (req.query.revenue_1M_5M) {
    let revenue = { revenue_1M_5M: { [Op.gt]: 0 } };
    revenueQuery.push(revenue);
  }

  if (req.query.revenue_5M) {
    let revenue = { revenue_5M: { [Op.gt]: 0 } };
    revenueQuery.push(revenue);
  }

  if (req.query.games_count) {
    let count = { games_count: { [Op.gte]: req.query.games_count } };
    Object.assign(query, count);
  }

  if (revenueQuery.length > 0) {
    let orOperation = { [Op.or]: revenueQuery };
    Object.assign(query, orOperation);
  }

  console.log(query);

  Tag.findAll({
    where: query,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
