import { Router } from 'express'
import { type Dependencies } from '../../config/dependencies'

export default (dependencies: Dependencies): Router => {
  const router = Router()

  router.get('/users', (req, res) => {
    res.send('¡Hola, mundo!')
  })

  return router
}
