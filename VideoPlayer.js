class VideoPlayer {
    constructor() {
        this.container = null;
        this.source = null;
        this.isPlaying = false;
        this.quality = 'auto';
        this.mediaLoader = new MediaLoader();
    }

    setContainer(container) {
        this.container = container;
    }

    setSource(source) {
        this.source = source;
    }

    play() {
        if (!this.isPlaying) {
            // Play the video
            this.container.play();

            this.isPlaying = true;

            Logger.log('Playing');
        }
    }

    pause() {
        if (this.isPlaying) {
            // Pause the video
            this.container.pause();

            this.isPlaying = false;

            Logger.log('Pausing');
        }
    }

    setQuality(quality) {
        this.quality = quality;
        // Update the video player with the new quality
        this.mediaLoader.setQuality(quality);
    }

    isPlaying() {
        return this.isPlaying;
    }

    getContainer() {
        return this.container;
    }
}

export default VideoPlayer;
