// Get the programme list element
const programmeList = document.getElementById('programme-list');

// Load the programmes data from JSON file
fetch('.dailytv/data.json')
    .then(response => response.json())
    .then(data => {
        // Loop through each program and create a list item for it
        data.programmes.forEach(programme => {
            const programmeListItem = document.createElement('li');
            programmeListItem.textContent = `${programme.name} - ${programme.channel}`;
            programmeList.appendChild(programmeListItem);
        });
    })
    .catch(error => console.error(error));