// VideoPlayer.js
import { HLSService } from './HLSService';
import { ProxyService } from './ProxyService';
import { MediaLoader } from './MediaLoader';
import { StatusDisplay } from './StatusDisplay';
import { QualitySelector } from './QualitySelector';
import { DebugPanel } from './DebugPanel';

class VideoPlayer {
  constructor() {
    this.statusDisplay = new StatusDisplay();
    this.qualitySelector = new QualitySelector();
    this.debugPanel = new DebugPanel();
    this.mediaLoader = new MediaLoader();
    this.hlsservice = new HLSService();
    this.proxyService = new ProxyService();

    // Initialize singleton pattern for services and components
    VideoPlayer.instance = this;
  }

  loadVideo(url) {
    const mediaType = detectMediaType(url);
    if (mediaType === 'hls') {
      return this.hlsservice.loadHLS(url);
    } else if (mediaType === 'mpeg-ts') {
      return this.mediaLoader.loadMPEGTS(url);
    } else {
      // Assume MP4 format
      return this.mediaLoader.loadMP4(url);
    }
  }

  playVideo(videoUrl) {
    const video = this.loadVideo(videoUrl);
    if (video) {
      // Play the video using HTML5 Video API or other playback libraries
      console.log('Playing video:', videoUrl);
    } else {
      this.statusDisplay.displayError('Failed to load video');
    }
  }

  getQualityOptions() {
    return this.qualitySelector.getQualityOptions();
  }

  setQualityOption(quality) {
    // Update the quality option and re-render the video
    console.log(`Setting quality to: ${quality}`);
  }

  debugInfo() {
    const info = {
      resolution: '1920x1080',
      bitrate: '5000 kbps',
      latency: '100 ms'
    };
    this.debugPanel.displayDebugInfo(info);
  }
}

export default VideoPlayer;