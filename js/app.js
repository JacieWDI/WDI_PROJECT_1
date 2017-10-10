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

const $timer = $('.timer');
const $go = $('.go');
let count = 20;

function setup() {
  $li = $('li');

  $go.on('click', startGame);
}

// STEP 1: Return a random li
// Return a random number from 0 to array of li length
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
//Call increment score function within here
function killMole() {
  $(this).removeClass('mole');
}

//STEP 4:
//Restart from STEP 1 - i.e. setInterval for certain number of loops
//Add click event to start button at DOM initilisation

//add interval to start game,
//then add increment




//INTERVAL LOOP - call random function for loop

//set interval to be 1000 between random li function
//Start game function added to group functions to run on set-up

//Function - countdown timer, to start on Go button click



function startGame() {
  startInterval = setInterval(startTimer, 1000);
}

// function interval() {
//   counter ++;
//   console.log(counter);
//   checkValue();
//call random li function to run loop
// pickRandomLi();

//Number of times to run interval before clearing
// function checkValue() {
//   if (counter >= 10 ) {
//     clearInterval(startInterval);
//   }
// }

function startTimer() {
  count --;
  $timer.html(count);

  if (timer<= 0) {
    clearInterval(interval);
  }

  pickRandomLi();
}


// const startCountDown = setInterval(runThis, 1000);


// function runThis() {
//   counter2 --;
//   console.log(counter2);
//   checkTimerValue();
//   $timer.html(counter2);
// }
// function checkTimerValue(){
//   if (counter2 <= 0){
//     clearInterval(startCountDown);
//   }
// }




//Function - reset


// function incrementScore() {
// }



//function gameover


//ADDITIONAL 1/2
//Faster levels - change counter and loop counter
//Multiple random moles appearing


//STYLING - visual & audio
//Grey / White / Red / Black only --> find a standard color mix palette for all work
//Sports based - softball
