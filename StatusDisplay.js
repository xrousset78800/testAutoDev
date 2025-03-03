// StatusDisplay.js
import { Logger } from '../services/Logger';

class StatusDisplay {
  constructor() {
    this.logger = new Logger();
    this.statusElement = null;
  }

  displayMessage(message) {
    if (!this.statusElement) {
      this.setStatusElement();
    }
    this.statusElement.textContent = message;
  }

  setStatusElement() {
    const statusContainer = document.createElement('div');
    statusContainer.className = 'status-container';
    this.statusElement = statusContainer;

    // Add the status element to the DOM
    document.body.appendChild(statusContainer);
  }

  displayError(errorMessage) {
    this.logger.error(errorMessage);
    this.displayMessage(`Erreur: ${errorMessage}`);
  }

  clearStatus() {
    if (this.statusElement) {
      this.statusElement.textContent = '';
    }
  }
}

export default StatusDisplay;