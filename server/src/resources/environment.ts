import dotenv from "dotenv";

dotenv.config();

class Environment {
  public NODE_ENV = process.env.NODE_ENV ?? "production";
  public LOG_LEVEL = process.env.LOG_LEVEL ?? "info";
  public PORT = process.env.PORT ?? 8000;

  public PG_USERNAME = process.env.PG_USERNAME;
  public PG_PASSWORD = process.env.PG_PASSWORD;
  public PG_HOST = process.env.PG_HOST ?? "localhost";
  public PG_DATABASE = process.env.PG_DATABASE;
  public PG_PORT = process.env.PG_PORT ? Number(process.env.PG_PORT) : 5432;
}

export default new Environment();
