
class QualitySelector {
  constructor(videoPlayer) {
    this.videoPlayer = videoPlayer;
    this.qualityOptionsContainer = document.getElementById('quality-options-container');
    this.currentQualityIndex = 0;

    // Initialize the quality selector
    this.init();
  }

  init() {
    const qualities = ['Low', 'Medium', 'High'];
    for (let i = 0; i < qualities.length; i++) {
      const optionElement = document.createElement('OPTION');
      optionElement.textContent = qualities[i];
      this.qualityOptionsContainer.appendChild(optionElement);
    }
  }

  updateQuality() {
    const selectedOption = this.qualityOptionsContainer.querySelector(':selected');
    if (selectedOption) {
      const qualityIndex = parseInt(selectedOption.index, 10);
      this.videoPlayer.setVideoQuality(qualityIndex);
    }
  }

  handleSelectChange(event) {
    event.preventDefault();
    this.updateQuality();
  }
}

// Initialize the QualitySelector instance
window.QualitySelector = new QualitySelector(window.VideoPlayer);
