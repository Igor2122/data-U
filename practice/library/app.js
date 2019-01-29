document.addEventListener('DOMContentLoaded', () => {
    const displayBooks = new Book();


    const bookParent = document.querySelector('.books');
    

    for(let book of booksDatabase){
        bookParent.appendChild(displayBooks.renderAllBooks(book));;
    }



    // displayBooks.renderBook(booksDatabase);
    displayBooks.getInputValues();
})

































// const allProducts = [];

// const newProduct = (val1, val2) => {
//     const groceryListObj = {
//         product: ' ',
//         ammount: ' '
//     }
//     groceryListObj.product = val1;
//     groceryListObj.ammount = val2;
//     allProducts.push(groceryListObj);
// }

// newProduct('product1', 'product1');
// newProduct('product2', 'product2');

// console.log(groceryListObj);

// console.log(allProducts);