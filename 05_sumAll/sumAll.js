const sumAll = function(num1,num2) {
    let l = 0;
    let h = 0;
    if (num1<0 || num2<0 || typeof num1 != 'number' || typeof num2 != 'number') {
        return "ERROR";
    }
    if (num1 < num2) {
        l = num1;
        h = num2;
    }
    else{
        l = num2;
        h = num1;
    }
    let res = 0;
    while (l<=h){
        res += l;
        l += 1;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
