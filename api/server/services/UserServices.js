import db from '../src/models'

class UserService {
  async getAllUsers() {
    try {
      return await db.users.findAll({
        attributes: ['id', 'name', 'username', 'token', 'expired_at'],
      })
    } catch (error) {
      throw error
    }
  }

  async addUser(newUser) {
    try {
      return await db.users.create(newUser, {
        logging: false,
      })
    } catch (error) {
      throw error
    }
  }

  async updateUser(id, updateUser) {
    try {
      const userToUpdate = await db.users.findOne({
        where: { id: Number(id) },
      })

      if (userToUpdate) {
        return await db.users.update(updateUser, {
          where: { id: Number(id) },
        })
      }
      return null
    } catch (error) {
      throw error
    }
  }

  async getUser(id) {
    try {
      return await db.users.findOne({
        where: { id: Number(id) },
      })
    } catch (error) {
      throw error
    }
  }

  async getToken(token) {
    try {
      const user = await db.users.findOne({
        attributes: ['id', 'name', 'username', 'token', 'expired_at'],
        where: { token: token },
        logging: false,
      })

      if (user) {
        return user
      }
      return null
    } catch (error) {
      throw error
    }
  }

  async searchUserByName(username) {
    try {
      const user = await db.users.findOne({
        attributes: ['id'],
        where: { username },
        logging: false,
      })
      console.log(user)
      if (user) {
        return user
      }
      return null
    } catch (error) {
      throw error
    }
  }

  async deleteUser(id) {
    try {
      const userToDelete = await db.users.findOne({
        where: { id: Number(id) },
      })

      if (userToDelete) {
        return await db.users.destroy({
          where: { id: Number(id) },
        })
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default UserService
