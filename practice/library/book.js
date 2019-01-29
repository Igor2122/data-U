class Book {
    constructor(title, director, pages, publishEar, takenHome, available) {
        title = this.title;
        director = this.director;
        pages = this.pages;
        publishEar = this.publishEar;
        takenHome = this.takenHome;
        available = this.available;
    }

    addBookToList (val){
        let res = this.bookList();
        if(val){
            res.push(val);
            console.log(res);
        }
    }

    bookList() {
        const bookList = [{
            title: 'Pulp Fiction',
            shortDescription: 'Dialogue drives Quentin Tarantino\'s "Pulp Fiction, dialogue of such high quality it deserves comparison with other masters of spare, hard-boiled prose, from Raymond Chandler to Elmore Leonard.',
            director: 'Quentin Tarantino',
            image: 'https://static.rogerebert.com/uploads/movie/movie_poster/pulp-fiction-1994/large_dM2w364MScsjFf8pfMbaWUcWrR.jpg',
            genre: ['Action', 'Crime', 'Thriller'],
            rated: 'R',
            available: true,
            takenHome: false
        }]
        console.log(bookList);
        return bookList;
    }

    // helper functions 

    outputArray(val) {
        let res = '';
        for (let i of val) {
            res += `${i}, `;
        }
        return res;
    }

    takeHome(val, replyTrue, replyFalse) {
        return val ? replyTrue : replyFalse;
    }

    renderBook() {
        let books = this.bookList();
        if(books.length > 0){
        for (let book of books) {
            let bookOutput = document.createElement('div');
            bookOutput.innerHTML = `<div class="card" style="width: 18rem;">
            <img src=${book.image} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">${book.shortDescription}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Director: ${book.director}</li>
            <li class="list-group-item">Gentre: ${this.outputArray(book.genre)}</li>
            <li class="list-group-item">Rated: ${book.rated}</li>
            
            <li class="list-group-item">Available: ${this.takeHome(book.available, 'Knock Yourself out!', 'Read Here Only')}</li>
            <li class="list-group-item">Taken Home: ${this.takeHome(book.takenHome, 'OK', 'No, Sorry')}</li>
            </ul>
            <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
            </div>
            </div>`;

            const bookParent = document.querySelector('.books');
            bookParent.appendChild(bookOutput);
        }
        }

        
    }



}