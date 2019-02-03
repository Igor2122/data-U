document.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('.menu');
    const h2 = document.querySelector('h2');

    let items = document.querySelectorAll('li');
	console.log('TCL: items', items);

    


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
    });


    const names = ['igor','reem','archie'];

    for(item of items){
        console.log(item);
    }
    
    console.log(names.join(' '));
    let classes = names.join(' ')
    console.log(classes, typeof classes)
    items[0].className = classes;

    const colors = ['red', 'green', 'blue'];
    const menuItems = ['home', 'blog', 'contact'];

    const pageParent = document.querySelector('.layout');
    const menuParent = document.querySelector('.generated-menu');

    for(let i in colors){
        colors[i];
    }


    const addButton = document.querySelector('.addItem');
    addButton.addEventListener('click', () => {
        menuItems.push('new Button');
        
    });

    for(let i = 0; i < menuItems.length; i++){
        const item = document.createElement('li');
        item.textContent = menuItems[i];
        item.classList.add(colors[i]);
        menuParent.appendChild(item);
    }

    const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17]

    for(let num of numbers){
        console.log(num);
    }

    const newMenu = {
        home: 'home.html',
        about: 'about.html',
        projects: 'projects.html'
    }

    for(let i in newMenu) {
        console.log(newMenu[i]);
    }



})

