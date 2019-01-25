document.addEventListener('keypress', (event) => {
    console.log(event);
    if(event.key === ' '){
        const cat = document.querySelector('.cat');
        cat.classList.toggle('hide');
    }
})

// play animations of scroll