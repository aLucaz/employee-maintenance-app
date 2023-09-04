import { inject, injectable } from "inversify";

import { DepartmentRepository } from "@/department/domain/department-repository";
import { DepartmentEntity } from "@/department/domain/entity/department-entity";
import { EmployeeInDepartmentEntity } from "@/department/domain/entity/employee-in-department-entity";
import { Types } from "@/department/infrastructure/injection/types";
import DepartmentQueries from "@/department/infrastructure/repository/department-queries";
import { DatabaseService } from "@/resources/database/database-service";

import { fromModelListToDto } from "./department-mapper";

@injectable()
export class DepartmentRepositoryImpl implements DepartmentRepository {
  constructor(
    @inject(Types.PostgresDatabaseService)
    private databaseService: DatabaseService,
  ) {}

  async getAll(): Promise<Array<DepartmentEntity>> {
    const res = await this.databaseService.execute(DepartmentQueries.GET_ALL);
    return res.rows;
  }

  async deactivateCurrentDepartment(
    data: EmployeeInDepartmentEntity,
  ): Promise<void> {
    await this.databaseService.execute(
      DepartmentQueries.DEACTIVATE_CURRENT_DEPARTMENT,
      data,
    );
  }

  async addEmployeeInDepartment(
    data: EmployeeInDepartmentEntity,
  ): Promise<void> {
    await this.databaseService.execute(
      DepartmentQueries.ADD_EMPLOYEE_IN_DEPARTMENT,
      data,
    );
  }

  async searchEmployeeInDepartment(
    data: EmployeeInDepartmentEntity,
  ): Promise<EmployeeInDepartmentEntity | null> {
    const res = await this.databaseService.execute(
      DepartmentQueries.SEARCH_EMPLOYEE_IN_DEPARTMENT,
      data,
    );
    if (res.rowCount === 0) {
      return null;
    }
    return res.rows[0];
  }

  async getDepartmentHistory(
    idEmployee: number,
  ): Promise<EmployeeInDepartmentEntity[]> {
    const res = await this.databaseService.execute(
      DepartmentQueries.SEARCH_EMPLOYEE_HISTORY,
      { idEmployee },
    );
    return fromModelListToDto(res.rows);
  }
}
