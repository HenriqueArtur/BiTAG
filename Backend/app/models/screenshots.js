module.exports = (sequelize, DataTypes) => {
  const Screenshot = sequelize.define("Screenshot", {
    image: DataTypes.BLOB("long"),
  });

  return Screenshot;
};