"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("GamesTags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_game: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Games",
          key: "id",
        },
      },
      id_tag: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Tags",
          key: "id",
        },
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
    queryInterface.dropTable("GamesTags");
  },
};
