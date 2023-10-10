const home = () => {
  // eslint-disable prefer-destructuring
  const cityInputEl = document.querySelector('#city-input');
  const form = document.querySelector('#form');

  const mainText = document.querySelector('.main-text');
  const mainDate = document.querySelector('.main-date');
  const mainTemp = document.querySelector('.main-temp');
  const mainImg = document.querySelector('.main-img');

  const childSection1 = document.querySelector('.child-section1');
  const childSection2 = document.querySelector('.child-section2');
  const childSection3 = document.querySelector('.child-section3');
  const childSection4 = document.querySelector('.child-section4');

  const apiKey = 'bce6611d55994183931152601230107';
  const apiUrl = 'https://api.weatherapi.com/v1/forecast.json?';
  // const KEY = 'https://api.weatherapi.com/v1/forecast.json?key=bce6611d55994183931152601230107&q=Seoul&days=1&aqi=no&alerts=no'

  async function getWeather() {
    const cityChoice = cityInputEl.value.trim();
    const response = await fetch(`${apiUrl}key=${apiKey}&q=${cityChoice}&days=8&aqi=no&alerts=no`, { mode: 'cors' });
    const data = await response.json();
    console.log(data);

    mainText.textContent = data.location.name;
    const formatDate = data.current.last_updated;
    mainDate.textContent = formatDate.slice(0, 11); // format date
    // call dateAPI
    mainTemp.textContent = `${data.current.temp_c}°c`;

    mainImg.src = data.current.condition.icon;

    // time section data
    const childSection1Path = data.forecast.forecastday[0].hour[6];
    const childSection1Date = childSection1Path.time;
    childSection1.querySelector('.time').textContent = childSection1Date.slice(11, 16);
    childSection1.querySelector('.img').src = childSection1Path.condition.icon;
    childSection1.querySelector('.temp').textContent = `${childSection1Path.temp_c}°c`;

    const childSection2Path = data.forecast.forecastday[0].hour[12];
    const childSection2Date = childSection2Path.time;
    childSection2.querySelector('.time').textContent = childSection2Date.slice(11, 16);
    childSection2.querySelector('.img').src = childSection2Path.condition.icon;
    childSection2.querySelector('.temp').textContent = `${childSection2Path.temp_c}°c`;

    const childSection3Path = data.forecast.forecastday[0].hour[16];
    const childSection3Date = childSection3Path.time;
    childSection3.querySelector('.time').textContent = childSection3Date.slice(11, 16);
    childSection3.querySelector('.img').src = childSection3Path.condition.icon;
    childSection3.querySelector('.temp').textContent = `${childSection3Path.temp_c}°c`;

    const childSection4Path = data.forecast.forecastday[0].hour[21];
    const childSection4Date = childSection4Path.time;
    childSection4.querySelector('.time').textContent = childSection4Date.slice(11, 16);
    childSection4.querySelector('.img').src = childSection4Path.condition.icon;
    childSection4.querySelector('.temp').textContent = `${childSection4Path.temp_c}°c`;
  }

  const isRequired = (value) => {
    if (value === '') {
      return false;
    }
    return true;
  };

  const showError = (input, message) => {
    const formField = input.parentElement;
    const inputForm = formField.querySelector('input');
    inputForm.classList.add('error');
    inputForm.classList.remove('success');

    const error = formField.querySelector('small');
    error.textContent = message;
  };

  const showSuccess = (input) => {
    const fieldSet = input.parentElement;
    const hInput = fieldSet.querySelector('input');
    hInput.classList.remove('error');
    hInput.classList.add('success');

    const error = fieldSet.querySelector('small');
    error.textContent = '';
  };

  const checkInput = () => {
    let valid = false;
    const input = cityInputEl.value.trim();

    if (!isRequired(input)) {
      showError(cityInputEl, 'Choose a city');
    } else {
      showSuccess(cityInputEl);
      valid = true;
    }
    return valid;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isCityChoiceValid = checkInput();
    const isFormValid = isCityChoiceValid;

    if (isFormValid) {
      // run func after valid form
      getWeather();
      console.log('Valid Form');
    } else {
      console.log('Error in the form');
    }
  });

  form.addEventListener('input', (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.id) {
      case 'city-input':
        checkInput();
        break;
    }
  });
};
export default home;

/*  Beige section :
        Next to Seoul put a button to change location
        Depend on the location value, take data and display it

    Red section :
        Display the image that depend on the actual weather

    Purple section :
        Display the weather for the week
        Day + t*
*/
