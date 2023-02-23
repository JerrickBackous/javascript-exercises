const repeatString = function(word, repeats) {
    if (repeats < 0) {
        return "ERROR";
    } else {
        let statement = "";
        for (i=0; i < repeats; i++) {
            statement += word;
        }
        return statement;
    }
};

// Do not edit below this line
module.exports = repeatString;
