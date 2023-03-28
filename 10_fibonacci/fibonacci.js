const fibonacci = function(n) {
    if (n<0){
        return "OOPS"
    }
    let a = 1,b = 1;
    let s = 0;
    if (n==1 || n==2){
        return 1;
    }
    for (let i = 3; i <= n; i++){
        s = a + b;
        a = b;
        b = s;
    }
    return s;
};

// Do not edit below this line
module.exports = fibonacci;
