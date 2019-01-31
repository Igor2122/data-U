class BadBoys {
    constructor(name){
        this.name = name;
        this.positionX = grid_size * 3;
        this.positionY = grid_size * 2;
        // this.field = field;
    }

    render() {
        this.element = document.createElement('div');
        this.element.className = 'pac bad-boy';
        this.element.innerHTML = `${this.name}: ${this.score}`

        return this.element;
    }

    mount(parent) {
        parent.appendChild(this.render());
    }
}