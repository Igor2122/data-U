// BASIC STRUCTURE
    // will use an ify
// (()=> {
//     // declare private var and funct here - we can't access outside the module

//     return {
//         // Declare public var and functions

//     }
// })();

// STANDARD MODULE PATTERN
/*
const uiCtrl = ( ()=> {
    // we can't access this private functions from outside
    let text = 'Hello World';

    const changeText = () => {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return {
        callChangeText: () => {
            changeText();
            console.log(text);
        }
    }
})();

uiCtrl.callChangeText();
// uiCtrl.changeText(); // will throw an error as the fucntion is private 
*/

// REVEALING MODULE PATTERN

