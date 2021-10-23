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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Regular.ttf */ \"./src/fonts/Roboto-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Light.ttf */ \"./src/fonts/Roboto-Light.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-BoldItalic.ttf */ \"./src/fonts/Roboto-BoldItalic.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --title: \\\"roboto-title\\\";\\r\\n  --headers: \\\"roboto-headers\\\";\\r\\n  --text: \\\"roboto-text\\\";\\r\\n  --lightColor: #eea47f;\\r\\n  --darkColor: #00539c;  \\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n/*\\r\\n* {\\r\\n  outline: 1px solid red;\\r\\n} \\r\\n*/\\r\\n\\r\\n@font-face {\\r\\n  font-family: \\\"roboto-headers\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"truetype\\\");\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: \\\"roboto-text\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"truetype\\\");\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: \\\"roboto-title\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"truetype\\\");\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.trigger {\\r\\n  background-color: var(--lightColor);\\r\\n  color: var(--darkColor);\\r\\n  border-radius: 25px;\\r\\n  margin: 4px;\\r\\n}\\r\\n\\r\\nlabel {\\r\\n  font-family: \\\"roboto-text\\\";\\r\\n    color: var(--lightColor);\\r\\n    font-size: .75em;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  justify-self: center;\\r\\n  align-self: center;\\r\\n  font-family: var(--title, \\\"roboto-title\\\");\\r\\n  color: var(--lightColor);\\r\\n  font-size: 2em;\\r\\n  margin: 4px;\\r\\n  top: 0;\\r\\n}\\r\\n\\r\\np {\\r\\n  font-family: var(--text);\\r\\n  color: var(--lightColor);\\r\\n  font-size: .75em;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: var(--darkColor);\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  font-family: var(--headers);\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  color: var(--lightColor);\\r\\n  font-size: 1.75em;\\r\\n}\\r\\n\\r\\n.displayNone {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.inputOutline {\\r\\n  border: 2px solid black;\\r\\n  background-color: lightgray;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  margin-bottom: 3%;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  row-gap: 2%;\\r\\n}\\r\\n\\r\\n.breakLabel::before {\\r\\n  content: \\\"\\\\a\\\";\\r\\n  white-space: pre;\\r\\n}\\r\\n\\r\\n.nav-section {\\r\\n  visibility: hidden;\\r\\n  opacity: 0;\\r\\n  height: 0%;\\r\\n  transform: scale(1.1);\\r\\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\\r\\n}\\r\\n\\r\\n#header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 3%;\\r\\n}\\r\\n\\r\\n#nav-icon1 span {\\r\\n  justify-self: center;\\r\\n  align-self: center;\\r\\n  display: block;\\r\\n  position: relative;\\r\\n  right: 0px;\\r\\n  top: 0;\\r\\n  margin: 4px;\\r\\n  height: 9px;\\r\\n  width: 60px;\\r\\n  background: var(--lightColor);\\r\\n  border-radius: 9px;\\r\\n  cursor: pointer;\\r\\n  -webkit-transition: 0.25s ease-in-out;\\r\\n  -moz-transition: 0.25s ease-in-out;\\r\\n  -o-transition: 0.25s ease-in-out;\\r\\n  transition: 0.25s ease-in-out;\\r\\n}\\r\\n\\r\\n#nav-menu1:checked ~ #nav-icon1 span:nth-child(1) {\\r\\n  -webkit-transform: rotate(135deg) translate(21px, -13px);\\r\\n  -moz-transform: rotate(135deg) translate(21px, -13px);\\r\\n  -o-transform: rotate(135deg) translate(21px, -13px);\\r\\n  transform: rotate(135deg) translate(21px, -13px);\\r\\n}\\r\\n#nav-menu1:checked ~ #nav-icon1 span:nth-child(2) {\\r\\n  opacity: 0;\\r\\n  right: 60px;\\r\\n}\\r\\n#nav-menu1:checked ~ #nav-icon1 span:nth-child(3) {\\r\\n  -webkit-transform: rotate(-135deg) translate(3px);\\r\\n  -moz-transform: rotate(-135deg) translate(3px);\\r\\n  -o-transform: rotate(-135deg) translate(3px);\\r\\n  transform: rotate(-135deg) translate(3px);\\r\\n}\\r\\n\\r\\n.toDoFlex {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  gap: 5%;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.submitBtn {\\r\\n  color: black;\\r\\n  align-self: center;\\r\\n  text-align: center;\\r\\n  width: fit-content;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"] {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.todoCheck {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  opacity: 0;\\r\\n  visibility: hidden;\\r\\n  transform: scale(1.1);\\r\\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\\r\\n}\\r\\n.modal-content {\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  background-color: white;\\r\\n  padding: 1rem 1.5rem;\\r\\n  width: 80%;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n.close-button {\\r\\n  float: right;\\r\\n  width: 1.5rem;\\r\\n  line-height: 1.5rem;\\r\\n  text-align: center;\\r\\n  cursor: pointer;\\r\\n  border-radius: 0.25rem;\\r\\n  background-color: lightgray;\\r\\n}\\r\\n.close-button:hover {\\r\\n  background-color: darkgray;\\r\\n}\\r\\n.show-modal {\\r\\n  opacity: 1;\\r\\n  visibility: visible;\\r\\n  transform: scale(1);\\r\\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\\r\\n}\\r\\n\\r\\n.show-nav {\\r\\n  height: initial;\\r\\n  visibility: visible;\\r\\n  opacity: 1;\\r\\n  transform: scale(1);\\r\\n  transition: visibility 0s linear 0s, opacity 1s 0s, transform 1s;\\r\\n}\\r\\n\\r\\n.input[type=\\\"checkbox\\\"] { display: none; }\\r\\n\\r\\n.input[type=\\\"checkbox\\\"] + label {\\r\\n  display: block;\\r\\n  position: relative;\\r\\n  padding-left: 35px;\\r\\n  font-family: \\\"roboto-text\\\";\\r\\n  color: var(--lightColor);\\r\\n  size: .75em;\\r\\n  cursor: pointer;\\r\\n  user-select: all;\\r\\n  -webkit-user-select: none;\\r\\n  -moz-user-select: none;\\r\\n  -ms-user-select: none;\\r\\n}\\r\\n\\r\\n.input[type=\\\"checkbox\\\"] + label:last-child { margin-bottom: 3%; margin-top: 3%; }\\r\\n\\r\\n.input[type=\\\"checkbox\\\"] + label:before {\\r\\n  content: '';\\r\\n  display: block;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  border: 1px solid var(--lightColor);\\r\\n  position: absolute;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  opacity: .6;\\r\\n  -webkit-transition: all .12s, border-color .08s;\\r\\n  transition: all .12s, border-color .08s;\\r\\n}\\r\\n\\r\\n.input[type=\\\"checkbox\\\"]:checked + label:before {\\r\\n  width: 10px;\\r\\n  top: -5px;\\r\\n  left: 5px;\\r\\n  border-radius: 0;\\r\\n  opacity: 1;\\r\\n  border-top-color: transparent;\\r\\n  border-left-color: transparent;\\r\\n  -webkit-transform: rotate(45deg);\\r\\n  transform: rotate(45deg);\\r\\n  margin-top: 3%;\\r\\n  margin-bottom: 3%;\\r\\n}\\r\\n\\r\\n.input[type=\\\"checkbox\\\"]:checked + label{\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.thing::after {\\r\\n  border: none;\\r\\n  left: unset;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/hamburgerButton.ts":
/*!*******************************************!*\
  !*** ./src/components/hamburgerButton.ts ***!
  \*******************************************/
/***/ (() => {

eval("var hamburgerButton = document.getElementById(\"hamburgerButton\");\r\nhamburgerButton.addEventListener('click', function (event) {\r\n    event.preventDefault();\r\n    var nav = document.getElementById(\"nav\");\r\n    var mainNav = document.querySelector('.nav-section');\r\n    //nav.classList.toggle(\"displayNone\");\r\n    mainNav.classList.toggle('show-nav');\r\n    console.log(nav);\r\n});\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/hamburgerButton.ts?");

/***/ }),

/***/ "./src/components/lightModeDarkMode.ts":
/*!*********************************************!*\
  !*** ./src/components/lightModeDarkMode.ts ***!
  \*********************************************/
/***/ (() => {

eval("var lightDarkMode = document.getElementById(\"lmdm\");\r\nlightDarkMode.onclick = function LMDM() {\r\n    var color1 = document.documentElement.style.getPropertyValue('--lightColor');\r\n    if (color1 === '#00539c') {\r\n        lightDarkMode.textContent = \"Light🌞Mode\";\r\n        document.documentElement.style.setProperty('--lightColor', '#eea47f');\r\n        document.documentElement.style.setProperty('--darkColor', '#00539c');\r\n    }\r\n    else {\r\n        lightDarkMode.textContent = \"Dark🌝Mode\";\r\n        document.documentElement.style.setProperty('--lightColor', '#00539c');\r\n        document.documentElement.style.setProperty('--darkColor', '#eea47f');\r\n    }\r\n    ;\r\n};\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/lightModeDarkMode.ts?");

/***/ }),

/***/ "./src/components/modal.ts":
/*!*********************************!*\
  !*** ./src/components/modal.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleModal\": () => (/* binding */ toggleModal)\n/* harmony export */ });\nvar modal = document.querySelector(\".modal\");\r\nvar trigger = document.querySelector(\".trigger\");\r\nvar closeButton = document.querySelector(\".close-button\");\r\nfunction toggleModal() {\r\n    modal.classList.toggle(\"show-modal\");\r\n}\r\nfunction windowOnClick(event) {\r\n    if (event.target === modal) {\r\n        toggleModal();\r\n    }\r\n}\r\ntrigger.addEventListener(\"click\", toggleModal);\r\ncloseButton.addEventListener(\"click\", toggleModal);\r\nwindow.addEventListener(\"click\", windowOnClick);\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/modal.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _components_modal_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal */ \"./src/components/modal.ts\");\n/* harmony import */ var _components_hamburgerButton_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/hamburgerButton.ts */ \"./src/components/hamburgerButton.ts\");\n/* harmony import */ var _components_hamburgerButton_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_hamburgerButton_ts__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_lightModeDarkMode_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/lightModeDarkMode.ts */ \"./src/components/lightModeDarkMode.ts\");\n/* harmony import */ var _components_lightModeDarkMode_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_lightModeDarkMode_ts__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var date_fns_getDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/getDay */ \"./node_modules/date-fns/esm/getDay/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nvar inbox = [];\r\nvar submitBtn = document.getElementById('submitBtn');\r\nsubmitBtn.onclick = function getInputs(e) {\r\n    e.preventDefault();\r\n    (0,_components_modal_ts__WEBPACK_IMPORTED_MODULE_1__.toggleModal)();\r\n    var title = document.getElementById(\"title\");\r\n    var description = document.getElementById(\"description\");\r\n    var dateTime = document.getElementById(\"dateTime\");\r\n    var priority = document.getElementById(\"priority\");\r\n    var project = document.getElementById(\"project\");\r\n    console.log(dateTime.value);\r\n    console.log('all clear');\r\n    return createObject(title.value, description.value, processDate(dateTime.value), priority.value, project.value);\r\n};\r\nfunction processDate(dateTime) {\r\n    var timeDateArray = dateTime.split('T');\r\n    var time = timeDateArray[1];\r\n    var dateArray = timeDateArray[0].split('-');\r\n    var date = dateArray[1] + \"-\" + dateArray[2] + \"-\" + dateArray[0];\r\n    var result = (0,date_fns_getDay__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new Date(+dateArray[0], +dateArray[1] - 1, +dateArray[2]));\r\n    var day;\r\n    switch (result) {\r\n        case 0:\r\n            day = \"Sunday\";\r\n            break;\r\n        case 1:\r\n            day = \"Monday\";\r\n            break;\r\n        case 2:\r\n            day = \"Tuesday\";\r\n            break;\r\n        case 3:\r\n            day = \"Wednesday\";\r\n            break;\r\n        case 4:\r\n            day = \"Thursday\";\r\n            break;\r\n        case 5:\r\n            day = \"Friday\";\r\n            break;\r\n        case 6:\r\n            day = \"Saturday\";\r\n            break;\r\n    }\r\n    return day + \" \" + date + \" at \" + time;\r\n}\r\nfunction createObject(title, description, dateTime, priority, project) {\r\n    var newObject = {\r\n        title: title,\r\n        description: description,\r\n        dateTime: dateTime,\r\n        priority: priority,\r\n        project: project\r\n    };\r\n    console.log(dateTime);\r\n    console.log('all clear');\r\n    return storeObject(newObject);\r\n}\r\nfunction storeObject(obj) {\r\n    inbox.push(obj);\r\n    console.log('all clear');\r\n    return displayObjects(inbox);\r\n}\r\nfunction displayObjects(array) {\r\n    var main = document.getElementById('content');\r\n    main.innerHTML = \"\";\r\n    var counter = 1;\r\n    for (var _i = 0, inbox_1 = inbox; _i < inbox_1.length; _i++) {\r\n        var obj = inbox_1[_i];\r\n        var container = document.createElement('div');\r\n        var description = document.createElement('p');\r\n        var dueDate = document.createElement('p');\r\n        var dueTime = document.createElement('p');\r\n        var input = document.createElement('input');\r\n        var label = document.createElement('label');\r\n        input.classList.add(\"input\");\r\n        input.setAttribute(\"type\", \"checkbox\");\r\n        input.id = \"\" + counter;\r\n        label.setAttribute(\"for\", \"\" + counter);\r\n        label.innerHTML = \"\\u2754\" + obj.title + \"&nbsp;&nbsp;&nbsp;&nbsp;\\uD83D\\uDCDC\" + obj.description + \"&nbsp;&nbsp;&nbsp;&nbsp;\\uD83D\\uDD58\" + obj.dateTime;\r\n        container.classList.add(\"toDoFlex\");\r\n        container.appendChild(input);\r\n        container.appendChild(label);\r\n        main.appendChild(container);\r\n        counter += 1;\r\n    }\r\n    resetForm();\r\n}\r\nfunction resetForm() {\r\n    var title = document.getElementById(\"title\");\r\n    var description = document.getElementById(\"description\");\r\n    var dateTime = document.getElementById(\"dateTime\");\r\n    title.value = \"\";\r\n    description.value = \"\";\r\n    description.value = \"\";\r\n    var form = document.getElementById(\"modalForm\");\r\n    form.reset();\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.ts?");

/***/ }),

/***/ "./src/fonts/Roboto-BoldItalic.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/Roboto-BoldItalic.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"60c1f67b002e61ad0fe4.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/fonts/Roboto-BoldItalic.ttf?");

/***/ }),

/***/ "./src/fonts/Roboto-Light.ttf":
/*!************************************!*\
  !*** ./src/fonts/Roboto-Light.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8be2d1487420548b3b8d.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/fonts/Roboto-Light.ttf?");

/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a8d6ac03c7b96b7acb62.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/fonts/Roboto-Regular.ttf?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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