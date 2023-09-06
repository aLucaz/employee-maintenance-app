import { Router as router } from "express";

import validator, { RequestKeys } from "../../resources/validator";
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
  validator(createEmployeeSchema, RequestKeys.BODY),
  employeeController.createEmployee,
);

employeeRouter.get(
  "/:id",
  validator(idSchema, RequestKeys.PARAMS),
  employeeController.getEmployeeById,
);

employeeRouter.get("/", employeeController.listEmployees);

employeeRouter.put(
  "/:id",
  validator(idSchema, RequestKeys.PARAMS),
  validator(updateEmployeeSchema, RequestKeys.BODY),
  employeeController.updateEmployee,
);

employeeRouter.delete(
  "/:id",
  validator(idSchema, RequestKeys.PARAMS),
  employeeController.removeEmployee,
);

export default employeeRouter;
