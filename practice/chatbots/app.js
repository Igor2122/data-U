const chatBox = document.querySelector('.chatbox');



const createElement = (val) => {
    let chat = document.createElement('li');
    chat.innerHTML = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <div class="align-self-end">
        <img class="w-25 img" src="./img/${val.name.toLowerCase()}.png" alt="local" >
            <span class="badge badge-primary badge-pill">${val.text}</span>
        </div>
    </li>
    `
    chatBox.appendChild(chat);
    
}
for (let i of conversation) {
        createElement(i);
}
document.addEventListener('DOMContentLoaded', () => {
    
    let allImages = document.querySelectorAll('.img');
    console.log(allImages);
    for(let img of allImages){
        img.addEventListener('click', () => {
            alert('don\'t click on my head ');
        })
    }
})