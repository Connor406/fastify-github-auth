import fp from "fastify-plugin";
import cookie from "fastify-cookie";
import session from "fastify-session";
import grant from "grant";

export default fp(async (fastify) => {
  return fastify
    .register(cookie)
    .register(session, {
      secret: "0123456789012345678901234567890123456789",
      cookie: { secure: false },
    })
    .register(
      grant.fastify()({
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
      })
    );
});
