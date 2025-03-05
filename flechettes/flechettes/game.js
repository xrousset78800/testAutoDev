// Définir les variables
let playerScore = 0;
let dartboard = {
    sections: [
        { name: "Double", value: 2 },
        { name: "Triple", value: 3 },
        { name: "Bullseye", value: 50 }
    ]
};

// Fonction pour mettre à jour le score du joueur
function updateScore() {
    // Mettre à jour le score ici (par exemple, en fonction des résultats du jeu)
    playerScore = 10; // Exemple de mise à jour du score
}

// Appeler la fonction d'actualisation du score une fois que le jeu est lancé
updateScore();

// Exporter les variables et les fonctions pour être utilisées dans le fichier HTML
export { playerScore, dartboard };