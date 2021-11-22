// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.

var sumOddLengthSubarrays = function(arr) {
        
    let count =0;
    
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if((i-j)%2==0){
                for(let k=i;k<=j;k++){
                    count = count + arr[k]
                }
            }
        }
    }
    return count

};