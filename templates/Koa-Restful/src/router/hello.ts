import Koa, { DefaultState, DefaultContext, Context, Next } from "koa";
import Router from "@koa/router";
import bodyParser from "koa-bodyparser";
const router = new Router();

router.use(bodyParser());

export default (server: Koa<DefaultState, DefaultContext>) => {
  server.use(async (ctx: Context, next: Next) => {
    router.get("/hello", async (ctx: any) => {
      ctx.body = "Welcome to Penumbra!";
    });

    server.use(router.routes()).use(router.allowedMethods());
    await next();
  });
};

