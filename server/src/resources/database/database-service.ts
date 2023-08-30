import { injectable } from "inversify";
import { Client, QueryResult } from "pg";

import { Employee } from "../../employee/domain/entity/employee";
import Environment from "../environment";
import Logger from "../logger";

@injectable()
export class DatabaseService {
  private getConnection() {
    return new Client({
      user: Environment.PG_USERNAME,
      password: Environment.PG_PASSWORD,
      host: Environment.PG_HOST,
      database: Environment.PG_DATABASE,
      port: Environment.PG_PORT,
    });
  }

  async execute(
    query: string,
    data?: Employee | { id: number },
  ): Promise<QueryResult> {
    const client = this.getConnection();
    try {
      await client.connect();
      let newQuery = query;
      if (data) {
        newQuery = this.bind(query, data);
        Logger.info(`Running query: ${newQuery}`);
      }
      const res = await client.query(newQuery);
      Logger.info("Query executed.");
      return res;
    } catch (err) {
      Logger.error("Error executing query:", err);
      throw err;
    } finally {
      await client.end();
    }
  }

  private bind(query: string, data: Employee | { id: number }): string {
    let bindedQuery = `${query}`;
    Object.entries(data).forEach(([key, value]) => {
      bindedQuery = bindedQuery.replace(
        new RegExp(`(:${key})\\b`, "g"),
        `'${value}'`,
      );
    });
    return bindedQuery;
  }
}
