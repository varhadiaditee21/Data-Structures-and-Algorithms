// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

var defangIPaddr = function(address) {
    
    var addressArr=address.split('')
    for(let i=0;i<addressArr.length;i++){
        if(addressArr[i]==='.'){
            addressArr.splice(i,1,'[.]')
        }
    }
    return (addressArr.join(''))
    
};