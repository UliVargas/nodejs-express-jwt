import { Router } from "express";
import { type Dependencies } from "../../../infrastructure/config/dependencies";
import usersControllers from "../../controllers/users.controller";

export default (dependencies: Dependencies): Router => {
  const router = Router();

  const usersController = usersControllers(dependencies);

  router.get("/", usersController.findAll);
  router.get("/:id", usersController.findOne);
  router.post("/", usersController.create);

  return router;
};
