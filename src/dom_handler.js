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

export const displayMain = (data) => {
  const mainImg = document.querySelector(".main-img");
  const mainCity = document.querySelector(".main-city");
  const mainTemp = document.querySelector(".main-temp");

  const formatDate = data.current.last_updated;
  console.log(formatDate);
  // mainDate.textContent = formatDate.slice(0, 11); // format date

  mainCity.textContent = data.location.name;
  mainTemp.textContent = `${data.current.temp_c}°c`;

  const mainImagePath = getWeatherImage(data.current.condition);
  mainImg.src = mainImagePath;
  mainImg.alt = data.current.condition.text;
};

export const displayCurrentDate = () => {
  const date = new Date();
  const formatedDate = format(date, "EEEE, do LLLL");

  const mainDate = document.querySelector(".main-date");
  mainDate.textContent = formatedDate;
};

export const displayTimeSection = (data, day, hours, timeSections) => {
  for (let i = 0; i < 4; i+=1) {
    const path = data.forecast.forecastday[day].hour[hours[i]];
    const date = path.time;
    const image = getWeatherImage(path.condition);

    // Avoid eslint errors assignment to function parameter
    const timeSection = timeSections[i];

    timeSection.querySelector(".img").src = image;
    timeSection.querySelector(".img").alt = path.condition.text;
    
    // Slice the full date to get only the text of time
    timeSection.querySelector(".time").textContent = date.slice(11, 16);
    timeSection.querySelector(".temp").textContent = `${path.temp_c}°c`;
  }
}
