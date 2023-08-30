import createHttpError from "http-errors";
import { inject, injectable } from "inversify";

import Logger from "@/resources/logger";

import { EmployeeRepository } from "../domain/employee-repository";
import { Types } from "../infrastructure/injection/types";

@injectable()
export class GetEmployeeService {
  constructor(
    @inject(Types.EmployeeRepository)
    private employeeRepository: EmployeeRepository,
  ) {}

  async execute(id: number) {
    try {
      const employee = await this.employeeRepository.getById(id);
      Logger.info("Employee found!");
      return employee;
    } catch (error) {
      throw new createHttpError.InternalServerError(
        "An internal error occurred.",
      );
    }
  }
}
