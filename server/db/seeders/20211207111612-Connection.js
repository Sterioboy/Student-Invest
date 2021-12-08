'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Connections', [
    { student_id: 1, investor_id: 6, status: true, createdAt: new Date(), updatedAt: new Date()},
    { student_id: 2, investor_id: 5, status: true, createdAt: new Date(), updatedAt: new Date()},
    { student_id: 3, investor_id: 4, status: false, createdAt: new Date(), updatedAt: new Date()},
  ], {});
  },

  down: async (queryInterface, Sequelize) => {

   await queryInterface.bulkDelete('Connections', null, {});
   
  }
};
