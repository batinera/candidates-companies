'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('candidates', [{
      name: 'Leonardo Batini Queiroz Silva',
      phone: '11 11111-1111',
      email: 'leonardobatini@gmail.com',
      bio: 'Key Account Analyst - Linx | Stone',
      open_to_work: true,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Rodrigo Augusto Batini Queiroz Silva',
      phone: '22 22222-2222',
      email: 'rodrigobatini@gmail.com',
      bio: 'CTO - DataRisk',
      open_to_work: true,
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('candidates', null, {})
  }
};