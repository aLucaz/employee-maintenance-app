import { Employee } from "./entity/employee";

export interface EmployeeRepository {
  create(data: Employee): Promise<void>;
  delete(id: number): Promise<void>;
  getAll(): Promise<Array<Employee>>;
  getById(id: number): Promise<Employee>;
  getByNamePhone(data: Employee): Promise<Employee>;
  update(id: number, data: Employee): Promise<void>;
}
