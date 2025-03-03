// VideoPlayer class - responsible for coordinating all components
class VideoPlayer {
  constructor(videoContainer) {
    this.videoContainer = videoContainer;
    this.statusDisplay = new StatusDisplay();
    this.qualitySelector = new QualitySelector();
    this.debugPanel = new DebugPanel();
    this.mediaLoader = new MediaLoader();
    this.hlsservice = new HLSService();
    this.proxyService = new ProxyService();

    // Initialize the player
    this.initPlayer(videoContainer);
  }

  initPlayer(videoContainer) {
    const videoElement = document.createElement('video');
    videoElement.srcObject = null;
    videoElement.playing = false;

    this.videoContainer.appendChild(videoElement);

    // Add event listeners for playback control
    videoElement.addEventListener('play', () => {
      this.statusDisplay.updateStatus('Playing...');
    });

    videoElement.addEventListener('pause', () => {
      this.statusDisplay.updateStatus('Paused');
    });

    videoElement.addEventListener('error', (event) => {
      const errorMessage = `Error: ${event.target.error.message}`;
      this.statusDisplay.updateStatus(errorMessage);
    });
  }

  playVideo(videoUrl, quality) {
    if (!this.mediaLoader.isMediaLoaded(videoUrl)) {
      // Load the media
      this.mediaLoader.loadMedia(videoUrl).then((media) => {
        const videoElement = document.createElement('video');
        videoElement.srcObject = media;
        videoElement.playing = false;

        this.videoContainer.appendChild(videoElement);

        if (quality) {
          // Set the quality for playback
          videoElement.setQuality(quality);
        }

        // Start playing the video
        videoElement.play();

        this.statusDisplay.updateStatus(`Playing: ${videoUrl}`);
      }).catch((error) => {
        console.error(error);
        this.statusDisplay.updateStatus('Error loading media');
      });
    } else {
      // The media is already loaded, start playback
      const videoElement = document.querySelector('video');
      if (quality) {
        // Set the quality for playback
        videoElement.setQuality(quality);
      }

      videoElement.play();

      this.statusDisplay.updateStatus(`Playing: ${videoUrl}`);
    }
  }

  stopVideo() {
    const videoElement = document.querySelector('video');
    videoElement.pause();
    this.statusDisplay.updateStatus('Paused');
  }

  // Other methods for handling playback controls, quality selection, and debug information
}

export default VideoPlayer;