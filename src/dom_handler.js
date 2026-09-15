import { format } from "date-fns";
import weatherConditions from "./utils/cond_icons_mapping";

// TODO: Maybe full date like design 
// TODO: choose between max_wind or wind
// TODO: Need to decide between ° or °C/F
// ? Metric image is handled on the html template, as icon

const getWeatherIcons = (isDay, code) => {
	// Return default in case icon cannot be found
	if (!weatherConditions[code].day || !weatherConditions[code].night) return weatherConditions[code].day;

	// Display different icons depending on day/night time
	return (isDay === 0) ? weatherConditions[code].day : weatherConditions[code].night;
}

const displayCurrentDate = (data) => {
	// Fetch the local time zone to display the correct local date
	const localTimeZone = data.location.tz_id;

	const date = new Date();
	const localTime = new Intl.DateTimeFormat("en-us", {
		timeZone: localTimeZone,
		dateStyle: "full"
	}).format(date);

	// Full name of the day of the week - Day of the month with suffix - Full name of the month
	// Monday, 7th September
	return format(localTime, "EEEE, do LLLL");
};

const determineUvLabel = (uv) => {
	// Based on the Global Solar UV Index (UVI)
	if (uv <= 2) return "Low";
	if (uv <= 5) return "Moderate";
	if (uv <= 7) return "High";
	if (uv <= 10) return "Very High";
	
	return "Extreme";
};

export const displayTodaySection = (data, unit) => {
	const imgEl = document.querySelector(".today-section__img");
	const cityEL = document.querySelector(".today-card__city");
	const dateEl = document.querySelector(".today-card__date");
	const tempEl = document.querySelector(".today-card__temp");
	const unitEL = document.querySelector(".today-card__unit");
	const feelsLikeEl = document.querySelector(".today-card__feels-like");

	const formattedDate = displayCurrentDate(data);

	cityEL.textContent = data.location.name;
	dateEl.textContent = formattedDate;

	const path = data.current;

	// ? Need to refactor: seems a bit long and redundant ?
	tempEl.textContent = (unit === "celsius") ? path.temp_c : path.temp_f;
	unitEL.textContent = (unit === "celsius") ? "°C" : "°F";
	feelsLikeEl.textContent = (unit === "celsius") ? `Feels like ${path.feelslike_c}°` : `Feels like ${path.feelslike_f}°`;

	const imagePath = getWeatherIcons(path.is_day, path.condition.code);
	imgEl.src = imagePath;
	imgEl.alt = path.condition.text;
};

export const displayMetricsSection = (data, unit) => {
	const humidityEl = document.querySelector("#humidity-value");
	const windEl = document.querySelector("#wind-value");
	const uvEl = document.querySelector("#uv-value");

	const path = data.current;
	humidityEl.textContent =  `${path.humidity}%`;
	windEl.textContent = (unit === "celsius") ? `${path.wind_kph}km/h` : `${path.wind_mph}mph`

	// UV at the exact time is not retrievable so use UV of the day
	const uvValue = data.forecast.forecastday[0].day.uv;
	const uvLabel = determineUvLabel(uvValue)
	uvEl.textContent = `${uvValue}(${uvLabel})`;
}

export const displayHourlySection = (data, timeObject, unit) => {
	const hourlyForecast = document.querySelectorAll(".hourly-forecast");

	for (let i = 0; i < 4; i+=1) {
		const {day} = timeObject[i];
		const {hour} = timeObject[i];

		const path = data.forecast.forecastday[day].hour[hour];
		const date = path.time;
		const image = getWeatherIcons(path.condition.is_day, path.condition.code);

		// Avoid eslint errors assignment to function parameter
		const hourlyItem = hourlyForecast[i];

		hourlyItem.querySelector(".hourly-forecast__icon").src = image;
		hourlyItem.querySelector(".hourly-forecast__icon").alt = path.condition.text;

		// Clean format while slicing the full date instead of formatting hour constante
		hourlyItem.querySelector(".hourly-forecast__time").textContent = date.slice(11, 16);
		hourlyItem.querySelector(".hourly-forecast__temp").textContent = (unit === "celsius") ? `${path.temp_c}°C` : `${path.temp_f}°F`;
	}
}

export const displayTwilightSection = (data) => {
	const sunriseTime = document.querySelector("#sunrise-time");
	const sunsetTime = document.querySelector("#sunset-time");
	const sunriseImg = document.querySelector("#sunrise-image");
	const sunsetImg = document.querySelector("#sunset-image");

	const path = data.forecast.forecastday[0].astro;
	sunriseTime.textContent =  path.sunrise;
	sunsetTime.textContent = path.sunset;

	// No need alt, already defined as decorative icons
	sunriseImg.src = weatherConditions[6000].rise;
	sunsetImg.src = weatherConditions[6000].set;
}