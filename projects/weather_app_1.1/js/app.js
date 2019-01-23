// // instant weather object 

const weather = new Weatehr();
const ui = new Ui();

ui.coutriesGenerator();



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

const id = ui.getLocationFromDropDown();
console.log(id, 'when avilable');





// Connect to API on the DOM load 

// ui.citySearch();
// ui.getInputValue(); // currently off as manual search typeing is not available



// let cityId = ui.getData();
// console.log(cityId);