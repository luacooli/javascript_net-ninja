const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
  e.preventDefault();

  // console.log(username.value);
  console.log(form.username.value);
});

// testing RegEx

const username = 'shaunp';
const pattern = /^[a-z]{6,}/;


// let result = pattern.test(username);
// console.log(result);

// if (result) {
//   console.log('regex test passed :)');
// } else {
//   console.log('regex test failed :(');
// }

let result = username.search(pattern);
console.log(result);