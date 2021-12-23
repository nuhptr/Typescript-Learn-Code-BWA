import validate from "../middlewares/AuthValidator";
import BaseRouter from "./BaseRouter";
import { auth }  from "../middlewares/AuthMiddleware";

// Controller
import AuthController from "../controllers/AuthController";

class AuthRouter extends BaseRouter {
  public routes(): void {
    this.router.post("/login", validate, AuthController.login);
    this.router.post("/register", validate, AuthController.register);
    this.router.get("/profile", auth, AuthController.profile);
  }
}

// TODO: setiap selesai membuat
export default new AuthRouter().router;
