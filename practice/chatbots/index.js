document.addEventListener('DOMContentLoaded', e => {
    const sampleRobot = new Robot();
    const chatBoxParent = document.querySelector('.chatbox');
    const listOfAllCreatedRobots = []

    const animGif = document.createElement('img');
    animGif.src = './img/200w.webp';
    animGif.setAttribute('style', 'width: 40%; margin: auto');
    chatBoxParent.appendChild(animGif);



    for (let robot of conversation) {
        robot = new Robot(robot.side, robot.name, robot.text);
        listOfAllCreatedRobots.push(robot);
        // robot.mount(chatBoxParent);
    }

    document.addEventListener('keyup', e => {
        sampleRobot.mountKeyPress(chatBoxParent, listOfAllCreatedRobots)
        if(!animGif){
            sampleRobot.removeLoaderGif(chatBoxParent, animGif);
        }
    });

})