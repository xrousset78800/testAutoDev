// MediaLoader.js

class MediaLoader {
  constructor(videoPlayer) {
    this.videoPlayer = videoPlayer;
  }

  loadMedia(mediaUrl, mediaType) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', mediaUrl, true);
      xhr.responseType = 'arraybuffer';

      xhr.onload = () => {
        if (xhr.status === 200) {
          this.videoPlayer.setMedia(xhr.response);
          resolve();
        } else {
          reject(new Error(`Failed to load media: ${mediaUrl}`));
        }
      };

      xhr.onerror = () => {
        reject(new Error('Error loading media'));
      };

      xhr.send();
    });
  }

  canPlayType(mediaType) {
    // Check if the browser supports the given media type
    const supportedTypes = ['video/mp4', 'application/x-mpegURL'];
    return supportedTypes.includes(mediaType);
  }
}

export default MediaLoader;