'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('campers', [
        {
          camperfirstname: "Olivia",
          camperlastname: "Kaycee",
          nickname: "KC",
          birthday: "03-30-2001",
          grade: "5",
          shirtsize: "Adult Small",
          allergies: false,
          dieteryneeds: false,
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
