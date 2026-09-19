export default class StoredWeather {
    constructor(city, data) {
        this.city = city;
        this.data = data;
    }
};

// Need to keep track of the time, as weather data stored long ago cannot be anymore relevant
