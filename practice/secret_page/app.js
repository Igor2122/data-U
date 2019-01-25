

const render = (e) => {


    const content = document.querySelector('.img-div');
    const messageDivPrent = document.querySelector('.message-div');
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message-div-child'
    const mainImage = document.createElement('img');
    mainImage.setAttribute('style', 'width: 40%; margin: 0   auto');
    mainImage.src = './lock.png';
    content.appendChild(mainImage);
    
    messageDiv.setAttribute('style', 'width: 40%; text-align: center; margin-right: auto; color: black');

    messageDiv.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, nesciunt rem. Dolores, ex nostrum? Sequi ipsum expedita magnam iste possimus.'
    
    messageDivPrent.appendChild(messageDiv);

    mainImage.addEventListener('mouseenter', ()=> {
        messageDiv.style.opacity = 1;
    });

    mainImage.addEventListener('mouseleave', ()=> {
        messageDiv.style.opacity = 0;
    })
}


document.addEventListener('DOMContentLoaded', render);