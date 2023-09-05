import { EmployeeEntity } from "./entity/employee-entity";

export interface EmployeeRepository {
  create(data: EmployeeEntity): Promise<EmployeeEntity>;
  delete(id: number): Promise<void>;
  getAll(): Promise<Array<EmployeeEntity>>;
  getById(id: number): Promise<EmployeeEntity | null>;
  getByNamePhone(data: EmployeeEntity): Promise<EmployeeEntity | null>;
  update(id: number, data: EmployeeEntity): Promise<void>;
}
