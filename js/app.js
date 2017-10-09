//PLAN - Whack a "mole" -Whack-a-ball / whack a Raider!
//Basic game: 10sec, start/reset buttons, display, counter, scoreboard
//Additional 1: faster level(s)
//Additional 2: multiple moles appearing

//Sunday - review class notes/homeworks for logic required for basic game of 2x2, ideally get the basic working by afternoon Monday
//Monday eve - expand
//Tuesday - Additional 1 / 2 time allowing & update READ.ME / start presentation info
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

//Initalise DOM
//SET GLOBAL VARIABLES
let $li = null;
// let $interval = null;
// let $timeContainer = null;

let interval = null;
let counter = 0;
let startSomething;



// let $score = null;
// let $timer = null;



// console.log($li);
// STEP 1: Return a random li
// Return a random number from 0 to array of li length
function setup() {
  $li = $('li');
  startGame();

}

function pickRandomLi() {
  // console.log($li);
  const li = $li[Math.floor(Math.random()*$li.length)];
  console.log(li);
  showMole(li);
}

//STEP 2:
//To each random li selected --> display a mole - color first - visual (and audio later) - complete by adding a class
//Add a click to the selected "mole"
//Remove mole class after 1500
//One click to ensure events do not accumulate

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
function killMole() {
  $(this).removeClass('mole');
}

//STEP 4:
//Restart from STEP 1 - i.e. setInterval for certain number of loops
//Add click event to start button at DOM initilisation

//add interval to start game,
//then add increment


function startGame() {
  pickRandomLi();
  startSomething = setInterval(callFunction, 2000);
}

//INTERVAL LOOP - recall later for speed
// let counter = 0;

//set interval to be 1000 between random li function

function callFunction() {
  counter ++;
  console.log(counter);
  checkValue();
}

//Number of times to run interval before clearing
function checkValue() {
  if ( counter >= 3 ) {
    clearInterval(startSomething);
  }
}








// function incrementScore() {
// }

//
//If above work then add in click event for HIT and hide plus increment score
//function countdown
//function gameover
//function reset
//


//ADDITIONAL 1/2
//Faster levels - change counter and loop counter
//Multiple random moles appearing


//STYLING - visual & audio
//Grey / White / Red / Black only --> find a standard color mix palette for all work
//Sports based - softball
