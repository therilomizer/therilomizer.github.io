//Fill variables with section and button targets

var videoSection = document.getElementById('video'),
    rulesSection = document.getElementById('rules'),
    optionalSection = document.getElementById('optional'),
    aboutSection = document.getElementById('about'),
    videoLink = document.getElementsByClassName('videoLink'),
    rulesLink = document.getElementsByClassName('rulesLink'),
    optionalLink = document.getElementsByClassName('optionalLink'),
    aboutLink = document.getElementsByClassName('aboutLink');

//Tell the links to toggle the active section

for (var i=0; i < videoLink.length; i++) {
  videoLink[i].onclick = function(){
    var activeSection = document.querySelector('.active');
    if (videoSection.classList.contains("active") === false) {
      activeSection.classList.toggle("active");
      videoSection.classList.toggle("active");
    } else {void(0);};};};

for (var i=0; i < rulesLink.length; i++) {
  rulesLink[i].onclick = function(){
    var activeSection = document.querySelector('.active');
    if (rulesSection.classList.contains("active") === false) {
      activeSection.classList.toggle("active");
      rulesSection.classList.toggle("active");
    } else {void(0);};};};

for (var i=0; i < optionalLink.length; i++) {
  optionalLink[i].onclick = function(){
    var activeSection = document.querySelector('.active');
    if (optionalSection.classList.contains("active") === false) {
      activeSection.classList.toggle("active");
      optionalSection.classList.toggle("active");
    } else {void(0);};};};

for (var i=0; i < aboutLink.length; i++) {
  aboutLink[i].onclick = function(){
    var activeSection = document.querySelector('.active');
    if (aboutSection.classList.contains("active") === false) {
      activeSection.classList.toggle("active");
      aboutSection.classList.toggle("active");
    } else {void(0);};};};
