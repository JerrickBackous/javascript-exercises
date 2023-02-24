const removeFromArray = function(inputs, ...cutout) {
    //define number of cutout values
    return inputs.filter(x => !cutout.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
