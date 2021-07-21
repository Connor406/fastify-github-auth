"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const path_1 = require("path");
const fastify_autoload_1 = require("fastify-autoload");
const app = async (fastify, opts) => {
    fastify.decorate;
    void fastify.register(fastify_autoload_1.default, {
        dir: path_1.join(__dirname, "plugins"),
        options: opts,
    });
    void fastify.register(fastify_autoload_1.default, {
        dir: path_1.join(__dirname, "routes"),
        options: opts,
    });
};
exports.app = app;
exports.default = app;
