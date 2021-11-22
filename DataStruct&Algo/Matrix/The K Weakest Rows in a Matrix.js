// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

var kWeakestRows = function(mat, k) {
    
    let count=0;
    let rowCount = []
    let arr=[];
    for(let i=0;i<mat.length;i++){
        rowCount = [];
        for(let j=0;j<mat[i].length;j++){
            // console.log(mat[i][j]);
            if(mat[i][j]===1){
                count = count + 1;
            }
        }
        rowCount.push(i)
        rowCount.push(count)
        count =0;
        arr.push(rowCount)
    }
    // arr.push(rowCount)
    console.log(arr)
    
    arr = arr.sort((a,b)=>a[1]-b[1])
    console.log(arr)
    let res=[]
    for(let n=0;n<k;n++){
        for(let m=0;m<1;m++){
            console.log(arr[n][m])
           res.push(arr[n][m])
            
        } 
        
    }
    console.log(res)
    return res
};