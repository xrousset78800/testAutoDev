// Function to retrieve daily TV program data dynamically
function getDailyProgram() {
    // Replace with your API endpoint or data source
    fetch('https://example.com/api/tv-program')
        .then(response => response.json())
        .then(data => {
            const programList = document.getElementById('program-list');
            
            data.forEach(program => {
                const programItem = document.createElement('li');
                programItem.textContent = `${program.title} - ${program.time}`;
                programList.appendChild(programItem);
            });
        })
        .catch(error => console.error(error));
}

// Call the getDailyProgram function when the page loads
document.addEventListener("DOMContentLoaded", () => {
    getDailyProgram();
});