module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define("Tag", {
    name: DataTypes.STRING,
    games_count: DataTypes.INTEGER,
    revenue_0k_5k: DataTypes.FLOAT,
    revenue_5k_25k: DataTypes.FLOAT,
    revenue_25k_100k: DataTypes.FLOAT,
    revenue_100k_200k: DataTypes.FLOAT,
    revenue_200k_500k: DataTypes.FLOAT,
    revenue_500k_1M: DataTypes.FLOAT,
    revenue_1M_5M: DataTypes.FLOAT,
    revenue_5M: DataTypes.FLOAT,
  });

  Tag.associate = function (models) {
    Tag.belongsToMany(models.Game, {
      through: "GamesTags",
      foreignKey: "id_tag",
      as: "game",
    });
  };

  return Tag;
};
