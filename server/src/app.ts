import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import createHttpError from "http-errors";

import Environment from "./resources/environment";
import ErrorMiddleware from "./resources/error-middleware";
import Logger from "./resources/logger";

const app = express();
const port = Environment.PORT;

// config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// not found middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound(`Server api: ${req.path} not found.`));
});

// error handle middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  ErrorMiddleware.handle(err, res);
  next();
});

app.listen(port, () => {
  Logger.info(` Server is running at ${port} 🚀`);
});
