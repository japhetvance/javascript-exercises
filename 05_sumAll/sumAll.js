const sumAll = function(firstVal, lastVal) {
    if (typeof firstVal !== 'number' || typeof lastVal !== 'number') {
        return 'ERROR';
    }
    if (firstVal < 0 || lastVal < 0) {
        return 'ERROR';
    }
    if (firstVal > lastVal) {
        let temp = firstVal;
        firstVal = lastVal;
        lastVal = temp;
    }
    let sum = 0;
    for (let i = firstVal; i <= lastVal; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
