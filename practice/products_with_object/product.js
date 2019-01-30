class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    creteProductItem(val) {
        let div = document.createElement('li');
        div.innerHTML =
            `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    
    <span class="badge badge-primary badge-pill">${val.price}</span>
    <span class="badge badge-primary badge-pill">${val.name}</span>
        <span class="badge badge-primary badge-pill quantity">${val.quantity}</span>
    </li>
    <div class="btn-group d-flex justify-content-between align-items-center" role="group" aria-label="Basic example">
        <button type="button" class="w-25 btn btn-secondary purchaseButton">Buy</button>
        <button type="button" class="w-25 btn btn-secondary">Get Quantity</button>
    </div>
    `
    const purchaseButton = div.querySelector('.purchaseButton');
    purchaseButton.addEventListener('click', () => {
        this.sell();
    })
    return div;
}

sell ()  {
    let quantityLeft = document.querySelector('.quantity');
    let res = this.quantity -= 1
    quantityLeft = res;
        console.log(res);
    }
    
    // purchaseItem () {
    //     const purchaseButtons = document.querySelectorAll('.purchaseButton');
    //     for(let button of purchaseButtons) {
    //         button.addEventListener('click', (e) => {
    //             const currentStockLeft = e.target.parentNode.parentNode.childNodes[1].childNodes[1].textContent;
    //             let currentStock = e.target.parentNode.parentNode.childNodes[1].childNodes[1];
    //             currentStock.textContent = parseInt(currentStockLeft) - 1;
    //         })
    //     }
    // }
    

}