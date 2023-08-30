import { Router as router } from "express";

import { EmployeeController } from "./employee-controller";
import container from "./injection/container";
import { Types } from "./injection/types";

const employeeRouter = router();

const employeeController = container.get<EmployeeController>(
  Types.EmployeeController,
);

employeeRouter.post("/", employeeController.createEmployee);

export default employeeRouter;
