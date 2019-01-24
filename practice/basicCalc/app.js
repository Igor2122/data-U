const buttonsDiv = document.querySelector('.calc-buttons');
let calaculatorWindow = document.querySelector('.calc-window');

let inputs = [];
let operator;

const doMath = (e) => {
    
    let inputValue;
    if (e.target.id == 'nun-number') {
        inputValue = e.target.textContent;
        operator = inputValue;
        console.log(inputValue);
    } else if (e.target.id == 'equals') {
        inputValue = e.target.textContent;
    } else {
        inputValue = parseInt(e.target.textContent);
        inputs.push(inputValue);
    }


    console.log(inputs);
    calaculatorWindow.textContent += inputValue;


    const doMathInner = (a, b, c) => {
        let res;

        console.log(typeof (operator));

        switch (c) {
            case  '+':
                res = a + b;
                break;

        }
        switch (c) {
            case  '-':
                res = a - b;
                break;

        }
        switch (c) {
            case  '*':
                res = a * b;
                break;

        }
        switch (c) {
            case  '/':
                res = a / b;
                break;

        }

        return res;
    }

    if (e.target.id == 'equals') {
        let mathRes = doMathInner(parseInt(inputs[0]), parseInt(inputs[1]), operator);

        calaculatorWindow.textContent += mathRes;
    }

    if (e.target.id === 'reset') {
        inputs = [];
        calaculatorWindow.textContent = '';
    }

    

}

buttonsDiv.addEventListener('click', doMath);