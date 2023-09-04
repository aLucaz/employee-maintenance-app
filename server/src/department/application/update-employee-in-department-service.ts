import createHttpError from "http-errors";
import { inject, injectable } from "inversify";

import { EmployeeDateService } from "@/employee/domain/employee-date-service";
import { EmployeeRepository } from "@/employee/domain/employee-repository";
import { EmployeeEntity } from "@/employee/domain/entity/employee-entity";
import Logger from "@/resources/logger";

import { DepartmentRepository } from "../domain/department-repository";
import { EmployeeInDepartmentEntity } from "../domain/entity/employee-in-department-entity";
import { Types } from "../infrastructure/injection/types";

@injectable()
export class UpdateEmployeeInDepartmentService {
  constructor(
    @inject(Types.DepartmentRepository)
    private departmentRepository: DepartmentRepository,
    @inject(Types.EmployeeRepository)
    private employeeRepository: EmployeeRepository,
    @inject(Types.EmployeeDateService)
    private employeeDateService: EmployeeDateService,
  ) {}

  async execute(
    request: EmployeeInDepartmentEntity,
  ): Promise<EmployeeEntity | NonNullable<unknown>> {
    const empInDep =
      await this.departmentRepository.searchEmployeeInDepartment(request);
    if (empInDep !== null) {
      throw new createHttpError.InternalServerError(
        `Employee with id ${request.idEmployee} already in department ${request.idDepartment}.`,
      );
    }
    Logger.info("Adding employee in department...");
    await this.departmentRepository.deactivateCurrentDepartment(request);
    await this.departmentRepository.addEmployeeInDepartment(request);
    Logger.info("Employee updated.");
    const employee = await this.employeeRepository.getById(request.idEmployee);
    if (!employee) {
      return {};
    }
    return this.employeeDateService.addResponseInfoToEntity(employee);
  }
}
