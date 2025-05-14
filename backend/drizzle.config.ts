import { defineConfig } from "drizzle-kit";
import { NEON_URI } from "./src/constants/env";
import { config } from "dotenv";

config({ path: ".env" });

export default defineConfig({
  schema: "./src/models/PostModel.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: NEON_URI!,
  },
});
