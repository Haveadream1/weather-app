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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// eslint-disable prefer-destructuring\nconst home = () => {\n  const cityInputEl = document.querySelector('#city-input');\n  const form = document.querySelector('#form');\n\n  const mainText = document.querySelector('.main-text');\n  const mainDate = document.querySelector('.main-date');\n  const mainTemp = document.querySelector('.main-temp');\n  const mainImg = document.querySelector('.main-img');\n\n  const childSection1 = document.querySelector('.child-section1');\n  const childSection2 = document.querySelector('.child-section2');\n  const childSection3 = document.querySelector('.child-section3');\n  const childSection4 = document.querySelector('.child-section4');\n\n  const apiKey = 'bce6611d55994183931152601230107';\n  const apiUrl = 'https://api.weatherapi.com/v1/forecast.json?';\n  // const KEY = 'https://api.weatherapi.com/v1/forecast.json?key=bce6611d55994183931152601230107&q=Seoul&days=1&aqi=no&alerts=no'\n\n  async function getWeather() {\n    const cityChoice = cityInputEl.value.trim();\n    const response = await fetch(`${apiUrl}key=${apiKey}&q=${cityChoice}&days=8&aqi=no&alerts=no`, { mode: 'cors' });\n    const data = await response.json();\n    console.log(data);\n\n    mainText.textContent = data.location.name;\n    const formatDate = data.current.last_updated;\n    mainDate.textContent = formatDate.slice(0, 11); // format date\n    // call dateAPI\n    mainTemp.textContent = `${data.current.temp_c}°c`;\n\n    mainImg.src = data.current.condition.icon;\n    mainImg.alt = data.current.condition.text;\n\n    // time section data\n    const childSection1Path = data.forecast.forecastday[0].hour[6];\n    const childSection1Date = childSection1Path.time;\n    childSection1.querySelector('.time').textContent = childSection1Date.slice(11, 16);\n    childSection1.querySelector('.img').src = childSection1Path.condition.icon;\n    childSection1.querySelector('.img').alt = childSection1Path.condition.text;\n    childSection1.querySelector('.temp').textContent = `${childSection1Path.temp_c}°c`;\n\n    const childSection2Path = data.forecast.forecastday[0].hour[12];\n    const childSection2Date = childSection2Path.time;\n    childSection2.querySelector('.time').textContent = childSection2Date.slice(11, 16);\n    childSection2.querySelector('.img').src = childSection2Path.condition.icon;\n    childSection2.querySelector('.img').alt = childSection2Path.condition.text;\n    childSection2.querySelector('.temp').textContent = `${childSection2Path.temp_c}°c`;\n\n    const childSection3Path = data.forecast.forecastday[0].hour[16];\n    const childSection3Date = childSection3Path.time;\n    childSection3.querySelector('.time').textContent = childSection3Date.slice(11, 16);\n    childSection3.querySelector('.img').src = childSection3Path.condition.icon;\n    childSection3.querySelector('.img').alt = childSection3Path.condition.text;\n    childSection3.querySelector('.temp').textContent = `${childSection3Path.temp_c}°c`;\n\n    const childSection4Path = data.forecast.forecastday[0].hour[21];\n    const childSection4Date = childSection4Path.time;\n    childSection4.querySelector('.time').textContent = childSection4Date.slice(11, 16);\n    childSection4.querySelector('.img').src = childSection4Path.condition.icon;\n    childSection4.querySelector('.img').alt = childSection4Path.condition.text;\n    childSection4.querySelector('.temp').textContent = `${childSection4Path.temp_c}°c`;\n  }\n\n  const isRequired = (value) => {\n    if (value === '') {\n      return false;\n    }\n    return true;\n  };\n\n  const showError = (input, message) => {\n    const formField = input.parentElement;\n    const inputForm = formField.querySelector('input');\n    inputForm.classList.add('error');\n    inputForm.classList.remove('success');\n\n    const error = formField.querySelector('small');\n    error.textContent = message;\n  };\n\n  const showSuccess = (input) => {\n    const fieldSet = input.parentElement;\n    const hInput = fieldSet.querySelector('input');\n    hInput.classList.remove('error');\n    hInput.classList.add('success');\n\n    const error = fieldSet.querySelector('small');\n    error.textContent = '';\n  };\n\n  const checkInput = () => {\n    let valid = false;\n    const input = cityInputEl.value.trim();\n\n    if (!isRequired(input)) {\n      showError(cityInputEl, 'Choose a city');\n    } else {\n      showSuccess(cityInputEl);\n      valid = true;\n    }\n    return valid;\n  };\n\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n\n    const isCityChoiceValid = checkInput();\n    const isFormValid = isCityChoiceValid;\n\n    if (isFormValid) {\n      // run func after valid form\n      getWeather();\n      console.log('Valid Form');\n    } else {\n      console.log('Error in the form');\n    }\n  });\n\n  form.addEventListener('input', (e) => {\n    // eslint-disable-next-line default-case\n    switch (e.target.id) {\n      case 'city-input':\n        checkInput();\n        break;\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n/*  Beige section :\n        Next to Seoul put a button to change location\n        Depend on the location value, take data and display it\n\n    Red section :\n        Display the image that depend on the actual weather\n\n    Purple section :\n        Display the weather for the week\n        Day + t*\n*/\n\n\n//# sourceURL=webpack://weather-app/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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