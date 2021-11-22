// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

var transpose = function(matrix) {
    
    let temp1=[];
    let col=[];
    
    for(let i=0;i<matrix[0].length;i++){
        col=[];
        for(let j=0;j<matrix.length;j++){
            col.push(matrix[j][i]);    
        }
        temp1.push(col)
    }
    return temp1
    
};