// api.js
const axios = require('axios');

function getProgrammes() {
    return axios.get('./programme.json')
        .then(response => response.data);
}

function addComments(programmes) {
    const comments = [];
    
    programmes.forEach(programme => {
        comments.push(`**${programme.name}**: ${programme.description}`);
    });
    
    return comments;
}

module.exports = { getProgrammes, addComments };