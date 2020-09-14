const models = require('../../utils/nameTable.js')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      models.users,
      [
        {
          name: 'teste',
          username: 'teste',
          password: 'teste',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(models.users, null, {})
  },
}
