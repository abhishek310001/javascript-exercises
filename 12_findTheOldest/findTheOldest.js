const findTheOldest = function(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].yearOfDeath == undefined){
            age = 2023 - arr[i].yearOfBirth
        }
        else {
            age = arr[i].yearOfDeath - arr[i].yearOfBirth;
        }
        if (age > max){
            max = age;
            ind = i;
        }
    }
    return arr[ind];
};

// Do not edit below this line
module.exports = findTheOldest;
