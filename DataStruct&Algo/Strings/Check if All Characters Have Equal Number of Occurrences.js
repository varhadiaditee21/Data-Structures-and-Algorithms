// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

var areOccurrencesEqual = function(s) {
    
    if(s.length<1){
        return -1;
    }
    
    let map1 = new Map();
    
    for(let i of s){
        if(map1.get(i)){
            map1.set(i,map1.get(i)+1)
        }else{
            map1.set(i,1)
        }
    }
    
    let numValue = [...map1.values()];
    
   const allEqual = arr => arr.every( v => v === arr[0] );
    if(allEqual(numValue)){
        return true;
    }else{
        return false;
    }
   
};