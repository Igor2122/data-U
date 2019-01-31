class Pacman {
    constructor(name) {
        this.name = name;
        this.positionX = 0;
        this.positionY = 0;
        this.step = 85;
        this.mouthOpen = true;
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
                this.positionX -= this.step;
                this.update()
                break;
            case 39:
                console.log('move right');
                this.positionX += this.step;
                this.update()
                // this.element.style.backgroundPositionY = this.step + 'px';
                break;
            case 38:
                console.log('move up');
                this.positionY -= this.step;
                this.update()
                this.element.style.backgroundPositionY = this.step + 'px';
                break;
                case 40:
                console.log('move down');
                this.positionY += this.step;
                this.update();
                this.element.style.backgroundPositionY = this.step * 2 + 'px';
                break;

            default:
                break;
        }


    }

    update() {
        this.element.style.backgroundPositionX = '0';
        if(this.mouthOpen){
            this.element.style.backgroundPositionX = '100%';
        } 
        this.mouthOpen = !this.mouthOpen;
        
        this.element.style.left = this.positionX + 'px';
        this.element.style.top = this.positionY + 'px';
        
    }

    mount(parent) {
        parent.appendChild(this.render());
    }
}