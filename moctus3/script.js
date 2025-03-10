// Get the form submission data
const formData = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    price: parseFloat(document.getElementById('price').value),
    saleType: document.querySelector('input[name="sale-type"]:checked').id,
};

// Handle form submission
document.getElementById('create-publication-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Send the data to your backend API or database
    fetch('/api/create-publication', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
        // Send the permalink via WhatsApp API (replace with your own implementation)
        const whatsappApi = new WhatsAPI('YOUR_API_KEY', 'YOUR_PHONE_NUMBER');
        whatsappApi.sendTextMessage('+1234567890', `Your publication is live! ${data.permalink}`);
        
        // Update the UI to reflect the successful submission
        document.getElementById('create-publication-form').reset();
    })
    .catch((error) => console.error(error));
});

// Add tracking tools (e.g., Google Analytics)
function trackEvent(category, action, label) {
    const analytics = new Analytics('YOUR_ANALYTICS_TRACKING_ID');
    analytics.trackEvent(category, action, label);
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the WhatsApp API
    whatsAppApi.init();
    
    // Add event listeners for tracking tools (e.g., button clicks)
    document.querySelectorAll('.trackable-element').forEach((element) => {
        element.addEventListener('click', (event) => trackEvent(event.target.dataset.category, event.target.dataset.action));
    });
});
