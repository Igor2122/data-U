const chatBox = document.querySelector('.chatbox');
for (let i of conversation) {
    
    if (i.side === 'local') {
        let chat = document.createElement('li');
        chat.innerHTML = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <img class="w-25" src="./img/cleverbot.png" alt="local" srcset="">
        <span class="badge badge-primary badge-pill">${i.text}</span>
    </li>
        `
        chatBox.appendChild(chat);
    } 
     if (i.side === 'remote') {
        let chat2 = document.createElement('li');
        chat2.innerHTML = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="badge badge-primary badge-pill">${i.text}</span>
            <img class="w-25" src="./img/unicorn.png" alt="" srcset="">
        </li>
        `
        chatBox.appendChild(chat2);
    }
}