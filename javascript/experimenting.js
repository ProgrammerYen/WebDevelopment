function displayRange(min, max) {
    // displays a range of values from min value to max value
    for (let i=min; i<max+1; i++) {
        console.log(i);
    }
}
displayRange(4, 10);

function bmiCalculator(height, weight) {
    // calculates the body mass index of a person using the following equation -> bmi = weight (in kg) / height (in m) ^ 2.
    if (height > 2.72) {
        console.log("That is impossible. You cannot be that tall since the tallest person to exist was 2.72 metres.");
    } else {
        console.log("You are a valid candidate.\n");
        let bmi = (weight / height ** 2).toString();
        console.log("Your body mass index is ".concat(bmi));
        if (bmi > 40) {
            console.log("You are in the severely obese range (40 or over)");
        } else if (bmi > 30) {
            console.log("You are in the obese range (30 to 39.9)");
        } else if (bmi > 25) {
            console.log("You are in the overweight range (25 to 29.9)");
        } else if (bmi > 18) {
            console.log("You are in the healthy range (18 to 25)");
        } else if (bmi > 16) {
            console.log("You are in the underweight range (16 to 18)");
        } else if (bmi > 15) {
            console.log("You are in the severely underweight range (15 to 16)");
        } else {
            console.log("You are in the very severely underweight range (15 or below)");
        }
    }

}
bmiCalculator(1.53, 35);