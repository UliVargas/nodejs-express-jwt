import { type Request, type Response } from 'express'
import { type Dependencies } from '../config/dependencies'
import { type UsersRepository } from '../contracts/controllers/users.controllers'

export default (dependencies: Dependencies): UsersRepository => {
  const findAll = async (req: Request, res: Response): Promise<void> => {}

  const findOne = async (req: Request, res: Response): Promise<void> => {}

  const create = async (req: Request, res: Response): Promise<void> => {}

  return {
    findAll,
    findOne,
    create
  }
}
