//PLAN - Whack a "mole" -Whack-a-ball / whack a Raider!
//Basic game: 10sec, start/reset buttons, display, counter, scoreboard
//Additional 1: faster level(s)
//Additional 2: two player mode player 1 first switch to player 2, compare --> winner

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

  $lis = $('.li');
  // console.log($lis);
  // Return a random li and "appear"
  // Return a random number from 0 to array of li length

  function setup() {
    $randomLi();
    pickRandomLi();
  }

  function pickRandomLi() {
    // for (var i = 0; i < $lis.length; i++) {
      const $randomLi = [Math.floor(Math.random()*10)*($lis.length)];
      return $randomLi.html();
    }
  // return $lis.html[i];
  console.log(pickRandomLi);
});


//Step 2:
//To each random li --> display a mole - visual (and audio later)
//Add a click

//   const $lis = $('li');
//   console.log($lis);
//   $lis.on('click', () => {
//     console.log('clicked');
//   });
// });

//Step 3:
//Remove mole if clicked and generally after 1000

//Step 4:
//Loop
//Add click event to start button at DOM initilisation

//If above work then add in click event for HIT and hide plus increment score

//Step 5:
//If Else condition/statement for HIT --> knockout / to hide visually and increment score or
//else NOT HIT --> disappear ()
//__________________________________________
//EXPANSION OF BOARD
//___________________________________________

//ADDITIONAL 1/2
//Faster levels - change counter and loop counter


//STYLING - visual & audio
//Grey / White / Red / Black only --> find a standard color mix palette for all work
//Sports based - softball
