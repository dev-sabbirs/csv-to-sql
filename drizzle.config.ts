import type { Config } from "drizzle-kit";

export default {
  out: "./migrations",
  schema: "./src/schema/schemas.ts",
  // driver: "pg",
  breakpoints: false,
} satisfies Config;
