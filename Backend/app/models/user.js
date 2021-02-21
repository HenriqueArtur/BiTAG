module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    photo: DataTypes.BLOB("long"),
    is_premium: DataTypes.BOOLEAN,
  });

  return User;
};
