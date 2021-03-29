const { Game, Tag } = require("../models");
const { Op } = require("sequelize");
var db = require("../models/index.js");

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
      res.setHeader("All-Games", 2391);
      res.setHeader("Games-Found", data.length);
      res.setHeader("Page", (page == null ? 1 : parseInt(page)) );
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        status: 500,
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
      else {
        res.setHeader("Games-Found", data.length);
        res.send(data);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: 500,
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
      else {
        res.setHeader("Games-Found", data.length);
        res.send(data);
      }
    })
    .catch((err) => {
      console.log(err);

      res.status(500).send({
        status: 500,
        message: "Params not valid!",
      });
    });
};

exports.findByTags = async (req, res) => {
  if (Object.keys(req.query).length === 0 || !("tags" in req.query)) {
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
        attributes: ["id", "name"],
        where: {
          name: { [Op.or]: tags }
        }
        // where: { name: tags },
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

  // console.log(await search_games_by_tags(tags));
  let newdata = await search_games_by_tags(tags);

  Game.findAll(query)
    .then((data) => {
      if (data.length == 0)
        res.status(404).send({
          status: 404,
          message: "Not Found",
        });
      else {
        res.setHeader("Games-Found", data.length);
        res.send(newdata);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: 500,
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
      else {
        res.setHeader("Games-Found", data.length);
        res.send(data);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: 500,
        message: "Params not valid!",
      });
    });
};

exports.search = (req, res) => {
  if (Object.keys(req.query).length === 0 || !("search" in req.query)) {
    res.status(400).send({
      status: 400,
      message: "Bad Request!",
    });
  }

  let search = req.query.search;

  let query = {
    order: [["name", "ASC"]],
    include: [
      {
        model: Tag,
        as: "tag",
        attributes: ["id", "name"],
      },
    ],
    where: {
      name: { [Op.like]: `%${search}%` }
    },
  };

  try {
    Game.findAll(query)
      .then(data => {
        if (data.length == 0 || data == undefined)
          res.status(404).send({
            status: 404,
            message: "Not Found",
          });
        else {
          res.setHeader("Games-Found", data.length);
          res.send(data);
        }
      })
  } catch (error) {
    console.log(err);
      res.status(500).send({
        status: 500,
        message: "Error on server",
      });   
  }
}

async function search_games_by_tags(search_tags = []){
  // console.log(search_tags);
  search_tags = search_tags
    .filter(s => typeof s === 'string')
    .map(s => s.replace(/'/g, ''));
  let results = await db.sequelize.query(`
    SELECT
      g.id                   AS game_id,
      g.name                 AS game_name,
      g.price                AS game_price,
      g.inital_price         AS game_inital_price,
      g.revenue              AS game_revenue,
      g.positive_reviews     AS game_positive_reviews,
      g.negative_reviews     AS game_negative_reviews,
      g.owners               AS game_owners,
      g.release_date         AS game_release_date,
      g.website              AS game_website,
      g.developer_name       AS game_developer_name,
      g.publisher_name       AS game_publisher_name,
      g.header_image         AS game_header_image,
      g.about                AS game_about,
      g.short_description    AS game_short_description,
      g.detailed_description AS game_detailed_description,

      t.id                AS tag_id,
      t.name              AS tag_name,
      t.games_count       AS tag_games_count,
      t.revenue_0k_5k     AS tag_revenue_0k_5k,
      t.revenue_5k_25k    AS tag_revenue_5k_25k,
      t.revenue_25k_100k  AS tag_revenue_25k_100k,
      t.revenue_100k_200k AS tag_revenue_100k_200k,
      t.revenue_200k_500k AS tag_revenue_200k_500k,
      t.revenue_500k_1M   AS tag_revenue_500k_1M,
      t.revenue_1M_5M     AS tag_revenue_1M_5M,
      t.revenue_5M        AS tag_revenue_5M

    FROM games AS g
    JOIN gamestags AS gt
    ON g.id = gt.id_game
    LEFT JOIN tags AS t
    ON t.id = gt.id_tag
    ${search_tags.length > 0
      ? `WHERE (${search_tags.map(s => `t.name LIKE '%${s}%'`).join(' OR ')})`
      : ''
    }
    ORDER BY g.id
  `, { type: db.sequelize.QueryTypes.SELECT })

  let games = [], this_game = {}
  for(let line of results){
    if(this_game.id !== line.game_id){
      if(this_game.id){
        games.push({ ...this_game })
      }
      this_game = {
        id:                   line.game_id,
        name:                 line.game_name,
        price:                line.game_price,
        inital_price:         line.game_inital_price,
        revenue:              line.game_revenue,
        positive_reviews:     line.game_positive_reviews,
        negative_reviews:     line.game_negative_reviews,
        owners:               line.game_owners,
        release_date:         line.game_release_date,
        website:              line.game_website,
        developer_name:       line.game_developer_name,
        publisher_name:       line.game_publisher_name,
        header_image:         line.game_header_image,
        about:                line.game_about,
        short_description:    line.game_short_description,
        detailed_description: line.game_detailed_description,
        tags: [
          {
            id:                line.tag_id,
            name:              line.tag_name,
            games_count:       line.tag_games_count,
            revenue_0k_5k:     line.tag_revenue_0k_5k,
            revenue_5k_25k:    line.tag_revenue_5k_25k,
            revenue_25k_100k:  line.tag_revenue_25k_100k,
            revenue_100k_200k: line.tag_revenue_100k_200k,
            revenue_200k_500k: line.tag_revenue_200k_500k,
            revenue_500k_1M:   line.tag_revenue_500k_1M,
            revenue_1M_5M:     line.tag_revenue_1M_5M,
            revenue_5M:        line.tag_revenue_5M,
          }
        ]
      }
    }else{
      this_game.tags.push({
        id:                line.tag_id,
        name:              line.tag_name,
        games_count:       line.tag_games_count,
        revenue_0k_5k:     line.tag_revenue_0k_5k,
        revenue_5k_25k:    line.tag_revenue_5k_25k,
        revenue_25k_100k:  line.tag_revenue_25k_100k,
        revenue_100k_200k: line.tag_revenue_100k_200k,
        revenue_200k_500k: line.tag_revenue_200k_500k,
        revenue_500k_1M:   line.tag_revenue_500k_1M,
        revenue_1M_5M:     line.tag_revenue_1M_5M,
        revenue_5M:        line.tag_revenue_5M,
      })
    }
  }

  return games
}
