const buttonsDiv = document.querySelector('.calc-buttons');
let calaculatorWindow = document.querySelector('.calc-window');

let inputs = [];
let operator;

const doMath = (e) => {
    let inputValue;
    if (e.target.id == 'nun-number' || e.target.id == 'equals') {
        inputValue = e.target.textContent;
        operator = inputValue;
    } else {
        inputValue = parseInt(e.target.textContent);
        inputs.push(inputValue);
    }


    console.log(inputs);
    // console.log(inputValue, typeof(inputValue));
    calaculatorWindow.textContent += inputValue;

    console.log(operator);

    const doMathInner = (a, b ,operator) => {
        let res;
        console.log(operator);
        switch (operator) {
            case (operator == '+'):
                res = a + b;
                break;
    
        }
         
        return res;
    }

    if(e.target.id == 'equals') {
        let mathRes = doMathInner(parseInt(inputs[0]), parseInt(inputs[1], operator));
        console.log(mathRes);
        calaculatorWindow.textContent += mathRes;
    }

    if(e.target.id === 'reset'){
        inputs = [];
        calaculatorWindow.textContent = '';
    }

}


buttonsDiv.addEventListener('click', doMath);



