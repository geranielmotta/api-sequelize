module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'projects',
      [
        {
          name: 'Teste com jest',
          start: '2020-08-12',
          description: 'Descrição do projeto tal',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('projects', null, {})
  },
}
