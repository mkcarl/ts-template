import logger from "../src/services/logger";
import {Logger} from "winston";

describe('Logger', function () {
    let log: Logger;
    beforeEach(() => {
        log = logger('logger.test.ts');
    })

    it('logger should return a Winston logger object', function () {
        expect(log).toBeInstanceOf(Logger)
    });

});
