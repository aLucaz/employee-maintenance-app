import { inject, injectable } from "inversify";

import Logger from "@/resources/logger";

import { EmployeeRepository } from "../domain/employee-repository";
import { Employee } from "../domain/entity/employee";
import { Types } from "../infrastructure/injection/types";

@injectable()
export class CreateEmployeeService {
  constructor(
    @inject(Types.EmployeeRepository)
    private employeeRepository: EmployeeRepository,
  ) {}

  async execute(data: Employee): Promise<Employee> {
    Logger.info("Creating employee...");
    await this.employeeRepository.create(data);
    Logger.info("Employee created.");
    return this.employeeRepository.getByNamePhone(data);
  }
}
