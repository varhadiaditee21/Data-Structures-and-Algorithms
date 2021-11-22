// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

var numIdenticalPairs = function(nums) {
    
    //taking array input
    var map1 = new Map();
    let output = 0;
    
    if(nums.length<2){
        return 0;
    }    
    //using for loop
    for(let i of nums){
        if(map1.has(i)){
           var temp = map1.get(i);
            temp = temp + 1;
            map1.set(i, temp)
        } 
        else{
            map1.set(i, 1);
        }
    }
    
    let myArray = map1.values();
    console.log(map1)
    
    for(let i of myArray){
        if(i>1){
            output = output + Math.floor((i*(i-1)/2));
        }
    }
    return output;
};