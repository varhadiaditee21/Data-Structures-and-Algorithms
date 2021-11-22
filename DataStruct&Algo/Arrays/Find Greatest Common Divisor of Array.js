// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

var findGCD = function(nums) {
    
    let small=Math.min(...nums)
    let large=Math.max(...nums)
    
    let i=small 
    while(large%i!==0||small%i!==0){ // until it divides both the numbers keep on reducing it
        i-=1
    }
    return i;    
};