module.exports = (sequelize, DataTypes) => {
  const Screenshot = sequelize.define("Screenshot", {
    image: DataTypes.BLOB("long"),
    id_game: DataTypes.INTEGER,
  });

  return Screenshot;
};
