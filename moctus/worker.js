const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let clientsDatabase = [];

function createPublication(publicationType, photos, videos, description, price) {
    // Code to create publication here
}

async function sendNotification(to, message) {
    // Code to send notification here
}

// Example usage:
createPublication('vente privee', ['photo1.jpg'], [], 'Description de la vente privée', 100);
sendNotification("john@example.com", "New publication available!");
