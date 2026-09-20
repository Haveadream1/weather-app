# Weather PWA

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Jest](https://img.shields.io/badge/Tested%20with-Jest-C21325?style=flat&logo=jest&logoColor=white)
![Playwright](https://img.shields.io/badge/E2E-Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?style=flat&logo=github-actions&logoColor=white)

A lightweight, installable Progressive Web Application (PWA) that delivers real-time weather and forecasts for any city, complete with offline support, automated testing, and a smooth mobile experience.

## ✨ Features
- **Smart Caching:** Stores recent cities, unit preferences, and fetched data in LocalStorage to avoid redundant API calls when switching units
- **Geolocation:** Button to instantly fetch weather with the user's current location
- **Dynamic Icon Mapping:** Automatically matches WeatherAPI condition codes to SVG icons from the Meteocons library
- **Unit Switching:** Smooth toggling between Celsius (°C) and Fahrenheit (°F)
- **BEM Architecture:** Clean and maintainable CSS methodology
- **Timezone Awareness:** Calculates and displays accurate local time for the searched city using `date-fns`.
- **Thermal Range Spectrum:** Displays visual temperature trend indicators for daily forecasts
- **Custom Form Validation:** Client-side validation for city search inputs
- **Offline Support:** Workbox-managed service workers ensure the app remains functional and displays cached data without an internet connection

## 🛠️ Technical Highlights
- **PWA:** Fully installable on mobile; the last-fetched city is cached, ensuring the UI remains functional even when offline.
- **Security Best Practices:** API keys are completely hidden from the client using a `Netlify Serverless Function proxy`; environment variables are securely managed via `.env` locally and the Netlify dashboard in production.
- **Automated CI/CD:** GitHub Actions pipeline automatically runs linting, Jest unit tests, Playwright E2E tests, and Webpack builds on every push and pull request, ensuring codebase stability.
- **Comprehensive Testing:** Combines Jest for isolated unit testing (logic, utilities) and Playwright for End-to-End (E2E) testing, simulating real user interactions in a headless browser.

## 💻 Technology Stack
- **Languages:** Vanilla JavaScript (ES6+), HTML5, CSS3 (BEM)
- **Build & Tooling:** Webpack, Workbox, ESLint, Prettier
- **Testing & CI/CD:** Jest, Playwright, GitHub Actions
- **Services & APIs:** Netlify Functions, WeatherAPI, date-fns

## 🚀 Live Preview
🔗 [Weather App](https://weather-pwa2.netlify.app/)

| Mobile view | Installation |
| :---: | :---: |
| <img width="161" height="340" alt="Mobile view" src="https://github.com/user-attachments/assets/44aa6aac-7d01-4a73-8585-90af95d57a5b" /> | <img width="161" height="340" alt="Installation" src="https://github.com/user-attachments/assets/ccd633be-e5fe-4472-a21d-d28bfb56a88a" /> |

## 📊 Performance and accessibility
Lighthouse and WAVE audits are run before each release to ensure top-tier performance and accessibility (a11y) standards.
> One WAVE alert flags similar *alt text* on nearby images, this is expected as it is dynamically rendered by the forecast condition

| Lighthouse | Wave |
| :---: | :---: |
| <img width="363" height="120" alt="Lighthouse results" src="https://github.com/user-attachments/assets/f1df03c3-f8ee-49ba-801d-ee50808018ab" /> | <img width="245" height="340" alt="Wave results" src="https://github.com/user-attachments/assets/65f2c802-d969-4408-82ef-c1c815903e90" /> |

## 📦 Local Setup
1. Clone the repository: `git clone https://github.com/Haveadream1/weather-app.git`
2. Install dependencies: `npm install`
3. Copy the `.env.example` file to `.env` at the root and add your WeatherAPI key: `API_KEY=api_key_here`
4. Start the development server: `npm run start` 
   *(Optional: run `netlify dev` to test the serverless API proxy locally)*
5. Run tests: 
   - Unit tests: `npm run test`
   - E2E tests: `npm run test:e2e`

## 🚧 Future Enhancements
- Incorporate a function that verify if the weather data stored is still relevant by the time of the local fetch

## 🙌 Credits & Resources
- **Icons:** [Meteocons](https://meteocons.com/) & [Lucide](https://lucide.dev/)
- **Data:** [WeatherAPI](https://www.weatherapi.com/)
- **APIs:** [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- **Hosting & Serverless:** [Netlify](https://www.netlify.com/)
- **References:** [UV Index Information](https://en.wikipedia.org/wiki/Ultraviolet_index) | [Thermal Range spectrum](https://discussions.apple.com/thread/253179820?sortBy=rank)
