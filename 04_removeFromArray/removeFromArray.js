const removeFromArray = function() {
    const args = Array.from(arguments);
    arr = args[0];
    for(let i = 1; i < args.length; i++){
        let index = arr.indexOf(args[i]);
        if (index >=0){
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
