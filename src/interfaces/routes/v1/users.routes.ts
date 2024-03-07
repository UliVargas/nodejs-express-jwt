import { Router } from 'express'
import { type Dependencies } from '../../../infrastructure/config/dependencies'
import usersControllers from '../../controllers/users.controller'
import { CreateUserValidation } from '../../middlewares/validations/functions/users/index.users'
export default (dependencies: Dependencies): Router => {
  const router = Router()

  const usersController = usersControllers(dependencies)

  router.get('/', usersController.findAll)
  router.get('/:id', usersController.findOne)
  router.post('/', CreateUserValidation, usersController.create)

  return router
}
