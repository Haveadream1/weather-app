/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// eslint-disable prefer-destructuring\nconst home = () => {\n  const form = document.querySelector('#form');\n  const cityInput = document.querySelector('#city-input');\n\n  const mainImg = document.querySelector('.main-img');\n  const mainCity = document.querySelector('.main-city');\n  const mainTemp = document.querySelector('.main-temp');\n\n  // NEED TO FIND A BETTER WAY => getWeather\n  const childSection1 = document.querySelector('.time-section-1');\n  const childSection2 = document.querySelector('.time-section-2');\n  const childSection3 = document.querySelector('.time-section-3');\n  const childSection4 = document.querySelector('.time-section-4');\n\n  // CREATE A SMALL\n  const apiKey = 'bce6611d55994183931152601230107';\n  const apiUrl = 'https://api.weatherapi.com/v1/forecast.json?';\n\n  async function getWeather(cityChoice) {\n    const response = await fetch(`${apiUrl}key=${apiKey}&q=${cityChoice}&days=8&aqi=no&alerts=no`, { mode: 'cors' });\n    const data = await response.json();\n\n    if (!response.ok) {\n      const message = `An error has occurred: ${response.status}`;\n      form.classList = 'invalid';\n\n      // ERROR\n      checkInput(); // check form validity if code error\n\n      throw new Error(message);\n    }\n    console.log(data);\n\n    /// NEED TO UDPATE JS WITH COMMAND\n\n    mainCity.textContent = data.location.name;\n    const formatDate = data.current.last_updated;\n    // mainDate.textContent = formatDate.slice(0, 11); // format date\n\n    mainTemp.textContent = `${data.current.temp_c}°c`;\n\n    mainImg.src = data.current.condition.icon;\n    mainImg.alt = data.current.condition.text;\n\n    // time section data\n    const childSection1Path = data.forecast.forecastday[0].hour[6];\n    const childSection1Date = childSection1Path.time;\n    childSection1.querySelector('.time').textContent = childSection1Date.slice(11, 16);\n    childSection1.querySelector('.img').src = childSection1Path.condition.icon;\n    childSection1.querySelector('.img').alt = childSection1Path.condition.text;\n    childSection1.querySelector('.temp').textContent = `${childSection1Path.temp_c}°c`;\n\n    const childSection2Path = data.forecast.forecastday[0].hour[12];\n    const childSection2Date = childSection2Path.time;\n    childSection2.querySelector('.time').textContent = childSection2Date.slice(11, 16);\n    childSection2.querySelector('.img').src = childSection2Path.condition.icon;\n    childSection2.querySelector('.img').alt = childSection2Path.condition.text;\n    childSection2.querySelector('.temp').textContent = `${childSection2Path.temp_c}°c`;\n\n    const childSection3Path = data.forecast.forecastday[0].hour[16];\n    const childSection3Date = childSection3Path.time;\n    childSection3.querySelector('.time').textContent = childSection3Date.slice(11, 16);\n    childSection3.querySelector('.img').src = childSection3Path.condition.icon;\n    childSection3.querySelector('.img').alt = childSection3Path.condition.text;\n    childSection3.querySelector('.temp').textContent = `${childSection3Path.temp_c}°c`;\n\n    const childSection4Path = data.forecast.forecastday[0].hour[21];\n    const childSection4Date = childSection4Path.time;\n    childSection4.querySelector('.time').textContent = childSection4Date.slice(11, 16);\n    childSection4.querySelector('.img').src = childSection4Path.condition.icon;\n    childSection4.querySelector('.img').alt = childSection4Path.condition.text;\n    childSection4.querySelector('.temp').textContent = `${childSection4Path.temp_c}°c`;\n  }\n\n  // initialization\n  getWeather('Seoul');\n\n  const isRequired = (value) => {\n    if (value === '') {\n      return false;\n    }\n    return true;\n  };\n\n  const isCityValid = () => {\n    const formClass = document.querySelector('#form').className;\n    if (formClass === 'invalid') {\n      return false;\n    }\n    return true;\n  };\n\n  const showError = (input, message) => {\n    const fieldSet = input.parentElement;\n    const inputForm = fieldSet.querySelector('input');\n    inputForm.classList.add('error');\n    inputForm.classList.remove('success');\n\n    const error = fieldSet.querySelector('small');\n    error.textContent = message;\n  };\n\n  const showSuccess = (input) => {\n    const fieldSet = input.parentElement;\n    const inputForm = fieldSet.querySelector('input');\n    inputForm.classList.remove('error');\n    inputForm.classList.add('success');\n\n    const error = fieldSet.querySelector('small');\n    error.textContent = '';\n  };\n\n  const checkInput = () => {\n    let valid = false;\n    const input = cityInput.value.trim();\n\n    if (!isRequired(input)) {\n      showError(cityInput, 'Choose a city');\n    } else if (!isCityValid()) {\n      showError(cityInput, 'Invalid city name');\n    } else {\n      showSuccess(cityInput);\n      valid = true;\n    }\n    return valid;\n  };\n\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n\n    const isCityChoiceValid = checkInput();\n    const isFormValid = isCityChoiceValid;\n\n    if (isFormValid) {\n      const cityChoice = cityInput.value.trim();\n      getWeather(cityChoice);\n\n      const input = document.querySelector('#city-input');\n      input.classList.remove('success');\n\n      console.log('Valid form');\n    } else {\n      console.log('Invalid form');\n    }\n  });\n\n  form.addEventListener('input', (e) => {\n    switch (e.target.id) {\n      case 'city-input':\n        checkInput();\n        break;\n      default: // Default case to avoid error eslint\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n/*  Header section :\n        Next to Seoul put a button to change location\n        Depend on the location value, take data and display it\n\n    Red section :\n        Display the image that depend on the actual weather\n\n    Purple section :\n        Display the weather for the day\n        Hour + t*\n*/\n\n\n//# sourceURL=webpack://weather-app/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;