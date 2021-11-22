// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

var reverseString = function(s) {    
    reverse(s, 0, s.length - 1);
};

function reverse(s, beginIndex, endIndex) {    
    if (beginIndex >= endIndex) {
        return;
    }
    
    const first = s[beginIndex];
    const last = s[endIndex];
    s[beginIndex] = last;
    s[endIndex] = first;
    reverse(s, beginIndex + 1, endIndex - 1);    
}