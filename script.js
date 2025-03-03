// Singleton pattern for services and components
class VideoPlayer {
    constructor() {
        this.mediaLoader = new MediaLoader();
        this.hlsService = new HLSService();
        this.proxyService = new ProxyService();
        this.logger = new Logger();
        this.urlHelper = new UrlHelper();

        // Initialize the video player container
        const videoContainer = document.getElementById('video-player-container');
        if (!videoContainer) {
            throw new Error('Video player container not found!');
        }

        // Set up event listeners for quality selector and debug panel
        document.addEventListener('DOMContentLoaded', () => {
            this.qualitySelector = new QualitySelector(videoContainer);
            this.debugPanel = new DebugPanel(videoContainer);

            // Initialize the video player with a default media source
            const mediaSource = 'https://example.com/media.mp4';
            this.mediaLoader.loadMedia(mediaSource, (media) => {
                if (!media) {
                    throw new Error('Failed to load media!');
                }
                this.playVideo(media);
            });
        });

        // Video player methods
        this.playVideo = (media) => {
            const videoElement = document.getElementById('video-player');
            if (!videoElement) {
                throw new Error('Video element not found!');
            }

            // Play the video using HLS.js for HLS and MPEG-TS formats, or standard media playback for MP4 format
            if (media.format === 'hls' || media.format === 'mpeg-ts') {
                this.hlsService.playHLS(media.url);
            } else {
                videoElement.src = media.url;
                videoElement.play();
            }
        };

        // Quality selector methods
        this.qualitySelector.onQualityChange = (quality) => {
            const selectedMediaSource = this.mediaLoader.getAvailableMediaSources().find((mediaSource) => mediaSource.quality === quality);
            if (!selectedMediaSource) {
                throw new Error('Invalid quality selection!');
            }
            this.playVideo(selectedMediaSource);
        };

        // Debug panel methods
        this.debugPanel.onDebugInfoChange = (debugInfo) => {
            console.log(`Debug information: ${JSON.stringify(debugInfo)}`);
        };
    }

    // Singleton instance
    static getInstance() {
        if (!this.instance) {
            this.instance = new VideoPlayer();
        }
        return this.instance;
    }
}

// Initialize the video player singleton
const videoPlayer = VideoPlayer.getInstance();

export { videoPlayer, MediaLoader, HLSService, ProxyService };