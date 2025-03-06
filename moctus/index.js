const express = require('express');
const app = express();
app.use(express.static('.'));

// Base de donnée clients
let clientsDB = {
  "John Doe": {"nom": "John", "prenom": "Doe", "telephoneMobile": "+33 6 12 34 56", "email": "john.doe@example.com"},
  // Add more clients here...
};

// Interface de creation de publication, type vente privée ou vente en cours
app.get('/create-publication', (req, res) => {
  res.sendFile('publication-form.html');
});

// Choix de photos et videos, renseignement de description et prix
let publications = [];

app.post('/submit-publication', (req, res) => {
  let publicationData = req.body;
  // Add logic to create a new publication here...
  res.send(`Publication créée avec succès !`);
});

// Soumettre le formulaire pour creer un permalien
app.get('/generate-permalink/:id', (req, res) => {
  let id = req.params.id;
  // Add logic to generate a permalink here...
  res.sendFile('permalink.html');
});

// Envoyer le permalien via whatsapp au client
app.post('/send-whatsapp-message', (req, res) => {
  let messageData = req.body;
  // Add logic to send the WhatsApp message here...
  res.send(`Message envoyé avec succès !`);
});

// Interface simple de gestion des admins, publications etc.
app.get('/admin-interface', (req, res) => {
  res.sendFile('admin-interface.html');
});

app.listen(3000, () => {
  console.log('Server started on port 3000!');
});