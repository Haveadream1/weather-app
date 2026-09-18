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
* Check is it performant to only pass the data needed or okay to pass all data as params

## Project hierarchy
1. dist/: contain the code bundled with webpack (collection of compiled files to make website faster)
2. src/: contain the source code
1. dom_handler: manage the manipulation of the Document Object Model
2. home: contains the application logic
3. index: entrance point

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
* Need to keep in mind the time of the data save
* Today : city and temp on same line
* Maybe full date like design 
* Small dot like green or yellow to mean weather is freshly fetched ?
* Should lang change depending on geolocation language ?
* Fixed the PWA errors listed in 'Inspect: application'
* Fix errors from Wave report (explain why we keep similar alt warnings)

Localcache will have 3 entries:
1. WeatherClass
2. Array with the 3 last location searches
3. Unit preference: C/F
