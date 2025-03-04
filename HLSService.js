
// HLSService.js
import { MediaLoader } from './MediaLoader';

class HLSService {
  constructor() {}

  async loadHLSStream(streamUrl) {
    try {
      const mediaSource = await MediaLoader.loadMediaSource(streamUrl);
      // Handle HLS stream loading and parsing here
      return mediaSource;
    } catch (error) {
      console.error(`Error loading HLS stream: ${error}`);
      throw error;
    }
  }
}

export default HLSService;
