import { Router as router } from "express";

import { EmployeeController } from "./employee-controller";
import container from "./injection/container";
import { Types } from "./injection/types";

const employeeRouter = router();

const employeeController = container.get<EmployeeController>(
  Types.EmployeeController,
);

employeeRouter.post("/", employeeController.createEmployee);
employeeRouter.get("/:id", employeeController.getEmployeeById);
employeeRouter.get("/", employeeController.listEmployees);
employeeRouter.put("/:id", employeeController.updateEmployee);
employeeRouter.delete("/:id", employeeController.removeEmployee);

export default employeeRouter;
