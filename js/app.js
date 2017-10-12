$(setup);

//VARIABLES
let $li = null;
let interval = null;
let $timer = null;
let $score = null;
let $replay;
let $message = null;
let $currentLevel;

let count = 30;
// let score = 0;

function setup() {
  $li = $('li');
  $go = $('.go');
  $timer = $('.timer');
  $score = $('.score');
  $replay = $('.replay');
  $message = $('.message');
  $currentLevel = $('currentLevel');
  $('.go').on('click', startGame);
}

//PICKING ONE RANDOM MOLE
function pickRandomLi() {
  const li = $li[Math.floor(Math.random()*$li.length)];
  showMole(li);
}

//GENERATING "MOLE" AT RANDOM LI(S)
function showMole(li) {
  console.log(interval);
  const mole = $(li).addClass('mole');
  $(li).one('click', killMole);

  setTimeout(function() {
    $(li).removeClass('mole');
    $(li).off('click');
  }, flash);
}

//KILL "MOLE" - REMOVING CLASS AND INCREMENT SCORE
function killMole() {
  $(this).removeClass('mole');
  console.log('KILL');
  incrementScore();
}

//START GAME FUNCTION ON GO BUTTON TRIGGERING INTERVAL AND COUNTDOWN TIMER
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
  if(killMole){
    score++;
    updateScorevalue();
    console.log('SCORE');

    levelUp();
  }
}

function updateScorevalue() {
  if (score>=0) $score.html(score);
}

//LEVELLING UP CODE
const levels = {1: 5, 2: 10, 3: 15, 4: 20, 5: 25
};

//MOVE THESE TO TOP ONCE WORKING
let currentLevel = 1;
let score = 0;
let flash = 2500;
let space = 3000;

function levelUp() {
  if(score === levels[currentLevel]) {
    currentLevel++;
    console.log('LEVEL UP!');
    clearInterval(interval);
    flash = flash-500;
    space = space-500;
    interval = setInterval(startTimer, space);

    $currentLevel.html(currentLevel);//FIX FIX FIX
  }
}

//PLAY AGAIN - RESET
function playAgain() {
  $replay.on('click', playAgain);
  console.log('REPLAY');
  score = 0;
  count = 30;
  currentLevel = 1;

  $score.html(score);
  $timer.html(count);
  $currentLevel.html(currentLevel); //FIX FIX FIX
  $message.html('PLAY BALL!');
}
