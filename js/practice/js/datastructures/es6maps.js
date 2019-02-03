// Maps = key-value pairs we can use any type as a key or a value

const map1 = new Map();

// Set some keys 
const key1 = 'some string',
      key2 = {},
      key3 = ()=> {};

//   Set map values by key
map1.set(key1, 'value of key 1');
map1.set(key2, 'value of key 2');
map1.set(key3, 'value of key 3');

// Get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count the values inside of the map
// console.log(map1.size);

// ITERATING THROUGH MAPS 
    // loop with for .. of to get keys and values
for(let [key, value] of map1 ){
    // console.log(`${key} = ${value}`);
}
    // get the keys only 
    for (let key of map1.keys()) {
        // console.log(key);
    }
    
    // get values only 
    for(let value of map1.values()){
        // console.log(value)
    }

    //  we can also use foreach
    map1.forEach( (value, key)=> {
        // console.log(`${key} = ${value}`);
    })

// CONVERT SET TO ARRAY   

    // create an array of key value pairs 
const keyValArr = Array.from(map1);
// console.log(keyValArr);

    // create an array value  
const valArr = Array.from(map1.values());
// console.log(keyValArr);


    // create an array keys  
const keysArr = Array.from(map1.keys());
console.log(keyValArr);
