class Robot {
    constructor(side, name, text, counter) {
        this.side = side;
        this.name = name;
        this.text = text;
        this.counter = 0;
    }

    render() {
        this.element = document.createElement('li');
        this.element.className = 'list-group-item d-flex justify-content-between align-items-center';
        this.element.innerHTML = `
        <span class="badge badge-primary badge-pill">${this.side}</span>
        <img class="w-25 img head" src="./img/${this.name.toLowerCase()}.png" alt="local" >
        <span class="badge badge-primary badge-pill">${this.text}</span>
        `
        const head = this.element.querySelector('.head');
        head.addEventListener('click', () => {
            console.log(this.text);
        });

        return this.element;
    }

    renderSingle(robotGiven) {
        let robotG = document.createElement('li');
        robotG.className = 'list-group-item d-flex justify-content-between align-items-center';
        robotG.innerHTML = `
        <span class="badge badge-primary badge-pill">${robotGiven.side}</span>
        <img class="w-25 img head" src="./img/${robotGiven.name.toLowerCase()}.png" alt="local" >
        <span class="badge badge-primary badge-pill">${robotGiven.text}</span>
        `


        return robotG;
    }


    mountKeyPress(parent, array) {
        parent.appendChild(this.renderSingle(array[this.counter]));
        this.counter++;
    }

    mount(parent) {
        parent.appendChild(this.render());
    }

    removeLoaderGif (parent, toBeRemoved) {
        parent.removeChild(toBeRemoved);
    }
}