/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
import { format } from "date-fns";
import sunImage from "./assets/Sun.svg";
import rainImage from "./assets/Rain.svg";
import cloudImage from "./assets/Cloud.svg";
import overcastImage from "./assets/Overcast.svg";

function getWeatherImage(condition) {
  const conditionText = condition.text;
  if (conditionText === "Cloudy" || conditionText === "Mist") {
    return cloudImage;
  } else if (
    conditionText === "Partly Cloudy " ||
    conditionText === "Overcast " ||
    conditionText === "Partly Cloudy"
  ) {
    return overcastImage;
  } else if (
    conditionText === "Sunny" ||
    conditionText === "Clear " ||
    conditionText === "Clear"
  ) {
    return sunImage;
  } else if (
    conditionText === "Rain" ||
    conditionText === "Patchy rain nearby"
  ) {
    return rainImage;
  } else {
    return condition.icon; // Handle other conditions with api icon
  }
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

export const displayMain = (data) => {
  const imgEl = document.querySelector(".main-img");
  const cityEL = document.querySelector(".main-city");
  const tempEl = document.querySelector(".main-temp");
  const dateEl = document.querySelector(".main-date");

  const formattedDate = displayCurrentDate(data);

  cityEL.textContent = data.location.name;
  tempEl.textContent = `${data.current.temp_c}°c`;
  dateEl.textContent = formattedDate;

  const mainImagePath = getWeatherImage(data.current.condition);
  imgEl.src = mainImagePath;
  imgEl.alt = data.current.condition.text;
};

export const displayTimeSection = (data, timeObject, timeSections) => {
  for (let i = 0; i < 4; i+=1) {
    const {day} = timeObject[i];
    const {hour} = timeObject[i];

    const path = data.forecast.forecastday[day].hour[hour];
    const date = path.time;
    const image = getWeatherImage(path.condition);

    // Avoid eslint errors assignment to function parameter
    const timeSection = timeSections[i];

    timeSection.querySelector(".img").src = image;
    timeSection.querySelector(".img").alt = path.condition.text;
    
    // Clean format while slicing the full date instead of formatting hour constante
    timeSection.querySelector(".time").textContent = date.slice(11, 16);
    timeSection.querySelector(".temp").textContent = `${path.temp_c}°c`;
  }
}
