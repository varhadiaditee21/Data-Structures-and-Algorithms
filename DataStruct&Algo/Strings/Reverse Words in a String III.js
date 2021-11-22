// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

var reverseWords = function(s) {
    
    
    let arr = s.split(' ');
    let res =[];
    
    for(let i of arr){
        i = i.split('').reverse().join('');
        res.push(i)
    }
    
    s = res.join(' ')
    return s

    
};