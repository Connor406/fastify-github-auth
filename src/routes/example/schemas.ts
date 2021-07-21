import { FastifySchema } from "fastify";

export const TestSchema: FastifySchema = {
  response: {
    200: { message: { type: "string" } },
  },
};
