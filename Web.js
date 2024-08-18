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
        home: "This is the Home page. Welcome to my site.",
        about: " This page will describe what my site is about",
        contact: 'Contact me on this page if you have any questions',
    };
    return pages[fragmentId];
};

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

// function changeColor(newColor) {
//     const elem = document.getElementById("para");
//     elem.style.color = newColor;
//   }

// const router = async () => {
//     const routes = [
//         {path: '#home', view: () => console.log('Viewing Home')},
//         { path: '#about', view: () => console.log('Viewing About')},
//         { path: '#contact', view: () => console.log('Viewing Contact')},
//     ]};

// const navigateTo = url => {
//     history.pushState(null, null, url);
//     router();
// };

// window.addEventListener('popstate', router);

// const route = (event) => {
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
//     handleLocation();
// };

// const routes = {
//     404: "http://127.0.0.1:5500/testing123/Pages/404.html",
//     "/": "http://127.0.0.1:5500/testing123/Pages/Web.html",
//     "/about": "http://127.0.0.1:5500/testing123/Pages/about.html",
//     "/contact": "http://127.0.0.1:5500/testing123/Pages/contact.html"
// };

// const handleLocation = async () => {
//     const path = window.location.pathname;
//     const route = routes[path] || routes [404];
//     const html = await fetch(route).then((data).text());
//     document.getElementById('main-page').innerHTML = html;
// };

// window.onpopstate = handleLocation;

// window.route = route;

// handleLocation();
















