import "reflect-metadata";
import { ApolloServer } from "apollo-server-koa";
import { Container } from "typedi";
import * as TypeORM from "typeorm";
import { buildSchema } from "type-graphql";


import { User } from "../schema";
import { UserResolver } from "../resolver";



TypeORM.useContainer(Container);

async function initialize() {
  await TypeORM.createConnection({
    type: "mysql",
    database: process.env.DB,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    port: 3306,
    host: "localhost",
    entities: [User],
    synchronize: true,
    logger: "advanced-console",
    logging: "all",
    dropSchema: true,
    cache: true
  });

  const schema = await buildSchema({
    resolvers: [UserResolver],
    container: Container,
  });
  
  const server = new ApolloServer({
    schema,
    context: async ({ req }) => {
      const context = {
        req
      };
      return context;
    },
    tracing: true,
    engine: true
  });

  return server;
}

export default initialize;
