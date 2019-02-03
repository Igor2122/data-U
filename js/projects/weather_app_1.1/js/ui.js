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

    fetchWeatherValues(val) {

        
        const temperature = document.querySelector('#cur-temp');
        const windSpeed = document.querySelector('#wind-speed');
        const humidity = document.querySelector('#humidity');
        const visibilityIcont = document.querySelector('.visibility');
        temperature.textContent = `${parseInt(this.convertKelnToCelcius(val['main']['temp']))} Cel`;
        humidity.textContent = val['main']['humidity'];

        const locationName = document.querySelector('#w-location');
        locationName.textContent += `${val['name']}`;
        windSpeed.textContent = val['wind']['speed'] + ' km/h';
    }

    getLocationFromDropDown() {
        const countrySelectionButton = document.querySelector('.coutnry-selection-value');
        const countrySelector = document.querySelector('.country-selector');
        const citySelector = document.querySelector('.city-selector');
        countrySelectionButton.addEventListener('click', () => {
            getData(citySelector.value);
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

    chooseMode () {

        const modeToggle = document.querySelector('.mode-toggle');
        console.log('hello');
        const toggleMode = () => {
            document.querySelector('body').setAttribute('style', 'background: center / cover no-repeat url("https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");');
            document.querySelector('.weather-content').setAttribute('style', 'background: rgba(26,198,126,.8);');
            document.querySelector('h1').style.color = '#fff';
            document.querySelector('h2').style.color = '#fff';
            document.querySelector('h3').style.color = '#fff!important';
            document.querySelector('h4').style.color = '#fff';
            
            
            
            
        }
        document.addEventListener('DOMContentLoaded', toggleMode);
    }

}

