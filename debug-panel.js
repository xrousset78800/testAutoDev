
class DebugPanel {
  constructor() {
    this.panelContainer = document.getElementById('debug-panel-container');
    this.statusDisplay = window.StatusDisplay;
    this.videoPlayer = window.VideoPlayer;

    // Initialize the debug panel
    this.init();
  }

  init() {
    const debugInfoElement = document.createElement('P');
    debugInfoElement.textContent = 'Initializing...';
    this.panelContainer.appendChild(debugInfoElement);

    this.updateDebugPanel();
  }

  updateDebugPanel() {
    const videoStats = `Resolution: ${this.videoPlayer.getVideoResolution()}, Bitrate: ${this.videoPlayer.getBitrate()}bps, Latency: ${this.videoPlayer.getLatency()}ms`;
    this.panelContainer.querySelector('P').textContent = videoStats;
  }
}

// Initialize the DebugPanel instance
window.DebugPanel = new DebugPanel();
