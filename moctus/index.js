const express = require('express');
const app = express();
const port = 3000;
const whatsappApi = 'https://api.whatsapp.com/send';
const whatsappToken = 'YOUR_WHATSAPP_TOKEN';

app.use(express.static('.'));

// Function to send a WhatsApp message
function sendMessage(to, text) {
  const request = {
    method: 'POST',
    url: whatsappApi,
    headers: { 'Authorization':  },
    body: JSON.stringify({ to, text }),
  };
  return fetch(request.url, request);
}

// Function to send a permalink via WhatsApp
app.post('/send-permalink', (req, res) => {
  const publicationId = req.body.publicationId;
  const clientPhoneNumber = req.body.clientPhoneNumber;

  // Send the WhatsApp message here using the sendMessage function
  sendMessage(clientPhoneNumber, );
});

app.listen(port, () => {
  console.log();
});
