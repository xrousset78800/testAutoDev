class QualitySelector {
    constructor(videoPlayer) {
        this.videoPlayer = videoPlayer;
        this.container = document.getElementById('quality-selector');

        // Initialize with initial state
        this.update();
    }

    update() {
        const qualities = this.getQualities();

        if (qualities.length > 0) {
            let htmlString = '';

            for (let quality of qualities) {
                htmlString += `<option value="${quality}">${quality}</option>`;
            }

            this.container.innerHTML = '';
            this.container.innerHTML += '<select id="video-quality">';
            this.container.innerHTML += `${htmlString}`;
            this.container.innerHTML += '</select>';

            // Add event listener for select change
            const qualitySelect = document.getElementById('video-quality');
            qualitySelect.addEventListener('change', () => {
                this.videoPlayer.setQuality(qualitySelect.value);
            });
        }
    }

    getQualities() {
        let qualities;

        if (this.videoPlayer.source.type === 'hls') {
            // Get available qualities for HLS stream
            qualities = [...new Set(this.videoPlayer.getAvailableQualities())];
        } else {
            // Assume other formats have a fixed quality or no quality selection needed
            qualities = ['Default'];
        }

        return qualities;
    }
}

export default QualitySelector;
