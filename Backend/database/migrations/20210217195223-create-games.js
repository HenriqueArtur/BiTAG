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
        allowNull: true,
        type: DataTypes.FLOAT,
      },
      positive_reviews: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      negative_reviews: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      owners: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      release_date: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      website: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      developer_name: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      publisher_name: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      header_image: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      about: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      short_description: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      detailed_description: {
        allowNull: true,
        type: DataTypes.TEXT,
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
