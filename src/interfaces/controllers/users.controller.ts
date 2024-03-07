import { type Request, type Response } from 'express'
import { type Dependencies } from '../../infrastructure/config/dependencies'
import { type UsersRepository } from '../../core/contracts/controllers/users.controllers'
import { CreateUseCase, FindAllUseCase } from '../../application/use-cases/users/index.use-cases'

export default (dependencies: Dependencies): UsersRepository => {
  const findAll = async (req: Request, res: Response): Promise<void> => {
    const findAllUseCase = FindAllUseCase(dependencies)
    res.status(200).json(await findAllUseCase())
  }

  const findOne = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({})
  }

  const create = async (req: Request, res: Response): Promise<void> => {
    const createUserUseCase = CreateUseCase(dependencies)
    res.status(201).json(await createUserUseCase(req.body))
  }

  return {
    findAll,
    findOne,
    create
  }
}
