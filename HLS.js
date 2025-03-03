// hls.min.js (from https://cdn.jsdelivr.net/npm/hls.js@0.12.5/dist/hls.min.js)
import { getMediaProperties } from 'hlsjs';

class HLS {
  constructor() {}

  loadSource(url) {
    return new Promise((resolve, reject) => {
      const hls = this;
      const mediaConfig = {};

      // Set up the stream
      mediaConfig.srcObject = {
        type: 'video',
        url,
      };

      getMediaProperties(mediaConfig).then((properties) => {
        resolve(properties);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  getMediaProperties(url) {
    return new Promise((resolve, reject) => {
      const hls = this;
      const mediaConfig = {};

      // Set up the stream
      mediaConfig.srcObject = {
        type: 'video',
        url,
      };

      getMediaProperties(mediaConfig).then((properties) => {
        resolve(properties);
      }).catch((error) => {
        reject(error);
      });
    });
  }
}

export default HLS;