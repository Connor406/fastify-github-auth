import { FastifyPluginAsync } from "fastify";
import { TestSchema } from "./schemas";

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    reply.send("this is an example");
    return;
  });

  fastify.get("/test", { schema: TestSchema }, async function (request, reply) {
    try {
      return reply.send("nicce");
    } catch (e) {
      fastify.log.error(e);
      throw fastify.httpErrors.badRequest();
    }
  });
};

export default example;
