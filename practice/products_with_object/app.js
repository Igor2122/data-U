const product = new Product ();
const allProductsParent = document.querySelector('.all-products-parent');

for(let item of allProducts) {
    allProductsParent.appendChild(product.creteProductItem(item));
}

product.purchaseItem();