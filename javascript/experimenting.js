function rangeOfValues(min, max) {
    for (let i = min; i < max + 1; i++) {
        console.log("Number: " + i);
    }
}

rangeOfValues(4, 15);

console.log("\n")

function rangeOfValues2(min, max) {
    while (min < max + 1) {
        console.log("Number: " + min);
        min ++;
    }
}

rangeOfValues(8,19);
console.log();

function rollerCoaster(age, height) {
    if (age < 12) {
        console.log("I'm sorry but you are too young to ride the rollercoaster");
    } else {
        if (height < 150) {
            console.log("I'm sorry but you are too short to ride this rollercoaster");
        } else if (height <= 190) {
            console.log("Get ready to ride the rollercoaster!");
        } else {
            console.log("I'm sorry but you are too tall to ride this rollercoaster");
        }
    }
}

rollerCoaster(14,156);