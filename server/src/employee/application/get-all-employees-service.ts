import { inject, injectable } from "inversify";

import { Employee } from "@/employee/domain/entity/employee";
import Logger from "@/resources/logger";

import { EmployeeRepository } from "../domain/employee-repository";
import { Types } from "../infrastructure/injection/types";

@injectable()
export class GetAllEmployeesService {
  constructor(
    @inject(Types.EmployeeRepository)
    private employeeRepository: EmployeeRepository,
  ) {}

  async execute(): Promise<Array<Employee>> {
    Logger.info("Searching tasks...");
    return this.employeeRepository.getAll();
  }
}
