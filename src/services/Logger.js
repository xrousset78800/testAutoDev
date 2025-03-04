// src/services/Logger.js

class Logger {
  constructor() {
    this.logLevel = 'debug'; // Change to 'error' or 'info' as needed
    this.loggerOutput = document.getElementById('logger-output');
  }

  log(message, level) {
    if (level >= this.getLogLevel()) {
      const logMessage = `${new Date().toISOString()} [${level}] ${message}`;
      console.log(logMessage);
      this.loggerOutput.innerHTML += `<p>${logMessage}</p>`;
    }
  }

  getLogLevel() {
    switch (this.logLevel) {
      case 'debug':
        return 1;
      case 'error':
        return 3;
      default:
        return 2; // info
    }
  }

}

export default Logger;

