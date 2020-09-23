
// Setup variables needed by the game

let masterDeck, player1Deck, player2Deck, suit, val, cardX, cardY, gameIsOver, player1CardSlot, win, run, runSpoons, backOfCard, blankCard,
    masterDeckCardSlot, player2CardSlot, player1CardsInPlay, player2CardsInPlay, cardSpriteSheet;

//

let valueDict = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10 : 10,
  "J" : 11,
  "Q" : 12,
  "K" : 13,
  "A" : 14
}

let spriteXCoord = {
  2: 0,
  3: 1,
  4: 2,
  5: 3,
  6: 4,
  7: 5,
  8: 6,
  9: 7,
  10 : 8,
  "J" : 9,
  "Q" : 10,
  "K" : 11,
  "A" : 12,
  "BLANK": 0
} // X coord for spritesheet from card value

let spriteYCoord = {
  "hearts" : 0,
  "diamonds" : 1,
  "clubs" : 2,
  "spades" : 3,
  "BLANK" : 4
} // Y coord for spritesheet from card suit



function setup() {
  // Canvas & color settings
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 100;
  gameIsOver = false;
  run = false;
  runSpoons = false;
  cardSpriteSheet = loadImage("https://cdn.glitch.com/8b31d12d-22e7-4ecb-8cd0-c3cabf0df07a%2FcardSpriteSheet.gif?v=1595887184939");
