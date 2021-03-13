module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define("Game", {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    inital_price: DataTypes.FLOAT,
    revenue: DataTypes.FLOAT,
    positive_reviews: DataTypes.INTEGER,
    negative_reviews: DataTypes.INTEGER,
    owners: DataTypes.INTEGER,
    release_date: DataTypes.STRING,
    website: DataTypes.STRING,
    developer_name: DataTypes.STRING,
    publisher_name: DataTypes.STRING,
    header_image: DataTypes.STRING,
    about: DataTypes.STRING,
    short_description: DataTypes.STRING,
    detailed_description: DataTypes.STRING,
  });

  Game.associate = function (models) {
    Game.hasMany(models.Screenshot);
    Game.belongsToMany(models.Tag, {
      through: "GamesTags",
      foreignKey: "id_game",
      as: "tag",
    });
  };

  return Game;
};
