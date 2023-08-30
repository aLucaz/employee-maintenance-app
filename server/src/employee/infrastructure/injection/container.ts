import { Container } from "inversify";

import { DatabaseService } from "../../../resources/database/database-service";
import { CreateEmployeeService } from "../../application/create-employee-service";
import { DeleteEmployeeService } from "../../application/delete-employee-service";
import { GetAllEmployeesService } from "../../application/get-all-employees-service";
import { GetEmployeeService } from "../../application/get-employee-service";
import { UpdateEmployeeService } from "../../application/update-employee-service";
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
// services
container
  .bind<CreateEmployeeService>(Types.CreateEmployeeService)
  .to(CreateEmployeeService);
container
  .bind<DeleteEmployeeService>(Types.DeleteEmployeeService)
  .to(DeleteEmployeeService);
container
  .bind<GetAllEmployeesService>(Types.GetAllEmployeesService)
  .to(GetAllEmployeesService);
container
  .bind<GetEmployeeService>(Types.GetEmployeeService)
  .to(GetEmployeeService);
container
  .bind<UpdateEmployeeService>(Types.UpdateEmployeeService)
  .to(UpdateEmployeeService);
// database
container
  .bind<DatabaseService>(Types.PostgresDatabaseService)
  .to(DatabaseService);

export default container;
