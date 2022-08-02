'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [{
      name: 'Linx Digital',
      bio: 'Lorem ipsum dolor sit amet',
      website: 'https://www.linxdigital.com.br',
      email: 'linxdigital@linx.com',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'OneBitCode',
      bio: 'Lorem ipsum dolor sit amet',
      website: 'https://www.onebitcode.com.br',
      email: 'email@onebitcode.com',
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, {})
  }
};