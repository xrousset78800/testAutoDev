class HLSService {
    constructor() {
        this.hls = require('hls');
    }

    loadHLSPackage(url, quality) {
        return new Promise((resolve, reject) => {
            const hlsPackage = this.hls.load(url);

            if (!hlsPackage) {
                console.error(`Failed to load HLS package: ${url}`);
                reject();
                return;
            }

            resolve(hlsPackage);
        });
    }

    getPlaylist(url) {
        return new Promise((resolve, reject) => {
            const hls = this.hls.load(url);

            if (!hls) {
                console.error(`Failed to load HLS playlist: ${url}`);
                reject();
                return;
            }

            resolve(hls Levels[quality]);
        });
    }
}

export default HLSService;