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
                    let city = res['name'][val];
                    console.log(city);
                    if(res['name'] == val){
                        console.log(res['id']);
                    }
                    // console.log(res[val], res['id']);
                })
            })
    }

    dropDownItems (val) {
        // <a class="dropdown-item" href="#">Action</a>
        const item = document.createElement('a');
        item.innerHTML = `<a class="dropdown-item" href="#">${val}</a>`;
    }


    getInputValue(e) {
        const input = document.querySelector('.city-search');
        const countryDropDown = document.querySelector('dropdown-menu');
        
        input.addEventListener('keyup', (e) => {
            let userInput = e.target.value;
            if (userInput !== '') {
                this.getData(userInput);

            }
        });
    }

}