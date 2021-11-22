// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

var arrayStringsAreEqual = function(word1, word2) {
    
    if(word1<0 && word2<0){
        return -1;
    }
    
    let str1 = word1.join('');
    let str2 = word2.join('');
    
    if(str1==str2){
        return true;
    }else{
        return false;
    }
    
};