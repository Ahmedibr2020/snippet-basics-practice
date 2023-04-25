document.querySelector(".control-buttons span").onclick= function() {
    let urName = prompt("What's your name ?");

    // console.log(urName);
    if (urName == null || urName == "") {
        document.querySelector(".name span").innerHTML = 'Unknown';
    } else {
        // Set Username
        document.querySelector(".name span").innerHTML = urName;
        
    }
    // Remove Splash Screen
    document.querySelector(".control-buttons").remove();
}
/* START THE GAME */

let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");
let blocks = Array.from(blocksContainer.children);

/* We used ... "split operator to use the keys directory not the iterator or Index" */
// let orderRange = [...Array(blocks.length).keys()];
// Another Way to get order Range
let orderRange = Array.from(Array(blocks.length).keys());

console.log(orderRange);

shuffle(orderRange);
console.log(orderRange);

let testOrderRange = [5, 15, 23, 6, 9, 8, 1, 4, 2, 7, 29, 3, 21, 26, 17, 14, 22, 10, 12, 21, 13, 16, 24, 25, 18, 20, 19, 0, 28, 27];


/* Add Order Property to Game blocks */
blocks.forEach((block, index) => {
    block.style.order = testOrderRange[index];
});


/* Shuffle Function */

function shuffle(array) {
    // Setting var
    let current = array.length,
        temp,
        random;
    
    while (current > 0) {
        // get random number
        random = Math.floor(Math.random() * current);
        // Decrease length by one
        current--;
        // [1] Save Current Element in Stash
        temp = array[current];
        // [2] Current Element = Random Element
        array[current] = array[random];


        // [3] Random Element = Get Element from Stash
        array[random] = temp;
        console.log(random);
    }
    return array;
    
}
