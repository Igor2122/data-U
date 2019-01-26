// PROPERTIES 
const form = document.forms;
let txt = document.querySelector('.input');

txt.value = 'hello';
txt.defaultValue = 'Hi there';

// console.log('​txt:', 
// txt.name,
// txt.type,
// txt.value,
// txt.form, // link to the parent form
// );

txt.form.reset(); // to reset the form  

// METHODS
txt.focus(); // to put the cursor in forom 
txt.select();

// TEXT AREA - follows all the same properties and methods of the input  
const txtArea = document.getElementById('txt-area');
txtArea.cols = 10;
txtArea.cols = 50;
txtArea.defaultValue = 'Hi am text area';
txtArea.focus();
txtArea.select();

// console.log('​txtArea', 
// txtArea,
// txtArea.cols,
// txtArea.rows
// );

//  LAB 

let formInputs = document.querySelectorAll('.lab-form input');
for (let i of formInputs) {
    if (i.name === 'lastname') {
        i.defaultValue = 'Your Last Name';
        console.log(i.value);
    }
}

formInputs[2].addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < formInputs.length; i++) {
        if (formInputs[i].value === '') {
            console.log(`${i} has no value`);
            formInputs[i].style.border = '1px solid red';
            formInputs[i].value = 'please input this field as it is mandatory'
        }
    }
})

// HTML select form 

