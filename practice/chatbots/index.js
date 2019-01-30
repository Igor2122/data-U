const sampleRobot = new Robot();
const chatBoxParent = document.querySelector('.chatbox');
const listOfAllCreatedRobots = []

for (let robot of conversation) {
    robot = new Robot(robot.side, robot.name, robot.text);
    listOfAllCreatedRobots.push(robot);
    // robot.mount(chatBoxParent);
}

document.addEventListener('keyup', e => {
    sampleRobot.mountKeyPress(chatBoxParent, listOfAllCreatedRobots)
})

console.log(listOfAllCreatedRobots);