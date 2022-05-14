function logBetweenStepper(min, max, step) {
    while (min < max + 1) {
        console.log(min);
        min += step;
    }
};

logBetweenStepper(3, 21, 3);