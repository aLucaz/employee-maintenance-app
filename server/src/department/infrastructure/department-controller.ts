import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import { GetAllDepartmentsService } from "@/department/application/get-all-departments-service";
import { Types } from "@/department/infrastructure/injection/types";
import Logger from "@/resources/logger";

import { GetDepartmentHistoryService } from "../application/get-department-history-service";
import { UpdateEmployeeInDepartmentService } from "../application/update-employee-in-department-service";

@injectable()
export class DepartmentController {
  constructor(
    @inject(Types.GetAllDepartmentsService)
    private getAllDepartmentsService: GetAllDepartmentsService,
    @inject(Types.UpdateEmployeeInDepService)
    private updateEmployeeInDepartmentService: UpdateEmployeeInDepartmentService,
    @inject(Types.GetDepartmentHistoryService)
    private getDepartmentHistoryService: GetDepartmentHistoryService,
  ) {}

  listDepartments = async (req: Request, res: Response) => {
    Logger.info("__listDepartments__");
    const data = await this.getAllDepartmentsService.execute();
    res.status(200).json(data);
  };

  addEmployeeInDepartment = async (req: Request, res: Response) => {
    Logger.info("__addEmployeeInDepartment__");
    const data = await this.updateEmployeeInDepartmentService.execute(req.body);
    res.status(200).json(data);
  };

  departmentHistory = async (req: Request, res: Response) => {
    Logger.info("__departmentHistory__");
    const data = await this.getDepartmentHistoryService.execute(
      Number(req.params.id),
    );
    res.status(200).json(data);
  };
}
