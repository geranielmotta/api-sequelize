import { Router } from 'express'
import UserController from '../controllers/UserController'
const router = Router()

router.get('/', new UserController().getAllUsers)
router.get('/:id', new UserController().getUser)
router.get('/username/:username', new UserController().searchUserByName)
router.post('/', new UserController().addUser)
router.put('/:id', new UserController().updatedUser)
router.delete('/:id', new UserController().deleteUser)

export default router
