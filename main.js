/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./dist/images/Cloud.svg":
      /*!*******************************!*\
  !*** ./dist/images/Cloud.svg ***!
  \*******************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "e51fecd758555753d247.svg";\n\n//# sourceURL=webpack://weather-app/./dist/images/Cloud.svg?',
        );

        /***/
      },

    /***/ "./dist/images/Overcast.svg":
      /*!**********************************!*\
  !*** ./dist/images/Overcast.svg ***!
  \**********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "5103b517cd2e70f65d3e.svg";\n\n//# sourceURL=webpack://weather-app/./dist/images/Overcast.svg?',
        );

        /***/
      },

    /***/ "./dist/images/Rain.svg":
      /*!******************************!*\
  !*** ./dist/images/Rain.svg ***!
  \******************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "8f3a049043753477ab36.svg";\n\n//# sourceURL=webpack://weather-app/./dist/images/Rain.svg?',
        );

        /***/
      },

    /***/ "./dist/images/Sun.svg":
      /*!*****************************!*\
  !*** ./dist/images/Sun.svg ***!
  \*****************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "9b17df27fbad600608a2.svg";\n\n//# sourceURL=webpack://weather-app/./dist/images/Sun.svg?',
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --yellow:  #FFA900;\n    --light-yellow:#FFD88B;\n    --background-orange: rgb(255 191 66 / 25%);\n    --green: rgb(0, 209, 0);\n    --red: rgb(255, 0, 0);\n    --grey: rgba(120, 120, 120, 0.92);\n    font-family: \'Raleway\', sans-serif;\n}\n\nbody {\n    margin: 0;\n    height: 100vh;\n    display: grid;\n    background-color: var(--background-orange);\n    grid-template-rows: 1fr 3fr 2fr;\n}\nbody > * {\n    padding: 8px;\n}\n\n/* Header */\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.api-credit,\n#city-input,\n.main-temp {\n    font-size: 15px;\n    font-family: \'Raleway\', sans-serif;\n}\n\n/* Header form */\nfieldset {\n    padding: 0;\n    border: none;\n    display: flex;\n}\n#city-input {\n    padding: 10px;\n    border-radius: 40px;\n    border: 1px solid var(--light-yellow);\n    background: linear-gradient(100deg, rgba(255, 255, 255, 0.40) -15.43%, rgba(255, 255, 255, 0.10) 122.5%);\n    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.06) inset;\n    backdrop-filter: blur(19px);\n}\n#city-input:focus {\n    outline: 2px solid var(--light-yellow);\n}\n.submit-button {\n    border: none;\n    background: none;\n}\nsmall {\n    position: absolute; /* Avoid pertubing the input */\n    padding-left: 11px;\n    top: 100px;\n}\n\n/* Main */\nmain {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.main-section {\n    height: 150px;\n    width: 350px;\n    border-radius: 41px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    justify-items: center;\n    backdrop-filter: blur(19px);\n    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.20);\n    background: linear-gradient(133deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.10) 100%);\n}\n.main-img { /* Change to svg and take off bc*/\n    height: 150px;\n    width: 150px;\n    position: relative;\n    top: -60px;\n    left: 50px;\n}\n.main-section > :nth-child(1) {\n    display: flex;\n    flex-direction: column;\n}\n.main-city {\n    font-size: 35px;\n    margin: 0px 5px 0px 5px;\n}\n.main-date {\n    font-size: 15px;\n    margin: 5px;\n    color: var(--grey);\n}\n.main-temp {\n    font-size: 35px;\n}\n\n/* Footer */\nfooter {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 50px 1fr;\n    align-items: center;\n    justify-items: center;\n}\nfooter > section {\n    grid-row: 2;\n    height: 200px;\n    width: 250px;\n    border-radius: 40px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: var(--light-yellow);\n    box-shadow: 0px 4px 4px 0px var(--yellow);\n}\n.time-choice {\n    font-size: 20px;\n}\n.img {\n    width: 50px;\n    height: 50px;\n}\n\n/* Form */\n.success {\n    outline: var(--green) 2px solid !important;\n    border: none !important;\n}  \n.error {\n    outline: var(--red) 2px solid !important;\n    border: none !important;\n}\n\n/* Mobile Styles */\n@media only screen and (max-width: 512px) {\n    /* body {\n        background-color: rgba(233, 96, 114, 0.623);\n    } */\n    main {\n        flex-wrap: wrap;\n    }\n    .main-img {\n        top: 0;\n        left: 0;\n    }\n    footer > section {\n        height: 150px;\n        width: 105px;\n    }\n}\n\n/* Smaller tablet Styles */\n@media only screen and (min-width: 513px) and (max-width: 702px) {\n    /* body {\n        background-color: rgba(240, 116, 229, 0.623);\n    } */\n    footer > section {\n        height: 150px;\n        width: 120px;\n    }\n}\n  \n/* Tablet Styles */\n@media only screen and (min-width: 703px) and (max-width: 1079px) {\n    /* body {\n        background-color: rgba(206, 211, 163, 0.589);\n    } */\n    footer > section {\n        height: 150px;\n        width: 150px;\n    }\n}\n  \n/* Desktop Styles */\n/* @media only screen and (min-width: 1080px) {\n    body {\n        background-color: rgba(127, 255, 212, 0.623);\n    }\n} */\n`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js',
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?',
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?",
        );

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/addLeadingZeros.js":
      /*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)\n/* harmony export */ });\nfunction addLeadingZeros(number, targetLength) {\n  const sign = number < 0 ? "-" : "";\n  const output = Math.abs(number).toString().padStart(targetLength, "0");\n  return sign + output;\n}\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/_lib/addLeadingZeros.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/defaultOptions.js":
      /*!******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),\n/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nlet defaultOptions = {};\n\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\n\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/_lib/defaultOptions.js?",
        );

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/format/formatters.js":
      /*!*********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.js ***!
  \*********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatters: () => (/* binding */ formatters)\n/* harmony export */ });\n/* harmony import */ var _getDayOfYear_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.js */ "./node_modules/date-fns/getDayOfYear.js");\n/* harmony import */ var _getISOWeek_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.js */ "./node_modules/date-fns/getISOWeek.js");\n/* harmony import */ var _getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.js */ "./node_modules/date-fns/getISOWeekYear.js");\n/* harmony import */ var _getWeek_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.js */ "./node_modules/date-fns/getWeek.js");\n/* harmony import */ var _getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.js */ "./node_modules/date-fns/getWeekYear.js");\n/* harmony import */ var _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.js */ "./node_modules/date-fns/_lib/addLeadingZeros.js");\n/* harmony import */ var _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.js */ "./node_modules/date-fns/_lib/format/lightFormatters.js");\n\n\n\n\n\n\n\n\n\nconst dayPeriodEnum = {\n  am: "am",\n  pm: "pm",\n  midnight: "midnight",\n  noon: "noon",\n  morning: "morning",\n  afternoon: "afternoon",\n  evening: "evening",\n  night: "night",\n};\n\n/*\n * |     | Unit                           |     | Unit                           |\n * |-----|--------------------------------|-----|--------------------------------|\n * |  a  | AM, PM                         |  A* | Milliseconds in day            |\n * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |\n * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |\n * |  d  | Day of month                   |  D  | Day of year                    |\n * |  e  | Local day of week              |  E  | Day of week                    |\n * |  f  |                                |  F* | Day of week in month           |\n * |  g* | Modified Julian day            |  G  | Era                            |\n * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |\n * |  i! | ISO day of week                |  I! | ISO week of year               |\n * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |\n * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |\n * |  l* | (deprecated)                   |  L  | Stand-alone month              |\n * |  m  | Minute                         |  M  | Month                          |\n * |  n  |                                |  N  |                                |\n * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |\n * |  p! | Long localized time            |  P! | Long localized date            |\n * |  q  | Stand-alone quarter            |  Q  | Quarter                        |\n * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |\n * |  s  | Second                         |  S  | Fraction of second             |\n * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |\n * |  u  | Extended year                  |  U* | Cyclic year                    |\n * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |\n * |  w  | Local week of year             |  W* | Week of month                  |\n * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |\n * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |\n * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |\n *\n * Letters marked by * are not implemented but reserved by Unicode standard.\n *\n * Letters marked by ! are non-standard, but implemented by date-fns:\n * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)\n * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,\n *   i.e. 7 for Sunday, 1 for Monday, etc.\n * - `I` is ISO week of year, as opposed to `w` which is local week of year.\n * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.\n *   `R` is supposed to be used in conjunction with `I` and `i`\n *   for universal ISO week-numbering date, whereas\n *   `Y` is supposed to be used in conjunction with `w` and `e`\n *   for week-numbering date specific to the locale.\n * - `P` is long localized date format\n * - `p` is long localized time format\n */\n\nconst formatters = {\n  // Era\n  G: function (date, token, localize) {\n    const era = date.getFullYear() > 0 ? 1 : 0;\n    switch (token) {\n      // AD, BC\n      case "G":\n      case "GG":\n      case "GGG":\n        return localize.era(era, { width: "abbreviated" });\n      // A, B\n      case "GGGGG":\n        return localize.era(era, { width: "narrow" });\n      // Anno Domini, Before Christ\n      case "GGGG":\n      default:\n        return localize.era(era, { width: "wide" });\n    }\n  },\n\n  // Year\n  y: function (date, token, localize) {\n    // Ordinal number\n    if (token === "yo") {\n      const signedYear = date.getFullYear();\n      // Returns 1 for 1 BC (which is year 0 in JavaScript)\n      const year = signedYear > 0 ? signedYear : 1 - signedYear;\n      return localize.ordinalNumber(year, { unit: "year" });\n    }\n\n    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);\n  },\n\n  // Local week-numbering year\n  Y: function (date, token, localize, options) {\n    const signedWeekYear = (0,_getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);\n    // Returns 1 for 1 BC (which is year 0 in JavaScript)\n    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;\n\n    // Two digit year\n    if (token === "YY") {\n      const twoDigitYear = weekYear % 100;\n      return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);\n    }\n\n    // Ordinal number\n    if (token === "Yo") {\n      return localize.ordinalNumber(weekYear, { unit: "year" });\n    }\n\n    // Padding\n    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);\n  },\n\n  // ISO week-numbering year\n  R: function (date, token) {\n    const isoWeekYear = (0,_getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);\n\n    // Padding\n    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);\n  },\n\n  // Extended year. This is a single number designating the year of this calendar system.\n  // The main difference between `y` and `u` localizers are B.C. years:\n  // | Year | `y` | `u` |\n  // |------|-----|-----|\n  // | AC 1 |   1 |   1 |\n  // | BC 1 |   1 |   0 |\n  // | BC 2 |   2 |  -1 |\n  // Also `yy` always returns the last two digits of a year,\n  // while `uu` pads single digit years to 2 characters and returns other years unchanged.\n  u: function (date, token) {\n    const year = date.getFullYear();\n    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);\n  },\n\n  // Quarter\n  Q: function (date, token, localize) {\n    const quarter = Math.ceil((date.getMonth() + 1) / 3);\n    switch (token) {\n      // 1, 2, 3, 4\n      case "Q":\n        return String(quarter);\n      // 01, 02, 03, 04\n      case "QQ":\n        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);\n      // 1st, 2nd, 3rd, 4th\n      case "Qo":\n        return localize.ordinalNumber(quarter, { unit: "quarter" });\n      // Q1, Q2, Q3, Q4\n      case "QQQ":\n        return localize.quarter(quarter, {\n          width: "abbreviated",\n          context: "formatting",\n        });\n      // 1, 2, 3, 4 (narrow quarter; could be not numerical)\n      case "QQQQQ":\n        return localize.quarter(quarter, {\n          width: "narrow",\n          context: "formatting",\n        });\n      // 1st quarter, 2nd quarter, ...\n      case "QQQQ":\n      default:\n        return localize.quarter(quarter, {\n          width: "wide",\n          context: "formatting",\n        });\n    }\n  },\n\n  // Stand-alone quarter\n  q: function (date, token, localize) {\n    const quarter = Math.ceil((date.getMonth() + 1) / 3);\n    switch (token) {\n      // 1, 2, 3, 4\n      case "q":\n        return String(quarter);\n      // 01, 02, 03, 04\n      case "qq":\n        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);\n      // 1st, 2nd, 3rd, 4th\n      case "qo":\n        return localize.ordinalNumber(quarter, { unit: "quarter" });\n      // Q1, Q2, Q3, Q4\n      case "qqq":\n        return localize.quarter(quarter, {\n          width: "abbreviated",\n          context: "standalone",\n        });\n      // 1, 2, 3, 4 (narrow quarter; could be not numerical)\n      case "qqqqq":\n        return localize.quarter(quarter, {\n          width: "narrow",\n          context: "standalone",\n        });\n      // 1st quarter, 2nd quarter, ...\n      case "qqqq":\n      default:\n        return localize.quarter(quarter, {\n          width: "wide",\n          context: "standalone",\n        });\n    }\n  },\n\n  // Month\n  M: function (date, token, localize) {\n    const month = date.getMonth();\n    switch (token) {\n      case "M":\n      case "MM":\n        return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);\n      // 1st, 2nd, ..., 12th\n      case "Mo":\n        return localize.ordinalNumber(month + 1, { unit: "month" });\n      // Jan, Feb, ..., Dec\n      case "MMM":\n        return localize.month(month, {\n          width: "abbreviated",\n          context: "formatting",\n        });\n      // J, F, ..., D\n      case "MMMMM":\n        return localize.month(month, {\n          width: "narrow",\n          context: "formatting",\n        });\n      // January, February, ..., December\n      case "MMMM":\n      default:\n        return localize.month(month, { width: "wide", context: "formatting" });\n    }\n  },\n\n  // Stand-alone month\n  L: function (date, token, localize) {\n    const month = date.getMonth();\n    switch (token) {\n      // 1, 2, ..., 12\n      case "L":\n        return String(month + 1);\n      // 01, 02, ..., 12\n      case "LL":\n        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);\n      // 1st, 2nd, ..., 12th\n      case "Lo":\n        return localize.ordinalNumber(month + 1, { unit: "month" });\n      // Jan, Feb, ..., Dec\n      case "LLL":\n        return localize.month(month, {\n          width: "abbreviated",\n          context: "standalone",\n        });\n      // J, F, ..., D\n      case "LLLLL":\n        return localize.month(month, {\n          width: "narrow",\n          context: "standalone",\n        });\n      // January, February, ..., December\n      case "LLLL":\n      default:\n        return localize.month(month, { width: "wide", context: "standalone" });\n    }\n  },\n\n  // Local week of year\n  w: function (date, token, localize, options) {\n    const week = (0,_getWeek_js__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);\n\n    if (token === "wo") {\n      return localize.ordinalNumber(week, { unit: "week" });\n    }\n\n    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);\n  },\n\n  // ISO week of year\n  I: function (date, token, localize) {\n    const isoWeek = (0,_getISOWeek_js__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);\n\n    if (token === "Io") {\n      return localize.ordinalNumber(isoWeek, { unit: "week" });\n    }\n\n    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);\n  },\n\n  // Day of the month\n  d: function (date, token, localize) {\n    if (token === "do") {\n      return localize.ordinalNumber(date.getDate(), { unit: "date" });\n    }\n\n    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);\n  },\n\n  // Day of year\n  D: function (date, token, localize) {\n    const dayOfYear = (0,_getDayOfYear_js__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);\n\n    if (token === "Do") {\n      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });\n    }\n\n    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);\n  },\n\n  // Day of week\n  E: function (date, token, localize) {\n    const dayOfWeek = date.getDay();\n    switch (token) {\n      // Tue\n      case "E":\n      case "EE":\n      case "EEE":\n        return localize.day(dayOfWeek, {\n          width: "abbreviated",\n          context: "formatting",\n        });\n      // T\n      case "EEEEE":\n        return localize.day(dayOfWeek, {\n          width: "narrow",\n          context: "formatting",\n        });\n      // Tu\n      case "EEEEEE":\n        return localize.day(dayOfWeek, {\n          width: "short",\n          context: "formatting",\n        });\n      // Tuesday\n      case "EEEE":\n      default:\n        return localize.day(dayOfWeek, {\n          width: "wide",\n          context: "formatting",\n        });\n    }\n  },\n\n  // Local day of week\n  e: function (date, token, localize, options) {\n    const dayOfWeek = date.getDay();\n    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;\n    switch (token) {\n      // Numerical value (Nth day of week with current locale or weekStartsOn)\n      case "e":\n        return String(localDayOfWeek);\n      // Padded numerical value\n      case "ee":\n        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);\n      // 1st, 2nd, ..., 7th\n      case "eo":\n        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });\n      case "eee":\n        return localize.day(dayOfWeek, {\n          width: "abbreviated",\n          context: "formatting",\n        });\n      // T\n      case "eeeee":\n        return localize.day(dayOfWeek, {\n          width: "narrow",\n          context: "formatting",\n        });\n      // Tu\n      case "eeeeee":\n        return localize.day(dayOfWeek, {\n          width: "short",\n          context: "formatting",\n        });\n      // Tuesday\n      case "eeee":\n      default:\n        return localize.day(dayOfWeek, {\n          width: "wide",\n          context: "formatting",\n        });\n    }\n  },\n\n  // Stand-alone local day of week\n  c: function (date, token, localize, options) {\n    const dayOfWeek = date.getDay();\n    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;\n    switch (token) {\n      // Numerical value (same as in `e`)\n      case "c":\n        return String(localDayOfWeek);\n      // Padded numerical value\n      case "cc":\n        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);\n      // 1st, 2nd, ..., 7th\n      case "co":\n        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });\n      case "ccc":\n        return localize.day(dayOfWeek, {\n          width: "abbreviated",\n          context: "standalone",\n        });\n      // T\n      case "ccccc":\n        return localize.day(dayOfWeek, {\n          width: "narrow",\n          context: "standalone",\n        });\n      // Tu\n      case "cccccc":\n        return localize.day(dayOfWeek, {\n          width: "short",\n          context: "standalone",\n        });\n      // Tuesday\n      case "cccc":\n      default:\n        return localize.day(dayOfWeek, {\n          width: "wide",\n          context: "standalone",\n        });\n    }\n  },\n\n  // ISO day of week\n  i: function (date, token, localize) {\n    const dayOfWeek = date.getDay();\n    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;\n    switch (token) {\n      // 2\n      case "i":\n        return String(isoDayOfWeek);\n      // 02\n      case "ii":\n        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);\n      // 2nd\n      case "io":\n        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });\n      // Tue\n      case "iii":\n        return localize.day(dayOfWeek, {\n          width: "abbreviated",\n          context: "formatting",\n        });\n      // T\n      case "iiiii":\n        return localize.day(dayOfWeek, {\n          width: "narrow",\n          context: "formatting",\n        });\n      // Tu\n      case "iiiiii":\n        return localize.day(dayOfWeek, {\n          width: "short",\n          context: "formatting",\n        });\n      // Tuesday\n      case "iiii":\n      default:\n        return localize.day(dayOfWeek, {\n          width: "wide",\n          context: "formatting",\n        });\n    }\n  },\n\n  // AM or PM\n  a: function (date, token, localize) {\n    const hours = date.getHours();\n    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";\n\n    switch (token) {\n      case "a":\n      case "aa":\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: "abbreviated",\n          context: "formatting",\n        });\n      case "aaa":\n        return localize\n          .dayPeriod(dayPeriodEnumValue, {\n            width: "abbreviated",\n            context: "formatting",\n          })\n          .toLowerCase();\n      case "aaaaa":\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: "narrow",\n          context: "formatting",\n        });\n      case "aaaa":\n      default:\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: "wide",\n          context: "formatting",\n        });\n    }\n  },\n\n  // AM, PM, midnight, noon\n  b: function (date, token, localize) {\n    const hours = date.getHours();\n    let dayPeriodEnumValue;\n    if (hours === 12) {\n      dayPeriodEnumValue = dayPeriodEnum.noon;\n    } else if (hours === 0) {\n      dayPeriodEnumValue = dayPeriodEnum.midnight;\n    } else {\n      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";\n    }\n\n    switch (token) {\n      case "b":\n      case "bb":\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: "abbreviated",\n          context: "formatting",\n        });\n      case "bbb":\n        return localize\n          .dayPeriod(dayPeriodEnumValue, {\n            width: "abbreviated",\n            context: "formatting",\n          })\n          .toLowerCase();\n      case "bbbbb":\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: "narrow",\n          context: "formatting",\n        });\n      case "bbbb":\n      default:\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: "wide",\n          context: "formatting",\n        });\n    }\n  },\n\n  // in the morning, in the afternoon, in the evening, at night\n  B: function (date, token, localize) {\n    const hours = date.getHours();\n    let dayPeriodEnumValue;\n    if (hours >= 17) {\n      dayPeriodEnumValue = dayPeriodEnum.evening;\n    } else if (hours >= 12) {\n      dayPeriodEnumValue = dayPeriodEnum.afternoon;\n    } else if (hours >= 4) {\n      dayPeriodEnumValue = dayPeriodEnum.morning;\n    } else {\n      dayPeriodEnumValue = dayPeriodEnum.night;\n    }\n\n    switch (token) {\n      case "B":\n      case "BB":\n      case "BBB":\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: "abbreviated",\n          context: "formatting",\n        });\n      case "BBBBB":\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: "narrow",\n          context: "formatting",\n        });\n      case "BBBB":\n      default:\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: "wide",\n          context: "formatting",\n        });\n    }\n  },\n\n  // Hour [1-12]\n  h: function (date, token, localize) {\n    if (token === "ho") {\n      let hours = date.getHours() % 12;\n      if (hours === 0) hours = 12;\n      return localize.ordinalNumber(hours, { unit: "hour" });\n    }\n\n    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);\n  },\n\n  // Hour [0-23]\n  H: function (date, token, localize) {\n    if (token === "Ho") {\n      return localize.ordinalNumber(date.getHours(), { unit: "hour" });\n    }\n\n    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);\n  },\n\n  // Hour [0-11]\n  K: function (date, token, localize) {\n    const hours = date.getHours() % 12;\n\n    if (token === "Ko") {\n      return localize.ordinalNumber(hours, { unit: "hour" });\n    }\n\n    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);\n  },\n\n  // Hour [1-24]\n  k: function (date, token, localize) {\n    let hours = date.getHours();\n    if (hours === 0) hours = 24;\n\n    if (token === "ko") {\n      return localize.ordinalNumber(hours, { unit: "hour" });\n    }\n\n    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);\n  },\n\n  // Minute\n  m: function (date, token, localize) {\n    if (token === "mo") {\n      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });\n    }\n\n    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);\n  },\n\n  // Second\n  s: function (date, token, localize) {\n    if (token === "so") {\n      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });\n    }\n\n    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);\n  },\n\n  // Fraction of second\n  S: function (date, token) {\n    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);\n  },\n\n  // Timezone (ISO-8601. If offset is 0, output is always `\'Z\'`)\n  X: function (date, token, _localize) {\n    const timezoneOffset = date.getTimezoneOffset();\n\n    if (timezoneOffset === 0) {\n      return "Z";\n    }\n\n    switch (token) {\n      // Hours and optional minutes\n      case "X":\n        return formatTimezoneWithOptionalMinutes(timezoneOffset);\n\n      // Hours, minutes and optional seconds without `:` delimiter\n      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets\n      // so this token always has the same output as `XX`\n      case "XXXX":\n      case "XX": // Hours and minutes without `:` delimiter\n        return formatTimezone(timezoneOffset);\n\n      // Hours, minutes and optional seconds with `:` delimiter\n      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets\n      // so this token always has the same output as `XXX`\n      case "XXXXX":\n      case "XXX": // Hours and minutes with `:` delimiter\n      default:\n        return formatTimezone(timezoneOffset, ":");\n    }\n  },\n\n  // Timezone (ISO-8601. If offset is 0, output is `\'+00:00\'` or equivalent)\n  x: function (date, token, _localize) {\n    const timezoneOffset = date.getTimezoneOffset();\n\n    switch (token) {\n      // Hours and optional minutes\n      case "x":\n        return formatTimezoneWithOptionalMinutes(timezoneOffset);\n\n      // Hours, minutes and optional seconds without `:` delimiter\n      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets\n      // so this token always has the same output as `xx`\n      case "xxxx":\n      case "xx": // Hours and minutes without `:` delimiter\n        return formatTimezone(timezoneOffset);\n\n      // Hours, minutes and optional seconds with `:` delimiter\n      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets\n      // so this token always has the same output as `xxx`\n      case "xxxxx":\n      case "xxx": // Hours and minutes with `:` delimiter\n      default:\n        return formatTimezone(timezoneOffset, ":");\n    }\n  },\n\n  // Timezone (GMT)\n  O: function (date, token, _localize) {\n    const timezoneOffset = date.getTimezoneOffset();\n\n    switch (token) {\n      // Short\n      case "O":\n      case "OO":\n      case "OOO":\n        return "GMT" + formatTimezoneShort(timezoneOffset, ":");\n      // Long\n      case "OOOO":\n      default:\n        return "GMT" + formatTimezone(timezoneOffset, ":");\n    }\n  },\n\n  // Timezone (specific non-location)\n  z: function (date, token, _localize) {\n    const timezoneOffset = date.getTimezoneOffset();\n\n    switch (token) {\n      // Short\n      case "z":\n      case "zz":\n      case "zzz":\n        return "GMT" + formatTimezoneShort(timezoneOffset, ":");\n      // Long\n      case "zzzz":\n      default:\n        return "GMT" + formatTimezone(timezoneOffset, ":");\n    }\n  },\n\n  // Seconds timestamp\n  t: function (date, token, _localize) {\n    const timestamp = Math.trunc(+date / 1000);\n    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);\n  },\n\n  // Milliseconds timestamp\n  T: function (date, token, _localize) {\n    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(+date, token.length);\n  },\n};\n\nfunction formatTimezoneShort(offset, delimiter = "") {\n  const sign = offset > 0 ? "-" : "+";\n  const absOffset = Math.abs(offset);\n  const hours = Math.trunc(absOffset / 60);\n  const minutes = absOffset % 60;\n  if (minutes === 0) {\n    return sign + String(hours);\n  }\n  return sign + String(hours) + delimiter + (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);\n}\n\nfunction formatTimezoneWithOptionalMinutes(offset, delimiter) {\n  if (offset % 60 === 0) {\n    const sign = offset > 0 ? "-" : "+";\n    return sign + (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);\n  }\n  return formatTimezone(offset, delimiter);\n}\n\nfunction formatTimezone(offset, delimiter = "") {\n  const sign = offset > 0 ? "-" : "+";\n  const absOffset = Math.abs(offset);\n  const hours = (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);\n  const minutes = (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);\n  return sign + hours + delimiter + minutes;\n}\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/_lib/format/formatters.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/format/lightFormatters.js":
      /*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)\n/* harmony export */ });\n/* harmony import */ var _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.js */ "./node_modules/date-fns/_lib/addLeadingZeros.js");\n\n\n/*\n * |     | Unit                           |     | Unit                           |\n * |-----|--------------------------------|-----|--------------------------------|\n * |  a  | AM, PM                         |  A* |                                |\n * |  d  | Day of month                   |  D  |                                |\n * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |\n * |  m  | Minute                         |  M  | Month                          |\n * |  s  | Second                         |  S  | Fraction of second             |\n * |  y  | Year (abs)                     |  Y  |                                |\n *\n * Letters marked by * are not implemented but reserved by Unicode standard.\n */\n\nconst lightFormatters = {\n  // Year\n  y(date, token) {\n    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens\n    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |\n    // |----------|-------|----|-------|-------|-------|\n    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |\n    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |\n    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |\n    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |\n    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |\n\n    const signedYear = date.getFullYear();\n    // Returns 1 for 1 BC (which is year 0 in JavaScript)\n    const year = signedYear > 0 ? signedYear : 1 - signedYear;\n    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);\n  },\n\n  // Month\n  M(date, token) {\n    const month = date.getMonth();\n    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);\n  },\n\n  // Day of the month\n  d(date, token) {\n    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);\n  },\n\n  // AM or PM\n  a(date, token) {\n    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";\n\n    switch (token) {\n      case "a":\n      case "aa":\n        return dayPeriodEnumValue.toUpperCase();\n      case "aaa":\n        return dayPeriodEnumValue;\n      case "aaaaa":\n        return dayPeriodEnumValue[0];\n      case "aaaa":\n      default:\n        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";\n    }\n  },\n\n  // Hour [1-12]\n  h(date, token) {\n    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);\n  },\n\n  // Hour [0-23]\n  H(date, token) {\n    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);\n  },\n\n  // Minute\n  m(date, token) {\n    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);\n  },\n\n  // Second\n  s(date, token) {\n    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);\n  },\n\n  // Fraction of second\n  S(date, token) {\n    const numberOfDigits = token.length;\n    const milliseconds = date.getMilliseconds();\n    const fractionalSeconds = Math.trunc(\n      milliseconds * Math.pow(10, numberOfDigits - 3),\n    );\n    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);\n  },\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/_lib/format/lightFormatters.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/format/longFormatters.js":
      /*!*************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.js ***!
  \*************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   longFormatters: () => (/* binding */ longFormatters)\n/* harmony export */ });\nconst dateLongFormatter = (pattern, formatLong) => {\n  switch (pattern) {\n    case "P":\n      return formatLong.date({ width: "short" });\n    case "PP":\n      return formatLong.date({ width: "medium" });\n    case "PPP":\n      return formatLong.date({ width: "long" });\n    case "PPPP":\n    default:\n      return formatLong.date({ width: "full" });\n  }\n};\n\nconst timeLongFormatter = (pattern, formatLong) => {\n  switch (pattern) {\n    case "p":\n      return formatLong.time({ width: "short" });\n    case "pp":\n      return formatLong.time({ width: "medium" });\n    case "ppp":\n      return formatLong.time({ width: "long" });\n    case "pppp":\n    default:\n      return formatLong.time({ width: "full" });\n  }\n};\n\nconst dateTimeLongFormatter = (pattern, formatLong) => {\n  const matchResult = pattern.match(/(P+)(p+)?/) || [];\n  const datePattern = matchResult[1];\n  const timePattern = matchResult[2];\n\n  if (!timePattern) {\n    return dateLongFormatter(pattern, formatLong);\n  }\n\n  let dateTimeFormat;\n\n  switch (datePattern) {\n    case "P":\n      dateTimeFormat = formatLong.dateTime({ width: "short" });\n      break;\n    case "PP":\n      dateTimeFormat = formatLong.dateTime({ width: "medium" });\n      break;\n    case "PPP":\n      dateTimeFormat = formatLong.dateTime({ width: "long" });\n      break;\n    case "PPPP":\n    default:\n      dateTimeFormat = formatLong.dateTime({ width: "full" });\n      break;\n  }\n\n  return dateTimeFormat\n    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))\n    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));\n};\n\nconst longFormatters = {\n  p: timeLongFormatter,\n  P: dateTimeLongFormatter,\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/_lib/format/longFormatters.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.js */ \"./node_modules/date-fns/toDate.js\");\n\n\n/**\n * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.\n * They usually appear for dates that denote time before the timezones were introduced\n * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891\n * and GMT+01:00:00 after that date)\n *\n * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,\n * which would lead to incorrect calculations.\n *\n * This function returns the timezone offset in milliseconds that takes seconds in account.\n */\nfunction getTimezoneOffsetInMilliseconds(date) {\n  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  const utcDate = new Date(\n    Date.UTC(\n      _date.getFullYear(),\n      _date.getMonth(),\n      _date.getDate(),\n      _date.getHours(),\n      _date.getMinutes(),\n      _date.getSeconds(),\n      _date.getMilliseconds(),\n    ),\n  );\n  utcDate.setUTCFullYear(_date.getFullYear());\n  return +date - +utcDate;\n}\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js?",
        );

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/normalizeDates.js":
      /*!******************************************************!*\
  !*** ./node_modules/date-fns/_lib/normalizeDates.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   normalizeDates: () => (/* binding */ normalizeDates)\n/* harmony export */ });\n/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constructFrom.js */ "./node_modules/date-fns/constructFrom.js");\n\n\nfunction normalizeDates(context, ...dates) {\n  const normalize = _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom.bind(\n    null,\n    context || dates.find((date) => typeof date === "object"),\n  );\n  return dates.map(normalize);\n}\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/_lib/normalizeDates.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/protectedTokens.js":
      /*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),\n/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),\n/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)\n/* harmony export */ });\nconst dayOfYearTokenRE = /^D+$/;\nconst weekYearTokenRE = /^Y+$/;\n\nconst throwTokens = ["D", "DD", "YY", "YYYY"];\n\nfunction isProtectedDayOfYearToken(token) {\n  return dayOfYearTokenRE.test(token);\n}\n\nfunction isProtectedWeekYearToken(token) {\n  return weekYearTokenRE.test(token);\n}\n\nfunction warnOrThrowProtectedError(token, format, input) {\n  const _message = message(token, format, input);\n  console.warn(_message);\n  if (throwTokens.includes(token)) throw new RangeError(_message);\n}\n\nfunction message(token, format, input) {\n  const subject = token[0] === "Y" ? "years" : "days of the month";\n  return `Use \\`${token.toLowerCase()}\\` instead of \\`${token}\\` (in \\`${format}\\`) for formatting ${subject} to the input \\`${input}\\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;\n}\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/_lib/protectedTokens.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/constants.js":
      /*!********************************************!*\
  !*** ./node_modules/date-fns/constants.js ***!
  \********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   constructFromSymbol: () => (/* binding */ constructFromSymbol),\n/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),\n/* harmony export */   daysInYear: () => (/* binding */ daysInYear),\n/* harmony export */   maxTime: () => (/* binding */ maxTime),\n/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),\n/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),\n/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),\n/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),\n/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),\n/* harmony export */   minTime: () => (/* binding */ minTime),\n/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),\n/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),\n/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),\n/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),\n/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),\n/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),\n/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),\n/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),\n/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),\n/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),\n/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),\n/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),\n/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),\n/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)\n/* harmony export */ });\n/**\n * @module constants\n * @summary Useful constants\n * @description\n * Collection of useful date constants.\n *\n * The constants could be imported from `date-fns/constants`:\n *\n * ```ts\n * import { maxTime, minTime } from "./constants/date-fns/constants";\n *\n * function isAllowedTime(time) {\n *   return time <= maxTime && time >= minTime;\n * }\n * ```\n */\n\n/**\n * @constant\n * @name daysInWeek\n * @summary Days in 1 week.\n */\nconst daysInWeek = 7;\n\n/**\n * @constant\n * @name daysInYear\n * @summary Days in 1 year.\n *\n * @description\n * How many days in a year.\n *\n * One years equals 365.2425 days according to the formula:\n *\n * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.\n * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days\n */\nconst daysInYear = 365.2425;\n\n/**\n * @constant\n * @name maxTime\n * @summary Maximum allowed time.\n *\n * @example\n * import { maxTime } from "./constants/date-fns/constants";\n *\n * const isValid = 8640000000000001 <= maxTime;\n * //=> false\n *\n * new Date(8640000000000001);\n * //=> Invalid Date\n */\nconst maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;\n\n/**\n * @constant\n * @name minTime\n * @summary Minimum allowed time.\n *\n * @example\n * import { minTime } from "./constants/date-fns/constants";\n *\n * const isValid = -8640000000000001 >= minTime;\n * //=> false\n *\n * new Date(-8640000000000001)\n * //=> Invalid Date\n */\nconst minTime = -maxTime;\n\n/**\n * @constant\n * @name millisecondsInWeek\n * @summary Milliseconds in 1 week.\n */\nconst millisecondsInWeek = 604800000;\n\n/**\n * @constant\n * @name millisecondsInDay\n * @summary Milliseconds in 1 day.\n */\nconst millisecondsInDay = 86400000;\n\n/**\n * @constant\n * @name millisecondsInMinute\n * @summary Milliseconds in 1 minute\n */\nconst millisecondsInMinute = 60000;\n\n/**\n * @constant\n * @name millisecondsInHour\n * @summary Milliseconds in 1 hour\n */\nconst millisecondsInHour = 3600000;\n\n/**\n * @constant\n * @name millisecondsInSecond\n * @summary Milliseconds in 1 second\n */\nconst millisecondsInSecond = 1000;\n\n/**\n * @constant\n * @name minutesInYear\n * @summary Minutes in 1 year.\n */\nconst minutesInYear = 525600;\n\n/**\n * @constant\n * @name minutesInMonth\n * @summary Minutes in 1 month.\n */\nconst minutesInMonth = 43200;\n\n/**\n * @constant\n * @name minutesInDay\n * @summary Minutes in 1 day.\n */\nconst minutesInDay = 1440;\n\n/**\n * @constant\n * @name minutesInHour\n * @summary Minutes in 1 hour.\n */\nconst minutesInHour = 60;\n\n/**\n * @constant\n * @name monthsInQuarter\n * @summary Months in 1 quarter.\n */\nconst monthsInQuarter = 3;\n\n/**\n * @constant\n * @name monthsInYear\n * @summary Months in 1 year.\n */\nconst monthsInYear = 12;\n\n/**\n * @constant\n * @name quartersInYear\n * @summary Quarters in 1 year\n */\nconst quartersInYear = 4;\n\n/**\n * @constant\n * @name secondsInHour\n * @summary Seconds in 1 hour.\n */\nconst secondsInHour = 3600;\n\n/**\n * @constant\n * @name secondsInMinute\n * @summary Seconds in 1 minute.\n */\nconst secondsInMinute = 60;\n\n/**\n * @constant\n * @name secondsInDay\n * @summary Seconds in 1 day.\n */\nconst secondsInDay = secondsInHour * 24;\n\n/**\n * @constant\n * @name secondsInWeek\n * @summary Seconds in 1 week.\n */\nconst secondsInWeek = secondsInDay * 7;\n\n/**\n * @constant\n * @name secondsInYear\n * @summary Seconds in 1 year.\n */\nconst secondsInYear = secondsInDay * daysInYear;\n\n/**\n * @constant\n * @name secondsInMonth\n * @summary Seconds in 1 month\n */\nconst secondsInMonth = secondsInYear / 12;\n\n/**\n * @constant\n * @name secondsInQuarter\n * @summary Seconds in 1 quarter.\n */\nconst secondsInQuarter = secondsInMonth * 3;\n\n/**\n * @constant\n * @name constructFromSymbol\n * @summary Symbol enabling Date extensions to inherit properties from the reference date.\n *\n * The symbol is used to enable the `constructFrom` function to construct a date\n * using a reference date and a value. It allows to transfer extra properties\n * from the reference date to the new date. It\'s useful for extensions like\n * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as\n * a constructor argument.\n */\nconst constructFromSymbol = Symbol.for("constructDateFrom");\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/constants.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/constructFrom.js":
      /*!************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.js ***!
  \************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   constructFrom: () => (/* binding */ constructFrom),\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");\n\n\n/**\n * @name constructFrom\n * @category Generic Helpers\n * @summary Constructs a date using the reference date and the value\n *\n * @description\n * The function constructs a new date using the constructor from the reference\n * date and the given value. It helps to build generic functions that accept\n * date extensions.\n *\n * It defaults to `Date` if the passed reference date is a number or a string.\n *\n * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`\n * enabling to transfer extra properties from the reference date to the new date.\n * It\'s useful for extensions like [`TZDate`](https://github.com/date-fns/tz)\n * that accept a time zone as a constructor argument.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The reference date to take constructor from\n * @param value - The value to create the date\n *\n * @returns Date initialized using the given date and value\n *\n * @example\n * import { constructFrom } from "./constructFrom/date-fns";\n *\n * // A function that clones a date preserving the original type\n * function cloneDate<DateType extends Date>(date: DateType): DateType {\n *   return constructFrom(\n *     date, // Use constructor from the given date\n *     date.getTime() // Use the date value to create a new date\n *   );\n * }\n */\nfunction constructFrom(date, value) {\n  if (typeof date === "function") return date(value);\n\n  if (date && typeof date === "object" && _constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol in date)\n    return date[_constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol](value);\n\n  if (date instanceof Date) return new date.constructor(value);\n\n  return new Date(value);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/constructFrom.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/differenceInCalendarDays.js":
      /*!***********************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)\n/* harmony export */ });\n/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js");\n/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");\n/* harmony import */ var _startOfDay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfDay.js */ "./node_modules/date-fns/startOfDay.js");\n\n\n\n\n\n/**\n * The {@link differenceInCalendarDays} function options.\n */\n\n/**\n * @name differenceInCalendarDays\n * @category Day Helpers\n * @summary Get the number of calendar days between the given dates.\n *\n * @description\n * Get the number of calendar days between the given dates. This means that the times are removed\n * from the dates and then the difference in days is calculated.\n *\n * @param laterDate - The later date\n * @param earlierDate - The earlier date\n * @param options - The options object\n *\n * @returns The number of calendar days\n *\n * @example\n * // How many calendar days are between\n * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?\n * const result = differenceInCalendarDays(\n *   new Date(2012, 6, 2, 0, 0),\n *   new Date(2011, 6, 2, 23, 0)\n * )\n * //=> 366\n * // How many calendar days are between\n * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?\n * const result = differenceInCalendarDays(\n *   new Date(2011, 6, 3, 0, 1),\n *   new Date(2011, 6, 2, 23, 59)\n * )\n * //=> 1\n */\nfunction differenceInCalendarDays(laterDate, earlierDate, options) {\n  const [laterDate_, earlierDate_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(\n    options?.in,\n    laterDate,\n    earlierDate,\n  );\n\n  const laterStartOfDay = (0,_startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(laterDate_);\n  const earlierStartOfDay = (0,_startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(earlierDate_);\n\n  const laterTimestamp =\n    +laterStartOfDay - (0,_lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__.getTimezoneOffsetInMilliseconds)(laterStartOfDay);\n  const earlierTimestamp =\n    +earlierStartOfDay - (0,_lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__.getTimezoneOffsetInMilliseconds)(earlierStartOfDay);\n\n  // Round the number of days to the nearest integer because the number of\n  // milliseconds in a day is not constant (e.g. it\'s different in the week of\n  // the daylight saving time clock shift).\n  return Math.round((laterTimestamp - earlierTimestamp) / _constants_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsInDay);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/differenceInCalendarDays.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/format.js":
      /*!*****************************************!*\
  !*** ./node_modules/date-fns/format.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   format: () => (/* binding */ format),\n/* harmony export */   formatDate: () => (/* binding */ format),\n/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__.formatters),\n/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__.longFormatters)\n/* harmony export */ });\n/* harmony import */ var _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.js */ \"./node_modules/date-fns/locale/en-US.js\");\n/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ \"./node_modules/date-fns/_lib/defaultOptions.js\");\n/* harmony import */ var _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.js */ \"./node_modules/date-fns/_lib/format/formatters.js\");\n/* harmony import */ var _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.js */ \"./node_modules/date-fns/_lib/format/longFormatters.js\");\n/* harmony import */ var _lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.js */ \"./node_modules/date-fns/_lib/protectedTokens.js\");\n/* harmony import */ var _isValid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.js */ \"./node_modules/date-fns/isValid.js\");\n/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.js */ \"./node_modules/date-fns/toDate.js\");\n\n\n\n\n\n\n\n\n// Rexports of internal for libraries to use.\n// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874\n\n\n// This RegExp consists of three parts separated by `|`:\n// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token\n//   (one of the certain letters followed by `o`)\n// - (\\w)\\1* matches any sequences of the same letter\n// - '' matches two quote characters in a row\n// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),\n//   except a single quote symbol, which ends the sequence.\n//   Two quote characters do not end the sequence.\n//   If there is no matching single quote\n//   then the sequence will continue until the end of the string.\n// - . matches any single character unmatched by previous parts of the RegExps\nconst formattingTokensRegExp =\n  /[yYQqMLwIdDecihHKkms]o|(\\w)\\1*|''|'(''|[^'])+('|$)|./g;\n\n// This RegExp catches symbols escaped by quotes, and also\n// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`\nconst longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;\n\nconst escapedStringRegExp = /^'([^]*?)'?$/;\nconst doubleQuoteRegExp = /''/g;\nconst unescapedLatinCharacterRegExp = /[a-zA-Z]/;\n\n\n\n/**\n * The {@link format} function options.\n */\n\n/**\n * @name format\n * @alias formatDate\n * @category Common Helpers\n * @summary Format the date.\n *\n * @description\n * Return the formatted date string in the given format. The result may vary by locale.\n *\n * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.\n * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n *\n * The characters wrapped between two single quotes characters (') are escaped.\n * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.\n * (see the last example)\n *\n * Format of the string is based on Unicode Technical Standard #35:\n * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table\n * with a few additions (see note 7 below the table).\n *\n * Accepted patterns:\n * | Unit                            | Pattern | Result examples                   | Notes |\n * |---------------------------------|---------|-----------------------------------|-------|\n * | Era                             | G..GGG  | AD, BC                            |       |\n * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |\n * |                                 | GGGGG   | A, B                              |       |\n * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |\n * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |\n * |                                 | yy      | 44, 01, 00, 17                    | 5     |\n * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |\n * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |\n * |                                 | yyyyy   | ...                               | 3,5   |\n * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |\n * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |\n * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |\n * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |\n * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |\n * |                                 | YYYYY   | ...                               | 3,5   |\n * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |\n * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |\n * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |\n * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |\n * |                                 | RRRRR   | ...                               | 3,5,7 |\n * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |\n * |                                 | uu      | -43, 01, 1900, 2017               | 5     |\n * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |\n * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |\n * |                                 | uuuuu   | ...                               | 3,5   |\n * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |\n * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |\n * |                                 | QQ      | 01, 02, 03, 04                    |       |\n * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |\n * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |\n * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |\n * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |\n * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |\n * |                                 | qq      | 01, 02, 03, 04                    |       |\n * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |\n * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |\n * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |\n * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |\n * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |\n * |                                 | MM      | 01, 02, ..., 12                   |       |\n * |                                 | MMM     | Jan, Feb, ..., Dec                |       |\n * |                                 | MMMM    | January, February, ..., December  | 2     |\n * |                                 | MMMMM   | J, F, ..., D                      |       |\n * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |\n * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |\n * |                                 | LL      | 01, 02, ..., 12                   |       |\n * |                                 | LLL     | Jan, Feb, ..., Dec                |       |\n * |                                 | LLLL    | January, February, ..., December  | 2     |\n * |                                 | LLLLL   | J, F, ..., D                      |       |\n * | Local week of year              | w       | 1, 2, ..., 53                     |       |\n * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |\n * |                                 | ww      | 01, 02, ..., 53                   |       |\n * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |\n * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |\n * |                                 | II      | 01, 02, ..., 53                   | 7     |\n * | Day of month                    | d       | 1, 2, ..., 31                     |       |\n * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |\n * |                                 | dd      | 01, 02, ..., 31                   |       |\n * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |\n * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |\n * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |\n * |                                 | DDD     | 001, 002, ..., 365, 366           |       |\n * |                                 | DDDD    | ...                               | 3     |\n * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |\n * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |\n * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |\n * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |\n * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |\n * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |\n * |                                 | ii      | 01, 02, ..., 07                   | 7     |\n * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |\n * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |\n * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |\n * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |\n * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |\n * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |\n * |                                 | ee      | 02, 03, ..., 01                   |       |\n * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |\n * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |\n * |                                 | eeeee   | M, T, W, T, F, S, S               |       |\n * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |\n * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |\n * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |\n * |                                 | cc      | 02, 03, ..., 01                   |       |\n * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |\n * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |\n * |                                 | ccccc   | M, T, W, T, F, S, S               |       |\n * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |\n * | AM, PM                          | a..aa   | AM, PM                            |       |\n * |                                 | aaa     | am, pm                            |       |\n * |                                 | aaaa    | a.m., p.m.                        | 2     |\n * |                                 | aaaaa   | a, p                              |       |\n * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |\n * |                                 | bbb     | am, pm, noon, midnight            |       |\n * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |\n * |                                 | bbbbb   | a, p, n, mi                       |       |\n * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |\n * |                                 | BBBB    | at night, in the morning, ...     | 2     |\n * |                                 | BBBBB   | at night, in the morning, ...     |       |\n * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |\n * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |\n * |                                 | hh      | 01, 02, ..., 11, 12               |       |\n * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |\n * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |\n * |                                 | HH      | 00, 01, 02, ..., 23               |       |\n * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |\n * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |\n * |                                 | KK      | 01, 02, ..., 11, 00               |       |\n * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |\n * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |\n * |                                 | kk      | 24, 01, 02, ..., 23               |       |\n * | Minute                          | m       | 0, 1, ..., 59                     |       |\n * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |\n * |                                 | mm      | 00, 01, ..., 59                   |       |\n * | Second                          | s       | 0, 1, ..., 59                     |       |\n * |                                 | so      | 0th, 1st, ..., 59th               | 7     |\n * |                                 | ss      | 00, 01, ..., 59                   |       |\n * | Fraction of second              | S       | 0, 1, ..., 9                      |       |\n * |                                 | SS      | 00, 01, ..., 99                   |       |\n * |                                 | SSS     | 000, 001, ..., 999                |       |\n * |                                 | SSSS    | ...                               | 3     |\n * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |\n * |                                 | XX      | -0800, +0530, Z                   |       |\n * |                                 | XXX     | -08:00, +05:30, Z                 |       |\n * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |\n * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |\n * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |\n * |                                 | xx      | -0800, +0530, +0000               |       |\n * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |\n * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |\n * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |\n * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |\n * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |\n * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |\n * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |\n * | Seconds timestamp               | t       | 512969520                         | 7     |\n * |                                 | tt      | ...                               | 3,7   |\n * | Milliseconds timestamp          | T       | 512969520900                      | 7     |\n * |                                 | TT      | ...                               | 3,7   |\n * | Long localized date             | P       | 04/29/1453                        | 7     |\n * |                                 | PP      | Apr 29, 1453                      | 7     |\n * |                                 | PPP     | April 29th, 1453                  | 7     |\n * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |\n * | Long localized time             | p       | 12:00 AM                          | 7     |\n * |                                 | pp      | 12:00:00 AM                       | 7     |\n * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |\n * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |\n * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |\n * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |\n * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |\n * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |\n * Notes:\n * 1. \"Formatting\" units (e.g. formatting quarter) in the default en-US locale\n *    are the same as \"stand-alone\" units, but are different in some languages.\n *    \"Formatting\" units are declined according to the rules of the language\n *    in the context of a date. \"Stand-alone\" units are always nominative singular:\n *\n *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`\n *\n *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`\n *\n * 2. Any sequence of the identical letters is a pattern, unless it is escaped by\n *    the single quote characters (see below).\n *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)\n *    the output will be the same as default pattern for this unit, usually\n *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units\n *    are marked with \"2\" in the last column of the table.\n *\n *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`\n *\n *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`\n *\n *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`\n *\n *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`\n *\n *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`\n *\n * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).\n *    The output will be padded with zeros to match the length of the pattern.\n *\n *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`\n *\n * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.\n *    These tokens represent the shortest form of the quarter.\n *\n * 5. The main difference between `y` and `u` patterns are B.C. years:\n *\n *    | Year | `y` | `u` |\n *    |------|-----|-----|\n *    | AC 1 |   1 |   1 |\n *    | BC 1 |   1 |   0 |\n *    | BC 2 |   2 |  -1 |\n *\n *    Also `yy` always returns the last two digits of a year,\n *    while `uu` pads single digit years to 2 characters and returns other years unchanged:\n *\n *    | Year | `yy` | `uu` |\n *    |------|------|------|\n *    | 1    |   01 |   01 |\n *    | 14   |   14 |   14 |\n *    | 376  |   76 |  376 |\n *    | 1453 |   53 | 1453 |\n *\n *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),\n *    except local week-numbering years are dependent on `options.weekStartsOn`\n *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)\n *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).\n *\n * 6. Specific non-location timezones are currently unavailable in `date-fns`,\n *    so right now these tokens fall back to GMT timezones.\n *\n * 7. These patterns are not in the Unicode Technical Standard #35:\n *    - `i`: ISO day of week\n *    - `I`: ISO week of year\n *    - `R`: ISO week-numbering year\n *    - `t`: seconds timestamp\n *    - `T`: milliseconds timestamp\n *    - `o`: ordinal number modifier\n *    - `P`: long localized date\n *    - `p`: long localized time\n *\n * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.\n *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n *\n * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.\n *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n *\n * @param date - The original date\n * @param format - The string of tokens\n * @param options - An object with options\n *\n * @returns The formatted date string\n *\n * @throws `date` must not be Invalid Date\n * @throws `options.locale` must contain `localize` property\n * @throws `options.locale` must contain `formatLong` property\n * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n * @throws format string contains an unescaped latin alphabet character\n *\n * @example\n * // Represent 11 February 2014 in middle-endian format:\n * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')\n * //=> '02/11/2014'\n *\n * @example\n * // Represent 2 July 2014 in Esperanto:\n * import { eoLocale } from 'date-fns/locale/eo'\n * const result = format(new Date(2014, 6, 2), \"do 'de' MMMM yyyy\", {\n *   locale: eoLocale\n * })\n * //=> '2-a de julio 2014'\n *\n * @example\n * // Escape string by single quote characters:\n * const result = format(new Date(2014, 6, 2, 15), \"h 'o''clock'\")\n * //=> \"3 o'clock\"\n */\nfunction format(date, formatStr, options) {\n  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();\n  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_3__.enUS;\n\n  const firstWeekContainsDate =\n    options?.firstWeekContainsDate ??\n    options?.locale?.options?.firstWeekContainsDate ??\n    defaultOptions.firstWeekContainsDate ??\n    defaultOptions.locale?.options?.firstWeekContainsDate ??\n    1;\n\n  const weekStartsOn =\n    options?.weekStartsOn ??\n    options?.locale?.options?.weekStartsOn ??\n    defaultOptions.weekStartsOn ??\n    defaultOptions.locale?.options?.weekStartsOn ??\n    0;\n\n  const originalDate = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_4__.toDate)(date, options?.in);\n\n  if (!(0,_isValid_js__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {\n    throw new RangeError(\"Invalid time value\");\n  }\n\n  let parts = formatStr\n    .match(longFormattingTokensRegExp)\n    .map((substring) => {\n      const firstCharacter = substring[0];\n      if (firstCharacter === \"p\" || firstCharacter === \"P\") {\n        const longFormatter = _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];\n        return longFormatter(substring, locale.formatLong);\n      }\n      return substring;\n    })\n    .join(\"\")\n    .match(formattingTokensRegExp)\n    .map((substring) => {\n      // Replace two single quote characters with one single quote character\n      if (substring === \"''\") {\n        return { isToken: false, value: \"'\" };\n      }\n\n      const firstCharacter = substring[0];\n      if (firstCharacter === \"'\") {\n        return { isToken: false, value: cleanEscapedString(substring) };\n      }\n\n      if (_lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {\n        return { isToken: true, value: substring };\n      }\n\n      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {\n        throw new RangeError(\n          \"Format string contains an unescaped latin alphabet character `\" +\n            firstCharacter +\n            \"`\",\n        );\n      }\n\n      return { isToken: false, value: substring };\n    });\n\n  // invoke localize preprocessor (only for french locales at the moment)\n  if (locale.localize.preprocessor) {\n    parts = locale.localize.preprocessor(originalDate, parts);\n  }\n\n  const formatterOptions = {\n    firstWeekContainsDate,\n    weekStartsOn,\n    locale,\n  };\n\n  return parts\n    .map((part) => {\n      if (!part.isToken) return part.value;\n\n      const token = part.value;\n\n      if (\n        (!options?.useAdditionalWeekYearTokens &&\n          (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||\n        (!options?.useAdditionalDayOfYearTokens &&\n          (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))\n      ) {\n        (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));\n      }\n\n      const formatter = _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];\n      return formatter(originalDate, token, locale.localize, formatterOptions);\n    })\n    .join(\"\");\n}\n\nfunction cleanEscapedString(input) {\n  const matched = input.match(escapedStringRegExp);\n\n  if (!matched) {\n    return input;\n  }\n\n  return matched[1].replace(doubleQuoteRegExp, \"'\");\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/format.js?",
        );

        /***/
      },

    /***/ "./node_modules/date-fns/getDayOfYear.js":
      /*!***********************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.js ***!
  \***********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)\n/* harmony export */ });\n/* harmony import */ var _differenceInCalendarDays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.js */ "./node_modules/date-fns/differenceInCalendarDays.js");\n/* harmony import */ var _startOfYear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.js */ "./node_modules/date-fns/startOfYear.js");\n/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");\n\n\n\n\n/**\n * The {@link getDayOfYear} function options.\n */\n\n/**\n * @name getDayOfYear\n * @category Day Helpers\n * @summary Get the day of the year of the given date.\n *\n * @description\n * Get the day of the year of the given date.\n *\n * @param date - The given date\n * @param options - The options\n *\n * @returns The day of year\n *\n * @example\n * // Which day of the year is 2 July 2014?\n * const result = getDayOfYear(new Date(2014, 6, 2))\n * //=> 183\n */\nfunction getDayOfYear(date, options) {\n  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);\n  const diff = (0,_differenceInCalendarDays_js__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_js__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));\n  const dayOfYear = diff + 1;\n  return dayOfYear;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/getDayOfYear.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/getISOWeek.js":
      /*!*********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.js ***!
  \*********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");\n/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");\n/* harmony import */ var _startOfISOWeekYear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.js */ "./node_modules/date-fns/startOfISOWeekYear.js");\n/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");\n\n\n\n\n\n/**\n * The {@link getISOWeek} function options.\n */\n\n/**\n * @name getISOWeek\n * @category ISO Week Helpers\n * @summary Get the ISO week of the given date.\n *\n * @description\n * Get the ISO week of the given date.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param date - The given date\n * @param options - The options\n *\n * @returns The ISO week\n *\n * @example\n * // Which week of the ISO-week numbering year is 2 January 2005?\n * const result = getISOWeek(new Date(2005, 0, 2))\n * //=> 53\n */\nfunction getISOWeek(date, options) {\n  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);\n  const diff = +(0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);\n\n  // Round the number of weeks to the nearest integer because the number of\n  // milliseconds in a week is not constant (e.g. it\'s different in the week of\n  // the daylight saving time clock shift).\n  return Math.round(diff / _constants_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/getISOWeek.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/getISOWeekYear.js":
      /*!*************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.js ***!
  \*************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)\n/* harmony export */ });\n/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");\n/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");\n/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");\n\n\n\n\n/**\n * The {@link getISOWeekYear} function options.\n */\n\n/**\n * @name getISOWeekYear\n * @category ISO Week-Numbering Year Helpers\n * @summary Get the ISO week-numbering year of the given date.\n *\n * @description\n * Get the ISO week-numbering year of the given date,\n * which always starts 3 days before the year\'s first Thursday.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param date - The given date\n *\n * @returns The ISO week-numbering year\n *\n * @example\n * // Which ISO-week numbering year is 2 January 2005?\n * const result = getISOWeekYear(new Date(2005, 0, 2))\n * //=> 2004\n */\nfunction getISOWeekYear(date, options) {\n  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);\n  const year = _date.getFullYear();\n\n  const fourthOfJanuaryOfNextYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(_date, 0);\n  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);\n  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);\n  const startOfNextYear = (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);\n\n  const fourthOfJanuaryOfThisYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(_date, 0);\n  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);\n  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);\n  const startOfThisYear = (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);\n\n  if (_date.getTime() >= startOfNextYear.getTime()) {\n    return year + 1;\n  } else if (_date.getTime() >= startOfThisYear.getTime()) {\n    return year;\n  } else {\n    return year - 1;\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/getISOWeekYear.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/getWeek.js":
      /*!******************************************!*\
  !*** ./node_modules/date-fns/getWeek.js ***!
  \******************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getWeek: () => (/* binding */ getWeek)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");\n/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");\n/* harmony import */ var _startOfWeekYear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.js */ "./node_modules/date-fns/startOfWeekYear.js");\n/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");\n\n\n\n\n\n/**\n * The {@link getWeek} function options.\n */\n\n/**\n * @name getWeek\n * @category Week Helpers\n * @summary Get the local week index of the given date.\n *\n * @description\n * Get the local week index of the given date.\n * The exact calculation depends on the values of\n * `options.weekStartsOn` (which is the index of the first day of the week)\n * and `options.firstWeekContainsDate` (which is the day of January, which is always in\n * the first week of the week-numbering year)\n *\n * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system\n *\n * @param date - The given date\n * @param options - An object with options\n *\n * @returns The week\n *\n * @example\n * // Which week of the local week numbering year is 2 January 2005 with default options?\n * const result = getWeek(new Date(2005, 0, 2))\n * //=> 2\n *\n * @example\n * // Which week of the local week numbering year is 2 January 2005,\n * // if Monday is the first day of the week,\n * // and the first week of the year always contains 4 January?\n * const result = getWeek(new Date(2005, 0, 2), {\n *   weekStartsOn: 1,\n *   firstWeekContainsDate: 4\n * })\n * //=> 53\n */\nfunction getWeek(date, options) {\n  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);\n  const diff = +(0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_js__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);\n\n  // Round the number of weeks to the nearest integer because the number of\n  // milliseconds in a week is not constant (e.g. it\'s different in the week of\n  // the daylight saving time clock shift).\n  return Math.round(diff / _constants_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/getWeek.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/getWeekYear.js":
      /*!**********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)\n/* harmony export */ });\n/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");\n/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");\n/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");\n/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");\n\n\n\n\n\n/**\n * The {@link getWeekYear} function options.\n */\n\n/**\n * @name getWeekYear\n * @category Week-Numbering Year Helpers\n * @summary Get the local week-numbering year of the given date.\n *\n * @description\n * Get the local week-numbering year of the given date.\n * The exact calculation depends on the values of\n * `options.weekStartsOn` (which is the index of the first day of the week)\n * and `options.firstWeekContainsDate` (which is the day of January, which is always in\n * the first week of the week-numbering year)\n *\n * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system\n *\n * @param date - The given date\n * @param options - An object with options.\n *\n * @returns The local week-numbering year\n *\n * @example\n * // Which week numbering year is 26 December 2004 with the default settings?\n * const result = getWeekYear(new Date(2004, 11, 26))\n * //=> 2005\n *\n * @example\n * // Which week numbering year is 26 December 2004 if week starts on Saturday?\n * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })\n * //=> 2004\n *\n * @example\n * // Which week numbering year is 26 December 2004 if the first week contains 4 January?\n * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })\n * //=> 2004\n */\nfunction getWeekYear(date, options) {\n  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);\n  const year = _date.getFullYear();\n\n  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  const firstWeekContainsDate =\n    options?.firstWeekContainsDate ??\n    options?.locale?.options?.firstWeekContainsDate ??\n    defaultOptions.firstWeekContainsDate ??\n    defaultOptions.locale?.options?.firstWeekContainsDate ??\n    1;\n\n  const firstWeekOfNextYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(options?.in || date, 0);\n  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);\n  firstWeekOfNextYear.setHours(0, 0, 0, 0);\n  const startOfNextYear = (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);\n\n  const firstWeekOfThisYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(options?.in || date, 0);\n  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);\n  firstWeekOfThisYear.setHours(0, 0, 0, 0);\n  const startOfThisYear = (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);\n\n  if (+_date >= +startOfNextYear) {\n    return year + 1;\n  } else if (+_date >= +startOfThisYear) {\n    return year;\n  } else {\n    return year - 1;\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/getWeekYear.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/isDate.js":
      /*!*****************************************!*\
  !*** ./node_modules/date-fns/isDate.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isDate: () => (/* binding */ isDate)\n/* harmony export */ });\n/**\n * @name isDate\n * @category Common Helpers\n * @summary Is the given value a date?\n *\n * @description\n * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.\n *\n * @param value - The value to check\n *\n * @returns True if the given value is a date\n *\n * @example\n * // For a valid date:\n * const result = isDate(new Date())\n * //=> true\n *\n * @example\n * // For an invalid date:\n * const result = isDate(new Date(NaN))\n * //=> true\n *\n * @example\n * // For some value:\n * const result = isDate(\'2014-02-31\')\n * //=> false\n *\n * @example\n * // For an object:\n * const result = isDate({})\n * //=> false\n */\nfunction isDate(value) {\n  return (\n    value instanceof Date ||\n    (typeof value === "object" &&\n      Object.prototype.toString.call(value) === "[object Date]")\n  );\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/isDate.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/isValid.js":
      /*!******************************************!*\
  !*** ./node_modules/date-fns/isValid.js ***!
  \******************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isValid: () => (/* binding */ isValid)\n/* harmony export */ });\n/* harmony import */ var _isDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.js */ "./node_modules/date-fns/isDate.js");\n/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");\n\n\n\n/**\n * @name isValid\n * @category Common Helpers\n * @summary Is the given date valid?\n *\n * @description\n * Returns false if argument is Invalid Date and true otherwise.\n * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)\n * Invalid Date is a Date, whose time value is NaN.\n *\n * Time value of Date: http://es5.github.io/#x15.9.1.1\n *\n * @param date - The date to check\n *\n * @returns The date is valid\n *\n * @example\n * // For the valid date:\n * const result = isValid(new Date(2014, 1, 31))\n * //=> true\n *\n * @example\n * // For the value, convertible into a date:\n * const result = isValid(1393804800000)\n * //=> true\n *\n * @example\n * // For the invalid date:\n * const result = isValid(new Date(\'\'))\n * //=> false\n */\nfunction isValid(date) {\n  return !((!(0,_isDate_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") || isNaN(+(0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(date)));\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/isValid.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.js":
      /*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)\n/* harmony export */ });\nfunction buildFormatLongFn(args) {\n  return (options = {}) => {\n    // TODO: Remove String()\n    const width = options.width ? String(options.width) : args.defaultWidth;\n    const format = args.formats[width] || args.formats[args.defaultWidth];\n    return format;\n  };\n}\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/locale/_lib/buildFormatLongFn.js?",
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.js":
      /*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)\n/* harmony export */ });\n/**\n * The localize function argument callback which allows to convert raw value to\n * the actual type.\n *\n * @param value - The value to convert\n *\n * @returns The converted value\n */\n\n/**\n * The map of localized values for each width.\n */\n\n/**\n * The index type of the locale unit value. It types conversion of units of\n * values that don\'t start at 0 (i.e. quarters).\n */\n\n/**\n * Converts the unit value to the tuple of values.\n */\n\n/**\n * The tuple of localized era values. The first element represents BC,\n * the second element represents AD.\n */\n\n/**\n * The tuple of localized quarter values. The first element represents Q1.\n */\n\n/**\n * The tuple of localized day values. The first element represents Sunday.\n */\n\n/**\n * The tuple of localized month values. The first element represents January.\n */\n\nfunction buildLocalizeFn(args) {\n  return (value, options) => {\n    const context = options?.context ? String(options.context) : "standalone";\n\n    let valuesArray;\n    if (context === "formatting" && args.formattingValues) {\n      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;\n      const width = options?.width ? String(options.width) : defaultWidth;\n\n      valuesArray =\n        args.formattingValues[width] || args.formattingValues[defaultWidth];\n    } else {\n      const defaultWidth = args.defaultWidth;\n      const width = options?.width ? String(options.width) : args.defaultWidth;\n\n      valuesArray = args.values[width] || args.values[defaultWidth];\n    }\n    const index = args.argumentCallback ? args.argumentCallback(value) : value;\n\n    // @ts-expect-error - For some reason TypeScript just don\'t want to match it, no matter how hard we try. I challenge you to try to remove it!\n    return valuesArray[index];\n  };\n}\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/locale/_lib/buildLocalizeFn.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.js":
      /*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)\n/* harmony export */ });\nfunction buildMatchFn(args) {\n  return (string, options = {}) => {\n    const width = options.width;\n\n    const matchPattern =\n      (width && args.matchPatterns[width]) ||\n      args.matchPatterns[args.defaultMatchWidth];\n    const matchResult = string.match(matchPattern);\n\n    if (!matchResult) {\n      return null;\n    }\n    const matchedString = matchResult[0];\n\n    const parsePatterns =\n      (width && args.parsePatterns[width]) ||\n      args.parsePatterns[args.defaultParseWidth];\n\n    const key = Array.isArray(parsePatterns)\n      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))\n      : // [TODO] -- I challenge you to fix the type\n        findKey(parsePatterns, (pattern) => pattern.test(matchedString));\n\n    let value;\n\n    value = args.valueCallback ? args.valueCallback(key) : key;\n    value = options.valueCallback\n      ? // [TODO] -- I challenge you to fix the type\n        options.valueCallback(value)\n      : value;\n\n    const rest = string.slice(matchedString.length);\n\n    return { value, rest };\n  };\n}\n\nfunction findKey(object, predicate) {\n  for (const key in object) {\n    if (\n      Object.prototype.hasOwnProperty.call(object, key) &&\n      predicate(object[key])\n    ) {\n      return key;\n    }\n  }\n  return undefined;\n}\n\nfunction findIndex(array, predicate) {\n  for (let key = 0; key < array.length; key++) {\n    if (predicate(array[key])) {\n      return key;\n    }\n  }\n  return undefined;\n}\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/locale/_lib/buildMatchFn.js?",
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js":
      /*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)\n/* harmony export */ });\nfunction buildMatchPatternFn(args) {\n  return (string, options = {}) => {\n    const matchResult = string.match(args.matchPattern);\n    if (!matchResult) return null;\n    const matchedString = matchResult[0];\n\n    const parseResult = string.match(args.parsePattern);\n    if (!parseResult) return null;\n    let value = args.valueCallback\n      ? args.valueCallback(parseResult[0])\n      : parseResult[0];\n\n    // [TODO] I challenge you to fix the type\n    value = options.valueCallback ? options.valueCallback(value) : value;\n\n    const rest = string.slice(matchedString.length);\n\n    return { value, rest };\n  };\n}\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js?",
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US.js":
      /*!***********************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.js ***!
  \***********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   enUS: () => (/* binding */ enUS)\n/* harmony export */ });\n/* harmony import */ var _en_US_lib_formatDistance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.js */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.js");\n/* harmony import */ var _en_US_lib_formatLong_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.js */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.js");\n/* harmony import */ var _en_US_lib_formatRelative_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.js */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.js");\n/* harmony import */ var _en_US_lib_localize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.js */ "./node_modules/date-fns/locale/en-US/_lib/localize.js");\n/* harmony import */ var _en_US_lib_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.js */ "./node_modules/date-fns/locale/en-US/_lib/match.js");\n\n\n\n\n\n\n/**\n * @category Locales\n * @summary English locale (United States).\n * @language English\n * @iso-639-2 eng\n * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)\n * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)\n */\nconst enUS = {\n  code: "en-US",\n  formatDistance: _en_US_lib_formatDistance_js__WEBPACK_IMPORTED_MODULE_0__.formatDistance,\n  formatLong: _en_US_lib_formatLong_js__WEBPACK_IMPORTED_MODULE_1__.formatLong,\n  formatRelative: _en_US_lib_formatRelative_js__WEBPACK_IMPORTED_MODULE_2__.formatRelative,\n  localize: _en_US_lib_localize_js__WEBPACK_IMPORTED_MODULE_3__.localize,\n  match: _en_US_lib_match_js__WEBPACK_IMPORTED_MODULE_4__.match,\n  options: {\n    weekStartsOn: 0 /* Sunday */,\n    firstWeekContainsDate: 1,\n  },\n};\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/locale/en-US.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatDistance: () => (/* binding */ formatDistance)\n/* harmony export */ });\nconst formatDistanceLocale = {\n  lessThanXSeconds: {\n    one: "less than a second",\n    other: "less than {{count}} seconds",\n  },\n\n  xSeconds: {\n    one: "1 second",\n    other: "{{count}} seconds",\n  },\n\n  halfAMinute: "half a minute",\n\n  lessThanXMinutes: {\n    one: "less than a minute",\n    other: "less than {{count}} minutes",\n  },\n\n  xMinutes: {\n    one: "1 minute",\n    other: "{{count}} minutes",\n  },\n\n  aboutXHours: {\n    one: "about 1 hour",\n    other: "about {{count}} hours",\n  },\n\n  xHours: {\n    one: "1 hour",\n    other: "{{count}} hours",\n  },\n\n  xDays: {\n    one: "1 day",\n    other: "{{count}} days",\n  },\n\n  aboutXWeeks: {\n    one: "about 1 week",\n    other: "about {{count}} weeks",\n  },\n\n  xWeeks: {\n    one: "1 week",\n    other: "{{count}} weeks",\n  },\n\n  aboutXMonths: {\n    one: "about 1 month",\n    other: "about {{count}} months",\n  },\n\n  xMonths: {\n    one: "1 month",\n    other: "{{count}} months",\n  },\n\n  aboutXYears: {\n    one: "about 1 year",\n    other: "about {{count}} years",\n  },\n\n  xYears: {\n    one: "1 year",\n    other: "{{count}} years",\n  },\n\n  overXYears: {\n    one: "over 1 year",\n    other: "over {{count}} years",\n  },\n\n  almostXYears: {\n    one: "almost 1 year",\n    other: "almost {{count}} years",\n  },\n};\n\nconst formatDistance = (token, count, options) => {\n  let result;\n\n  const tokenValue = formatDistanceLocale[token];\n  if (typeof tokenValue === "string") {\n    result = tokenValue;\n  } else if (count === 1) {\n    result = tokenValue.one;\n  } else {\n    result = tokenValue.other.replace("{{count}}", count.toString());\n  }\n\n  if (options?.addSuffix) {\n    if (options.comparison && options.comparison > 0) {\n      return "in " + result;\n    } else {\n      return result + " ago";\n    }\n  }\n\n  return result;\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/locale/en-US/_lib/formatDistance.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.js":
      /*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatLong: () => (/* binding */ formatLong)\n/* harmony export */ });\n/* harmony import */ var _lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.js */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.js");\n\n\nconst dateFormats = {\n  full: "EEEE, MMMM do, y",\n  long: "MMMM do, y",\n  medium: "MMM d, y",\n  short: "MM/dd/yyyy",\n};\n\nconst timeFormats = {\n  full: "h:mm:ss a zzzz",\n  long: "h:mm:ss a z",\n  medium: "h:mm:ss a",\n  short: "h:mm a",\n};\n\nconst dateTimeFormats = {\n  full: "{{date}} \'at\' {{time}}",\n  long: "{{date}} \'at\' {{time}}",\n  medium: "{{date}}, {{time}}",\n  short: "{{date}}, {{time}}",\n};\n\nconst formatLong = {\n  date: (0,_lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({\n    formats: dateFormats,\n    defaultWidth: "full",\n  }),\n\n  time: (0,_lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({\n    formats: timeFormats,\n    defaultWidth: "full",\n  }),\n\n  dateTime: (0,_lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({\n    formats: dateTimeFormats,\n    defaultWidth: "full",\n  }),\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/locale/en-US/_lib/formatLong.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatRelative: () => (/* binding */ formatRelative)\n/* harmony export */ });\nconst formatRelativeLocale = {\n  lastWeek: \"'last' eeee 'at' p\",\n  yesterday: \"'yesterday at' p\",\n  today: \"'today at' p\",\n  tomorrow: \"'tomorrow at' p\",\n  nextWeek: \"eeee 'at' p\",\n  other: \"P\",\n};\n\nconst formatRelative = (token, _date, _baseDate, _options) =>\n  formatRelativeLocale[token];\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/locale/en-US/_lib/formatRelative.js?",
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US/_lib/localize.js":
      /*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.js ***!
  \*************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   localize: () => (/* binding */ localize)\n/* harmony export */ });\n/* harmony import */ var _lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.js */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.js");\n\n\nconst eraValues = {\n  narrow: ["B", "A"],\n  abbreviated: ["BC", "AD"],\n  wide: ["Before Christ", "Anno Domini"],\n};\n\nconst quarterValues = {\n  narrow: ["1", "2", "3", "4"],\n  abbreviated: ["Q1", "Q2", "Q3", "Q4"],\n  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],\n};\n\n// Note: in English, the names of days of the week and months are capitalized.\n// If you are making a new locale based on this one, check if the same is true for the language you\'re working on.\n// Generally, formatted dates should look like they are in the middle of a sentence,\n// e.g. in Spanish language the weekdays and months should be in the lowercase.\nconst monthValues = {\n  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],\n  abbreviated: [\n    "Jan",\n    "Feb",\n    "Mar",\n    "Apr",\n    "May",\n    "Jun",\n    "Jul",\n    "Aug",\n    "Sep",\n    "Oct",\n    "Nov",\n    "Dec",\n  ],\n\n  wide: [\n    "January",\n    "February",\n    "March",\n    "April",\n    "May",\n    "June",\n    "July",\n    "August",\n    "September",\n    "October",\n    "November",\n    "December",\n  ],\n};\n\nconst dayValues = {\n  narrow: ["S", "M", "T", "W", "T", "F", "S"],\n  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],\n  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],\n  wide: [\n    "Sunday",\n    "Monday",\n    "Tuesday",\n    "Wednesday",\n    "Thursday",\n    "Friday",\n    "Saturday",\n  ],\n};\n\nconst dayPeriodValues = {\n  narrow: {\n    am: "a",\n    pm: "p",\n    midnight: "mi",\n    noon: "n",\n    morning: "morning",\n    afternoon: "afternoon",\n    evening: "evening",\n    night: "night",\n  },\n  abbreviated: {\n    am: "AM",\n    pm: "PM",\n    midnight: "midnight",\n    noon: "noon",\n    morning: "morning",\n    afternoon: "afternoon",\n    evening: "evening",\n    night: "night",\n  },\n  wide: {\n    am: "a.m.",\n    pm: "p.m.",\n    midnight: "midnight",\n    noon: "noon",\n    morning: "morning",\n    afternoon: "afternoon",\n    evening: "evening",\n    night: "night",\n  },\n};\n\nconst formattingDayPeriodValues = {\n  narrow: {\n    am: "a",\n    pm: "p",\n    midnight: "mi",\n    noon: "n",\n    morning: "in the morning",\n    afternoon: "in the afternoon",\n    evening: "in the evening",\n    night: "at night",\n  },\n  abbreviated: {\n    am: "AM",\n    pm: "PM",\n    midnight: "midnight",\n    noon: "noon",\n    morning: "in the morning",\n    afternoon: "in the afternoon",\n    evening: "in the evening",\n    night: "at night",\n  },\n  wide: {\n    am: "a.m.",\n    pm: "p.m.",\n    midnight: "midnight",\n    noon: "noon",\n    morning: "in the morning",\n    afternoon: "in the afternoon",\n    evening: "in the evening",\n    night: "at night",\n  },\n};\n\nconst ordinalNumber = (dirtyNumber, _options) => {\n  const number = Number(dirtyNumber);\n\n  // If ordinal numbers depend on context, for example,\n  // if they are different for different grammatical genders,\n  // use `options.unit`.\n  //\n  // `unit` can be \'year\', \'quarter\', \'month\', \'week\', \'date\', \'dayOfYear\',\n  // \'day\', \'hour\', \'minute\', \'second\'.\n\n  const rem100 = number % 100;\n  if (rem100 > 20 || rem100 < 10) {\n    switch (rem100 % 10) {\n      case 1:\n        return number + "st";\n      case 2:\n        return number + "nd";\n      case 3:\n        return number + "rd";\n    }\n  }\n  return number + "th";\n};\n\nconst localize = {\n  ordinalNumber,\n\n  era: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: eraValues,\n    defaultWidth: "wide",\n  }),\n\n  quarter: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: quarterValues,\n    defaultWidth: "wide",\n    argumentCallback: (quarter) => quarter - 1,\n  }),\n\n  month: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: monthValues,\n    defaultWidth: "wide",\n  }),\n\n  day: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: dayValues,\n    defaultWidth: "wide",\n  }),\n\n  dayPeriod: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: dayPeriodValues,\n    defaultWidth: "wide",\n    formattingValues: formattingDayPeriodValues,\n    defaultFormattingWidth: "wide",\n  }),\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/locale/en-US/_lib/localize.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US/_lib/match.js":
      /*!**********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.js ***!
  \**********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   match: () => (/* binding */ match)\n/* harmony export */ });\n/* harmony import */ var _lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.js */ "./node_modules/date-fns/locale/_lib/buildMatchFn.js");\n/* harmony import */ var _lib_buildMatchPatternFn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.js */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js");\n\n\n\nconst matchOrdinalNumberPattern = /^(\\d+)(th|st|nd|rd)?/i;\nconst parseOrdinalNumberPattern = /\\d+/i;\n\nconst matchEraPatterns = {\n  narrow: /^(b|a)/i,\n  abbreviated: /^(b\\.?\\s?c\\.?|b\\.?\\s?c\\.?\\s?e\\.?|a\\.?\\s?d\\.?|c\\.?\\s?e\\.?)/i,\n  wide: /^(before christ|before common era|anno domini|common era)/i,\n};\nconst parseEraPatterns = {\n  any: [/^b/i, /^(a|c)/i],\n};\n\nconst matchQuarterPatterns = {\n  narrow: /^[1234]/i,\n  abbreviated: /^q[1234]/i,\n  wide: /^[1234](th|st|nd|rd)? quarter/i,\n};\nconst parseQuarterPatterns = {\n  any: [/1/i, /2/i, /3/i, /4/i],\n};\n\nconst matchMonthPatterns = {\n  narrow: /^[jfmasond]/i,\n  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,\n  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,\n};\nconst parseMonthPatterns = {\n  narrow: [\n    /^j/i,\n    /^f/i,\n    /^m/i,\n    /^a/i,\n    /^m/i,\n    /^j/i,\n    /^j/i,\n    /^a/i,\n    /^s/i,\n    /^o/i,\n    /^n/i,\n    /^d/i,\n  ],\n\n  any: [\n    /^ja/i,\n    /^f/i,\n    /^mar/i,\n    /^ap/i,\n    /^may/i,\n    /^jun/i,\n    /^jul/i,\n    /^au/i,\n    /^s/i,\n    /^o/i,\n    /^n/i,\n    /^d/i,\n  ],\n};\n\nconst matchDayPatterns = {\n  narrow: /^[smtwf]/i,\n  short: /^(su|mo|tu|we|th|fr|sa)/i,\n  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,\n  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,\n};\nconst parseDayPatterns = {\n  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],\n  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],\n};\n\nconst matchDayPeriodPatterns = {\n  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,\n  any: /^([ap]\\.?\\s?m\\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,\n};\nconst parseDayPeriodPatterns = {\n  any: {\n    am: /^a/i,\n    pm: /^p/i,\n    midnight: /^mi/i,\n    noon: /^no/i,\n    morning: /morning/i,\n    afternoon: /afternoon/i,\n    evening: /evening/i,\n    night: /night/i,\n  },\n};\n\nconst match = {\n  ordinalNumber: (0,_lib_buildMatchPatternFn_js__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({\n    matchPattern: matchOrdinalNumberPattern,\n    parsePattern: parseOrdinalNumberPattern,\n    valueCallback: (value) => parseInt(value, 10),\n  }),\n\n  era: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchEraPatterns,\n    defaultMatchWidth: "wide",\n    parsePatterns: parseEraPatterns,\n    defaultParseWidth: "any",\n  }),\n\n  quarter: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchQuarterPatterns,\n    defaultMatchWidth: "wide",\n    parsePatterns: parseQuarterPatterns,\n    defaultParseWidth: "any",\n    valueCallback: (index) => index + 1,\n  }),\n\n  month: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchMonthPatterns,\n    defaultMatchWidth: "wide",\n    parsePatterns: parseMonthPatterns,\n    defaultParseWidth: "any",\n  }),\n\n  day: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchDayPatterns,\n    defaultMatchWidth: "wide",\n    parsePatterns: parseDayPatterns,\n    defaultParseWidth: "any",\n  }),\n\n  dayPeriod: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchDayPeriodPatterns,\n    defaultMatchWidth: "any",\n    parsePatterns: parseDayPeriodPatterns,\n    defaultParseWidth: "any",\n  }),\n};\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/locale/en-US/_lib/match.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/startOfDay.js":
      /*!*********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.js ***!
  \*********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   startOfDay: () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");\n\n\n/**\n * The {@link startOfDay} function options.\n */\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.\n *\n * @param date - The original date\n * @param options - The options\n *\n * @returns The start of a day\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\nfunction startOfDay(date, options) {\n  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);\n  _date.setHours(0, 0, 0, 0);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/startOfDay.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/startOfISOWeek.js":
      /*!*************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.js ***!
  \*************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)\n/* harmony export */ });\n/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");\n\n\n/**\n * The {@link startOfISOWeek} function options.\n */\n\n/**\n * @name startOfISOWeek\n * @category ISO Week Helpers\n * @summary Return the start of an ISO week for the given date.\n *\n * @description\n * Return the start of an ISO week for the given date.\n * The result will be in the local timezone.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.\n *\n * @param date - The original date\n * @param options - An object with options\n *\n * @returns The start of an ISO week\n *\n * @example\n * // The start of an ISO week for 2 September 2014 11:55:00:\n * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Mon Sep 01 2014 00:00:00\n */\nfunction startOfISOWeek(date, options) {\n  return (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { ...options, weekStartsOn: 1 });\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/startOfISOWeek.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/startOfISOWeekYear.js":
      /*!*****************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.js ***!
  \*****************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)\n/* harmony export */ });\n/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");\n/* harmony import */ var _getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.js */ "./node_modules/date-fns/getISOWeekYear.js");\n/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");\n\n\n\n\n/**\n * The {@link startOfISOWeekYear} function options.\n */\n\n/**\n * @name startOfISOWeekYear\n * @category ISO Week-Numbering Year Helpers\n * @summary Return the start of an ISO week-numbering year for the given date.\n *\n * @description\n * Return the start of an ISO week-numbering year,\n * which always starts 3 days before the year\'s first Thursday.\n * The result will be in the local timezone.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.\n *\n * @param date - The original date\n * @param options - An object with options\n *\n * @returns The start of an ISO week-numbering year\n *\n * @example\n * // The start of an ISO week-numbering year for 2 July 2005:\n * const result = startOfISOWeekYear(new Date(2005, 6, 2))\n * //=> Mon Jan 03 2005 00:00:00\n */\nfunction startOfISOWeekYear(date, options) {\n  const year = (0,_getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date, options);\n  const fourthOfJanuary = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, 0);\n  fourthOfJanuary.setFullYear(year, 0, 4);\n  fourthOfJanuary.setHours(0, 0, 0, 0);\n  return (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/startOfISOWeekYear.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/startOfWeek.js":
      /*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)\n/* harmony export */ });\n/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");\n/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");\n\n\n\n/**\n * The {@link startOfWeek} function options.\n */\n\n/**\n * @name startOfWeek\n * @category Week Helpers\n * @summary Return the start of a week for the given date.\n *\n * @description\n * Return the start of a week for the given date.\n * The result will be in the local timezone.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.\n *\n * @param date - The original date\n * @param options - An object with options\n *\n * @returns The start of a week\n *\n * @example\n * // The start of a week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sun Aug 31 2014 00:00:00\n *\n * @example\n * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })\n * //=> Mon Sep 01 2014 00:00:00\n */\nfunction startOfWeek(date, options) {\n  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();\n  const weekStartsOn =\n    options?.weekStartsOn ??\n    options?.locale?.options?.weekStartsOn ??\n    defaultOptions.weekStartsOn ??\n    defaultOptions.locale?.options?.weekStartsOn ??\n    0;\n\n  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(date, options?.in);\n  const day = _date.getDay();\n  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n\n  _date.setDate(_date.getDate() - diff);\n  _date.setHours(0, 0, 0, 0);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/startOfWeek.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/startOfWeekYear.js":
      /*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.js ***!
  \**************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)\n/* harmony export */ });\n/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");\n/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");\n/* harmony import */ var _getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.js */ "./node_modules/date-fns/getWeekYear.js");\n/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");\n\n\n\n\n\n/**\n * The {@link startOfWeekYear} function options.\n */\n\n/**\n * @name startOfWeekYear\n * @category Week-Numbering Year Helpers\n * @summary Return the start of a local week-numbering year for the given date.\n *\n * @description\n * Return the start of a local week-numbering year.\n * The exact calculation depends on the values of\n * `options.weekStartsOn` (which is the index of the first day of the week)\n * and `options.firstWeekContainsDate` (which is the day of January, which is always in\n * the first week of the week-numbering year)\n *\n * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n * @typeParam ResultDate - The result `Date` type.\n *\n * @param date - The original date\n * @param options - An object with options\n *\n * @returns The start of a week-numbering year\n *\n * @example\n * // The start of an a week-numbering year for 2 July 2005 with default settings:\n * const result = startOfWeekYear(new Date(2005, 6, 2))\n * //=> Sun Dec 26 2004 00:00:00\n *\n * @example\n * // The start of a week-numbering year for 2 July 2005\n * // if Monday is the first day of week\n * // and 4 January is always in the first week of the year:\n * const result = startOfWeekYear(new Date(2005, 6, 2), {\n *   weekStartsOn: 1,\n *   firstWeekContainsDate: 4\n * })\n * //=> Mon Jan 03 2005 00:00:00\n */\nfunction startOfWeekYear(date, options) {\n  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();\n  const firstWeekContainsDate =\n    options?.firstWeekContainsDate ??\n    options?.locale?.options?.firstWeekContainsDate ??\n    defaultOptions.firstWeekContainsDate ??\n    defaultOptions.locale?.options?.firstWeekContainsDate ??\n    1;\n\n  const year = (0,_getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);\n  const firstWeek = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(options?.in || date, 0);\n  firstWeek.setFullYear(year, 0, firstWeekContainsDate);\n  firstWeek.setHours(0, 0, 0, 0);\n  const _date = (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/startOfWeekYear.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/startOfYear.js":
      /*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   startOfYear: () => (/* binding */ startOfYear)\n/* harmony export */ });\n/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");\n\n\n/**\n * The {@link startOfYear} function options.\n */\n\n/**\n * @name startOfYear\n * @category Year Helpers\n * @summary Return the start of a year for the given date.\n *\n * @description\n * Return the start of a year for the given date.\n * The result will be in the local timezone.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.\n *\n * @param date - The original date\n * @param options - The options\n *\n * @returns The start of a year\n *\n * @example\n * // The start of a year for 2 September 2014 11:55:00:\n * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))\n * //=> Wed Jan 01 2014 00:00:00\n */\nfunction startOfYear(date, options) {\n  const date_ = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);\n  date_.setFullYear(date_.getFullYear(), 0, 1);\n  date_.setHours(0, 0, 0, 0);\n  return date_;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/startOfYear.js?',
        );

        /***/
      },

    /***/ "./node_modules/date-fns/toDate.js":
      /*!*****************************************!*\
  !*** ./node_modules/date-fns/toDate.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   toDate: () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`\n * enabling to transfer extra properties from the reference date to the new date.\n * It\'s useful for extensions like [`TZDate`](https://github.com/date-fns/tz)\n * that accept a time zone as a constructor argument.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.\n *\n * @param argument - The value to convert\n *\n * @returns The parsed date in the local time zone\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument, context) {\n  // [TODO] Get rid of `toDate` or `constructFrom`?\n  return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(context || argument, argument);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);\n\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/toDate.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?",
        );

        /***/
      },

    /***/ "./src/dom_handler.js":
      /*!****************************!*\
  !*** ./src/dom_handler.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayCurrentDate: () => (/* binding */ displayCurrentDate),\n/* harmony export */   displayFooter: () => (/* binding */ displayFooter),\n/* harmony export */   displayMain: () => (/* binding */ displayMain)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/format.js\");\n/* harmony import */ var _dist_images_Sun_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/images/Sun.svg */ \"./dist/images/Sun.svg\");\n/* harmony import */ var _dist_images_Rain_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/images/Rain.svg */ \"./dist/images/Rain.svg\");\n/* harmony import */ var _dist_images_Cloud_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/images/Cloud.svg */ \"./dist/images/Cloud.svg\");\n/* harmony import */ var _dist_images_Overcast_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dist/images/Overcast.svg */ \"./dist/images/Overcast.svg\");\n/* eslint-disable consistent-return */\n/* eslint-disable no-else-return */\n\n\n\n\n\n\nfunction getWeatherImage(condition) {\n  const conditionText = condition.text;\n  if (conditionText === 'Cloudy' || conditionText === 'Mist') {\n    return _dist_images_Cloud_svg__WEBPACK_IMPORTED_MODULE_2__;\n  } else if (conditionText === 'Partly Cloudy ' || conditionText === 'Overcast ' || conditionText === 'Partly Cloudy') {\n    return _dist_images_Overcast_svg__WEBPACK_IMPORTED_MODULE_3__;\n  } else if (conditionText === 'Sunny' || conditionText === 'Clear ' || conditionText === 'Clear') {\n    return _dist_images_Sun_svg__WEBPACK_IMPORTED_MODULE_0__;\n  } else if (conditionText === 'Rain' || conditionText === 'Patchy rain nearby') {\n    return _dist_images_Rain_svg__WEBPACK_IMPORTED_MODULE_1__;\n  } else {\n    return condition.icon; // Handle other conditions with api icon\n  }\n}\n\nconst displayMain = (data) => {\n  const mainImg = document.querySelector('.main-img');\n  const mainCity = document.querySelector('.main-city');\n  const mainTemp = document.querySelector('.main-temp');\n\n  const formatDate = data.current.last_updated;\n  console.log(formatDate);\n  // mainDate.textContent = formatDate.slice(0, 11); // format date\n\n  mainCity.textContent = data.location.name;\n  mainTemp.textContent = `${data.current.temp_c}°c`;\n\n  const mainImagePath = getWeatherImage(data.current.condition);\n  mainImg.src = mainImagePath;\n  mainImg.alt = data.current.condition.text;\n};\n\nconst displayCurrentDate = () => {\n  const date = new Date();\n  const formatedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(date, 'EEEE, do LLLL');\n\n  const mainDate = document.querySelector('.main-date');\n  mainDate.textContent = formatedDate;\n};\n\nconst displayFooter = (data) => {\n  const timeSection1 = document.querySelector('.time-section-1');\n  const timeSection2 = document.querySelector('.time-section-2');\n  const timeSection3 = document.querySelector('.time-section-3');\n  const timeSection4 = document.querySelector('.time-section-4');\n\n  // 1st Cell\n  const timeSection1Path = data.forecast.forecastday[0].hour[6];\n  const timeSection1Date = timeSection1Path.time;\n  const imagePath1 = getWeatherImage(timeSection1Path.condition);\n\n  timeSection1.querySelector('.img').src = imagePath1;\n  timeSection1.querySelector('.img').alt = timeSection1Path.condition.text;\n  timeSection1.querySelector('.time').textContent = timeSection1Date.slice(11, 16);\n  timeSection1.querySelector('.temp').textContent = `${timeSection1Path.temp_c}°c`;\n\n  // 2nd Cell\n  const timeSection2Path = data.forecast.forecastday[0].hour[12];\n  const timeSection2Date = timeSection2Path.time;\n  const imagePath2 = getWeatherImage(timeSection2Path.condition);\n\n  timeSection2.querySelector('.img').src = imagePath2;\n  timeSection2.querySelector('.img').alt = timeSection2Path.condition.text;\n  timeSection2.querySelector('.time').textContent = timeSection2Date.slice(11, 16);\n  timeSection2.querySelector('.temp').textContent = `${timeSection2Path.temp_c}°c`;\n\n  // 3rd Cell\n  const timeSection3Path = data.forecast.forecastday[0].hour[16];\n  const timeSection3Date = timeSection3Path.time;\n  const imagePath3 = getWeatherImage(timeSection3Path.condition);\n\n  timeSection3.querySelector('.img').src = imagePath3;\n  timeSection3.querySelector('.img').alt = timeSection3Path.condition.text;\n  timeSection3.querySelector('.time').textContent = timeSection3Date.slice(11, 16);\n  timeSection3.querySelector('.temp').textContent = `${timeSection3Path.temp_c}°c`;\n\n  // 4th Cell\n  const timeSection4Path = data.forecast.forecastday[0].hour[21];\n  const timeSection4Date = timeSection4Path.time;\n  const imagePath4 = getWeatherImage(timeSection4Path.condition);\n\n  timeSection4.querySelector('.img').src = imagePath4;\n  timeSection4.querySelector('.img').alt = timeSection4Path.condition.text;\n  timeSection4.querySelector('.time').textContent = timeSection4Date.slice(11, 16);\n  timeSection4.querySelector('.temp').textContent = `${timeSection4Path.temp_c}°c`;\n};\n\n\n//# sourceURL=webpack://weather-app/./src/dom_handler.js?",
        );

        /***/
      },

    /***/ "./src/home.js":
      /*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_handler */ \"./src/dom_handler.js\");\n// eslint-disable prefer-destructuring\n\n\nconst home = () => {\n  const form = document.querySelector('#form');\n  const cityInput = document.querySelector('#city-input');\n  const submitButton = document.querySelector('.submit-button');\n\n  const isRequired = (value) => {\n    if (value === '') {\n      return false;\n    }\n    return true;\n  };\n\n  const isCityValid = () => {\n    const formClass = document.querySelector('#form').className;\n    if (formClass === 'invalid') {\n      return false;\n    }\n    return true;\n  };\n\n  const showError = (input, message) => {\n    const fieldSet = input.parentElement;\n    const inputForm = fieldSet.querySelector('input');\n    inputForm.classList.add('error');\n    inputForm.classList.remove('success');\n\n    const error = fieldSet.querySelector('small');\n    error.textContent = message;\n  };\n\n  const showSuccess = (input) => {\n    const fieldSet = input.parentElement;\n    const inputForm = fieldSet.querySelector('input');\n    inputForm.classList.remove('error');\n    inputForm.classList.add('success');\n\n    const error = fieldSet.querySelector('small');\n    error.textContent = '';\n  };\n\n  const checkInput = () => {\n    let valid = false;\n    const input = cityInput.value.trim();\n\n    if (!isRequired(input)) {\n      showError(cityInput, '*Choose a city');\n    } else if (!isCityValid()) {\n      showError(cityInput, '*Invalid city name');\n    } else {\n      showSuccess(cityInput);\n      valid = true;\n    }\n    return valid;\n  };\n\n  const url = 'https://api.weatherapi.com/v1/forecast.json?';\n  const key = 'bce6611d55994183931152601230107';\n\n  async function getWeather(cityChoice) {\n    try {\n      const response = await fetch(`${url}key=${key}&q=${cityChoice}&days=8&aqi=no&alerts=no`, { mode: 'cors' });\n      if (!response.ok) {\n        throw new Error(`HTTP error, status: ${response.status}`);\n      }\n      const data = await response.json();\n      console.log(data);\n\n      _dom_handler__WEBPACK_IMPORTED_MODULE_0__.displayMain(data);\n      _dom_handler__WEBPACK_IMPORTED_MODULE_0__.displayCurrentDate();\n      _dom_handler__WEBPACK_IMPORTED_MODULE_0__.displayFooter(data);\n    } catch (error) { // re-throwing the error, ensure error is propagated up the call stack\n      console.error('An error occurred while fetching data:', error);\n\n      form.classList.add('invalid');\n      form.classList.remove('valid');\n      checkInput();\n\n      throw error;\n    }\n  }\n\n  // initialization\n  getWeather('Seoul');\n\n  function formHandler() {\n    const isCityChoiceValid = checkInput();\n    const isFormValid = isCityChoiceValid;\n\n    if (isFormValid) {\n      const cityChoice = cityInput.value.trim();\n      getWeather(cityChoice);\n\n      const input = document.querySelector('#city-input');\n      input.classList.remove('success');\n\n      console.log('Valid form');\n    } else {\n      console.log('Invalid form');\n    }\n  }\n\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    formHandler();\n  });\n\n  submitButton.addEventListener('click', (e) => {\n    e.preventDefault();\n    formHandler();\n  });\n\n  form.addEventListener('input', (e) => {\n    form.classList.add('valid'); // As we can receive en error in the call, reset if input change\n    form.classList.remove('invalid');\n\n    switch (e.target.id) {\n      case 'city-input':\n        checkInput();\n        break;\n      default: // Default case to avoid error eslint\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n/*  Header section :\n        Next to Seoul put a button to change location\n        Depend on the location value, take data and display it\n\n    Red section :\n        Display the image that depend on the actual weather\n\n    Purple section :\n        Display the weather for the day\n        Hour + t*\n*/\n\n\n//# sourceURL=webpack://weather-app/./src/home.js?",
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");\n\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?',
        );

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?',
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (
        document.currentScript &&
        document.currentScript.tagName.toUpperCase() === "SCRIPT"
      )
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (
            i > -1 &&
            (!scriptUrl || !/^http(s?):/.test(scriptUrl))
          )
            scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/^blob:/, "")
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
