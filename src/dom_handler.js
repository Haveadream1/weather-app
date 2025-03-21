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
