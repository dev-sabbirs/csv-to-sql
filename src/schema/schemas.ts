import { pgTable, serial, text, varchar, uuid } from "drizzle-orm/pg-core";
import {} from "drizzle-orm/pg-core";

export const csvToSql = pgTable("csvToSql", {
  id: serial("id"),
  uuid: uuid("uuid").primaryKey().defaultRandom().unique(),
  sqlFile: text("sqlFile").notNull(),
});
