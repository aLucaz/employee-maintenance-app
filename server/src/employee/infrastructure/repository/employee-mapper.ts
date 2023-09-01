import { QueryResultRow } from "pg";

import { EmployeeEntity } from "@/employee/domain/entity/employee-entity";

export function fromEmployeeModelToDto(model: QueryResultRow): EmployeeEntity {
  return {
    id: model.id,
    firstName: model.first_name,
    lastName: model.last_name,
    hireDate: model.hire_date,
    phone: model.phone,
    address: model.address,
    photo: model.photo,
    isActive: model.is_active,
    department: model.department,
  };
}

export function fromEmployeeModelListToDto(
  models: Array<QueryResultRow>,
): Array<EmployeeEntity> {
  const employees: EmployeeEntity[] = [];
  models.forEach((model) => {
    const employee = fromEmployeeModelToDto(model);
    employees.push(employee);
  });
  return employees;
}
