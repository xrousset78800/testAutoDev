// Récupération du programme télé et tnt de la journée
fetch('./programme.json')
    .then(response => response.json())
    .then(data => {
        const programmeContainer = document.getElementById('programme-container');
        data.programmes.forEach(programme => {
            const itemHTML = `
                <div class="programme-item">
                    <h2>${programme.title}</h2>
                    <p>${programme.description}</p>
                    <time>${programme.time}</time>
                </div>
            `;
            programmeContainer.innerHTML += itemHTML;
        });
    });

// Ajout d'un événement pour afficher le programme télé et tnt de la journée
document.addEventListener('DOMContentLoaded', () => {
    const programmeTitle = document.getElementById('programme-title');
    programmeTitle.textContent = 'Programme télé et tnt de la journée';
});