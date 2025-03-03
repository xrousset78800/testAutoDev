class HLSService {
    constructor() {
        this.hls = null;
    }

    isSupported() {
        if (!this.hls) {
            try {
                this.hls = require('hlsjs');
                return true;
            } catch (error) {
                console.error(`Error loading HLS.js: ${error}`);
                return false;
            }
        } else {
            return true;
        }
    }

    load(streamUrl) {
        if (!this.isSupported()) {
            console.error('HLSService not supported');
            return null;
        }

        try {
            const hls = this.hls;
            const stream = new hls.Stream(streamUrl);
            // handle HLS stream
            return stream;
        } catch (error) {
            console.error(`Error loading HLS file: ${streamUrl}`);
            // fallback to VLC or other player
            return null;
        }
    }
}

export default HLSService;