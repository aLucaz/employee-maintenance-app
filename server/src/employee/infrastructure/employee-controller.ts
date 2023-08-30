import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import { DeleteEmployeeService } from "@/employee/application/delete-employee-service";
import { GetAllEmployeesService } from "@/employee/application/get-all-employees-service";
import { GetEmployeeService } from "@/employee/application/get-employee-service";
import { UpdateEmployeeService } from "@/employee/application/update-employee-service";

import Logger from "../../resources/logger";
import { CreateEmployeeService } from "../application/create-employee-service";
import { Types } from "./injection/types";

@injectable()
export class EmployeeController {
  constructor(
    @inject(Types.CreateEmployeeService)
    private createEmployeeService: CreateEmployeeService,
    @inject(Types.DeleteEmployeeService)
    private deleteEmployeeService: DeleteEmployeeService,
    @inject(Types.GetEmployeeService)
    private getEmployeeService: GetEmployeeService,
    @inject(Types.GetAllEmployeesService)
    private getAllEmployeesService: GetAllEmployeesService,
    @inject(Types.UpdateEmployeeService)
    private updateEmployeeService: UpdateEmployeeService,
  ) {}

  createEmployee = async (req: Request, res: Response) => {
    Logger.info("__createEmployee__");
    const data = await this.createEmployeeService.execute(req.body);
    res.status(201).json(data);
  };

  getEmployeeById = async (req: Request, res: Response) => {
    Logger.info("__getEmployeeById__");
    const data = await this.getEmployeeService.execute(Number(req.params.id));
    res.status(200).json(data);
  };

  listEmployees = async (req: Request, res: Response) => {
    Logger.info("__listEmployees__");
    const data = await this.getAllEmployeesService.execute();
    res.status(200).json(data);
  };

  updateEmployee = async (req: Request, res: Response) => {
    Logger.info("__updateEmployee__");
    await this.updateEmployeeService.execute(Number(req.params.id), req.body);
    res.status(200).json({
      message: "Employee updated successfully.",
    });
  };

  removeEmployee = async (req: Request, res: Response) => {
    Logger.info("__removeEmployee__");
    await this.deleteEmployeeService.execute(Number(req.params.id));
    res.status(200).json({
      message: "Employee deleted successfully.",
    });
  };
}
