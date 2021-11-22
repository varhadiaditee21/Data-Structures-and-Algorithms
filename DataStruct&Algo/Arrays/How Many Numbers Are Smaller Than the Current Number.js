// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

var smallerNumbersThanCurrent = function(nums) {
    
    let count=0;
    let temp=[];
    for(let i=0; i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                count = count + 1;
            }
            
        }
    
        temp.push(count);
        count =0;
    }
    return temp;
    
};