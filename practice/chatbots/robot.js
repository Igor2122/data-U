class Robot {
    constructor(side, name, text) {
        this.side = side;
        this.name = name;
        this.text = text;
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


    mount(parent) {
        parent.appendChild(this.render());
    }
}