import createHttpError from "http-errors";
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
  ): Promise<EmployeeEntity & EmployeeResponse> {
    const res = await this.employeeRepository.getByNamePhone(data);
    if (res) {
      throw new createHttpError.InternalServerError(
        `Employee ${data.firstName} already exist.`,
      );
    }
    Logger.info("Creating employee...");
    const employee = await this.employeeRepository.create(data);
    Logger.info("Employee created.");
    return this.employeeDateService.addResponseInfoToEntity(employee);
  }
}
