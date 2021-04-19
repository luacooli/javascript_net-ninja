class User {
  constructor(username, email) {
    // set up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

class Adimin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }

  deleteUser(user) {
    users = users.filter((u) => u.username !== user.username);
  }
}

const userOne = new User("mario", "mario@thenetninja.co.uk");
const userTwo = new User("luigi", "luigi@thenetninja.co.uk");
const userThree = new Adimin("shaun", "shaun@thenetninja.co.uk");

console.log(userThree);

// console.log(userOne, userTwo, userThree);
// userOne.login().incScore().incScore().incScore().logout();

// let users = [userOne, userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);
