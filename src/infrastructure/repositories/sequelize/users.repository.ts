import { type UserRepository } from '../../../core/contracts/repositories/users.repository'
import { type UserEntity } from '../../../core/entities/user.entity'
import { UsersModel } from '../../orm/sequelize/models'

export default (): UserRepository => {
  const findByEmail = async (email: string): Promise<UserEntity | null> => {
    return await UsersModel.findOne({ where: { email } })
  }

  const findAll = async (): Promise<UserEntity[]> => {
    return await UsersModel.findAll()
  }

  const findOne = async (id: string): Promise<UserEntity | null> => {
    return await UsersModel.findByPk(id)
  }

  const create = async (data: UserEntity): Promise<UserEntity> => {
    return await UsersModel.create(data)
  }

  return {
    findByEmail,
    findAll,
    findOne,
    create
  }
}
