// There is a special keyboard with all keys in a single row.

// Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25). Initially, your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i - j|.

// You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.

var calculateTime = function(keyboard, word) {
    
    let total =0;
    let start=0;
    
    for(let i of word){
        let destination = keyboard.indexOf(i);
        total = Math.abs(destination - start) + total;
        start = destination;
    }
    return total;
};