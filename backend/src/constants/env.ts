//questo codice definisce le variabili di ambiente e torna un errore se non definite, in modo che il type checking non dia problemi

const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;

  if (value === undefined) {
    throw Error(`Missing String environment variable for ${key}`);
  }

  return value;
};

export const NODE_ENV = getEnv("NODE_ENV", "development");
export const PORT = getEnv("PORT", "4004");
export const APP_ORIGIN = getEnv("APP_ORIGIN");
export const SESSION_SECRET = getEnv("SESSION_SECRET");
export const NEON_URI = getEnv("NEON_URI");
