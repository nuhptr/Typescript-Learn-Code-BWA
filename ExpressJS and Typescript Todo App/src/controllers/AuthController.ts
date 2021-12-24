import { Response, Request } from "express";

import Authentication from "../utils/Authentication";
import PasswordHash from "../utils/Authentication";

const db = require("../db/models");

// Controllers
class AuthController {
  register = async function (req: Request, res: Response): Promise<Response> {
    let { username, password } = req.body;
    const hashedPassword: string = await PasswordHash.passwordHash(password);

    const createdUser = await db.user.create({
      username,
      password: hashedPassword,
    });

    return res.send(createdUser);
  };

  login = async function (req: Request, res: Response): Promise<Response> {
    // TODO: cari data user by username
    let { username, password } = req?.body;

    const user = await db.user.findOne({
      where: { username },
    });

    // TODO: check password
    let compare = await Authentication.passwordCheck(password, user.password);

    // TODO: generate token
    if (compare) {
      let token = Authentication.generateToken(
        user.id,
        username,
        user.password
      );
      return res.send({
        token,
      });
    }

    return res.send("auth failed");
  };

  profile = function (req: Request, res: Response): Response {
    return res.send(req.app.locals.credential);
  };
}

// TODO: setiap selesai membuat
export default new AuthController();
