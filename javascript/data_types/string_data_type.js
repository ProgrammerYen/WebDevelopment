console.log("Here is a list of valid strings:\n");

// Initialising variables of the primitive data type - string.
let string1 = "Hello";
let string2 = "dealwisyenula@gmail.com";
let string3 = "12345";
let string4 = "Today, I said, 'This is valid' as a phrase to myself.";

// Displaying the variables in the console.
console.log(string1 + "\n" + string2 + "\n" + string3 + "\n" + string4 + "\n");

console.log("Here are the lengths of the strings:\n");

// Displaying the length of the string variables
console.log(string1.length + "\n" + string2.length + "\n" + string3.length + "\n" + string4.length + "\n");

// Displaying each letter of the first string.
console.log("Here is the first string: " + string1 + ".\n" + "Here are its letters");
console.log("Letter 1: " + string1[0]);
console.log("Letter 2: " + string1[1]);
console.log("Letter 3: " + string1[2]);
console.log("Letter 4: " + string1[3]);
console.log("Letter 5: " + string1[4]);

// Index out of range results in undefined.
console.log("\nIs this letter valid: " + string1[5] + "?\n" + "I don't think so.\n");

// indexOf method.
console.log(string4.indexOf("t") + 1); // 44
console.log(string2.indexOf("@") + 1); // 14
console.log("\nThis is an invalid letter that is not in string2: t\nProof? string2.indexOf(\"t\") = " + string2.indexOf("t"));

// Indexing the last letter in a string
console.log("\n" + string3[string3.length - 1]);