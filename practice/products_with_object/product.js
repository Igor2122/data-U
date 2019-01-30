class Product {

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    sell() {
        this.quantity--;
        this.update();
    }
    
    buy() {
        this.quantity++;
        this.update()
        console.log('supposed to update')
    }

    update() {
        this.div.querySelector('.quantity').textContent = this.quantity;
    }

    render() {
        this.div = document.createElement('li');
        this.div.innerHTML =
            `<li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="badge badge-primary badge-pill">${this.price}</span>
                <span class="badge badge-primary badge-pill">${this.name}</span>
                <span class="badge badge-primary badge-pill quantity">${this.quantity}</span>
            </li>
            <div class="btn-group d-flex justify-content-between align-items-center" role="group" aria-label="Basic example">
                <button type="button" class="w-25 btn btn-secondary purchaseButton">Buy</button>
                <button type="button" class="w-25 btn btn-secondary sellButton"> Sell</button>
            </div>`

        const purchaseButton = this.div.querySelector('.purchaseButton');
        const sellButton = this.div.querySelector('.sellButton');
        purchaseButton.addEventListener('click', () => {
            this.sell();
        });
        sellButton.addEventListener('click', () => {
            this.buy();
        });

        return this.div;
    }


    mount(parent) {
        parent.appendChild(this.render());
        this.update();
    }









}