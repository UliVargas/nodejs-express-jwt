import express, { type ErrorRequestHandler, type Request, type Response, type NextFunction, type Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import routes from './routes/v1/index.routes'
import { type Dependencies } from './config/dependencies'

export default async (dependencies: Dependencies): Promise<Application> => {
  const app = express()

  app.use(morgan('dev'))
  app.use(express.json())
  app.use(cors())

  app.use('/', routes(dependencies))

  app.use((_err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction): void => {
    res.status(500).json({ error: 'Internal Server Error' })
  })

  return app
}
