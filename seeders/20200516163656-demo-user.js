'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('Users', [{
        firstname: "Lilly",
        lastname: "Kaycee",
        username: "MommaKC",
        email: "lilly@someemail.com",
        password: "IamSherlocked",
        last_login: "12/12/12",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()

      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
