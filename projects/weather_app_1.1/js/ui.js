class Ui {
    constructor(val) {
        this.val = val;
    }

    getData(val) {
        const countryDropDown = document.querySelector('dropdown-menu');
        const cities = fetch("js/test.json")
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {
                data.map(res => {
                    if(res['name'] == val){
                        console.log(res['id']);
                        let id = res['id'];
                        return id;
                    }
                })
            })
    }

    // helper functions 

    convertKelnToCelcius (a ){
        return  a - 273.15;
    }

    dropDownItems (val) {
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