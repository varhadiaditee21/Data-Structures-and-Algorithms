// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

var search = function (grid, r, c) {
    // console.log(r, c, grid[0].length)
    if (r >= grid.length || r < 0 || c >= grid[0].length || c < 0) {
        return false
    }
    if (grid[r][c] === '-') {
        return false
    }
    if (grid[r][c] === '0') {
        return false
    }

    grid[r][c] = '-'
    search(grid, r, c + 1)
    search(grid, r + 1, c)
    search(grid, r - 1, c)
    search(grid, r, c - 1)
    return true

}
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let ans=0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let res = search(grid, i, j)
            if(res){
                ans++
            }
        }
    }
    return ans
};