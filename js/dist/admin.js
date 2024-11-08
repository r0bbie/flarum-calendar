/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_admin_components_BasicsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/components/BasicsPage */ "flarum/admin/components/BasicsPage");
/* harmony import */ var flarum_admin_components_BasicsPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_BasicsPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_2__);



flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().initializers.add('webbinaro-calendar', function () {
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().extensionData["for"]('webbinaro-calendar').registerSetting({
    setting: 'webbinaro-calendar.hide_host',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('flarum-calendar.admin.settings.hide_host'),
    type: 'boolean'
  }).registerPermission({
    icon: 'fas fa-calendar',
    // Font-Awesome Icon
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('flarum-calendar.admin.permissions.view'),
    // Permission Label
    permission: 'event.view',
    // Actual permission name stored in database (and used when checking permission).
    allowGuest: true
  }, 'view',
  // Category permission will be added to on the grid
  95 // Optional: Priority
  ).registerPermission({
    icon: 'fas fa-calendar-plus',
    // Font-Awesome Icon
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('flarum-calendar.admin.permissions.add'),
    // Permission Label
    permission: 'event.create' // Actual permission name stored in database (and used when checking permission).
  }, 'start',
  // Category permission will be added to on the grid
  95 // Optional: Priority
  ).registerPermission({
    icon: 'fas fa-calendar-times',
    // Font-Awesome Icon
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('flarum-calendar.admin.permissions.moderate'),
    // Permission Label
    permission: 'event.moderate' // Actual permission name stored in database (and used when checking permission).
  }, 'moderate',
  // Category permission will be added to on the grid
  95 // Optional: Priority
  );

  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_admin_components_BasicsPage__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'homePageItems', function (items) {
    items.add('events', {
      path: '/events',
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('flarum-calendar.admin.basics.homepage')
    });
  });
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/BasicsPage":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/BasicsPage']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/BasicsPage'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map