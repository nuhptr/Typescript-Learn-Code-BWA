"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthValidator_1 = __importDefault(require("../middlewares/AuthValidator"));
const BaseRouter_1 = __importDefault(require("./BaseRouter"));
const AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
// Controller
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
class AuthRouter extends BaseRouter_1.default {
    routes() {
        this.router.post("/login", AuthValidator_1.default, AuthController_1.default.login);
        this.router.post("/register", AuthValidator_1.default, AuthController_1.default.register);
        this.router.get("/profile", AuthMiddleware_1.auth, AuthController_1.default.profile);
    }
}
// TODO: setiap selesai membuat
exports.default = new AuthRouter().router;
