import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { NEON_URI } from "../constants/env";

const sql = neon(NEON_URI!);
export const db = drizzle({ client: sql });
