import { Request, Response, NextFunction } from "express";
import { UNAUTHORIZED } from "../constants/http";

//middleware che verifica se si è admin o meno

export const isAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req.session && req.session.isAdmin) {
    return next();
  }
  res.status(UNAUTHORIZED).json({ message: "You are not authorized" });
};
