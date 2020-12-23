const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green;');

const title = document.querySelector('h1');

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
