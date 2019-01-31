class Field {
    constructor(width, height, badboy){   
        this.width = width * grid_size;
        this.height = height * grid_size;
        // this.packman = pacmanIgor;
        this.badboy = badboy;
    }

    render(){
        this.element = document.createElement('div');
        this.element.className = 'field';
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;

        console.log(this.packman);
        return this.element;
    }

    mount(parent) {
        parent.appendChild(this.render());
    }
}