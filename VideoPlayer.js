// VideoPlayer class definition
class VideoPlayer {
    constructor() {
        this.mediaLoader = new MediaLoader();
        this.hlsService = new HLSService();
        this.proxyService = new ProxyService();
        this.logger = new Logger();

        // Initialize the video player container
        const videoContainer = document.getElementById('video-player-container');
        if (!videoContainer) {
            throw new Error('Video player container not found!');
        }

        // Set up event listeners for quality selector and debug panel
        document.addEventListener('DOMContentLoaded', () => {
            this.qualitySelector = new QualitySelector(videoContainer);
            this.debugPanel = new DebugPanel(videoContainer);

            // Initialize the video player with default settings
            this.mediaSource = null;
            this.playing = false;

            // Set up event listeners for media changes and playback state
            window.addEventListener('hashchange', () => {
                const mediaId = window.location.hash.replace('#media-', '');
                if (mediaId) {
                    this.loadMedia(mediaId);
                }
            });

            window.addEventListener('playpause', () => {
                this.playing ? this.pauseVideo() : this.playVideo();
            });
        });
    }

    // Load a new media source
    loadMedia(mediaId) {
        const mediaSource = this.mediaLoader.loadMedia(mediaId);

        if (mediaSource) {
            this.mediaSource = mediaSource;
            this.qualitySelector.updateQualities(mediaSource.qualities);
        }
    }

    // Play the current media source
    playVideo() {
        if (!this.playing && this.mediaSource) {
            this.hlsService.play(this.mediaSource);

            // Update playback state and debug panel
            this.playing = true;
            this.debugPanel.updateDebugInfo({ playing: true });
        }
    }

    // Pause the current media source
    pauseVideo() {
        if (this.playing && this.mediaSource) {
            this.hlsService.pause();

            // Update playback state and debug panel
            this.playing = false;
            this.debugPanel.updateDebugInfo({ paused: true });
        }
    }

    // Getters and setters for media source and playback state
    getMediaSource() {
        return this.mediaSource;
    }

    setMediaSource(mediaSource) {
        this.mediaSource = mediaSource;
    }

    isPlaying() {
        return this.playing;
    }

    setIsPlaying(isPlaying) {
        this.playing = isPlaying;
    }
}

export default VideoPlayer;

// Singleton instance
VideoPlayer.getInstance = function () {
    if (!this.instance) {
        this.instance = new VideoPlayer();
    }
    return this.instance;
};