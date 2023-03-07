const homeButton = document.querySelector('.nav-link[href="index.html"]');
homeButton.addEventListener("click", function() {
   history.pushState(null, null, '/home');
   loadPage("index.html");
});

const infoButton = document.querySelector('.nav-button[href="info.html"]');
infoButton.addEventListener("click", function() {
   history.pushState(null, null, '/info');
   loadPage("info.html");
});

const enqButton = document.querySelector('.nav-button[href="enquiry"]');
infoButton.addEventListener("click", function() {
   history.pushState(null, null, '/enquiry');
   loadPage("enquiry.html");
});

