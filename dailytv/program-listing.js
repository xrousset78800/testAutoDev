// Load data from JSON file
fetch('.data.json')
  .then(response => response.json())
  .then(data => {
    // Get the program listing element
    const programListing = document.getElementById('program-listing');

    // Create a table to display programs
    let html = '<table>';
    for (const program of data) {
      html += `<tr><td>${program.name}</td><td>${program.time}</td></tr>`;
    }
    html += '</table>';

    // Add the HTML content to the page
    programListing.innerHTML = html;
  });