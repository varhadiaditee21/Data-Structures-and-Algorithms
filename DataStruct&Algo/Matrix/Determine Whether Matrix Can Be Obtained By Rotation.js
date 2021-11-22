// Given two n x n binary matrices mat and target, return true if it is possible to make mat equal to target by rotating mat in 90-degree increments, or false otherwise.
var findRotation = function(mat, target) {
    for(let i = 0; i < 4; i ++) {
      if(checkEqual(mat, target)) return true
      rotate(mat)
    }
    return false
  }
  
  function checkEqual(mat, target) {
    //Simply compare the array values
    for(let i = 0; i < mat.length; i++) {
      for(let j=0; j < mat[i].length; j ++) {
        if(mat[i][j] !== target[i][j]) return false
      }
    }
    return true
  }
  
  
  function rotate(matrix) {
    // Swap diagonally from top left to bottom right
    for(let i = 0; i < matrix.length; i++) {
      for(let j = i; j < matrix.length; j ++) {
        const temp = matrix[i][j]
        matrix[i][j] = matrix[j][i]
        matrix[j][i] = temp
      }
    }
    // Inverse array positions to get proper rotation value
    for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix.length /2; j ++) {
        const temp = matrix[i][j]
        matrix[i][j] = matrix[i][matrix.length - (1+ j)]
        matrix[i][matrix.length - (1+ j)] = temp
      }
    }
  }