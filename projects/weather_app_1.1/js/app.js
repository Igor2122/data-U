// instant weather object 

const weather = new Weatehr();
const ui = new Ui();



let userCityChooser = ui.getData();
weather.changeLocation('703448');


const getWeatehr = () => {
    weather.getWeatehr()
    .then(res => {
        console.log(res);
        ui.dropDownItems(res);
    })
    .catch(err => console.log(err));
}

document.addEventListener('DOMContentLoaded', getWeatehr)



// Connect to API on the DOM load 

// ui.citySearch();
ui.getInputValue();



// let cityId = ui.getData();
// console.log(cityId);