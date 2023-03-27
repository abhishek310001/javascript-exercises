const repeatString = function(str,repeatition) {
    if (repeatition < 0) {
        return 'ERROR';
    }
    let result = '';
    for (let i = 0; i < repeatition; i++) {
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
