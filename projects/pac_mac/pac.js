class Pacman {
    constructor(name, field, posX, posY) {
        this.name = name;
        this.field = field;
        this.score = 0;
        this.step = grid_size;
        this.mouthOpen = false;
        this.position = {
            x: posX,
            y: posY
        }
    }

    direction(direction) {
        // updated the current position of the pac

        this.mouthOpen = !this.mouthOpen;

        switch (direction) {

            case 'right':
                this.position.x++;
                this.element.style.backgroundPositionY = 0 + 'px';
                
                break;

            case 'left':

                this.position.x--;
                this.element.style.backgroundPositionY = this.step * 3 + 'px';

                break;

            case 'down':

                this.position.y++;
                this.element.style.backgroundPositionY = this.step * 2 + 'px';

                break;

            case 'up':

                this.position.y--;
                this.element.style.backgroundPositionY = this.step + 'px';

                break;

            default:
                break;
        }
        this.update();

    }


    render() {
        this.element = document.createElement('div');
        this.element.className = 'pac boy-active-light';
        this.element.innerHTML = `${this.name}: ${this.score}`

        return this.element;
    }

    movePacman(event) {
        let x = event.which;
        switch (x) {
            case 39:
                console.log('move right');
                this.direction('right');
                break;

            case 37:
                console.log('move left');
                this.direction('left')

                break;
            case 40:
                console.log('move down');
                this.direction('down')
                break;

            case 38:
                console.log('move up');
                this.direction('up')

                break;

            default:
                break;
        }
        this.update();
        this.currentPosition();
    }

    currentPosition() {
        let badG = this.field.badboy.position;
        let pac = this.position;

        console.log(badG, pac);

        if(badG.x === pac.x) {
            console.log('we met');
        }
        this.update();

    }

    update() {

        this.element.style.backgroundPositionX = '0';
        if (this.mouthOpen) {
            this.element.style.backgroundPositionX = this.step + 'px';
        }

        this.element.style.left = this.position.x * grid_size + 'px';
        this.element.style.top = this.position.y * grid_size + 'px';

        // this.currentPosition();
    }

    mount(parent) {
        parent.appendChild(this.render());
        this.update();
    }
}