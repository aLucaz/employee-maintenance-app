import { Router as router } from "express";

import validator from "../../resources/validator";
import { EmployeeController } from "./employee-controller";
import container from "./injection/container";
import { Types } from "./injection/types";
import createEmployeeSchema from "./middlewares/validation/schemas/create-employee-schema";
import idSchema from "./middlewares/validation/schemas/id-schema";
import updateEmployeeSchema from "./middlewares/validation/schemas/update-employee-schema";

const employeeRouter = router();

const employeeController = container.get<EmployeeController>(
  Types.EmployeeController,
);

employeeRouter.post(
  "/",
  validator(createEmployeeSchema, "body"),
  employeeController.createEmployee,
);

employeeRouter.get(
  "/:id",
  validator(idSchema, "params"),
  employeeController.getEmployeeById,
);

employeeRouter.get("/", employeeController.listEmployees);

employeeRouter.put(
  "/:id",
  validator(idSchema, "params"),
  validator(updateEmployeeSchema, "body"),
  employeeController.updateEmployee,
);

employeeRouter.delete(
  "/:id",
  validator(idSchema, "params"),
  employeeController.removeEmployee,
);

export default employeeRouter;
