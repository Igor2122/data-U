const grid_size = 85;  

class Field {
    constructor(width, height, badboy, pac) {
        this.width = width;
        this.height = height;
        this.badboy = badboy;
        this.pac = pac;
    }

    render() {
        this.element = document.createElement('div');
        this.element.className = 'field';
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;

        return this.element;
    }

    mount(parent) {
        parent.appendChild(this.render());
        this.update();
    }

    update() {
        this.element.style.width = this.width * grid_size + 'px';
        this.element.style.height = this.height * grid_size + 'px';
    }
}