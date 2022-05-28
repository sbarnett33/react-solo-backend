'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.renameColumn('Reactions', 'reaction', 'name');
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.renameColumn('Reactions', 'name', 'reaction');
  }
};
