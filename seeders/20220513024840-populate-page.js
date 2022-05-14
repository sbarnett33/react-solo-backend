'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  async up (queryInterface, Sequelize) {
    
    let tripPlans = [];

    for (let i = 0; i < 20; i++) {
      tripPlans.push({
        title: faker.hacker.phrase(),
        body: faker.address.city(),
        updatedAt: new Date(),
        createdAt: new Date() 

      })
    }

    return queryInterface.bulkInsert('TripPlans', tripPlans);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
