// dates & times
const now = new Date();

console.log(now);
console.log(typeof now);

// year
console.log('getFullYear:', now.getFullYear());

// month
console.log('getMonth:', now.getMonth());

// day
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());

// times
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

// timestamp
console.log('timestamp:', now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());