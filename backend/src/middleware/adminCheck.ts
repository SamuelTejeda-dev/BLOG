import { Request, Response, NextFunction } from "express";
import appAssert from "../utils/AppAssert";
import { ADMIN } from "../constants/env";

export const adminCheck = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const admin = req.params.admin;

  appAssert(admin === ADMIN, 401, "Non autorizzato");
  next();
};
