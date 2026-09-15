import * as domHandler from "./dom_handler";
import StoredWeather from "./weather_class";

import checkInput from "./utils/form_validation";

const KEY = process.env.API_KEY;
const url = "https://api.weatherapi.com/v1/forecast.json?";

const home = () => {
	const form = document.querySelector("#form");
	const submitButton = document.querySelector("#submit-btn");

	// ?

	// Param can be a city or coordinates
	async function getWeather(queryChoice) {
		console.log("API Fetch trigger !")
		// domHandler.showLoader();

		// handleRecentCities(queryChoice);
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

			domHandler.displayTodaySection(data, "celsius");
			domHandler.displayMetricsSection(data, "celsius");
			domHandler.displayTwilightSection(data);

			// Store data only on fetch, so outside handleFecthSuccess
			// storeWeatherData(queryChoice, data);

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

	// ?

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