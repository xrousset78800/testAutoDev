// Import required modules and services
import { VideoPlayer } from './VideoPlayer';
import { StatusDisplay } from './StatusDisplay';
import { QualitySelector } from './QualitySelector';
import { DebugPanel } from './DebugPanel';
import { MediaLoader } from './MediaLoader';
import { HLSService } from './HLSService';
import { ProxyService } from './ProxyService';
import Logger from './Logger';

// Initialize the video player
const videoPlayer = new VideoPlayer();
videoPlayer.setContainer(document.querySelector('.video-player-container'));

// Initialize the status display
const statusDisplay = new StatusDisplay(videoPlayer);
statusDisplay.display('Ready');

// Initialize the quality selector
const qualitySelector = new QualitySelector(videoPlayer);
qualitySelector.display();

// Initialize the debug panel
const debugPanel = new DebugPanel();
debugPanel.display();

// Load media and initialize playback
MediaLoader.load().then((media) => {
    videoPlayer.setSource(media.source);
    videoPlayer.play();
});

// Handle play/pause button clicks
document.getElementById('play-button').addEventListener('click', () => {
    if (videoPlayer.isPlaying()) {
        videoPlayer.pause();
    } else {
        videoPlayer.play();
    }
});

// Handle quality selector changes
qualitySelector.addEventListener('change', (newQuality) => {
    // Update the video player with the new quality
    videoPlayer.setQuality(newQuality);
});

// Initialize CORS proxy if necessary
ProxyService.initialize();

// Start logging
Logger.startLogging();

export { videoPlayer, statusDisplay, qualitySelector, debugPanel };
