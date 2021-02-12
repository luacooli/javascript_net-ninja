// timestamps

const before = new Date("Feb 1 2021 06:30:41");
const now2 = new Date();

// console.log(now2.getTime(), before.getTime());

const diff = now2.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);

console.log(`the blog was written ${days}days ago`);

// converting timestamp into date objects
const timestamp = 951564515;
console.log(new Date(timestamp))
