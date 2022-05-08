// Boolean values are either true or false
console.log(true);
console.log(false);

// ! - not operator
console.log(!false); // true
console.log(!true); // false
console.log(!!!true); // false
console.log(!!false); // false
console.log(!!!!!!!false);  // true

// & - and operator
console.log(true && false); // false
console.log(true && true); // true
console.log(false && false); // false

// || - or operator
console.log(true || false); // true
console.log(false || false); // false
console.log(true || true); // true

// Combination of boolean operations
console.log(!((true && false) || true)); // false
console.log(!!((true || false) && true)); // true

/* 
! --> && --> ||
! has precedence over &&.
&& has precedence over ||
*/

console.log(false && false || true) // true
console.log(true || !false && true); // true