let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken;
// conosle.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

/* array methods */

// let result5 = ninjas.join('-');
// let result5 = ninjas.indexOf('chun-li');
// let result5 = ninjas.concat(['ken', 'crystal']);
let result5 = ninjas.push('ken');
result5 = ninjas.pop();

console.log(result5);

/* :::: undefined :::: */

let age;

console.log(age, age + 3, `the age is ${age}`); // undefined NaN "the age is undefined"

/* :::: null :::: */

let age2 = null;

console.log(age2, age2 + 3, `the age is ${age2}`); // null 3 "the age is null"