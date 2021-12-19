import { Request, Response, NextFunction } from "express";

// TODO: setiap selesai membuat
export const auth = (req: Request, res: Response, next: NextFunction): any => {
  let auth = true;

  if (auth) {
    return next();
  } else {
    return res.send("unauthenticated");
  }
};
