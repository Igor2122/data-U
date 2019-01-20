// instant weather object 

const weather = new Weatehr('553791');
const ui = new Ui();

let userCityChooser = ui.getData();
if(userCityChooser){
    weather.changeLocation(userCityChooser);
}

const getWeatehr = () => {
    weather.getWeatehr()
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err));
}

// Connect to API on the DOM load 
document.addEventListener('DOMContentLoaded', getWeatehr)

// ui.citySearch();
ui.getInputValue();



// let cityId = ui.getData();
// console.log(cityId);