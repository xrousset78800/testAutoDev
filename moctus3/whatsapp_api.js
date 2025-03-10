// WhatsApp API integration
const whatsAppApi = {
  // Replace with your own WhatsApp Business API credentials
  api_key: 'YOUR_API_KEY',
  phone_number: '+1234567890',

  sendTextMessage(phoneNumber, message) {
    fetch(`https://graph.facebook.com/v13.0/${this.phone_number}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: phoneNumber,
        text: message
      })
    });
  }
};

// Example usage:
const clientPhoneNumber = '+9876543210';
const permalink = 'https://example.com/publication-permalink';

whatsAppApi.sendTextMessage(clientPhoneNumber, `Your publication is live! ${permalink}`);
