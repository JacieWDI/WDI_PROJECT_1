//PLAN - Whack a "mole" -Whack-a-ball / whack a Raider!
//Basic game: 10sec, start/reset buttons, display, counter, scoreboard
//Additional 1: faster level(s)
//Additional 2: multiple moles appearing
//Additiomal 3: autocreate larger grid

//Sunday - review class notes/homeworks for logic required for basic game of 3x3, ideally get the basic working
//Monday - start coding
//Tuesday - finish basic logic - EXPAND!
//Wednesday AM - any additional logic / levels
//Wednesday PM - Start visual & styling - graphics and sounds
//Thursday - Complete Visual & styling
//Friday - Present

//PSEUDOCODE
//BASIC GAME:
//Start basic mechanics to work on 3x3 grid then expand

//Step 1:
//HTML 3x3 grid first - 9 lis
//Minimal CSS styling to see layout - float left

//Start
//Trigger COUNTER &
//Trigger RANDOM display of 'moles'(squares) - "random li pick" for interval -->TIMEOUT

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

// STEP 1:
function pickRandomLi() {
  const li = $li[Math.floor(Math.random()*$li.length)];
  console.log(li);
  showMole(li);
}

//STEP 2:
function showMole(li) {
  const mole = $(li).addClass('mole');
  $(li).one('click', killMole);

  BASIC GAME LOGIC
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

//STEP 3:
//Remove mole (and therefore class) if clicked
//Call increment score function within here
function killMole() {
  $(this).removeClass('mole');
  console.log('KILL');
  incrementScore();
}

//STEP 4:
//Reorganise - countdown timer, to start on Go button click
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
//CSS grid layout??
//Random div pick instead of li?
//Grid - define grid tracks not the lines --> numbered lines for positioning
//Use CSS to create grid and then add element to each grid square for random function



//ADDITIONAL LEVELS
//1. Multiple random moles appearing (larger grid)
//2. Faster levels - change counter and loop counter
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


//3. Automate larger grid creation for levels



//STYLING - visual & audio
//Grey / White / Red / Black only --> find a standard color mix palette for all work
//Sports based - softball
