# Weather project

The weather project displays the weather of any location we have entered, it shows in terms of temperature as well as how the sky looks.  
We have different display; the main is the current weather, and we also have a prediction of today's weather with four main times of the day.

## Goal

The purpose of this project is to practice the API call and incorporate linter and formatter.

## Preview

[Weather online](https://weather-pwa2.netlify.app/)

## Credits 
[Meteoicons](https://meteocons.com/)  
[Lucidicons](https://lucide.dev/)  
[Weather API](https://www.weatherapi.com/)    
[Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)    
[UV Index infos](https://en.wikipedia.org/wiki/Ultraviolet_index)    
[Thermal Range spectrum: forum explanation](https://discussions.apple.com/thread/253179820?sortBy=rank)

## To-dos
* Disable the submit button while submit
* Check if loader can be more pretty on display (go on and off too fast)
* Check hidden icon that pop up on refresh (instead of popup, it can be like show at the top/ same space as the refresh)
* Check all paddings
* Check external margins
* Check is it performant to only pass the data needed or okay to pass all data as params
* Check if we need env-safe-padding

## Project hierarchy
1. dist/: contain the code bundled with webpack (collection of compiled files to make website faster)
2. src/: contain the source code
1. dom_handler: manage the manipulation of the Document Object Model
2. home: contains the application logic
3. index: entrance point

1. API secrety -> Fix issues -> Refactor Code -> Implement new features -> Re-design for mobile -> Prepare for PWA -> Refactor README

## Known issues

## Features
* Local storage of recently visited cities, unit and data (avoid fetch when switching between units)
* Geolocation
* Use Weather Icon library, match code with icon path
* Switch between unit preferences
* BEM
* Format date with DateFNS
* Calculate localtime with fetched Timezone
* Fetch data on WeatherAPI
* Thermal Range spectrum
* Custom form validation
* Workbox simplifies the building process of Progressive Web Apps by managing service workers and caching logic

### Notes
* We will use a class to cache the weather for a recent city 
* Need to keep in mind the time of the data save
* Maybe we don't need a success class to display green, only the error
* Today : city and temp on same line
* For now small element used for erros, but maybe better to use style of alert
* Maybe full date like design 
* Need to decide between ° or °C/F
* Small dot like green or yellow to mean weather is freshly fetched ?
* Should lang change depending on geolocation language ?

Localcache will have 3 entries:
1. WeatherClass
2. Array with the 3 last location searches
3. Unit preference: C/F
