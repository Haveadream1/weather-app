const home = () => {
  const cityText = document.querySelector('.city-text');
  const cityInputEl = document.querySelector('#city-input');
  const form = document.querySelector('#form');

  const apiKey = 'bce6611d55994183931152601230107';
  const apiUrl = 'https://api.weatherapi.com/v1/forecast.json?';
  // const KEY = 'https://api.weatherapi.com/v1/forecast.json?key=bce6611d55994183931152601230107&q=Seoul&days=1&aqi=no&alerts=no'

  async function getWeather() {
    const cityChoice = cityInputEl.value.trim();
    const response = await fetch(`${apiUrl}key=${apiKey}&q=${cityChoice}&days=1&aqi=no&alerts=no`, { mode: 'cors' });
    const data = await response.json();
    console.log(data);
    cityText.textContent = data.location.name;
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
