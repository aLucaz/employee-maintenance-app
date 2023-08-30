import container from "../../employee/infrastructure/injection/container";
import { Types } from "../../employee/infrastructure/injection/types";
import Environment from "../environment";
import Logger from "../logger";
import script from "./database-script";
import { DatabaseService } from "./database-service";

const databaseService = container.get<DatabaseService>(
  Types.PostgresDatabaseService,
);

export async function startDatabase() {
  if (Environment.NODE_ENV === "development") {
    Logger.info("Starting database...");
    await databaseService.execute(script);
    Logger.info("Database started.");
  }
}
