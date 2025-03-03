class Logger {
  constructor() {
    this.logLevel = 'DEBUG'; // default log level
    this.consoleLogEnabled = true;
    this.fileLogEnabled = false;

    if (process.env.NODE_ENV === 'production') {
      this.logLevel = 'ERROR';
      this.consoleLogEnabled = false;
      this.fileLogEnabled = true;
    }
  }

  log(message, ...args) {
    if (this consoleLogEnabled && this.getLogLevel() >= 'DEBUG') {
      console.log(`[${new Date().toISOString()}] ${message}`, ...args);
    }
  }

  error(message, ...args) {
    if (this.consoleLogEnabled && this.getLogLevel() >= 'ERROR') {
      console.error(`[${new Date().toISOString()}] ${message}`, ...args);
    }
  }

  getLogLevel() {
    switch (this.logLevel.toUpperCase()) {
      case 'DEBUG':
        return 3;
      case 'INFO':
        return 2;
      case 'WARNING':
        return 1;
      case 'ERROR':
        return 0;
      default:
        throw new Error('Invalid log level');
    }
  }

  setLogLevel(level) {
    this.logLevel = level.toUpperCase();
  }
}

export default Logger;