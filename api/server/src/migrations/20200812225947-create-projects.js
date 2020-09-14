const models = require('../../utils/nameTable.js')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(models.projects, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      start: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
      },
      users_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: models.users,
          },
          key: 'id',
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(models.projects)
  },
}