import * as dotenv from "dotenv";
dotenv.config();

import * as schema from "@shared/schema";

import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import type { NeonDatabase } from "drizzle-orm/neon-serverless";

type DB = NodePgDatabase<typeof schema> | NeonDatabase<typeof schema>;

export const loadDb = async (): Promise<{ db: DB; pool: any }> => {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL must be set. Did you forget to provision a database?");
  }

  const isProduction = process.env.NODE_ENV === "production";

  if (isProduction) {
    const { Pool, neonConfig } = await import("@neondatabase/serverless");
    const { drizzle } = await import("drizzle-orm/neon-serverless");
    const ws = (await import("ws")).default;

    neonConfig.webSocketConstructor = ws;

    const pool = new Pool({ connectionString });
    const db = drizzle({ client: pool, schema });

    return { db, pool };
  } else {
    const pgModule = await import("pg");
    const Pool = pgModule.default?.Pool || pgModule.Pool; // ✅ fix here
    const { drizzle } = await import("drizzle-orm/node-postgres");

    const pool = new Pool({ connectionString });
    const db = drizzle(pool, { schema });

    return { db, pool };
  }
};
