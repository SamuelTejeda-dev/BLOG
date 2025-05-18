import rateLimit from "express-rate-limit";
import { TOO_MANY_REQUESTS } from "../constants/http";

export const loginRquestLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minuti
  max: 100, // max 100 richieste per IP
  standardHeaders: true, // invia gli header RateLimit
  legacyHeaders: false, // disattiva X-RateLimit-* vecchi
  handler: (_, res) => {
    res.status(TOO_MANY_REQUESTS).json({
      success: false,
      message:
        "Hai superato il numero massimo di richieste. Riprova tra 15 minuti.",
    });
  },
});

export const blogViewLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minuti
  max: 100, // max 200 richieste per IP
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_, res) => {
    res.status(TOO_MANY_REQUESTS).json({
      success: false,
      message: "Too many requests, try again later!",
    });
  },
});

export const postCreationLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minuti
  max: 3, // max 5 articoli ogni 10 minuti per IP
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_, res) => {
    res.status(TOO_MANY_REQUESTS).json({
      success: false,
      message: "Too many requests, try again later!",
    });
  },
});
