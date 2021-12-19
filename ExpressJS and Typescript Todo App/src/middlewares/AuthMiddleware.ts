import { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  let auth = true;

  if (auth) {
    return next();
  } else {
    return res.send("unauthenticated");
  }
};
