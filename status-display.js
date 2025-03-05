
class StatusDisplay {
  constructor() {
    this.container = document.getElementById('status-container');
    this.messageElement = document.createElement('P');

    // Initialize the status display
    this.init();
  }

  init() {
    this.container.appendChild(this.messageElement);
  }

  updateStatus(statusMessage, error) {
    if (error) {
      this.messageElement.textContent = `Error: ${error}`;
    } else {
      this.messageElement.textContent = statusMessage;
    }
  }
}

// Initialize the StatusDisplay instance
window.StatusDisplay = new StatusDisplay();
