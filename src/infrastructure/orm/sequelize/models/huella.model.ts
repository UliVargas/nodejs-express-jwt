import { Model, DataTypes, type Optional } from 'sequelize'
import sequelize from '../config'
import { type HuellaEntity } from '../../../../core/entities/huella.entity'

export class Huellas extends Model<HuellaEntity, Optional<HuellaEntity, 'id'>> {
  public id!: string
  public huella!: Blob
  public width!: number
  public height!: number

  public static readonly tableName = 'huellas'
}

Huellas.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    huella: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    width: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'huellas',
    tableName: Huellas.tableName,
    timestamps: false
  }
)
