/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import { type Dependencies } from "../../../infrastructure/config/dependencies";
import UsersRoutes from "./users.routes";

export default (dependencies: Dependencies): Router => {
  const router = Router();
  const usersRoutes = UsersRoutes(dependencies);

  router.use("/users", usersRoutes);

  return router;
};
