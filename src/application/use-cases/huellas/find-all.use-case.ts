import { type Dependencies } from '../../../infrastructure/config/dependencies'

export default (dependencies: Dependencies) => async () => {
  return await dependencies.huellasRepository.findAll()
}
