// const para = document.querySelector('body > h1');

// console.log(para);

const paras = document.querySelectorAll('p');

paras.forEach(para => {
  console.log(para);
});

console.log|(paras[2]);

// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

// get elements by their tag name
const paras2 = document.getElementsByTagName('p');
console.log(paras2);
console.log(paras2[0]);