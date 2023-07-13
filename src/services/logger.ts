import winston from 'winston';
import dotenv from 'dotenv';
dotenv.config();

const logger = (label: string) =>
  winston.createLogger({
    level: 'silly',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
      winston.format.colorize({ level: true }),
      winston.format.label({ label }),
      winston.format.printf(({ level, message, label, timestamp }) => {
        return `${timestamp} [${label}] ${level}: ${message}`;
      })
    ),
    transports: [
      new winston.transports.Console({ level: process.env.LOG_LEVEL })
    ]
  });

export default logger;
