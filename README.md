# Weather PWA
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Jest](https://img.shields.io/badge/Tested%20with-Jest-C21325?style=flat&logo=jest&logoColor=white)


Progressive Web Application that shows current weather and forecast for any city, installable on mobile with offline support.

## Features :bulb:
* Local storage of recently visited cities, units, and data (avoids refetching when switching units)
* Button for geolocation
* Map weather condition code with icon library
* Unit switching (°C / °F)
* BEM CSS architecture
* Date formatting with DateFNS
* Local time calculated from fetched timezone
* Weather data from WeatherAPI
* Thermal Range spectrum
* Custom form validation
* Workbox-managed service work for offline caching

## Technical highlishts
* **PWA**: Installable mobile application, works offline via Workbox, last-fetched city is cached so weather still displays without a connection
* **Security**: API key is kept out of version control with dotenv-webpack and Netlify environment variables but reach its limit without a server-side proxy
* **Thermal Range spectrum**:
* **Caching strategy**: LocalStorage prevents redundant API calls when toggling units
* **Testing**: Jest unit tests for icon mapping and UV calculation

## Technology stack
HTML, CSS (BEM), Vanilla JS, Webpack, Workbox, WeatherAPI, DateFNS, Meteocons, ...

## Live Preview :rocket:
[Weather App](https://weather-pwa2.netlify.app/)

| Mobile view | Installation |
| :---: | :---: |
| <img width="161" height="340" alt="Mobile view" src="https://github.com/user-attachments/assets/44aa6aac-7d01-4a73-8585-90af95d57a5b" /> | <img width="161" height="340" alt="Installation" src="https://github.com/user-attachments/assets/ccd633be-e5fe-4472-a21d-d28bfb56a88a" /> |

## Performance and accessibility :mega:
Lighthouse and Wave are run before each release to track performance and a11y standards.
* One WAVE alert was flags similar *alt text* on nearby images, this is expected as it is dynamically rendered by the forecast condition

| Lighthouse | Wave |
| :---: | :---: |
| <img width="363" height="120" alt="Lighthouse results" src="https://github.com/user-attachments/assets/f1df03c3-f8ee-49ba-801d-ee50808018ab" /> | <img width="245" height="340" alt="Wave results" src="https://github.com/user-attachments/assets/65f2c802-d969-4408-82ef-c1c815903e90" /> |

## To-dos :construction:
* Incorporate a function that verify if the weather data stored is still relevant by the time of the local fetch

## Credits :link:
* [Meteoicons](https://meteocons.com/)  
* [Lucidicons](https://lucide.dev/)  
* [Weather API](https://www.weatherapi.com/)    
* [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
* [Netlify](https://www.netlify.com/)    
* [UV Index infos](https://en.wikipedia.org/wiki/Ultraviolet_index)    
* [Thermal Range spectrum: forum explanation](https://discussions.apple.com/thread/253179820?sortBy=rank)
