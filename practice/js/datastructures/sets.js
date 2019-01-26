// SETS store unique values of any type
const set1 = new Set();

// add values to set 
set1.add(100);
set1.add('a string');
set1.add({name: 'john'});
set1.add(true);

// console.log(set1);

// add other way

const set2 = new Set([1, true, {neme: 'igor'}, 'igor', ()=> {console.log('hello there')}]);

// get the count 
// console.log(set1.size);

// check for values 
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has({name: 'john'}));

// DELETE from the set 
// set1.delete(100);
// console.log(set1);

// ITERATE THROUGH SETS
    // for .. of 
for(let item of set1){ // keys & values will returns the same
    console.log(item);
}
    // foreach ..
set1.forEach(value => {console.log(value)});

// CONVERT SET TO ARRAY 
const setArr = Array.from(set1);
console.log(setArr);