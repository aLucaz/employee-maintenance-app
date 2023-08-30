import { inject, injectable } from "inversify";

import { DatabaseService } from "../../../resources/database/database-service";
import { EmployeeRepository } from "../../domain/employee-repository";
import { Employee } from "../../domain/entity/employee";
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

  // delete(id: string): Promise<void> {
  //   return Promise.resolve(undefined);
  // }
  //
  // get(id: string): Promise<Employee> {
  //   return Promise.resolve(undefined);
  // }
  //
  // getAll(): Promise<Array<Employee>> {
  //   return Promise.resolve(undefined);
  // }
  //
  // update(id: string, data: Employee): Promise<void> {
  //   return Promise.resolve(undefined);
  // }
}
