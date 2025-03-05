
import { Hls } from 'hls.js';

class HLSService {
  constructor() {}

  loadHLS(url, quality) {
    return new Promise((resolve, reject) => {
      const hls = new Hls({ bufferSize: 1000000 });
      hls.load(url);
      
      // Set the preferred quality
      if (quality) {
        hls.setQuality(quality);
      }
      
      // Listen for HLS events
      hls.on('manifestparsererror', () => reject(new Error('Manifest parser error')));
      hls.on('playlistloadstart', () => console.log('Playlist load started'));
      hls.on('playlistloaded', () => console.log('Playlist loaded'));
      hls.on('segmentloaded', () => console.log('Segment loaded'));
      hls.on('manifestparsingerror', (err) => reject(new Error(`Manifest parsing error: ${err}`)));
      
      // Resolve the promise when the HLS stream is ready
      hls.on('playlistloadend', () => resolve());
    });
  }
}

// Initialize the HLSService instance
window.HLSService = new HLSService();
