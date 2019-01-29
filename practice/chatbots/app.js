document.addEventListener('DOMContentLoaded', () => {


const chatBox = document.querySelector('.chatbox');
const createElement = (val) => {
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
        <img class="w-25 img" src="./img/${val.name.toLowerCase()}.png" alt="local" >
        <span class="badge badge-primary badge-pill">${val.text}</span>
    `
    return li;
    
}
for (let chat of conversation) {
        createElement(chat);
        chatBox.appendChild(createElement(chat));
        
}
    let allImages = document.querySelectorAll('.img');
    for(let img of allImages){
        img.addEventListener('click', () => {
            alert('don\'t click on my head ');
        })
    }
})