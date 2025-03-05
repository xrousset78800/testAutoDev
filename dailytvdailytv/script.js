// Récupération du contenu du fichier data.json
fetch('\data.json')
    .then(response => response.json())
    .then(data => {
        // Affichage des programmes TV et TNT de la journée
        const programmeList = document.getElementById('programme-list');
        data.programmes.forEach(programme => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <h2>${programme.name}</h2>
                <p>${programme.description}</p>
            `;
            programmeList.appendChild(listItem);
        });
    });

// Gestion des interactions avec l'utilisateur
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', () => {
        // Faire quelque chose en fonction de la recherche de l'utilisateur
    });
});