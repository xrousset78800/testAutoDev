// Tracking tools JavaScript file

function trackPublication(publicationId, viewedAt) {
  // Send a request to update the publication's view count
  fetch('/track-publication', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ publicationId, viewedAt }),
  });
}

function sendWhatsAppMessage(publicationId) {
  // Replace with your WhatsApp API key and message template
  const apiKey = 'YOUR_API_KEY';
  const messageTemplate = `Check out this new listing! ${publicationId}`;

  fetch('/send-whatsapp-message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ apiKey, messageTemplate }),
  });
}

// Example usage:
const publicationId = 123;
trackPublication(publicationId, new Date());
sendWhatsAppMessage(publicationId);