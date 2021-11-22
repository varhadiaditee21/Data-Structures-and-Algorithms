// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

var luckyNumbers  = function(matrix) {
    
    let row =[];
    let temp1= [];
    let minArrRow = [];
    
    let col=[];
    let temp2=[]
    let maxArrCol = [];
    
    let max = 0;
    let min = 0;
    
    let res = [];
   for(let i=0;i<matrix.length;i++){
       row = [];
       for(let j=0;j<matrix[i].length;j++){
            row.push(matrix[i][j]);
           min = Math.min.apply(Math,row);
       }      
       temp1.push(row);
       minArrRow.push(min);
   }
    
    for(let i=0;i<matrix[0].length;i++){
       col = [];
       for(let j=0;j<matrix.length;j++){
            col.push(matrix[j][i]); 
           max = Math.max.apply(Math,col);
       }      
       temp2.push(col);
        maxArrCol.push(max);
   }
    
    for(let l=0; l<minArrRow.length ;l++){
        for(let k=0;k<maxArrCol.length;k++){
            if(minArrRow[l] == maxArrCol[k]){
                res.push(minArrRow[l])
            }
        }
    }
    console.log(res)
    return res
    
};