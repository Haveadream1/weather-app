import { format } from "date-fns";
import weatherConditions from "./utils/weather_icons";

// TODO: Maybe full date like design 
// TODO: choose between max_wind or wind
// TODO: Need to decide between ° or °C/F

const getWeatherIcons = (isDay, code) => {
	// Return default in case icon cannot be found
	if (!weatherConditions[code].day || !weatherConditions[code].night) return weatherConditions[code].day;

	// Display different icons depending on day/night time
	return (isDay === 0) ? weatherConditions[code].day : weatherConditions[code].night;
}

const formatDate = (data, forecastDate) => {
	// Fetch the local time zone to display the correct local date
	const localTimeZone = data.location.tz_id;

	const date = (forecastDate) ? new Date(forecastDate) : new Date();
	const localTime = new Intl.DateTimeFormat("en-us", {
		timeZone: localTimeZone,
		dateStyle: "full"
	}).format(date);

	// Full name of the day of the week - Day of the month with suffix - Full name of the month
	// Monday, 7th September OR // Monday
	return (!forecastDate) ? format(localTime, "EEEE, do LLLL") : format(localTime, "EEEE");
};

const determineUvLabel = (uv) => {
	// Based on the Global Solar UV Index (UVI)
	if (uv <= 2) return "Low";
	if (uv <= 5) return "Moderate";
	if (uv <= 7) return "High";
	if (uv <= 10) return "Very High";
	
	return "Extreme";
};

const getGlobalRange = (data) => {
	const path = data.forecast;
	const minArr = [];
	const maxArr = [];

	path.forecastday.forEach((el) => {
		minArr.push(el.day.mintemp_c);
		maxArr.push(el.day.maxtemp_c);
	})

	const globalMin = Math.min(...minArr);
	const globalMax = Math.max(...maxArr);
	const globalRange = globalMax - globalMin;
	
	return { globalMin , globalRange}
}

// Calculate for each day where the min/max temp are situed on the global range
const getBarPosition = (dayMin, dayMax, globalMin, globalRange) => {
	const leftPercent = ((dayMin - globalMin) / globalRange) * 100;
	const widthPercent = ((dayMax - dayMin) / globalRange) * 100;
	return { leftPercent, widthPercent};
}

export const displayErrorMessage = (message) => {
	const small = document.querySelector(".form__small");
	if (small.textContent) small.textContent = "";

	const smallSpan = document.createElement("span");
	smallSpan.classList.add("form__small--red-dot");
	smallSpan.textContent = "*";
	small.appendChild(smallSpan);
	small.insertAdjacentText("beforeend", message);
}

export const switchUnitButtonOnReload = (savedUnit) => {
	// On refresh, the saved unit in localStorage can be different than the default in HTML template, so switch
	const defaultActiveBtn = document.querySelector(".unit-switch__btn--is-active");
	if (defaultActiveBtn.getAttribute("data-unit") !== savedUnit) {
		defaultActiveBtn.setAttribute("aria-pressed", "false");
		defaultActiveBtn.classList.remove("unit-switch__btn--is-active");

		// Can only happen to fahrenheit button as celsius is the default active
		const newActiveBtn = document.querySelector("#fahrenheit-btn");
		newActiveBtn.setAttribute("aria-pressed", "true");
		newActiveBtn.classList.add("unit-switch__btn--is-active");
	}
}

export const handleUnitButton = (element) => {
	// HTML template should have a default active button
	const previousActiveBtn = document.querySelector(".unit-switch__btn--is-active");
	previousActiveBtn.setAttribute("aria-pressed", "false");
	previousActiveBtn.classList.remove("unit-switch__btn--is-active");

	// Target always the button element not what we might click inside the button
	element.setAttribute("aria-pressed", "true");
	element.classList.add("unit-switch__btn--is-active");
	return  element.getAttribute("data-unit");
}

export const showLoader = () => {
  document.querySelector("#loader").classList.remove("loader--hidden");
}

export const hideLoader = () => {
  document.querySelector("#loader").classList.add("loader--hidden");
}

export const displayTodaySection = (data, unit) => {
	const imgEl = document.querySelector(".today-section__img");
	const cityEL = document.querySelector(".today-card__city");
	const dateEl = document.querySelector(".today-card__date");
	const tempEl = document.querySelector(".today-card__temp");
	const unitEL = document.querySelector(".today-card__unit");
	const feelsLikeEl = document.querySelector(".today-card__feels-like");

	cityEL.textContent = data.location.name;
	dateEl.textContent = formatDate(data);

	const path = data.current;

	// ? Need to refactor: seems a bit long and redundant ?
	tempEl.textContent = (unit === "celsius") ? path.temp_c : path.temp_f;
	unitEL.textContent = (unit === "celsius") ? "°C" : "°F";
	feelsLikeEl.textContent = (unit === "celsius") ? `Feels like ${path.feelslike_c}°` : `Feels like ${path.feelslike_f}°`;

	const imagePath = getWeatherIcons(path.is_day, path.condition.code);
	imgEl.src = imagePath;
	imgEl.alt = path.condition.text;
};

export const displayMetricsIcon = () => {
	const humidityIcon = document.querySelector("#humidity-icon");
	const windIcon = document.querySelector("#wind-icon");
	const uvIcon = document.querySelector("#uv-icon");

	humidityIcon.src = weatherConditions[7000].humidity;
	windIcon.src = weatherConditions[7000].wind;
	uvIcon.src = weatherConditions[7000].uv;
}

export const displayMetricsSection = (data, unit) => {
	const humidityEl = document.querySelector("#humidity-value");
	const windEl = document.querySelector("#wind-value");
	const uvEl = document.querySelector("#uv-value");

	const path = data.current;
	humidityEl.textContent =  `${path.humidity}%`;
	windEl.textContent = (unit === "celsius") ? `${path.wind_kph}km/h` : `${path.wind_mph}mph`;

	// UV at the exact time is not retrievable so use UV of the day
	const uvValue = data.forecast.forecastday[0].day.uv;
	const uvLabel = determineUvLabel(uvValue);
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

export const displayDailySection = (data, unit) => {
	const dailyForecast = document.querySelectorAll(".daily-forecast");
	const dailyItem = document.querySelectorAll(".daily-forecast");

	const {globalMin, globalRange} = getGlobalRange(data);

	// With the API, limited to 3 day forecast including (today, next, next-next day)
	for (let i = 0; i < 3; i+=1) {
		const path = data.forecast.forecastday[i].day;

		// With the timeZone and the date, format it to fetch the day of the week
		const day = dailyForecast[i].querySelector(".daily-forecast__day");
		day.textContent = formatDate(data, data.forecast.forecastday[i].date);

		const item = dailyItem[i];

		// For forecast, display the daytime's icon
		const image = getWeatherIcons(0, path.condition.code);

		item.querySelector(".daily-item__icon").src = image;
		item.querySelector(".daily-item__icon").alt = path.condition.text;
		item.querySelector(".daily-item__temp-min").textContent = (unit === "celsius") ? `${path.mintemp_c}°C` : `${path.mintemp_f}°F`;
		item.querySelector(".daily-item__temp-max").textContent = (unit === "celsius") ? `${path.maxtemp_c}°C` : `${path.maxtemp_f}°F`;
	
		// Thermal Range Spectrum represents a range of heat temparatures classified by length
		const { leftPercent, widthPercent } = getBarPosition(path.mintemp_c, path.maxtemp_c, globalMin, globalRange);
		item.querySelector(".daily-item__bar").style.marginLeft = `${leftPercent}%`;
		item.querySelector(".daily-item__bar").style.width = `${widthPercent}%`;
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