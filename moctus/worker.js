const express = require('express');
const app = express();
app.use(express.json());

let whatsappClient;

async function startWhatsApp() {
  const WhatsAppApi = require('whatsapp-web.js');

  // Initialize the WhatsApp API client.
  whatsappClient = new WhatsAppApi();

  // Handle incoming messages from WhatsApp.
  whatsappClient.on('message', async (msg) => {
    console.log(`Received message: ${msg.body}`);

    if (!process.env.WHATSAPP_API_TOKEN || !process.env.WHATSAPP_API_PHONE_NUMBER) {
      return;
    }

    try {
      await handleWhatsAppMessage(msg);
    } catch (error) {
      console.error(error);
    }
  });

  // Start the WhatsApp API client.
  whatsappClient.start();
}

async function handleWhatsAppMessage(message) {
  if (!message.body.includes('create-publication')) {
    return;
  }

  const [permalink] = message.body.split(' ');
  permalink = permalink.trim();

  console.log(`Received create-publication request for ${permalink}`);

  // Send a response to the WhatsApp user.
  await whatsappClient.sendMessage(message.from, `Voir la publication : ${permalink}`);
}

// Start the worker that pushes publications to WhatsApp.
startWhatsApp();