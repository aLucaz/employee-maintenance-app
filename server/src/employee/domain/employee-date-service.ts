import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  format,
} from "date-fns";
import { injectable } from "inversify";

import {
  Duration,
  EmployeeEntity,
  EmployeeResponse,
} from "@/employee/domain/entity/employee-entity";
import Logger from "@/resources/logger";

@injectable()
export class EmployeeDateService {
  private getDurationDate(dateStr: string): Duration {
    const startDate = new Date(dateStr);
    const endDate = new Date();
    const years = differenceInYears(endDate, startDate);
    const months = differenceInMonths(endDate, startDate) % 12;
    const days = differenceInDays(endDate, startDate) % 30;
    return { years, months, days };
  }

  private getFormattedDate(dateStr: string, formatStr: string): string {
    try {
      const date = new Date(dateStr);
      return format(date, formatStr);
    } catch (err) {
      Logger.error("Error on format:", err);
      throw err;
    }
  }

  private getAdditionalInformation(dateStr: string): EmployeeResponse {
    const formattedHireDate = this.getFormattedDate(dateStr, "MMM dd, yyyy");
    const hireDuration = this.getDurationDate(dateStr);
    return {
      formattedHireDate,
      hireDuration,
    };
  }

  addResponseInfoToEntity(
    employee: EmployeeEntity,
  ): EmployeeEntity & EmployeeResponse {
    const additionalInfo = this.getAdditionalInformation(employee.hireDate);
    return {
      ...employee,
      hireDate: this.getFormattedDate(employee.hireDate, "yyyy-MM-dd"),
      ...additionalInfo,
    };
  }

  addResponseInfoToEntityList(
    employees: Array<EmployeeEntity>,
  ): Array<EmployeeEntity & EmployeeResponse> {
    return employees.map((employee) => this.addResponseInfoToEntity(employee));
  }
}
