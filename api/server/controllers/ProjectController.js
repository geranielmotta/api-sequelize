import ProjectService from '../services/ProjectServices'
import Util from '../utils/Utils'

const util = new Util()
const services = new ProjectService()
class ProjectController {
  async getAllProjects(req, res) {
    try {
      const allProjects = await services.getAllProjects()
      if (allProjects.length > 0) {
        util.setSuccess(200, 'Projects', allProjects)
      } else {
        util.setSuccess(200, 'Nenhum projeto encontrado')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  async addProject(req, res) {
    const { name, start, description } = req.body
    if (!name || !start || !description) {
      util.setError(400, 'Por favor, forneça detalhes completos')
      return util.send(res)
    }

    try {
      const createdProject = await services.addProject(req.body)
      util.setSuccess(201, 'Projeto adicionado!', createdProject)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  async updatedProject(req, res) {
    const alteredProject = req.body

    const { id } = req.params
    if (!Number(id)) {
      util.setError(400, 'Por favor insira um valor numérico válido')
      return util.send(res)
    }
    try {
      const updateProject = await services.updateProject(id, alteredProject)
      if (!updateProject) {
        util.setError(404, `Não é possível encontrar o projeto com o id: ${id}`)
      } else {
        util.setSuccess(200, 'Projeto atualizado', updateProject)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  async getProject(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Por favor insira um valor numérico válido')
      return util.send(res)
    }
    try {
      const Project = await services.getProject(id)

      if (!Project) {
        util.setError(404, `Não é possível encontrar o projeto com o id ${id}`)
      } else {
        util.setSuccess(200, 'Project', Project)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  async deleteProject(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Por favor, forneça um valor numérico')
      return util.send(res)
    }

    try {
      const ProjectToDelete = await services.deleteProject(id)

      if (ProjectToDelete) {
        util.setSuccess(200, 'projeto deletado!')
      } else {
        util.setError(404, `projeto com o id  ${id} não pode ser encontrado`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }
}

export default ProjectController
