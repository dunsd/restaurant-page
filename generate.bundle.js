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

/***/ "./src/generatePage.js":
/*!*****************************!*\
  !*** ./src/generatePage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateFirstPage\": () => (/* binding */ generateFirstPage),\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\nconst links = document.createElement('div');\nlinks.className = \"links\";\nconst homeButton = document.createElement('button');\nconst menuButton = document.createElement('button');\nconst aboutButton = document.createElement('button');\nhomeButton.className = \"homeButton\";\nmenuButton.className = \"menuButton\";\naboutButton.className = \"aboutButton\";\nhomeButton.textContent = \"Home\";\nmenuButton.textContent = \"Menu\";\naboutButton.textContent = \"About\";\n\n\n\n\n\n// homeButton.addEventListener('click', () => homePage());\n\nfunction generateFirstPage() {\n\n    const content = document.querySelector('#content');\n    const leftSide = document.createElement('div');\n    const rightSide = document.createElement('div');\n    const mainContent = document.createElement('div');\n    leftSide.className = ('leftSide');\n    mainContent.className = ('mainContent');\n    rightSide.className = ('rightSide');\n\n    const mainDiv = document.createElement('div');\n    mainDiv.className = \"mainDiv\";\n\n    content.textContent = \"\";\n    createHeader();\n    content.appendChild(leftSide);\n    content.appendChild(mainContent);\n    content.appendChild(rightSide);\n    mainContent.appendChild(links);\n    links.appendChild(homeButton);\n    links.appendChild(menuButton);\n    links.appendChild(aboutButton);\n    mainContent.appendChild(mainDiv);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\nfunction menuPage() {\n\n}\n\nfunction aboutPage() {\n\n}\n\nfunction createHeader() {\n    const header = document.createElement('div');\n    const nameBanner = document.createElement('h1');\n    header.className = ('header');\n    nameBanner.textContent = \"Le Resto du reve\";\n    \n    content.appendChild(header);\n    // header.appendChild(links);\n    header.appendChild(nameBanner);\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/generatePage.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homePage = function() {\n    const content = document.querySelector('#content');\n    const mainDiv = document.querySelector('.mainDiv');\n    console.log(\"Home Page\");\n\n    const homeContent = document.createElement('div');\n    const homeHeader = document.createElement('h2');\n    const homePara = document.createElement('p');\n\n    homeHeader.className = \"homeHeader\";\n    homeContent.className = \"homeContent\";\n    homePara.className = \"homePara\";\n\n    homeHeader.textContent = \"Welcome to the main page!\";\n    homePara.textContent = \"An explanation of the main page!\";\n    mainDiv.appendChild(homeHeader);\n    mainDiv.appendChild(homePara);\n    mainDiv.appendChild(homeContent);\n\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/generatePage.js");
/******/ 	
/******/ })()
;