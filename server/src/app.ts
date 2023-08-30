import "reflect-metadata";
import "express-async-errors";

import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import createHttpError from "http-errors";

import BaseRouter from "./resources/base-router";
import { startDatabase } from "./resources/database/database-startup";
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

// apis
app.use("/api", BaseRouter);

// not found middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound(`Server api ${req.path} not found.`));
});

// error handle middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  ErrorMiddleware.handle(err, res);
  next();
});

async function startServer() {
  try {
    await startDatabase();
    app.listen(port);
    Logger.info(`Server is running at ${port} 🚀`);
  } catch (error) {
    Logger.error("Error starting server:", error);
  }
}

startServer();
