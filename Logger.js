// Logger.js

class Logger {
  constructor() {}

  log(message) {
    console.log(`[${new Date().toLocaleString()}] ${message}`);
  }

  error(errorMessage) {
    this.log('Error: ' + errorMessage);
  }

  warn(warningMessage) {
    this.log('Warning: ' + warningMessage);
  }
}

export default Logger;