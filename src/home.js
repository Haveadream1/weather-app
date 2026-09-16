import * as domHandler from "./dom_handler";
import * as hourlyHandler from "./utils/local_forecast_time";
import * as storageHandler from "./utils/localStorage_handler";

import checkInput from "./utils/form_validation";

const KEY = process.env.API_KEY;
const url = "https://api.weatherapi.com/v1/forecast.json?";

// TODO: separate the API call in his own utils file

const home = () => {
	const form = document.querySelector("#form");
	const submitButton = document.querySelector("#submit-btn");

	const handleFetchSuccess = (data) => {
		const unit = localStorage.getItem("unitPreference");
		const initialDay = 0;
		const {currentDay, currentHour} = hourlyHandler.getCurrentLocalTime(initialDay, data.location.localtime);
		const timeObject = hourlyHandler.getForecastTime(currentDay, currentHour);

		domHandler.displayTodaySection(data, unit);
		domHandler.displayMetricsSection(data, unit);
		domHandler.displayHourlySection(data, timeObject, unit);
		domHandler.displayDailySection(data, unit);
		domHandler.displayTwilightSection(data);
	}

	const switchUnit = (unit) => {
		localStorage.setItem("unitPreference", unit);

		const readValue = localStorage.getItem("unitPreference");
		console.log(readValue);

		// Improve performance by retrieving the localStorage instead of making an API call (Faster)
		const savedCity = JSON.parse(localStorage.getItem("weatherCache"));
		const {data} = savedCity;
		console.log("LocalStorage fetch trigger !")

		handleFetchSuccess(data);
	}
	
	document.querySelectorAll(".unit-switch__btn").forEach(el => {
		el.addEventListener("click", (e) => {
			const unit = domHandler.handleUnitButton(e.currentTarget);
			switchUnit(unit);
		});
	})

	// Param can be a city or coordinates
	async function getWeather(queryChoice) {
		console.log("API Fetch trigger !")
		// domHandler.showLoader();

		storageHandler.handleRecentCities(queryChoice);
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

			// ? Testing zone

			handleFetchSuccess(data);
	
			// Store data only on fetch, so outside handleFecthSuccess
			storageHandler.storeWeatherData(queryChoice, data);

			// ? Testing zone

			// handleFetchSuccess(data);
		} catch (error) {
			// re-throwing the error, ensure error is propagated up the call stack
			console.error("An error occurred while fetching data:", error);

			form.classList.add("invalid");
			form.classList.remove("valid");
			
			const cityInput = document.querySelector("#city-input");
			// WHY check here ?
			checkInput(cityInput, queryChoice);

			throw error;
		} 
		// domHandler.hideLoader();
	}

	// Initialization, fetch data from localStorage if exist
	if(localStorage.getItem("weatherCache")) {
		const savedCity = JSON.parse(localStorage.getItem("weatherCache"));
		const {data} = savedCity;
		console.log("LocalStorage fetch trigger !")

		const savedUnit = localStorage.getItem("unitPreference");
		domHandler.switchUnitButtonOnReload(savedUnit);

		handleFetchSuccess(data);
	} else {
		getWeather("Seoul");
	}

	// ? TESTING

	const small = document.querySelector(".form__small");
	const success = (position) => {
		const {latitude} = position.coords;
		const {longitude} = position.coords;

		small.textContent = "";
		console.log(latitude, longitude);

		getWeather(`${latitude},${longitude}`);
	}

	const error = () => {
		// Can also be led by localisation not allowed in browser parameters
		if (small.textContent) small.textContent = "";

		// TODO: Move it to DOM
		const smallSpan = document.createElement("span");
		smallSpan.classList.add("form__small--red-dot");
		smallSpan.textContent = "*";
		small.appendChild(smallSpan);
		small.insertAdjacentText("beforeend", "Error during geolocation");
	}

	const findGeolocation = () => {
		if (!navigator.geolocation) {
			small.textContent = "Geolocation not supported for this browser";
		} else {
			small.textContent = "Locating position...";

			// Need to have success / error callback as parameters
			navigator.geolocation.getCurrentPosition(success, error);
		}
	}
	document.querySelector(".geolocation-btn").addEventListener("click", findGeolocation);
	// ? TESTING

	const formHandler = () => {
		const cityInput = document.querySelector("#city-input");
		const city = cityInput.value.trim();
		const isCityChoiceValid = checkInput(cityInput, city);
		const isFormValid = isCityChoiceValid;

		if (isFormValid) {
			getWeather(city);

			cityInput.classList.remove("success");

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
		const cityInput = document.querySelector("#city-input");
		const city = cityInput.value.trim();

		form.classList.add("valid"); // As we can receive en error in the call, reset if input change
		form.classList.remove("invalid");

		switch (e.target.id) {
			case "city-input":
				checkInput(cityInput, city);
				break;
			default: // Default case to avoid error eslint
			// TODO: check
		}
	});
};
export default home;