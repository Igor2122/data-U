class BadBoys {
    constructor(name, posX, posY){
        this.name = name;
        this.background = 'url("./img/robot.png")';
        this.position = {
            x: posX,
            y: posY
        }
        
    }

    render() {
        this.element = document.createElement('div');
        this.element.className = 'pac bad-boy';
        this.element.style.background = this.background;
        this.element.innerHTML = `${this.name}: ${this.score}`

        this.update();
        return this.element;
    }

    mount(parent) {
        parent.appendChild(this.render());
        this.update();
    }


    update() {

        this.element.style.top = this.position.y * grid_size + 'px';
        this.element.style.left = this.position.x * grid_size + 'px';

    }
}