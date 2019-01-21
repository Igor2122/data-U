// // instant weather object 

const weather = new Weatehr();
const ui = new Ui();

ui.coutriesGenerator();



let userCityChooser = ui.getData();
weather.changeLocation('3067696');


const getWeatehr = () => {
    weather.getWeatehr()
    .then(res => {
        console.log(res);
        ui.dropDownItems(res);
    })
    .catch(err => console.log(err));
}

document.addEventListener('DOMContentLoaded', getWeatehr);

ui.getLocationFromDropDown();



// Connect to API on the DOM load 

// ui.citySearch();
// ui.getInputValue(); // currently off as manual search typeing is not available



// let cityId = ui.getData();
// console.log(cityId);