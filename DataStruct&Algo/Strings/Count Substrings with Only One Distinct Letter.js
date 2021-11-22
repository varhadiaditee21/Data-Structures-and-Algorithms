// Given a string s, return the number of substrings that have only one distinct letter.

var countLetters = function(s) {
    
    let ans=0;
    let repeat = 1;
    
    for(let i=0;i<s.length;i++){
        if(s[i] !== s[i+1]){
            ans = ans + repeat *(repeat+1)/2;
            repeat =0;
        }
        repeat ++
    }
    return ans
};