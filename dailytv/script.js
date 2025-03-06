// script.js
function getPrograms() {
  fetch('program.json')
    .then(response => response.json())
    .then(data => {
      const programs = data.programs;
      const programContainer = document.getElementById('programs');
      
      programs.forEach(program => {
        const programItem = document.createElement('div');
        programItem.className = 'program-item';
        
        const title = document.createElement('h2');
        title.textContent = program.title;
        programItem.appendChild(title);
        
        const description = document.createElement('p');
        description.textContent = program.description;
        programItem.appendChild(description);
        
        const time = document.createElement('span');
        time.textContent = `(${program.time})`;
        programItem.appendChild(time);
        
        programContainer.appendChild(programItem);
      });
    })
    .catch(error => console.error(error));
}

getPrograms();