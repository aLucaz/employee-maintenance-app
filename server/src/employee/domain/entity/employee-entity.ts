export interface EmployeeEntity {
  id: number;
  firstName: string;
  lastName: string;
  hireDate: string;
  phone: string;
  address: string;
  photo: string;
  isActive: boolean;
  department: string;
}

export interface Duration {
  years: number;
  months: number;
  days: number;
}

export interface EmployeeResponse {
  formattedHireDate: string;
  hireDuration: Duration;
}
