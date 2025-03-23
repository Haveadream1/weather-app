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
  const childSection1 = document.querySelector('.time-section-1');
  const childSection2 = document.querySelector('.time-section-2');
  const childSection3 = document.querySelector('.time-section-3');
  const childSection4 = document.querySelector('.time-section-4');

  // time section data
  const childSection1Path = data.forecast.forecastday[0].hour[6];
  const childSection1Date = childSection1Path.time;
  childSection1.querySelector('.time').textContent = childSection1Date.slice(11, 16);
  // childSection1.querySelector('.img').src = childSection1Path.condition.icon;
  if (childSection1Path.condition.text === 'Partly Cloudy ') {
    childSection1.querySelector('.img').src = '/dist/images/Sun.svg';
  }

  childSection1.querySelector('.img').alt = childSection1Path.condition.text;
  childSection1.querySelector('.temp').textContent = `${childSection1Path.temp_c}°c`;

  const childSection2Path = data.forecast.forecastday[0].hour[12];
  const childSection2Date = childSection2Path.time;
  childSection2.querySelector('.time').textContent = childSection2Date.slice(11, 16);
  childSection2.querySelector('.img').src = childSection2Path.condition.icon;
  console.log(childSection2Path.condition.icon);
  childSection2.querySelector('.img').alt = childSection2Path.condition.text;
  childSection2.querySelector('.temp').textContent = `${childSection2Path.temp_c}°c`;

  const childSection3Path = data.forecast.forecastday[0].hour[16];
  const childSection3Date = childSection3Path.time;
  childSection3.querySelector('.time').textContent = childSection3Date.slice(11, 16);
  childSection3.querySelector('.img').src = childSection3Path.condition.icon;
  console.log(childSection3Path.condition.icon);
  childSection3.querySelector('.img').alt = childSection3Path.condition.text;
  childSection3.querySelector('.temp').textContent = `${childSection3Path.temp_c}°c`;

  const childSection4Path = data.forecast.forecastday[0].hour[21];
  const childSection4Date = childSection4Path.time;
  childSection4.querySelector('.time').textContent = childSection4Date.slice(11, 16);
  childSection4.querySelector('.img').src = childSection4Path.condition.icon;
  childSection4.querySelector('.img').alt = childSection4Path.condition.text;
  childSection4.querySelector('.temp').textContent = `${childSection4Path.temp_c}°c`;
};
