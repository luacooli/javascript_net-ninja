// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function() {
        console.log('the user logged in');
    },
    logout: function() {
        console.log('the user logged out');
    },
    logBlogs: function() {
        
    }
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

console.log(user['email']);
user['name'] = 'chun-li';

const key = 'location';
console.log(user[key]);

console.log(typeof user);

user.login();
user.logout();

const aaaa = 'mario';
aaaa.toUpperCase();

console.log(aaaa)
