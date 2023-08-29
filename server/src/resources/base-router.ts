import { Router as router } from "express";

import EmployeeRouter from "../employee/infrastructure/employee-router";

const baseRouter = router();

baseRouter.use("/employee", EmployeeRouter);

export default baseRouter;
