import { Router as router } from "express";

import DepartmentRouter from "@/department/infrastructure/department-router";

import EmployeeRouter from "../employee/infrastructure/employee-router";

const baseRouter = router();

baseRouter.use("/employee", EmployeeRouter);
baseRouter.use("/department", DepartmentRouter);

export default baseRouter;
