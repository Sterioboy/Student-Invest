'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Users', [
    { login: 'Clark Kent', email: 'kent@gmail.com', password: '123456', status: 'Student', createdAt: new Date(), updatedAt: new Date()},
    { login: 'Barry Allen', email: 'allen@gmail.com', password: '123456', status: 'Student', createdAt: new Date(), updatedAt: new Date()},
    { login: 'Hal Jordan', email: 'jordan@gmail.com', password: '123456', status: 'Student', createdAt: new Date(), updatedAt: new Date()},
    { login: 'Bruce Wayne', email: 'wayne@gmail.com', password: '123456', status: 'Investor', createdAt: new Date(), updatedAt: new Date()},
    { login: 'Oliver Queen', email: 'queen@gmail.com', password: '123456', status: 'Investor', createdAt: new Date(), updatedAt: new Date()},
    { login: 'Diana Prince', email: 'prince@gmail.com', password: '123456', status: 'Investor', createdAt: new Date(), updatedAt: new Date()},
    { login: 'Metropolis University', email: 'metro@gmail.com', password: '123456', status: 'University', createdAt: new Date(), updatedAt: new Date()},
    { login: 'Gotham University', email: 'gotham@gmail.com', password: '123456', status: 'University', createdAt: new Date(), updatedAt: new Date()},
    { login: 'Smallville University', email: 'small@gmail.com', password: '123456', status: 'University', createdAt: new Date(), updatedAt: new Date()},
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('Users', null, {});
  }
};
