const stuff = [1,2,3,4,5,6,7,8];


let myMap = new Map();
for(let i = 0; i < stuff.length; i ++) {
    myMap.set(i, stuff[i]);
}

console.log(myMap);

for(var [key, val] of myMap){
    console.log(`${key}: ${val}`);
}
