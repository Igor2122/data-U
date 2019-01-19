class Weatehr {
    constructor(city, state) {
        this.apiKey = '75acab970529d55860bdf02822f56fac';
        this.city = city;
        this.state = state;
    }


    // fetch weather from api 

    async getWeatehr() {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${this.city}&appid=75acab970529d55860bdf02822f56fac`);

        const responseData = await response.json();

        return responseData;
    }

    // Change Weather location 
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }

}