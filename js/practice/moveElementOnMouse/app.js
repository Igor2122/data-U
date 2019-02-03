const imgCards = document.querySelectorAll('.children');
const singCard = imgCards[0];

let _x = 0,
    _y = 0,
    x = 0,
    y = 0;


singCard.addEventListener('mousemove', (e)=> {
    let x = e.clientX - Math.floor(singCard.offsetWidth /2);
    
	
    console.log(x);
})




