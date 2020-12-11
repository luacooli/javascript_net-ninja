// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes2 = 30;

// concatenation way

// let result4 = 'The blog called ' + title + ' by' + author + ' has ' + likes2 + ' likes';
// console.log(result4);

// template string way
let result4 = `The blog called ${title} by ${author} has ${likes2} likes`;
console.log(result4);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes </span>
`;

console.log(html);