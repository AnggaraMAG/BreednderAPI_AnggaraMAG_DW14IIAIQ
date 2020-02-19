'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'anggara',
      email: 'anggara@mail.com',
      password: '1234',
      phone: '1233223',
      address: 'jalanin aja dlu'
    }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', null, {});
  }
};
