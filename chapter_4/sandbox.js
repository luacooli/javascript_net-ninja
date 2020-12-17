// function expression
const speak = function() {
    console.log('good day!');
};

greet();
greet();
greet();

// speak();
// speak();
// speak();

// function declaration
function greet() {
    console.log('hello there');
}

// arguments & parameters

// const speak = function(name = 'luigi', time = 'night') {
//     console.log(`good ${time} ${name}`);
// };

// speak();
// speak('mario', 'morning');

// returning values

const calcArea = function(radius) {
    return 3.14 * radius**2;
}

const area = calcArea(5);
console.log(area);

const calcVol = function(area, height) {
    return area * height;
}


const volume = calcVol(area, 8);
