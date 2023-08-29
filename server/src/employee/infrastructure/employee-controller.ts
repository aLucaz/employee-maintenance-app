import { Request, Response } from "express";

import Logger from "../../resources/logger";

export class EmployeeController {
  createEmployee = async (req: Request, res: Response) => {
    Logger.info("__createEmployee__");
    res.status(200).json({});
  };
}
