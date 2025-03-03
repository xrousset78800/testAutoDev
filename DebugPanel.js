// DebugPanel class definition
class DebugPanel {
    constructor(videoPlayer) {
        this.videoPlayer = videoPlayer;
        this.debugPanelElement = document.getElementById('debug-panel');

        // Initialize the debug panel with default information
        this.updateDebugInformation({
            resolution: 'Unknown',
            bitrate: 0,
            latency: 0,
            error: null
        });
    }

    // Update the debug information
    updateDebugInformation(debugInfo) {
        this.debugPanelElement.innerHTML = '';
        Object.keys(debugInfo).forEach((key) => {
            const infoElement = document.createElement('div');
            infoElement.textContent = `${key}: ${debugInfo[key]}`;
            this.debugPanelElement.appendChild(infoElement);
        });
    }
}

export default DebugPanel;