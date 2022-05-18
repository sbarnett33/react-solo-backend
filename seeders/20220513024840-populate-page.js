"use strict";

const { faker } = require('@faker-js/faker');


module.exports = {
  async up(queryInterface, Sequelize) {
    
    let users =[];
    
    for (let i = 0; i < 10; i++) {
      users.push({
        first_name: faker.name.findName(),
        last_name: faker.name.findName(),
        username: faker.internet.email(),
        password: faker.phone.phoneNumber(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert("Users", users)
  },

  async down(queryInterface, Sequelize) {
   
  },
};


