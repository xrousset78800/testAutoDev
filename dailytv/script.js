// Load the programme data from JSON file
fetch('.data.json')
  .then(response => response.json())
  .then(data => {
    const programmes = data.programmes;
    const programmeList = document.getElementById('programme-list');

    // Display TV and TNT programs
    programmes.forEach(programme => {
      const listItem = document.createElement('li');
      listItem.textContent = `${programme.name} - ${programme.time}`;
      programmeList.appendChild(listItem);
    });
  })
  .catch(error => console.error(error));