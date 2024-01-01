import {
  pgTable,
  serial,
  text,
  varchar,
  uuid,
  numeric,
} from "drizzle-orm/pg-core";
import {} from "drizzle-orm/pg-core";

export const csvToSql = pgTable("csvToSql", {
  id: serial("id"),
  uuid: uuid("uuid").primaryKey().defaultRandom().unique(),
  csvFile: varchar("sqlFile").notNull(),
  sqlFileName: varchar("sqlFileName"),
  converted: numeric("converted"),
});
