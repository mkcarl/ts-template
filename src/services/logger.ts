import winston from 'winston';
import 'winston-mongodb';
import {config} from '../config'


const logger = (label: string) =>
  winston.createLogger({
    level: 'silly',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
      winston.format.label({ label })
    ),
    defaultMeta: { projectName: config.PROJECT_NAME },
    transports: [
      new winston.transports.Console({
        level: config.LOG_LEVEL,
        format: winston.format.combine(
          winston.format.colorize({ level: true }),
          winston.format.printf(({ level, message, label, timestamp }) => {
            return `${timestamp} [${label}] ${level}: ${message}`;
          })
        )
      }),
        new winston.transports.MongoDB({
            db: config.MONGODB_URI,
            collection: config.PROJECT_NAME,
            level: 'silly',
            options: {
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            format: winston.format.combine(
                winston.format.metadata()
            )
        })
    ]
  });

export default logger;
