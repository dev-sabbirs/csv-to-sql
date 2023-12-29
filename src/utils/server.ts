import Fastify, { FastifyInstance } from "fastify";

export const buildServer = async () => {
  const app: FastifyInstance = Fastify({
    logger: false /** need to made true */,
  });
  /**
   * Register all routes
   * LIKE
   * AUTH
   * USER
   * ROLES
   */

  /**
   * Register all plugins
   */
  return app;
};
