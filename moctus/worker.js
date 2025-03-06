import { Worker } from '@google-cloud/worker';
const worker = new Worker({
  // Create a new instance of the WhatsApp API client.
  createClient: () => {
    const whatsAppApi = require('whatsapp-web.js');
    return whatsAppApi;
  },
});

// Define a function to handle incoming messages
async function handleMessage(message) {
  console.log(`Received message from ${message.from}: ${message.body}`);

  // Check if the message is related to a publication creation request.
  const regex = /create-publication (.*)/i;
  if (regex.test(message.body)) {
    const [_, permalink] = message.body.match(regex);
    await sendWhatsAppMessage(permalink, message.from);
  }
}

// Define a function to handle sending WhatsApp messages
async function sendWhatsAppMessage(permalink, recipient) {
  console.log(`Sending WhatsApp message with permalink ${permalink} to ${recipient}`);

  // Send the WhatsApp message using the WhatsApp API client.
  const whatsAppApi = await worker.createClient();
  whatsAppApi.sendMessage(recipient, `Voir la publication : ${permalink}`);
}

// Start listening for incoming messages
worker.on('message', handleMessage);

export default worker;