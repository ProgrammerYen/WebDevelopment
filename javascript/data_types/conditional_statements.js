function validHeight(height) {
    // Finds whether one's height is valid to ride a rollercoaster (in metres).
    if (height < 1.3) {
        console.log("I am extremely sorry, however you cannot ride this rollercoaster due to your height being too small.");
    } else if (height <= 2.1) {
        console.log("You good to go, the height is sufficient.");
    } else {
        console.log("I am extremely sorry, however your height is too great in order to ride this rollercoaster.");
    }
    return
};

validHeight(2.11);