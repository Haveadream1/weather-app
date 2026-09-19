# Weather PWA
![Static Badge](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=flat&logo=javascript&labelColor=white)
![Static Badge](https://img.shields.io/badge/HTML5-%23E34F26?style=flat&logo=html5&labelColor=white)
![Static Badge](https://img.shields.io/badge/CSS-%23663399?style=flat&logo=css&labelColor=%23663399)

The weather project displays the weather of any location we have entered, it shows in terms of temperature as well as how the sky looks.  
We have different display; the main is the current weather, and we also have a prediction of today's weather with four main times of the day.

## Features :bulb:
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

## Performance and accessibility :mega:


The purpose of this project is to practice the API call and incorporate linter and formatter.

## Live Preview :rocket:
[Weather App](https://weather-pwa2.netlify.app/)

## To-dos :construction:

## Project hierarchy
1. dist/: contain the code bundled with webpack (collection of compiled files to make website faster)
2. src/: contain the source code
1. dom_handler: manage the manipulation of the Document Object Model
2. home: contains the application logic
3. index: entrance point

## Known issues
### Notes
* Need to keep in mind the time of the data save
* Should lang change depending on geolocation language ?
* Fixed the PWA errors listed in 'Inspect: application'
* Fix errors from Wave report (explain why we keep similar alt warnings)

Localcache will have 3 entries:
1. WeatherClass
2. Array with the 3 last location searches
3. Unit preference: C/F

## Credits :link:
* [Meteoicons](https://meteocons.com/)  
* [Lucidicons](https://lucide.dev/)  
* [Weather API](https://www.weatherapi.com/)    
* [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)    
* [UV Index infos](https://en.wikipedia.org/wiki/Ultraviolet_index)    
* [Thermal Range spectrum: forum explanation](https://discussions.apple.com/thread/253179820?sortBy=rank)
