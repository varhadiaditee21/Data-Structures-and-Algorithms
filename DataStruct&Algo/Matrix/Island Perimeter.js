// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

var islandPerimeter = function(nums) {
    
    let perimeter = 0
     for (let i = 0; i < nums.length; i++) {
         for (let j = 0; j < nums[i].length; j++) {
             if (nums[i][j] === 1) {
                 let addon = 4
                 if (i > 0 && j > 0) {
                     addon -= (nums[i-1][j] === 1) ? 2 : 0
                     addon -= (nums[i][j-1] === 1) ? 2 : 0
                 } else if (j > 0) {
                     addon -= (nums[i][j-1] === 1) ? 2 : 0
                 } else if (i > 0) {
                     addon -= (nums[i-1][j] === 1) ? 2 : 0
                 }
                 perimeter += addon
             }
         }
     }
 
     return perimeter
     
 };