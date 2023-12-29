import { Pool } from "pg";
import { env } from "../configs";
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  connectionString: env.DATABASE_CONNECTION_URL,
  ssl: true,
});
export const db = drizzle(pool);
