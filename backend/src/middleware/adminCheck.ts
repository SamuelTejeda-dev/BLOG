import { Request, Response, NextFunction } from "express";
import appAssert from "../utils/AppAssert";
import { ADMIN } from "../constants/env";

export const adminCheck = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const providedPassword = req.headers["authorization"]?.replace("Bearer ", "");
  console.log(providedPassword);

  appAssert(providedPassword === ADMIN, 401, "Non autorizzato");
  next();
};
