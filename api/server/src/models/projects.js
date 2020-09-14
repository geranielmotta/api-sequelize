const models = require('../../utils/nameTable.js')

module.exports = (sequelize, DataTypes) => {
  const projects = sequelize.define(models.projects, {
    name: DataTypes.STRING,
    start: DataTypes.DATE,
    description: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
  })
  projects.associate = function(model) {
    projects.hasMany(model.users, {
      foreignKey: `${models.users}_id`,
      as: 'users',
    })
  }
  return projects
}
