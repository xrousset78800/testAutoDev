// HLSService.js
import HLS from 'hls.js';

class HLSService {
  constructor() {}

  loadHLS(mediaUrl, quality) {
    const hls = new HLS();
    return hls.loadSource(mediaUrl).then((source) => {
      // Set the quality of the stream based on the user selection
      source.quality = quality;

      // Start playing the stream
      source.play();

      return source;
    });
  }

  getQualityOptions(mediaUrl) {
    const hls = new HLS();
    return hls.getMediaProperties(mediaUrl).then((props) => {
      // Get the available qualities from the media properties
      const qualities = props.media.streams.map((stream) => stream.quality);

      return qualities;
    });
  }
}

export default HLSService;