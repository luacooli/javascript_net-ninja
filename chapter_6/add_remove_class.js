const content = document.querySelectorAll('p');

console.log(content);
// content.classList.add('error');
// content.classList.remove('error');

content.forEach(c => {
  const error = c.innerText.includes('error')
  console.log(error.classList)
})