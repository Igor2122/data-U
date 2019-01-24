// ITERATORS:
/*
const nameInterator = (names) => {
    let nextIndex = 0;

    return {
        next: () => {
            return nextIndex < names.length ?
            { value: names[nextIndex], done: false } : {done: true}
        }
    }
}

// create array of names 
const namesArray = ['Igor', 'Reem', 'Archi', 'Myle'];
// initialize iterator and pass names array
const  names = nameInterator(namesArray);

console.log(names.next().value);
*/

// GENERATORS:
/*
function* sayNames() {
    yield 'Jack';
    yield 'Jill';
    yield 'John';
}

const name = sayNames();
console.log(name.next().value);
console.log(name.next());
console.log(name.next());
console.log(name.next());
*/

// GENERATE ID'S
/*
function* createIds () {
    let index = 1;
    while(true){
        yield index++;
    }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
*/