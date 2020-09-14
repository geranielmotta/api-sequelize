const models = require('../../utils/nameTable.js')

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(models.users, {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expired_at: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
  return users
}
