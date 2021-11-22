// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it in the maximum amount of balanced strings.

// Return the maximum amount of split balanced strings.

var balancedStringSplit = function(s) {
    
    let r = 0;
    let l = 0;
    let res=0;
    
    for(let i=0;i<s.length;i++){
        if(s[i]=='R'){
            r = r+1;
        }
        if(s[i]=='L'){
            l = l+1;
        }
        if(r==l){
            res = res+1
        }
    }
    return res;
  
};