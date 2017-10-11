//EXPANSION TO BASIC GAME: multiple moles appearing
//Additional 2: faster level(s)

//Wed PM - WORK OUT HOW TO DIVIDE LEVELS AND TIMING
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
// let $advanced;

//FOR ADDING GAMETIME AND SPEED LEVELS LATER - change to let

let flash = 2500;
let space = 3000;

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

//GAMETIME AND SPEED LEVELS

  // $advanced = $('.advanced');
}


//SPEED AND GAMETIME LEVEL
//1. Faster level - change counter and loop counter

//ADVANCED LEVEL
// $('.advanced').on('click'); {
//   console.log('advanced');
//   if(this);
//   advancedGame();
//   } else if(this) = false; {
//   normalGame();
// }
//
// function normal() {
// let flash = 2500;
// let space = 3000;
// }
//
// function advancedGame() {
//   flash = 1500;
//   space = 2000;
// }

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
//STEP 2: GENERATING "MOLE" AT RANDOM LI
function showMole(li) {
  const mole = $(li).addClass('mole');
  $(li).one('click', killMole);

  //BASIC GAME LOGIC
  setTimeout(function() {
    $(li).removeClass('mole');
    $(li).off('click');
  }, 1000);
}
//TRY STARTING TIMEOUT AND INTERVAL VALUES AS VARIABLES FOR MORE DIFFICULT LEVELS
//   setTimeout(function() {
//     $(li).removeClass('mole');
//     $(li).off('click');
//   }, flash);
// }

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
  // $message.html('HOME RUN!');
}

function updateScorevalue() {
  if (score>=0) $score.html(score);
}

//PLAY AGAIN RESET
function playAgain() {
  $replay.on('click', playAgain);
  console.log('REPLAY');
  score = 0;
  count = 20;

  $score.html(score);
  $timer.html(count);
  $message.html('PLAY BALL!');
}



//STYLING - VISUAL AND AUDIO - THURS
//Grey / White / Red / Black only --> find a standard color mix palette for all work
//Sports based - softball
