//EXPANSION TO BASIC GAME: multiple moles appearing
//Additional 2: faster level(s)

//Wednesday DAY - EXPAND TO ACTUAL GAME
//Wednesday EVE - Start visual & styling - graphics and sounds
//Thursday - Complete Visual & styling

$(setup);

//VARIABLES
let $li = null;
let interval = null;
let $timer = null;
let $score = null;
let $replay;
let $message = null;
// let $easy;

//FOR ADDING SPEED LATER - change to let

const flash = 1500;
const space = 2000;


let count = 20;
let score = 0;

function setup() {
  $li = $('li');
  $go = $('.go');
  $timer = $('.timer');
  $score = $('.score');
  $replay = $('.replay');
  $message = $('.message');
  $('.go').on('click', startGame);

  //Additional 1:
  // $easy = $('.easy');
}

// STEP 1: GENERATING RANDOM LI
function pickRandomLi() {
  const li = $li[Math.floor(Math.random()*$li.length)];
  console.log(li);
  showMole(li);
}

//STEP 2: GENERATING "MOLE" AT RANDOM LI
function showMole(li) {
  const mole = $(li).addClass('mole');
  $(li).one('click', killMole);

  //BASIC GAME LOGIC
  setTimeout(function() {
    $(li).removeClass('mole');
    $(li).off('click');
  }, 1000);

  //TRY STARTING TIMEOUT AND INTERVAL VALUES AS VARIABLES FOR MORE DIFFICULT LEVELS
//   setTimeout(function() {
//     $(li).removeClass('mole');
//     $(li).off('click');
//   }, flash);
}

//STEP 3: KILL "MOLE" - REMOVING CLASS AND INCREMENT SCORE
//Remove mole (and therefore class) if clicked
//Call increment score function within here
function killMole() {
  $(this).removeClass('mole');
  console.log('KILL');
  incrementScore();
}

//STEP 4: START GAME FUNCTION ON GO BUTTON TRIGGERING INTERVAL AND COUNTDOWN TIMER
function startGame() {
  interval = setInterval(startTimer, space);
  playAgain();
}

function startTimer() {
  count --;
  $timer.html(count);

  if (count<= 0) {
    clearInterval(interval);
    $message.html('GAME OVER!');
  }
  pickRandomLi();
}

function incrementScore() {
  if(killMole)
    score++;
  updateScorevalue();
  console.log('SCORE');
  // $message.html('HOME RUN!');
}

function updateScorevalue() {
  if (score>=0) $score.html(score);
}

function playAgain() {
  $replay.on('click', playAgain);
  console.log('REPLAY');
  score = 0;
  count = 20;

  $score.html(score);
  $timer.html(count);
  $message.html('PLAY BALL!');
}

//EXPAND GRID!
//GENNERATING MULTIPLE RANDOM MOLES
//CSS grid layout??
//Random div pick instead of li?
//Grid - define grid tracks not the lines --> numbered lines for positioning
//Use CSS to create grid and then add element to each grid square for random function



//ADDITIONAL LEVELS
//1. Faster levels - change counter and loop counter
// $easy.on('click', easyGame);
// console.log('easy');
//
// function easyGame() {
//   // $easy.on('click', easyGame);
//   // console.log('easy');
//   flash = 2500;
//   space = 3000;
// }

// function normalGame() {
//   $normal.on('click', normalGame);
//   console.log('normal');
//   flash = 1500;
//   space = 2000;
// }
//
// function advancedGame() {
//   $advanced.on('click', advancedGame);
//   console.log('advanced');
//   flash = 1500;
//   space = 2000;
// }

//STYLING - VISUAL AND AUDIO - THURS
//Grey / White / Red / Black only --> find a standard color mix palette for all work
//Sports based - softball
