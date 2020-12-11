// strings
console.log('hello world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

//string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toLocaleUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// common string methods
// let result2 = email.lastIndexOf('n');
// let result2 = email.slice(2, 5);
// let result2 = email.substr(4, 10);
// let result2 = email.replace('m', 'w');
let result2 = email. replace('n', 'w'); // only replace the first one

console.log(result2);

/* ..::: Numbers :::.. */

let radius = 10;
const pi = 3.14;

// math operators +, -, *, /, **, %
// let result3 = radius % 3;
// let result3 = pi * radius**2;

// order of operation

//  let result3 = 5 * (10 - 3)**2;

// console.log(result3);

let likes = 10;

// likes = likes + 1;
// likes++;
// likes--;

// likes += 10;
// likes += 5;
// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number

// console.log(5 / 'hi');
// console.log(5 * 'hi');

let result3 = 'the blog has ' + likes + ' likes';
console.log(result3);
