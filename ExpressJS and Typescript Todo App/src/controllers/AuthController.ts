import { Response, Request } from "express";
const db = require("../db/models");

// Controllers
class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;

    const createdUser = await db.user.create({
      username,
      password,
    });

    return res.send(createdUser);
  };

  login(req: Request, res: Response): Response {
    return res.send("");
  }
}

export default new AuthController();
