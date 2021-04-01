const SequelizeMock = require("sequelize-mock");
const DBConnectionMock = new SequelizeMock();

let TagMock = DBConnectionMock.define("Tag", {
    "id": 1,
    "name": "Indie",
    "games_count": 1244,
    "revenue_0k_5k": 0.54402,
    "revenue_5k_25k": 0.143688,
    "revenue_25k_100k": 0.0905316,
    "revenue_100k_200k": 0.0332226,
    "revenue_200k_500k": 0.0373754,
    "revenue_500k_1M": 0.038206,
    "revenue_1M_5M": 0.112957,
    "revenue_5M": 0,
    "createdAt": "2021-03-17 00:00:00",
    "updatedAt": "2021-03-17 00:00:00",
});

TagMock.$queryInterface.$useHandler((query, queryOptions, done) => {
    if (query === 'findAll') {
        const result = TagMock.build([{
          "id": 1,
          "name": "Indie",
          "games_count": 1244,
          "revenue_0k_5k": 0.54402,
          "revenue_5k_25k": 0.143688,
          "revenue_25k_100k": 0.0905316,
          "revenue_100k_200k": 0.0332226,
          "revenue_200k_500k": 0.0373754,
          "revenue_500k_1M": 0.038206,
          "revenue_1M_5M": 0.112957,
          "revenue_5M": 0,
          "createdAt": "2021-03-17 00:00:00",
          "updatedAt": "2021-03-17 00:00:00",
        }]);
        return result;
    }
  })

module.exports = TagMock;