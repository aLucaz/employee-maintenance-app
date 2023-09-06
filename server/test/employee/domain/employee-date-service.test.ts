import "reflect-metadata";

import { EmployeeDateService } from "@/employee/domain/employee-date-service";
import { EmployeeEntity } from "@/employee/domain/entity/employee-entity";
import container from "@/employee/infrastructure/injection/container";
import { Types } from "@/employee/infrastructure/injection/types";

describe("EmployeeDateServiceTest", () => {
  let employeeDateService: EmployeeDateService;
  let employeBase: EmployeeEntity;

  beforeAll(() => {
    employeeDateService = container.get<EmployeeDateService>(
      Types.EmployeeDateService,
    );
    employeBase = {
      id: 123,
      firstName: "arturo",
      lastName: "lucas",
      hireDate: "2023-07-30",
      phone: "+51992687327",
      address: "av. testing",
      photo: "url photo",
      isActive: true,
      department: "HR",
      idDepartment: 1,
    };
  });

  describe("addResponseInfoToEntity", () => {
    test("Given an invalid hire date string When the method receive it Then it should throw an error", () => {
      expect(() =>
        employeeDateService.addResponseInfoToEntity({
          ...employeBase,
          hireDate: "",
        }),
      ).toThrow(Error);
    });

    test("Given an valid hire date string When the method receive it Then it should add extra information", () => {
      const res = employeeDateService.addResponseInfoToEntity(employeBase);
      expect(res.formattedHireDate).toMatch("Jul 29, 2023");
      expect(res.hireDuration).toEqual({ days: 8, months: 1, years: 0 });
    });
  });
});
