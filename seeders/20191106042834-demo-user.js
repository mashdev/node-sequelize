'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
    */

      return queryInterface.bulkInsert('Users', [{
        firstName: 'Paul',
        lastName: 'Lopez',
        email: 'paullopez05@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Jax',
        lastName: 'Lopez',
        email: 'jaxlopez@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
    */
      return queryInterface.bulkDelete('Users', null, {});
  }
};
