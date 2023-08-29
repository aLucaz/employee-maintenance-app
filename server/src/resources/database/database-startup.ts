import Logger from "../logger";
import client from "./database-client";
import script from "./database-script";

export async function startDatabase() {
  try {
    await client.connect();
    await client.query(script);
  } catch (err) {
    Logger.error("Error initializing database", err as Error);
    throw err;
  } finally {
    await client.end();
  }
}
