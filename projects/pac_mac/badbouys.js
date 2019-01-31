class BadBoys {
    constructor(name){
        this.name = name;
        this.position = {
            x: grid_size * 0,
            y: grid_size * 0
        }
        
    }

    render() {
        this.element = document.createElement('div');
        this.element.className = 'pac bad-boy';
        this.element.innerHTML = `${this.name}: ${this.score}`

        this.update();
        return this.element;
    }

    mount(parent) {
        parent.appendChild(this.render());
    }

    update() {

        this.element.style.top = this.position.x * grid_size + 'px';
        this.element.style.left = this.position.y * grid_size + 'px';


        // this.element.style.top = this.position.x + 'px';
        // this.element.style.left = this.position.y + 'px';
    }
}