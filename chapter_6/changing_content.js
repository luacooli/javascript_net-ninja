const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'ninjas are awesome!';

const paras3 = document.querySelectorAll('p');

// paras3.forEach(para => {
//   console.log(para.innerText);
//   para.innerText += ' new text';
// })

const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML += '<h2> this is a new h2 </h2>'

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
});
