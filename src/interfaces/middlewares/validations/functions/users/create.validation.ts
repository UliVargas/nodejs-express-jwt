import { ZodError } from 'zod'
import { type Request, type Response, type NextFunction } from 'express'

import { validation } from '../../index.validation'
import { createUserSchema } from '../../schemas/user.schema'

export default async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    validation(req.body, createUserSchema)
    next()
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).send({ errors: error.errors })
    }
    return res.status(500).send('Error making request, contact support')
  }
}
