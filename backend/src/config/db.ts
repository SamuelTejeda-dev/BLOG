import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { NEON_URI } from "../constants/env";

//inizializza il DB NEON

const sql = neon(NEON_URI!);

export const db = drizzle({ client: sql });
