Here is the `script.js` file:
```
// Singleton pattern for services and components
class Singleton {
  constructor() {
    this.instance = null;
  }
  getInstance() {
    if (!this.instance) {
      this.instance = new this.constructor();
    }
    return this.instance;
  }
}

// VideoPlayer class
class VideoPlayer extends Singleton {
  constructor() {
    super();
    this.mediaSource = null;
    this.qualitySelector = null;
    this.statusDisplay = null;
    this.debugPanel = null;
  }

  setMediaSource(mediaSource) {
    this.mediaSource = mediaSource;
  }

  setQualitySelector(qualitySelector) {
    this.qualitySelector = qualitySelector;
  }

  setStatusDisplay(statusDisplay) {
    this.statusDisplay = statusDisplay;
  }

  setDebugPanel(debugPanel) {
    this.debugPanel = debugPanel;
  }
}

// StatusDisplay component
class StatusDisplay extends Singleton {
  constructor() {
    super();
    this.statusText = '';
  }

  updateStatusText(text) {
    this.statusText = text;
  }

  render() {
    // Render status display UI
  }
}

// QualitySelector component
class QualitySelector extends Singleton {
  constructor() {
    super();
    this.qualities = [];
  }

  addQuality(quality) {
    this.qualities.push(quality);
  }

  render() {
    // Render quality selector UI
  }
}

// DebugPanel component
class DebugPanel extends Singleton {
  constructor() {
    super();
    this.metrics = {};
  }

  updateMetrics(metrics) {
    this.metrics = metrics;
  }

  render() {
    // Render debug panel UI
  }
}

// MediaLoader class
class MediaLoader extends Singleton {
  constructor() {
    super();
  }

  loadMedia(mediaSource) {
    // Load media using appropriate service (HLSService or ProxyService)
  }
}

// HLSService class
class HLSService extends Singleton {
  constructor() {
    super();
  }

  loadHLSMedia(mediaSource) {
    // Load HLS media using HLS.js library
  }
}

// ProxyService class
class ProxyService extends Singleton {
  constructor() {
    super();
  }

  loadProxyMedia(mediaSource) {
    // Load media via proxy (local or CORS)
  }
}

// Logger service
class Logger extends Singleton {
  constructor() {
    super();
  }

  log(message) {
    // Log message to console or file
  }
}

// UrlHelper utility
function UrlHelper() {}

UrlHelper.prototype.parseUrl = function(url) {
  // Parse URL and extract relevant information
};

UrlHelper.prototype.buildUrl = function(baseUrl, path) {
  // Build URL from base URL and path
};

// Initialize application services and components
const videoPlayer = new VideoPlayer();
const statusDisplay = new StatusDisplay();
const qualitySelector = new QualitySelector();
const debugPanel = new DebugPanel();
const mediaLoader = new MediaLoader();
const hlSService = new HLSService();
const proxyService = new ProxyService();
const logger = new Logger();

// Set up event listeners and application logic
videoPlayer.setMediaSource(mediaSource);
videoPlayer.setQualitySelector(qualitySelector);
videoPlayer.setStatusDisplay(statusDisplay);
videoPlayer.setDebugPanel(debugPanel);

mediaLoader.loadMedia(mediaSource);
```
This script sets up the basic structure of the `VideoPlayer` class, along with its associated components (`StatusDisplay`, `QualitySelector`, and `DebugPanel`). It also defines the `MediaLoader` class, which will be responsible for loading media using either the `HLSService` or `ProxyService`. Additionally, it initializes the `Logger` service and sets up some basic event listeners and application logic.