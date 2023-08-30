import { Employee } from "./entity/employee";

export interface EmployeeRepository {
  create(data: Employee): Promise<void>;
  // delete(id: string): Promise<void>;
  // getAll(): Promise<Array<Employee>>;
  // get(id: string): Promise<Employee>;
  // update(id: string, data: Employee): Promise<void>;
}
