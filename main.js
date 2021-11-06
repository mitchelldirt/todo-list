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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Regular.ttf */ \"./src/fonts/Roboto-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Light.ttf */ \"./src/fonts/Roboto-Light.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-BoldItalic.ttf */ \"./src/fonts/Roboto-BoldItalic.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root[data-theme=\\\"theme-light\\\"] {\\r\\n  --title: \\\"roboto-title\\\";\\r\\n  --headers: \\\"roboto-headers\\\";\\r\\n  --text: \\\"roboto-text\\\";\\r\\n  --darkColor: #FCF6F5;\\r\\n  --lightColor: #7b9acc;\\r\\n}\\r\\n\\r\\n:root[data-theme=\\\"theme-dark\\\"] {\\r\\n  --title: \\\"roboto-title\\\";\\r\\n  --headers: \\\"roboto-headers\\\";\\r\\n  --text: \\\"roboto-text\\\";\\r\\n  --lightColor: #FCF6F5;\\r\\n  --darkColor: #7b9acc;\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n#content {\\r\\n  grid-row: 2/3;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  max-height: 80vh;\\r\\n  overflow-y: auto;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n/*\\r\\n* {\\r\\n  outline: 1px solid red;\\r\\n} \\r\\n*/\\r\\n\\r\\nli {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n.toDoItem {\\r\\nheight: 40px;\\r\\nwidth: 100%;\\r\\ndisplay: flex;\\r\\nflex-direction: row;\\r\\nalign-items: center;\\r\\nborder-top: var(--lightColor) 1px solid;\\r\\nborder-bottom: var(--lightColor) 1px solid;\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: \\\"roboto-headers\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"truetype\\\");\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: \\\"roboto-text\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"truetype\\\");\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: \\\"roboto-title\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"truetype\\\");\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.trigger {\\r\\n  background-color: var(--lightColor);\\r\\n  color: var(--darkColor);\\r\\n  border-radius: 25px;\\r\\n  margin: 4px;\\r\\n}\\r\\n\\r\\nlabel {\\r\\n  font-family: \\\"roboto-text\\\";\\r\\n    color: black;\\r\\n    font-weight: bold;\\r\\n    font-size: 1em;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  justify-self: center;\\r\\n  align-self: center;\\r\\n  font-family: var(--title, \\\"roboto-title\\\");\\r\\n  color: var(--lightColor);\\r\\n  font-size: 2em;\\r\\n  margin: 4px;\\r\\n  top: 0;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\np {\\r\\n  font-family: var(--text);\\r\\n  color: var(--lightColor);\\r\\n  font-size: .75em;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: var(--darkColor);\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  font-family: var(--headers);\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  color: var(--lightColor);\\r\\n  font-size: 1.75em;\\r\\n}\\r\\n\\r\\n.displayNone {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.inputOutline {\\r\\n  border: 2px solid black;\\r\\n  background-color: lightgray;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  margin-bottom: 3%;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  row-gap: 2%;\\r\\n}\\r\\n\\r\\n.breakLabel::before {\\r\\n  content: \\\"\\\\a\\\";\\r\\n  white-space: pre;\\r\\n}\\r\\n\\r\\n.nav-section {\\r\\n  visibility: hidden;\\r\\n  opacity: 0;\\r\\n  height: 0%;\\r\\n  transform: scale(1.1);\\r\\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\\r\\n}\\r\\n\\r\\n#header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 3%;\\r\\n}\\r\\n\\r\\n#nav-icon1 span {\\r\\n  justify-self: center;\\r\\n  align-self: center;\\r\\n  display: block;\\r\\n  position: relative;\\r\\n  right: 0px;\\r\\n  top: 0;\\r\\n  margin: 4px;\\r\\n  height: 9px;\\r\\n  width: 60px;\\r\\n  background: var(--lightColor);\\r\\n  border-radius: 9px;\\r\\n  cursor: pointer;\\r\\n  -webkit-transition: 0.25s ease-in-out;\\r\\n  -moz-transition: 0.25s ease-in-out;\\r\\n  -o-transition: 0.25s ease-in-out;\\r\\n  transition: 0.25s ease-in-out;\\r\\n}\\r\\n\\r\\n#nav-menu1:checked ~ #nav-icon1 span:nth-child(1) {\\r\\n  -webkit-transform: rotate(135deg) translate(21px, -13px);\\r\\n  -moz-transform: rotate(135deg) translate(21px, -13px);\\r\\n  -o-transform: rotate(135deg) translate(21px, -13px);\\r\\n  transform: rotate(135deg) translate(21px, -13px);\\r\\n}\\r\\n#nav-menu1:checked ~ #nav-icon1 span:nth-child(2) {\\r\\n  opacity: 0;\\r\\n  right: 60px;\\r\\n}\\r\\n#nav-menu1:checked ~ #nav-icon1 span:nth-child(3) {\\r\\n  -webkit-transform: rotate(-135deg) translate(3px);\\r\\n  -moz-transform: rotate(-135deg) translate(3px);\\r\\n  -o-transform: rotate(-135deg) translate(3px);\\r\\n  transform: rotate(-135deg) translate(3px);\\r\\n}\\r\\n\\r\\n.toDoFlex {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  gap: 5%;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.submitBtn {\\r\\n  color: black;\\r\\n  align-self: center;\\r\\n  text-align: center;\\r\\n  width: fit-content;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"] {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.todoCheck {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  opacity: 0;\\r\\n  visibility: hidden;\\r\\n  transform: scale(1.1);\\r\\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\\r\\n}\\r\\n.modal-content {\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  background-color: white;\\r\\n  padding: 1rem 1.5rem;\\r\\n  width: 80%;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n.close-button {\\r\\n  float: right;\\r\\n  width: 1.5rem;\\r\\n  line-height: 1.5rem;\\r\\n  text-align: center;\\r\\n  cursor: pointer;\\r\\n  border-radius: 0.25rem;\\r\\n  background-color: lightgray;\\r\\n}\\r\\n.close-button:hover {\\r\\n  background-color: darkgray;\\r\\n}\\r\\n.show-modal {\\r\\n  opacity: 1;\\r\\n  visibility: visible;\\r\\n  transform: scale(1);\\r\\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\\r\\n}\\r\\n\\r\\n.show-nav {\\r\\n  height: initial;\\r\\n  visibility: visible;\\r\\n  opacity: 1;\\r\\n  transform: scale(1);\\r\\n  transition: visibility 0s linear 0s, opacity 1s 0s, transform 1s;\\r\\n}\\r\\n\\r\\n.input[type=\\\"checkbox\\\"] { display: none; }\\r\\n\\r\\n.input[type=\\\"checkbox\\\"] + label {\\r\\n  display: block;\\r\\n  position: relative;\\r\\n  padding-left: 35px;\\r\\n  font-family: \\\"roboto-text\\\";\\r\\n  color: var(--lightColor);\\r\\n  size: .75em;\\r\\n  cursor: pointer;\\r\\n  user-select: all;\\r\\n  -webkit-user-select: none;\\r\\n  -moz-user-select: none;\\r\\n  -ms-user-select: none;\\r\\n}\\r\\n\\r\\n.input[type=\\\"checkbox\\\"] + label:last-child { margin-bottom: 3%; margin-top: 3%; }\\r\\n\\r\\n.input[type=\\\"checkbox\\\"] + label:before {\\r\\n  content: '';\\r\\n  display: block;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  border: 1px solid var(--lightColor);\\r\\n  position: absolute;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  opacity: .6;\\r\\n  -webkit-transition: all .12s, border-color .08s;\\r\\n  transition: all .12s, border-color .08s;\\r\\n}\\r\\n\\r\\n.input[type=\\\"checkbox\\\"]:checked + label:before {\\r\\n  width: 10px;\\r\\n  top: -5px;\\r\\n  left: 5px;\\r\\n  border-radius: 0;\\r\\n  opacity: 1;\\r\\n  border-top-color: transparent;\\r\\n  border-left-color: transparent;\\r\\n  -webkit-transform: rotate(45deg);\\r\\n  transform: rotate(45deg);\\r\\n  margin-top: 3%;\\r\\n  margin-bottom: 3%;\\r\\n}\\r\\n\\r\\n.input[type=\\\"checkbox\\\"]:checked + label{\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.thing::after {\\r\\n  border: none;\\r\\n  left: unset;\\r\\n}\\r\\n\\r\\n.projectLabelFlex {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  align-items: center;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

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

/***/ "./src/components/checked.ts":
/*!***********************************!*\
  !*** ./src/components/checked.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkMark)\n/* harmony export */ });\nfunction checkMark() {\r\n    var i = document.createElement('i');\r\n    i.classList.add('fas');\r\n    i.classList.add('fa-circle');\r\n    i.style.color = \"white\";\r\n    return i;\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/checked.ts?");

/***/ }),

/***/ "./src/components/deleteButton.ts":
/*!****************************************!*\
  !*** ./src/components/deleteButton.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ trashBin)\n/* harmony export */ });\nfunction trashBin() {\r\n    var i = document.createElement('i');\r\n    i.classList.add('far');\r\n    i.classList.add('fa-trash-alt');\r\n    i.style.color = \"white\";\r\n    return i;\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/deleteButton.ts?");

/***/ }),

/***/ "./src/components/editButton.ts":
/*!**************************************!*\
  !*** ./src/components/editButton.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ editButton)\n/* harmony export */ });\nfunction editButton() {\r\n    var i = document.createElement('i');\r\n    i.classList.add('far');\r\n    i.classList.add('fa-edit');\r\n    i.style.color = \"white\";\r\n    return i;\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/editButton.ts?");

/***/ }),

/***/ "./src/components/hamburgerButton.ts":
/*!*******************************************!*\
  !*** ./src/components/hamburgerButton.ts ***!
  \*******************************************/
/***/ (() => {

eval("var hamburgerButton = document.getElementById(\"hamburgerButton\");\r\nhamburgerButton.addEventListener('click', function (event) {\r\n    event.preventDefault();\r\n    var nav = document.getElementById(\"nav\");\r\n    var mainNav = document.querySelector('.nav-section');\r\n    //nav.classList.toggle(\"displayNone\");\r\n    mainNav.classList.toggle('show-nav');\r\n    console.log(nav);\r\n});\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/hamburgerButton.ts?");

/***/ }),

/***/ "./src/components/handleForm.ts":
/*!**************************************!*\
  !*** ./src/components/handleForm.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayObjects\": () => (/* binding */ displayObjects)\n/* harmony export */ });\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/modal */ \"./src/components/modal.ts\");\n/* harmony import */ var _components_handleProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/handleProjects */ \"./src/components/handleProjects.ts\");\n/* harmony import */ var _components_deleteButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/deleteButton */ \"./src/components/deleteButton.ts\");\n/* harmony import */ var _components_unChecked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/unChecked */ \"./src/components/unChecked.ts\");\n/* harmony import */ var _components_editButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/editButton */ \"./src/components/editButton.ts\");\n/* harmony import */ var _components_checked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/checked */ \"./src/components/checked.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\nvar projects = (0,_components_handleProjects__WEBPACK_IMPORTED_MODULE_1__.returnProjects)();\r\nvar submitBtn = document.getElementById('submitBtn');\r\nsubmitBtn.onclick = function getInputs(e) {\r\n    var title = document.getElementById(\"title\");\r\n    var description = document.getElementById(\"description\");\r\n    var dateTime = document.getElementById(\"dateTime\");\r\n    var select = document.getElementById(\"project\");\r\n    var project = select.options[select.selectedIndex].value;\r\n    console.log(project);\r\n    if (title.value === \"\" || dateTime.value === \"\") {\r\n        return;\r\n    }\r\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_0__.toggleModal)();\r\n    return createObject(title.value, description.value, processDate(dateTime.value), project, false);\r\n};\r\nfunction processDate(dateTime) {\r\n    var timeDateArray = dateTime.split('T');\r\n    var time = timeDateArray[1];\r\n    var dateArray = timeDateArray[0].split('-');\r\n    var date = dateArray[1] + \"/\" + dateArray[2] + \"/\" + dateArray[0].slice(2, 4);\r\n    return \"\\uD83D\\uDCC5\" + date + \"\\u23F0\" + time;\r\n}\r\n;\r\nfunction createObject(title, description, dateTime, project, checked) {\r\n    var newObject = {\r\n        title: title,\r\n        description: description,\r\n        dateTime: dateTime,\r\n        project: project,\r\n        checked: checked\r\n    };\r\n    return storeObject(newObject);\r\n}\r\n;\r\nfunction storeObject(obj) {\r\n    projects[+obj.project].array.push(obj);\r\n    // changeCurrentProject changes which <option> element has the selected attribute.\r\n    (0,_components_handleProjects__WEBPACK_IMPORTED_MODULE_1__.changeCurrentProject)(obj.project);\r\n    return displayObjects(projects[+obj.project].array);\r\n}\r\n;\r\nfunction displayObjects(array) {\r\n    var main = document.getElementById('content');\r\n    main.innerHTML = \"\";\r\n    var counter = 1;\r\n    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {\r\n        var obj = array_1[_i];\r\n        var id = counter.toString();\r\n        var container = document.createElement('li');\r\n        var dueDate = document.createElement('p');\r\n        var title = document.createElement('p');\r\n        dueDate.style.color = \"black\";\r\n        title.style.color = \"black\";\r\n        var edit = (0,_components_editButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n        var deleteBtn = (0,_components_deleteButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n        addDeleteFunctionality(deleteBtn);\r\n        // Data-key lets you know which project you're using\r\n        container.setAttribute(\"data-key\", \"\" + obj.project);\r\n        title.innerHTML = obj.title;\r\n        dueDate.innerHTML = obj.dateTime;\r\n        container.id = id;\r\n        container.classList.add(\"toDoItem\");\r\n        obj.id = id;\r\n        if (obj.checked === false) {\r\n            var checkBox = (0,_components_unChecked__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n            checkOffItem(checkBox);\r\n            container.appendChild(checkBox);\r\n        }\r\n        else {\r\n            var checkBox = (0,_components_checked__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n            checkOffItem(checkBox);\r\n            container.appendChild(checkBox);\r\n        }\r\n        container.appendChild(title);\r\n        container.appendChild(dueDate);\r\n        container.appendChild(edit);\r\n        container.appendChild(deleteBtn);\r\n        main.appendChild(container);\r\n        console.log(deleteBtn.parentElement);\r\n        counter += 1;\r\n    }\r\n    resetForm();\r\n}\r\n;\r\nfunction resetForm() {\r\n    var form = document.getElementById(\"modalForm\");\r\n    form.reset();\r\n}\r\n;\r\nfunction addDeleteFunctionality(element) {\r\n    element.onclick = function () {\r\n        var project = +element.parentElement.getAttribute(\"data-key\");\r\n        var id = element.parentElement.id;\r\n        for (var _i = 0, _a = projects[project].array; _i < _a.length; _i++) {\r\n            var item = _a[_i];\r\n            if (item.id === id) {\r\n                var index = projects[project].array.indexOf(item);\r\n                projects[project].array.splice(index, 1);\r\n                displayObjects(projects[project].array);\r\n            }\r\n        }\r\n        console.log(project + \" + \" + id);\r\n    };\r\n}\r\nfunction checkOffItem(element) {\r\n    element.onclick = function () {\r\n        var project = +element.parentElement.getAttribute(\"data-key\");\r\n        var id = element.parentElement.id;\r\n        for (var _i = 0, _a = projects[project].array; _i < _a.length; _i++) {\r\n            var item = _a[_i];\r\n            if (item.id === id) {\r\n                var index = projects[project].array.indexOf(item);\r\n                if (projects[project].array[index].checked === false) {\r\n                    projects[project].array[index].checked = true;\r\n                }\r\n                else {\r\n                    projects[project].array[index].checked = false;\r\n                }\r\n            }\r\n        }\r\n        displayObjects(projects[project].array);\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/handleForm.ts?");

/***/ }),

/***/ "./src/components/handleProjects.ts":
/*!******************************************!*\
  !*** ./src/components/handleProjects.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"returnProjects\": () => (/* binding */ returnProjects),\n/* harmony export */   \"changeCurrentProject\": () => (/* binding */ changeCurrentProject)\n/* harmony export */ });\n/* harmony import */ var _components_handleForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/handleForm */ \"./src/components/handleForm.ts\");\n\r\nvar projects = [];\r\nvar projectBtn = document.getElementById('projects');\r\nprojectBtn.onclick = function () {\r\n    var main = document.getElementById('content');\r\n    main.innerHTML = \"\";\r\n    var _loop_1 = function (project) {\r\n        var element = document.createElement('button');\r\n        element.innerHTML = project.value;\r\n        element.textContent = project.value;\r\n        element.onclick = function () {\r\n            return (0,_components_handleForm__WEBPACK_IMPORTED_MODULE_0__.displayObjects)(project.array);\r\n        };\r\n        console.log(project.value);\r\n        main.appendChild(element);\r\n    };\r\n    for (var _i = 0, projects_1 = projects; _i < projects_1.length; _i++) {\r\n        var project = projects_1[_i];\r\n        _loop_1(project);\r\n    }\r\n    var mainNav = document.querySelector('.nav-section');\r\n    //nav.classList.toggle(\"displayNone\");\r\n    mainNav.classList.toggle('show-nav');\r\n};\r\nfunction factoryToDoItemArray(input) {\r\n    var array = [];\r\n    var arrayObj = {\r\n        value: input,\r\n        array: array\r\n    };\r\n    projects.push(arrayObj);\r\n}\r\n;\r\nfactoryToDoItemArray('inbox');\r\nfactoryToDoItemArray('sample');\r\nfunction returnProjects() {\r\n    return projects;\r\n}\r\nfunction changeCurrentProject(projectIndex) {\r\n    var projectOptions = document.querySelectorAll('option');\r\n    for (var i = 0; i < projectOptions.length; i++) {\r\n        if (projectIndex === projectOptions[i].value) {\r\n            projectOptions[i].setAttribute('selected', 'selected');\r\n        }\r\n        else {\r\n            projectOptions[i].removeAttribute('selected');\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/handleProjects.ts?");

/***/ }),

/***/ "./src/components/lightModeDarkMode.ts":
/*!*********************************************!*\
  !*** ./src/components/lightModeDarkMode.ts ***!
  \*********************************************/
/***/ (() => {

eval("var lightDarkMode = document.getElementById(\"lmdm\");\r\nlightDarkMode.onclick = function LMDM(e) {\r\n    e.preventDefault();\r\n    e.stopPropagation;\r\n    var html = document.querySelector('html');\r\n    if (html.dataset.theme === \"theme-light\") {\r\n        html.dataset.theme = \"theme-dark\";\r\n        lightDarkMode.innerHTML = \"Light🌞Mode\";\r\n    }\r\n    else {\r\n        html.dataset.theme = \"theme-light\";\r\n        lightDarkMode.innerHTML = \"Dark🌝Mode\";\r\n    } /*\r\n    let color1: string = document.documentElement.style.getPropertyValue('--lightColor');\r\n    if (color1 === '#FCF6F5') {\r\n        lightDarkMode.textContent = \"Light🌞Mode\"\r\n        document.documentElement.style.setProperty('--lightColor', '#7b9acc')\r\n        document.documentElement.style.setProperty('--darkColor', '#FCF6F5')\r\n    } else {\r\n        lightDarkMode.textContent = \"Dark🌝Mode\";\r\n        document.documentElement.style.setProperty('--lightColor', '#FCF6F5')\r\n        document.documentElement.style.setProperty('--darkColor', '#7b9acc')\r\n        \r\n    }; */\r\n};\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/lightModeDarkMode.ts?");

/***/ }),

/***/ "./src/components/modal.ts":
/*!*********************************!*\
  !*** ./src/components/modal.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleModal\": () => (/* binding */ toggleModal)\n/* harmony export */ });\nvar modal = document.querySelector(\".modal\");\r\nvar trigger = document.querySelector(\".trigger\");\r\nvar closeButton = document.querySelector(\".close-button\");\r\nfunction toggleModal() {\r\n    modal.classList.toggle(\"show-modal\");\r\n}\r\nfunction windowOnClick(event) {\r\n    if (event.target === modal) {\r\n        toggleModal();\r\n    }\r\n}\r\ntrigger.addEventListener(\"click\", toggleModal);\r\ncloseButton.addEventListener(\"click\", toggleModal);\r\nwindow.addEventListener(\"click\", windowOnClick);\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/modal.ts?");

/***/ }),

/***/ "./src/components/unChecked.ts":
/*!*************************************!*\
  !*** ./src/components/unChecked.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ unchecked)\n/* harmony export */ });\nfunction unchecked() {\r\n    var i = document.createElement('i');\r\n    i.classList.add('far');\r\n    i.classList.add('fa-circle');\r\n    i.style.color = \"white\";\r\n    return i;\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/unChecked.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _components_modal_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal.ts */ \"./src/components/modal.ts\");\n/* harmony import */ var _components_hamburgerButton_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/hamburgerButton.ts */ \"./src/components/hamburgerButton.ts\");\n/* harmony import */ var _components_hamburgerButton_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_hamburgerButton_ts__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_lightModeDarkMode_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/lightModeDarkMode.ts */ \"./src/components/lightModeDarkMode.ts\");\n/* harmony import */ var _components_lightModeDarkMode_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_lightModeDarkMode_ts__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_handleForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/handleForm */ \"./src/components/handleForm.ts\");\n/* harmony import */ var _components_handleProjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/handleProjects */ \"./src/components/handleProjects.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar html = document.querySelector('html');\r\nhtml.dataset.theme = \"theme-dark\";\r\nvar inboxBtn = document.getElementById('inboxBtn');\r\ninboxBtn.onclick = function (e) {\r\n    e.preventDefault;\r\n    var mainNav = document.querySelector('.nav-section');\r\n    //nav.classList.toggle(\"displayNone\");\r\n    mainNav.classList.toggle('show-nav');\r\n    (0,_components_handleForm__WEBPACK_IMPORTED_MODULE_4__.displayObjects)((0,_components_handleProjects__WEBPACK_IMPORTED_MODULE_5__.returnProjects)()[0].array);\r\n    (0,_components_handleProjects__WEBPACK_IMPORTED_MODULE_5__.changeCurrentProject)('0');\r\n};\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.ts?");

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