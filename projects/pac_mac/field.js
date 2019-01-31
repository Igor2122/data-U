class Field {
    constructor(width, height){
        this.grid_size = 85;
        this.width = width * this.grid_size;
        this.height = height * this.grid_size;
    }

    render(){
        this.element = document.createElement('div');
        this.element.className = 'field';
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;

        return this.element;
    }

    mount(parent) {
        parent.appendChild(this.render());
    }
}