const fs = require('fs');
const path = require('path');

class AdminController {
    async getPublications() {
        const publicationsData = await fs.promises.readFile(path.join(__dirname, 'publications.json'), 'utf8');
        return JSON.parse(publicationsData);
    }

    async createPublication(data) {
        // Create a new publication
        const newPublicationId = Math.floor(Math.random() * 1000000);
        const publicationsData = await fs.promises.readFile(path.join(__dirname, 'publications.json'), 'utf8');
        const publications = JSON.parse(publicationsData);

        publications.push({ id: newPublicationId, ...data });

        await fs.promises.writeFile(path.join(__dirname, 'publications.json'), JSON.stringify(publications));

        return { id: newPublicationId };
    }

    async updatePublication(id, data) {
        // Update a publication
        const publicationsData = await fs.promises.readFile(path.join(__dirname, 'publications.json'), 'utf8');
        const publications = JSON.parse(publicationsData);

        for (const publication of publications) {
            if (publication.id === id) {
                Object.assign(publication, data);
                break;
            }
        }

        await fs.promises.writeFile(path.join(__dirname, 'publications.json'), JSON.stringify(publications));
    }

    async deletePublication(id) {
        // Delete a publication
        const publicationsData = await fs.promises.readFile(path.join(__dirname, 'publications.json'), 'utf8');
        const publications = JSON.parse(publicationsData);

        for (const i in publications) {
            if (publications[i].id === id) {
                delete publications[i];
                break;
            }
        }

        await fs.promises.writeFile(path.join(__dirname, 'publications.json'), JSON.stringify(publications));
    }
}

module.exports = AdminController;
