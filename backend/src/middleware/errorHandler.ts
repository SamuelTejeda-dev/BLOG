import { ErrorRequestHandler, Response } from "express";
import { INTERNAL_SERVER_ERROR } from "../constants/http";
import AppError from "../utils/appError";

const handleAppError = (res: Response, error: AppError) => {
  return res.status(error.statusCode).json({
    message: error.message,
    errorCode: error,
  });
};

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(`PATH: ${req.path}`, error);

  //   if (error instanceof z.ZodError) {
  //     handleZodError(res, error);
  //   }

  if (error instanceof AppError) {
    handleAppError(res, error);
  }

  res.status(INTERNAL_SERVER_ERROR).send("Internal server errror");
};

export default errorHandler;
