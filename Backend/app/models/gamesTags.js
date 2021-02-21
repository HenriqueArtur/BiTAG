module.exports = (sequelize, DataTypes) => {
  const GamesTags = sequelize.define("GamesTags", {
    id: DataTypes.INTEGER,
    id_game: DataTypes.INTEGER,
    id_tag: DataTypes.INTEGER,
  });

  GamesTags.associate = function (models) {
    GamesTags.belongsTo(models.Tag, {
      foreingKey: "id_tags",
    });
    GamesTags.belongsTo(models.Game, {
      foreingKey: "id_game",
    });
  };

  return GamesTags;
};
