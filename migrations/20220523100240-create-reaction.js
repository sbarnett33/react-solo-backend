'use strict';

const dog = require("../models/dog");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reaction: {
        type: Sequelize.STRING
      },
      dog_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Dogs',
          key: 'id',
        }
      },
      food_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Food',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reactions');
  }
};