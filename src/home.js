// eslint-disable prefer-destructuring
const home = () => {
  const form = document.querySelector('#form');
  const cityInput = document.querySelector('#city-input');

  const mainImg = document.querySelector('.main-img');
  const mainCity = document.querySelector('.main-city');
  const mainTemp = document.querySelector('.main-temp');


  // NEED TO FIND A BETTER WAY => getWeather
  const childSection1 = document.querySelector('.time-section1');
  const childSection2 = document.querySelector('.time-section2');
  const childSection3 = document.querySelector('.time-section3');
  const childSection4 = document.querySelector('.time-section4');

  // CREATE A SMALL
  const apiKey = 'bce6611d55994183931152601230107';
  const apiUrl = 'https://api.weatherapi.com/v1/forecast.json?';

  async function getWeather(cityChoice) {
    const response = await fetch(`${apiUrl}key=${apiKey}&q=${cityChoice}&days=8&aqi=no&alerts=no`, { mode: 'cors' });
    const data = await response.json();

    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      form.classList = 'invalid';

      // ERROR
      checkInput(); // check form validity if code error

      throw new Error(message);
    }
    console.log(data);

    mainCity.textContent = data.location.name;
    const formatDate = data.current.last_updated;
    // mainDate.textContent = formatDate.slice(0, 11); // format date

    mainTemp.textContent = `${data.current.temp_c}°c`;

    mainImg.src = data.current.condition.icon;
    mainImg.alt = data.current.condition.text;

    // time section data
    const childSection1Path = data.forecast.forecastday[0].hour[6];
    const childSection1Date = childSection1Path.time;
    childSection1.querySelector('.time').textContent = childSection1Date.slice(11, 16);
    childSection1.querySelector('.img').src = childSection1Path.condition.icon;
    childSection1.querySelector('.img').alt = childSection1Path.condition.text;
    childSection1.querySelector('.temp').textContent = `${childSection1Path.temp_c}°c`;

    const childSection2Path = data.forecast.forecastday[0].hour[12];
    const childSection2Date = childSection2Path.time;
    childSection2.querySelector('.time').textContent = childSection2Date.slice(11, 16);
    childSection2.querySelector('.img').src = childSection2Path.condition.icon;
    childSection2.querySelector('.img').alt = childSection2Path.condition.text;
    childSection2.querySelector('.temp').textContent = `${childSection2Path.temp_c}°c`;

    const childSection3Path = data.forecast.forecastday[0].hour[16];
    const childSection3Date = childSection3Path.time;
    childSection3.querySelector('.time').textContent = childSection3Date.slice(11, 16);
    childSection3.querySelector('.img').src = childSection3Path.condition.icon;
    childSection3.querySelector('.img').alt = childSection3Path.condition.text;
    childSection3.querySelector('.temp').textContent = `${childSection3Path.temp_c}°c`;

    const childSection4Path = data.forecast.forecastday[0].hour[21];
    const childSection4Date = childSection4Path.time;
    childSection4.querySelector('.time').textContent = childSection4Date.slice(11, 16);
    childSection4.querySelector('.img').src = childSection4Path.condition.icon;
    childSection4.querySelector('.img').alt = childSection4Path.condition.text;
    childSection4.querySelector('.temp').textContent = `${childSection4Path.temp_c}°c`;
  }

  // initialization
  getWeather('Seoul');

  const isRequired = (value) => {
    if (value === '') {
      return false;
    }
    return true;
  };

  const isCityValid = () => {
    const formClass = document.querySelector('#form').className;
    if (formClass === 'invalid') {
      return false;
    }
    return true;
  };

  const showError = (input, message) => {
    const fieldSet = input.parentElement;
    const inputForm = fieldSet.querySelector('input');
    inputForm.classList.add('error');
    inputForm.classList.remove('success');

    const error = fieldSet.querySelector('small');
    error.textContent = message;
  };

  const showSuccess = (input) => {
    const fieldSet = input.parentElement;
    const inputForm = fieldSet.querySelector('input');
    inputForm.classList.remove('error');
    inputForm.classList.add('success');

    const error = fieldSet.querySelector('small');
    error.textContent = '';
  };

  const checkInput = () => {
    let valid = false;
    const input = cityInput.value.trim();

    if (!isRequired(input)) {
      showError(cityInput, 'Choose a city');
    } else if (!isCityValid()) {
      showError(cityInput, 'Invalid city name');
    } else {
      showSuccess(cityInput);
      valid = true;
    }
    return valid;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isCityChoiceValid = checkInput();
    const isFormValid = isCityChoiceValid;

    if (isFormValid) {
      const cityChoice = cityInput.value.trim();
      getWeather(cityChoice);

      const input = document.querySelector('#city-input');
      input.classList.remove('success');

      console.log('Valid form');
    } else {
      console.log('Invalid form');
    }
  });

  form.addEventListener('input', (e) => {
    switch (e.target.id) {
      case 'city-input':
        checkInput();
        break;
      default: // Default case to avoid error eslint
    }
  });
};
export default home;

/*  Header section :
        Next to Seoul put a button to change location
        Depend on the location value, take data and display it

    Red section :
        Display the image that depend on the actual weather

    Purple section :
        Display the weather for the day
        Hour + t*
*/
