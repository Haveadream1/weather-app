const home = () => {
  const cityText = document.querySelector('.city-choice');
  const cityChoice = 'Seoul';
  const apiKey = 'bce6611d55994183931152601230107';
  const apiUrl = 'https://api.weatherapi.com/v1/forecast.json?';
  // const KEY = 'https://api.weatherapi.com/v1/forecast.json?key=bce6611d55994183931152601230107&q=Seoul&days=1&aqi=no&alerts=no'

  async function getWeather() {
    const response = await fetch(`${apiUrl}key=${apiKey}&q=${cityChoice}&days=1&aqi=no&alerts=no`, { mode: 'cors' });
    const data = await response.json();
    console.log(data);
    cityText.textContent = data.location.name;
  }
  getWeather();
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
