
// 1
console.log(3 == '3'); // '3' is converted into number 3 first.
console.log(3 === '3'); // false because string is not a number (strict operators check for types)
// always try to use strict operators to enhance type safety and avoid bugs
// = is the assignment operator. Would result in an error because 3 is not a variable that we can assign a value

// 2
const bool = true;
let res = !bool ? true : false;
console.log(res);

// 3
// let a = undefined;  // result === 'b'
// let a = null;       // result === 'b'
// let a = false;      // result === 'b'
// let a = NaN;        // result === 'b'
let b = 'b';
let c = 'c';

// let result = undefined || null || NaN || false || 'hello'; // result === 'hello'
let result = undefined || null || 'hello' || NaN || false; // result === 'hello'
console.log(result);

// cant really comment this because I havent really understood
// but js will return the first value that is not undefined, NaN, false or null,
// so it will return 'Stacy' ;-)

