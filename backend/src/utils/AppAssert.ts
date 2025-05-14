import assert from "node:assert";
import AppError from "./appError";
import { HttpStatusCode } from "../constants/http";

//appAssert è una funzione che verifica se una condizione è vera, in caso contrario lancia un errore di tipo AppError

type appAssert = (
  condition: any,
  httpStatusCode: HttpStatusCode,
  message: string
) => asserts condition;

//Asserts a condition and throws an AppError if the condition is falsy

const appAssert: appAssert = (condition, HttpStatusCode, message) =>
  assert(condition, new AppError(HttpStatusCode, message));

export default appAssert;
