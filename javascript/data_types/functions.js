function average(number1, number2) {
    // Returns the average of two values.
    return (number1 + number2) / 2;
};

const average_result = average(13.5, 19.7);
console.log(average_result);


function solveQuadratic(a, b, c) {
    // Solves a quadratic equation and finds the value of x.
    result = (-b + (b**2 - 4 * a * c) ** 0.5) / 2 * a;
    console.log("First solution: " + result);

    result2 = (-b - (b**2 - 4 * a * c) ** 0.5) / 2 * a;
    console.log("Second solution: " + result2);
    return 
};

solveQuadratic(1, 0, -5);
