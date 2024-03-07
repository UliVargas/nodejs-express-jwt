import { type AuthRepository } from '../../core/contracts/application/auth.repository'
import { type HuellasRepository } from '../../core/contracts/repositories/huellas.repository'
import { type UserRepository } from '../../core/contracts/repositories/users.repository'
import HuellasSequelizeRepository from '../repositories/sequelize/huellas.repository'
import UsersSequelizeRepository from '../repositories/sequelize/users.repository'
import AuthApplicationRepository from '../../application/auth/auth'

export interface Dependencies {
  usersRepository: UserRepository
  huellasRepository: HuellasRepository
  authRepository: AuthRepository
}

export default async (): Promise<Dependencies> => {
  const usersRepository = UsersSequelizeRepository()
  const huellasRepository = HuellasSequelizeRepository()
  const authRepository = AuthApplicationRepository()

  return {
    usersRepository,
    huellasRepository,
    authRepository
  }
}
