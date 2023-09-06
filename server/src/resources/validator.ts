import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { ObjectSchema } from "joi";

export const enum RequestKeys {
  PARAMS = "params",
  BODY = "body",
  QUERY = "query",
}

export default function validator(
  schema: ObjectSchema,
  attribute: RequestKeys,
) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.validate(req[attribute]);
    if (result.error) {
      const errorMessages = result.error.details.map((d) => d.message).join();
      next(new createHttpError.UnprocessableEntity(errorMessages));
    }
    next();
  };
}
