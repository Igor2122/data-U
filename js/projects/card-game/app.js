const row = document.createElement('div');
row.className = 'row-js';

const parent = document.querySelector('.row-wraper');
let color = 0;
background = ['https://images.pexels.com/photos/1366901/pexels-photo-1366901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1589866/pexels-photo-1589866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1806766/pexels-photo-1806766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1707821/pexels-photo-1707821.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500']

const id = ['one', 'two', 'three', 'four'];

for (let i = 0; i < 4; i++) {
    const row = document.createElement('div');
    row.className = 'row-js';

    let counter = 1;

    for (let i = 0; i < 4; i++) {
        const light = document.createElement('div');
        const image = document.createElement('img');
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.setAttribute('style', 'position: absolute; width: 100%; height: 100%; background: black;');
        light.style.background =
            image.src = background[i];
        image.setAttribute('style', 'width: 100%;');
        // light.appendChild(image);
        light.appendChild(overlay);

        light.className = 'light-js';
        light.id = id[Math.floor(Math.random() * 4)];
        // light.style.background = background[Math.floor(Math.random() * 4)];
        row.appendChild(light);


        counter++;
    }


    parent.appendChild(row);
}
const playerOne = [];
const playerTwo = [];
parent.addEventListener('click', (e) => {

    console.log(e.target.parentElement.firstChild.style.opacity = '0')
    e.target.parentElement.firstChild.style.opacity = '0'
    if (playerOne.length < 2) {
        playerOne.push(e.target.parentElement.id);
        setTimeout(function () {
            document.querySelectorAll('.')
        }, 3000);
        if (playerOne[0] === playerOne[1]) {
            alert('You Won');
            
        }
    } else {
        playerTwo.push(e.target.parentElement.id);
        if (playerTwo[0] === playerTwo[1]) {
            alert('You Won');
        }
    }

    console.log(playerOne);
    console.log(playerTwo);
})

document.querySelector('.reload').addEventListener('click', () => {
    location.reload();
})