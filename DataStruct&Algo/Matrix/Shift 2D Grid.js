// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

// In one shift operation:

// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.

var shiftGrid = function(grid, k) {
    
    let mat= [];
    let temp=[]; 
    let n = grid[0].length;
    let result=[];
    
    for(let i=0;i<grid.length;i++){
        for(let j=0; j<grid[i].length;j++){
            mat.push(grid[i][j]);
        }
    }
    
    for(let i=0;i<k;i++){
        mat.unshift(mat.pop())
    }
    
    while(mat.length){
        result.push(mat.splice(0,n))
    }
    return result;
};