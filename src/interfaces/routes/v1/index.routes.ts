/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { type Dependencies } from '../../../infrastructure/config/dependencies'
import UsersRoutes from './users.routes'
import HuellasRoutes from './huellas.routes'

export default (dependencies: Dependencies): Router => {
  const router = Router()
  const usersRoutes = UsersRoutes(dependencies)
  const huellasRoutes = HuellasRoutes(dependencies)

  router.use('/users', usersRoutes)
  router.use('/huellas', huellasRoutes)

  return router
}
