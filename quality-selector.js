// QualitySelector class - responsible for displaying and handling video quality options
class QualitySelector {
  constructor(videoPlayer) {
    this.videoPlayer = videoPlayer;
    this.qualityOptionsElement = document.createElement('div');
    this.qualityOptionsElement.className = 'video-player-quality-options';
    document.body.appendChild(this.qualityOptionsElement);

    // Create a dropdown list of available qualities
    const qualityDropdown = document.createElement('select');
    qualityDropdown.id = 'quality-dropdown';

    for (const quality in this.videoPlayer.getAvailableQualities()) {
      const option = document.createElement('option');
      option.text = ` ${quality} `;
      qualityDropdown.appendChild(option);
    }

    // Add the dropdown list to the quality options element
    this.qualityOptionsElement.appendChild(qualityDropdown);

    // Event listener for selecting a new quality
    qualityDropdown.addEventListener('change', (event) => {
      const selectedQuality = event.target.value;
      this.videoPlayer.setVideoQuality(selectedQuality);
    });
  }
}

export default QualitySelector;