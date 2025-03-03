// StatusDisplay class definition
class StatusDisplay {
    constructor(videoPlayer) {
        this.videoPlayer = videoPlayer;
        this.statusElement = document.getElementById('video-status');

        // Initialize the status display with default text
        this.setStatusText('');

        // Set up event listeners for media changes and playback state
        window.addEventListener('hashchange', () => {
            const mediaId = window.location.hash.replace('#media-', '');
            if (mediaId) {
                this.updateStatusText(`Loading: ${mediaId}`);
            }
        });

        window.addEventListener('playpause', () => {
            this.playing ? this.setStatusText('Paused') : this.setStatusText('Playing');
        });
    }

    // Update the status text
    updateStatusText(text) {
        this.statusElement.textContent = text;
    }

    // Getters and setters for media ID and playback state
    getMediaId() {
        const hash = window.location.hash.replace('#media-', '');
        return hash ? parseInt(hash, 10) : null;
    }

    setMediaId(mediaId) {
        if (mediaId !== this.getMediaId()) {
            window.history.pushState({}, '', `#media-${mediaId}`);
        }
    }

    isPlaying() {
        return this.videoPlayer.isPlaying();
    }

    setIsPlaying(isPlaying) {
        this.videoPlayer.setIsPlaying(isPlaying);
    }

    setStatusText(text) {
        this.updateStatusText(text);
    }
}

export default StatusDisplay;