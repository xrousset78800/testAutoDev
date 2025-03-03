// QualitySelector.js

class QualitySelector {
  constructor(videoPlayer, qualityOptions) {
    this.videoPlayer = videoPlayer;
    this.qualityOptions = qualityOptions;

    // Initialize quality selector state
    this.currentQualityLevel = null;

    // Render quality options as radio buttons
    const qualityRadioContainer = document.getElementById('quality-radio-container');
    Object.keys(qualityOptions).forEach((key) => {
      const radioButton = document.createElement('input');
      radioButton.type = 'radio';
      radioButton.name = 'quality';
      radioButton.value = key;
      radioButton.checked = false;

      const labelElement = document.createElement('label');
      labelElement.textContent = `${key} (${qualityOptions[key].bitrate} kbps)`;

      qualityRadioContainer.appendChild(radioButton);
      qualityRadioContainer.appendChild(labelElement);

      // Add event listener for radio button selection
      radioButton.addEventListener('change', (event) => {
        this.videoPlayer.setQuality(event.target.value);
      });
    });

    // Initialize current quality level from video player state if available
    if (this.videoPlayer.getCurrentQualityLevel()) {
      const selectedRadioButton = document.querySelector(`input[name='quality'][value='${this.videoPlayer.getCurrentQualityLevel()}']`);
      if (selectedRadioButton) {
        selectedRadioButton.checked = true;
        this.currentQualityLevel = this.videoPlayer.getCurrentQualityLevel();
      }
    }
  }

  getCurrentQualityLevel() {
    return this.currentQualityLevel;
  }

  setQuality(qualityLevel) {
    // Update video player state with new quality level
    this.videoPlayer.setQuality(qualityLevel);
  }
}

export default QualitySelector;