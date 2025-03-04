
// DebugPanel.js
import { Logger } from './Logger';
import { UrlHelper } from './UrlHelper';

class DebugPanel {
  constructor() {
    this.logger = new Logger();
    this.urlHelper = new UrlHelper();

    // Initialize debug panel elements
    const debugPanelContainer = document.getElementById('debug-panel');
    this.debugListElement = document.createElement('ul');
    debugPanelContainer.appendChild(this.debugListElement);
  }

  /**
   * Logs a message to the console and updates the debug list
   *
   * @param {string} message The log message
   */
  logMessage(message) {
    const logItem = this.createLogItem(message);
    this.debugListElement.appendChild(logItem);

    // Log the message using Logger service
    this.logger.log(`Debug: ${message}`);
  }

  /**
   * Creates a new list item for logging messages
   *
   * @param {string} message The log message
   */
  createLogItem(message) {
    const listItem = document.createElement('li');
    listItem.textContent = `${this.urlHelper.formatTimestamp(new Date())}: ${message}`;
    return listItem;
  }
}

export default DebugPanel;
