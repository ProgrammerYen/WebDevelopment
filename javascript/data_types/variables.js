let x; // Declaring variable x
console.log(x); // Undefined

x = 2022; // Assigning x to 2022
console.log(x); // Displaying x to the console - 2022

x --; // Decreasing x by 1 - 2021
console.log(x); // Displaying x to the console - 2021.

x ++; // Incrementing x by 1 - 2022
console.log(x); // Displaying x to the console - 2022.

x += 8; // Changing x by +8 - 2030
console.log(x); // Displaying x to the console - 2030.

x *= 3; // Multiplying x by 3 - 6090
console.log(x); // Displays x to the console - 6090.

console.log(typeof(x))

let bool = true; // Assigning bool to the boolean value of true
console.log((!bool || false) || (true && !false)); // => true
console.log(typeof(bool)); // bool has a type of boolean

let location = "Wallington"; // Assigning location to my current location
console.log(location);
console.log("First letter:" + location[0]);