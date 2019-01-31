class Field {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    render(){
        this.element = document.createElement('div');
        this.element.className = 'field';

        return this.element;
    }

    mount(parent) {
        parent.appendChild(this.render());
    }
}