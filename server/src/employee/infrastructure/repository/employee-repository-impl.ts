import { inject, injectable } from "inversify";

import { EmployeeRepository } from "@/employee/domain/employee-repository";
import { Employee } from "@/employee/domain/entity/employee";
import { DatabaseService } from "@/resources/database/database-service";

import { Types } from "../injection/types";
import EmployeeQueries from "./employee-queries";

@injectable()
export class EmployeeRepositoryImpl implements EmployeeRepository {
  constructor(
    @inject(Types.PostgresDatabaseService)
    private databaseService: DatabaseService,
  ) {}

  async create(data: Employee): Promise<void> {
    await this.databaseService.execute(EmployeeQueries.CREATE, data);
  }

  async delete(id: number): Promise<void> {
    await this.databaseService.execute(EmployeeQueries.DELETE, { id });
  }

  async getById(id: number): Promise<Employee | null> {
    const res = await this.databaseService.execute(EmployeeQueries.GET_BY_ID, {
      id,
    });
    if (res.rowCount === 0) {
      return null;
    }
    return res.rows[0];
  }

  async getByNamePhone(data: Employee): Promise<Employee> {
    const res = await this.databaseService.execute(
      EmployeeQueries.GET_BY_NAME_PHONE,
      data,
    );
    return res.rows[0];
  }

  async getAll(): Promise<Array<Employee>> {
    const res = await this.databaseService.execute(EmployeeQueries.GET_ALL);
    return res.rows;
  }

  async update(id: number, data: Employee): Promise<void> {
    await this.databaseService.execute(EmployeeQueries.UPDATE, {
      ...data,
      id,
    });
  }
}
