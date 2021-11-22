// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

var countConsistentStrings = function(allowed, words) {

    let chr;
    let count=0;
    let str = new Set(allowed.split(""))
    
    for(chr of words){
        if(chr.split("").every((s) => str.has(s))){
            count++
        }
    }
    return count;
        
};