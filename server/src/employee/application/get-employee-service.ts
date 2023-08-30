import createHttpError from "http-errors";
import { inject, injectable } from "inversify";

import { Employee } from "@/employee/domain/entity/employee";

import { EmployeeRepository } from "../domain/employee-repository";
import { Types } from "../infrastructure/injection/types";

@injectable()
export class GetEmployeeService {
  constructor(
    @inject(Types.EmployeeRepository)
    private employeeRepository: EmployeeRepository,
  ) {}

  async execute(id: number): Promise<Employee> {
    const employee = await this.employeeRepository.getById(id);
    if (!employee) {
      throw new createHttpError.NotFound(`Employee with id ${id} not found.`);
    }
    return employee;
  }
}
