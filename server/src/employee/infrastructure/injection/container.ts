import { Container } from "inversify";

import { DatabaseService } from "../../../resources/database/database-service";
import { CreateEmployeeService } from "../../application/create-employee-service";
import { EmployeeRepository } from "../../domain/employee-repository";
import { EmployeeController } from "../employee-controller";
import { EmployeeRepositoryImpl } from "../repository/employee-repository-impl";
import { Types } from "./types";

const container = new Container();

container
  .bind<EmployeeController>(Types.EmployeeController)
  .to(EmployeeController);
container
  .bind<EmployeeRepository>(Types.EmployeeRepository)
  .to(EmployeeRepositoryImpl);
container
  .bind<CreateEmployeeService>(Types.CreateEmployeeService)
  .to(CreateEmployeeService);
// container
//   .bind<DeleteEmployeeService>(Types.DeleteEmployeeService)
//   .to(DeleteEmployeeService);
// container
//   .bind<GetAllEmployeesService>(Types.GetAllEmployeesService)
//   .to(GetAllEmployeesService);
// container
//   .bind<GetEmployeeService>(Types.GetEmployeeService)
//   .to(GetEmployeeService);
// container
//   .bind<UpdateEmployeeService>(Types.UpdateEmployeeService)
//   .to(UpdateEmployeeService);
container
  .bind<DatabaseService>(Types.PostgresDatabaseService)
  .to(DatabaseService);

export default container;
