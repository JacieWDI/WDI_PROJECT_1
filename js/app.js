//PLAN - Whack a "mole" -Whack-a-ball / whack a Raider!
//Basic game: 10sec, start/reset buttons, display, counter, scoreboard
//Additional 1: faster level(s)
//Additional 2: multiple moles appearing

//Sunday - review class notes/homeworks for logic required for basic game of 2x2, ideally get the basic working
//Monday - start coding
//Tuesday - finish basic logic
//Wednesday AM - any additional logic / levels
//Wednesday PM - Start visual & styling - graphics and sounds
//Thursday - Complete Visual & styling
//Friday - Present

//PSEUDOCODE
//BASIC GAME:
//Start basic mechanics to work on 2x2 grid then expand

//Step 1:
//HTML 3x3 grid first - 4 lis
//Minimal CSS styling to see layout - float left

//Start
//Trigger COUNTER &
//Trigger RANDOM display of 'moles'(squares) - "random li pick" for interval -->TIMEOUT
// let counter = 1;
//$randomLi = $('.li');

$(setup);

//VARIABLES
let $li = null;
let interval = null;
let $timer = null;
let $score = null;

let count = 20;
let score = 0;

//works but interval not in place now!!



function setup() {
  $li = $('li');
  $go = $('.go');
  $timer = $('.timer');
  $score = $('.score');

  $('.go').on('click', startGame);
}

// STEP 1:
function pickRandomLi() {
  // console.log($li);
  const li = $li[Math.floor(Math.random()*$li.length)];
  console.log(li);
  showMole(li);
}

//STEP 2:

function showMole(li) {
  const mole = $(li).addClass('mole');
  $(li).one('click', killMole);

  setTimeout(function() {
    $(li).removeClass('mole');
    $(li).off('click');
  }, 1500);
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
  interval = setInterval(startTimer, 1000);
}

function startTimer() {
  count --;
  $timer.html(count);

  if (count<= 0) {
    clearInterval(interval);
  }
  pickRandomLi();
}

function incrementScore() {
  if (killMole === true) {
    score++;
    updateScorevalue();
  } else {
    score;
    updateScorevalue;
  }

}

function updateScorevalue() {
  if (score>=0) $score.val(score);
}




//Function - reset
//function gameover


//ADDITIONAL 1/2
//Faster levels - change counter and loop counter
//Multiple random moles appearing


//STYLING - visual & audio
//Grey / White / Red / Black only --> find a standard color mix palette for all work
//Sports based - softball
