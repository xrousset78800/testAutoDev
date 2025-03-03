// MediaLoader class definition
class MediaLoader {
    constructor(videoPlayer) {
        this.videoPlayer = videoPlayer;
    }

    // Load the media file with the specified options
    loadMedia(mediaUrl, options = {}) {
        const { type } = options;

        switch (type) {
            case 'mp4':
                return this.loadMp4(mediaUrl);
            case 'hls':
                return this.loadHLS(mediaUrl);
            case 'mpeg-ts':
                return this.loadMPEG_TS(mediaUrl);
            default:
                throw new Error('Unsupported media type');
        }
    }

    // Load MP4 file
    loadMp4(mediaUrl) {
        const videoElement = document.getElementById('video-element');

        if (!videoElement) {
            console.error('No video element found');
            return;
        }

        videoElement.src = mediaUrl;

        try {
            videoElement.load();
        } catch (error) {
            console.error(`Error loading MP4 file: ${mediaUrl}`);
            // fallback to VLC or other player
        }
    }

    // Load HLS file
    loadHLS(mediaUrl) {
        const hlsservice = new HLSService();

        if (!hlsservice.isSupported()) {
            console.error('HLSSupport not supported');
            return;
        }

        try {
            const hlsStream = hlsservice.load(stream: mediaUrl);
            // handle HLS stream
        } catch (error) {
            console.error(`Error loading HLS file: ${mediaUrl}`);
            // fallback to VLC or other player
        }
    }

    // Load MPEG-TS file
    loadMPEG_TS(mediaUrl) {
        const mpegTsService = new MPEGSTSService();

        if (!mpegTsService.isSupported()) {
            console.error('MPGTS not supported');
            return;
        }

        try {
            const mpegTsStream = mpegTsService.load(stream: mediaUrl);
            // handle MPEG-TS stream
        } catch (error) {
            console.error(`Error loading MPEG-TS file: ${mediaUrl}`);
            // fallback to VLC or other player
        }
    }
}

export default MediaLoader;