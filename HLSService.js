// HLSService.js

import HLS from 'hls.js';
import { Logger } from '../services/Logger';

class HLSService {
  constructor(videoPlayer, proxyService) {
    this.videoPlayer = videoPlayer;
    this.proxyService = proxyService;
    this.logger = new Logger('HLSService');
  }

  loadHLSMedia(hlsUrl) {
    return new Promise((resolve, reject) => {
      const hls = new HLS();
      hls.attachMediaContainer(this.videoPlayer);

      hls.on( 'noprovideo', () => {
        this.logger.error('No video found in playlist');
        reject(new Error('No video found'));
      });

      hls.on( 'error', (event) => {
        this.logger.error(`HLS error: ${event.details}`);
        reject(event);
      });

      hls.on( 'loadedmetadata', () => {
        resolve();
      });
    });
  }

  loadMPEGTSMedia(mpegTsUrl) {
    // TO DO: implement MPEG-TS media loading
  }
}

export default HLSService;