/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/getDay/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/getDay/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name getDay\n * @category Weekday Helpers\n * @summary Get the day of the week of the given date.\n *\n * @description\n * Get the day of the week of the given date.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the given date\n * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Which day of the week is 29 February 2012?\n * const result = getDay(new Date(2012, 1, 29))\n * //=> 3\n */\n\nfunction getDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  var day = date.getDay();\n  return day;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/getDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/components/hamburgerButton.ts":
/*!*******************************************!*\
  !*** ./src/components/hamburgerButton.ts ***!
  \*******************************************/
/***/ (() => {

eval("var hamburgerButton = document.getElementById(\"hamburgerButton\");\nhamburgerButton.addEventListener('click', function (event) {\n    event.preventDefault();\n    var nav = document.getElementById(\"nav\");\n    var mainNav = document.querySelector('.nav-section');\n    //nav.classList.toggle(\"displayNone\");\n    mainNav.classList.toggle('show-nav');\n    console.log(nav);\n});\n\n\n//# sourceURL=webpack://todo-list/./src/components/hamburgerButton.ts?");

/***/ }),

/***/ "./src/components/lightModeDarkMode.ts":
/*!*********************************************!*\
  !*** ./src/components/lightModeDarkMode.ts ***!
  \*********************************************/
/***/ (() => {

eval("var lightDarkMode = document.getElementById(\"lmdm\");\nlightDarkMode.onclick = function LMDM() {\n    var color1 = document.documentElement.style.getPropertyValue('--lightColor');\n    if (color1 === '#00539c') {\n        lightDarkMode.textContent = \"Light🌞Mode\";\n        document.documentElement.style.setProperty('--lightColor', '#eea47f');\n        document.documentElement.style.setProperty('--darkColor', '#00539c');\n    }\n    else {\n        lightDarkMode.textContent = \"Dark🌝Mode\";\n        document.documentElement.style.setProperty('--lightColor', '#00539c');\n        document.documentElement.style.setProperty('--darkColor', '#eea47f');\n    }\n    ;\n};\n\n\n//# sourceURL=webpack://todo-list/./src/components/lightModeDarkMode.ts?");

/***/ }),

/***/ "./src/components/modal.ts":
/*!*********************************!*\
  !*** ./src/components/modal.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleModal\": () => (/* binding */ toggleModal)\n/* harmony export */ });\nvar modal = document.querySelector(\".modal\");\nvar trigger = document.querySelector(\".trigger\");\nvar closeButton = document.querySelector(\".close-button\");\nfunction toggleModal() {\n    modal.classList.toggle(\"show-modal\");\n}\nfunction windowOnClick(event) {\n    if (event.target === modal) {\n        toggleModal();\n    }\n}\ntrigger.addEventListener(\"click\", toggleModal);\ncloseButton.addEventListener(\"click\", toggleModal);\nwindow.addEventListener(\"click\", windowOnClick);\n\n\n//# sourceURL=webpack://todo-list/./src/components/modal.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_modal_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal */ \"./src/components/modal.ts\");\n/* harmony import */ var _components_hamburgerButton_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/hamburgerButton.ts */ \"./src/components/hamburgerButton.ts\");\n/* harmony import */ var _components_hamburgerButton_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_hamburgerButton_ts__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_lightModeDarkMode_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/lightModeDarkMode.ts */ \"./src/components/lightModeDarkMode.ts\");\n/* harmony import */ var _components_lightModeDarkMode_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_lightModeDarkMode_ts__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var date_fns_getDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/getDay */ \"./node_modules/date-fns/esm/getDay/index.js\");\n\n\n\n\n\n\nvar inbox = [];\nvar submitBtn = document.getElementById('submitBtn');\nsubmitBtn.onclick = function getInputs(e) {\n    e.preventDefault();\n    (0,_components_modal_ts__WEBPACK_IMPORTED_MODULE_1__.toggleModal)();\n    var title = document.getElementById(\"title\");\n    var description = document.getElementById(\"description\");\n    var dateTime = document.getElementById(\"dateTime\");\n    var priority = document.getElementById(\"priority\");\n    var project = document.getElementById(\"project\");\n    console.log(dateTime.value);\n    console.log('all clear');\n    return createObject(title.value, description.value, processDate(dateTime.value), priority.value, project.value);\n};\nfunction processDate(dateTime) {\n    var timeDateArray = dateTime.split('T');\n    var time = timeDateArray[1];\n    var dateArray = timeDateArray[0].split('-');\n    var date = dateArray[1] + \"-\" + dateArray[2] + \"-\" + dateArray[0];\n    var result = (0,date_fns_getDay__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new Date(+dateArray[0], +dateArray[1] - 1, +dateArray[2]));\n    var day;\n    switch (result) {\n        case 0:\n            day = \"Sunday\";\n            break;\n        case 1:\n            day = \"Monday\";\n            break;\n        case 2:\n            day = \"Tuesday\";\n            break;\n        case 3:\n            day = \"Wednesday\";\n            break;\n        case 4:\n            day = \"Thursday\";\n            break;\n        case 5:\n            day = \"Friday\";\n            break;\n        case 6:\n            day = \"Saturday\";\n            break;\n    }\n    return day + \" \" + date + \" at \" + time;\n}\nfunction createObject(title, description, dateTime, priority, project) {\n    var newObject = {\n        title: title,\n        description: description,\n        dateTime: dateTime,\n        priority: priority,\n        project: project\n    };\n    console.log(dateTime);\n    console.log('all clear');\n    return storeObject(newObject);\n}\nfunction storeObject(obj) {\n    inbox.push(obj);\n    console.log('all clear');\n    return displayObjects(inbox);\n}\nfunction displayObjects(array) {\n    var main = document.getElementById('content');\n    main.innerHTML = \"\";\n    for (var _i = 0, inbox_1 = inbox; _i < inbox_1.length; _i++) {\n        var obj = inbox_1[_i];\n        var counter = 1;\n        var container = document.createElement('div');\n        var title = document.createElement('p');\n        var description = document.createElement('p');\n        var dueDate = document.createElement('p');\n        var dueTime = document.createElement('p');\n        title.textContent = obj.title;\n        description.textContent = obj.description;\n        dueDate.textContent = obj.dateTime;\n        container.appendChild(title);\n        container.appendChild(description);\n        container.appendChild(dueDate);\n        container.appendChild(dueTime);\n        main.appendChild(container);\n        counter += 1;\n        console.log(counter);\n    }\n    resetForm();\n}\nfunction resetForm() {\n    var title = document.getElementById(\"title\");\n    var description = document.getElementById(\"description\");\n    var dateTime = document.getElementById(\"dateTime\");\n    title.value = \"\";\n    description.value = \"\";\n    description.value = \"\";\n    var form = document.getElementById(\"modalForm\");\n    form.reset();\n}\n\n\n//# sourceURL=webpack://todo-list/./src/index.ts?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> :root {\\n|   --title: \\\"roboto-title\\\";\\n|   --headers: \\\"roboto-headers\\\";\");\n\n//# sourceURL=webpack://todo-list/./src/styles.scss?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;