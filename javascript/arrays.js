function findIndex(array, value) {
    // Finds the index of a given value in a given array.
    console.log(array.indexOf(value));
    return;
};

findIndex(["a", "b", "c"], "b")

function findValue(array, index) {
    // Finds the value at a given index of a given array.
    console.log(array[index]);
};

findValue(["!", "/", "?"], 2)

function showValueEquality(array, value) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i], array[i] === value);
    };
};

showValueEquality([1,5,8,3,7,3,7,1,0,6,2], 2)