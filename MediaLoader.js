// MediaLoader.js
import HLS from 'hls.js';
import MPEGTS from 'mpegts';

class MediaLoader {
  constructor() {}

  loadMedia(mediaUrl) {
    const mediaType = this.detectMediaType(mediaUrl);
    switch (mediaType) {
      case 'mp4':
        return this.loadMP4(mediaUrl);
      case 'hls':
        return this.loadHLS(mediaUrl);
      case 'mpeg-ts':
        return this.loadMPEGTS(mediaUrl);
      default:
        throw new Error(`Unsupported media type: ${mediaType}`);
    }
  }

  detectMediaType(mediaUrl) {
    // Implement a heuristic to detect the media type based on the URL
    const regexHLS = /\.hls$/;
    const regexMP4 = /\.mp4$/;
    const regexMPEGTS = /\.ts$/;

    if (mediaUrl.match(regexHLS)) return 'hls';
    if (mediaUrl.match(regexMP4)) return 'mp4';
    if (mediaUrl.match(regexMPEGTS)) return 'mpeg-ts';

    throw new Error(`Unsupported media type: ${mediaUrl}`);
  }

  loadMP4(mediaUrl) {
    // Load MP4 video using the native browser support
    const videoElement = document.createElement('video');
    videoElement.src = mediaUrl;
    videoElement.addEventListener('loadeddata', () => {
      console.log('MP4 loaded successfully!');
    });
    return videoElement;
  }

  loadHLS(mediaUrl) {
    // Load HLS stream using hls.js
    const hls = new HLS();
    const source = hls.loadSource(mediaUrl);
    return source;
  }

  loadMPEGTS(mediaUrl) {
    // Load MPEG-TS stream using mpegts.js
    const ts = new MPEGTS();
    const mediaStream = ts.loadMedia(mediaUrl);
    return mediaStream;
  }
}

export default MediaLoader;