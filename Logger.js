class Logger {
    constructor() {
        this.logLevel = 'debug';
        this.consoleLog = true;
        this.fileLog = false;

        if (process.env.NODE_ENV === 'production') {
            this.logLevel = 'error';
            this.consoleLog = false;
        }
    }

    log(message, level) {
        if (!this.consoleLog && !this.fileLog || level < this.logLevel) return;

        console[level](message);

        // Write to file (if enabled)
        if (this.fileLog) {
            try {
                const fs = require('fs');
                const loggerFile = 'logger.txt';
                fs.appendFileSync(loggerFile, `[${level}]: ${message}\n`);
            } catch (error) {
                console.error(`Error writing log to file: ${error}`);
            }
        }
    }

    setLogLevel(level) {
        this.logLevel = level;
    }

    setConsoleLogEnabled(enabled) {
        this.consoleLog = enabled;
    }

    setFileLogEnabled(enabled) {
        this.fileLog = enabled;
    }
}

export default Logger;