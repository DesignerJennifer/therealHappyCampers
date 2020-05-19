'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkInsert('campers', [
      {
        firstname: "Lilly",
        lastname: "Kaycee",
        camperFirstName: "Olivia",
        camperLastName: "Kaycee",
        nickname: "KC",
        birthday: "03-30-2001",
        grade: "5",
        shirtsize: "Adult Small",
        allergies: "Tree Pollen",
        dietaryNeeds: "Carnivore"
      }
    ],
      {});

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
