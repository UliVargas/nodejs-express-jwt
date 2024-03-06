import { type User } from '../../../orm/sequelize/models/users.model'
import { type UserRepository } from '../../../contracts/repositories/users.repository'

export default class UsersSequelizeRepository implements UserRepository {
  async findByEmail (email: string): Promise<User | null> {
    throw new Error('Method not implemented.')
  }

  async findAll (): Promise<User[]> {
    throw new Error('Method not implemented.')
  }

  async findOne (id: string): Promise<User | null> {
    throw new Error('Method not implemented.')
  }

  async create (data: User): Promise<User> {
    throw new Error('Method not implemented.')
  }
}
