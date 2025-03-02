// video-player.js
import { VideoPlayer } from './video-player';
import { StatusDisplay } from './status-display';
import { QualitySelector } from './quality-selector';
import { DebugPanel } from './debug-panel';
import { MediaLoader } from './media-loader';
import { HLSService } from './hlsservice';
import { ProxyService } from './proxy-service';

class App {
  constructor() {
    this.videoPlayer = new VideoPlayer();
    this.statusDisplay = new StatusDisplay();
    this.qualitySelector = new QualitySelector();
    this.debugPanel = new DebugPanel();
    this.mediaLoader = new MediaLoader();
    this.hlsservice = new HLSService();
    this.proxyService = new ProxyService();

    this.init();
  }

  init() {
    // initialize video player
    this.videoPlayer.setMediaLoader(this.mediaLoader);
    this.videoPlayer.setStatusDisplay(this.statusDisplay);
    this.videoPlayer.setQualitySelector(this.qualitySelector);

    // initialize status display
    this.statusDisplay.setStatusUpdater(() => {
      // update status text here
    });

    // initialize quality selector
    this.qualitySelector.setQualityChangedListener(() => {
      // update video player with new quality settings
    });

    // initialize debug panel
    this.debugPanel.setDebugInfoUpdater(() => {
      // update debug panel with new info
    });

    // initialize media loader
    this.mediaLoader.setMediaLoadedCallback((media) => {
      // handle media loaded event here
    });

    // initialize HLSService
    this.hlsservice.setHLSErrorHandler((error) => {
      // handle HLS error here
    });

    // initialize ProxyService
    this.proxyService.setProxyErrorCallback((error) => {
      // handle proxy error here
    });
  }
}

const app = new App();