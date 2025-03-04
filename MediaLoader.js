class MediaLoader {
    constructor(videoPlayer) {
        this.videoPlayer = videoPlayer;
    }

    loadMedia(mediaUrl, type) {
        return new Promise((resolve, reject) => {
            // Load the media based on its type
            switch (type) {
                case 'mp4':
                    this.loadMp4(mediaUrl);
                    break;
                case 'hls':
                    this.loadHLS(mediaUrl);
                    break;
                case 'm3u8':
                    this.loadM3U8(mediaUrl);
                    break;
                default:
                    reject('Unsupported media type');
            }

            // Resolve with the loaded media
            resolve();
        });
    }

    loadMp4(url) {
        const videoElement = document.getElementById('video-element');

        if (videoElement) {
            videoElement.src = url;

            videoElement.addEventListener('loadeddata', () => {
                this.videoPlayer.play();
            });

            // Load the MP4 media
            videoElement.load();
        }
    }

    loadHLS(url, quality) {
        const hlsJs = new Hls();

        if (hlsJs) {
            hlsJs.configure({
                maxGetBufferLength: 100,
                maxLiveSegmentWaitDuration: 5000
            });

            // Load the HLS media with specified quality
            return hlsJs.loadSource(url, { quality });
        }

        return Promise.reject('Failed to load HLS');
    }

    loadM3U8(url) {
        const m3u8Js = new M3U8();

        if (m3u8Js) {
            // Load the M3U8 media
            return m3u8Js.loadSource(url);
        }

        return Promise.reject('Failed to load M3U8');
    }
}

export default MediaLoader;
