const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  // ul.innerHTML += '<li>something new</li>';

  const li = document.createElement("li");
  li.textContent = "something new todo";
  // ul.append(li);
  ul.prepend(li);
});

// const items = document.querySelectorAll("li");

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     // console.log('item clicked');
//     // console.log(e)
//     // console.log(e.target)
//     // console.log(item)

//     // e.target.style.textDecoration = 'line-through';
//     console.log("event li");
//     e.stopPropagation();

//     e.target.remove();
//   });
// });

ul.addEventListener("click", (e) => {
  // console.log('event ul');
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});
