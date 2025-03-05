
class Logger {
  constructor() {}

  log(message, level = 'info') {
    console.log(`[${level}] ${message}`);
  }

  error(message) {
    this.log(`Error: ${message}`, 'error');
  }

  warn(message) {
    this.log(`Warning: ${message}`, 'warn');
  }
}

// Initialize the Logger instance
window.Logger = new Logger();
