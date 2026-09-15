import { format } from "date-fns";
import weatherConditions from "./utils/cond_icons_mapping";

// TODO: Maybe full date like design 

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

export const displayTodaySection = (data, unitPreference) => {
	const imgEl = document.querySelector(".today-section__img");
	const cityEL = document.querySelector(".today-card__city");
	const dateEl = document.querySelector(".today-card__date");
	const tempEl = document.querySelector(".today-card__temp");
	const unitEL = document.querySelector(".today-card__unit");
	const feelsLikeEl = document.querySelector(".today-card__feels-like");

	const formattedDate = displayCurrentDate(data);

	cityEL.textContent = data.location.name;
	dateEl.textContent = formattedDate;

	// ? Need to refactor: seems a bit long and redundant ?
	tempEl.textContent = (unitPreference === "celsius") ? data.current.temp_c : data.current.temp_f;
	unitEL.textContent = (unitPreference === "celsius") ? "°C" : "°F";
	feelsLikeEl.textContent = (unitPreference === "celsius") ? `Feels like ${data.current.feelslike_c}°` : `Feels like ${data.current.feelslike_f}°`;

	const imagePath = getWeatherIcons(data.current.is_day, data.current.condition.code);
	imgEl.src = imagePath;
	imgEl.alt = data.current.condition.text;
};