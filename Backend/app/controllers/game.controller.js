const { Game, Tag } = require("../models");
const { Op } = require("sequelize");

exports.findAll = (req, res) => {
  let order = req.query.order;
  let page = req.query.page;

  let query = {
    order: [["id", "ASC"]],
    offset: (page == null ? 0 : page) * 100,
    limit: 100,
    include: [
      {
        model: Tag,
        as: "tag",
        attributes: ["id", "name"],
      },
    ],
  };

  if (order) {
    switch (order) {
      case "AZ-ASC":
        query.order = [["name", "ASC"]];
        break;

      case "AZ-DESC":
        query.order = [["name", "DESC"]];
        break;

      case "price-ASC":
        query.order = [["price", "ASC"]];
        break;

      case "price-DESC":
        query.order = [["price", "DESC"]];
        break;

      case "revenue-ASC":
        query.order = [["revenue", "ASC"]];
        break;

      case "revenue-DESC":
        query.order = [["revenue", "DESC"]];
        break;

      case "positive_reviews-ASC":
        query.order = [["positive_reviews", "ASC"]];
        break;

      case "positive_reviews-DESC":
        query.order = [["positive_reviews", "DESC"]];
        break;

      case "negative_reviews-ASC":
        query.order = [["negative_reviews", "ASC"]];
        break;

      case "negative_reviews-DESC":
        query.order = [["negative_reviews", "DESC"]];
        break;

      case "owners-ASC":
        query.order = [["owners", "ASC"]];
        break;

      case "owners-DESC":
        query.order = [["owners", "DESC"]];
        break;

      default:
        break;
    }
  }

  Game.findAll(query)
    .then((data) => {
      console.log(data.length);
      console.log((page == null ? 0 : page) * 100);
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
  let order = req.query.order;

  let query = {
    order: [["id", "ASC"]],
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
  };

  if (order) {
    switch (order) {
      case "AZ-ASC":
        query.order = [["name", "ASC"]];
        break;

      case "AZ-DESC":
        query.order = [["name", "DESC"]];
        break;

      case "price-ASC":
        query.order = [["price", "ASC"]];
        break;

      case "price-DESC":
        query.order = [["price", "DESC"]];
        break;

      case "revenue-ASC":
        query.order = [["revenue", "ASC"]];
        break;

      case "revenue-DESC":
        query.order = [["revenue", "DESC"]];
        break;

      case "positive_reviews-ASC":
        query.order = [["positive_reviews", "ASC"]];
        break;

      case "positive_reviews-DESC":
        query.order = [["positive_reviews", "DESC"]];
        break;

      case "negative_reviews-ASC":
        query.order = [["negative_reviews", "ASC"]];
        break;

      case "negative_reviews-DESC":
        query.order = [["negative_reviews", "DESC"]];
        break;

      case "owners-ASC":
        query.order = [["owners", "ASC"]];
        break;

      case "owners-DESC":
        query.order = [["owners", "DESC"]];
        break;

      default:
        break;
    }
  }

  Game.findAll(query)
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
  let order = req.query.order;

  let query = {
    order: [["id", "ASC"]],
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
  };

  if (order) {
    switch (order) {
      case "AZ-ASC":
        query.order = [["name", "ASC"]];
        break;

      case "AZ-DESC":
        query.order = [["name", "DESC"]];
        break;

      case "price-ASC":
        query.order = [["price", "ASC"]];
        break;

      case "price-DESC":
        query.order = [["price", "DESC"]];
        break;

      case "revenue-ASC":
        query.order = [["revenue", "ASC"]];
        break;

      case "revenue-DESC":
        query.order = [["revenue", "DESC"]];
        break;

      case "positive_reviews-ASC":
        query.order = [["positive_reviews", "ASC"]];
        break;

      case "positive_reviews-DESC":
        query.order = [["positive_reviews", "DESC"]];
        break;

      case "negative_reviews-ASC":
        query.order = [["negative_reviews", "ASC"]];
        break;

      case "negative_reviews-DESC":
        query.order = [["negative_reviews", "DESC"]];
        break;

      case "owners-ASC":
        query.order = [["owners", "ASC"]];
        break;

      case "owners-DESC":
        query.order = [["owners", "DESC"]];
        break;

      default:
        break;
    }
  }

  Game.findAll(query)
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
  let order = req.query.order;

  let query = {
    order: [["id", "ASC"]],
    include: [
      {
        model: Tag,
        as: "tag",
        where: { name: tags },
        attributes: ["id", "name"],
        through: {},
      },
    ],
  };

  if (order) {
    switch (order) {
      case "AZ-ASC":
        query.order = [["name", "ASC"]];
        break;

      case "AZ-DESC":
        query.order = [["name", "DESC"]];
        break;

      case "price-ASC":
        query.order = [["price", "ASC"]];
        break;

      case "price-DESC":
        query.order = [["price", "DESC"]];
        break;

      case "revenue-ASC":
        query.order = [["revenue", "ASC"]];
        break;

      case "revenue-DESC":
        query.order = [["revenue", "DESC"]];
        break;

      case "positive_reviews-ASC":
        query.order = [["positive_reviews", "ASC"]];
        break;

      case "positive_reviews-DESC":
        query.order = [["positive_reviews", "DESC"]];
        break;

      case "negative_reviews-ASC":
        query.order = [["negative_reviews", "ASC"]];
        break;

      case "negative_reviews-DESC":
        query.order = [["negative_reviews", "DESC"]];
        break;

      case "owners-ASC":
        query.order = [["owners", "ASC"]];
        break;

      case "owners-DESC":
        query.order = [["owners", "DESC"]];
        break;

      default:
        break;
    }
  }

  Game.findAll(query)
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
  let order = req.query.order;

  let filters = {
    order: [["id", "ASC"]],
    include: [
      {
        model: Tag,
        as: "tag",
        attributes: ["id", "name"],
      },
    ],
    where: {},
  };

  if (order) {
    switch (order) {
      case "AZ-ASC":
        filters.order = [["name", "ASC"]];
        break;

      case "AZ-DESC":
        filters.order = [["name", "DESC"]];
        break;

      case "price-ASC":
        filters.order = [["price", "ASC"]];
        break;

      case "price-DESC":
        filters.order = [["price", "DESC"]];
        break;

      case "revenue-ASC":
        filters.order = [["revenue", "ASC"]];
        break;

      case "revenue-DESC":
        filters.order = [["revenue", "DESC"]];
        break;

      case "positive_reviews-ASC":
        filters.order = [["positive_reviews", "ASC"]];
        break;

      case "positive_reviews-DESC":
        filters.order = [["positive_reviews", "DESC"]];
        break;

      case "negative_reviews-ASC":
        filters.order = [["negative_reviews", "ASC"]];
        break;

      case "negative_reviews-DESC":
        filters.order = [["negative_reviews", "DESC"]];
        break;

      case "owners-ASC":
        filters.order = [["owners", "ASC"]];
        break;

      case "owners-DESC":
        filters.order = [["owners", "DESC"]];
        break;

      default:
        break;
    }
  }

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
