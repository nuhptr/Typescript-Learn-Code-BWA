import { Router, Request, Response } from "express";

import AuthController from "../controllers/AuthController";
import BaseRouter from "./BaseRouter";

class AuthRouter extends BaseRouter {
  public routes(): void {
    this.router.post("/login", AuthController.login);
    this.router.post("/register", AuthController.register);
  }
}

export default new AuthRouter().router;
