// DebugPanel.js

class DebugPanel {
  constructor(debugContainer, videoPlayer) {
    this.debugContainer = debugContainer;
    this.videoPlayer = videoPlayer;

    // Render debug panel elements
    const resolutionLabel = document.createElement('label');
    resolutionLabel.textContent = 'Resolution:';
    const resolutionValueElement = document.createElement('span');

    const bitrateLabel = document.createElement('label');
    bitrateLabel.textContent = 'Bitrate:';
    const bitrateValueElement = document.createElement('span');

    const latencyLabel = document.createElement('label');
    latencyLabel.textContent = 'Latency:';
    const latencyValueElement = document.createElement('span');

    this.debugContainer.appendChild(resolutionLabel);
    this.debugContainer.appendChild(resolutionValueElement);

    this.debugContainer.appendChild(bitrateLabel);
    this.debugContainer.appendChild(bitrateValueElement);

    this.debugContainer.appendChild(latencyLabel);
    this.debugContainer.appendChild(latencyValueElement);

    // Update debug panel values when video player state changes
    this.videoPlayer.addEventListener('statechange', (event) => {
      resolutionValueElement.textContent = event.detail.resolution;
      bitrateValueElement.textContent = event.detail.bitrate + ' kbps';
      latencyValueElement.textContent = event.detail.latency + ' ms';
    });
  }
}

export default DebugPanel;