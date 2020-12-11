// booleans & comparisions
console.log(true, false, "true", "false");

// methods can return booleans
let email2 = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

// let result6 = email2.includes('@');
// let result6 = names.includes('luigi');

// console.log(result6);

// comparison operators

let age3 = 25;

// console.log(age3 == 25);
// console.log(age3 == 30);
// console.log(age3 != 30);
// console.log(age3 > 20);
// console.log(age3 < 20);
// console.log(age3 <= 25);
// console.log(age3 >= 25);

let name2 = 'shaun';

console.log(name2 == 'shaun');
console.log(name2 == 'Shaun'); // false
console.log(name2 == 'crystal'); // 's' is greater than 'c'
console.log(name2 > 'Shaun') // lowercase is greater the uppercase letters in javascript
console.log(name2 > 'Crystal');


/* loose comparison - diferent types can still be equal */

let age4 = 25;

console.log(age4 == 25);
console.log(age4 == '25');
console.log(age4 != 25);
console.log(age4 != '25');

/* strict comparison - different types cannot be equal */

console.log(age4 === '25');
console.log(age4 === '25');
console.log(age4 !== '25');
console.log(age4 !== '25');
