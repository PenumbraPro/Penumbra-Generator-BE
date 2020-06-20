import "reflect-metadata";
import Koa from "koa";
import Router from "@koa/router";
import logger from "koa-logger";
import { createConnection, useContainer } from "typeorm";
import { Container } from "typedi";
import { User } from "./entity/user";
import cors from "./middleware/cors";
import { log } from "./util";
import hello from "./router/hello";
import bye from "./router/bye";

useContainer(Container);

const app = new Koa();
const router = new Router();

app.use(logger());
app.use(cors);

router.get("/", (ctx) => {
  ctx.body = "芜湖!";
});

// 引入路由方式1
hello(app);

// 方式2
app.use(bye.routes()).use(router.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

// (async () => {
//   log("=== TypeORM Connecting ===");

//   try {
//     const connection = await createConnection();

//     log("=== Database Connection Established ===");

//     await connection.manager.insert(User, {
//       name: "芜湖!",
//       age: 18,
//       description: "纯nt",
//     });
//   } catch (error) {
//     log(error, "red");
//   }
// })();

app.listen(3099, () => {
  log("Application Start On: http://localhost:3099");
});
