import UserService from '../services/UserServices'
import Util from '../utils/Utils'

const util = new Util()
const services = new UserService()

class UserController {
  async getAllUsers(req, res) {
    try {
      const allUsers = await services.getAllUsers()
      if (allUsers.length > 0) {
        util.setSuccess(200, 'users', allUsers)
      } else {
        util.setSuccess(200, 'Nenhum usuário encontrado')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  async addUser(req, res) {
    const { name, username, token, expired_at } = req.body
    if (!name || !username || !token || !expired_at) {
      util.setError(400, 'Por favor, forneça detalhes completos')
      return util.send(res)
    }

    try {
      const createdUser = await services.addUser(req.body)
      util.setSuccess(201, 'User adicionado!', createdUser)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  async updatedUser(req, res) {
    const alteredUser = req.body
    const { id } = req.params
    if (!Number(id)) {
      util.setError(400, 'Por favor insira um valor numérico válido')
      return util.send(res)
    }
    try {
      const updateUser = await services.updateUser(id, alteredUser)
      if (!updateUser) {
        util.setError(404, `Não é possível encontrar o usuário com o id: ${id}`)
      } else {
        util.setSuccess(200, 'User atualizado', updateUser)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  async getUser(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Por favor insira um valor numérico válido')
      return util.send(res)
    }
    try {
      const user = await services.getUser(id)

      if (!user) {
        util.setError(404, `Não é possível encontrar o usuário com o id ${id}`)
      } else {
        util.setSuccess(200, 'user', user)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  async searchUserByName(req, res) {
    const { username } = req.params

    if (!username) {
      util.setError(400, 'Nome de usuário incorreto ou indefinido')
      return util.send(res)
    }
    try {
      const user = await services.searchUserByName(username)

      if (!user) {
        util.setError(
          404,
          `Não é possível encontrar o usuário com name ${username}`
        )
      } else {
        util.setSuccess(200, 'user', user)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  async deleteUser(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Por favor, forneça um valor numérico')
      return util.send(res)
    }

    try {
      const userToDelete = await services.deleteUser(id)

      if (userToDelete) {
        util.setSuccess(200, 'Usuário deletado!')
      } else {
        util.setError(404, `Usuário com o id  ${id} não pode ser encontrado`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }
}

export default UserController
