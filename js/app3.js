$(setup);

//VARIABLES
let $li = null;
let interval = null;
let $timer = null;
let $score = null;
let $replay;
let $message = null;

//FOR ADDING GAMETIME AND SPEED LEVELS LATER - change to let

let flash = 2000;
let space = 2500;

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
}

//LEVEL-UP - FASTER SPEED EVERY 15 HITS
//1. Faster level - change counter and loop counter



//GENERATING RANDOM NUMBER OF MOLES (up to 10)
function pickRandomLi() {
  //PICKING ONE RANDOM MOLE
  // const li = $li[Math.floor(Math.random()*$li.length)];
  // console.log(li);
  // showMole(li);

  //FROM SAME SIZE ARRAY AS LIS
  let newCounter = 0;
  const possibleIndex = [];
  for (var i = 0; i < 25; i++) {
    possibleIndex.push(i);
    newCounter++;
  }

  const randomNoMoles = Math.floor(Math.random()*10+1);

  for (var j= 0; j < randomNoMoles; j++) {
    const chosenIndex = Math.floor(Math.random()*possibleIndex.length);
    const li = $li[chosenIndex];
    possibleIndex.splice(chosenIndex,1);

    showMole(li);
  }
}

//STEP 2: GENERATING "MOLE" AT RANDOM LI(S)
function showMole(li) {
  console.log(interval)
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
  if(killMole)
    score++;
  updateScorevalue();
  console.log('SCORE');
}

function updateScorevalue() {
  if (score>=0) $score.html(score);
}

//PLAY AGAIN - RESET
function playAgain() {
  $replay.on('click', playAgain);
  console.log('REPLAY');
  score = 0;
  count = 20;

  $score.html(score);
  $timer.html(count);
  $message.html('PLAY BALL!');
}
