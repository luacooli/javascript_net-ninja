// callbacks
// function myFunc(callbackFunc) {
//     let value = 50;
//     callbackFunc(value);
// }

const myFunc = callbackFunc => {
    // do something 
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    // do something
    console.log(value);
});

// forEach
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);
// 1º parametro item - 2º parametro indexador 
// (mostrar amanda)
