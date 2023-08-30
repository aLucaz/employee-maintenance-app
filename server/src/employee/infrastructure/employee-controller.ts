import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import Logger from "../../resources/logger";
import { CreateEmployeeService } from "../application/create-employee-service";
import { Types } from "./injection/types";

@injectable()
export class EmployeeController {
  constructor(
    @inject(Types.CreateEmployeeService)
    private createEmployeeService: CreateEmployeeService,
  ) {}

  createEmployee = async (req: Request, res: Response) => {
    Logger.info("__createEmployee__");
    await this.createEmployeeService.execute(req.body);
    res.status(201).json({ message: "Employee created." });
  };
}
