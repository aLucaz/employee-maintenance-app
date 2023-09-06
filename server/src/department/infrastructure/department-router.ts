import { Router as router } from "express";

import { DepartmentController } from "@/department/infrastructure/department-controller";
import container from "@/department/infrastructure/injection/container";
import { Types } from "@/department/infrastructure/injection/types";
import validator from "@/resources/validator";

import addEmployeeInDepartmentSchema from "./middlewares/validation/schemas/add-employee-in-department-schema";
import idSchema from "./middlewares/validation/schemas/id-schema";

const departmentRouter = router();

const departmentController = container.get<DepartmentController>(
  Types.DepartmentController,
);

departmentRouter.get("/", departmentController.listDepartments);

departmentRouter.put(
  "/",
  validator(addEmployeeInDepartmentSchema, "body"),
  departmentController.addEmployeeInDepartment,
);

departmentRouter.get(
  "/history/:id",
  validator(idSchema, "params"),
  departmentController.departmentHistory,
);

export default departmentRouter;
