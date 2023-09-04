import { format } from "date-fns";
import { QueryResultRow } from "pg";

import { EmployeeInDepartmentEntity } from "@/department/domain/entity/employee-in-department-entity";

export function fromModelToDto(
  model: QueryResultRow,
): EmployeeInDepartmentEntity {
  return {
    id: model.id,
    idEmployee: model.id_employee,
    idDepartment: model.id_department,
    departmentName: model.departmentName,
    startDate: format(model.start_date, "yyyy-MM-dd"),
    endDate: model.end_date ? format(model.end_date, "yyyy-MM-dd") : "present",
    isActive: model.is_active,
  };
}

export function fromModelListToDto(
  models: Array<QueryResultRow>,
): Array<EmployeeInDepartmentEntity> {
  const employeesInDep: EmployeeInDepartmentEntity[] = [];
  models.forEach((model) => {
    const employeeInDep = fromModelToDto(model);
    employeesInDep.push(employeeInDep);
  });
  return employeesInDep;
}
