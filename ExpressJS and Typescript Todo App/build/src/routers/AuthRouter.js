"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const AuthValidator_1 = __importDefault(require("../middlewares/AuthValidator"));
const BaseRouter_1 = __importDefault(require("./BaseRouter"));
class AuthRouter extends BaseRouter_1.default {
    routes() {
        this.router.post("/login", AuthController_1.default.login);
        this.router.post("/register", AuthValidator_1.default, AuthController_1.default.register);
    }
}
// TODO: setiap selesai membuat
exports.default = new AuthRouter().router;
