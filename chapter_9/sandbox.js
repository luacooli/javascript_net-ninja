// filter method

const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter(score => {
//   return score > 20;
// })

// console.log(scores);
// console.log(filteredScores);

const users = [
  { name: "shaun", premium: true },
  { name: "yoshi", premium: false },
  { name: "mario", premium: false },
  { name: "chun-li", premium: true },
];

const premiumUsers = users.filter((user) => user.premium);

console.log(premiumUsers);

// map method

const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map(prices => prices / 2);

// console.log(salePrices);

const products = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shells", price: 50 },
];

const saleProducts = products.map((product) => {
  if (product.price > 30) {
    return { name: product.price, price: product.price / 2 };
  } else {
    return product;
  }
});

console.log(products, saleProducts);
