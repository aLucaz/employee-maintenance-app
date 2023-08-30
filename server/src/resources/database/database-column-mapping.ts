import { Employee } from "@/employee/domain/entity/employee";

export const employeeColMapping: Record<keyof Employee, string> = {
  id: "id",
  firstName: "first_name",
  lastName: "last_name",
  hireDate: "hire_date",
  phone: "phone",
  address: "address",
};
