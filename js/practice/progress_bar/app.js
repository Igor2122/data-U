const progressBar = new ProgressBar ();


const knob = document.getElementById('knob');
console.log('TCL: knob', knob.offsetWidth);
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

plus.addEventListener('click', () => {
    progressBar.incrementProgress(knob);
})

minus.addEventListener('click', () => {
    progressBar.decrementProgress(knob);
})


