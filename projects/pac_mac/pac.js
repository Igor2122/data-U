class Pacman {
    constructor(name, position) {
        this.name = name;
        this.position = 0;
    }


    render() {
        this.element = document.createElement('div');
        this.element.className = 'pac boy-active-light';
        this.element.innerHTML = `${this.name}`

        return this.element;
    }

    movePacman(event) {

        let x = event.which;

        console.log(x);

        switch (x) {
            case 37:
                console.log('move left');
                this.position -= 85;
                this.element.style.left = this.position + 'px';
                break;
                case 39:
                console.log('move right');
                this.position += 85;
                console.log(this.position);
                this.element.style.left = this.position + 'px';
                break;
            case 38:
                console.log('move up');
                break;
            case 40:
                console.log('move down');
                break;
        
            default:
                break;
        }


    }

    mount(parent) {
        parent.appendChild(this.render());
    }
}