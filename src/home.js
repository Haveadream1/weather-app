import * as domHandler from "./dom_handler";
import StoredWeather from "./weather_class";

import checkInput from "./utils/form_validation";

const KEY = process.env.API_KEY;
const url = "https://api.weatherapi.com/v1/forecast.json?";

// TODO: add the valid/invalid class in the style
// TODO: once everything is passed, move the form validation in a utils file

const home = () => {
const form = document.querySelector("#form");

	const formHandler = () => {
		const cityInput = document.querySelector("#city-input");
		const city = cityInput.value.trim();
		const isCityChoiceValid = checkInput(cityInput, city);
		const isFormValid = isCityChoiceValid;

		if (isFormValid) {
			// getWeather(city);

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
};
export default home;