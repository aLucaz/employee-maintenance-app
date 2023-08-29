import dotenv from "dotenv";

dotenv.config();

class Environment {
  public NODE_ENV = process.env.NODE_ENV ?? "production";
  public LOG_LEVEL = process.env.LOG_LEVEL ?? "info";
  public PORT = process.env.PORT ?? 8000;
}

export default new Environment();
