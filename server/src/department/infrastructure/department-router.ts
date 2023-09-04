import { Router as router } from "express";

import { DepartmentController } from "@/department/infrastructure/department-controller";
import container from "@/department/infrastructure/injection/container";
import { Types } from "@/department/infrastructure/injection/types";

const departmentRouter = router();

const departmentController = container.get<DepartmentController>(
  Types.DepartmentController,
);

departmentRouter.get("/", departmentController.listDepartments);
departmentRouter.put("/", departmentController.addEmployeeInDepartment);
departmentRouter.get("/history/:id", departmentController.departmentHistory);

export default departmentRouter;
