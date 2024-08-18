// console.log(location.hash);

// window.addEventListener('hashchange', function() {
//     var contentDiv = this.document.getElementById("app");
//     contentDiv.innerHTML = this.location.hash;
// });


// function loadContent() {
//     var contentDiv = document.getElementById('app');
//     contentDiv.innerHTML = location.hash;
// }


//   window.addEventListener('hashchange', function (){
//     loadContent();
// });

// // loadContent();

// function getContent(fragmentId) {
//     var pages = {
//         home: 'This is the Home page. Welcome to my site.',
//         about: 'This page will describe what my site is about',
//         contact: 'Contact me on this page if you have any questions'
//     };
//     return pages[fragmentId];
// } 

// function loadContent() {
//     var contentDiv = document.getElementById('app');
//     fragmentId = location.hash.substr(1);
//     contentDiv.innerHTML = getContent(fragmentId);
// }

// if(!location.hash) {
//     location.hash = '#home';
// }

// loadContent();

// window.addEventListener('hashchange', loadContent)

// Employ basic JavaScript syntax accurately.
// Implement control flow structures such as conditionals and loops effectively.
// Use arrays and objects to organize and manage data.
// Develop functions to create reusable code.
// Utilize loops and iteration to navigate through data collections.
// Implement error handling to manage potential code failures gracefully.

const express = require('express');
const path = require('path');


const app = express();

app.get('/*', (req, res) => {
    res.send
})



