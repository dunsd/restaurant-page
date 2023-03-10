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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_doughKnead_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/doughKnead.jpg */ \"./src/images/doughKnead.jpg\");\n/* harmony import */ var _images_croque_monsieur_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/croque-monsieur.jpg */ \"./src/images/croque-monsieur.jpg\");\n/* harmony import */ var _images_croissant_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/croissant.jpg */ \"./src/images/croissant.jpg\");\n/* harmony import */ var _images_french_onion_soup_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/french-onion-soup.jpg */ \"./src/images/french-onion-soup.jpg\");\n\n\n\n\n\nconst menuPage = function() {\n    const content = document.querySelector('#content');\n    const mainDiv = document.querySelector('.mainDiv');\n    mainDiv.className = \"mainDiv\";\n\n    const menuContent = document.createElement('div');\n    const menuHeader = document.createElement('h2');\n    const menuPara = document.createElement('p');\n\n    menuHeader.className = \"menuHeader\";\n    menuContent.className = \"menuContent\";\n    menuPara.className = \"menuPara\";\n\n    menuHeader.textContent = \"Welcome to the menu!\";\n    menuPara.textContent = \"Here are some of our finest delicasies:\";\n    mainDiv.appendChild(menuHeader);\n    mainDiv.appendChild(menuPara);\n    mainDiv.appendChild(menuContent);\n\n    createSubHeader(\"Main Menu\");\n    createMenuItem(_images_croque_monsieur_jpg__WEBPACK_IMPORTED_MODULE_1__, \"Croque Monsieur\", \"??10.99\", \"A Croque Monsieur\");\n    createMenuItem(_images_croissant_jpg__WEBPACK_IMPORTED_MODULE_2__, \"Croissant\", \"??3\", \"A Croissant\");\n    createMenuItem(_images_french_onion_soup_jpg__WEBPACK_IMPORTED_MODULE_3__, \"French Onion Soup\", \"??14.99\", \"A French Onion Soup\");\n    createSubHeader(\"Desserts\");\n\n}\n\nfunction createMenuItem(image, name, price, alt){\n    const mainDiv = document.querySelector('.mainDiv');\n    mainDiv.className = \"mainDiv\";\n    const menuItem = document.createElement('div');\n    menuItem.className = \"menuItem\";\n    const newImageContainer = document.createElement('figure');\n    newImageContainer.className = \"menuImageContainer\";\n    const newMenuImage = document.createElement('img');\n    const newMenuCaption = document.createElement('figcaption');\n    newMenuCaption.textContent = `${name}: ${price}`;\n    menuItem.appendChild(newImageContainer);\n    newImageContainer.appendChild(newMenuImage);\n    newImageContainer.appendChild(newMenuCaption);\n    newMenuImage.className = \"menuImage\";\n    newMenuImage.src = image;\n    newMenuImage.alt = alt;\n\n    mainDiv.appendChild(menuItem);\n}\n\nfunction createSubHeader(name){\n\n    const mainDiv = document.querySelector('.mainDiv');\n    const subHeaderContainer = document.createElement('div');\n    const subHeader = document.createElement('h2');\n\n    subHeaderContainer.className = \"subHeaderContainer\";\n    subHeader.className = \"subHeader\";\n\n    subHeader.textContent = name;\n\n    subHeaderContainer.appendChild(subHeader);\n    mainDiv.appendChild(subHeaderContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images/croissant.jpg":
/*!**********************************!*\
  !*** ./src/images/croissant.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"42a84caf33d2933191bb.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/croissant.jpg?");

/***/ }),

/***/ "./src/images/croque-monsieur.jpg":
/*!****************************************!*\
  !*** ./src/images/croque-monsieur.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"feeb6db08c6a098196b4.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/croque-monsieur.jpg?");

/***/ }),

/***/ "./src/images/doughKnead.jpg":
/*!***********************************!*\
  !*** ./src/images/doughKnead.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0ad2c2f1f1987d234396.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/doughKnead.jpg?");

/***/ }),

/***/ "./src/images/french-onion-soup.jpg":
/*!******************************************!*\
  !*** ./src/images/french-onion-soup.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"93524bb1670c685140b5.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/french-onion-soup.jpg?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;