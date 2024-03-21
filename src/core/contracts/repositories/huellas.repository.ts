import { type Huellas } from "../../../infrastructure/orm/sequelize/models/huella.model";
import { type Repository } from "./index.repository";

export interface HuellasRepository extends Repository<Huellas> {}
