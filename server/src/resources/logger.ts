import winston from "winston";

import Environment from "./environment";

const isProduction = Environment.NODE_ENV === "production";

class Logger {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: Environment.LOG_LEVEL ?? "info",
      exitOnError: false,
    });

    this.logger.add(
      new winston.transports.Console({
        format: isProduction
          ? winston.format.combine(
              winston.format.timestamp(),
              winston.format.json(),
            )
          : winston.format.combine(
              winston.format.metadata(),
              winston.format.colorize(),
              winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
              winston.format.printf(
                ({ timestamp, level, message }) =>
                  `${timestamp} ${level}: ${message}`,
              ),
            ),
      }),
    );
  }

  public info(message: string) {
    this.logger.info(message);
  }

  public debug(message: string) {
    this.logger.debug(message);
  }

  public warn(message: string) {
    this.logger.warn(message);
  }

  public error(message: string, error: unknown) {
    this.logger.error(message, error);
  }
}

export default new Logger();
