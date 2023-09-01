import createHttpError from "http-errors";
import { inject, injectable } from "inversify";

import { EmployeeEntity } from "@/employee/domain/entity/employee-entity";
import Logger from "@/resources/logger";

import { EmployeeRepository } from "../domain/employee-repository";
import { Types } from "../infrastructure/injection/types";

@injectable()
export class UpdateEmployeeService {
  constructor(
    @inject(Types.EmployeeRepository)
    private employeeRepository: EmployeeRepository,
  ) {}

  async execute(
    id: number,
    data: EmployeeEntity,
  ): Promise<EmployeeEntity | null> {
    Logger.info("Updating employee...");
    try {
      await this.employeeRepository.update(id, data);
      Logger.info("Employee updated.");
      return this.employeeRepository.getById(id);
    } catch (error) {
      throw new createHttpError.InternalServerError(
        "An internal error occurred.",
      );
    }
  }
}
