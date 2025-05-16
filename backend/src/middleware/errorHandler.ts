import { ErrorRequestHandler, Response } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/http";
import AppError from "../utils/appError";
import { z } from "zod";
import { NeonDbError } from "@neondatabase/serverless";
import { json } from "drizzle-orm/gel-core";
import { NODE_ENV } from "../constants/env";

const handleNeonError = (res: Response, error: NeonDbError) => {
  return res.status(BAD_REQUEST).json({
    message: error.message,
    errorCode: error.code,
  });
};

const handleAppError = (res: Response, error: AppError) => {
  return res.status(error.statusCode).json({
    message: error.message,
    errorCode: error,
  });
};

const handleZodError = (res: Response, error: z.ZodError) => {
  const errors = error.issues.map((err) => ({
    path: err.path.join("."),
    message: err.message,
  }));
  return res.status(BAD_REQUEST).json({ message: error.message, errors });
};

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(`ERROR - PATH: ${req.path}`, error);

  if (error instanceof NeonDbError) {
    handleNeonError(res, error);
  }

  if (error instanceof z.ZodError) {
    handleZodError(res, error);
  }

  if (error instanceof AppError) {
    handleAppError(res, error);
  }

  res.status(INTERNAL_SERVER_ERROR).json({
    message: "Errore interno del server",
    error: NODE_ENV === "development" ? error : undefined,
  });
};

export default errorHandler;
