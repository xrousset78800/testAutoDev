// comment.js
function addComments() {
    // Récupération du contenu du fichier dailytv/date.txt
    fetch('./dailytv/date.txt')
        .then(response => response.text())
        .then(date => {
            const comments = [];
            
            // Ajout des commentaires pour chaque programme télé et tnt de la journée
            
            // Par exemple, si vous avez un fichier json contenant les informations sur le programme télé et tnt
            fetch('./programme.json')
                .then(response => response.json())
                .then(programmes => {
                    programmes.forEach(programme => {
                        comments.push(`**${programme.nom}**: ${programme.description}`);
                    });
                    
                    // Affichage des commentaires dans la page web
                    const commentElement = document.getElementById('comments');
                    commentElement.innerHTML = '';
                    comments.forEach(comment => {
                        const p = document.createElement('p');
                        p.innerText = comment;
                        commentElement.appendChild(p);
                    });
                });
        });
}

// Appel de la fonction pour ajouter les commentaires à la page web
addComments();