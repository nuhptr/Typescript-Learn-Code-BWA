"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("../controllers/UserController"));
const BaseRouter_1 = __importDefault(require("../routers/BaseRouter"));
const AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
class UserRouter extends BaseRouter_1.default {
    // TODO: data dummy
    routes() {
        this.router.get("/", AuthMiddleware_1.auth, UserController_1.default.index);
        this.router.post("/", UserController_1.default.create);
        this.router.get("/:id", UserController_1.default.show);
        this.router.put("/:id", UserController_1.default.update);
        this.router.delete("/:id", UserController_1.default.delete);
    }
}
// TODO : setiap selesai membuat
exports.default = new UserRouter().router;
