"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Tags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      games_count: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      revenue_0k_5k: {
        allowNull: true,
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      revenue_5k_25k: {
        allowNull: true,
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      revenue_25k_100k: {
        allowNull: true,
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      revenue_100k_200k: {
        allowNull: true,
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      revenue_200k_500k: {
        allowNull: true,
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      revenue_500k_1M: {
        allowNull: true,
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      revenue_1M_5M: {
        allowNull: true,
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      revenue_5M: {
        allowNull: true,
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
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
    queryInterface.dropTable("Tags");
  },
};
