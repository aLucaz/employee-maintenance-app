import { injectable } from "inversify";
import { Client, QueryResult } from "pg";

import { EmployeeInDepartmentEntity } from "@/department/domain/entity/employee-in-department-entity";
import { EmployeeEntity } from "@/employee/domain/entity/employee-entity";
import { employeeColMapping } from "@/resources/database/database-column-mapping";

import Environment from "../environment";
import Logger from "../logger";

type Payload = Partial<EmployeeEntity> | Partial<EmployeeInDepartmentEntity>;

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

  async execute(query: string, payload?: Payload): Promise<QueryResult> {
    const client = this.getConnection();
    try {
      await client.connect();
      const bindedQuery = this.bindValuesToQuery(query, payload);
      Logger.info(`Running query: ${bindedQuery}`);
      const res = await client.query(bindedQuery);
      Logger.info("Query executed.");
      return res;
    } catch (err) {
      Logger.error("Error executing query:", err);
      throw err;
    } finally {
      await client.end();
    }
  }

  private bindValuesToQuery(query: string, payload?: Payload): string {
    if (!payload) {
      return query;
    }
    const { id, ...data } = payload;
    let bindedQuery = query;
    if (id) {
      bindedQuery = this.bindIdToQuery(bindedQuery, id);
    }
    if (data) {
      if (this.isDynamicUpdateQuery(query)) {
        bindedQuery = this.bindUpdateStatementToQuery(bindedQuery, data);
      } else {
        bindedQuery = this.bindDataToQuery(bindedQuery, data);
      }
    }
    return bindedQuery;
  }

  private isDynamicUpdateQuery(query: string): boolean {
    return query.includes("SET :updates");
  }

  private bindDataToQuery(query: string, data: Payload): string {
    let bindedQuery = `${query}`;
    Object.entries(data).forEach(([key, value]) => {
      const pattern = this.getPattern(key);
      bindedQuery = bindedQuery.replace(pattern, `'${value}'`);
    });
    return bindedQuery;
  }

  private bindUpdateStatementToQuery(query: string, data: Payload): string {
    const setStatement = Object.entries(data)
      .map(
        ([key, value]) =>
          `${employeeColMapping[key as keyof EmployeeEntity]} = '${value}'`,
      )
      .join(", ");
    const pattern = this.getPattern("updates");
    return query.replace(pattern, `${setStatement}`);
  }

  private bindIdToQuery(bindedQuery: string, id: number) {
    const pattern = this.getPattern("id");
    return bindedQuery.replace(pattern, `'${id}'`);
  }

  private getPattern(key: string) {
    return new RegExp(`(:${key})\\b`, "g");
  }
}
