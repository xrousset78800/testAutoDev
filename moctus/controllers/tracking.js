const fs = require('fs');
const path = require('path');

class Tracking {
    async getTrackingData() {
        try {
            const trackingFile = await fs.promises.readFile(path.join(__dirname, 'tracking.json'), 'utf8');
            return JSON.parse(trackingFile);
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async updateTrackingData(publicationId, clientEmail) {
        try {
            const trackingData = await this.getTrackingData();
            trackingData.push({ id: publicationId, email: clientEmail });
            await fs.promises.writeFile(path.join(__dirname, 'tracking.json'), JSON.stringify(trackingData));
        } catch (error) {
            console.error(error);
        }
    }

    async getPublicationStats(publicationId) {
        try {
            const trackingData = await this.getTrackingData();
            return trackingData.filter((data) => data.id === publicationId).length;
        } catch (error) {
            console.error(error);
            return 0;
        }
    }
}

module.exports = Tracking;
