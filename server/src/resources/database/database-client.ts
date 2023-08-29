import { Client } from "pg";

import Environment from "../environment";

const client = new Client({
  user: Environment.PG_USERNAME,
  password: Environment.PG_PASSWORD,
  host: Environment.PG_HOST,
  database: Environment.PG_DATABASE,
  port: Environment.PG_PORT,
});

export default client;
