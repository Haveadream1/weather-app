// TODO: fix eslint warnings
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
import { format } from "date-fns";

import weatherConditions from "./utils/cond_icons_mapping";

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

export const displayMain = (data, unitPreference) => {
  const imgEl = document.querySelector(".main-img");
  const cityEL = document.querySelector(".main-city");
  const tempEl = document.querySelector(".main-temp");
  const dateEl = document.querySelector(".main-date");

  const formattedDate = displayCurrentDate(data);

  cityEL.textContent = data.location.name;
  tempEl.textContent = (unitPreference === "celsius") ? `${data.current.temp_c}°C` : `${data.current.temp_f}°F`;
  dateEl.textContent = formattedDate;

  const imagePath = getWeatherIcons(data.current.is_day, data.current.condition.code);
  imgEl.src = imagePath;
  imgEl.alt = data.current.condition.text;
};

export const displayTimeSection = (data, timeObject, timeSections, unitPreference) => {
  for (let i = 0; i < 4; i+=1) {
    const {day} = timeObject[i];
    const {hour} = timeObject[i];

    const path = data.forecast.forecastday[day].hour[hour];
    const date = path.time;
    const image = getWeatherIcons(path.condition.is_day, path.condition.code);

    // Avoid eslint errors assignment to function parameter
    const timeSection = timeSections[i];

    timeSection.querySelector(".img").src = image;
    timeSection.querySelector(".img").alt = path.condition.text;
    
    // Clean format while slicing the full date instead of formatting hour constante
    timeSection.querySelector(".time").textContent = date.slice(11, 16);
    timeSection.querySelector(".temp").textContent = (unitPreference === "celsius") ? `${path.temp_c}°C` : `${path.temp_f}°F`;
  }
}

export const showLoader = () => {
  document.querySelector("#loader").classList.remove("hidden");
}

export const hideLoader = () => {
  document.querySelector("#loader").classList.add("hidden");
}