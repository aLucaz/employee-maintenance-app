import { Container } from "inversify";

import { GetAllDepartmentsService } from "@/department/application/get-all-departments-service";
import { GetDepartmentHistoryService } from "@/department/application/get-department-history-service";
import { UpdateEmployeeInDepartmentService } from "@/department/application/update-employee-in-department-service";
import { DepartmentRepository } from "@/department/domain/department-repository";
import { DepartmentController } from "@/department/infrastructure/department-controller";
import { Types } from "@/department/infrastructure/injection/types";
import { DepartmentRepositoryImpl } from "@/department/infrastructure/repository/department-repository-impl";
import { EmployeeDateService } from "@/employee/domain/employee-date-service";
import { EmployeeRepository } from "@/employee/domain/employee-repository";
import { EmployeeRepositoryImpl } from "@/employee/infrastructure/repository/employee-repository-impl";
import { DatabaseService } from "@/resources/database/database-service";

const container = new Container();

container
  .bind<DepartmentController>(Types.DepartmentController)
  .to(DepartmentController);
container
  .bind<DepartmentRepository>(Types.DepartmentRepository)
  .to(DepartmentRepositoryImpl);
container
  .bind<EmployeeRepository>(Types.EmployeeRepository)
  .to(EmployeeRepositoryImpl);
container
  .bind<GetAllDepartmentsService>(Types.GetAllDepartmentsService)
  .to(GetAllDepartmentsService);
container
  .bind<UpdateEmployeeInDepartmentService>(Types.UpdateEmployeeInDepService)
  .to(UpdateEmployeeInDepartmentService);
container
  .bind<EmployeeDateService>(Types.EmployeeDateService)
  .to(EmployeeDateService);
container
  .bind<GetDepartmentHistoryService>(Types.GetDepartmentHistoryService)
  .to(GetDepartmentHistoryService);
// database
container
  .bind<DatabaseService>(Types.PostgresDatabaseService)
  .to(DatabaseService);

export default container;
