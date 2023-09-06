import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { ObjectSchema } from "joi";

export default function validator(
  schema: ObjectSchema,
  attribute: keyof Request,
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
