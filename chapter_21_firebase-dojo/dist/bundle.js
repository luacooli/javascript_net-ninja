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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyCmJbJVW5k1GpWURHDGv9_d-K7NFIui4hE\",\n  authDomain: \"dojo---net-ninja.firebaseapp.com\",\n  projectId: \"dojo---net-ninja\",\n  storageBucket: \"dojo---net-ninja.firebasestorage.app\",\n  messagingSenderId: \"706228733519\",\n  appId: \"1:706228733519:web:bc60a9eacbe6df4f3d4c3a\"\n}\n// init firebase\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(firebaseConfig)\n\n// init services\nconst db = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()\n\n// collection ref\nconst colRef = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db, 'books')\n\n// get collection data\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(colRef)\n  .then(snapshot => {\n    let books = []\n    snapshot.docs.forEach(doc => {\n      books.push({ ...doc.data(), id: doc.id })\n    })\n    console.log(books)\n  })\n  .catch(err => {\n    console.log(err.message)\n  })\n\n//# sourceURL=webpack://chapter_21_firebase-dojo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;