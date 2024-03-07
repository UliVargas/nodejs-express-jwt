import { Router } from 'express'
import { type Dependencies } from '../../../infrastructure/config/dependencies'
import HuellasControllers from '../../controllers/huellas.controller'

export default (dependencies: Dependencies): Router => {
  const router = Router()

  const huellasControllers = HuellasControllers(dependencies)

  router.get('/', huellasControllers.findAll)
  router.get('/:id', huellasControllers.findOne)

  return router
}
