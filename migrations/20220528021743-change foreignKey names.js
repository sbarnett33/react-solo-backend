'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return [
      queryInterface.renameColumn('Reactions', 'dog_id', 'DogId'),
      queryInterface.renameColumn('Reactions', 'food_id', 'FoodId')]
  },

  async down (queryInterface, Sequelize) {
    return [
      queryInterface.renameColumn('Reactions', 'DogId', 'dog_id'),
      queryInterface.renameColumn('Reactions', 'FoodId', 'food_id')]
  }
};


