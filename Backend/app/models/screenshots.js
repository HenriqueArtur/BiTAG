module.exports = (sequelize, DataTypes) => {
  const Screenshot = sequelize.define("Screenshot", {
    image: DataTypes.STRING,
    id_game: DataTypes.INTEGER,
  });

  return Screenshot;
};
