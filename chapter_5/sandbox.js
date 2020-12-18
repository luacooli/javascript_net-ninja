// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30}, 
        { title: '10 things to make with marmite', likes: 50 }
    ],
    login: function() {
        console.log('the user logged in');
    },
    logout: function() {
        console.log('the user logged out');
    },
    logBlogs(){
        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });

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

user.logBlogs();
console.log(this);