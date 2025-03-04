class Logger {
    constructor() {}

    log(level, message) {
        console.log(`[${level}] ${message}`);
        // TO DO: implement actual logging mechanism (e.g., sending logs to a server)
    }

    error(message) {
        this.log('ERROR', message);
    }

    warn(message) {
        this.log('WARNING', message);
    }

    info(message) {
        this.log('INFO', message);
    }
}

export default Logger;
