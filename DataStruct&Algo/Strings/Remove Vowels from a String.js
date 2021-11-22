// Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

var removeVowels = function(s) {
    let vows = ["a", "e", "i", "o", "u"];
      let arrStr = s.split('');
      for (let i = 0; i < vows.length; i++) {
          arrStr = arrStr.filter(char => char !== vows[i]);
      }
      return arrStr.join('');
  };