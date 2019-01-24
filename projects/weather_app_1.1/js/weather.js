class Weatehr {
    constructor(city, state) {
        this.apiKey = '75acab970529d55860bdf02822f56fac';
        this.city = city;
        this.state = state;
    }


    // fetch weather from api 

    async getWeatehr() {

        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${this.city}&appid=${this.apiKey}`);

        // api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111

        

        const responseData = await response.json();

        return responseData;
    }

    async getForecastWeather() {
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${this.city}&appid=${this.apiKey}`);

        const responseDataForecast = await forecastResponse.json();

        return responseDataForecast;
    }

    // Change Weather location 
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }

}