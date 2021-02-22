module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Games", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: true,
        type: DataTypes.FLOAT,
      },
      inital_price: {
        allowNull: true,
        type: DataTypes.FLOAT,
      },
      revenue: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      positive_reviews: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      negative_reviews: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      owners: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      release_date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      website: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      developer_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      publisher_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      header_image: {
        allowNull: false,
        type: DataTypes.BLOB("long"),
      },
      about: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      short_description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      detailed_description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("Games");
  },
};
