const palindromes = function (str) {
    str = str.toLowerCase();
    let revStr = '';
    let orgStr = '';
    for(let i = str.length - 1; i >= 0; i--) {
        if ((str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) || 
        (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)){
            revStr += str[i];
        }
    }
    for(let i = 0;i < str.length;i++){
        if ((str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) || 
        (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)){
            orgStr += str[i];
        }
    }
    return (revStr==orgStr);
};

// Do not edit below this line
module.exports = palindromes;
