import { HttpStatusCode } from "../constants/http";

//appError è una classe che estende la classe Error di javascript
// in modo da avere un errore personalizzato con un codice di stato http e un codice di errore dell'applicazione

export class AppError extends Error {
  constructor(public statusCode: HttpStatusCode, public message: string) {
    super(message);
  }
}

export default AppError;
