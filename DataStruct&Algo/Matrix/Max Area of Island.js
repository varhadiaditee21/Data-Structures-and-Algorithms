// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.


var maxAreaOfIsland = function(grid) {
    let ySize = grid.length;
    let xSize = grid[0].length;
    let maxArea = 0;
    
    for (let y = 0; y < ySize; y++) {
        for (let x = 0; x < xSize; x++) {
            if (grid[y][x] === 1) {
                maxArea = Math.max(maxArea, foo(y, x));
            }
        }
    }
        
    function foo (y, x) {
        if (grid[y][x] !== 1) return 0;
        grid[y][x] = 2;
        let wave = [[y-1,x], [y+1,x], [y,x-1], [y,x+1]];
        wave = wave.filter(i => i[0]>=0 && i[0]<ySize && i[1]>=0 && i[1]<xSize);
        wave = wave.filter(i => grid[i[0]][i[1]] === 1);        
        return 1 + wave.reduce((a,i) => a + foo(i[0], i[1]), 0);
    }
    
    return maxArea;
};
