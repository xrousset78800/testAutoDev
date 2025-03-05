// Récupération du programme télé et tnt
const programme = JSON.parse(localStorage.getItem('programme'));

// Fonction pour afficher les programmes télé et tnt
function displayProgrammes() {
  const programmeContainer = document.getElementById('programme-container');
  program.innerHTML = '';

  for (let i = 0; i < programme.length; i++) {
    const programmeItem = document.createElement('div');
    programmeItem.className = 'programme-item';

    const timeElement = document.createElement('span');
    timeElement.textContent = programme[i].time;

    const channelElement = document.createElement('span');
    channelElement.textContent = programme[i].channel;

    const programmeNameElement = document.createElement('span');
    programmeNameElement.textContent = programme[i].programme;

    programmeItem.appendChild(timeElement);
    program.appendChild(programmeItem);
  }
}

// Appel de la fonction d'affichage des programmes télé et tnt
displayProgrammes();