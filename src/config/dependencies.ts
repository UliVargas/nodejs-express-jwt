import UsersSequelizeRepository from '../repositories/orm/sequelize/users.repository'

export interface Dependencies {
  usersRepository: UsersSequelizeRepository
}

export default async (): Promise<Dependencies> => {
  const usersRepository = new UsersSequelizeRepository()

  return {
    usersRepository
  }
}
