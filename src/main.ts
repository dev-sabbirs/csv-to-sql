import { FastifyInstance } from "fastify";
import { buildServer, shoutDown } from "./utils";
import { env } from "./configs";
import { signals } from "./constants";

/**
 * Run the server
 */
(async () => {
  const app: FastifyInstance = await buildServer();
  try {
    await app.listen({ port: env.PORT, host: env.HOST });
    console.log(`Server is listening at http://${env.HOST}:${env.PORT}`);
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
