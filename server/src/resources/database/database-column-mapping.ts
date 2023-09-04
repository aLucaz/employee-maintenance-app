import { EmployeeEntity } from "@/employee/domain/entity/employee-entity";

export const employeeColMapping: Record<keyof EmployeeEntity, string> = {
  id: "id",
  firstName: "first_name",
  lastName: "last_name",
  hireDate: "hire_date",
  phone: "phone",
  photo: "photo",
  address: "address",
  isActive: "is_active",
  department: "department",
  idDepartment: "idDepartment",
};
