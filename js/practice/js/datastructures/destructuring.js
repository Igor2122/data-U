const cars = {
    myCars: {
        car1: 'Volvo',
        car2: 'Saab',
        car3: 'BMW',
        car4: 'Porsche'
    },
    myHouses: {
        h1: 'Buffalo',
        h2: 'Dundee',
        h3: 'Palatine'
    }
}

const mycars = document.querySelector('.mycars');

let {myCars, ...houses} = cars;
for(let i in houses) {
    console.log(houses[i], typeof(houses[i]));
}

console.log(houses);
for (let i in myCars) {
    const car = document.createElement('li');
    if (myCars[i] === 'Saab') {
        // console.log(myCars[i]);
        car.textContent = myCars[i];
        mycars.appendChild(car);
    }
}

// DESCTRUCTURING 

let a, b;
[a, b] = [100, 200];
// Rest pattern
let c, d; 
[c, d, ...drop] = [100, 200, 300, 400, 500];
// console.log('​d', d)
// console.log('​c, d, ...drop',  drop)

({a, b, ...rest} = {a:100, b: 200, c:300, d:400, e:500});
console.log('​rest', rest)
for(let i in rest) {
    console.log(parseInt(rest[i] + '150') + 3773);
}

// Array Destructuring 
const ppl = ['Igor', 'Reem', 'Archie'];

const [person1, person2, person3] = ppl;
// console.log('​person1, person2, person3', person1, person2, person3)

// Parse Array returned from function 
const getPpl = () => {
    return ['Igor', 'Reem', 'Archie'];
}

let prsn1, prsn2, prsn3;
[prsn1, prsn2, prsn3] = getPpl();
// console.log('​prsn1, prsn2, prsn3', prsn1, prsn2, prsn3)

// Object Desctructuring


const person = {
    name: 'Igor', 
    age: 32,
    city: 'Prague', 
    gender: 'male',
    sayHello: () => {
        console.log('hello from nested object function');
    }
}

// old ES5 way 
/*
const name = person.name;
      age = person.age;
      city = person.city;
      gender = person.gender;
*/
// New ES6 desctucturing
const {name, age, city, gender, sayHello } = person
console.log('​name, age, city, gender', name, age, city, gender, sayHello);
sayHello();

