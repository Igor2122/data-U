const heading = document.querySelector('h2');
const body = document.querySelector('body');
const button = document.querySelector('button');



const changeColor = () => {
    let numOne = Math.floor((Math.random() * 255) + 1);
    let numTwo = Math.floor((Math.random() * 255) + 1);
    let numThree = Math.floor((Math.random() * 255) + 1);
    heading.style.color = `rgb(${numOne}, ${numTwo}, ${numThree})`;
    // body.style.background = `rgb(${(numOne + 1)}, ${(numTwo - 1)}, ${(numThree - 2)})`;
}


button.addEventListener('click', changeColor)