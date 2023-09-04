import { inject, injectable } from "inversify";

import Logger from "@/resources/logger";

import { DepartmentRepository } from "../domain/department-repository";
import { EmployeeInDepartmentEntity } from "../domain/entity/employee-in-department-entity";
import { Types } from "../infrastructure/injection/types";

@injectable()
export class GetDepartmentHistoryService {
  constructor(
    @inject(Types.DepartmentRepository)
    private departmentRepository: DepartmentRepository,
  ) {}

  async execute(
    idEmployee: number,
  ): Promise<Array<EmployeeInDepartmentEntity>> {
    Logger.info("Searching employees...");
    return this.departmentRepository.getDepartmentHistory(idEmployee);
  }
}
