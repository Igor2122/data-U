class Pacman {
    constructor(name, field) {
        this.name = name;
        this.field = field;
        this.score = 0;
        this.step = grid_size;
        this.mouthOpen = false;
        this.position = {
            x: 0,
            y: 0
        }
    }

    direction(direction) {
        // updated the current position of the pac
        this.currentPosition();

        this.mouthOpen = !this.mouthOpen;

        switch (direction) {

            case 'left':
                // if (this.position.x > this.step) {;
                    this.position.x -= this.step;
                    this.element.style.backgroundPositionY = this.step * 3 + 'px';
                // }
                break;

            case 'right':
                if (this.position.x < (this.field.width - this.step)) {
                    this.position.x += this.step;

                    this.element.style.backgroundPositionY = 0 + 'px';
                }
                break;
            case 'up':
                // if(this.position.y > 0 ){
                this.position.y -= this.step;

                this.element.style.backgroundPositionY = this.step + 'px';
                // }
                break;
            case 'down':
                // if(this.position.y < this.field.height - grid_size){
                this.position.y += this.step;;
                this.element.style.backgroundPositionY = this.step * 2 + 'px';
                // }
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
            case 37:
                console.log('move left');
                this.direction('left')
                break;
            case 39:
                console.log('move right');
                this.direction('right')

                break;
            case 38:
                console.log('move up');
                this.direction('up')

                break;
            case 40:
                console.log('move down');
                this.direction('down')
                break;

            default:
                break;
        }


    }

    currentPosition() {
        // this.position.x = this.positionX;
        // this.position.y = this.positionY;

        // console.log(this.field.badboy.position.x);
        let badG = this.field.badboy.position;
        console.log(this.position);

        
        if (this.field.badboy.position.x == this.position.x) {
            console.log('we met')
        }
    }


    update() {

        this.element.style.backgroundPositionX = '0';
        if (this.mouthOpen) {
            this.element.style.backgroundPositionX = this.step + 'px';
        }

        this.element.style.left = this.position.x + 'px';
        this.element.style.top = this.position.y + 'px';

    }

    mount(parent) {
        parent.appendChild(this.render());
    }
}