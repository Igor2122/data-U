class Field {
    constructor(width, height){
        
        this.width = width * grid_size;
        this.height = height * grid_size;
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