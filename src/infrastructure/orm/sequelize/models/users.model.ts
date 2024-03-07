import { Model, DataTypes, UUIDV4, type Optional } from 'sequelize'
import sequelize from '../config'
import { type UserEntity } from '../../../../core/entities/user.entity'

export class User extends Model<UserEntity, Optional<UserEntity, 'id'>> {
  public id!: string
  public name!: string
  public email!: string
  public password!: string
  public createdAt?: Date
  public updatedAt?: Date

  public static readonly tableName = 'users'
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'User',
    tableName: User.tableName
  }
)
