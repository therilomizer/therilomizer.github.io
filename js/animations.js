// Declare animations in DOM

var spadeFan = document.getElementById('spade_fan'),
    heartFan = document.getElementById('heart_fan'),
    clubFan = document.getElementById('club_fan'),
    diamondFan = document.getElementById('diamond_fan'),
    cardRipple = document.getElementById('card_ripple');

// Initialize animation functions

var spadeFanAnim = bodymovin.loadAnimation({
  container: spadeFan, // Required
  path: 'js/spadeFan.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: false, // Optional
  rendererSettings: {preserveAspectRatio: 'xMaxYMax slice' ,}
});
var heartFanAnim = bodymovin.loadAnimation({
  container: heartFan, // Required
  path: 'js/heartFan.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: false, // Optional
  rendererSettings: {preserveAspectRatio: 'xMaxYMax slice' ,}
});
var clubFanAnim = bodymovin.loadAnimation({
  container: clubFan, // Required
  path: 'js/clubFan.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: false, // Optional
  rendererSettings: {preserveAspectRatio: 'xMaxYMax slice' ,}
});
var diamondFanAnim = bodymovin.loadAnimation({
  container: diamondFan, // Required
  path: 'js/diamondFan.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: false, // Optional
  rendererSettings: {preserveAspectRatio: 'xMaxYMax slice' ,}
});
var cardRippleAnim = bodymovin.loadAnimation({
  container: cardRipple, // Required
  path: 'js/cardRipple.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: false, // Optional
  rendererSettings: {preserveAspectRatio: 'xMaxYMax slice' ,}
});

// Initialize animation playback styles

function playForward(animName) {
  animName.setDirection(1);
  animName.setSpeed(1.3);
  animName.play();
}

function playBackward(animName) {
  animName.setDirection(-1);
  animName.setSpeed(2);
  animName.play();
}

// Describe animation event listeners

spadeFan.addEventListener("mouseenter", function(){playForward(spadeFanAnim)});
spadeFan.addEventListener("mouseleave", function(){playBackward(spadeFanAnim)});
heartFan.addEventListener("mouseenter", function(){playForward(heartFanAnim)});
heartFan.addEventListener("mouseleave", function(){playBackward(heartFanAnim)});
clubFan.addEventListener("mouseenter", function(){playForward(clubFanAnim)});
clubFan.addEventListener("mouseleave", function(){playBackward(clubFanAnim)});
diamondFan.addEventListener("mouseenter", function(){playForward(diamondFanAnim)});
diamondFan.addEventListener("mouseleave", function(){playBackward(diamondFanAnim)});

cardRipple.addEventListener("mouseenter", function(){cardRippleAnim.goToAndPlay(0)});
