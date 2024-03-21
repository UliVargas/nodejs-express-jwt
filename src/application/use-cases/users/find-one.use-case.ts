import { type Dependencies } from "../../../infrastructure/config/dependencies";

export default (dependencies: Dependencies) => async (userId: string) => {
  return await dependencies.usersRepository.findOne(userId);
};
