let links = document.links;
let linksss = document.querySelectorAll('a');

console.log(linksss, typeof (linksss));

console.log(typeof (links));

for (let i of links) {
    console.log(i);
    i.src = 'https://google.com';
}

let form = document.forms.contact;
console.log(form);

if (form.method === 'get') {
    console.log(form.method);
}

console.log( form.length)

console.log( form.elements);

let iputs = form.elements.serach;
console.log(iputs);