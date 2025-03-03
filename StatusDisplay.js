// StatusDisplay.js

class StatusDisplay {
  constructor() {
    this.statusContainer = document.getElementById('status-container');
    this.statusTextElement = document.getElementById('status-text');

    // Initialize status display state
    this.currentStatusLabel = '';
  }

  updateStatus(statusMessage) {
    if (this.currentStatusLabel !== statusMessage) {
      this.currentStatusLabel = statusMessage;
      this.statusTextElement.textContent = statusMessage;
    }
  }

  clearStatus() {
    this.currentStatusLabel = '';
    this.statusTextElement.textContent = '';
  }

  displayWarning(message) {
    this.updateStatus(`⚠️ ${message}`);
  }

  displayError(message) {
    this.updateStatus(`❌ ${message}`);
  }

  displayInfo(message) {
    this.updateStatus(`${message} 📺`);
  }
}

export default StatusDisplay;