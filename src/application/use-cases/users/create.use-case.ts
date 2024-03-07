import { type UserEntity } from '../../../core/entities/user.entity'
import { type Dependencies } from '../../../infrastructure/config/dependencies'

type CreateUser = (data: UserEntity) => Promise<UserEntity>
export default (dependencies: Dependencies): CreateUser => async (data) => {
  return await dependencies.usersRepository.create(data)
}
