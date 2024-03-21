import { type Dependencies } from "../../../infrastructure/config/dependencies";
import { type Huellas } from "../../../infrastructure/orm/sequelize/models/huella.model";

export default (dependencies: Dependencies) =>
  async (id: string): Promise<Huellas | null> => {
    return await dependencies.huellasRepository.findOne(id);
  };
