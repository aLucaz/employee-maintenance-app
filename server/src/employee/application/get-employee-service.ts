import createHttpError from "http-errors";
import { inject, injectable } from "inversify";

import { EmployeeDateService } from "@/employee/domain/employee-date-service";
import {
  EmployeeEntity,
  EmployeeResponse,
} from "@/employee/domain/entity/employee-entity";

import { EmployeeRepository } from "../domain/employee-repository";
import { Types } from "../infrastructure/injection/types";

@injectable()
export class GetEmployeeService {
  constructor(
    @inject(Types.EmployeeRepository)
    private employeeRepository: EmployeeRepository,
    @inject(Types.EmployeeDateService)
    private employeeDateService: EmployeeDateService,
  ) {}

  async execute(id: number): Promise<EmployeeEntity & EmployeeResponse> {
    const employee = await this.employeeRepository.getById(id);
    if (!employee) {
      throw new createHttpError.NotFound(`Employee with id ${id} not found.`);
    }
    return this.employeeDateService.addResponseInfoToEntity(employee);
  }
}
