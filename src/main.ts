import { FastifyInstance } from "fastify";
import { buildServer, logger, shoutDown } from "./utils";
import { env } from "./configs";
import { signals } from "./constants";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "./database";

/**
 * Run the server
 */
(async () => {
  const app: FastifyInstance = await buildServer();
  try {
    await migrate(db, {
      migrationsFolder: "./migrations",
    });
    await app.listen({ port: env.PORT, host: env.HOST });
    logger.info(`Server is listening at http://${env.HOST}:${env.PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  } finally {
    for (const signal of signals) {
      process.on(signal, () => {
        shoutDown({
          app,
        });
      });
    }
  }
})();
