import { Router } from "express"
import InterfaceRouter from "./InterfaceRouter"

export default abstract class BaseRouter implements InterfaceRouter {
   public router: Router

   abstract routes(): void

   constructor() {
      this.router = Router()
      this.routes()
   }
}
