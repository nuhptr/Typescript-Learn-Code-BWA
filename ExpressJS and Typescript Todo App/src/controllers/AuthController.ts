import { Response, Request } from "express";

// Controllers
class AuthController {
  index(req: Request, res: Response): Response {
    return res.send("");
  }
  create(req: Request, res: Response): Response {
    return res.send("");
  }
}

export default new AuthController();
