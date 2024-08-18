console.log(location.hash);

window.addEventListener('hashchange', function() {
    var contentDiv = this.document.getElementById("app");
    contentDiv.innerHTML = this.location.hash;
});


function loadContent() {
    var contentDiv = document.getElementById('app');
    contentDiv.innerHTML = location.hash;
}


  window.addEventListener('hashchange', function (){
    loadContent();
});

// loadContent();

function getContent(fragmentId) {
    var pages = {
        home: 'This is the Home page. Welcome to my site.',
        about: 'This page will describe what my site is about',
        contact: 'Contact me on this page if you have any questions'
    };
    return pages[fragmentId];
} 

function loadContent() {
    var contentDiv = document.getElementById('app');
    fragmentId = location.hash.substr(1);
    contentDiv.innerHTML = getContent(fragmentId);
}

if(!location.hash) {
    location.hash = '#home';
}

loadContent();

window.addEventListener('hashchange', loadContent)




