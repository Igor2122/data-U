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
        let countriesList = [];

        const cities = fetch("js/test.json")
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {

                data.map(res => {
                    // console.log(res);

                    countriesList.push(res['country']);
                    // console.log(countriesList);
                    return countriesList;



                })
                const unitqueCoutries = [...new Set(countriesList)];
                // console.log(unitqueCoutries);
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