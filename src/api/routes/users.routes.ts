import { Router } from "express";
import { usersController } from "../controllers";

const router = Router();
export default (app: Router) => {
  app.use("/oktauser", router);
  router.get("/token", usersController.getAccessToken.bind(usersController));
};
