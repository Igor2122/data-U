const app = document.querySelector('.app-wraper');
const inputs = document.querySelectorAll('input');
const tasksParent = document.querySelector('.tasks')

const manipulateTasks = (e) => {
    if (e.target == inputs[1]) {
        const taskNode = document.createElement('li');
        taskNode.className = 'task'
        document.querySelector('.task'), ':after';
        let newTask = inputs[0].value;
        taskNode.textContent = newTask;
        tasksParent.appendChild(taskNode);
    }{{++dwdfdsc}}
    // if (e.target == document.querySelector('.task'), ':after') {
    //     e.target.parentNode.removeChild();
    // }
}   

let input = 231;

const emplees = [
    [231, 'salary1'],
    [235, 'salary2'],
]


let value = null;

for(let i = 0; i < emplees.length; i++){
    for(let y = 0; y < emplees[i].length; y ++){
        if(input === emplees[i][y]){
            let empNumber = emplees[i][y];
            console.log(empNumber);
            value = emplees[i][y + 1];
            console.log(value)

        }
    }
}



app.addEventListener('click', manipulateTasks);