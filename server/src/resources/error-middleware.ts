import { Response } from "express";
import { HttpError } from "http-errors";

import { HttpCode } from "./http-code";

class ErrorMiddleware {
  public handle(error: unknown, response: Response): void {
    if (this.isHttpError(error)) {
      this.handleHttpError(error as HttpError, response);
      return;
    }
    response
      .status(HttpCode.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }

  private isHttpError(error: unknown): boolean {
    return error instanceof HttpError;
  }

  private handleHttpError(error: HttpError, response: Response): void {
    response.status(error.statusCode).json({ message: error.message });
  }
}

export default new ErrorMiddleware();
