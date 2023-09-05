import { inject, injectable } from "inversify";

import { EmployeeRepository } from "@/employee/domain/employee-repository";
import { EmployeeEntity } from "@/employee/domain/entity/employee-entity";
import { DatabaseService } from "@/resources/database/database-service";

import { Types } from "../injection/types";
import EmployeeQueries from "./employee-queries";

@injectable()
export class EmployeeRepositoryImpl implements EmployeeRepository {
  constructor(
    @inject(Types.PostgresDatabaseService)
    private databaseService: DatabaseService,
  ) {}

  async create(data: EmployeeEntity): Promise<EmployeeEntity> {
    const values = [
      data.firstName,
      data.lastName,
      data.hireDate,
      data.phone,
      data.address,
      data.photo,
    ];
    const res = await this.databaseService.executeSecure(
      EmployeeQueries.CREATE,
      values,
    );
    return res.rows[0];
  }

  async delete(id: number): Promise<void> {
    await this.databaseService.execute(EmployeeQueries.DELETE, { id });
  }

  async getById(id: number): Promise<EmployeeEntity | null> {
    const res = await this.databaseService.execute(EmployeeQueries.GET_BY_ID, {
      id,
    });
    if (res.rowCount === 0) {
      return null;
    }
    return res.rows[0];
  }

  async getByNamePhone(data: EmployeeEntity): Promise<EmployeeEntity | null> {
    const res = await this.databaseService.execute(
      EmployeeQueries.GET_BY_NAME_PHONE,
      data,
    );
    if (res.rowCount === 0) {
      return null;
    }
    return res.rows[0];
  }

  async getAll(): Promise<Array<EmployeeEntity>> {
    const res = await this.databaseService.execute(EmployeeQueries.GET_ALL);
    return res.rows;
  }

  async update(id: number, data: EmployeeEntity): Promise<EmployeeEntity> {
    const res = await this.databaseService.execute(EmployeeQueries.UPDATE, {
      ...data,
      id,
    });
    return res.rows[0];
  }
}
