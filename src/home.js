// eslint-disable prefer-destructuring
import * as domHandler from "./dom_handler";

const KEY = process.env.API_KEY;
const url = "https://api.weatherapi.com/v1/forecast.json?";

const home = () => {
  const form = document.querySelector("#form");
  const cityInput = document.querySelector("#city-input");
  const submitButton = document.querySelector(".submit-button");

  const isRequired = (value) => {
    if (value === "") {
      return false;
    }
    return true;
  };

  const isCityValid = () => {
    const formClass = document.querySelector("#form").className;
    if (formClass === "invalid") {
      return false;
    }
    return true;
  };

  const showError = (input, message) => {
    const fieldSet = input.parentElement;
    const inputForm = fieldSet.querySelector("input");
    inputForm.classList.add("error");
    inputForm.classList.remove("success");

    const error = fieldSet.querySelector("small");
    error.textContent = message;
  };

  const showSuccess = (input) => {
    const fieldSet = input.parentElement;
    const inputForm = fieldSet.querySelector("input");
    inputForm.classList.remove("error");
    inputForm.classList.add("success");

    const error = fieldSet.querySelector("small");
    error.textContent = "";
  };

  const checkInput = () => {
    let valid = false;
    const input = cityInput.value.trim();

    if (!isRequired(input)) {
      showError(cityInput, "*Choose a city");
    } else if (!isCityValid()) {
      showError(cityInput, "*Invalid city name");
    } else {
      showSuccess(cityInput);
      valid = true;
    }
    return valid;
  };

  // Calculate the forecast time starting with the local time up to 6 hours
  const getForecastTime = (startingDay, startingHour) => {
    // Populate array with the starting day and hours
    const timeArray = [
      {
        day: startingDay, 
        hour: startingHour
      },
    ]

    let forecastDay = startingDay;
    let forecastHour = startingHour;

    for (let i = 0; i < 3; i+=1) {
      forecastHour += 2;

      // Reset hours and increase days as midnight is considered as next day
      if (forecastHour >= 24) {
        forecastHour -= 24;
        forecastDay += 1;
      }
      timeArray.push({day: forecastDay, hour: forecastHour});
    }
    return timeArray;
  }

  const getCurrentLocalTime = (initialDay, localFulltime) => {
    const localtime = localFulltime.slice(11, 16);

    let currentDay = initialDay;
    let currentHour = Number(localtime.slice(0, 2));
    const currentMinutes = localtime.slice(3, 5);

    // Midnight is considered as next day on API
    if (currentHour === 24) currentDay += 1;

    // Round time to nearest hour, if minutes >= 30 then hour += 1, < 30 keep same hour
    if (currentMinutes >= 30) currentHour += 1;

    // No need to think about minutes, we use clock hours
    return {currentDay, currentHour};
  }

  // TODO: relocate
  // Array limited to 3 elements
  const recentCitiesArr = [];

  const handleRecentCities = (queryChoice) => {
    // Remove the oldest city saved
    if (recentCitiesArr.length >= 3) recentCitiesArr.pop();

    // Small array limited to 3 elements, so complexity shouldn't be an issue with unshift
    recentCitiesArr.unshift(queryChoice);

    // Use localStorage to save the historic of cities searched
    localStorage.setItem("recentSearches", JSON.stringify(recentCitiesArr));

    const readTest = localStorage.getItem("recentSearches");

    // Use JSON methods to pass and retrieve the JS object
    console.log(JSON.parse(readTest));
  }

  // Param can be a city or coordinates
  async function getWeather(queryChoice) {
    domHandler.showLoader();

    handleRecentCities(queryChoice);
    try {
      const response = await fetch(
        `${url}key=${KEY}&q=${queryChoice}&days=8&aqi=no&alerts=no`,
        { mode: "cors" },
      );
      if (!response.ok) {
        throw new Error(`HTTP error, status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);

      domHandler.displayMain(data);
      
      const initialDay = 0;
      const {currentDay, currentHour} = getCurrentLocalTime(initialDay, data.location.localtime);
      const timeObject = getForecastTime(currentDay, currentHour);
      const timeSections = document.querySelectorAll(".time-section");

      domHandler.displayTimeSection(data, timeObject, timeSections);
    } catch (error) {
      // re-throwing the error, ensure error is propagated up the call stack
      console.error("An error occurred while fetching data:", error);

      form.classList.add("invalid");
      form.classList.remove("valid");
      checkInput();

      throw error;
    } 
    domHandler.hideLoader();
  }

  // initialization
  getWeather("Seoul");

  function formHandler() {
    const isCityChoiceValid = checkInput();
    const isFormValid = isCityChoiceValid;

    if (isFormValid) {
      const cityChoice = cityInput.value.trim();
      getWeather(cityChoice);

      const input = document.querySelector("#city-input");
      input.classList.remove("success");

      console.log("Valid form");
    } else {
      console.log("Invalid form");
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formHandler();
  });

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    formHandler();
  });

  form.addEventListener("input", (e) => {
    form.classList.add("valid"); // As we can receive en error in the call, reset if input change
    form.classList.remove("invalid");

    switch (e.target.id) {
      case "city-input":
        checkInput();
        break;
      default: // Default case to avoid error eslint
    }
  });

  // Use the Geolocation API
  // Listen to user click on the fetchLocation button 
    // -> use Geolocation to find lat/long 
    // -> trigger a new fetch with coords instead of city

  const statusEl = document.querySelector("#status");

  // TODO: Fix indentation
  const success = (position) => {
    const {latitude} = position.coords;
      const {longitude} = position.coords;

      statusEl.textContent = "";
      console.log(latitude, longitude);

      getWeather(`${latitude},${longitude}`);
  }

  const error = () => {
    // Can also be led by localisation not allowed in browser parameters
      statusEl.textContent = "Error while locating user's position";
      // Add also error class
  }

  const findGeolocation = () => {
      if (!navigator.geolocation) {
          statusEl.textContent = "Geolocation not supported for this browser";
      } else {
          statusEl.textContent = "Locating position...";

          // Need to have success / error callback as parameters
          navigator.geolocation.getCurrentPosition(success, error);
      }
  }
  document.querySelector("#location-btn").addEventListener("click", findGeolocation); 


  // Local storage
    // Store the last 3 cities searches
    // On refresh, instead of default, fetch the last search
    // Class

  // Limited to 3 cities

  
};
export default home;

/*  Header section :
        Next to Seoul put a button to change location
        Depend on the location value, take data and display it

    Red section :
        Display the image that depend on the actual weather

    Purple section :
        Display the weather for the day
        Hour + t*
*/
