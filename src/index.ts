import logger from "./services/logger";

const log = logger('index.ts');
log.silly("Hello, world!");

for (const logElement of Array(1000).keys()) {
    log.info(`This is log number ${logElement}`)
}

console.log('Hello, world!');


