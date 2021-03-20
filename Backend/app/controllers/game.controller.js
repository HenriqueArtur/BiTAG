const { Game, Tag } = require("../models");
const { Op } = require("sequelize");

exports.findAll = (req, res) => {
  Game.findAll({
    include: [
      {
        model: Tag,
        as: "tag",
        attributes: ["id", "name"],
      },
    ],
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

exports.findByName = (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.status(400).send({
      status: 400,
      message: "Bad Request!",
    });
  }
  let games = req.query.names.split(",");
  Game.findAll({
    include: [
      {
        model: Tag,
        as: "tag",
        attributes: ["id", "name"],
      },
    ],
    where: {
      name: games,
    },
  })
    .then((data) => {
      if (data.length == 0)
        res.status(404).send({
          status: 404,
          message: "Not Found",
        });
      else res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Params not valid!",
      });
    });
};

exports.findByAppId = (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.status(400).send({
      status: 400,
      message: "Bad Request!",
    });
  }
  let ids = req.query.ids.split(",");
  Game.findAll({
    include: [
      {
        model: Tag,
        as: "tag",
        attributes: ["id", "name"],
      },
    ],
    where: {
      id: ids,
    },
  })
    .then((data) => {
      if (data.length == 0)
        res.status(404).send({
          status: 404,
          message: "Not Found",
        });
      else res.send(data);
    })
    .catch((err) => {
      console.log(err);

      res.status(500).send({
        message: "Params not valid!",
      });
    });
};

exports.findByTags = (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.status(400).send({
      status: 400,
      message: "Bad Request!",
    });
  }
  let tags = req.query.tags.split(",");
  Game.findAll({
    include: [
      {
        model: Tag,
        as: "tag",
        where: { name: tags },
        attributes: ["id", "name"],
        through: {},
      },
    ],
  })
    .then((data) => {
      if (data.length == 0)
        res.status(404).send({
          status: 404,
          message: "Not Found",
        });
      else res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Params not valid!",
      });
    });
};

exports.findByParams = (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.status(400).send({
      status: 400,
      message: "Bad Request!",
    });
  }
  let tags = req.query.tags ? req.query.tags.split(",") : [];
  let ids = req.query.ids ? req.query.ids.split(",") : [];
  let names = req.query.names ? req.query.names.split(",") : [];
  let revenue = req.query.revenue;
  let reviewsPositive = req.query.positive_reviews;
  let reviewsNegative = req.query.negative_reviews;
  let owners = req.query.owners;

  let filters = {
    include: [
      {
        model: Tag,
        as: "tag",
        attributes: ["id", "name"],
      },
    ],
    where: {},
  };

  if (tags.length > 0) {
    let tagQuery = filters["include"][0];
    let findTags = {
      where: { name: tags },
      through: {},
    };
    Object.assign(tagQuery, findTags);
  }

  if (ids.length > 0) {
    let idsQuery = filters["where"];
    let idsTags = {
      id: ids,
    };
    Object.assign(idsQuery, idsTags);
  }

  if (names.length > 0) {
    let namesQuery = filters["where"];
    let findNames = {
      name: names,
    };
    Object.assign(namesQuery, findNames);
  }

  if (revenue) {
    let revenueQuery = filters["where"];
    let revenueOp = {
      revenue: { [Op.gte]: revenue },
    };
    Object.assign(revenueQuery, revenueOp);
  }

  if (reviewsPositive) {
    let reviewsPositiveQuery = filters["where"];
    let reviewsPositiveOp = {
      positive_reviews: { [Op.gte]: reviewsPositive },
    };
    Object.assign(reviewsPositiveQuery, reviewsPositiveOp);
  }

  if (reviewsNegative) {
    let reviewsNegativeQuery = filters["where"];
    let reviewsNegativeOp = {
      negative_reviews: { [Op.gte]: reviewsNegative },
    };
    Object.assign(reviewsNegativeQuery, reviewsNegativeOp);
  }

  if (owners) {
    let ownersQuery = filters["where"];
    let ownersOp = {
      owners: { [Op.gte]: owners },
    };
    Object.assign(ownersQuery, ownersOp);
  }

  Game.findAll(filters)
    .then((data) => {
      if (data.length == 0)
        res.status(404).send({
          status: 404,
          message: "Not Found",
        });
      else res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Params not valid!",
      });
    });
};
