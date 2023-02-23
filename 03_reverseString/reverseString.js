const reverseString = function(word) {
    //let arr = word.split(" ");
    let reversedWord = "";
    for (i=word.length; i >= 0; i--) {
        reversedWord += word.charAt(i);
    }
    return reversedWord
};

// Do not edit below this line
module.exports = reverseString;
