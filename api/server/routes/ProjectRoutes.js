import { Router } from 'express'
import ProjectController from '../controllers/ProjectController'
const router = Router()

router.post('/', new ProjectController().addProject)
router.get('/', new ProjectController().getAllProjects)
router.get('/:id', new ProjectController().getProject)
router.put('/:id', new ProjectController().updatedProject)
router.delete('/:id', new ProjectController().deleteProject)

export default router
