// select the start Game Button
document.querySelector(".control-button span").onclick = function () {
    // Prompt window to ask for name
    let yourName = prompt("whats your Name");
    // if name is empty
    if(yourName == null || yourName == '') {
        // Set Name To Unknown
        document.querySelector('.name span').innerHTML = "unknown";

        // Name is not Empty
    } else {
 
        // set name yo your name
        document.querySelector('.name span').innerHTML = yourName;
    }

    // Remove Splash Screen
    document.querySelector('.control-button').remove();
    document.getElementById('start-game').play();

};
// Efect duration
let durathion = 1000;
// select blocks container
let blocksContainer = document.querySelector('.memory-game');
// creat array from game blocks
let blocks = Array.from(blocksContainer.children);

// creat range of keys
 let orderRange = [...Array(blocks.length).keys()]; // ... = ==> extract
// let orderRange = Array.from(Array(blocks.length).keys());
//console.log(orderRange);
shuffle(orderRange);
//console.log(orderRange);


// open card 1 sec and close all card again
/*
var secound = 100,
    countDiv = document.getElementsByClassName('timer'),
    secoundPass,
    countDown = setInterval(function () {
        "use strict";

        secoundPass();
    }, 1000);

   function secoundPass() {
       "use strict";

    var minutes = Math.floor(secound / 60),
        remSecounds = secound % 6S0;

   countDiv.innerHTML = minutes + ":" + remSecounds;
   }

*/

// add order css property to game blocks  // loop

blocks.forEach((block, index) =>  {
    block.style.order = orderRange[index];

    // add click event
    block.addEventListener('click', function () {

        // trigger flip function
        flipBlock(block);
    });

});

// flip block Function 

function flipBlock(slectedBlock) {
    // Add class is flipped
    slectedBlock.classList.add('is-flipped');

    //collect all flipped cards
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    // if theres tow selected blocks

    if (allFlippedBlocks.length === 2) {

       // console.log('tow flipped selected')

       //Stop Clicking Function
       StopClicking();
       // Check Mathed Block Function

       checkhMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }
}

function StopClicking(){
    // Add Class No Clicking on Main container 

    blocksContainer.classList.add('not-clicking');

    setTimeout(() => {

      //  remove class no clicking after durathion

       blocksContainer.classList.remove('not-clicking');


    }, durathion);
}


// check Matched Block
function checkhMatchedBlocks(firstBlock, secondBlock) {
 
    let triesElement = document.querySelector('.tries span');

    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');


        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');

        document.getElementById('success').play();


    } else {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) +1;

       setTimeout(() => {
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
       }, durathion);

       document.getElementById('fail').play();

    }
}

// Shuffle Function
function shuffle(array) {

    // Settings Vars
    let current = array.length,
        temp,
        random;
  
    while (current > 0) {
  
      // Get Random Number
      random = Math.floor(Math.random() * current);
  
      // Decrease Length By One
      current--;
  
      // [1] Save Current Element in Stash
      temp = array[current];
  
      // [2] Current Element = Random Element
      array[current] = array[random];
  
      // [3] Random Element = Get Element From Stash
      array[random] = temp;
  
    }
  
    return array;
  
  }

/*
// suffle function 

function shuffle(array) {

    //setting vars

    let current = array.lenght;
    let temp;   // ==> stach
    let random;

while (current > 0) {

    // get Random Number
    random = Math.floor(Math.random() * current);

    // Decrease Length by one
    current--;

    // [1] save curent element in stash
    temp = array[current];

    // curent elemnt = random element
    array[current] = array[random];

    // random element = get element from stach

    array[random] = temp;
}  
    return array;
}
*/