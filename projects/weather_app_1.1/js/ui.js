
const weatherCon = new Weatehr();



class Ui {
    constructor(val) {
        this.val = val;
    }


    coutriesGenerator(val) {
        let countriesDropDown = document.querySelector('.country-selector');
        let cityDropDown = document.querySelector('.city-selector');
        const countriesList = [];
        const citiesList = [];

        const cities = fetch("js/test.json")
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {

                data.map(res => {

                    countriesList.push(res['country']);
                    citiesList.push(res['name']);
                    return countriesList, citiesList;


                })
                const unitqueCoutries = [...new Set(countriesList)];
                console.log(citiesList);
                for (let i of unitqueCoutries) {
                    console.log(i);
                    let option = document.createElement('option');
                    option.textContent = i;
                    countriesDropDown.appendChild(option);
                }
                for (let city of citiesList) {
                    let option = document.createElement('option');
                    option.textContent = city;
                    cityDropDown.appendChild(option);
                }
            })

    }

    // helper functions 

    convertKelnToCelcius(a) {
        return a - 273.15;
    }

    weatherIconSelector(val) {
        let icons = {
            sunny: sunny.png,
        }
    }

    dropDownItems(val) {



        const temperature = document.querySelector('#cur-temp');
        const windSpeed = document.querySelector('#wind-speed');
        const visibilityIcont = document.querySelector('.visibility');
        temperature.textContent = `${parseInt(this.convertKelnToCelcius(val['main']['temp']))} Cel`;

        const locationName = document.querySelector('#w-location');
        locationName.textContent = `${val['name']}`;
        windSpeed.textContent = val['wind']['speed'] + ' km/h';
    }

    getLocationFromDropDown() {
        const countrySelectionButton = document.querySelector('.coutnry-selection-value');
        const countrySelector = document.querySelector('.country-selector');
        const citySelector = document.querySelector('.city-selector');
        countrySelectionButton.addEventListener('click', () => {
            // console.log( citySelector.value );
            this.getData(citySelector.value);
            let res = citySelector.value;
            console.log(res);
        })
    }


    getData(val) {
        const cities = fetch("js/test.json")
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {
                data.map(res => {
                    if (res['name'] == val) {
                        console.log(res['id']);
                        let id = res['id'];
                        weatherCon.changeLocation(id);
                        weatherCon.getWeatehr()
                            .then(query => {
                                console.log(query);
                                localUI.dropDownItems(query);
                            })
                            .catch(err => console.log(err));
                        console.log(id);
                    }
                })
            })
    }

    getInputValue(e) {
        const input = document.querySelector('#city');

        input.addEventListener('keyup', (e) => {
            let userInput = e.target.value;
            if (userInput !== '') {
                this.getData(userInput);

            }
        });
    }

}

const localUI = new Ui();