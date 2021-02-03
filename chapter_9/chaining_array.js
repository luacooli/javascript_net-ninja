const products2 = [
  {name: 'gold star', price: 30},
  {name: 'green shell', price: 10},
  {name: 'red shell', price: 40},
  {name: 'banan skin', price: 5},
  {name: 'mushroom', price: 50},
];

// const filtered = products2.filter(product => product.price > 20);

// const promos = filtered.map(product => {
//   return `the ${product.name} is ${product.price / 2} pounds`;
// });

const promos = products2
  .filter(product => product.price > 20)
  .map(product => `the ${product.name} is ${product.price /2} pounds`);

console.log(promos);