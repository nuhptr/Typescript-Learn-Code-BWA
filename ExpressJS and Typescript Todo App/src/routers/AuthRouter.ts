import { Router, Request, Response } from "express";

import AuthController from "../controllers/AuthController";
import BaseRouter from "./BaseRouter";

class AuthRouter extends BaseRouter {
  public routes(): void {
    this.router.post("/login", AuthController.index);
    this.router.post("/register", AuthController.create);
  }
}

export default new AuthRouter().router;
