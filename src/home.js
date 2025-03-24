// eslint-disable prefer-destructuring
import * as domHandler from './dom_handler';

const home = () => {
  const form = document.querySelector('#form');
  const cityInput = document.querySelector('#city-input');
  const submitButton = document.querySelector('.submit-button');

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
      showError(cityInput, '*Choose a city');
    } else if (!isCityValid()) {
      showError(cityInput, '*Invalid city name');
    } else {
      showSuccess(cityInput);
      valid = true;
    }
    return valid;
  };

  const url = 'https://api.weatherapi.com/v1/forecast.json?';
  const key = 'bce6611d55994183931152601230107';

  async function getWeather(cityChoice) {
    try {
      const response = await fetch(`${url}key=${key}&q=${cityChoice}&days=8&aqi=no&alerts=no`, { mode: 'cors' });
      if (!response.ok) {
        throw new Error(`HTTP error, status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);

      domHandler.displayMain(data);
      domHandler.displayCurrentDate();
      domHandler.displayFooter(data);
    } catch (error) { // re-throwing the error, ensure error is propagated up the call stack
      console.error('An error occurred while fetching data:', error);

      form.classList.add('invalid');
      form.classList.remove('valid');
      checkInput();

      throw error;
    }
  }

  // initialization
  getWeather('Seoul');

  function formHandler() {
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
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formHandler();
  });

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    formHandler();
  });

  form.addEventListener('input', (e) => {
    form.classList.add('valid'); // As we can receive en error in the call, reset if input change
    form.classList.remove('invalid');

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
