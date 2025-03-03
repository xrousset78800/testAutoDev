// DebugPanel.js
class DebugPanel {
  constructor() {
    this.container = document.getElementById('debug-panel');
    this.videoPlayer = null;
    this.statusDisplay = new StatusDisplay();
  }

  updateVideoInfo() {
    const videoPlayer = this.videoPlayer;
    if (!videoPlayer) return;

    // Update debug panel with current video information
    const resolutionLabel = `Resolution: ${videoPlayer.getResolution()}x${videoPlayer.getResolution()}`;
    const bitrateLabel = `Bitrate: ${videoPlayer.getBitrate()} kbps`;
    const latencyLabel = `Latency: ${videoPlayer.getLatency()} ms`;

    this.container.innerHTML = '';
    this.container.innerHTML += `
      <h2>Video Information</h2>
      <ul>
        <li>${resolutionLabel}</li>
        <li>${bitrateLabel}</li>
        <li>${latencyLabel}</li>
      </ul>
    `;
  }

  updateStatusInfo() {
    const statusDisplay = this.statusDisplay;
    if (!statusDisplay) return;

    // Update debug panel with current status information
    const statusText = `${statusDisplay.getStatusMessage()} (${statusDisplay.getStatusCode()})`;
    this.container.innerHTML += `
      <h2>Status</h2>
      <p>${statusText}</p>
    `;
  }

  updatePanel(videoPlayer, statusDisplay) {
    this.videoPlayer = videoPlayer;
    this.statusDisplay = statusDisplay;

    // Update debug panel with current information
    this.updateVideoInfo();
    this.updateStatusInfo();
  }
}

export default DebugPanel;