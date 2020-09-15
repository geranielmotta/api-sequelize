import db from '../src/models'

class ProjectService {
  async getAllProjects() {
    try {
      return await db.projects.findAll({
        attributes: ['id', 'name', 'description', 'start'],
      })
    } catch (error) {
      throw error
    }
  }

  async addProject(newProject) {
    try {
      return await db.projects.create(newProject)
    } catch (error) {
      throw error
    }
  }

  async updateProject(id, updateProject) {
    try {
      const projectToUpdate = await db.projects.findOne({
        where: { id: Number(id) },
      })

      if (projectToUpdate) {
        return await db.projects.update(updateProject, {
          where: { id: Number(id) },
        })
      }
      return null
    } catch (error) {
      throw error
    }
  }

  async getProject(id) {
    try {
      return await db.projects.findOne({
        where: { id: Number(id) },
      })
    } catch (error) {
      throw error
    }
  }

  async deleteProject(id) {
    try {
      const projectToDelete = await db.projects.findOne({
        where: { id: Number(id) },
      })

      if (projectToDelete) {
        return await db.projects.destroy({
          where: { id: Number(id) },
        })
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default ProjectService
