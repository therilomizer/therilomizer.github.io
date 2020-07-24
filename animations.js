var spadeFan = document.getElementById('spade_fan');
var spadeFanAnim = bodymovin.loadAnimation({
  container: spadeFan, // Required
  path: 'spadeFan.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: false, // Optional
  rendererSettings: {preserveAspectRatio: 'xMaxYMax slice' ,}
});
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
var heartFan = document.getElementById('heart_fan');
var heartFanAnim = bodymovin.loadAnimation({
  container: heartFan, // Required
  path: 'heartFan.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: false, // Optional
  rendererSettings: {preserveAspectRatio: 'xMaxYMax slice' ,}
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
var clubFan = document.getElementById('club_fan');
var clubFanAnim = bodymovin.loadAnimation({
  container: clubFan, // Required
  path: 'clubFan.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: false, // Optional
  rendererSettings: {preserveAspectRatio: 'xMaxYMax slice' ,}
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
