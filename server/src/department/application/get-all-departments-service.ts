import { inject, injectable } from "inversify";

import { DepartmentRepository } from "@/department/domain/department-repository";
import { DepartmentEntity } from "@/department/domain/entity/department-entity";
import { Types } from "@/department/infrastructure/injection/types";
import Logger from "@/resources/logger";

@injectable()
export class GetAllDepartmentsService {
  constructor(
    @inject(Types.DepartmentRepository)
    private departmentRepository: DepartmentRepository,
  ) {}

  async execute(): Promise<Array<DepartmentEntity>> {
    Logger.info("Searching departments...");
    return await this.departmentRepository.getAll();
  }
}
