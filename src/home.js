import * as domHandler from "./dom_handler";
import * as hourlyHandler from "./utils/forecast_time";
import * as storageHandler from "./utils/storage";

import fetchData from "./utils/api";
import checkInput from "./utils/form_validation";

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

		// Improve performance by retrieving the localStorage instead of making an API call (Faster)
		const savedCity = JSON.parse(localStorage.getItem("weatherCache"));
		const {data} = savedCity;
		console.log("LocalStorage fetch trigger !");

		handleFetchSuccess(data);
	}
	
	document.querySelectorAll(".unit-switch__btn").forEach(el => {
		el.addEventListener("click", (e) => {
			const unit = domHandler.handleUnitButton(e.currentTarget);
			switchUnit(unit);
		});
	})

	// Param can be a city or coordinates
	const homeHandler = async (queryChoice) => {
		domHandler.showLoader();
		try {
			const data = await fetchData(queryChoice);

			// Store the fetched city name instead of the input as it might be more intuitive
			storageHandler.handleRecentCities(data.location.name);
			handleFetchSuccess(data);

			// Store data only on fetch, so outside handleFecthSuccess
			storageHandler.storeWeatherData(queryChoice, data);
		} catch (error) {
			// re-throwing the error, ensure error is propagated up the call stack
			console.error("An error occurred while fetching data:", error);

			form.classList.add("invalid");
			form.classList.remove("valid");
			
			const cityInput = document.querySelector("#city-input");
			checkInput(cityInput, queryChoice);
		}
		domHandler.hideLoader();
	}

	// Run on each time the file is loaded
	domHandler.displayMetricsIcon();

	// Initialization, fetch data from localStorage if exist
	if(localStorage.getItem("weatherCache")) {
		const savedCity = JSON.parse(localStorage.getItem("weatherCache"));
		const {data} = savedCity;
		console.log("LocalStorage fetch trigger !")

		const savedUnit = localStorage.getItem("unitPreference");
		domHandler.switchUnitButtonOnReload(savedUnit);

		handleFetchSuccess(data);
	} else {
		homeHandler("Seoul");
	}

	const geolocationBtn = document.querySelector(".geolocation-btn");
	const small = document.querySelector(".form__small");
	const success = (position) => {
		const {latitude} = position.coords;
		const {longitude} = position.coords;

		small.textContent = "";
		console.log(latitude, longitude);

		homeHandler(`${latitude},${longitude}`);
		geolocationBtn.classList.remove("geolocation-btn--animation");
	}

	const findGeolocation = () => {
		geolocationBtn.classList.add("geolocation-btn--animation");
		if (!navigator.geolocation) {
			small.textContent = "Geolocation not supported for this browser";
			geolocationBtn.classList.remove("geolocation-btn--animation");
		} else {
			small.textContent = "Locating position...";

			// Error can also be led by localisation not allowed in browser parameters
			navigator.geolocation.getCurrentPosition(
				success, 
				(error) => domHandler.displayErrorMessage(`Geolocation error: ${error.message}`, true)
			);
		}
	}
	geolocationBtn.addEventListener("click", findGeolocation);
	
	const formHandler = () => {
		const cityInput = document.querySelector("#city-input");
		const city = cityInput.value.trim();
		const isCityChoiceValid = checkInput(cityInput, city);

		if (isCityChoiceValid) {
			homeHandler(city);
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

		// As we can receive en error in the call, reset if input change
		form.classList.add("valid");
		form.classList.remove("invalid");

		if (e.target.id === "city-input") checkInput(cityInput, city);
	});
};
export default home;