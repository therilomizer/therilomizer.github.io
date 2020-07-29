// Fill variables with animation targets in DOM

var spadeFan = {name:"spadeFan", target:document.getElementById('spade_fan')},
    heartFan = {name:"heartFan", target:document.getElementById('heart_fan'),
    clubFan = {name:"clubFan", target:document.getElementById('club_fan'),
    diamondFan = {name:"diamondFan", target:document.getElementById('diamond_fan'),
    cardRipple = document.getElementById('card_ripple');

var str1 = "js/",
    str2 = ".json";



// Initialize animation functions

function animInitLoader(targetName){
  bodymovin.loadAnimation({
    container: targetName.target,
    path: 'js/' + targetName.name + '.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    rendererSettings: {preserveAspectRatio: 'xMidYMid slice' ,}})};

var spadeFanAnim = animInitLoader(spadeFan);

/*
var spadeFanAnim = bodymovin.loadAnimation({
  container: spadeFan, // Required
  path: 'js/spadeFan.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: false, // Optional
  rendererSettings: {preserveAspectRatio: 'xMidYMid slice' ,}});
*/

var heartFanAnim = bodymovin.loadAnimation({
  container: heartFan, // Required
  path: 'js/heartFan.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: false, // Optional
  rendererSettings: {preserveAspectRatio: 'xMidYMid slice' ,}});

var clubFanAnim = bodymovin.loadAnimation({
  container: clubFan, // Required
  path: 'js/clubFan.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: false, // Optional
  rendererSettings: {preserveAspectRatio: 'xMidYMid slice' ,}});

var diamondFanAnim = bodymovin.loadAnimation({
  container: diamondFan, // Required
  path: 'js/diamondFan.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: false, // Optional
  rendererSettings: {preserveAspectRatio: 'xMidYMid slice' ,}});

var cardRippleAnim = bodymovin.loadAnimation({
  container: cardRipple, // Required
  path: 'js/cardRipple.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: false, // Optional
  rendererSettings: {preserveAspectRatio: 'xMidYMid slice' ,}});

// Initialize animation playback styles

function playForward(animName) {
  animName.setDirection(1);
  animName.setSpeed(1.3);
  animName.play();}

function playBackward(animName) {
  animName.setDirection(-1);
  animName.setSpeed(2);
  animName.play();}

// Describe animation triggers & playback styles

spadeFan.addEventListener("mouseenter", function(){playForward(spadeFanAnim)});
spadeFan.addEventListener("mouseleave", function(){playBackward(spadeFanAnim)});
heartFan.addEventListener("mouseenter", function(){playForward(heartFanAnim)});
heartFan.addEventListener("mouseleave", function(){playBackward(heartFanAnim)});
clubFan.addEventListener("mouseenter", function(){playForward(clubFanAnim)});
clubFan.addEventListener("mouseleave", function(){playBackward(clubFanAnim)});
diamondFan.addEventListener("mouseenter", function(){playForward(diamondFanAnim)});
diamondFan.addEventListener("mouseleave", function(){playBackward(diamondFanAnim)});

cardRipple.addEventListener("mouseenter", function(){cardRippleAnim.goToAndPlay(0)});
