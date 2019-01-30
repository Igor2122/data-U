const allProductsParent = document.querySelector('.all-products-parent');

for(let item of allProducts) {
    allProductsParent.appendChild(item.creteProductItem(item));
}