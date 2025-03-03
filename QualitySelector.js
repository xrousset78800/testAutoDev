// QualitySelector.js
class QualitySelector {
  constructor(videoPlayer) {
    this.videoPlayer = videoPlayer;
    this.qualityOptions = [];
    this.currentQuality = null;

    // Initialize quality options based on available qualities from MediaLoader
    const mediaLoader = new MediaLoader();
    mediaLoader.getQualities().then((qualities) => {
      this.qualityOptions = qualities.map((quality) => ({ label: quality.label, value: quality.value }));
    });
  }

  updateQualitySelect() {
    // Update the quality select element with available options
    const qualitySelectElement = document.getElementById('quality-select');
    qualitySelectElement.innerHTML = '';
    this.qualityOptions.forEach((option) => {
      const optionElement = document.createElement('option');
      optionElement.textContent = option.label;
      optionElement.value = option.value;
      qualitySelectElement.appendChild(optionElement);
    });
  }

  changeQuality(newQualityValue) {
    // Update the current quality and video player settings
    this.currentQuality = newQualityValue;
    this.videoPlayer.setQuality(this.currentQuality);

    // Notify other components of the quality update (e.g. DebugPanel)
    const debugPanel = new DebugPanel();
    debugPanel.updateVideoInfo();
  }

  getCurrentQuality() {
    return this.currentQuality;
  }
}

export default QualitySelector;