// const robot = new Robot();
const chatBoxParent = document.querySelector('.chatbox');

for (let robot of conversation) {
    robot = new Robot(robot.side, robot.name, robot.text);
    robot.mount(chatBoxParent);
}