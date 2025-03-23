import {format } from 'date-fns';

export const displayMain = (data) => {
  const mainImg = document.querySelector('.main-img');
  const mainCity = document.querySelector('.main-city');
  const mainTemp = document.querySelector('.main-temp');

  const formatDate = data.current.last_updated;
  console.log(formatDate);
  // mainDate.textContent = formatDate.slice(0, 11); // format date

  mainCity.textContent = data.location.name;
  mainTemp.textContent = `${data.current.temp_c}°c`;

  mainImg.src = data.current.condition.icon;
  mainImg.alt = data.current.condition.text;
};

export const displayCurrentDate = () => {
  const date = new Date();
  const formatedDate = format(date, 'EEEE, do LLLL');

  const mainDate = document.querySelector('.main-date');
  mainDate.textContent = formatedDate;
};

export const displayFooter = (data) => {
  // NEED TO FIND A BETTER WAY => getWeather
  const timeSection1 = document.querySelector('.time-section-1');
  const timeSection2 = document.querySelector('.time-section-2');
  const timeSection3 = document.querySelector('.time-section-3');
  const timeSection4 = document.querySelector('.time-section-4');

  // time section data
  const timeSection1Path = data.forecast.forecastday[0].hour[6];
  const timeSection1Date = timeSection1Path.time;
  timeSection1.querySelector('.time').textContent = timeSection1Date.slice(11, 16);
  // childSection1.querySelector('.img').src = childSection1Path.condition.icon;
  if (timeSection1Path.condition.text === 'Partly Cloudy ') {
    timeSection1.querySelector('.img').src = '/dist/images/Sun.svg';
  }

  timeSection1.querySelector('.img').alt = timeSection1Path.condition.text;
  timeSection1.querySelector('.temp').textContent = `${timeSection1Path.temp_c}°c`;

  const timeSection2Path = data.forecast.forecastday[0].hour[12];
  const timeSection2Date = timeSection2Path.time;
  timeSection2.querySelector('.time').textContent = timeSection2Date.slice(11, 16);
  timeSection2.querySelector('.img').src = timeSection2Path.condition.icon;
  console.log(timeSection2Path.condition.icon);
  timeSection2.querySelector('.img').alt = timeSection2Path.condition.text;
  timeSection2.querySelector('.temp').textContent = `${timeSection2Path.temp_c}°c`;

  const timeSection3Path = data.forecast.forecastday[0].hour[16];
  const timeSection3Date = timeSection3Path.time;
  timeSection3.querySelector('.time').textContent = timeSection3Date.slice(11, 16);
  timeSection3.querySelector('.img').src = timeSection3Path.condition.icon;
  console.log(timeSection3Path.condition.icon);
  timeSection3.querySelector('.img').alt = timeSection3Path.condition.text;
  timeSection3.querySelector('.temp').textContent = `${timeSection3Path.temp_c}°c`;

  const timeSection4Path = data.forecast.forecastday[0].hour[21];
  const timeSection4Date = timeSection4Path.time;
  timeSection4.querySelector('.time').textContent = timeSection4Date.slice(11, 16);
  timeSection4.querySelector('.img').src = timeSection4Path.condition.icon;
  timeSection4.querySelector('.img').alt = timeSection4Path.condition.text;
  timeSection4.querySelector('.temp').textContent = `${timeSection4Path.temp_c}°c`;
};
