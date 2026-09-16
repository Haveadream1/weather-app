import StoredWeather from "../weather_class";

// Array limited to 3 elements
const recentCitiesArr = [];

export const handleRecentCities = (queryChoice) => {
    // Remove the oldest city saved
    if (recentCitiesArr.length >= 3) recentCitiesArr.pop();

    // Small array limited to 3 elements, so complexity shouldn't be an issue with unshift
    recentCitiesArr.unshift(queryChoice);

    // Use localStorage to save the historic of cities searched
    localStorage.setItem("recentSearches", JSON.stringify(recentCitiesArr));

    const readTest = localStorage.getItem("recentSearches");

    // Use JSON methods to pass and retrieve the JS object
    console.log(JSON.parse(readTest));
};

export const storeWeatherData = (queryChoice, data) => {
    const weatherClass = new StoredWeather(queryChoice, data);

    localStorage.setItem("weatherCache", JSON.stringify(weatherClass));

    // For debugging purpose
    const readValue = localStorage.getItem("weatherCache");
    console.log("Stored weather data: ", JSON.parse(readValue));
};