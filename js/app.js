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
let currentLevel = 1;
let score = 0;
let flash = 2500;
let space = 3000;

function setup() {
  $li = $('li');
  $go = $('.go');
  $timer = $('.timer');
  $score = $('.score');
  $replay = $('.replay');
  $message = $('.message');
  $currentLevel = $('.currentLevel');
  $('.go').on('click', startGame);
}

function pickRandomLi() {
  const li = $li[Math.floor(Math.random()*$li.length)];
  showMole(li);
}

function showMole(li) {
  const mole = $(li).addClass('mole');
  $(li).one('click', killMole);

  setTimeout(function() {
    $(li).removeClass('mole');
    $(li).off('click');
  }, flash);
}

function killMole() {
  $(this).removeClass('mole');
  incrementScore();
}

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

    levelUp();
  }
}

function updateScorevalue() {
  if (score>=0) $score.html(score);
}

const levels = {1: 5, 2: 10, 3: 15, 4: 20, 5: 25
};

function levelUp() {
  if(score === levels[currentLevel]) {
    currentLevel++;
    clearInterval(interval);
    flash = flash-500;
    space = space-500;
    interval = setInterval(startTimer, space);

    $currentLevel.html(currentLevel);
  }
}

function playAgain() {
  $replay.on('click', playAgain);
  score = 0;
  count = 30;
  currentLevel = 1;

  $score.html(score);
  $timer.html(count);
  $currentLevel.html(currentLevel);
  $message.html('PLAY BALL!');
}
