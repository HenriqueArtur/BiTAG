module.exports = (sequelize, DataTypes) => {
  const GamesTags = sequelize.define("GamesTags", {
    id_game: DataTypes.INTEGER,
    id_tag: DataTypes.INTEGER,
  });

  GamesTags.associate = function (models) {
    GamesTags.belongsTo(models.Tag, {
      foreignKey: "id_tag",
    });
    GamesTags.belongsTo(models.Game, {
      foreignKey: "id_game",
    });
  };

  return GamesTags;
};
