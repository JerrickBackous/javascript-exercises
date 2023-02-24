const sumAll = function(numberOne, numberTwo) {
    //assign max and min values
    const big = Math.max(numberOne, numberTwo);
    const small = Math.min(numberOne, numberTwo);
    
    //check for negative values or values with greater than one arg or non-integer
    if ((numberOne < 0 || numberTwo < 0) || 
        (typeof numberOne === "string" || typeof numberTwo === "string") ||
        (numberOne.length >= 1 || numberTwo.length >= 1)) {
            return "ERROR";
        } else {
            //add up values between two numbers
            let sum = 0;
            for (i=small; i<=big; i++) {
                sum += i;
            }
            return sum;
        }

};

// Do not edit below this line
module.exports = sumAll;
