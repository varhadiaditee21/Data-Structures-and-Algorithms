// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

var halvesAreAlike = function(s) {
    
    let vowels = ["a","e","i","o","u"]
    let countFirst =0;
    let countSecond =0;
    
    let newString = s.toLowerCase();
    
    let half = Math.ceil(newString.length/2)
    
    let firstArray = newString.slice(0,half).split("");
    console.log(firstArray)
    
    let secondArray = newString.slice(-half).split("");
    console.log(secondArray)
    
    for(let i=0;i<firstArray.length;i++){
        if(vowels.includes(firstArray[i])){
            countFirst++
        }
    }
    console.log(countFirst)
    
    for(let j=0;j<secondArray.length;j++){
        if(vowels.includes(secondArray[j])){
            countSecond++;
        }
    }
    console.log(countSecond)
    
    if(countFirst === countSecond){
        return true
    }else{
        return false
    }
    
};