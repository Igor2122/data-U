

const renderPage = () => {

    const contactsParent = document.querySelector('.contacts');


    const createElement = (val) => {
        
        let div = document.createElement('div');
        div.className = 'contact';
        div.innerHTML =
            (`
                <div class="contact__photo">
                    <div class="photo">
                        <img class="photo__img" src="img/${val.image}" alt="${val.name}" />
                    </div>
                </div>
                <div class="contact__info">
                    <p class="name"><strong>Name:</strong> ${val.name}</p>
                    <p><strong>E-mail:</strong> ${val.email}</p>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
        `)
        const deleteContact = div.querySelector('.delete');
        const editContact = div.querySelector('.edit');

        deleteContact.addEventListener('click', ()=> {
            contactsParent.removeChild(div);
        });

        editContact.addEventListener('click', () => {
            let input = document.createElement('input');
            let confirm = document.createElement('button');
            confirm.value = 'Confirm'
            input.type = 'text';
            div.appendChild(confirm);
            div.appendChild(input);
            confirm.addEventListener('click', ()=> {
                let changedValue = document.querySelector('.name');
                console.log(input.value)
               changedValue.textContent = input.value;
            })
        });
        return div;
    }

    for(let contact of simpsons) {
        contactsParent.appendChild(createElement(contact));
    }


}

document.addEventListener('DOMContentLoaded', renderPage);

