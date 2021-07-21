"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("./schemas");
const example = async (fastify, opts) => {
    fastify.get("/", async function (request, reply) {
        reply.send("this is an example");
        return;
    });
    fastify.get("/test", { schema: schemas_1.TestSchema }, async function (request, reply) {
        try {
            return reply.send("nicce");
        }
        catch (e) {
            fastify.log.error(e);
            throw fastify.httpErrors.badRequest();
        }
    });
};
exports.default = example;
