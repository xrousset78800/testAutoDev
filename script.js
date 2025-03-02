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
    this.videoElement = document.getElementById('video');
    this.qualitySelector = QualitySelector.getInstance();
    this.statusDisplay = StatusDisplay.getInstance();
  }

  play(videoUrl) {
    // Load video using MediaLoader service
    const mediaLoader = MediaLoader.getInstance();
    mediaLoader.load(videoUrl)
      .then((media) => {
        // Play video with detected quality
        this.videoElement.srcObject = media;
        this.videoElement.play();
      })
      .catch((error) => {
        this.statusDisplay.displayError(error);
      });
  }

  selectQuality() {
    this.qualitySelector.show();
  }
}

// QualitySelector component
class QualitySelector extends Singleton {
  constructor() {
    super();
    this.qualities = [];
  }

  show() {
    // Display quality selector UI here
  }

  getQualities(videoUrl) {
    // Load qualities for video using HLSService or ProxyService
    const hlsService = HLSService.getInstance();
    return hlsService.getQualities(videoUrl);
  }
}

// StatusDisplay component
class StatusDisplay extends Singleton {
  constructor() {
    super();
    this.statusText = document.getElementById('status');
  }

  displayStatus(status) {
    this.statusText.textContent = status;
  }

  displayError(error) {
    this.displayStatus(`Error: ${error.message}`);
  }
}

// MediaLoader service
class MediaLoader extends Singleton {
  load(videoUrl) {
    // Load video using HLS.js for HLS and MPEG-TS formats, or MP4 format otherwise
    if (videoUrl.endsWith('.ts') || videoUrl.endsWith('.m3u8')) {
      return hlsjs.load(videoUrl);
    } else {
      return fetch(videoUrl).then((response) => response.blob());
    }
  }
}

// HLSService service
class HLSService extends Singleton {
  getQualities(videoUrl) {
    // Load qualities for HLS video using HLS.js
    const hls = hlsjs.load(videoUrl);
    return hls.getAvailableQualityLevels();
  }
}

// ProxyService service
class ProxyService extends Singleton {
  getProxyUrl(videoUrl) {
    // Determine if CORS is allowed, and use a proxy if necessary
    if (/* check CORS */) {
      return `http://localhost:8080/proxy?url=${videoUrl}`;
    } else {
      return videoUrl;
    }
  }
}

// Logger service
class Logger extends Singleton {
  log(message) {
    console.log(message);
  }
}

// UrlHelper utility
function getUrlParameter(name) {
  const url = window.location.href;
  const params = url.split('?')[1].split('&');
  for (const param of params) {
    if (param.startsWith(`${name}=`)) {
      return param.substring(param.indexOf('=') + 1);
    }
  }
  return null;
}

// Initialize application
window.onload = () => {
  const videoPlayer = VideoPlayer.getInstance();
  const qualitySelector = QualitySelector.getInstance();
  const statusDisplay = StatusDisplay.getInstance();

  // Set up event listeners for UI components

  // Load video when user selects a media source
  document.getElementById('media-source').addEventListener('change', (event) => {
    const videoUrl = event.target.value;
    videoPlayer.play(videoUrl);
  });

  // Update quality selector when video qualities change
  videoPlayer.on('qualityChange', (qualities) => {
    qualitySelector.setQualities(qualities);
  });
};