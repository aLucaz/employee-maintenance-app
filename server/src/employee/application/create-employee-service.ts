import createHttpError from "http-errors";
import { inject, injectable } from "inversify";

import Logger from "../../resources/logger";
import { EmployeeRepository } from "../domain/employee-repository";
import { Employee } from "../domain/entity/employee";
import { Types } from "../infrastructure/injection/types";

@injectable()
export class CreateEmployeeService {
  constructor(
    @inject(Types.EmployeeRepository)
    private employeeRepository: EmployeeRepository,
  ) {}

  async execute(data: Employee): Promise<void> {
    Logger.info("Creating employee...");
    try {
      await this.employeeRepository.create(data);
      Logger.info("Employee created.");
    } catch (error) {
      throw new createHttpError.InternalServerError(
        "An internal error occurred.",
      );
    }
  }
}
