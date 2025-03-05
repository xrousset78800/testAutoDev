// Get the JSON data from the programmes.json file
fetch('./programmes.json')
  .then(response => response.json())
  .then(data => {
    // Create an HTML list element to display the programs
    const programmeList = document.getElementById('programmes-list');
    
    // Loop through each program and create a list item for it
    data.forEach(programme => {
      const listItem = document.createElement('li');
      listItem.textContent = `${programme.name} - ${programme.time} on ${programme.channel}`;
      programmeList.appendChild(listItem);
    });
  })
  .catch(error => console.error(error));