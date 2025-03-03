// QualitySelector class definition
class QualitySelector {
    constructor(videoPlayer) {
        this.videoPlayer = videoPlayer;
        this.qualitySelectElement = document.getElementById('quality-selector');

        // Initialize the quality selector with default options
        this.setQualityOptions([
            { id: 1, label: 'Low', bitrate: 1000000 },
            { id: 2, label: 'Medium', bitrate: 5000000 },
            { id: 3, label: 'High', bitrate: 20000000 }
        ]);

        // Set up event listener for quality selection
        this.qualitySelectElement.addEventListener('change', (event) => {
            const selectedQuality = parseInt(event.target.value, 10);
            this.videoPlayer.setQuality(selectedQuality);
        });
    }

    // Update the quality options
    setQualityOptions(options) {
        this.qualitySelectElement.innerHTML = '';
        options.forEach((option) => {
            const optionElement = document.createElement('option');
            optionElement.value = option.id;
            optionElement.text = option.label;
            this.qualitySelectElement.appendChild(optionElement);
        });
    }
}

export default QualitySelector;