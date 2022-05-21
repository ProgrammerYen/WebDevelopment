function printFives(max) {
    for (let i = 0; i < max; i++) {
        if (i % 5 === 0) {
            console.log(i)
        }
    }
    return;
};

printFives(20);
