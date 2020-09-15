module.exports = (sequelize, DataTypes) => {
  const projects = sequelize.define('projects', {
    name: DataTypes.STRING,
    start: DataTypes.DATE,
    description: DataTypes.TEXT,
  })
  return projects
}
