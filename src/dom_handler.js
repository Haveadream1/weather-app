/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
import {format } from 'date-fns';

function getWeatherImage(condition) {
  console.log(condition);
  if (condition === 'Cloudy') {
    return '/dist/images/Cloud.svg';
  } else if (condition === 'Partly Cloudy ') {
    return '/dist/images/Overcast.svg';
  } else if (condition === 'Sunny' || condition === 'Clear ') {
    return '/dist/images/Sun.svg';
  } else if (condition === 'Rain') {
    return '/dist/images/Rain.svg';
  }
}

export const displayMain = (data) => {
  const mainImg = document.querySelector('.main-img');
  const mainCity = document.querySelector('.main-city');
  const mainTemp = document.querySelector('.main-temp');

  const formatDate = data.current.last_updated;
  console.log(formatDate);
  // mainDate.textContent = formatDate.slice(0, 11); // format date

  mainCity.textContent = data.location.name;
  mainTemp.textContent = `${data.current.temp_c}°c`;

  const mainImagePath = getWeatherImage(data.current.condition.text);
  mainImg.src = mainImagePath;
  mainImg.alt = data.current.condition.text;
};

export const displayCurrentDate = () => {
  const date = new Date();
  const formatedDate = format(date, 'EEEE, do LLLL');

  const mainDate = document.querySelector('.main-date');
  mainDate.textContent = formatedDate;
};

// const conditions = ['Sunny', 'Clear ', 'Partly Cloudy '];

export const displayFooter = (data) => {
  const timeSection1 = document.querySelector('.time-section-1');
  const timeSection2 = document.querySelector('.time-section-2');
  const timeSection3 = document.querySelector('.time-section-3');
  const timeSection4 = document.querySelector('.time-section-4');

  // 1st Cell
  const timeSection1Path = data.forecast.forecastday[0].hour[6];
  const timeSection1Date = timeSection1Path.time;
  const imagePath1 = getWeatherImage(timeSection1Path.condition.text);

  timeSection1.querySelector('.img').src = imagePath1;
  timeSection1.querySelector('.time').textContent = timeSection1Date.slice(11, 16);
  timeSection1.querySelector('.img').alt = timeSection1Path.condition.text;
  timeSection1.querySelector('.temp').textContent = `${timeSection1Path.temp_c}°c`;

  // 2nd Cell
  const timeSection2Path = data.forecast.forecastday[0].hour[12];
  const timeSection2Date = timeSection2Path.time;
  const imagePath2 = getWeatherImage(timeSection2Path.condition.text);

  timeSection2.querySelector('.img').src = imagePath2;
  timeSection2.querySelector('.time').textContent = timeSection2Date.slice(11, 16);
  timeSection2.querySelector('.img').src = timeSection2Path.condition.icon;

  timeSection2.querySelector('.img').alt = timeSection2Path.condition.text;
  timeSection2.querySelector('.temp').textContent = `${timeSection2Path.temp_c}°c`;

  // 3rd Cell
  const timeSection3Path = data.forecast.forecastday[0].hour[16];
  const timeSection3Date = timeSection3Path.time;
  const imagePath3 = getWeatherImage(timeSection3Path.condition.text);

  timeSection3.querySelector('.img').src = imagePath3;
  timeSection3.querySelector('.time').textContent = timeSection3Date.slice(11, 16);
  timeSection3.querySelector('.img').src = timeSection3Path.condition.icon;

  timeSection3.querySelector('.img').alt = timeSection3Path.condition.text;
  timeSection3.querySelector('.temp').textContent = `${timeSection3Path.temp_c}°c`;

  // 4th Cell
  const timeSection4Path = data.forecast.forecastday[0].hour[21];
  const timeSection4Date = timeSection4Path.time;
  const imagePath4 = getWeatherImage(timeSection4Path.condition.text);

  timeSection4.querySelector('.img').src = '/dist/images/Rain.svg';
  console.log(imagePath4);
  timeSection4.querySelector('.time').textContent = timeSection4Date.slice(11, 16);
  timeSection4.querySelector('.img').src = timeSection4Path.condition.icon;
  timeSection4.querySelector('.img').alt = timeSection4Path.condition.text;
  timeSection4.querySelector('.temp').textContent = `${timeSection4Path.temp_c}°c`;
};
