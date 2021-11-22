// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

var generateTheString = function(n) {
    
    let s =[];
    
    for(let i=0;i<n;i++){
        s[i] = 'a';
    }
    if(n%2==0){
        s[n-1] = 'b'
    }
    return s
};