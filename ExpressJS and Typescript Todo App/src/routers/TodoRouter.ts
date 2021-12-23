import TodoController from "../controllers/TodoController";
import { auth } from "../middlewares/AuthMiddleware";
import BaseRouter from "./BaseRouter";

class TodoRouter extends BaseRouter {
  routes(): void {
    this.router.get("/", auth, TodoController.index);
    this.router.post("/", auth, TodoController.create);
    this.router.get("/:id", auth, TodoController.show);
    this.router.put("/:id", auth, TodoController.update);
    this.router.delete("/:id", auth, TodoController.delete);
  }
}

export default new TodoRouter().router;
