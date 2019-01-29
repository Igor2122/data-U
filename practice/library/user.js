const tempBook = new Book();

class User {
    

    // addMovie (movie, movieDescripiton, movieDirector, imageUrl, genre, rated, available, takenHome) {

    //     const newMovie = {
    //         title: movieTitle,
    //         shortDescription: movieDescripiton,
    //         director: movieDirector,
    //         image: imageUrl,
    //         gentre: [],
    //         reted: ratedVAl,
    //         available: true,
    //         takenHome: true,
    //     }
    //     return newMovie;
    // }

    // HELPER FUNCTIONS
    renderTrueFalse (val) {
        return val === 'Yes' ? true : false;
    }

    getInputValues () {
        const newMovieForm = document.querySelector('.new-movie-form');
        const inputsAll = document.querySelectorAll('.new-movie-form input');

        const getValues = (e) => {
            e.preventDefault();
            if(e.target.className === 'getValuesButton'){
                const newMovie = {
                    title: document.getElementById('movieName').value,
                    shortDescription: document.getElementById('shortDescription').value,
                    director: document.getElementById('director').value,
                    image: document.getElementById('gentre').value,
                    gentre: document.getElementById('gentre').value,
                    // reted: ratedVAl,
                    available: this.renderTrueFalse(document.getElementById('available').value),
                    takenHome: this.renderTrueFalse(document.getElementById('takeHome').value),
                }
                for(let i of inputsAll){
                    console.log(i.value);
                    if(i.value === ' '){
                        i.value = 'please input this field';
                    }
                }
                console.log(newMovie);
                return newMovie;
            }
            
            
        }
        
        
        
        // tempBook.renderBook();


        newMovieForm.addEventListener('click', getValues);
    }
}