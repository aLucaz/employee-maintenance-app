import { DepartmentEntity } from "@/department/domain/entity/department-entity";

import { EmployeeInDepartmentEntity } from "./entity/employee-in-department-entity";

export interface DepartmentRepository {
  getAll(): Promise<Array<DepartmentEntity>>;
  searchEmployeeInDepartment(
    data: EmployeeInDepartmentEntity,
  ): Promise<EmployeeInDepartmentEntity | null>;
  deactivateCurrentDepartment(data: EmployeeInDepartmentEntity): Promise<void>;
  addEmployeeInDepartment(data: EmployeeInDepartmentEntity): Promise<void>;
  getDepartmentHistory(
    idEmployee: number,
  ): Promise<Array<EmployeeInDepartmentEntity>>;
}
