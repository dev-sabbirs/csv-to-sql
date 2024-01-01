import { bigint } from "drizzle-orm/pg-core";
import {
  pgTable,
  serial,
  timestamp,
  varchar,
  uuid,
  integer,
} from "drizzle-orm/pg-core";
import {} from "drizzle-orm/pg-core";

export const csvToSql = pgTable(
  "csvToSql",
  {
    id: serial("id"),
    uuid: uuid("uuid").primaryKey().defaultRandom().unique(),
    inputFile: varchar("inputFile").notNull(),
    outputFile: varchar("outputFile"),
    converted: bigint("converted", {
      mode: "number",
    }).default(0),

    createdAt: timestamp("createdAt", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updatedAt", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (t) => ({})
);
