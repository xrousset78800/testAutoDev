// VideoPlayer.js

class VideoPlayer {
  constructor(mediaLoader, statusDisplay, qualitySelector, debugPanel) {
    this.mediaLoader = mediaLoader;
    this.statusDisplay = statusDisplay;
    this.qualitySelector = qualitySelector;
    this.debugPanel = debugPanel;

    // Initialize video player state
    this.currentMediaId = null;
    this.currentQualityLevel = 0;
    this.isPlaying = false;
  }

  play(mediaId) {
    if (this.currentMediaId !== mediaId) {
      this.stop();
      this.currentMediaId = mediaId;
      this.mediaLoader.loadmedia(this.currentMediaId);
    } else {
      // Resume playback
      this.isPlaying = true;
    }
  }

  stop() {
    this.isPlaying = false;
  }

  updateStatus(statusMessage) {
    this.statusDisplay.updateStatus(statusMessage);
  }

  selectQuality(qualityLevel) {
    if (this.currentQualityLevel !== qualityLevel) {
      // Update video player state
      this.currentQualityLevel = qualityLevel;

      // Notify media loader to adjust playback based on new quality level
      this.mediaLoader.setQuality(this.currentMediaId, this.currentQualityLevel);
    }
  }

  getDebugInfo() {
    return {
      currentMediaId: this.currentMediaId,
      currentQualityLevel: this.currentQualityLevel,
      isPlaying: this.isPlaying,
    };
  }
}

export default VideoPlayer;