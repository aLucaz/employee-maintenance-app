import { Router as router } from "express";

import Logger from "../../resources/logger";

const employeeRouter = router();

employeeRouter.post("/", () => {
  Logger.info("asd");
});

export default employeeRouter;
