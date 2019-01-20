class Ui {
    constructor(val) {
        this.val = val;
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
                        return id;
                    }
                })
            })
    }

    coutriesGenerator(val) {
        let countriesDropDown = document.querySelector('.country-selector');
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
        temperature.textContent = `Temperature: ${parseInt(this.convertKelnToCelcius(val['main']['temp']))}`;

        const locationName = document.querySelector('#w-location');
        const item = document.createElement('a');
        item.innerHTML = `<a class="dropdown-item" href="#">${val['name']}</a>`;
        locationName.appendChild(item);
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