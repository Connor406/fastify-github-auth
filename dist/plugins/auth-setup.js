"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = require("fastify-plugin");
const fastify_cookie_1 = require("fastify-cookie");
const fastify_session_1 = require("fastify-session");
const grant_1 = require("grant");
exports.default = fastify_plugin_1.default(async (fastify) => {
    return fastify
        .register(fastify_cookie_1.default)
        .register(fastify_session_1.default, {
        secret: "0123456789012345678901234567890123456789",
        cookie: { secure: false },
    })
        .register(grant_1.default.fastify()({
        defaults: {
            transport: "session",
            origin: process.env.APP_ORIGIN,
        },
        github: {
            key: process.env.GH_CLIENT_ID,
            secret: process.env.GH_CLIENT_SECRET,
            callback: "/",
            scope: ["user:email"],
        },
    }));
});
