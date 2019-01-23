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

const getData = (val) => {
    const cities = fetch("js/test.json")
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            data.map(res => {
                if (res['name'] == val) {
                    console.log(res['id']);
                    let id = res['id'];
                    weather.changeLocation(id);
                    weather.getWeatehr()
                        .then(query => {
                            console.log(query);
                            ui.dropDownItems(query);
                        })
                        .catch(err => console.log(err));
                    console.log(id);
                }
            })
        })
}





// Connect to API on the DOM load 

// ui.citySearch();
// ui.getInputValue(); // currently off as manual search typeing is not available



// let cityId = ui.getData();
// console.log(cityId);