import { type HuellasRepository } from "../../core/contracts/repositories/huellas.repository";
import { type UserRepository } from "../../core/contracts/repositories/users.repository";
import HuellasSequelizeRepository from "../repositories/sequelize/huellas.repository";
import UsersSequelizeRepository from "../repositories/sequelize/users.repository";

export interface Dependencies {
  usersRepository: UserRepository;
  huellasRepository: HuellasRepository;
}

export default async (): Promise<Dependencies> => {
  const usersRepository = UsersSequelizeRepository();
  const huellasRepository = HuellasSequelizeRepository();

  return {
    usersRepository,
    huellasRepository,
  };
};
