const getTheTitles = function(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++){
        res.push(arr[i].title)
    }
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
