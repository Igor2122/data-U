class Pacman {
    constructor(name, field) {
        this.name = name;
        this.field = field;
        this.score = 0;
        this.positionX = 0;
        this.positionY = 0;
        this.step = 85; 
        this.mouthOpen = false;
    }

    direction(direction) {

        this.mouthOpen = !this.mouthOpen;

        switch (direction) {

            case 'left':
                if(this.positionX >  -this.step){
                    this.update();
                    this.positionX -= this.step;
                    console.log(this.positionX);
                    this.element.style.backgroundPositionY = this.step * 3 + 'px';
                }
                break;

            case 'right':
                if(this.positionX < (this.field.width - this.step)){
                    this.positionX += this.step;
                    this.update()
                    // console.log(this.positionX);
                    this.element.style.backgroundPositionY = 0 + 'px';
                }
                break;
            case 'up':
                if(this.positionY > 0 ){
                    this.positionY -= this.step;
                    console.log(this.positionY);
                    this.update()
                    this.element.style.backgroundPositionY = this.step + 'px';
                }
                break;
            case 'down':
                if(this.positionY < 425){
                    this.positionY += this.step;
                    this.update();
                    this.element.style.backgroundPositionY = this.step * 2 + 'px';
                }
                break;

            default:
                break;
        }
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


    update() {

        this.element.style.backgroundPositionX = '0';
        if (this.mouthOpen) {
            this.element.style.backgroundPositionX = this.step + 'px';
        }

        this.element.style.left = this.positionX + 'px';
        this.element.style.top = this.positionY + 'px';

    }

    mount(parent) {
        parent.appendChild(this.render());
    }
}