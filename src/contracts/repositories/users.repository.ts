import { type User } from '../../orm/sequelize/models/users.model'
import { type Repository } from './index.repository'

export interface UserRepository extends Repository<User> {
  findByEmail: (email: string) => Promise<User | null>
}
