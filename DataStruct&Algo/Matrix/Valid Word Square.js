// Given an array of strings words, return true if it forms a valid word square.

// A sequence of strings forms a valid word square if the kth row and column read the same string, where 0 <= k < max(numRows, numColumns).

var validWordSquare = function(words) {
     
    let len = words.length;
  for(let i = 0; i < len; i++) {
    let wordLen = words[i].length;
    for(let j = 0; j < wordLen; j++) {
      if(!words[j] || words[i][j] !== words[j][i]) return false; //jth word doesn't exist in the list OR characters don't match
    }
  }
  return true;
   
}; 