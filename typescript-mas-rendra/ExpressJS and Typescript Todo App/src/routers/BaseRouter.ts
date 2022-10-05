import { Router, Request, Response } from "express";
import InterfaceRouter from "./InterfaceRouter";

abstract class BaseRouter implements InterfaceRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  abstract routes(): void;
}

// TODO : setiap selesai membuat
export default BaseRouter;
