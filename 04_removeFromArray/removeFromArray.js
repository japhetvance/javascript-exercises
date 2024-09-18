const removeFromArray = function(arr, val) {
    
    arr = arr.filter(item => item !== val);

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
