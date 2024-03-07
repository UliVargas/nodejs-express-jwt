import { type HuellasRepository } from '../../../core/contracts/repositories/huellas.repository'
import { type Huellas } from '../../orm/sequelize/models/huella.model'
import { HuellasModel } from '../../orm/sequelize/models'

export default (): HuellasRepository => {
  const findAll = async (): Promise<Huellas[]> => {
    return await HuellasModel.findAll()
  }

  const findOne = async (id: string): Promise<Huellas | null> => {
    return await HuellasModel.findByPk(id)
  }

  const create = async (data: Huellas): Promise<Huellas> => {
    return await HuellasModel.create(data)
  }

  return {
    findAll,
    findOne,
    create
  }
}
