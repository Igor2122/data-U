// 2 ramdon numbers between given values

// const h1 = document.querySelector('h1');

// const randNum = (max, min) => {
//     return Math.round((Math.random() * (max - min + 1) ) + min);
// }

// let maxInput = prompt('Input 2 numbers');
// let minInput = prompt('Input 2 numbers');

// h1.textContent = randNum(maxInput, minInput);

const passWord = document.querySelector('.password');
const passWordSecond = document.querySelector('.password-second');
const passwordField = document.querySelector('.password-field');

const passWordChecker = (val) => {
    if(val.length > 2){
        console.log('passrod alrigh');
        return true;
    }
    else {
        return false;
    }
}

const checkPassword = e => {

    if(e.target.className === 'password-second') {
        let firstTry = passWord.value;
        let res = passWordChecker(firstTry)
        if(res){
            console.log('you are great!');
        } else {
            console.log('you suck');
        }

    }

    if (e.target.className === 'submit') {
        let firstTry = passWord.value;
        let secondTry = passWordSecond.value;
        if (firstTry === secondTry){
            console.log("password match");
        }
        else
            console.log('passwords have to match!');
    }
}

passwordField.addEventListener('click', checkPassword);