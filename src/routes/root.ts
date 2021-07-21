import { FastifyPluginAsync } from "fastify";
import { Octokit } from "@octokit/core";

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    return { root: true };
  });

  fastify.get("/user/me", async function (req, _) {
    try {
      const octokit = new Octokit({
        auth: req.session.grant.response.access_token,
      });

      const data = await octokit.request("GET /user");

      return data;
    } catch (e) {
      fastify.log.error(e);
      throw fastify.httpErrors.badRequest();
    }
  });
};

export default root;
