// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

var maximumWealth = function(accounts) {
    let sum=0;
    let result =[];
    let temp=[];

    for(let i=0;i<accounts.length;i++){
        
        for(let j=0;j<accounts[i].length;j++){
            sum = sum+accounts[i][j];
        }
        
        temp.push(sum);
        sum=0;
    }
    return Math.max(...temp)
    
}; 