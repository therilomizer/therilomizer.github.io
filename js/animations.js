// Fill variables with animation targets in DOM

const spadeFan = document.getElementById('spade_fan'),
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
  rendererSettings: {preserveAspectRatio: 'xMidYMid slice' ,}});

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

const topOuter = "<img id=\"oppoIllus\" src=\"images/oppoIllustration/lowerRes/oppoIllustration_00009.png\" alt=\"The line of opposition and example opposed cards.\" />",
      midOuter = "<img id=\"oppoIllus\" src=\"images/oppoIllustration/lowerRes/oppoIllustration_00008.png\" alt=\"The line of opposition and example opposed cards.\" />",
      bottomOuter = "<img id=\"oppoIllus\" src=\"images/oppoIllustration/lowerRes/oppoIllustration_00007.png\" alt=\"The line of opposition and example opposed cards.\" />",
      topMiddle = "<img id=\"oppoIllus\" src=\"images/oppoIllustration/lowerRes/oppoIllustration_00006.png\" alt=\"The line of opposition and example opposed cards.\" />",
      midMiddle = "<img id=\"oppoIllus\" src=\"images/oppoIllustration/lowerRes/oppoIllustration_00005.png\" alt=\"The line of opposition and example opposed cards.\" />",
      bottomMiddle = "<img id=\"oppoIllus\" src=\"images/oppoIllustration/lowerRes/oppoIllustration_00004.png\" alt=\"The line of opposition and example opposed cards.\" />",
      topInner = "<img id=\"oppoIllus\" src=\"images/oppoIllustration/lowerRes/oppoIllustration_00003.png\" alt=\"The line of opposition and example opposed cards.\" />",
      midInner = "<img id=\"oppoIllus\" src=\"images/oppoIllustration/lowerRes/oppoIllustration_00002.png\" alt=\"The line of opposition and example opposed cards.\" />",
      bottomInner = "<img id=\"oppoIllus\" src=\"images/oppoIllustration/lowerRes/oppoIllustration_00001.png\" alt=\"The line of opposition and example opposed cards.\" />",
      defaultImage = "<img id=\"oppoIllus\" src=\"images/oppoIllustration/lowerRes/oppoIllustration_00000.png\" alt=\"The line of opposition and example opposed cards.\" />";

//When mouseover on the oppoIllustration
const oppoIllusDiv = document.getElementById("oppoIllusDiv"),
      oppoIllus = document.getElementById("oppoIllus");
var x = 0, y = 0;
var width = oppoIllus.width, height = oppoIllus.height, twoSixths = 2*(height/6),
    threeSixths = 3*(height/6), fourSixths = 4*(height/6), fiveSixths = 5*(height/6),
    oneSeventh = (width/7), twoSevenths = 2*(width/7), threeSevenths = 3*(width/7),
    fourSevenths = 4*(width/7), fiveSevenths = 5*(width/7), sixSevenths = 6*(width/7);
function mouseLocator(x, y) {
  if (y >= twoSixths && y <= fiveSixths && x <= threeSevenths) {
    if (x <= oneSeventh) {
      if (y <= threeSixths && oppoIllusDiv.innerHTML != topOuter) {
        oppoIllusDiv.innerHTML = topOuter;
      } else if (y >= threeSixths && y <= fourSixths && oppoIllusDiv.innerHTML != midOuter) {
        oppoIllusDiv.innerHTML = midOuter;
      } else if (y >= fourSixths && oppoIllusDiv.innerHTML != bottomOuter) {
        oppoIllusDiv.innerHTML = bottomOuter;
      }
    } else if (x >= oneSeventh && x <= twoSevenths) {
      if (y <= threeSixths && oppoIllusDiv.innerHTML != topMiddle) {
        oppoIllusDiv.innerHTML = topMiddle;
      } else if (y >= threeSixths && y <= fourSixths && oppoIllusDiv.innerHTML != midMiddle) {
        oppoIllusDiv.innerHTML = midMiddle;
      } else if (y >= fourSixths && oppoIllusDiv.innerHTML != bottomMiddle) {
        oppoIllusDiv.innerHTML = bottomMiddle;
      }
    } else if (x >= twoSevenths) {
      if (y <= threeSixths && oppoIllusDiv.innerHTML != topInner) {
        oppoIllusDiv.innerHTML = topInner;
      } else if (y >= threeSixths && y <= fourSixths && oppoIllusDiv.innerHTML != midInner) {
        oppoIllusDiv.innerHTML = midInner;
      } else if (y >= fourSixths && oppoIllusDiv.innerHTML != bottomInner) {
        oppoIllusDiv.innerHTML = bottomInner;
      }
    }
  } else if (y >= twoSixths && y <= fiveSixths && x >= fourSevenths) {
    if (x >= sixSevenths) {
      if (y <= threeSixths && oppoIllusDiv.innerHTML != topOuter) {
        oppoIllusDiv.innerHTML = topOuter;
      } else if (y >= threeSixths && y <= fourSixths && oppoIllusDiv.innerHTML != midOuter) {
        oppoIllusDiv.innerHTML = midOuter;
      } else if (y >= fourSixths && oppoIllusDiv.innerHTML != bottomOuter) {
        oppoIllusDiv.innerHTML = bottomOuter;
      }
    } else if (x <= sixSevenths && x >= fiveSevenths) {
      if (y <= threeSixths && oppoIllusDiv.innerHTML != topMiddle) {
        oppoIllusDiv.innerHTML = topMiddle;
      } else if (y >= threeSixths && y <= fourSixths && oppoIllusDiv.innerHTML != midMiddle) {
        oppoIllusDiv.innerHTML = midMiddle;
      } else if (y >= fourSixths && oppoIllusDiv.innerHTML != bottomMiddle) {
        oppoIllusDiv.innerHTML = bottomMiddle;
      }
    } else if (x <= fiveSevenths) {
      if (y <= threeSixths && oppoIllusDiv.innerHTML != topInner) {
        oppoIllusDiv.innerHTML = topInner;
      } else if (y >= threeSixths && y <= fourSixths && oppoIllusDiv.innerHTML != midInner) {
        oppoIllusDiv.innerHTML = midInner;
      } else if (y >= fourSixths && oppoIllusDiv.innerHTML != bottomInner) {
        oppoIllusDiv.innerHTML = bottomInner;
      }
    }
  } else if (oppoIllusDiv.innerHTML != defaultImage) {
        oppoIllusDiv.innerHTML = defaultImage;
      }
}
oppoIllusDiv.addEventListener("mousemove", function(event){
  mouseLocator(event.offsetX, event.offsetY);
});
//Get mouseX offset & mouseY offset
//If offsets fall in certain percentages of the rendered divs
//Switch the illustration to show the result of where the mouse position is
