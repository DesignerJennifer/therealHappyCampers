module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'Lilly',
          lastName: 'Kaycee',
          userName: 'MommaKC',
          email: 'lilly@someemail.com',
          password: 'IamSherlocked',
          phoneNumber: '909-687-4921',
          address: '1234 Home Street',
          city: 'Anywhere',
          state: 'MO',
          zip: '45683',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
