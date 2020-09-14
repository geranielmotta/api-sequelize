const models = require('../../utils/nameTable.js')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      models.projects,
      [
        {
          name: 'Teste com jest',
          start: '2020-08-12',
          description: 'Descrição do projeto tal',
          users_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(models.projects, null, {})
  },
}
