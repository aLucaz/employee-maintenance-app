import { inject, injectable } from "inversify";

import {
  EmployeeEntity,
  EmployeeResponse,
} from "@/employee/domain/entity/employee-entity";
import Logger from "@/resources/logger";

import { EmployeeDateService } from "../domain/employee-date-service";
import { EmployeeRepository } from "../domain/employee-repository";
import { Types } from "../infrastructure/injection/types";

@injectable()
export class UpdateEmployeeService {
  constructor(
    @inject(Types.EmployeeRepository)
    private employeeRepository: EmployeeRepository,
    @inject(Types.EmployeeDateService)
    private employeeDateService: EmployeeDateService,
  ) {}

  async execute(
    id: number,
    data: EmployeeEntity,
  ): Promise<(EmployeeEntity & EmployeeResponse) | NonNullable<unknown>> {
    Logger.info("Updating employee...");
    await this.employeeRepository.update(id, data);
    Logger.info("Employee updated.");
    const employee = await this.employeeRepository.getById(id);
    if (!employee) {
      return {};
    }
    return this.employeeDateService.addResponseInfoToEntity(employee);
  }
}
