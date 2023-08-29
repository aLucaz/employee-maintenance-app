import { Container } from "inversify";

import { EmployeeController } from "../employee-controller";
import { Types } from "./types";

const container = new Container();

container
  .bind<EmployeeController>(Types.EmployeeController)
  .to(EmployeeController);

export default container;
