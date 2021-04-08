class User {
  constructor(username, email) {
    // set up properties
    this.username = username;
    this.email = email;
  }
}

const userOne = new User('mario', 'mario@thenetninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');

console.log(userOne, userTwo);
