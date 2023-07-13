import winston from 'winston';
import dotenv from 'dotenv';
dotenv.config();

const logger = (label: string) =>
  winston.createLogger({
    level: 'silly',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
      winston.format.label({ label })
    ),
    defaultMeta: { projectName: process.env.PROJECT_NAME },
    transports: [
      new winston.transports.Console({
        level: process.env.LOG_LEVEL,
        format: winston.format.combine(
          winston.format.colorize({ level: true }),
          winston.format.printf(({ level, message, label, timestamp }) => {
            return `${timestamp} [${label}] ${level}: ${message}`;
          })
        )
      })
    ]
  });

export default logger;
