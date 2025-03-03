// StatusDisplay class - responsible for displaying player status and error messages
class StatusDisplay {
  constructor() {
    this.statusElement = document.createElement('div');
    this.statusElement.className = 'video-player-status';
    document.body.appendChild(this.statusElement);
  }

  updateStatus(statusMessage) {
    this.statusElement.innerHTML = statusMessage;
  }
}

export default StatusDisplay;