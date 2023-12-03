import UserController from "../controllers/UserController"
import BaseRouter from "../routers/BaseRouter"
import { auth } from "../middlewares/AuthMiddleware"

class UserRouter extends BaseRouter {
   // TODO: data dummy
   public routes(): void {
      this.router.get("/", auth, UserController.index)
      this.router.post("/", UserController.create)
      this.router.get("/:id", UserController.show)
      this.router.put("/:id", UserController.update)
      this.router.delete("/:id", UserController.delete)
   }
}

// TODO : setiap selesai membuat
export default new UserRouter().router
