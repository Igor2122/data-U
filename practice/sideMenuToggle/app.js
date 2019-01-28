document.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('.menu');
    const h2 = document.querySelector('h2');


    document.querySelector('.burger-logo').addEventListener('click', ()=> {
        const aside = document.querySelector('aside');
        aside.classList.toggle('animated');
        if(aside.className === 'animated') {
            console.log('animated');
            menu.style.opacity = 1;
            h2.style.opacity = 1;
            
        } else {
            menu.style.opacity = 0;
            h2.style.opacity = 0;
        }
    })
})