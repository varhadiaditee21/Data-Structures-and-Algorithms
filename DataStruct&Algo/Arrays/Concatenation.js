// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.
// Solution:-

var getConcatenation = function(nums) {
    let ans = [];
    let m = 0;
    while(ans.length !== 2*nums.length) {
        if(m < nums.length) {
            ans.push(nums[m]);
            m++;
        } else {
            m = 0;
        }
    }
    return ans;
};