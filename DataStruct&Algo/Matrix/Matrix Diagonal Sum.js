// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

var diagonalSum = function(mat) {
    
    let sum = 0;
    let n = mat.length;
    
    for (let i = 0; i < n; i++) {
        sum += mat[i][i]+mat[i][n-i-1];
        
    }
    
    if (n % 2 !== 0) {
        sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
    }
    return sum;
    

    
};