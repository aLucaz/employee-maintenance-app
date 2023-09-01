import { inject, injectable } from "inversify";

import { EmployeeDateService } from "@/employee/domain/employee-date-service";
import {
  EmployeeEntity,
  EmployeeResponse,
} from "@/employee/domain/entity/employee-entity";
import Logger from "@/resources/logger";

import { EmployeeRepository } from "../domain/employee-repository";
import { Types } from "../infrastructure/injection/types";

@injectable()
export class GetAllEmployeesService {
  constructor(
    @inject(Types.EmployeeRepository)
    private employeeRepository: EmployeeRepository,
    @inject(Types.EmployeeDateService)
    private employeeDateService: EmployeeDateService,
  ) {}

  async execute(): Promise<Array<EmployeeEntity & EmployeeResponse>> {
    Logger.info("Searching tasks...");
    const employees = await this.employeeRepository.getAll();
    return this.employeeDateService.addResponseInfoToEntityList(employees);
  }
}
