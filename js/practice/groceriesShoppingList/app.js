document.addEventListener('DOMContentLoaded', () => {

    const categDropDown = document.getElementById('foodCategory');
    const shopping = {
        category: ['diary', 'vegetables', 'fruits', 'meat', 'poutlery'],
    }


    const createNewInputItem = (type, customClass) => {
        let li = document.createElement(type);
        li.className = customClass;
        return li;
    }

    for (let i of shopping.category) {
        let genterated = createNewInputItem('option');
        genterated.textContent = i;
        categDropDown.appendChild(genterated);
    }

    const shoppingForm = document.querySelector('.shopping-form');



    const fromManipulations = (e) => {
        e.preventDefault();
        let listGropParent = document.querySelector('.list-group');
        if (e.target.type === 'submit') {

            let inputedValue = document.querySelector('#shopping-item').value;
            let categorySelected = document.getElementById('foodCategory').value;
            let comments = document.getElementById('comments-area');

            let shoppingItem = createNewInputItem('li', 'list-group-item d-flex justify-content-around align-items-center');
            let shottpingItemName = createNewInputItem('span', 'badge');
            let shoppingCategSpan = createNewInputItem('span', 'badge badge-primary badge-pill');
            let commentsAdded = createNewInputItem('span', 'badge');
            let button = createNewInputItem('button', 'btn btn-primary');

            shoppingCategSpan.textContent = categorySelected;
            commentsAdded.textContent = comments.value;
            shottpingItemName.textContent = inputedValue;
            button.textContent = 'Mark Compleeted';

            shoppingItem.appendChild(shottpingItemName);
            shoppingItem.appendChild(commentsAdded);
            shoppingItem.appendChild(shoppingCategSpan);
            shoppingItem.appendChild(button);
            listGropParent.appendChild(shoppingItem);

            button.addEventListener('click', (e) => {
                e.target.previousElementSibling.previousElementSibling.previousElementSibling.style.textDecoration = 'line-through';
            })
        }
        
    }



    shoppingForm.addEventListener('click', fromManipulations);








}) // end of the dom loaded