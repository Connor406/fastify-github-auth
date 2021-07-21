"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@octokit/core");
const root = async (fastify, opts) => {
    fastify.get("/", async function (request, reply) {
        return { root: true };
    });
    fastify.get("/user/me", async function (req, _) {
        try {
            const octokit = new core_1.Octokit({
                auth: req.session.grant.response.access_token,
            });
            const data = await octokit.request("GET /user");
            return data;
        }
        catch (e) {
            fastify.log.error(e);
            throw fastify.httpErrors.badRequest();
        }
    });
};
exports.default = root;
