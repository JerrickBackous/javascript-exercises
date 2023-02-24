const leapYears = function(year) {
    //calculate if a given year is a leap year
    if (year % 4 === 0 && year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0 ) {
        return true;
    } else {
        return false;
    }
    //return true/false
};

// Do not edit below this line
module.exports = leapYears;
