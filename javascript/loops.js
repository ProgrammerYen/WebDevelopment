function showRange(range) {
    let index = 0
    while (index < range) {
        console.log(index + 1);
        index ++;
    }   
};

showRange(13);

function showLetters(string) {
    console.log()
    for (let index=0; index < string.length; index ++) {
        newline = ""
        if (index != string.length - 1) {
            newline = "\n"
        }
        console.log(string[index] + newline)
    }
    return
};

showLetters("testing");

function showArray(array) {
    console.log()
    for (let index=0; index < array.length; index ++) {
        console.log(array[index])
    }
    return;
};

showArray([1,5,7,4,2,1])

function arrayMultiplier(array, value) {
    for (let i=0; i < array.length; i++) {
        array[i] *= value;
    }
    console.log(array);

    let index = 0
    while (index < array.length) {
        array[index] *= value;
        index ++;
    }
    console.log(array);
    return;
}

arrayMultiplier([1,2,4], 3)