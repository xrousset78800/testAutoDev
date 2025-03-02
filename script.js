// Singleton pattern for services and components
class Singleton {
  constructor() {
    this.instance = null;
  }
  getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance;
  }
}

// VideoPlayer class
class VideoPlayer extends Singleton {
  constructor() {
    super();
    this.statusDisplay = StatusDisplay.getInstance();
    this.qualitySelector = QualitySelector.getInstance();
    this.debugPanel = DebugPanel.getInstance();
    this.mediaLoader = MediaLoader.getInstance();
    this.hlsService = HLSService.getInstance();
    this.proxyService = ProxyService.getInstance();
  }
  playVideo() {
    // Play video logic here
  }
}

// StatusDisplay class
class StatusDisplay extends Singleton {
  constructor() {
    super();
    this.videoPlayer = VideoPlayer.getInstance();
    this.updateStatus();
  }
  updateStatus() {
    // Update status display with current video status
  }
}

// QualitySelector class
class QualitySelector extends Singleton {
  constructor() {
    super();
    this.videoPlayer = VideoPlayer.getInstance();
    this.updateQualityOptions();
  }
  updateQualityOptions() {
    // Update quality options based on available qualities
  }
}

// DebugPanel class
class DebugPanel extends Singleton {
  constructor() {
    super();
    this.videoPlayer = VideoPlayer.getInstance();
    this.updateDebugInfo();
  }
  updateDebugInfo() {
    // Update debug panel with current video metrics
  }
}

// MediaLoader class
class MediaLoader extends Singleton {
  constructor() {
    super();
    this.videoPlayer = VideoPlayer.getInstance();
    this.loadMedia();
  }
  loadMedia() {
    // Load media logic here
  }
}

// HLSService class
class HLSService extends Singleton {
  constructor() {
    super();
    this.mediaLoader = MediaLoader.getInstance();
    this.hlsjs = require('hls.js');
  }
  playHLSVideo() {
    // Play HLS video logic here
  }
}

// ProxyService class
class ProxyService extends Singleton {
  constructor() {
    super();
    this.mediaLoader = MediaLoader.getInstance();
    this.proxyUrl = 'https://example.com/proxy';
  }
  getProxyUrl() {
    return this.proxyUrl;
  }
}

// Logger service
class Logger {
  log(message) {
    console.log(message);
  }
}

// UrlHelper utility class
class UrlHelper {
  static buildUrl(url, params) {
    // Build URL logic here
  }
}

// Initialize application
window.onload = function() {
  const videoPlayer = VideoPlayer.getInstance();
  const statusDisplay = StatusDisplay.getInstance();
  const qualitySelector = QualitySelector.getInstance();
  const debugPanel = DebugPanel.getInstance();
  // Initialize other components and services as needed
};

export { VideoPlayer, StatusDisplay, QualitySelector, DebugPanel, MediaLoader, HLSService, ProxyService, Logger, UrlHelper };