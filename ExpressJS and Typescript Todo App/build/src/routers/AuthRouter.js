"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const BaseRouter_1 = __importDefault(require("./BaseRouter"));
class AuthRouter extends BaseRouter_1.default {
    routes() {
        this.router.post("/login", AuthController_1.default.index);
        this.router.post("/register", AuthController_1.default.create);
    }
}
exports.default = new AuthRouter().router;