//PLAN - Whack a "mole" -Whack-a-ball / whack a Raider!
//Basic game: 10sec, start/reset buttons, display, counter, scoreboard
//Additional 1: faster level(s)
//Additional 2: two player mode player 1 first switch to player 2, compare --> winner

//Sunday - review class notes/homeworks for logic required for basic game of 2x2, ideally get the basic working by lunchtime Monday
//Monday PM - expand
//Tuesday - Additional 1 / 2 time allowing & update READ.ME / start presentation info
//Wednesday PM - Start visual & styling - graphics and sounds
//Thursday - Complete Visual & styling
//Friday - Present

//PSEUDOCODE
//BASIC GAME:
//Start basic mechanics to work on 2x2 grid then expand

//Step 1:
//HTML 2x2 grid first - 4 lis
//Minimal CSS styling to see layout - float left

//Start --> add click event to each li
//Trigger COUNTER &
//Trigger RANDOM display of 'moles'(squares) - "random li pick" for interval -->TIMEOUT
// let counter = 1;

$(() => {
  const $lis = $('li');
  console.log($lis);
  // for (var i = 0; i < $lis.length; i++) {
  $lis.on('click', () => {
    console.log('clicked');
  });
});
//Step 2:
//Click events attached to each random display mole - visual (and audio later)

//Step 3:
//Remove class and click after 1000

//Step 4:
//Loop

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
