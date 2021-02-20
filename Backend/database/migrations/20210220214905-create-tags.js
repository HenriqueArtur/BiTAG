"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Tags", {
      id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      games_count: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      revenue_0k_5k: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      revenue_5k_25k: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      revenue_25k_100k: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      revenue_100k_200k: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      revenue_200k_500k: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      revenue_500k_1M: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      revenue_1M_5M: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      revenue_5M: {
        allowNull: false,
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
