class DebugPanel {
    constructor(videoPlayer) {
        this.videoPlayer = videoPlayer;
        this.container = document.getElementById('debug-panel');

        // Initialize with initial state
        this.update();
    }

    update() {
        const debugInfo = this.getDebugInfo();

        if (debugInfo) {
            let htmlString = '';

            for (let [key, value] of Object.entries(debugInfo)) {
                htmlString += `<p><b>${key}</b>: ${value}</p>`;
            }

            this.container.innerHTML = '';
            this.container.innerHTML += `${htmlString}`;
        }
    }

    getDebugInfo() {
        let debugInfo;

        if (this.videoPlayer.isPlaying()) {
            // Get current playback information
            const currentTimecode = this.videoPlayer.getCurrentTimecode();
            const bufferLength = this.videoPlayer.getBufferLength();
            const bitrate = this.videoPlayer.getBitrate();

            debugInfo = {
                'Current Timecode': `${currentTimecode}`,
                'Buffer Length': `${bufferLength} seconds`,
                'Bitrate': `${bitrate} kbps`
            };
        } else {
            // No playback information available
            debugInfo = null;
        }

        return debugInfo;
    }
}

export default DebugPanel;
