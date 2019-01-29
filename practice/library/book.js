class Book {
    constructor(title, shortDescription, director, image, gentre, reted, available, takenHome) {
        this.title = title;
        this.shortDescription = shortDescription;
        this.director = director;
        this.image = image;
        this.gentre = gentre,
        this.reted = rated;
        this.available = true;
        this.takenHome = true
    }


    renderAllBooks(val) {
        
                let bookOutput = document.createElement('div');
                bookOutput.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src=${val.image} class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${val.title}</h5>
                    <p class="card-text">${val.shortDescription}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">Director: ${val.director}</li>
                    <li class="list-group-item">Gentre: ${this.outputArray(val.genre)}</li>
                    <li class="list-group-item">Rated: ${val.rated}</li>
                    
                    <li class="list-group-item">Available: ${this.takeHome(val.available, 'Knock Yourself out!', 'Read Here Only')}</li>
                    <li class="list-group-item">Taken Home: ${this.takeHome(val.takenHome, 'OK', 'No, Sorry')}</li>
                    </ul>
                    <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                    </div>
                </div>`;
                return bookOutput;
    }

    appendAddedBookToUI (val) {
        const bookParent = document.querySelector('.books');
        let lastBookAdded = val[val.length -1];
        bookParent.appendChild(this.renderAllBooks(lastBookAdded));
    }

    getInputValues() {

        const newMovieForm = document.querySelector('.new-movie-form');

        const getValues = (e) => {
            e.preventDefault();

            if (e.target.className === 'getValuesButton') {
                let title = document.getElementById('movieName').value;
                let shortDescription = document.getElementById('shortDescription').value;
                let director = document.getElementById('director').value;
                let image = document.getElementById('iamgeUrl').value;
                let gentre = document.getElementById('gentre').value;
                let available = this.renderTrueFalse(document.getElementById('available').value);
                let takenHome = this.renderTrueFalse(document.getElementById('takeHome').value);

                const CreatedBookFromUserInput = new Book(
                    title, shortDescription, director, image, gentre, available, takenHome
                );
                booksDatabase.push(CreatedBookFromUserInput);
                console.log(booksDatabase);
                
                this.appendAddedBookToUI(booksDatabase);
            }

        }

        newMovieForm.addEventListener('click', getValues);
    }


    // helper functions 
    outputArray(val) {
        return val;
    }

    takeHome(val, replyTrue, replyFalse) {
        return val ? replyTrue : replyFalse;
    }

    // HELPER FUNCTIONS
    renderTrueFalse(val) {
        return val === 'Yes' ? true : false;
    }

}