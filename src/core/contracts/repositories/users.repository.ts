import { type UserEntity } from '../../entities/user.entity'
import { type Repository } from './index.repository'

export interface UserRepository extends Repository<UserEntity> {
  findByEmail: (email: string) => Promise<UserEntity | null>
}
