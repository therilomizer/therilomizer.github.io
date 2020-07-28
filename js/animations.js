// Declare animations in DOM

var spadeFan = document.getElementById('spade_fan'),
    heartFan = document.getElementById('heart_fan'),
    clubFan = document.getElementById('club_fan'),
    diamondFan = document.getElementById('diamond_fan'),
    cardRipple = document.getElementById('card_ripple'),
    cardFlip = document.querySelector('.card');

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

// Describe animation activation events

spadeFan.addEventListener("mouseenter", function() {
  spadeFanAnim.setDirection(1);
  spadeFanAnim.setSpeed(1);
  spadeFanAnim.play();
});
spadeFan.addEventListener("mouseleave", function() {
  spadeFanAnim.setDirection(-1);
  spadeFanAnim.setSpeed(1.5);
  spadeFanAnim.play();
});
heartFan.addEventListener("mouseenter", function() {
  heartFanAnim.setDirection(1);
  heartFanAnim.setSpeed(1);
  heartFanAnim.play();
});
heartFan.addEventListener("mouseleave", function() {
  heartFanAnim.setDirection(-1);
  heartFanAnim.setSpeed(1.5);
  heartFanAnim.play();
});
clubFan.addEventListener("mouseenter", function() {
  clubFanAnim.setDirection(1);
  clubFanAnim.setSpeed(1);
  clubFanAnim.play();
});
clubFan.addEventListener("mouseleave", function() {
  clubFanAnim.setDirection(-1);
  clubFanAnim.setSpeed(1.5);
  clubFanAnim.play();
});
diamondFan.addEventListener("mouseenter", function() {
  diamondFanAnim.setDirection(1);
  diamondFanAnim.setSpeed(1);
  diamondFanAnim.play();
});
diamondFan.addEventListener("mouseleave", function() {
  diamondFanAnim.setDirection(-1);
  diamondFanAnim.setSpeed(1.5);
  diamondFanAnim.play();
});
cardRipple.addEventListener("mouseenter", function() {
  cardRippleAnim.goToAndPlay(0);
});
cardFlip.addEventListener("click", function() {
  cardFlip.classList.toggle('is-flipped');
});
