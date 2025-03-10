const express = require('express');
const app = express();
app.use(express.json());

// Base de données clients
let clients = [
  { id: 1, name: 'John Doe', phoneNumber: '0123456789', email: 'john.doe@example.com' },
  // Ajouter d'autres clients ici...
];

// Interface de création de publication
app.post('/create-publication', (req, res) => {
  const publication = req.body;
  console.log(publication);
  res.send('Publication créée avec succès!');
});

// Envoi du permalink via WhatsApp au client
app.get('/send-whatsapp-message/:id', (req, res) => {
  const clientId = req.params.id;
  // Envoyer le message WhatsApp ici...
  res.send(`Message envoyé à l'utilisateur ${clientId}!`);
});

// Espace pour améliorer la lisibilité du code

module.exports = app;
