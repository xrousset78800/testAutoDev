class StatusDisplay {
    constructor(videoPlayer) {
        this.videoPlayer = videoPlayer;
        this.container = document.getElementById('status-display');

        // Initialize display with initial state
        this.update();
    }

    update() {
        const statusText = this.get.statusText;

        if (this.videoPlayer.isPlaying()) {
            this.container.innerHTML = `Playing: ${statusText}`;
        } else {
            this.container.innerHTML = `${statusText}`;
        }
    }

    get text() {
        let textStatus;
        
        switch (this.videoPlayer.source.type) {
          case 'mp4':
              textStatus = "MP4";
              break;
          case 'hls':
              textStatus = "HLS";
              break;
          case 'm3u8':
              textStatus = "MPEG-TS";
              break;
          default:
            textStatus = "Unknown format";
        }

        return textStatus;
    }
}

export default StatusDisplay;
