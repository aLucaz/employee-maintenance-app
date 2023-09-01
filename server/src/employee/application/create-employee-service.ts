import { inject, injectable } from "inversify";

import { EmployeeDateService } from "@/employee/domain/employee-date-service";
import Logger from "@/resources/logger";

import { EmployeeRepository } from "../domain/employee-repository";
import {
  EmployeeEntity,
  EmployeeResponse,
} from "../domain/entity/employee-entity";
import { Types } from "../infrastructure/injection/types";

@injectable()
export class CreateEmployeeService {
  constructor(
    @inject(Types.EmployeeRepository)
    private employeeRepository: EmployeeRepository,
    @inject(Types.EmployeeDateService)
    private employeeDateService: EmployeeDateService,
  ) {}

  async execute(
    data: EmployeeEntity,
  ): Promise<(EmployeeEntity & EmployeeResponse) | NonNullable<unknown>> {
    Logger.info("Creating employee...");
    await this.employeeRepository.create(data);
    Logger.info("Employee created.");
    const employee = await this.employeeRepository.getByNamePhone(data);
    if (!employee) {
      return {};
    }
    return this.employeeDateService.addResponseInfoToEntity(employee);
  }
}
