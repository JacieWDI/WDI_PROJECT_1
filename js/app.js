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
// let $timer = null;

// console.log($li);
// STEP 1: Return a random li
// Return a random number from 0 to array of li length
function setup() {
  $li = $('li');
  pickRandomLi();
}

function pickRandomLi() {
  const li = $li[Math.floor(Math.random()*$li.length)];
  console.log(li);
  showMole(li);
}

//STEP 2:
//To each random li selected --> display a mole - color first - visual (and audio later) - complete by adding a class
//Add a click to the selected "mole"

function showMole(li) {
  const mole = $(li).addClass('mole');
  $(li).one('click', killMole);

  setTimeout(function() {
    $(li).removeClass('mole');
    $(li).off('click');
  }, 2500);
}

//STEP 3:
//Remove mole if clicked and generally after 1000
function killMole() {
  $(this).removeClass('mole');


  // $li.on('click', () => {
  // //console.log('clicked');
  // if (true) {
  //   const hit = $(mole).removeClass('mole');
  //   killMole(hit);
  //   console.log(hit);
  // }else {
  // }
  // });
  //timeOut();
}




//STEP 4:
//Loop
//Add click event to start button at DOM initilisation

//If above work then add in click event for HIT and hide plus increment score

//STEP 5:
//If Else condition/statement for HIT --> knockout / to hide visually and increment score or
//else NOT HIT --> disappear ()
//__________________________________________
//EXPANSION OF BOARD
//___________________________________________

//ADDITIONAL 1/2
//Faster levels - change counter and loop counter
//Multiple random moles appearing


//STYLING - visual & audio
//Grey / White / Red / Black only --> find a standard color mix palette for all work
//Sports based - softball
