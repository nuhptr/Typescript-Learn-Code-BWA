import { Router, Request, Response } from "express";

import AuthController from "../controllers/AuthController";
import validate from "../middlewares/AuthValidator";
import BaseRouter from "./BaseRouter";

class AuthRouter extends BaseRouter {
  public routes(): void {
    this.router.post("/login", AuthController.login);
    this.router.post("/register", validate, AuthController.register);
  }
}

// TODO: setiap selesai membuat
export default new AuthRouter().router;
