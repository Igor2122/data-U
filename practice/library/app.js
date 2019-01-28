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

const BookObj = new Book();
BookObj.renderBook();

const UserInput = new User();
UserInput.getInputValues();

BookObj.bookList(UserInput.getInputValues);