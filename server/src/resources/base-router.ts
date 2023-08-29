import { Router as router } from "express";

import employeeRouter from "../employee/infrastructure/employee-router";

const baseRouter = router();

baseRouter.use("/employee", employeeRouter);

export default baseRouter;
