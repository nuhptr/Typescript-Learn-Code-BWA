"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoController_1 = __importDefault(require("../controllers/TodoController"));
const AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
const TodoValidator_1 = __importDefault(require("../middlewares/TodoValidator"));
const BaseRouter_1 = __importDefault(require("./BaseRouter"));
class TodoRouter extends BaseRouter_1.default {
    routes() {
        this.router.get("/", AuthMiddleware_1.auth, TodoController_1.default.index);
        this.router.post("/", AuthMiddleware_1.auth, TodoValidator_1.default, TodoController_1.default.create);
        this.router.get("/:id", AuthMiddleware_1.auth, TodoController_1.default.show);
        this.router.put("/:id", AuthMiddleware_1.auth, TodoValidator_1.default, TodoController_1.default.update);
        this.router.delete("/:id", AuthMiddleware_1.auth, TodoController_1.default.delete);
    }
}
exports.default = new TodoRouter().router;
