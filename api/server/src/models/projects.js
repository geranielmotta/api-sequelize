module.exports = (sequelize, DataTypes) => {
  const projects = sequelize.define('projects', {
    name: DataTypes.STRING,
    start: DataTypes.DATE,
    description: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
  })
  projects.associate = function(model) {
    projects.hasMany('users', {
      foreignKey: 'users_id',
      as: 'users',
    })
  }
  return projects
}
