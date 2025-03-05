fetch('https://api.example.com/program-listing')
  .then(response => response.json())
  .then(data => {
    const programListing = document.getElementById('program-listing');
    let html = '';
    data.forEach(program => {
      html += `
        <div>
          <h2>${program.name}</h2>
          <p>${program.description}</p>
          <span class="air-time">${program.airTime}</span>
        </div>
      `;
    });
    programListing.innerHTML = html;
  })
  .catch(error => console.error('Error:', error));