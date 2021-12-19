import { Response, Request } from "express";

import PasswordHash from "../utils/HashPassword";
const db = require("../db/models");

// Controllers
class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;
    const hashedPassword: string = await PasswordHash.hash(password);

    const createdUser = await db.user.create({
      username,
      password: hashedPassword,
    });

    return res.send(createdUser);
  };

  login(req: Request, res: Response): Response {
    return res.send("");
  }
}

// TODO: setiap selesai membuat
export default new AuthController();
