const home = () => {
  // issue console
  const cityChoice = document.querySelector('.city-choice');
  console.log('dedw')

  async function getWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=bce6611d55994183931152601230107&q=Seoul&days=1&aqi=no&alerts=no', { mode: 'cors' });
    const data = await response.json();
    console.log(data);
    // cityChoice.textContent = title.location.name.value();
  }
  getWeather();
};
/*
  async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {mode: 'cors'});
    const catData = await response.json();
    img.src = catData.data.images.original.url;
  }

/*  Beige section :
        Next to Seoul put a button to change location
        Depend on the location value, take data and display it

    Red section :
        Display the image that depend on the actual weather

    Purple section :
        Display the weather for the week
        Day + t*
*/

export default home;
