import { Context, Next } from "koa";
import Router from "@koa/router";

const router = new Router();

router.get("/bye", async (ctx: Context, next: Next) => {
  ctx.body = "Bye!";
});

export default router;
