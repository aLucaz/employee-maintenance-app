import createHttpError from "http-errors";
import { inject, injectable } from "inversify";

import Logger from "@/resources/logger";

import { EmployeeRepository } from "../domain/employee-repository";
import { Types } from "../infrastructure/injection/types";

@injectable()
export class DeleteEmployeeService {
  constructor(
    @inject(Types.EmployeeRepository)
    private employeeRepository: EmployeeRepository,
  ) {}

  async execute(id: number): Promise<void> {
    Logger.info("Deleting employee...");
    try {
      await this.employeeRepository.delete(id);
      Logger.info(`Employee ${id} deleted.`);
    } catch (error) {
      throw new createHttpError.InternalServerError(
        "An internal error occurred.",
      );
    }
  }
}
