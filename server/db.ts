import * as dotenv from "dotenv";
dotenv.config();

import * as schema from "@shared/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";

type DB = NodePgDatabase<typeof schema>;

export const loadDb = async (): Promise<{ db: DB; pool: Pool }> => {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL must be set. Did you forget to provision a database?");
  }

  const pool = new Pool({
    connectionString,
    ssl: connectionString.includes("render.com") // 👈 Optional but useful
      ? { rejectUnauthorized: false }
      : undefined,
  });

  const db = drizzle(pool, { schema });

  return { db, pool };
};
