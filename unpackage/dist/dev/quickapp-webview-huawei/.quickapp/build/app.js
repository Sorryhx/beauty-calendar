/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.json?package=app");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./common/runtime.js */ "./common/runtime.js");

__webpack_require__(/*! ./common/vendor.js */ "./common/vendor.js");

__webpack_require__(/*! ./common/main.js */ "./common/main.js");

/***/ }),

/***/ "./app.json?package=app":
/*!******************************!*\
  !*** ./app.json?package=app ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

global.__globalComponents = [];
global.__qaRoute = 'app';
__webpack_require__(/*! ./app.js */ "./app.js");
global.__qaRoute = 'components/beauty-calendar/beauty-calendar';
global.usingComponents = [];
__webpack_require__(/*! ./components/beauty-calendar/beauty-calendar.js */ "./components/beauty-calendar/beauty-calendar.js");
global.__qaRoute = 'pages/index/index';
global.usingComponents = ["components/beauty-calendar/beauty-calendar"];
__webpack_require__(/*! ./pages/index/index.js */ "./pages/index/index.js");

/***/ }),

/***/ "./common/main.js":
/*!************************!*\
  !*** ./common/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"], [
/* 0 */

/*!***************************************************************!*\
  !*** C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/main.js ***!
  \***************************************************************/

/*! no static exports found */

/***/
function (module, exports, __webpack_require__) {
  "use strict";
  /* WEBPACK VAR INJECTION */

  (function (createApp) {
    __webpack_require__(
    /*! uni-pages */
    4);

    var _vue = _interopRequireDefault(__webpack_require__(
    /*! vue */
    2));

    var _App = _interopRequireDefault(__webpack_require__(
    /*! ./App */
    5));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    _vue["default"].config.productionTip = false;
    _App["default"].mpType = 'app';
    var app = new _vue["default"](_objectSpread({}, _App["default"]));
    createApp(app).$mount();
    /* WEBPACK VAR INJECTION */
  }).call(this, __webpack_require__(
  /*! ./node_modules/@dcloudio/uni-quickapp-webview/dist/index.js */
  1)["createApp"]);
  /***/
},,,,,
/* 1 */

/* 2 */

/* 3 */

/* 4 */

/* 5 */

/*!***************************************************************!*\
  !*** C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/App.vue ***!
  \***************************************************************/

/*! no static exports found */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */


  var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
  /*! ./App.vue?vue&type=script&lang=js& */
  6);
  /* harmony reexport (unknown) */


  for (var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) {
    if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
      __webpack_require__.d(__webpack_exports__, key, function () {
        return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key];
      });
    })(__WEBPACK_IMPORT_KEY__);
  }
  /* harmony import */


  var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
  /*! ./App.vue?vue&type=style&index=0&lang=css& */
  8);
  /* harmony import */


  var _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
  /*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */
  10);

  var render, staticRenderFns, recyclableRender, components;
  var renderjs;
  /* normalize component */

  var component = Object(_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"], render, staticRenderFns, false, null, null, null, false, components, renderjs);
  component.options.__file = "App.vue";
  /* harmony default export */

  __webpack_exports__["default"] = component.exports;
  /***/
},
/* 6 */

/*!****************************************************************************************!*\
  !*** C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/

/*! no static exports found */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */


  var _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
  /*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */
  7);
  /* harmony import */


  var _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
  /* harmony reexport (unknown) */


  for (var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) {
    if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
      __webpack_require__.d(__webpack_exports__, key, function () {
        return _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key];
      });
    })(__WEBPACK_IMPORT_KEY__);
  }
  /* harmony default export */


  __webpack_exports__["default"] = _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a;
  /***/
},
/* 7 */

/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

/*! no static exports found */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _default = {
    onLaunch: function onLaunch() {
      console.log('App Launch');
    },
    onShow: function onShow() {
      console.log('App Show');
    },
    onHide: function onHide() {
      console.log('App Hide');
    }
  };
  exports["default"] = _default;
  /***/
},
/* 8 */

/*!************************************************************************************************!*\
  !*** C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/App.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/

/*! no static exports found */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */


  var _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
  /*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */
  9);
  /* harmony import */


  var _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
  /* harmony reexport (unknown) */


  for (var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) {
    if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
      __webpack_require__.d(__webpack_exports__, key, function () {
        return _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
      });
    })(__WEBPACK_IMPORT_KEY__);
  }
  /* harmony default export */


  __webpack_exports__["default"] = _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a;
  /***/
},
/* 9 */

/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

/*! no static exports found */

/***/
function (module, exports, __webpack_require__) {
  // extracted by mini-css-extract-plugin
  if (false) { var cssReload; }
  /***/

}], [[0, "common/runtime", "common/vendor"]]]);

/***/ }),

/***/ "./common/runtime.js":
/*!***************************!*\
  !*** ./common/runtime.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\runtime\\helpers\\interopRequireDefault.js");

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\runtime\\helpers\\typeof.js"));

!function () {
  try {
    var a = Function("return this")();
    a && !a.Math && (Object.assign(a, {
      isFinite: isFinite,
      Array: Array,
      Date: Date,
      Error: Error,
      Function: Function,
      Math: Math,
      Object: Object,
      RegExp: RegExp,
      String: String,
      TypeError: TypeError,
      setTimeout: setTimeout,
      clearTimeout: clearTimeout,
      setInterval: setInterval,
      clearInterval: clearInterval
    }), "undefined" != typeof Reflect && (a.Reflect = Reflect));
  } catch (a) {}
}();
/******/

(function (modules) {
  // webpackBootstrap

  /******/
  // install a JSONP callback for chunk loading

  /******/
  function webpackJsonpCallback(data) {
    /******/
    var chunkIds = data[0];
    /******/

    var moreModules = data[1];
    /******/

    var executeModules = data[2];
    /******/

    /******/
    // add "moreModules" to the modules object,

    /******/
    // then flag all "chunkIds" as loaded and fire callback

    /******/

    var moduleId,
        chunkId,
        i = 0,
        resolves = [];
    /******/

    for (; i < chunkIds.length; i++) {
      /******/
      chunkId = chunkIds[i];
      /******/

      if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
        /******/
        resolves.push(installedChunks[chunkId][0]);
        /******/
      }
      /******/


      installedChunks[chunkId] = 0;
      /******/
    }
    /******/


    for (moduleId in moreModules) {
      /******/
      if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        /******/
        modules[moduleId] = moreModules[moduleId];
        /******/
      }
      /******/

    }
    /******/


    if (parentJsonpFunction) parentJsonpFunction(data);
    /******/

    /******/

    while (resolves.length) {
      /******/
      resolves.shift()();
      /******/
    }
    /******/

    /******/
    // add entry modules from loaded chunk to deferred list

    /******/


    deferredModules.push.apply(deferredModules, executeModules || []);
    /******/

    /******/
    // run deferred modules when all chunks ready

    /******/

    return checkDeferredModules();
    /******/
  }

  ;
  /******/

  function checkDeferredModules() {
    /******/
    var result;
    /******/

    for (var i = 0; i < deferredModules.length; i++) {
      /******/
      var deferredModule = deferredModules[i];
      /******/

      var fulfilled = true;
      /******/

      for (var j = 1; j < deferredModule.length; j++) {
        /******/
        var depId = deferredModule[j];
        /******/

        if (installedChunks[depId] !== 0) fulfilled = false;
        /******/
      }
      /******/


      if (fulfilled) {
        /******/
        deferredModules.splice(i--, 1);
        /******/

        result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
        /******/
      }
      /******/

    }
    /******/

    /******/


    return result;
    /******/
  }
  /******/

  /******/
  // The module cache

  /******/


  var installedModules = {};
  /******/

  /******/
  // object to store loaded CSS chunks

  /******/

  var installedCssChunks = {
    /******/
    "common/runtime": 0
    /******/

  };
  /******/

  /******/
  // object to store loaded and loading chunks

  /******/
  // undefined = chunk not loaded, null = chunk preloaded/prefetched

  /******/
  // Promise = chunk loading, 0 = chunk loaded

  /******/

  var installedChunks = {
    /******/
    "common/runtime": 0
    /******/

  };
  /******/

  /******/

  var deferredModules = [];
  /******/

  /******/
  // script path function

  /******/

  function jsonpScriptSrc(chunkId) {
    /******/
    return __webpack_require__.p + "" + chunkId + ".js";
    /******/
  }
  /******/

  /******/
  // The require function

  /******/


  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/
  // This file contains only the entry chunk.

  /******/
  // The chunk loading function for additional chunks

  /******/


  __webpack_require__.e = function requireEnsure(chunkId) {
    /******/
    var promises = [];
    /******/

    /******/

    /******/
    // mini-css-extract-plugin CSS loading

    /******/

    var cssChunks = {
      "components/beauty-calendar/beauty-calendar": 1
    };
    /******/

    if (installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
    /******/
    else if (installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
        /******/
        promises.push(installedCssChunks[chunkId] = new Promise(function (resolve, reject) {
          /******/
          var href = "" + ({
            "components/beauty-calendar/beauty-calendar": "components/beauty-calendar/beauty-calendar"
          }[chunkId] || chunkId) + ".css";
          /******/

          var fullhref = __webpack_require__.p + href;
          /******/

          var existingLinkTags = document.getElementsByTagName("link");
          /******/

          for (var i = 0; i < existingLinkTags.length; i++) {
            /******/
            var tag = existingLinkTags[i];
            /******/

            var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
            /******/

            if (tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
            /******/
          }
          /******/


          var existingStyleTags = document.getElementsByTagName("style");
          /******/

          for (var i = 0; i < existingStyleTags.length; i++) {
            /******/
            var tag = existingStyleTags[i];
            /******/

            var dataHref = tag.getAttribute("data-href");
            /******/

            if (dataHref === href || dataHref === fullhref) return resolve();
            /******/
          }
          /******/


          var linkTag = document.createElement("link");
          /******/

          linkTag.rel = "stylesheet";
          /******/

          linkTag.type = "text/css";
          /******/

          linkTag.onload = resolve;
          /******/

          linkTag.onerror = function (event) {
            /******/
            var request = event && event.target && event.target.src || fullhref;
            /******/

            var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
            /******/

            err.code = "CSS_CHUNK_LOAD_FAILED";
            /******/

            err.request = request;
            /******/

            delete installedCssChunks[chunkId];
            /******/

            linkTag.parentNode.removeChild(linkTag);
            /******/

            reject(err);
            /******/
          };
          /******/


          linkTag.href = fullhref;
          /******/

          /******/

          var head = document.getElementsByTagName("head")[0];
          /******/

          head.appendChild(linkTag);
          /******/
        }).then(function () {
          /******/
          installedCssChunks[chunkId] = 0;
          /******/
        }));
        /******/
      }
    /******/

    /******/
    // JSONP chunk loading for javascript

    /******/

    /******/

    var installedChunkData = installedChunks[chunkId];
    /******/

    if (installedChunkData !== 0) {
      // 0 means "already installed".

      /******/

      /******/
      // a Promise means "currently loading".

      /******/
      if (installedChunkData) {
        /******/
        promises.push(installedChunkData[2]);
        /******/
      } else {
        /******/
        // setup Promise in chunk cache

        /******/
        var promise = new Promise(function (resolve, reject) {
          /******/
          installedChunkData = installedChunks[chunkId] = [resolve, reject];
          /******/
        });
        /******/

        promises.push(installedChunkData[2] = promise);
        /******/

        /******/
        // start chunk loading

        /******/

        var script = document.createElement('script');
        /******/

        var onScriptComplete;
        /******/

        /******/

        script.charset = 'utf-8';
        /******/

        script.timeout = 120;
        /******/

        if (__webpack_require__.nc) {
          /******/
          script.setAttribute("nonce", __webpack_require__.nc);
          /******/
        }
        /******/


        script.src = jsonpScriptSrc(chunkId);
        /******/

        /******/
        // create error before stack unwound to get useful stacktrace later

        /******/

        var error = new Error();
        /******/

        onScriptComplete = function onScriptComplete(event) {
          /******/
          // avoid mem leaks in IE.

          /******/
          script.onerror = script.onload = null;
          /******/

          clearTimeout(timeout);
          /******/

          var chunk = installedChunks[chunkId];
          /******/

          if (chunk !== 0) {
            /******/
            if (chunk) {
              /******/
              var errorType = event && (event.type === 'load' ? 'missing' : event.type);
              /******/

              var realSrc = event && event.target && event.target.src;
              /******/

              error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
              /******/

              error.name = 'ChunkLoadError';
              /******/

              error.type = errorType;
              /******/

              error.request = realSrc;
              /******/

              chunk[1](error);
              /******/
            }
            /******/


            installedChunks[chunkId] = undefined;
            /******/
          }
          /******/

        };
        /******/


        var timeout = setTimeout(function () {
          /******/
          onScriptComplete({
            type: 'timeout',
            target: script
          });
          /******/
        }, 120000);
        /******/

        script.onerror = script.onload = onScriptComplete;
        /******/

        document.head.appendChild(script);
        /******/
      }
      /******/

    }
    /******/


    return Promise.all(promises);
    /******/
  };
  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && (0, _typeof2["default"])(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "/";
  /******/

  /******/
  // on error function for async loading

  /******/

  __webpack_require__.oe = function (err) {
    console.error(err);
    throw err;
  };
  /******/

  /******/


  var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
  /******/

  var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  /******/

  jsonpArray.push = webpackJsonpCallback;
  /******/

  jsonpArray = jsonpArray.slice();
  /******/

  for (var i = 0; i < jsonpArray.length; i++) {
    webpackJsonpCallback(jsonpArray[i]);
  }
  /******/


  var parentJsonpFunction = oldJsonpFunction;
  /******/

  /******/

  /******/
  // run deferred modules from other chunks

  /******/

  checkDeferredModules();
  /******/
})(
/************************************************************************/

/******/
[]);

/***/ }),

/***/ "./common/vendor.js":
/*!**************************!*\
  !*** ./common/vendor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\runtime\\helpers\\interopRequireDefault.js");

var _typeof2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\runtime\\helpers\\typeof.js"));

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"], [,
/* 0 */

/* 1 */

/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-quickapp-webview/dist/index.js ***!
  \*******************************************************************/

/*! no static exports found */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createApp = createApp;
  exports.createComponent = createComponent;
  exports.createPage = createPage;
  exports["default"] = void 0;

  var _vue = _interopRequireDefault(__webpack_require__(
  /*! vue */
  2));

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  var _toString = Object.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  function isFn(fn) {
    return typeof fn === 'function';
  }

  function isStr(str) {
    return typeof str === 'string';
  }

  function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
  }

  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

  function noop() {}
  /**
                      * Create a cached version of a pure function.
                      */


  function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }
  /**
     * Camelize a hyphen-delimited string.
     */


  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) {
      return c ? c.toUpperCase() : '';
    });
  });
  var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
  var globalInterceptors = {};
  var scopedInterceptors = {};

  function mergeHook(parentVal, childVal) {
    var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
    return res ? dedupeHooks(res) : res;
  }

  function dedupeHooks(hooks) {
    var res = [];

    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }

    return res;
  }

  function removeHook(hooks, hook) {
    var index = hooks.indexOf(hook);

    if (index !== -1) {
      hooks.splice(index, 1);
    }
  }

  function mergeInterceptorHook(interceptor, option) {
    Object.keys(option).forEach(function (hook) {
      if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
        interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
      }
    });
  }

  function removeInterceptorHook(interceptor, option) {
    if (!interceptor || !option) {
      return;
    }

    Object.keys(option).forEach(function (hook) {
      if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
        removeHook(interceptor[hook], option[hook]);
      }
    });
  }

  function addInterceptor(method, option) {
    if (typeof method === 'string' && isPlainObject(option)) {
      mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
    } else if (isPlainObject(method)) {
      mergeInterceptorHook(globalInterceptors, method);
    }
  }

  function removeInterceptor(method, option) {
    if (typeof method === 'string') {
      if (isPlainObject(option)) {
        removeInterceptorHook(scopedInterceptors[method], option);
      } else {
        delete scopedInterceptors[method];
      }
    } else if (isPlainObject(method)) {
      removeInterceptorHook(globalInterceptors, method);
    }
  }

  function wrapperHook(hook) {
    return function (data) {
      return hook(data) || data;
    };
  }

  function isPromise(obj) {
    return !!obj && ((0, _typeof2["default"])(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
  }

  function queue(hooks, data) {
    var promise = false;

    for (var i = 0; i < hooks.length; i++) {
      var hook = hooks[i];

      if (promise) {
        promise = Promise.resolve(wrapperHook(hook));
      } else {
        var res = hook(data);

        if (isPromise(res)) {
          promise = Promise.resolve(res);
        }

        if (res === false) {
          return {
            then: function then() {}
          };
        }
      }
    }

    return promise || {
      then: function then(callback) {
        return callback(data);
      }
    };
  }

  function wrapperOptions(interceptor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    ['success', 'fail', 'complete'].forEach(function (name) {
      if (Array.isArray(interceptor[name])) {
        var oldCallback = options[name];

        options[name] = function callbackInterceptor(res) {
          queue(interceptor[name], res).then(function (res) {
            /* eslint-disable no-mixed-operators */
            return isFn(oldCallback) && oldCallback(res) || res;
          });
        };
      }
    });
    return options;
  }

  function wrapperReturnValue(method, returnValue) {
    var returnValueHooks = [];

    if (Array.isArray(globalInterceptors.returnValue)) {
      returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
    }

    var interceptor = scopedInterceptors[method];

    if (interceptor && Array.isArray(interceptor.returnValue)) {
      returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
    }

    returnValueHooks.forEach(function (hook) {
      returnValue = hook(returnValue) || returnValue;
    });
    return returnValue;
  }

  function getApiInterceptorHooks(method) {
    var interceptor = Object.create(null);
    Object.keys(globalInterceptors).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = globalInterceptors[hook].slice();
      }
    });
    var scopedInterceptor = scopedInterceptors[method];

    if (scopedInterceptor) {
      Object.keys(scopedInterceptor).forEach(function (hook) {
        if (hook !== 'returnValue') {
          interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
        }
      });
    }

    return interceptor;
  }

  function invokeApi(method, api, options) {
    for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      params[_key - 3] = arguments[_key];
    }

    var interceptor = getApiInterceptorHooks(method);

    if (interceptor && Object.keys(interceptor).length) {
      if (Array.isArray(interceptor.invoke)) {
        var res = queue(interceptor.invoke, options);
        return res.then(function (options) {
          return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
        });
      } else {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      }
    }

    return api.apply(void 0, [options].concat(params));
  }

  var promiseInterceptor = {
    returnValue: function returnValue(res) {
      if (!isPromise(res)) {
        return res;
      }

      return res.then(function (res) {
        return res[1];
      })["catch"](function (res) {
        return res[0];
      });
    }
  };
  var SYNC_API_RE = /^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;
  var CONTEXT_API_RE = /^create|Manager$/; // Context例外情况

  var CONTEXT_API_RE_EXC = ['createBLEConnection']; // 同步例外情况

  var ASYNC_API = ['createBLEConnection'];
  var CALLBACK_API_RE = /^on|^off/;

  function isContextApi(name) {
    return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
  }

  function isSyncApi(name) {
    return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
  }

  function isCallbackApi(name) {
    return CALLBACK_API_RE.test(name) && name !== 'onPush';
  }

  function handlePromise(promise) {
    return promise.then(function (data) {
      return [null, data];
    })["catch"](function (err) {
      return [err];
    });
  }

  function shouldPromise(name) {
    if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
      return false;
    }

    return true;
  }
  /* eslint-disable no-extend-native */


  if (!Promise.prototype["finally"]) {
    Promise.prototype["finally"] = function (callback) {
      var promise = this.constructor;
      return this.then(function (value) {
        return promise.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return promise.resolve(callback()).then(function () {
          throw reason;
        });
      });
    };
  }

  function promisify(name, api) {
    if (!shouldPromise(name)) {
      return api;
    }

    return function promiseApi() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }

      if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
        return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
      }

      return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
        invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
          success: resolve,
          fail: reject
        })].concat(params));
      })));
    };
  }

  var EPS = 1e-4;
  var BASE_DEVICE_WIDTH = 750;
  var isIOS = false;
  var deviceWidth = 0;
  var deviceDPR = 0;

  function checkDeviceWidth() {
    var _qa$getSystemInfoSync = qa.getSystemInfoSync(),
        platform = _qa$getSystemInfoSync.platform,
        pixelRatio = _qa$getSystemInfoSync.pixelRatio,
        windowWidth = _qa$getSystemInfoSync.windowWidth; // uni=>qa runtime 编译目标是 uni 对象，内部不允许直接使用 uni


    deviceWidth = windowWidth;
    deviceDPR = pixelRatio;
    isIOS = platform === 'ios';
  }

  function upx2px(number, newDeviceWidth) {
    if (deviceWidth === 0) {
      checkDeviceWidth();
    }

    number = Number(number);

    if (number === 0) {
      return 0;
    }

    var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);

    if (result < 0) {
      result = -result;
    }

    result = Math.floor(result + EPS);

    if (result === 0) {
      if (deviceDPR === 1 || !isIOS) {
        result = 1;
      } else {
        result = 0.5;
      }
    }

    return number < 0 ? -result : result;
  }

  var interceptors = {
    promiseInterceptor: promiseInterceptor
  };
  var baseApi = /*#__PURE__*/Object.freeze({
    __proto__: null,
    upx2px: upx2px,
    addInterceptor: addInterceptor,
    removeInterceptor: removeInterceptor,
    interceptors: interceptors
  });

  var EventChannel = /*#__PURE__*/function () {
    function EventChannel(id, events) {
      var _this = this;

      _classCallCheck(this, EventChannel);

      this.id = id;
      this.listener = {};
      this.emitCache = {};

      if (events) {
        Object.keys(events).forEach(function (name) {
          _this.on(name, events[name]);
        });
      }
    }

    _createClass(EventChannel, [{
      key: "emit",
      value: function emit(eventName) {
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        var fns = this.listener[eventName];

        if (!fns) {
          return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
        }

        fns.forEach(function (opt) {
          opt.fn.apply(opt.fn, args);
        });
        this.listener[eventName] = fns.filter(function (opt) {
          return opt.type !== 'once';
        });
      }
    }, {
      key: "on",
      value: function on(eventName, fn) {
        this._addListener(eventName, 'on', fn);

        this._clearCache(eventName);
      }
    }, {
      key: "once",
      value: function once(eventName, fn) {
        this._addListener(eventName, 'once', fn);

        this._clearCache(eventName);
      }
    }, {
      key: "off",
      value: function off(eventName, fn) {
        var fns = this.listener[eventName];

        if (!fns) {
          return;
        }

        if (fn) {
          for (var i = 0; i < fns.length;) {
            if (fns[i].fn === fn) {
              fns.splice(i, 1);
              i--;
            }

            i++;
          }
        } else {
          delete this.listener[eventName];
        }
      }
    }, {
      key: "_clearCache",
      value: function _clearCache(eventName) {
        var cacheArgs = this.emitCache[eventName];

        if (cacheArgs) {
          for (; cacheArgs.length > 0;) {
            this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
          }
        }
      }
    }, {
      key: "_addListener",
      value: function _addListener(eventName, type, fn) {
        (this.listener[eventName] || (this.listener[eventName] = [])).push({
          fn: fn,
          type: type
        });
      }
    }]);

    return EventChannel;
  }();

  var eventChannels = {};
  var eventChannelStack = [];
  var id = 0;

  function initEventChannel(events) {
    var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    id++;
    var eventChannel = new EventChannel(id, events);

    if (cache) {
      eventChannels[id] = eventChannel;
      eventChannelStack.push(eventChannel);
    }

    return eventChannel;
  }

  function getEventChannel(id) {
    if (id) {
      var eventChannel = eventChannels[id];
      delete eventChannels[id];
      return eventChannel;
    }

    return eventChannelStack.shift();
  }

  var navigateTo = {
    args: function args(fromArgs, toArgs) {
      var id = initEventChannel(fromArgs.events).id;

      if (fromArgs.url) {
        fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
      }
    },
    returnValue: function returnValue(fromRes, toRes) {
      fromRes.eventChannel = getEventChannel();
    }
  };

  function findExistsPageIndex(url) {
    var pages = getCurrentPages();
    var len = pages.length;

    while (len--) {
      var page = pages[len];

      if (page.$page && page.$page.fullPath === url) {
        return len;
      }
    }

    return -1;
  }

  var redirectTo = {
    name: function name(fromArgs) {
      if (fromArgs.exists === 'back' && fromArgs.delta) {
        return 'navigateBack';
      }

      return 'redirectTo';
    },
    args: function args(fromArgs) {
      if (fromArgs.exists === 'back' && fromArgs.url) {
        var existsPageIndex = findExistsPageIndex(fromArgs.url);

        if (existsPageIndex !== -1) {
          var delta = getCurrentPages().length - 1 - existsPageIndex;

          if (delta > 0) {
            fromArgs.delta = delta;
          }
        }
      }
    }
  };
  var previewImage = {
    args: function args(fromArgs) {
      var currentIndex = parseInt(fromArgs.current);

      if (isNaN(currentIndex)) {
        return;
      }

      var urls = fromArgs.urls;

      if (!Array.isArray(urls)) {
        return;
      }

      var len = urls.length;

      if (!len) {
        return;
      }

      if (currentIndex < 0) {
        currentIndex = 0;
      } else if (currentIndex >= len) {
        currentIndex = len - 1;
      }

      if (currentIndex > 0) {
        fromArgs.current = urls[currentIndex];
        fromArgs.urls = urls.filter(function (item, index) {
          return index < currentIndex ? item !== urls[currentIndex] : true;
        });
      } else {
        fromArgs.current = urls[0];
      }

      return {
        indicator: false,
        loop: false
      };
    }
  };
  var protocols = {
    navigateTo: navigateTo,
    redirectTo: redirectTo,
    previewImage: previewImage
  };
  var todos = ['preloadPage', 'unPreloadPage', 'loadSubPackage'];
  var canIUses = [];
  var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

  function processCallback(methodName, method, returnValue) {
    return function (res) {
      return method(processReturnValue(methodName, res, returnValue));
    };
  }

  function processArgs(methodName, fromArgs) {
    var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    if (isPlainObject(fromArgs)) {
      // 一般 api 的参数解析
      var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值

      if (isFn(argsOption)) {
        argsOption = argsOption(fromArgs, toArgs) || {};
      }

      for (var key in fromArgs) {
        if (hasOwn(argsOption, key)) {
          var keyOption = argsOption[key];

          if (isFn(keyOption)) {
            keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
          }

          if (!keyOption) {
            // 不支持的参数
            console.warn("\u5FEB\u5E94\u7528(Webview)\u7248 ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
          } else if (isStr(keyOption)) {
            // 重写参数 key
            toArgs[keyOption] = fromArgs[key];
          } else if (isPlainObject(keyOption)) {
            // {name:newName,value:value}可重新指定参数 key:value
            toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
          }
        } else if (CALLBACKS.indexOf(key) !== -1) {
          if (isFn(fromArgs[key])) {
            toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
          }
        } else {
          if (!keepFromArgs) {
            toArgs[key] = fromArgs[key];
          }
        }
      }

      return toArgs;
    } else if (isFn(fromArgs)) {
      fromArgs = processCallback(methodName, fromArgs, returnValue);
    }

    return fromArgs;
  }

  function processReturnValue(methodName, res, returnValue) {
    var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    if (isFn(protocols.returnValue)) {
      // 处理通用 returnValue
      res = protocols.returnValue(methodName, res);
    }

    return processArgs(methodName, res, returnValue, {}, keepReturnValue);
  }

  function wrapper(methodName, method) {
    if (hasOwn(protocols, methodName)) {
      var protocol = protocols[methodName];

      if (!protocol) {
        // 暂不支持的 api
        return function () {
          console.error("\u5FEB\u5E94\u7528(Webview)\u7248 \u6682\u4E0D\u652F\u6301".concat(methodName));
        };
      }

      return function (arg1, arg2) {
        // 目前 api 最多两个参数
        var options = protocol;

        if (isFn(protocol)) {
          options = protocol(arg1);
        }

        arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
        var args = [arg1];

        if (typeof arg2 !== 'undefined') {
          args.push(arg2);
        }

        if (isFn(options.name)) {
          methodName = options.name(arg1);
        } else if (isStr(options.name)) {
          methodName = options.name;
        }

        var returnValue = qa[methodName].apply(qa, args);

        if (isSyncApi(methodName)) {
          // 同步 api
          return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
        }

        return returnValue;
      };
    }

    return method;
  }

  var todoApis = Object.create(null);
  var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];

  function createTodoApi(name) {
    return function todoApi(_ref) {
      var fail = _ref.fail,
          complete = _ref.complete;
      var res = {
        errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5")
      };
      isFn(fail) && fail(res);
      isFn(complete) && complete(res);
    };
  }

  TODOS.forEach(function (name) {
    todoApis[name] = createTodoApi(name);
  });
  var providers = {
    oauth: [],
    share: [],
    payment: [],
    push: []
  };

  if (qa.canIUse('getAccountProvider')) {
    providers.oauth.push(qa.getAccountProvider());
  }

  if (qa.canIUse('getVendorPaymentProvider')) {
    providers.payment.push(qa.getVendorPaymentProvider());
  }

  function getProvider(_ref2) {
    var service = _ref2.service,
        success = _ref2.success,
        fail = _ref2.fail,
        complete = _ref2.complete;
    var res = false;

    if (providers[service]) {
      res = {
        errMsg: 'getProvider:ok',
        service: service,
        provider: providers[service]
      };
      isFn(success) && success(res);
    } else {
      res = {
        errMsg: 'getProvider:fail:服务[' + service + ']不存在'
      };
      isFn(fail) && fail(res);
    }

    isFn(complete) && complete(res);
  }

  var extraApi = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getProvider: getProvider
  });

  var getEmitter = function () {
    var Emitter;
    return function getUniEmitter() {
      if (!Emitter) {
        Emitter = new _vue["default"]();
      }

      return Emitter;
    };
  }();

  function apply(ctx, method, args) {
    return ctx[method].apply(ctx, args);
  }

  function $on() {
    return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
  }

  function $off() {
    return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
  }

  function $once() {
    return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
  }

  function $emit() {
    return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
  }

  var eventApi = /*#__PURE__*/Object.freeze({
    __proto__: null,
    $on: $on,
    $off: $off,
    $once: $once,
    $emit: $emit
  });
  var api = /*#__PURE__*/Object.freeze({
    __proto__: null
  });
  var MPPage = Page;
  var MPComponent = Component;
  var customizeRE = /:/g;
  var customize = cached(function (str) {
    return camelize(str.replace(customizeRE, '-'));
  });

  function initTriggerEvent(mpInstance) {
    var oldTriggerEvent = mpInstance.triggerEvent;

    mpInstance.triggerEvent = function (event) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
    };
  }

  function initHook(name, options) {
    var oldHook = options[name];

    if (!oldHook) {
      options[name] = function () {
        initTriggerEvent(this);
      };
    } else {
      options[name] = function () {
        initTriggerEvent(this);

        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        return oldHook.apply(this, args);
      };
    }
  }

  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };

  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };

  var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];

  function initMocks(vm, mocks) {
    var mpInstance = vm.$mp[vm.mpType];
    mocks.forEach(function (mock) {
      if (hasOwn(mpInstance, mock)) {
        vm[mock] = mpInstance[mock];
      }
    });
  }

  function hasHook(hook, vueOptions) {
    if (!vueOptions) {
      return true;
    }

    if (_vue["default"].options && Array.isArray(_vue["default"].options[hook])) {
      return true;
    }

    vueOptions = vueOptions["default"] || vueOptions;

    if (isFn(vueOptions)) {
      if (isFn(vueOptions.extendOptions[hook])) {
        return true;
      }

      if (vueOptions["super"] && vueOptions["super"].options && Array.isArray(vueOptions["super"].options[hook])) {
        return true;
      }

      return false;
    }

    if (isFn(vueOptions[hook])) {
      return true;
    }

    var mixins = vueOptions.mixins;

    if (Array.isArray(mixins)) {
      return !!mixins.find(function (mixin) {
        return hasHook(hook, mixin);
      });
    }
  }

  function initHooks(mpOptions, hooks, vueOptions) {
    hooks.forEach(function (hook) {
      if (hasHook(hook, vueOptions)) {
        mpOptions[hook] = function (args) {
          return this.$vm && this.$vm.__call_hook(hook, args);
        };
      }
    });
  }

  function initVueComponent(Vue, vueOptions) {
    vueOptions = vueOptions["default"] || vueOptions;
    var VueComponent;

    if (isFn(vueOptions)) {
      VueComponent = vueOptions;
    } else {
      VueComponent = Vue.extend(vueOptions);
    }

    vueOptions = VueComponent.options;
    return [VueComponent, vueOptions];
  }

  function initSlots(vm, vueSlots) {
    if (Array.isArray(vueSlots) && vueSlots.length) {
      var $slots = Object.create(null);
      vueSlots.forEach(function (slotName) {
        $slots[slotName] = true;
      });
      vm.$scopedSlots = vm.$slots = $slots;
    }
  }

  function initVueIds(vueIds, mpInstance) {
    vueIds = (vueIds || '').split(',');
    var len = vueIds.length;

    if (len === 1) {
      mpInstance._$vueId = vueIds[0];
    } else if (len === 2) {
      mpInstance._$vueId = vueIds[0];
      mpInstance._$vuePid = vueIds[1];
    }
  }

  function initData(vueOptions, context) {
    var data = vueOptions.data || {};
    var methods = vueOptions.methods || {};

    if (typeof data === 'function') {
      try {
        data = data.call(context); // 支持 Vue.prototype 上挂的数据
      } catch (e) {
        if (Object({
          "NODE_ENV": "development",
          "VUE_APP_PLATFORM": "quickapp-webview",
          "BASE_URL": "/"
        }).VUE_APP_DEBUG) {
          console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
        }
      }
    } else {
      try {
        // 对 data 格式化
        data = JSON.parse(JSON.stringify(data));
      } catch (e) {}
    }

    if (!isPlainObject(data)) {
      data = {};
    }

    Object.keys(methods).forEach(function (methodName) {
      if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
        data[methodName] = methods[methodName];
      }
    });
    return data;
  }

  var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

  function createObserver(name) {
    return function observer(newVal, oldVal) {
      if (this.$vm) {
        this.$vm[name] = newVal; // 为了触发其他非 render watcher
      }
    };
  }

  function initBehaviors(vueOptions, initBehavior) {
    var vueBehaviors = vueOptions.behaviors;
    var vueExtends = vueOptions["extends"];
    var vueMixins = vueOptions.mixins;
    var vueProps = vueOptions.props;

    if (!vueProps) {
      vueOptions.props = vueProps = [];
    }

    var behaviors = [];

    if (Array.isArray(vueBehaviors)) {
      vueBehaviors.forEach(function (behavior) {
        behaviors.push(behavior.replace('uni://', "qa".concat("://")));

        if (behavior === 'uni://form-field') {
          if (Array.isArray(vueProps)) {
            vueProps.push('name');
            vueProps.push('value');
          } else {
            vueProps.name = {
              type: String,
              "default": ''
            };
            vueProps.value = {
              type: [String, Number, Boolean, Array, Object, Date],
              "default": ''
            };
          }
        }
      });
    }

    if (isPlainObject(vueExtends) && vueExtends.props) {
      behaviors.push(initBehavior({
        properties: initProperties(vueExtends.props, true)
      }));
    }

    if (Array.isArray(vueMixins)) {
      vueMixins.forEach(function (vueMixin) {
        if (isPlainObject(vueMixin) && vueMixin.props) {
          behaviors.push(initBehavior({
            properties: initProperties(vueMixin.props, true)
          }));
        }
      });
    }

    return behaviors;
  }

  function parsePropType(key, type, defaultValue, file) {
    // [String]=>String
    if (Array.isArray(type) && type.length === 1) {
      return type[0];
    }

    return type;
  }

  function initProperties(props) {
    var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var properties = {};

    if (!isBehavior) {
      properties.vueId = {
        type: String,
        value: ''
      }; // 用于字节跳动小程序模拟抽象节点

      properties.generic = {
        type: Object,
        value: null
      };
      properties.vueSlots = {
        // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
        type: null,
        value: [],
        observer: function observer(newVal, oldVal) {
          var $slots = Object.create(null);
          newVal.forEach(function (slotName) {
            $slots[slotName] = true;
          });
          this.setData({
            $slots: $slots
          });
        }
      };
    }

    if (Array.isArray(props)) {
      // ['title']
      props.forEach(function (key) {
        properties[key] = {
          type: null,
          observer: createObserver(key)
        };
      });
    } else if (isPlainObject(props)) {
      // {title:{type:String,default:''},content:String}
      Object.keys(props).forEach(function (key) {
        var opts = props[key];

        if (isPlainObject(opts)) {
          // title:{type:String,default:''}
          var value = opts["default"];

          if (isFn(value)) {
            value = value();
          }

          opts.type = parsePropType(key, opts.type);
          properties[key] = {
            type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
            value: value,
            observer: createObserver(key)
          };
        } else {
          // content:String
          var type = parsePropType(key, opts);
          properties[key] = {
            type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
            observer: createObserver(key)
          };
        }
      });
    }

    return properties;
  }

  function wrapper$1(event) {
    // TODO 又得兼容 mpvue 的 mp 对象
    try {
      event.mp = JSON.parse(JSON.stringify(event));
    } catch (e) {}

    event.stopPropagation = noop;
    event.preventDefault = noop;
    event.target = event.target || {};

    if (!hasOwn(event, 'detail')) {
      event.detail = {};
    }

    if (hasOwn(event, 'markerId')) {
      event.detail = (0, _typeof2["default"])(event.detail) === 'object' ? event.detail : {};
      event.detail.markerId = event.markerId;
    }

    if (isPlainObject(event.detail)) {
      event.target = Object.assign({}, event.target, event.detail);
    }

    return event;
  }

  function getExtraValue(vm, dataPathsArray) {
    var context = vm;
    dataPathsArray.forEach(function (dataPathArray) {
      var dataPath = dataPathArray[0];
      var value = dataPathArray[2];

      if (dataPath || typeof value !== 'undefined') {
        // ['','',index,'disable']
        var propPath = dataPathArray[1];
        var valuePath = dataPathArray[3];
        var vFor;

        if (Number.isInteger(dataPath)) {
          vFor = dataPath;
        } else if (!dataPath) {
          vFor = context;
        } else if (typeof dataPath === 'string' && dataPath) {
          if (dataPath.indexOf('#s#') === 0) {
            vFor = dataPath.substr(3);
          } else {
            vFor = vm.__get_value(dataPath, context);
          }
        }

        if (Number.isInteger(vFor)) {
          context = value;
        } else if (!propPath) {
          context = vFor[value];
        } else {
          if (Array.isArray(vFor)) {
            context = vFor.find(function (vForItem) {
              return vm.__get_value(propPath, vForItem) === value;
            });
          } else if (isPlainObject(vFor)) {
            context = Object.keys(vFor).find(function (vForKey) {
              return vm.__get_value(propPath, vFor[vForKey]) === value;
            });
          } else {
            console.error('v-for 暂不支持循环数据：', vFor);
          }
        }

        if (valuePath) {
          context = vm.__get_value(valuePath, context);
        }
      }
    });
    return context;
  }

  function processEventExtra(vm, extra, event) {
    var extraObj = {};

    if (Array.isArray(extra) && extra.length) {
      /**
                                                *[
                                                *    ['data.items', 'data.id', item.data.id],
                                                *    ['metas', 'id', meta.id]
                                                *],
                                                *[
                                                *    ['data.items', 'data.id', item.data.id],
                                                *    ['metas', 'id', meta.id]
                                                *],
                                                *'test'
                                                */
      extra.forEach(function (dataPath, index) {
        if (typeof dataPath === 'string') {
          if (!dataPath) {
            // model,prop.sync
            extraObj['$' + index] = vm;
          } else {
            if (dataPath === '$event') {
              // $event
              extraObj['$' + index] = event;
            } else if (dataPath === 'arguments') {
              if (event.detail && event.detail.__args__) {
                extraObj['$' + index] = event.detail.__args__;
              } else {
                extraObj['$' + index] = [event];
              }
            } else if (dataPath.indexOf('$event.') === 0) {
              // $event.target.value
              extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
            } else {
              extraObj['$' + index] = vm.__get_value(dataPath);
            }
          }
        } else {
          extraObj['$' + index] = getExtraValue(vm, dataPath);
        }
      });
    }

    return extraObj;
  }

  function getObjByArray(arr) {
    var obj = {};

    for (var i = 1; i < arr.length; i++) {
      var element = arr[i];
      obj[element[0]] = element[1];
    }

    return obj;
  }

  function processEventArgs(vm, event) {
    var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var isCustom = arguments.length > 4 ? arguments[4] : undefined;
    var methodName = arguments.length > 5 ? arguments[5] : undefined;
    var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

    if (isCustom) {
      // 自定义事件
      isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';

      if (!args.length) {
        // 无参数，直接传入 event 或 detail 数组
        if (isCustomMPEvent) {
          return [event];
        }

        return event.detail.__args__ || event.detail;
      }
    }

    var extraObj = processEventExtra(vm, extra, event);
    var ret = [];
    args.forEach(function (arg) {
      if (arg === '$event') {
        if (methodName === '__set_model' && !isCustom) {
          // input v-model value
          ret.push(event.target.value);
        } else {
          if (isCustom && !isCustomMPEvent) {
            ret.push(event.detail.__args__[0]);
          } else {
            // wxcomponent 组件或内置组件
            ret.push(event);
          }
        }
      } else {
        if (Array.isArray(arg) && arg[0] === 'o') {
          ret.push(getObjByArray(arg));
        } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
          ret.push(extraObj[arg]);
        } else {
          ret.push(arg);
        }
      }
    });
    return ret;
  }

  var ONCE = '~';
  var CUSTOM = '^';

  function isMatchEventType(eventType, optType) {
    return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
  }

  function getContextVm(vm) {
    var $parent = vm.$parent; // 父组件是 scoped slots 或者其他自定义组件时继续查找

    while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
      $parent = $parent.$parent;
    }

    return $parent && $parent.$parent;
  }

  function handleEvent(event) {
    var _this2 = this;

    event = wrapper$1(event); // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]

    var dataset = (event.currentTarget || event.target).dataset;

    if (!dataset) {
      return console.warn('事件信息不存在');
    }

    var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰

    if (!eventOpts) {
      return console.warn('事件信息不存在');
    } // [['handle',[1,2,a]],['handle1',[1,2,a]]]


    var eventType = event.type;
    var ret = [];
    eventOpts.forEach(function (eventOpt) {
      var type = eventOpt[0];
      var eventsArray = eventOpt[1];
      var isCustom = type.charAt(0) === CUSTOM;
      type = isCustom ? type.slice(1) : type;
      var isOnce = type.charAt(0) === ONCE;
      type = isOnce ? type.slice(1) : type;

      if (eventsArray && isMatchEventType(eventType, type)) {
        eventsArray.forEach(function (eventArray) {
          var methodName = eventArray[0];

          if (methodName) {
            var handlerCtx = _this2.$vm;

            if (handlerCtx.$options.generic) {
              // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
              handlerCtx = getContextVm(handlerCtx) || handlerCtx;
            }

            if (methodName === '$emit') {
              handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
              return;
            }

            var handler = handlerCtx[methodName];

            if (!isFn(handler)) {
              throw new Error(" _vm.".concat(methodName, " is not a function"));
            }

            if (isOnce) {
              if (handler.once) {
                return;
              }

              handler.once = true;
            }

            var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName); // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
            // eslint-disable-next-line no-sparse-arrays

            ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
          }
        });
      }
    });

    if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
      return ret[0];
    }
  }

  var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];

  function parseBaseApp(vm, _ref3) {
    var mocks = _ref3.mocks,
        initRefs = _ref3.initRefs;

    if (vm.$options.store) {
      _vue["default"].prototype.$store = vm.$options.store;
    }

    _vue["default"].prototype.mpHost = "quickapp-webview";

    _vue["default"].mixin({
      beforeCreate: function beforeCreate() {
        if (!this.$options.mpType) {
          return;
        }

        this.mpType = this.$options.mpType;
        this.$mp = _defineProperty({
          data: {}
        }, this.mpType, this.$options.mpInstance);
        this.$scope = this.$options.mpInstance;
        delete this.$options.mpType;
        delete this.$options.mpInstance;

        if (this.mpType !== 'app') {
          initRefs(this);
          initMocks(this, mocks);
        }
      }
    });

    var appOptions = {
      onLaunch: function onLaunch(args) {
        if (this.$vm) {
          // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
          return;
        }

        this.$vm = vm;
        this.$vm.$mp = {
          app: this
        };
        this.$vm.$scope = this; // vm 上也挂载 globalData

        this.$vm.globalData = this.globalData;
        this.$vm._isMounted = true;

        this.$vm.__call_hook('mounted', args);

        this.$vm.__call_hook('onLaunch', args);
      }
    }; // 兼容旧版本 globalData

    appOptions.globalData = vm.$options.globalData || {}; // 将 methods 中的方法挂在 getApp() 中

    var methods = vm.$options.methods;

    if (methods) {
      Object.keys(methods).forEach(function (name) {
        appOptions[name] = methods[name];
      });
    }

    initHooks(appOptions, hooks);
    return appOptions;
  }

  var mocks = ['nodeId', 'componentName', '_componentId', 'uniquePrefix'];

  function isPage() {
    // 百度小程序组件的id，某些情况下可能是number类型的0，不能直接return !this.ownerId 判断当前组件是否是Page
    // 否则会导致mounted不执行
    return typeof this.ownerId === 'undefined';
  }

  function findVmByVueId(vm, vuePid) {
    var $children = vm.$children; // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)

    for (var i = $children.length - 1; i >= 0; i--) {
      var childVm = $children[i];

      if (childVm.$scope._$vueId === vuePid) {
        return childVm;
      }
    } // 反向递归查找


    var parentVm;

    for (var _i = $children.length - 1; _i >= 0; _i--) {
      parentVm = findVmByVueId($children[_i], vuePid);

      if (parentVm) {
        return parentVm;
      }
    }
  }

  function initBehavior(options) {
    return Behavior(options);
  }

  function initRefs(vm) {
    var mpInstance = vm.$scope;
    Object.defineProperty(vm, '$refs', {
      get: function get() {
        var $refs = {};
        var components = mpInstance.selectAllComponents('.vue-ref');
        components.forEach(function (component) {
          var ref = component.dataset.ref;
          $refs[ref] = component.$vm || component;
        });
        var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
        forComponents.forEach(function (component) {
          var ref = component.dataset.ref;

          if (!$refs[ref]) {
            $refs[ref] = [];
          }

          $refs[ref].push(component.$vm || component);
        });
        return $refs;
      }
    });
  }

  function handleLink(event) {
    var _ref4 = event.detail || event.value,
        vuePid = _ref4.vuePid,
        vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)


    var parentVm;

    if (vuePid) {
      parentVm = findVmByVueId(this.$vm, vuePid);
    }

    if (!parentVm) {
      parentVm = this.$vm;
    }

    vueOptions.parent = parentVm;
  }

  var instances = Object.create(null);

  function initRelation(_ref5) {
    var vuePid = _ref5.vuePid,
        mpInstance = _ref5.mpInstance; // triggerEvent 后，接收事件时机特别晚，已经到了 ready 之后

    var nodeId = mpInstance.nodeId + '';
    var webviewId = mpInstance.pageinstance.__pageId__ + '';
    instances[webviewId + '_' + nodeId] = mpInstance.$vm;
    this.triggerEvent('__l', {
      vuePid: vuePid,
      nodeId: nodeId,
      webviewId: webviewId
    });
  }

  function handleLink$1(_ref6) {
    var _ref6$detail = _ref6.detail,
        nodeId = _ref6$detail.nodeId,
        webviewId = _ref6$detail.webviewId;
    var vm = instances[webviewId + '_' + nodeId];

    if (!vm) {
      return;
    }

    var parentVm = instances[webviewId + '_' + vm.$scope.ownerId];

    if (!parentVm) {
      parentVm = this.$vm;
    }

    vm.$parent = parentVm;
    vm.$root = parentVm.$root;
    parentVm.$children.push(vm);

    var createdVm = function createdVm() {
      vm.__call_hook('created');
    };

    var mountedVm = function mountedVm() {
      // 处理当前 vm 子
      if (vm._$childVues) {
        vm._$childVues.forEach(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 1),
              createdVm = _ref8[0];

          return createdVm();
        });

        vm._$childVues.forEach(function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 2),
              mountedVm = _ref10[1];

          return mountedVm();
        });

        delete vm._$childVues;
      }

      vm.__call_hook('beforeMount');

      vm._isMounted = true;

      vm.__call_hook('mounted');

      vm.__call_hook('onReady');
    }; // 当 parentVm 已经 mounted 时，直接触发，否则延迟


    if (!parentVm || parentVm._isMounted) {
      createdVm();
      mountedVm();
    } else {
      (parentVm._$childVues || (parentVm._$childVues = [])).push([createdVm, mountedVm]);
    }
  }

  function parseApp(vm) {
    _vue["default"].prototype._$fallback = true; // 降级（调整原 vue 的部分生命周期，如 created，beforeMount,inject,provide）

    _vue["default"].mixin({
      created: function created() {
        // 处理 injections, triggerEvent 是异步，且触发时机很慢，故延迟 relation 设置
        if (this.mpType !== 'app') {
          initRefs(this);

          this.__init_injections(this);

          this.__init_provide(this);
        }
      }
    });

    return parseBaseApp(vm, {
      mocks: mocks,
      initRefs: function initRefs() {} // attached 时，可能查询不到

    });
  }

  function createApp(vm) {
    _vue["default"].prototype.getOpenerEventChannel = function () {
      if (!this.__eventChannel__) {
        this.__eventChannel__ = new EventChannel();
      }

      return this.__eventChannel__;
    };

    var callHook = _vue["default"].prototype.__call_hook;

    _vue["default"].prototype.__call_hook = function (hook, args) {
      if (hook === 'onLoad' && args && args.__id__) {
        this.__eventChannel__ = getEventChannel(args.__id__);
        delete args.__id__;
      }

      return callHook.call(this, hook, args);
    };

    App(parseApp(vm));
    return vm;
  }

  var encodeReserveRE = /[!'()*]/g;

  var encodeReserveReplacer = function encodeReserveReplacer(c) {
    return '%' + c.charCodeAt(0).toString(16);
  };

  var commaRE = /%2C/g; // fixed encodeURIComponent which is more conformant to RFC3986:
  // - escapes [!'()*]
  // - preserve commas

  var encode = function encode(str) {
    return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
  };

  function stringifyQuery(obj) {
    var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
    var res = obj ? Object.keys(obj).map(function (key) {
      var val = obj[key];

      if (val === undefined) {
        return '';
      }

      if (val === null) {
        return encodeStr(key);
      }

      if (Array.isArray(val)) {
        var result = [];
        val.forEach(function (val2) {
          if (val2 === undefined) {
            return;
          }

          if (val2 === null) {
            result.push(encodeStr(key));
          } else {
            result.push(encodeStr(key) + '=' + encodeStr(val2));
          }
        });
        return result.join('&');
      }

      return encodeStr(key) + '=' + encodeStr(val);
    }).filter(function (x) {
      return x.length > 0;
    }).join('&') : null;
    return res ? "?".concat(res) : '';
  }

  function parseBaseComponent(vueComponentOptions) {
    var _ref11 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        isPage = _ref11.isPage,
        initRelation = _ref11.initRelation;

    var _initVueComponent = initVueComponent(_vue["default"], vueComponentOptions),
        _initVueComponent2 = _slicedToArray(_initVueComponent, 2),
        VueComponent = _initVueComponent2[0],
        vueOptions = _initVueComponent2[1];

    var options = _objectSpread({
      multipleSlots: true,
      addGlobalClass: true
    }, vueOptions.options || {});

    var componentOptions = {
      options: options,
      data: initData(vueOptions, _vue["default"].prototype),
      behaviors: initBehaviors(vueOptions, initBehavior),
      properties: initProperties(vueOptions.props, false, vueOptions.__file),
      lifetimes: {
        attached: function attached() {
          var properties = this.properties;
          var options = {
            mpType: isPage.call(this) ? 'page' : 'component',
            mpInstance: this,
            propsData: properties
          };
          initVueIds(properties.vueId, this); // 处理父子关系

          initRelation.call(this, {
            vuePid: this._$vuePid,
            vueOptions: options
          }); // 初始化 vue 实例

          this.$vm = new VueComponent(options); // 处理$slots,$scopedSlots（暂不支持动态变化$slots）

          initSlots(this.$vm, properties.vueSlots); // 触发首次 setData

          this.$vm.$mount();
        },
        ready: function ready() {
          // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
          // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
          if (this.$vm) {
            this.$vm._isMounted = true;

            this.$vm.__call_hook('mounted');

            this.$vm.__call_hook('onReady');
          }
        },
        detached: function detached() {
          this.$vm && this.$vm.$destroy();
        }
      },
      pageLifetimes: {
        show: function show(args) {
          this.$vm && this.$vm.__call_hook('onPageShow', args);
        },
        hide: function hide() {
          this.$vm && this.$vm.__call_hook('onPageHide');
        },
        resize: function resize(size) {
          this.$vm && this.$vm.__call_hook('onPageResize', size);
        }
      },
      methods: {
        __l: handleLink,
        __e: handleEvent
      }
    }; // externalClasses

    if (vueOptions.externalClasses) {
      componentOptions.externalClasses = vueOptions.externalClasses;
    }

    if (Array.isArray(vueOptions.wxsCallMethods)) {
      vueOptions.wxsCallMethods.forEach(function (callMethod) {
        componentOptions.methods[callMethod] = function (args) {
          return this.$vm[callMethod](args);
        };
      });
    }

    if (isPage) {
      return componentOptions;
    }

    return [componentOptions, VueComponent];
  }

  function parseComponent(vueOptions) {
    var _parseBaseComponent = parseBaseComponent(vueOptions),
        _parseBaseComponent2 = _slicedToArray(_parseBaseComponent, 2),
        componentOptions = _parseBaseComponent2[0],
        VueComponent = _parseBaseComponent2[1];

    componentOptions.lifetimes.attached = function attached() {
      var properties = this.properties;
      var options = {
        mpType: isPage.call(this) ? 'page' : 'component',
        mpInstance: this,
        propsData: properties
      };
      initVueIds(properties.vueId, this); // 初始化 vue 实例

      this.$vm = new VueComponent(options); // 处理$slots,$scopedSlots（暂不支持动态变化$slots）

      initSlots(this.$vm, properties.vueSlots); // 处理父子关系

      initRelation.call(this, {
        vuePid: this._$vuePid,
        mpInstance: this
      }); // 触发首次 setData

      this.$vm.$mount();
    }; // ready 比 handleLink 还早，初始化逻辑放到 handleLink 中


    delete componentOptions.lifetimes.ready;
    componentOptions.methods.__l = handleLink$1;
    return componentOptions;
  }

  var hooks$1 = ['onShow', 'onHide', 'onUnload'];
  hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

  function parseBasePage(vuePageOptions, _ref12) {
    var isPage = _ref12.isPage,
        initRelation = _ref12.initRelation;
    var pageOptions = parseComponent(vuePageOptions);
    initHooks(pageOptions.methods, hooks$1, vuePageOptions);

    pageOptions.methods.onLoad = function (query) {
      this.options = query;
      var copyQuery = Object.assign({}, query);
      delete copyQuery.__id__;
      this.$page = {
        fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
      };
      this.$vm.$mp.query = query; // 兼容 mpvue

      this.$vm.__call_hook('onLoad', query);
    };

    return pageOptions;
  }

  function parsePage(vuePageOptions) {
    var pageOptions = parseBasePage(vuePageOptions, {
      isPage: isPage,
      initRelation: initRelation
    }); // 页面需要在 ready 中触发，其他组件是在 handleLink 中触发

    pageOptions.lifetimes.ready = function ready() {
      if (this.$vm && this.$vm.mpType === 'page') {
        this.$vm.__call_hook('created');

        this.$vm.__call_hook('beforeMount');

        this.$vm._isMounted = true;

        this.$vm.__call_hook('mounted');

        this.$vm.__call_hook('onReady');
      } else {
        this.is && console.warn(this.is + ' is not ready');
      }
    };

    pageOptions.lifetimes.detached = function detached() {
      this.$vm && this.$vm.$destroy(); // 清理

      var pageId = this.pageinstance.__pageId__;
      Object.keys(instances).forEach(function (key) {
        if (key.indexOf(pageId + '_') === 0) {
          delete instances[key];
        }
      });
    };

    return pageOptions;
  }

  function createPage(vuePageOptions) {
    {
      return Component(parsePage(vuePageOptions));
    }
  }

  function createComponent(vueOptions) {
    {
      return Component(parseComponent(vueOptions));
    }
  }

  todos.forEach(function (todoApi) {
    protocols[todoApi] = false;
  });
  canIUses.forEach(function (canIUseApi) {
    var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;

    if (!qa.canIUse(apiName)) {
      protocols[canIUseApi] = false;
    }
  });
  var uni = {};

  if (typeof Proxy !== 'undefined' && "quickapp-webview" !== 'app-plus') {
    uni = new Proxy({}, {
      get: function get(target, name) {
        if (hasOwn(target, name)) {
          return target[name];
        }

        if (baseApi[name]) {
          return baseApi[name];
        }

        if (api[name]) {
          return promisify(name, api[name]);
        }

        {
          if (extraApi[name]) {
            return promisify(name, extraApi[name]);
          }

          if (todoApis[name]) {
            return promisify(name, todoApis[name]);
          }
        }

        if (eventApi[name]) {
          return eventApi[name];
        }

        if (!hasOwn(qa, name) && !hasOwn(protocols, name)) {
          return;
        }

        return promisify(name, wrapper(name, qa[name]));
      },
      set: function set(target, name, value) {
        target[name] = value;
        return true;
      }
    });
  } else {
    Object.keys(baseApi).forEach(function (name) {
      uni[name] = baseApi[name];
    });
    {
      Object.keys(todoApis).forEach(function (name) {
        uni[name] = promisify(name, todoApis[name]);
      });
      Object.keys(extraApi).forEach(function (name) {
        uni[name] = promisify(name, todoApis[name]);
      });
    }
    Object.keys(eventApi).forEach(function (name) {
      uni[name] = eventApi[name];
    });
    Object.keys(api).forEach(function (name) {
      uni[name] = promisify(name, api[name]);
    });
    Object.keys(qa).forEach(function (name) {
      if (hasOwn(qa, name) || hasOwn(protocols, name)) {
        uni[name] = promisify(name, wrapper(name, qa[name]));
      }
    });
  }

  qa.createApp = createApp;
  qa.createPage = createPage;
  qa.createComponent = createComponent;
  var uni$1 = uni;
  var _default = uni$1;
  exports["default"] = _default;
  /***/
},
/* 2 */

/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/

/*! exports provided: default */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* WEBPACK VAR INJECTION */


  (function (global) {
    /*!
    * Vue.js v2.6.11
    * (c) 2014-2020 Evan You
    * Released under the MIT License.
    */

    /*  */
    var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
    // explicitness and function inlining.

    function isUndef(v) {
      return v === undefined || v === null;
    }

    function isDef(v) {
      return v !== undefined && v !== null;
    }

    function isTrue(v) {
      return v === true;
    }

    function isFalse(v) {
      return v === false;
    }
    /**
     * Check if value is primitive.
     */


    function isPrimitive(value) {
      return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
      (0, _typeof2["default"])(value) === 'symbol' || typeof value === 'boolean';
    }
    /**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     */


    function isObject(obj) {
      return obj !== null && (0, _typeof2["default"])(obj) === 'object';
    }
    /**
     * Get the raw type string of a value, e.g., [object Object].
     */


    var _toString = Object.prototype.toString;

    function toRawType(value) {
      return _toString.call(value).slice(8, -1);
    }
    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */


    function isPlainObject(obj) {
      return _toString.call(obj) === '[object Object]';
    }

    function isRegExp(v) {
      return _toString.call(v) === '[object RegExp]';
    }
    /**
     * Check if val is a valid array index.
     */


    function isValidArrayIndex(val) {
      var n = parseFloat(String(val));
      return n >= 0 && Math.floor(n) === n && isFinite(val);
    }

    function isPromise(val) {
      return isDef(val) && typeof val.then === 'function' && typeof val["catch"] === 'function';
    }
    /**
     * Convert a value to a string that is actually rendered.
     */


    function toString(val) {
      return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
    }
    /**
     * Convert an input value to a number for persistence.
     * If the conversion fails, return original string.
     */


    function toNumber(val) {
      var n = parseFloat(val);
      return isNaN(n) ? val : n;
    }
    /**
     * Make a map and return a function for checking if a key
     * is in that map.
     */


    function makeMap(str, expectsLowerCase) {
      var map = Object.create(null);
      var list = str.split(',');

      for (var i = 0; i < list.length; i++) {
        map[list[i]] = true;
      }

      return expectsLowerCase ? function (val) {
        return map[val.toLowerCase()];
      } : function (val) {
        return map[val];
      };
    }
    /**
     * Check if a tag is a built-in tag.
     */


    var isBuiltInTag = makeMap('slot,component', true);
    /**
     * Check if an attribute is a reserved attribute.
     */

    var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
    /**
     * Remove an item from an array.
     */

    function remove(arr, item) {
      if (arr.length) {
        var index = arr.indexOf(item);

        if (index > -1) {
          return arr.splice(index, 1);
        }
      }
    }
    /**
     * Check whether an object has the property.
     */


    var hasOwnProperty = Object.prototype.hasOwnProperty;

    function hasOwn(obj, key) {
      return hasOwnProperty.call(obj, key);
    }
    /**
     * Create a cached version of a pure function.
     */


    function cached(fn) {
      var cache = Object.create(null);
      return function cachedFn(str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str));
      };
    }
    /**
     * Camelize a hyphen-delimited string.
     */


    var camelizeRE = /-(\w)/g;
    var camelize = cached(function (str) {
      return str.replace(camelizeRE, function (_, c) {
        return c ? c.toUpperCase() : '';
      });
    });
    /**
     * Capitalize a string.
     */

    var capitalize = cached(function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    /**
     * Hyphenate a camelCase string.
     */

    var hyphenateRE = /\B([A-Z])/g;
    var hyphenate = cached(function (str) {
      return str.replace(hyphenateRE, '-$1').toLowerCase();
    });
    /**
     * Simple bind polyfill for environments that do not support it,
     * e.g., PhantomJS 1.x. Technically, we don't need this anymore
     * since native bind is now performant enough in most browsers.
     * But removing it would mean breaking code that was able to run in
     * PhantomJS 1.x, so this must be kept for backward compatibility.
     */

    /* istanbul ignore next */

    function polyfillBind(fn, ctx) {
      function boundFn(a) {
        var l = arguments.length;
        return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
      }

      boundFn._length = fn.length;
      return boundFn;
    }

    function nativeBind(fn, ctx) {
      return fn.bind(ctx);
    }

    var bind = Function.prototype.bind ? nativeBind : polyfillBind;
    /**
     * Convert an Array-like object to a real Array.
     */

    function toArray(list, start) {
      start = start || 0;
      var i = list.length - start;
      var ret = new Array(i);

      while (i--) {
        ret[i] = list[i + start];
      }

      return ret;
    }
    /**
     * Mix properties into target object.
     */


    function extend(to, _from) {
      for (var key in _from) {
        to[key] = _from[key];
      }

      return to;
    }
    /**
     * Merge an Array of Objects into a single Object.
     */


    function toObject(arr) {
      var res = {};

      for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
          extend(res, arr[i]);
        }
      }

      return res;
    }
    /* eslint-disable no-unused-vars */

    /**
     * Perform no operation.
     * Stubbing args to make Flow happy without leaving useless transpiled code
     * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
     */


    function noop(a, b, c) {}
    /**
     * Always return false.
     */


    var no = function no(a, b, c) {
      return false;
    };
    /* eslint-enable no-unused-vars */

    /**
     * Return the same value.
     */


    var identity = function identity(_) {
      return _;
    };
    /**
     * Check if two values are loosely equal - that is,
     * if they are plain objects, do they have the same shape?
     */


    function looseEqual(a, b) {
      if (a === b) {
        return true;
      }

      var isObjectA = isObject(a);
      var isObjectB = isObject(b);

      if (isObjectA && isObjectB) {
        try {
          var isArrayA = Array.isArray(a);
          var isArrayB = Array.isArray(b);

          if (isArrayA && isArrayB) {
            return a.length === b.length && a.every(function (e, i) {
              return looseEqual(e, b[i]);
            });
          } else if (a instanceof Date && b instanceof Date) {
            return a.getTime() === b.getTime();
          } else if (!isArrayA && !isArrayB) {
            var keysA = Object.keys(a);
            var keysB = Object.keys(b);
            return keysA.length === keysB.length && keysA.every(function (key) {
              return looseEqual(a[key], b[key]);
            });
          } else {
            /* istanbul ignore next */
            return false;
          }
        } catch (e) {
          /* istanbul ignore next */
          return false;
        }
      } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b);
      } else {
        return false;
      }
    }
    /**
     * Return the first index at which a loosely equal value can be
     * found in the array (if value is a plain object, the array must
     * contain an object of the same shape), or -1 if it is not present.
     */


    function looseIndexOf(arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (looseEqual(arr[i], val)) {
          return i;
        }
      }

      return -1;
    }
    /**
     * Ensure a function is called only once.
     */


    function once(fn) {
      var called = false;
      return function () {
        if (!called) {
          called = true;
          fn.apply(this, arguments);
        }
      };
    }

    var ASSET_TYPES = ['component', 'directive', 'filter'];
    var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
    /*  */

    var config = {
      /**
       * Option merge strategies (used in core/util/options)
       */
      // $flow-disable-line
      optionMergeStrategies: Object.create(null),

      /**
       * Whether to suppress warnings.
       */
      silent: false,

      /**
       * Show production mode tip message on boot?
       */
      productionTip: "development" !== 'production',

      /**
       * Whether to enable devtools
       */
      devtools: "development" !== 'production',

      /**
       * Whether to record perf
       */
      performance: false,

      /**
       * Error handler for watcher errors
       */
      errorHandler: null,

      /**
       * Warn handler for watcher warns
       */
      warnHandler: null,

      /**
       * Ignore certain custom elements
       */
      ignoredElements: [],

      /**
       * Custom user key aliases for v-on
       */
      // $flow-disable-line
      keyCodes: Object.create(null),

      /**
       * Check if a tag is reserved so that it cannot be registered as a
       * component. This is platform-dependent and may be overwritten.
       */
      isReservedTag: no,

      /**
       * Check if an attribute is reserved so that it cannot be used as a component
       * prop. This is platform-dependent and may be overwritten.
       */
      isReservedAttr: no,

      /**
       * Check if a tag is an unknown element.
       * Platform-dependent.
       */
      isUnknownElement: no,

      /**
       * Get the namespace of an element
       */
      getTagNamespace: noop,

      /**
       * Parse the real tag name for the specific platform.
       */
      parsePlatformTagName: identity,

      /**
       * Check if an attribute must be bound using property, e.g. value
       * Platform-dependent.
       */
      mustUseProp: no,

      /**
       * Perform updates asynchronously. Intended to be used by Vue Test Utils
       * This will significantly reduce performance if set to false.
       */
      async: true,

      /**
       * Exposed for legacy reasons
       */
      _lifecycleHooks: LIFECYCLE_HOOKS
    };
    /*  */

    /**
     * unicode letters used for parsing html tags, component names and property paths.
     * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
     * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
     */

    var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
    /**
     * Check if a string starts with $ or _
     */

    function isReserved(str) {
      var c = (str + '').charCodeAt(0);
      return c === 0x24 || c === 0x5F;
    }
    /**
     * Define a property.
     */


    function def(obj, key, val, enumerable) {
      Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
      });
    }
    /**
     * Parse simple path.
     */


    var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");

    function parsePath(path) {
      if (bailRE.test(path)) {
        return;
      }

      var segments = path.split('.');
      return function (obj) {
        for (var i = 0; i < segments.length; i++) {
          if (!obj) {
            return;
          }

          obj = obj[segments[i]];
        }

        return obj;
      };
    }
    /*  */
    // can we use __proto__?


    var hasProto = ('__proto__' in {}); // Browser environment sniffing

    var inBrowser = typeof window !== 'undefined';
    var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
    var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
    var UA = inBrowser && window.navigator.userAgent.toLowerCase();
    var isIE = UA && /msie|trident/.test(UA);
    var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
    var isEdge = UA && UA.indexOf('edge/') > 0;
    var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
    var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
    var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
    var isPhantomJS = UA && /phantomjs/.test(UA);
    var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

    var nativeWatch = {}.watch;

    if (inBrowser) {
      try {
        var opts = {};
        Object.defineProperty(opts, 'passive', {
          get: function get() {}
        }); // https://github.com/facebook/flow/issues/285

        window.addEventListener('test-passive', null, opts);
      } catch (e) {}
    } // this needs to be lazy-evaled because vue may be required before
    // vue-server-renderer can set VUE_ENV


    var _isServer;

    var isServerRendering = function isServerRendering() {
      if (_isServer === undefined) {
        /* istanbul ignore if */
        if (!inBrowser && !inWeex && typeof global !== 'undefined') {
          // detect presence of vue-server-renderer and avoid
          // Webpack shimming the process
          _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
        } else {
          _isServer = false;
        }
      }

      return _isServer;
    }; // detect devtools


    var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    /* istanbul ignore next */

    function isNative(Ctor) {
      return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
    }

    var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

    var _Set;
    /* istanbul ignore if */
    // $flow-disable-line


    if (typeof Set !== 'undefined' && isNative(Set)) {
      // use native Set when available.
      _Set = Set;
    } else {
      // a non-standard Set polyfill that only works with primitive keys.
      _Set = /*@__PURE__*/function () {
        function Set() {
          this.set = Object.create(null);
        }

        Set.prototype.has = function has(key) {
          return this.set[key] === true;
        };

        Set.prototype.add = function add(key) {
          this.set[key] = true;
        };

        Set.prototype.clear = function clear() {
          this.set = Object.create(null);
        };

        return Set;
      }();
    }
    /*  */


    var warn = noop;
    var tip = noop;
    var generateComponentTrace = noop; // work around flow check

    var formatComponentName = noop;

    if (true) {
      var hasConsole = typeof console !== 'undefined';
      var classifyRE = /(?:^|[-_])(\w)/g;

      var classify = function classify(str) {
        return str.replace(classifyRE, function (c) {
          return c.toUpperCase();
        }).replace(/[-_]/g, '');
      };

      warn = function warn(msg, vm) {
        var trace = vm ? generateComponentTrace(vm) : '';

        if (config.warnHandler) {
          config.warnHandler.call(null, msg, vm, trace);
        } else if (hasConsole && !config.silent) {
          console.error("[Vue warn]: " + msg + trace);
        }
      };

      tip = function tip(msg, vm) {
        if (hasConsole && !config.silent) {
          console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
        }
      };

      formatComponentName = function formatComponentName(vm, includeFile) {
        if (vm.$root === vm) {
          if (vm.$options && vm.$options.__file) {
            // fixed by xxxxxx
            return '' + vm.$options.__file;
          }

          return '<Root>';
        }

        var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
        var name = options.name || options._componentTag;
        var file = options.__file;

        if (!name && file) {
          var match = file.match(/([^/\\]+)\.vue$/);
          name = match && match[1];
        }

        return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
      };

      var repeat = function repeat(str, n) {
        var res = '';

        while (n) {
          if (n % 2 === 1) {
            res += str;
          }

          if (n > 1) {
            str += str;
          }

          n >>= 1;
        }

        return res;
      };

      generateComponentTrace = function generateComponentTrace(vm) {
        if (vm._isVue && vm.$parent) {
          var tree = [];
          var currentRecursiveSequence = 0;

          while (vm && vm.$options.name !== 'PageBody') {
            if (tree.length > 0) {
              var last = tree[tree.length - 1];

              if (last.constructor === vm.constructor) {
                currentRecursiveSequence++;
                vm = vm.$parent;
                continue;
              } else if (currentRecursiveSequence > 0) {
                tree[tree.length - 1] = [last, currentRecursiveSequence];
                currentRecursiveSequence = 0;
              }
            }

            !vm.$options.isReserved && tree.push(vm);
            vm = vm.$parent;
          }

          return '\n\nfound in\n\n' + tree.map(function (vm, i) {
            return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
          }).join('\n');
        } else {
          return "\n\n(found in " + formatComponentName(vm) + ")";
        }
      };
    }
    /*  */


    var uid = 0;
    /**
     * A dep is an observable that can have multiple
     * directives subscribing to it.
     */

    var Dep = function Dep() {
      this.id = uid++;
      this.subs = [];
    };

    Dep.prototype.addSub = function addSub(sub) {
      this.subs.push(sub);
    };

    Dep.prototype.removeSub = function removeSub(sub) {
      remove(this.subs, sub);
    };

    Dep.prototype.depend = function depend() {
      if (Dep.SharedObject.target) {
        Dep.SharedObject.target.addDep(this);
      }
    };

    Dep.prototype.notify = function notify() {
      // stabilize the subscriber list first
      var subs = this.subs.slice();

      if ( true && !config.async) {
        // subs aren't sorted in scheduler if not running async
        // we need to sort them now to make sure they fire in correct
        // order
        subs.sort(function (a, b) {
          return a.id - b.id;
        });
      }

      for (var i = 0, l = subs.length; i < l; i++) {
        subs[i].update();
      }
    }; // The current target watcher being evaluated.
    // This is globally unique because only one watcher
    // can be evaluated at a time.
    // fixed by xxxxxx (nvue shared vuex)

    /* eslint-disable no-undef */


    Dep.SharedObject = {};
    Dep.SharedObject.target = null;
    Dep.SharedObject.targetStack = [];

    function pushTarget(target) {
      Dep.SharedObject.targetStack.push(target);
      Dep.SharedObject.target = target;
      Dep.target = target;
    }

    function popTarget() {
      Dep.SharedObject.targetStack.pop();
      Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
      Dep.target = Dep.SharedObject.target;
    }
    /*  */


    var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
      this.tag = tag;
      this.data = data;
      this.children = children;
      this.text = text;
      this.elm = elm;
      this.ns = undefined;
      this.context = context;
      this.fnContext = undefined;
      this.fnOptions = undefined;
      this.fnScopeId = undefined;
      this.key = data && data.key;
      this.componentOptions = componentOptions;
      this.componentInstance = undefined;
      this.parent = undefined;
      this.raw = false;
      this.isStatic = false;
      this.isRootInsert = true;
      this.isComment = false;
      this.isCloned = false;
      this.isOnce = false;
      this.asyncFactory = asyncFactory;
      this.asyncMeta = undefined;
      this.isAsyncPlaceholder = false;
    };

    var prototypeAccessors = {
      child: {
        configurable: true
      }
    }; // DEPRECATED: alias for componentInstance for backwards compat.

    /* istanbul ignore next */

    prototypeAccessors.child.get = function () {
      return this.componentInstance;
    };

    Object.defineProperties(VNode.prototype, prototypeAccessors);

    var createEmptyVNode = function createEmptyVNode(text) {
      if (text === void 0) text = '';
      var node = new VNode();
      node.text = text;
      node.isComment = true;
      return node;
    };

    function createTextVNode(val) {
      return new VNode(undefined, undefined, undefined, String(val));
    } // optimized shallow clone
    // used for static nodes and slot nodes because they may be reused across
    // multiple renders, cloning them avoids errors when DOM manipulations rely
    // on their elm reference.


    function cloneVNode(vnode) {
      var cloned = new VNode(vnode.tag, vnode.data, // #7975
      // clone children array to avoid mutating original in case of cloning
      // a child.
      vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
      cloned.ns = vnode.ns;
      cloned.isStatic = vnode.isStatic;
      cloned.key = vnode.key;
      cloned.isComment = vnode.isComment;
      cloned.fnContext = vnode.fnContext;
      cloned.fnOptions = vnode.fnOptions;
      cloned.fnScopeId = vnode.fnScopeId;
      cloned.asyncMeta = vnode.asyncMeta;
      cloned.isCloned = true;
      return cloned;
    }
    /*
     * not type checking this file because flow doesn't play well with
     * dynamically accessing methods on Array prototype
     */


    var arrayProto = Array.prototype;
    var arrayMethods = Object.create(arrayProto);
    var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
    /**
     * Intercept mutating methods and emit events
     */

    methodsToPatch.forEach(function (method) {
      // cache original method
      var original = arrayProto[method];
      def(arrayMethods, method, function mutator() {
        var args = [],
            len = arguments.length;

        while (len--) {
          args[len] = arguments[len];
        }

        var result = original.apply(this, args);
        var ob = this.__ob__;
        var inserted;

        switch (method) {
          case 'push':
          case 'unshift':
            inserted = args;
            break;

          case 'splice':
            inserted = args.slice(2);
            break;
        }

        if (inserted) {
          ob.observeArray(inserted);
        } // notify change


        ob.dep.notify();
        return result;
      });
    });
    /*  */

    var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
    /**
     * In some cases we may want to disable observation inside a component's
     * update computation.
     */

    var shouldObserve = true;

    function toggleObserving(value) {
      shouldObserve = value;
    }
    /**
     * Observer class that is attached to each observed
     * object. Once attached, the observer converts the target
     * object's property keys into getter/setters that
     * collect dependencies and dispatch updates.
     */


    var Observer = function Observer(value) {
      this.value = value;
      this.dep = new Dep();
      this.vmCount = 0;
      def(value, '__ob__', this);

      if (Array.isArray(value)) {
        if (hasProto) {
          {
            // fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
            if (value.push !== value.__proto__.push) {
              copyAugment(value, arrayMethods, arrayKeys);
            } else {
              protoAugment(value, arrayMethods);
            }
          }
        } else {
          copyAugment(value, arrayMethods, arrayKeys);
        }

        this.observeArray(value);
      } else {
        this.walk(value);
      }
    };
    /**
     * Walk through all properties and convert them into
     * getter/setters. This method should only be called when
     * value type is Object.
     */


    Observer.prototype.walk = function walk(obj) {
      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        defineReactive$$1(obj, keys[i]);
      }
    };
    /**
     * Observe a list of Array items.
     */


    Observer.prototype.observeArray = function observeArray(items) {
      for (var i = 0, l = items.length; i < l; i++) {
        observe(items[i]);
      }
    }; // helpers

    /**
     * Augment a target Object or Array by intercepting
     * the prototype chain using __proto__
     */


    function protoAugment(target, src) {
      /* eslint-disable no-proto */
      target.__proto__ = src;
      /* eslint-enable no-proto */
    }
    /**
     * Augment a target Object or Array by defining
     * hidden properties.
     */

    /* istanbul ignore next */


    function copyAugment(target, src, keys) {
      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        def(target, key, src[key]);
      }
    }
    /**
     * Attempt to create an observer instance for a value,
     * returns the new observer if successfully observed,
     * or the existing observer if the value already has one.
     */


    function observe(value, asRootData) {
      if (!isObject(value) || value instanceof VNode) {
        return;
      }

      var ob;

      if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__;
      } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
        ob = new Observer(value);
      }

      if (asRootData && ob) {
        ob.vmCount++;
      }

      return ob;
    }
    /**
     * Define a reactive property on an Object.
     */


    function defineReactive$$1(obj, key, val, customSetter, shallow) {
      var dep = new Dep();
      var property = Object.getOwnPropertyDescriptor(obj, key);

      if (property && property.configurable === false) {
        return;
      } // cater for pre-defined getter/setters


      var getter = property && property.get;
      var setter = property && property.set;

      if ((!getter || setter) && arguments.length === 2) {
        val = obj[key];
      }

      var childOb = !shallow && observe(val);
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
          var value = getter ? getter.call(obj) : val;

          if (Dep.SharedObject.target) {
            // fixed by xxxxxx
            dep.depend();

            if (childOb) {
              childOb.dep.depend();

              if (Array.isArray(value)) {
                dependArray(value);
              }
            }
          }

          return value;
        },
        set: function reactiveSetter(newVal) {
          var value = getter ? getter.call(obj) : val;
          /* eslint-disable no-self-compare */

          if (newVal === value || newVal !== newVal && value !== value) {
            return;
          }
          /* eslint-enable no-self-compare */


          if ( true && customSetter) {
            customSetter();
          } // #7981: for accessor properties without setter


          if (getter && !setter) {
            return;
          }

          if (setter) {
            setter.call(obj, newVal);
          } else {
            val = newVal;
          }

          childOb = !shallow && observe(newVal);
          dep.notify();
        }
      });
    }
    /**
     * Set a property on an object. Adds the new property and
     * triggers change notification if the property doesn't
     * already exist.
     */


    function set(target, key, val) {
      if ( true && (isUndef(target) || isPrimitive(target))) {
        warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
      }

      if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        return val;
      }

      if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        return val;
      }

      var ob = target.__ob__;

      if (target._isVue || ob && ob.vmCount) {
         true && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
        return val;
      }

      if (!ob) {
        target[key] = val;
        return val;
      }

      defineReactive$$1(ob.value, key, val);
      ob.dep.notify();
      return val;
    }
    /**
     * Delete a property and trigger change if necessary.
     */


    function del(target, key) {
      if ( true && (isUndef(target) || isPrimitive(target))) {
        warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
      }

      if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return;
      }

      var ob = target.__ob__;

      if (target._isVue || ob && ob.vmCount) {
         true && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
        return;
      }

      if (!hasOwn(target, key)) {
        return;
      }

      delete target[key];

      if (!ob) {
        return;
      }

      ob.dep.notify();
    }
    /**
     * Collect dependencies on array elements when the array is touched, since
     * we cannot intercept array element access like property getters.
     */


    function dependArray(value) {
      for (var e = void 0, i = 0, l = value.length; i < l; i++) {
        e = value[i];
        e && e.__ob__ && e.__ob__.dep.depend();

        if (Array.isArray(e)) {
          dependArray(e);
        }
      }
    }
    /*  */

    /**
     * Option overwriting strategies are functions that handle
     * how to merge a parent option value and a child option
     * value into the final value.
     */


    var strats = config.optionMergeStrategies;
    /**
     * Options with restrictions
     */

    if (true) {
      strats.el = strats.propsData = function (parent, child, vm, key) {
        if (!vm) {
          warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
        }

        return defaultStrat(parent, child);
      };
    }
    /**
     * Helper that recursively merges two data objects together.
     */


    function mergeData(to, from) {
      if (!from) {
        return to;
      }

      var key, toVal, fromVal;
      var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

      for (var i = 0; i < keys.length; i++) {
        key = keys[i]; // in case the object is already observed...

        if (key === '__ob__') {
          continue;
        }

        toVal = to[key];
        fromVal = from[key];

        if (!hasOwn(to, key)) {
          set(to, key, fromVal);
        } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
          mergeData(toVal, fromVal);
        }
      }

      return to;
    }
    /**
     * Data
     */


    function mergeDataOrFn(parentVal, childVal, vm) {
      if (!vm) {
        // in a Vue.extend merge, both should be functions
        if (!childVal) {
          return parentVal;
        }

        if (!parentVal) {
          return childVal;
        } // when parentVal & childVal are both present,
        // we need to return a function that returns the
        // merged result of both functions... no need to
        // check if parentVal is a function here because
        // it has to be a function to pass previous merges.


        return function mergedDataFn() {
          return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
        };
      } else {
        return function mergedInstanceDataFn() {
          // instance merge
          var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
          var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

          if (instanceData) {
            return mergeData(instanceData, defaultData);
          } else {
            return defaultData;
          }
        };
      }
    }

    strats.data = function (parentVal, childVal, vm) {
      if (!vm) {
        if (childVal && typeof childVal !== 'function') {
           true && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
          return parentVal;
        }

        return mergeDataOrFn(parentVal, childVal);
      }

      return mergeDataOrFn(parentVal, childVal, vm);
    };
    /**
     * Hooks and props are merged as arrays.
     */


    function mergeHook(parentVal, childVal) {
      var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
      return res ? dedupeHooks(res) : res;
    }

    function dedupeHooks(hooks) {
      var res = [];

      for (var i = 0; i < hooks.length; i++) {
        if (res.indexOf(hooks[i]) === -1) {
          res.push(hooks[i]);
        }
      }

      return res;
    }

    LIFECYCLE_HOOKS.forEach(function (hook) {
      strats[hook] = mergeHook;
    });
    /**
     * Assets
     *
     * When a vm is present (instance creation), we need to do
     * a three-way merge between constructor options, instance
     * options and parent options.
     */

    function mergeAssets(parentVal, childVal, vm, key) {
      var res = Object.create(parentVal || null);

      if (childVal) {
         true && assertObjectType(key, childVal, vm);
        return extend(res, childVal);
      } else {
        return res;
      }
    }

    ASSET_TYPES.forEach(function (type) {
      strats[type + 's'] = mergeAssets;
    });
    /**
     * Watchers.
     *
     * Watchers hashes should not overwrite one
     * another, so we merge them as arrays.
     */

    strats.watch = function (parentVal, childVal, vm, key) {
      // work around Firefox's Object.prototype.watch...
      if (parentVal === nativeWatch) {
        parentVal = undefined;
      }

      if (childVal === nativeWatch) {
        childVal = undefined;
      }
      /* istanbul ignore if */


      if (!childVal) {
        return Object.create(parentVal || null);
      }

      if (true) {
        assertObjectType(key, childVal, vm);
      }

      if (!parentVal) {
        return childVal;
      }

      var ret = {};
      extend(ret, parentVal);

      for (var key$1 in childVal) {
        var parent = ret[key$1];
        var child = childVal[key$1];

        if (parent && !Array.isArray(parent)) {
          parent = [parent];
        }

        ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
      }

      return ret;
    };
    /**
     * Other object hashes.
     */


    strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
      if (childVal && "development" !== 'production') {
        assertObjectType(key, childVal, vm);
      }

      if (!parentVal) {
        return childVal;
      }

      var ret = Object.create(null);
      extend(ret, parentVal);

      if (childVal) {
        extend(ret, childVal);
      }

      return ret;
    };

    strats.provide = mergeDataOrFn;
    /**
     * Default strategy.
     */

    var defaultStrat = function defaultStrat(parentVal, childVal) {
      return childVal === undefined ? parentVal : childVal;
    };
    /**
     * Validate component names
     */


    function checkComponents(options) {
      for (var key in options.components) {
        validateComponentName(key);
      }
    }

    function validateComponentName(name) {
      if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
      }

      if (isBuiltInTag(name) || config.isReservedTag(name)) {
        warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
      }
    }
    /**
     * Ensure all props option syntax are normalized into the
     * Object-based format.
     */


    function normalizeProps(options, vm) {
      var props = options.props;

      if (!props) {
        return;
      }

      var res = {};
      var i, val, name;

      if (Array.isArray(props)) {
        i = props.length;

        while (i--) {
          val = props[i];

          if (typeof val === 'string') {
            name = camelize(val);
            res[name] = {
              type: null
            };
          } else if (true) {
            warn('props must be strings when using array syntax.');
          }
        }
      } else if (isPlainObject(props)) {
        for (var key in props) {
          val = props[key];
          name = camelize(key);
          res[name] = isPlainObject(val) ? val : {
            type: val
          };
        }
      } else if (true) {
        warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
      }

      options.props = res;
    }
    /**
     * Normalize all injections into Object-based format
     */


    function normalizeInject(options, vm) {
      var inject = options.inject;

      if (!inject) {
        return;
      }

      var normalized = options.inject = {};

      if (Array.isArray(inject)) {
        for (var i = 0; i < inject.length; i++) {
          normalized[inject[i]] = {
            from: inject[i]
          };
        }
      } else if (isPlainObject(inject)) {
        for (var key in inject) {
          var val = inject[key];
          normalized[key] = isPlainObject(val) ? extend({
            from: key
          }, val) : {
            from: val
          };
        }
      } else if (true) {
        warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
      }
    }
    /**
     * Normalize raw function directives into object format.
     */


    function normalizeDirectives(options) {
      var dirs = options.directives;

      if (dirs) {
        for (var key in dirs) {
          var def$$1 = dirs[key];

          if (typeof def$$1 === 'function') {
            dirs[key] = {
              bind: def$$1,
              update: def$$1
            };
          }
        }
      }
    }

    function assertObjectType(name, value, vm) {
      if (!isPlainObject(value)) {
        warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
      }
    }
    /**
     * Merge two option objects into a new one.
     * Core utility used in both instantiation and inheritance.
     */


    function mergeOptions(parent, child, vm) {
      if (true) {
        checkComponents(child);
      }

      if (typeof child === 'function') {
        child = child.options;
      }

      normalizeProps(child, vm);
      normalizeInject(child, vm);
      normalizeDirectives(child); // Apply extends and mixins on the child options,
      // but only if it is a raw options object that isn't
      // the result of another mergeOptions call.
      // Only merged options has the _base property.

      if (!child._base) {
        if (child["extends"]) {
          parent = mergeOptions(parent, child["extends"], vm);
        }

        if (child.mixins) {
          for (var i = 0, l = child.mixins.length; i < l; i++) {
            parent = mergeOptions(parent, child.mixins[i], vm);
          }
        }
      }

      var options = {};
      var key;

      for (key in parent) {
        mergeField(key);
      }

      for (key in child) {
        if (!hasOwn(parent, key)) {
          mergeField(key);
        }
      }

      function mergeField(key) {
        var strat = strats[key] || defaultStrat;
        options[key] = strat(parent[key], child[key], vm, key);
      }

      return options;
    }
    /**
     * Resolve an asset.
     * This function is used because child instances need access
     * to assets defined in its ancestor chain.
     */


    function resolveAsset(options, type, id, warnMissing) {
      /* istanbul ignore if */
      if (typeof id !== 'string') {
        return;
      }

      var assets = options[type]; // check local registration variations first

      if (hasOwn(assets, id)) {
        return assets[id];
      }

      var camelizedId = camelize(id);

      if (hasOwn(assets, camelizedId)) {
        return assets[camelizedId];
      }

      var PascalCaseId = capitalize(camelizedId);

      if (hasOwn(assets, PascalCaseId)) {
        return assets[PascalCaseId];
      } // fallback to prototype chain


      var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

      if ( true && warnMissing && !res) {
        warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
      }

      return res;
    }
    /*  */


    function validateProp(key, propOptions, propsData, vm) {
      var prop = propOptions[key];
      var absent = !hasOwn(propsData, key);
      var value = propsData[key]; // boolean casting

      var booleanIndex = getTypeIndex(Boolean, prop.type);

      if (booleanIndex > -1) {
        if (absent && !hasOwn(prop, 'default')) {
          value = false;
        } else if (value === '' || value === hyphenate(key)) {
          // only cast empty string / same name to boolean if
          // boolean has higher priority
          var stringIndex = getTypeIndex(String, prop.type);

          if (stringIndex < 0 || booleanIndex < stringIndex) {
            value = true;
          }
        }
      } // check default value


      if (value === undefined) {
        value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
        // make sure to observe it.

        var prevShouldObserve = shouldObserve;
        toggleObserving(true);
        observe(value);
        toggleObserving(prevShouldObserve);
      }

      if (true) {
        assertProp(prop, key, value, vm, absent);
      }

      return value;
    }
    /**
     * Get the default value of a prop.
     */


    function getPropDefaultValue(vm, prop, key) {
      // no default, return undefined
      if (!hasOwn(prop, 'default')) {
        return undefined;
      }

      var def = prop["default"]; // warn against non-factory defaults for Object & Array

      if ( true && isObject(def)) {
        warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
      } // the raw prop value was also undefined from previous render,
      // return previous default value to avoid unnecessary watcher trigger


      if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
        return vm._props[key];
      } // call factory function for non-Function types
      // a value is Function if its prototype is function even across different execution context


      return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
    }
    /**
     * Assert whether a prop is valid.
     */


    function assertProp(prop, name, value, vm, absent) {
      if (prop.required && absent) {
        warn('Missing required prop: "' + name + '"', vm);
        return;
      }

      if (value == null && !prop.required) {
        return;
      }

      var type = prop.type;
      var valid = !type || type === true;
      var expectedTypes = [];

      if (type) {
        if (!Array.isArray(type)) {
          type = [type];
        }

        for (var i = 0; i < type.length && !valid; i++) {
          var assertedType = assertType(value, type[i]);
          expectedTypes.push(assertedType.expectedType || '');
          valid = assertedType.valid;
        }
      }

      if (!valid) {
        warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
        return;
      }

      var validator = prop.validator;

      if (validator) {
        if (!validator(value)) {
          warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
        }
      }
    }

    var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

    function assertType(value, type) {
      var valid;
      var expectedType = getType(type);

      if (simpleCheckRE.test(expectedType)) {
        var t = (0, _typeof2["default"])(value);
        valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

        if (!valid && t === 'object') {
          valid = value instanceof type;
        }
      } else if (expectedType === 'Object') {
        valid = isPlainObject(value);
      } else if (expectedType === 'Array') {
        valid = Array.isArray(value);
      } else {
        valid = value instanceof type;
      }

      return {
        valid: valid,
        expectedType: expectedType
      };
    }
    /**
     * Use function string name to check built-in types,
     * because a simple equality check will fail when running
     * across different vms / iframes.
     */


    function getType(fn) {
      var match = fn && fn.toString().match(/^\s*function (\w+)/);
      return match ? match[1] : '';
    }

    function isSameType(a, b) {
      return getType(a) === getType(b);
    }

    function getTypeIndex(type, expectedTypes) {
      if (!Array.isArray(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
      }

      for (var i = 0, len = expectedTypes.length; i < len; i++) {
        if (isSameType(expectedTypes[i], type)) {
          return i;
        }
      }

      return -1;
    }

    function getInvalidTypeMessage(name, value, expectedTypes) {
      var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
      var expectedType = expectedTypes[0];
      var receivedType = toRawType(value);
      var expectedValue = styleValue(value, expectedType);
      var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

      if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
        message += " with value " + expectedValue;
      }

      message += ", got " + receivedType + " "; // check if we need to specify received value

      if (isExplicable(receivedType)) {
        message += "with value " + receivedValue + ".";
      }

      return message;
    }

    function styleValue(value, type) {
      if (type === 'String') {
        return "\"" + value + "\"";
      } else if (type === 'Number') {
        return "" + Number(value);
      } else {
        return "" + value;
      }
    }

    function isExplicable(value) {
      var explicitTypes = ['string', 'number', 'boolean'];
      return explicitTypes.some(function (elem) {
        return value.toLowerCase() === elem;
      });
    }

    function isBoolean() {
      var args = [],
          len = arguments.length;

      while (len--) {
        args[len] = arguments[len];
      }

      return args.some(function (elem) {
        return elem.toLowerCase() === 'boolean';
      });
    }
    /*  */


    function handleError(err, vm, info) {
      // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
      // See: https://github.com/vuejs/vuex/issues/1505
      pushTarget();

      try {
        if (vm) {
          var cur = vm;

          while (cur = cur.$parent) {
            var hooks = cur.$options.errorCaptured;

            if (hooks) {
              for (var i = 0; i < hooks.length; i++) {
                try {
                  var capture = hooks[i].call(cur, err, vm, info) === false;

                  if (capture) {
                    return;
                  }
                } catch (e) {
                  globalHandleError(e, cur, 'errorCaptured hook');
                }
              }
            }
          }
        }

        globalHandleError(err, vm, info);
      } finally {
        popTarget();
      }
    }

    function invokeWithErrorHandling(handler, context, args, vm, info) {
      var res;

      try {
        res = args ? handler.apply(context, args) : handler.call(context);

        if (res && !res._isVue && isPromise(res) && !res._handled) {
          res["catch"](function (e) {
            return handleError(e, vm, info + " (Promise/async)");
          }); // issue #9511
          // avoid catch triggering multiple times when nested calls

          res._handled = true;
        }
      } catch (e) {
        handleError(e, vm, info);
      }

      return res;
    }

    function globalHandleError(err, vm, info) {
      if (config.errorHandler) {
        try {
          return config.errorHandler.call(null, err, vm, info);
        } catch (e) {
          // if the user intentionally throws the original error in the handler,
          // do not log it twice
          if (e !== err) {
            logError(e, null, 'config.errorHandler');
          }
        }
      }

      logError(err, vm, info);
    }

    function logError(err, vm, info) {
      if (true) {
        warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
      }
      /* istanbul ignore else */


      if ((inBrowser || inWeex) && typeof console !== 'undefined') {
        console.error(err);
      } else {
        throw err;
      }
    }
    /*  */


    var callbacks = [];
    var pending = false;

    function flushCallbacks() {
      pending = false;
      var copies = callbacks.slice(0);
      callbacks.length = 0;

      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    } // Here we have async deferring wrappers using microtasks.
    // In 2.5 we used (macro) tasks (in combination with microtasks).
    // However, it has subtle problems when state is changed right before repaint
    // (e.g. #6813, out-in transitions).
    // Also, using (macro) tasks in event handler would cause some weird behaviors
    // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
    // So we now use microtasks everywhere, again.
    // A major drawback of this tradeoff is that there are some scenarios
    // where microtasks have too high a priority and fire in between supposedly
    // sequential events (e.g. #4521, #6690, which have workarounds)
    // or even between bubbling of the same event (#6566).


    var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
    // via either native Promise.then or MutationObserver.
    // MutationObserver has wider support, however it is seriously bugged in
    // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
    // completely stops working after triggering a few times... so, if native
    // Promise is available, we will use it:

    /* istanbul ignore next, $flow-disable-line */

    if (typeof Promise !== 'undefined' && isNative(Promise)) {
      var p = Promise.resolve();

      timerFunc = function timerFunc() {
        p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
        // it can get stuck in a weird state where callbacks are pushed into the
        // microtask queue but the queue isn't being flushed, until the browser
        // needs to do some other work, e.g. handle a timer. Therefore we can
        // "force" the microtask queue to be flushed by adding an empty timer.

        if (isIOS) {
          setTimeout(noop);
        }
      };
    } else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]')) {
      // Use MutationObserver where native Promise is not available,
      // e.g. PhantomJS, iOS7, Android 4.4
      // (#6466 MutationObserver is unreliable in IE11)
      var counter = 1;
      var observer = new MutationObserver(flushCallbacks);
      var textNode = document.createTextNode(String(counter));
      observer.observe(textNode, {
        characterData: true
      });

      timerFunc = function timerFunc() {
        counter = (counter + 1) % 2;
        textNode.data = String(counter);
      };
    } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
      // Fallback to setImmediate.
      // Technically it leverages the (macro) task queue,
      // but it is still a better choice than setTimeout.
      timerFunc = function timerFunc() {
        setImmediate(flushCallbacks);
      };
    } else {
      // Fallback to setTimeout.
      timerFunc = function timerFunc() {
        setTimeout(flushCallbacks, 0);
      };
    }

    function nextTick(cb, ctx) {
      var _resolve;

      callbacks.push(function () {
        if (cb) {
          try {
            cb.call(ctx);
          } catch (e) {
            handleError(e, ctx, 'nextTick');
          }
        } else if (_resolve) {
          _resolve(ctx);
        }
      });

      if (!pending) {
        pending = true;
        timerFunc();
      } // $flow-disable-line


      if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
          _resolve = resolve;
        });
      }
    }
    /*  */

    /* not type checking this file because flow doesn't play well with Proxy */


    var initProxy;

    if (true) {
      var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
      );

      var warnNonPresent = function warnNonPresent(target, key) {
        warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
      };

      var warnReservedPrefix = function warnReservedPrefix(target, key) {
        warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals. ' + 'See: https://vuejs.org/v2/api/#data', target);
      };

      var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

      if (hasProxy) {
        var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
        config.keyCodes = new Proxy(config.keyCodes, {
          set: function set(target, key, value) {
            if (isBuiltInModifier(key)) {
              warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
              return false;
            } else {
              target[key] = value;
              return true;
            }
          }
        });
      }

      var hasHandler = {
        has: function has(target, key) {
          var has = (key in target);
          var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

          if (!has && !isAllowed) {
            if (key in target.$data) {
              warnReservedPrefix(target, key);
            } else {
              warnNonPresent(target, key);
            }
          }

          return has || !isAllowed;
        }
      };
      var getHandler = {
        get: function get(target, key) {
          if (typeof key === 'string' && !(key in target)) {
            if (key in target.$data) {
              warnReservedPrefix(target, key);
            } else {
              warnNonPresent(target, key);
            }
          }

          return target[key];
        }
      };

      initProxy = function initProxy(vm) {
        if (hasProxy) {
          // determine which proxy handler to use
          var options = vm.$options;
          var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
          vm._renderProxy = new Proxy(vm, handlers);
        } else {
          vm._renderProxy = vm;
        }
      };
    }
    /*  */


    var seenObjects = new _Set();
    /**
     * Recursively traverse an object to evoke all converted
     * getters, so that every nested property inside the object
     * is collected as a "deep" dependency.
     */

    function traverse(val) {
      _traverse(val, seenObjects);

      seenObjects.clear();
    }

    function _traverse(val, seen) {
      var i, keys;
      var isA = Array.isArray(val);

      if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
        return;
      }

      if (val.__ob__) {
        var depId = val.__ob__.dep.id;

        if (seen.has(depId)) {
          return;
        }

        seen.add(depId);
      }

      if (isA) {
        i = val.length;

        while (i--) {
          _traverse(val[i], seen);
        }
      } else {
        keys = Object.keys(val);
        i = keys.length;

        while (i--) {
          _traverse(val[keys[i]], seen);
        }
      }
    }

    var mark;
    var measure;

    if (true) {
      var perf = inBrowser && window.performance;
      /* istanbul ignore if */

      if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
        mark = function mark(tag) {
          return perf.mark(tag);
        };

        measure = function measure(name, startTag, endTag) {
          perf.measure(name, startTag, endTag);
          perf.clearMarks(startTag);
          perf.clearMarks(endTag); // perf.clearMeasures(name)
        };
      }
    }
    /*  */


    var normalizeEvent = cached(function (name) {
      var passive = name.charAt(0) === '&';
      name = passive ? name.slice(1) : name;
      var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

      name = once$$1 ? name.slice(1) : name;
      var capture = name.charAt(0) === '!';
      name = capture ? name.slice(1) : name;
      return {
        name: name,
        once: once$$1,
        capture: capture,
        passive: passive
      };
    });

    function createFnInvoker(fns, vm) {
      function invoker() {
        var arguments$1 = arguments;
        var fns = invoker.fns;

        if (Array.isArray(fns)) {
          var cloned = fns.slice();

          for (var i = 0; i < cloned.length; i++) {
            invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
          }
        } else {
          // return handler return value for single handlers
          return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
        }
      }

      invoker.fns = fns;
      return invoker;
    }

    function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
      var name, def$$1, cur, old, event;

      for (name in on) {
        def$$1 = cur = on[name];
        old = oldOn[name];
        event = normalizeEvent(name);

        if (isUndef(cur)) {
           true && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
        } else if (isUndef(old)) {
          if (isUndef(cur.fns)) {
            cur = on[name] = createFnInvoker(cur, vm);
          }

          if (isTrue(event.once)) {
            cur = on[name] = createOnceHandler(event.name, cur, event.capture);
          }

          add(event.name, cur, event.capture, event.passive, event.params);
        } else if (cur !== old) {
          old.fns = cur;
          on[name] = old;
        }
      }

      for (name in oldOn) {
        if (isUndef(on[name])) {
          event = normalizeEvent(name);
          remove$$1(event.name, oldOn[name], event.capture);
        }
      }
    }
    /*  */

    /*  */
    // fixed by xxxxxx (mp properties)


    function extractPropertiesFromVNodeData(data, Ctor, res, context) {
      var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;

      if (isUndef(propOptions)) {
        return res;
      }

      var externalClasses = Ctor.options.mpOptions.externalClasses || [];
      var attrs = data.attrs;
      var props = data.props;

      if (isDef(attrs) || isDef(props)) {
        for (var key in propOptions) {
          var altKey = hyphenate(key);
          var result = checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false); // externalClass

          if (result && res[key] && externalClasses.indexOf(altKey) !== -1 && context[camelize(res[key])]) {
            // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
            res[key] = context[camelize(res[key])];
          }
        }
      }

      return res;
    }

    function extractPropsFromVNodeData(data, Ctor, tag, context // fixed by xxxxxx
    ) {
      // we are only extracting raw values here.
      // validation and default values are handled in the child
      // component itself.
      var propOptions = Ctor.options.props;

      if (isUndef(propOptions)) {
        // fixed by xxxxxx
        return extractPropertiesFromVNodeData(data, Ctor, {}, context);
      }

      var res = {};
      var attrs = data.attrs;
      var props = data.props;

      if (isDef(attrs) || isDef(props)) {
        for (var key in propOptions) {
          var altKey = hyphenate(key);

          if (true) {
            var keyInLowerCase = key.toLowerCase();

            if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
              tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
            }
          }

          checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
        }
      } // fixed by xxxxxx


      return extractPropertiesFromVNodeData(data, Ctor, res, context);
    }

    function checkProp(res, hash, key, altKey, preserve) {
      if (isDef(hash)) {
        if (hasOwn(hash, key)) {
          res[key] = hash[key];

          if (!preserve) {
            delete hash[key];
          }

          return true;
        } else if (hasOwn(hash, altKey)) {
          res[key] = hash[altKey];

          if (!preserve) {
            delete hash[altKey];
          }

          return true;
        }
      }

      return false;
    }
    /*  */
    // The template compiler attempts to minimize the need for normalization by
    // statically analyzing the template at compile time.
    //
    // For plain HTML markup, normalization can be completely skipped because the
    // generated render function is guaranteed to return Array<VNode>. There are
    // two cases where extra normalization is needed:
    // 1. When the children contains components - because a functional component
    // may return an Array instead of a single root. In this case, just a simple
    // normalization is needed - if any child is an Array, we flatten the whole
    // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
    // because functional components already normalize their own children.


    function simpleNormalizeChildren(children) {
      for (var i = 0; i < children.length; i++) {
        if (Array.isArray(children[i])) {
          return Array.prototype.concat.apply([], children);
        }
      }

      return children;
    } // 2. When the children contains constructs that always generated nested Arrays,
    // e.g. <template>, <slot>, v-for, or when the children is provided by user
    // with hand-written render functions / JSX. In such cases a full normalization
    // is needed to cater to all possible types of children values.


    function normalizeChildren(children) {
      return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
    }

    function isTextNode(node) {
      return isDef(node) && isDef(node.text) && isFalse(node.isComment);
    }

    function normalizeArrayChildren(children, nestedIndex) {
      var res = [];
      var i, c, lastIndex, last;

      for (i = 0; i < children.length; i++) {
        c = children[i];

        if (isUndef(c) || typeof c === 'boolean') {
          continue;
        }

        lastIndex = res.length - 1;
        last = res[lastIndex]; //  nested

        if (Array.isArray(c)) {
          if (c.length > 0) {
            c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

            if (isTextNode(c[0]) && isTextNode(last)) {
              res[lastIndex] = createTextVNode(last.text + c[0].text);
              c.shift();
            }

            res.push.apply(res, c);
          }
        } else if (isPrimitive(c)) {
          if (isTextNode(last)) {
            // merge adjacent text nodes
            // this is necessary for SSR hydration because text nodes are
            // essentially merged when rendered to HTML strings
            res[lastIndex] = createTextVNode(last.text + c);
          } else if (c !== '') {
            // convert primitive to vnode
            res.push(createTextVNode(c));
          }
        } else {
          if (isTextNode(c) && isTextNode(last)) {
            // merge adjacent text nodes
            res[lastIndex] = createTextVNode(last.text + c.text);
          } else {
            // default key for nested array children (likely generated by v-for)
            if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
              c.key = "__vlist" + nestedIndex + "_" + i + "__";
            }

            res.push(c);
          }
        }
      }

      return res;
    }
    /*  */


    function initProvide(vm) {
      var provide = vm.$options.provide;

      if (provide) {
        vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
      }
    }

    function initInjections(vm) {
      var result = resolveInject(vm.$options.inject, vm);

      if (result) {
        toggleObserving(false);
        Object.keys(result).forEach(function (key) {
          /* istanbul ignore else */
          if (true) {
            defineReactive$$1(vm, key, result[key], function () {
              warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
            });
          } else {}
        });
        toggleObserving(true);
      }
    }

    function resolveInject(inject, vm) {
      if (inject) {
        // inject is :any because flow is not smart enough to figure out cached
        var result = Object.create(null);
        var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i]; // #6574 in case the inject object is observed...

          if (key === '__ob__') {
            continue;
          }

          var provideKey = inject[key].from;
          var source = vm;

          while (source) {
            if (source._provided && hasOwn(source._provided, provideKey)) {
              result[key] = source._provided[provideKey];
              break;
            }

            source = source.$parent;
          }

          if (!source) {
            if ('default' in inject[key]) {
              var provideDefault = inject[key]["default"];
              result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
            } else if (true) {
              warn("Injection \"" + key + "\" not found", vm);
            }
          }
        }

        return result;
      }
    }
    /*  */

    /**
     * Runtime helper for resolving raw children VNodes into a slot object.
     */


    function resolveSlots(children, context) {
      if (!children || !children.length) {
        return {};
      }

      var slots = {};

      for (var i = 0, l = children.length; i < l; i++) {
        var child = children[i];
        var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

        if (data && data.attrs && data.attrs.slot) {
          delete data.attrs.slot;
        } // named slots should only be respected if the vnode was rendered in the
        // same context.


        if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
          var name = data.slot;
          var slot = slots[name] || (slots[name] = []);

          if (child.tag === 'template') {
            slot.push.apply(slot, child.children || []);
          } else {
            slot.push(child);
          }
        } else {
          // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
          if (child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page') {
            (slots['page'] || (slots['page'] = [])).push(child);
          } else {
            (slots["default"] || (slots["default"] = [])).push(child);
          }
        }
      } // ignore slots that contains only whitespace


      for (var name$1 in slots) {
        if (slots[name$1].every(isWhitespace)) {
          delete slots[name$1];
        }
      }

      return slots;
    }

    function isWhitespace(node) {
      return node.isComment && !node.asyncFactory || node.text === ' ';
    }
    /*  */


    function normalizeScopedSlots(slots, normalSlots, prevSlots) {
      var res;
      var hasNormalSlots = Object.keys(normalSlots).length > 0;
      var isStable = slots ? !!slots.$stable : !hasNormalSlots;
      var key = slots && slots.$key;

      if (!slots) {
        res = {};
      } else if (slots._normalized) {
        // fast path 1: child component re-render only, parent did not change
        return slots._normalized;
      } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
        // fast path 2: stable scoped slots w/ no normal slots to proxy,
        // only need to normalize once
        return prevSlots;
      } else {
        res = {};

        for (var key$1 in slots) {
          if (slots[key$1] && key$1[0] !== '$') {
            res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
          }
        }
      } // expose normal slots on scopedSlots


      for (var key$2 in normalSlots) {
        if (!(key$2 in res)) {
          res[key$2] = proxyNormalSlot(normalSlots, key$2);
        }
      } // avoriaz seems to mock a non-extensible $scopedSlots object
      // and when that is passed down this would cause an error


      if (slots && Object.isExtensible(slots)) {
        slots._normalized = res;
      }

      def(res, '$stable', isStable);
      def(res, '$key', key);
      def(res, '$hasNormal', hasNormalSlots);
      return res;
    }

    function normalizeScopedSlot(normalSlots, key, fn) {
      var normalized = function normalized() {
        var res = arguments.length ? fn.apply(null, arguments) : fn({});
        res = res && (0, _typeof2["default"])(res) === 'object' && !Array.isArray(res) ? [res] // single vnode
        : normalizeChildren(res);
        return res && (res.length === 0 || res.length === 1 && res[0].isComment // #9658
        ) ? undefined : res;
      }; // this is a slot using the new v-slot syntax without scope. although it is
      // compiled as a scoped slot, render fn users would expect it to be present
      // on this.$slots because the usage is semantically a normal slot.


      if (fn.proxy) {
        Object.defineProperty(normalSlots, key, {
          get: normalized,
          enumerable: true,
          configurable: true
        });
      }

      return normalized;
    }

    function proxyNormalSlot(slots, key) {
      return function () {
        return slots[key];
      };
    }
    /*  */

    /**
     * Runtime helper for rendering v-for lists.
     */


    function renderList(val, render) {
      var ret, i, l, keys, key;

      if (Array.isArray(val) || typeof val === 'string') {
        ret = new Array(val.length);

        for (i = 0, l = val.length; i < l; i++) {
          ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
        }
      } else if (typeof val === 'number') {
        ret = new Array(val);

        for (i = 0; i < val; i++) {
          ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
        }
      } else if (isObject(val)) {
        if (hasSymbol && val[Symbol.iterator]) {
          ret = [];
          var iterator = val[Symbol.iterator]();
          var result = iterator.next();

          while (!result.done) {
            ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx

            result = iterator.next();
          }
        } else {
          keys = Object.keys(val);
          ret = new Array(keys.length);

          for (i = 0, l = keys.length; i < l; i++) {
            key = keys[i];
            ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
          }
        }
      }

      if (!isDef(ret)) {
        ret = [];
      }

      ret._isVList = true;
      return ret;
    }
    /*  */

    /**
     * Runtime helper for rendering <slot>
     */


    function renderSlot(name, fallback, props, bindObject) {
      var scopedSlotFn = this.$scopedSlots[name];
      var nodes;

      if (scopedSlotFn) {
        // scoped slot
        props = props || {};

        if (bindObject) {
          if ( true && !isObject(bindObject)) {
            warn('slot v-bind without argument expects an Object', this);
          }

          props = extend(extend({}, bindObject), props);
        } // fixed by xxxxxx app-plus scopedSlot


        nodes = scopedSlotFn(props, this, props._i) || fallback;
      } else {
        nodes = this.$slots[name] || fallback;
      }

      var target = props && props.slot;

      if (target) {
        return this.$createElement('template', {
          slot: target
        }, nodes);
      } else {
        return nodes;
      }
    }
    /*  */

    /**
     * Runtime helper for resolving filters
     */


    function resolveFilter(id) {
      return resolveAsset(this.$options, 'filters', id, true) || identity;
    }
    /*  */


    function isKeyNotMatch(expect, actual) {
      if (Array.isArray(expect)) {
        return expect.indexOf(actual) === -1;
      } else {
        return expect !== actual;
      }
    }
    /**
     * Runtime helper for checking keyCodes from config.
     * exposed as Vue.prototype._k
     * passing in eventKeyName as last argument separately for backwards compat
     */


    function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
      var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

      if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
        return isKeyNotMatch(builtInKeyName, eventKeyName);
      } else if (mappedKeyCode) {
        return isKeyNotMatch(mappedKeyCode, eventKeyCode);
      } else if (eventKeyName) {
        return hyphenate(eventKeyName) !== key;
      }
    }
    /*  */

    /**
     * Runtime helper for merging v-bind="object" into a VNode's data.
     */


    function bindObjectProps(data, tag, value, asProp, isSync) {
      if (value) {
        if (!isObject(value)) {
           true && warn('v-bind without argument expects an Object or Array value', this);
        } else {
          if (Array.isArray(value)) {
            value = toObject(value);
          }

          var hash;

          var loop = function loop(key) {
            if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
              hash = data;
            } else {
              var type = data.attrs && data.attrs.type;
              hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
            }

            var camelizedKey = camelize(key);
            var hyphenatedKey = hyphenate(key);

            if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
              hash[key] = value[key];

              if (isSync) {
                var on = data.on || (data.on = {});

                on["update:" + key] = function ($event) {
                  value[key] = $event;
                };
              }
            }
          };

          for (var key in value) {
            loop(key);
          }
        }
      }

      return data;
    }
    /*  */

    /**
     * Runtime helper for rendering static trees.
     */


    function renderStatic(index, isInFor) {
      var cached = this._staticTrees || (this._staticTrees = []);
      var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
      // we can reuse the same tree.

      if (tree && !isInFor) {
        return tree;
      } // otherwise, render a fresh tree.


      tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
      );
      markStatic(tree, "__static__" + index, false);
      return tree;
    }
    /**
     * Runtime helper for v-once.
     * Effectively it means marking the node as static with a unique key.
     */


    function markOnce(tree, index, key) {
      markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
      return tree;
    }

    function markStatic(tree, key, isOnce) {
      if (Array.isArray(tree)) {
        for (var i = 0; i < tree.length; i++) {
          if (tree[i] && typeof tree[i] !== 'string') {
            markStaticNode(tree[i], key + "_" + i, isOnce);
          }
        }
      } else {
        markStaticNode(tree, key, isOnce);
      }
    }

    function markStaticNode(node, key, isOnce) {
      node.isStatic = true;
      node.key = key;
      node.isOnce = isOnce;
    }
    /*  */


    function bindObjectListeners(data, value) {
      if (value) {
        if (!isPlainObject(value)) {
           true && warn('v-on without argument expects an Object value', this);
        } else {
          var on = data.on = data.on ? extend({}, data.on) : {};

          for (var key in value) {
            var existing = on[key];
            var ours = value[key];
            on[key] = existing ? [].concat(existing, ours) : ours;
          }
        }
      }

      return data;
    }
    /*  */


    function resolveScopedSlots(fns, // see flow/vnode
    res, // the following are added in 2.6
    hasDynamicKeys, contentHashKey) {
      res = res || {
        $stable: !hasDynamicKeys
      };

      for (var i = 0; i < fns.length; i++) {
        var slot = fns[i];

        if (Array.isArray(slot)) {
          resolveScopedSlots(slot, res, hasDynamicKeys);
        } else if (slot) {
          // marker for reverse proxying v-slot without scope on this.$slots
          if (slot.proxy) {
            slot.fn.proxy = true;
          }

          res[slot.key] = slot.fn;
        }
      }

      if (contentHashKey) {
        res.$key = contentHashKey;
      }

      return res;
    }
    /*  */


    function bindDynamicKeys(baseObj, values) {
      for (var i = 0; i < values.length; i += 2) {
        var key = values[i];

        if (typeof key === 'string' && key) {
          baseObj[values[i]] = values[i + 1];
        } else if ( true && key !== '' && key !== null) {
          // null is a special value for explicitly removing a binding
          warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
        }
      }

      return baseObj;
    } // helper to dynamically append modifier runtime markers to event names.
    // ensure only append when value is already string, otherwise it will be cast
    // to string and cause the type check to miss.


    function prependModifier(value, symbol) {
      return typeof value === 'string' ? symbol + value : value;
    }
    /*  */


    function installRenderHelpers(target) {
      target._o = markOnce;
      target._n = toNumber;
      target._s = toString;
      target._l = renderList;
      target._t = renderSlot;
      target._q = looseEqual;
      target._i = looseIndexOf;
      target._m = renderStatic;
      target._f = resolveFilter;
      target._k = checkKeyCodes;
      target._b = bindObjectProps;
      target._v = createTextVNode;
      target._e = createEmptyVNode;
      target._u = resolveScopedSlots;
      target._g = bindObjectListeners;
      target._d = bindDynamicKeys;
      target._p = prependModifier;
    }
    /*  */


    function FunctionalRenderContext(data, props, children, parent, Ctor) {
      var this$1 = this;
      var options = Ctor.options; // ensure the createElement function in functional components
      // gets a unique context - this is necessary for correct named slot check

      var contextVm;

      if (hasOwn(parent, '_uid')) {
        contextVm = Object.create(parent); // $flow-disable-line

        contextVm._original = parent;
      } else {
        // the context vm passed in is a functional context as well.
        // in this case we want to make sure we are able to get a hold to the
        // real context instance.
        contextVm = parent; // $flow-disable-line

        parent = parent._original;
      }

      var isCompiled = isTrue(options._compiled);
      var needNormalization = !isCompiled;
      this.data = data;
      this.props = props;
      this.children = children;
      this.parent = parent;
      this.listeners = data.on || emptyObject;
      this.injections = resolveInject(options.inject, parent);

      this.slots = function () {
        if (!this$1.$slots) {
          normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
        }

        return this$1.$slots;
      };

      Object.defineProperty(this, 'scopedSlots', {
        enumerable: true,
        get: function get() {
          return normalizeScopedSlots(data.scopedSlots, this.slots());
        }
      }); // support for compiled functional template

      if (isCompiled) {
        // exposing $options for renderStatic()
        this.$options = options; // pre-resolve slots for renderSlot()

        this.$slots = this.slots();
        this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
      }

      if (options._scopeId) {
        this._c = function (a, b, c, d) {
          var vnode = createElement(contextVm, a, b, c, d, needNormalization);

          if (vnode && !Array.isArray(vnode)) {
            vnode.fnScopeId = options._scopeId;
            vnode.fnContext = parent;
          }

          return vnode;
        };
      } else {
        this._c = function (a, b, c, d) {
          return createElement(contextVm, a, b, c, d, needNormalization);
        };
      }
    }

    installRenderHelpers(FunctionalRenderContext.prototype);

    function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
      var options = Ctor.options;
      var props = {};
      var propOptions = options.props;

      if (isDef(propOptions)) {
        for (var key in propOptions) {
          props[key] = validateProp(key, propOptions, propsData || emptyObject);
        }
      } else {
        if (isDef(data.attrs)) {
          mergeProps(props, data.attrs);
        }

        if (isDef(data.props)) {
          mergeProps(props, data.props);
        }
      }

      var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
      var vnode = options.render.call(null, renderContext._c, renderContext);

      if (vnode instanceof VNode) {
        return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
      } else if (Array.isArray(vnode)) {
        var vnodes = normalizeChildren(vnode) || [];
        var res = new Array(vnodes.length);

        for (var i = 0; i < vnodes.length; i++) {
          res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
        }

        return res;
      }
    }

    function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
      // #7817 clone node before setting fnContext, otherwise if the node is reused
      // (e.g. it was from a cached normal slot) the fnContext causes named slots
      // that should not be matched to match.
      var clone = cloneVNode(vnode);
      clone.fnContext = contextVm;
      clone.fnOptions = options;

      if (true) {
        (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
      }

      if (data.slot) {
        (clone.data || (clone.data = {})).slot = data.slot;
      }

      return clone;
    }

    function mergeProps(to, from) {
      for (var key in from) {
        to[camelize(key)] = from[key];
      }
    }
    /*  */

    /*  */

    /*  */

    /*  */
    // inline hooks to be invoked on component VNodes during patch


    var componentVNodeHooks = {
      init: function init(vnode, hydrating) {
        if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
          // kept-alive components, treat as a patch
          var mountedNode = vnode; // work around flow

          componentVNodeHooks.prepatch(mountedNode, mountedNode);
        } else {
          var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
          child.$mount(hydrating ? vnode.elm : undefined, hydrating);
        }
      },
      prepatch: function prepatch(oldVnode, vnode) {
        var options = vnode.componentOptions;
        var child = vnode.componentInstance = oldVnode.componentInstance;
        updateChildComponent(child, options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
        );
      },
      insert: function insert(vnode) {
        var context = vnode.context;
        var componentInstance = vnode.componentInstance;

        if (!componentInstance._isMounted) {
          callHook(componentInstance, 'onServiceCreated');
          callHook(componentInstance, 'onServiceAttached');
          componentInstance._isMounted = true;
          callHook(componentInstance, 'mounted');
        }

        if (vnode.data.keepAlive) {
          if (context._isMounted) {
            // vue-router#1212
            // During updates, a kept-alive component's child components may
            // change, so directly walking the tree here may call activated hooks
            // on incorrect children. Instead we push them into a queue which will
            // be processed after the whole patch process ended.
            queueActivatedComponent(componentInstance);
          } else {
            activateChildComponent(componentInstance, true
            /* direct */
            );
          }
        }
      },
      destroy: function destroy(vnode) {
        var componentInstance = vnode.componentInstance;

        if (!componentInstance._isDestroyed) {
          if (!vnode.data.keepAlive) {
            componentInstance.$destroy();
          } else {
            deactivateChildComponent(componentInstance, true
            /* direct */
            );
          }
        }
      }
    };
    var hooksToMerge = Object.keys(componentVNodeHooks);

    function createComponent(Ctor, data, context, children, tag) {
      if (isUndef(Ctor)) {
        return;
      }

      var baseCtor = context.$options._base; // plain options object: turn it into a constructor

      if (isObject(Ctor)) {
        Ctor = baseCtor.extend(Ctor);
      } // if at this stage it's not a constructor or an async component factory,
      // reject.


      if (typeof Ctor !== 'function') {
        if (true) {
          warn("Invalid Component definition: " + String(Ctor), context);
        }

        return;
      } // async component


      var asyncFactory;

      if (isUndef(Ctor.cid)) {
        asyncFactory = Ctor;
        Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

        if (Ctor === undefined) {
          // return a placeholder node for async component, which is rendered
          // as a comment node but preserves all the raw information for the node.
          // the information will be used for async server-rendering and hydration.
          return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
        }
      }

      data = data || {}; // resolve constructor options in case global mixins are applied after
      // component constructor creation

      resolveConstructorOptions(Ctor); // transform component v-model data into props & events

      if (isDef(data.model)) {
        transformModel(Ctor.options, data);
      } // extract props


      var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx
      // functional component

      if (isTrue(Ctor.options.functional)) {
        return createFunctionalComponent(Ctor, propsData, data, context, children);
      } // extract listeners, since these needs to be treated as
      // child component listeners instead of DOM listeners


      var listeners = data.on; // replace with listeners with .native modifier
      // so it gets processed during parent component patch.

      data.on = data.nativeOn;

      if (isTrue(Ctor.options["abstract"])) {
        // abstract components do not keep anything
        // other than props & listeners & slot
        // work around flow
        var slot = data.slot;
        data = {};

        if (slot) {
          data.slot = slot;
        }
      } // install component management hooks onto the placeholder node


      installComponentHooks(data); // return a placeholder vnode

      var name = Ctor.options.name || tag;
      var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
        Ctor: Ctor,
        propsData: propsData,
        listeners: listeners,
        tag: tag,
        children: children
      }, asyncFactory);
      return vnode;
    }

    function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
    parent // activeInstance in lifecycle state
    ) {
      var options = {
        _isComponent: true,
        _parentVnode: vnode,
        parent: parent
      }; // check inline-template render functions

      var inlineTemplate = vnode.data.inlineTemplate;

      if (isDef(inlineTemplate)) {
        options.render = inlineTemplate.render;
        options.staticRenderFns = inlineTemplate.staticRenderFns;
      }

      return new vnode.componentOptions.Ctor(options);
    }

    function installComponentHooks(data) {
      var hooks = data.hook || (data.hook = {});

      for (var i = 0; i < hooksToMerge.length; i++) {
        var key = hooksToMerge[i];
        var existing = hooks[key];
        var toMerge = componentVNodeHooks[key];

        if (existing !== toMerge && !(existing && existing._merged)) {
          hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
        }
      }
    }

    function mergeHook$1(f1, f2) {
      var merged = function merged(a, b) {
        // flow complains about extra args which is why we use any
        f1(a, b);
        f2(a, b);
      };

      merged._merged = true;
      return merged;
    } // transform component v-model info (value and callback) into
    // prop and event handler respectively.


    function transformModel(options, data) {
      var prop = options.model && options.model.prop || 'value';
      var event = options.model && options.model.event || 'input';
      (data.attrs || (data.attrs = {}))[prop] = data.model.value;
      var on = data.on || (data.on = {});
      var existing = on[event];
      var callback = data.model.callback;

      if (isDef(existing)) {
        if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
          on[event] = [callback].concat(existing);
        }
      } else {
        on[event] = callback;
      }
    }
    /*  */


    var SIMPLE_NORMALIZE = 1;
    var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
    // without getting yelled at by flow

    function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
      if (Array.isArray(data) || isPrimitive(data)) {
        normalizationType = children;
        children = data;
        data = undefined;
      }

      if (isTrue(alwaysNormalize)) {
        normalizationType = ALWAYS_NORMALIZE;
      }

      return _createElement(context, tag, data, children, normalizationType);
    }

    function _createElement(context, tag, data, children, normalizationType) {
      if (isDef(data) && isDef(data.__ob__)) {
         true && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
        return createEmptyVNode();
      } // object syntax in v-bind


      if (isDef(data) && isDef(data.is)) {
        tag = data.is;
      }

      if (!tag) {
        // in case of component :is set to falsy value
        return createEmptyVNode();
      } // warn against non-primitive key


      if ( true && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
        {
          warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
        }
      } // support single function children as default scoped slot


      if (Array.isArray(children) && typeof children[0] === 'function') {
        data = data || {};
        data.scopedSlots = {
          "default": children[0]
        };
        children.length = 0;
      }

      if (normalizationType === ALWAYS_NORMALIZE) {
        children = normalizeChildren(children);
      } else if (normalizationType === SIMPLE_NORMALIZE) {
        children = simpleNormalizeChildren(children);
      }

      var vnode, ns;

      if (typeof tag === 'string') {
        var Ctor;
        ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

        if (config.isReservedTag(tag)) {
          // platform built-in elements
          if ( true && isDef(data) && isDef(data.nativeOn)) {
            warn("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">.", context);
          }

          vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
        } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
          // component
          vnode = createComponent(Ctor, data, context, children, tag);
        } else {
          // unknown or unlisted namespaced elements
          // check at runtime because it may get assigned a namespace when its
          // parent normalizes children
          vnode = new VNode(tag, data, children, undefined, undefined, context);
        }
      } else {
        // direct component options / constructor
        vnode = createComponent(tag, data, context, children);
      }

      if (Array.isArray(vnode)) {
        return vnode;
      } else if (isDef(vnode)) {
        if (isDef(ns)) {
          applyNS(vnode, ns);
        }

        if (isDef(data)) {
          registerDeepBindings(data);
        }

        return vnode;
      } else {
        return createEmptyVNode();
      }
    }

    function applyNS(vnode, ns, force) {
      vnode.ns = ns;

      if (vnode.tag === 'foreignObject') {
        // use default namespace inside foreignObject
        ns = undefined;
        force = true;
      }

      if (isDef(vnode.children)) {
        for (var i = 0, l = vnode.children.length; i < l; i++) {
          var child = vnode.children[i];

          if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
            applyNS(child, ns, force);
          }
        }
      }
    } // ref #5318
    // necessary to ensure parent re-render when deep bindings like :style and
    // :class are used on slot nodes


    function registerDeepBindings(data) {
      if (isObject(data.style)) {
        traverse(data.style);
      }

      if (isObject(data["class"])) {
        traverse(data["class"]);
      }
    }
    /*  */


    function initRender(vm) {
      vm._vnode = null; // the root of the child tree

      vm._staticTrees = null; // v-once cached trees

      var options = vm.$options;
      var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

      var renderContext = parentVnode && parentVnode.context;
      vm.$slots = resolveSlots(options._renderChildren, renderContext);
      vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
      // so that we get proper render context inside it.
      // args order: tag, data, children, normalizationType, alwaysNormalize
      // internal version is used by render functions compiled from templates

      vm._c = function (a, b, c, d) {
        return createElement(vm, a, b, c, d, false);
      }; // normalization is always applied for the public version, used in
      // user-written render functions.


      vm.$createElement = function (a, b, c, d) {
        return createElement(vm, a, b, c, d, true);
      }; // $attrs & $listeners are exposed for easier HOC creation.
      // they need to be reactive so that HOCs using them are always updated


      var parentData = parentVnode && parentVnode.data;
      /* istanbul ignore else */

      if (true) {
        defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
          !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
        }, true);
        defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
          !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
        }, true);
      } else {}
    }

    var currentRenderingInstance = null;

    function renderMixin(Vue) {
      // install runtime convenience helpers
      installRenderHelpers(Vue.prototype);

      Vue.prototype.$nextTick = function (fn) {
        return nextTick(fn, this);
      };

      Vue.prototype._render = function () {
        var vm = this;
        var ref = vm.$options;
        var render = ref.render;
        var _parentVnode = ref._parentVnode;

        if (_parentVnode) {
          vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
        } // set parent vnode. this allows render functions to have access
        // to the data on the placeholder node.


        vm.$vnode = _parentVnode; // render self

        var vnode;

        try {
          // There's no need to maintain a stack because all render fns are called
          // separately from one another. Nested component's render fns are called
          // when parent component is patched.
          currentRenderingInstance = vm;
          vnode = render.call(vm._renderProxy, vm.$createElement);
        } catch (e) {
          handleError(e, vm, "render"); // return error render result,
          // or previous vnode to prevent render error causing blank component

          /* istanbul ignore else */

          if ( true && vm.$options.renderError) {
            try {
              vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
            } catch (e) {
              handleError(e, vm, "renderError");
              vnode = vm._vnode;
            }
          } else {
            vnode = vm._vnode;
          }
        } finally {
          currentRenderingInstance = null;
        } // if the returned array contains only a single node, allow it


        if (Array.isArray(vnode) && vnode.length === 1) {
          vnode = vnode[0];
        } // return empty vnode in case the render function errored out


        if (!(vnode instanceof VNode)) {
          if ( true && Array.isArray(vnode)) {
            warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
          }

          vnode = createEmptyVNode();
        } // set parent


        vnode.parent = _parentVnode;
        return vnode;
      };
    }
    /*  */


    function ensureCtor(comp, base) {
      if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
        comp = comp["default"];
      }

      return isObject(comp) ? base.extend(comp) : comp;
    }

    function createAsyncPlaceholder(factory, data, context, children, tag) {
      var node = createEmptyVNode();
      node.asyncFactory = factory;
      node.asyncMeta = {
        data: data,
        context: context,
        children: children,
        tag: tag
      };
      return node;
    }

    function resolveAsyncComponent(factory, baseCtor) {
      if (isTrue(factory.error) && isDef(factory.errorComp)) {
        return factory.errorComp;
      }

      if (isDef(factory.resolved)) {
        return factory.resolved;
      }

      var owner = currentRenderingInstance;

      if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
        // already pending
        factory.owners.push(owner);
      }

      if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
        return factory.loadingComp;
      }

      if (owner && !isDef(factory.owners)) {
        var owners = factory.owners = [owner];
        var sync = true;
        var timerLoading = null;
        var timerTimeout = null;
        owner.$on('hook:destroyed', function () {
          return remove(owners, owner);
        });

        var forceRender = function forceRender(renderCompleted) {
          for (var i = 0, l = owners.length; i < l; i++) {
            owners[i].$forceUpdate();
          }

          if (renderCompleted) {
            owners.length = 0;

            if (timerLoading !== null) {
              clearTimeout(timerLoading);
              timerLoading = null;
            }

            if (timerTimeout !== null) {
              clearTimeout(timerTimeout);
              timerTimeout = null;
            }
          }
        };

        var resolve = once(function (res) {
          // cache resolved
          factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
          // (async resolves are shimmed as synchronous during SSR)

          if (!sync) {
            forceRender(true);
          } else {
            owners.length = 0;
          }
        });
        var reject = once(function (reason) {
           true && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

          if (isDef(factory.errorComp)) {
            factory.error = true;
            forceRender(true);
          }
        });
        var res = factory(resolve, reject);

        if (isObject(res)) {
          if (isPromise(res)) {
            // () => Promise
            if (isUndef(factory.resolved)) {
              res.then(resolve, reject);
            }
          } else if (isPromise(res.component)) {
            res.component.then(resolve, reject);

            if (isDef(res.error)) {
              factory.errorComp = ensureCtor(res.error, baseCtor);
            }

            if (isDef(res.loading)) {
              factory.loadingComp = ensureCtor(res.loading, baseCtor);

              if (res.delay === 0) {
                factory.loading = true;
              } else {
                timerLoading = setTimeout(function () {
                  timerLoading = null;

                  if (isUndef(factory.resolved) && isUndef(factory.error)) {
                    factory.loading = true;
                    forceRender(false);
                  }
                }, res.delay || 200);
              }
            }

            if (isDef(res.timeout)) {
              timerTimeout = setTimeout(function () {
                timerTimeout = null;

                if (isUndef(factory.resolved)) {
                  reject(true ? "timeout (" + res.timeout + "ms)" : undefined);
                }
              }, res.timeout);
            }
          }
        }

        sync = false; // return in case resolved synchronously

        return factory.loading ? factory.loadingComp : factory.resolved;
      }
    }
    /*  */


    function isAsyncPlaceholder(node) {
      return node.isComment && node.asyncFactory;
    }
    /*  */


    function getFirstComponentChild(children) {
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          var c = children[i];

          if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
            return c;
          }
        }
      }
    }
    /*  */

    /*  */


    function initEvents(vm) {
      vm._events = Object.create(null);
      vm._hasHookEvent = false; // init parent attached events

      var listeners = vm.$options._parentListeners;

      if (listeners) {
        updateComponentListeners(vm, listeners);
      }
    }

    var target;

    function add(event, fn) {
      target.$on(event, fn);
    }

    function remove$1(event, fn) {
      target.$off(event, fn);
    }

    function createOnceHandler(event, fn) {
      var _target = target;
      return function onceHandler() {
        var res = fn.apply(null, arguments);

        if (res !== null) {
          _target.$off(event, onceHandler);
        }
      };
    }

    function updateComponentListeners(vm, listeners, oldListeners) {
      target = vm;
      updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
      target = undefined;
    }

    function eventsMixin(Vue) {
      var hookRE = /^hook:/;

      Vue.prototype.$on = function (event, fn) {
        var vm = this;

        if (Array.isArray(event)) {
          for (var i = 0, l = event.length; i < l; i++) {
            vm.$on(event[i], fn);
          }
        } else {
          (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
          // instead of a hash lookup

          if (hookRE.test(event)) {
            vm._hasHookEvent = true;
          }
        }

        return vm;
      };

      Vue.prototype.$once = function (event, fn) {
        var vm = this;

        function on() {
          vm.$off(event, on);
          fn.apply(vm, arguments);
        }

        on.fn = fn;
        vm.$on(event, on);
        return vm;
      };

      Vue.prototype.$off = function (event, fn) {
        var vm = this; // all

        if (!arguments.length) {
          vm._events = Object.create(null);
          return vm;
        } // array of events


        if (Array.isArray(event)) {
          for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
            vm.$off(event[i$1], fn);
          }

          return vm;
        } // specific event


        var cbs = vm._events[event];

        if (!cbs) {
          return vm;
        }

        if (!fn) {
          vm._events[event] = null;
          return vm;
        } // specific handler


        var cb;
        var i = cbs.length;

        while (i--) {
          cb = cbs[i];

          if (cb === fn || cb.fn === fn) {
            cbs.splice(i, 1);
            break;
          }
        }

        return vm;
      };

      Vue.prototype.$emit = function (event) {
        var vm = this;

        if (true) {
          var lowerCaseEvent = event.toLowerCase();

          if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
            tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
          }
        }

        var cbs = vm._events[event];

        if (cbs) {
          cbs = cbs.length > 1 ? toArray(cbs) : cbs;
          var args = toArray(arguments, 1);
          var info = "event handler for \"" + event + "\"";

          for (var i = 0, l = cbs.length; i < l; i++) {
            invokeWithErrorHandling(cbs[i], vm, args, vm, info);
          }
        }

        return vm;
      };
    }
    /*  */


    var activeInstance = null;
    var isUpdatingChildComponent = false;

    function setActiveInstance(vm) {
      var prevActiveInstance = activeInstance;
      activeInstance = vm;
      return function () {
        activeInstance = prevActiveInstance;
      };
    }

    function initLifecycle(vm) {
      var options = vm.$options; // locate first non-abstract parent

      var parent = options.parent;

      if (parent && !options["abstract"]) {
        while (parent.$options["abstract"] && parent.$parent) {
          parent = parent.$parent;
        }

        parent.$children.push(vm);
      }

      vm.$parent = parent;
      vm.$root = parent ? parent.$root : vm;
      vm.$children = [];
      vm.$refs = {};
      vm._watcher = null;
      vm._inactive = null;
      vm._directInactive = false;
      vm._isMounted = false;
      vm._isDestroyed = false;
      vm._isBeingDestroyed = false;
    }

    function lifecycleMixin(Vue) {
      Vue.prototype._update = function (vnode, hydrating) {
        var vm = this;
        var prevEl = vm.$el;
        var prevVnode = vm._vnode;
        var restoreActiveInstance = setActiveInstance(vm);
        vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
        // based on the rendering backend used.

        if (!prevVnode) {
          // initial render
          vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
          /* removeOnly */
          );
        } else {
          // updates
          vm.$el = vm.__patch__(prevVnode, vnode);
        }

        restoreActiveInstance(); // update __vue__ reference

        if (prevEl) {
          prevEl.__vue__ = null;
        }

        if (vm.$el) {
          vm.$el.__vue__ = vm;
        } // if parent is an HOC, update its $el as well


        if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
          vm.$parent.$el = vm.$el;
        } // updated hook is called by the scheduler to ensure that children are
        // updated in a parent's updated hook.

      };

      Vue.prototype.$forceUpdate = function () {
        var vm = this;

        if (vm._watcher) {
          vm._watcher.update();
        }
      };

      Vue.prototype.$destroy = function () {
        var vm = this;

        if (vm._isBeingDestroyed) {
          return;
        }

        callHook(vm, 'beforeDestroy');
        vm._isBeingDestroyed = true; // remove self from parent

        var parent = vm.$parent;

        if (parent && !parent._isBeingDestroyed && !vm.$options["abstract"]) {
          remove(parent.$children, vm);
        } // teardown watchers


        if (vm._watcher) {
          vm._watcher.teardown();
        }

        var i = vm._watchers.length;

        while (i--) {
          vm._watchers[i].teardown();
        } // remove reference from data ob
        // frozen object may not have observer.


        if (vm._data.__ob__) {
          vm._data.__ob__.vmCount--;
        } // call the last hook...


        vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

        vm.__patch__(vm._vnode, null); // fire destroyed hook


        callHook(vm, 'destroyed'); // turn off all instance listeners.

        vm.$off(); // remove __vue__ reference

        if (vm.$el) {
          vm.$el.__vue__ = null;
        } // release circular reference (#6759)


        if (vm.$vnode) {
          vm.$vnode.parent = null;
        }
      };
    }

    function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
      if (true) {
        isUpdatingChildComponent = true;
      } // determine whether component has slot children
      // we need to do this before overwriting $options._renderChildren.
      // check if there are dynamic scopedSlots (hand-written or compiled but with
      // dynamic slot names). Static scoped slots compiled from template has the
      // "$stable" marker.


      var newScopedSlots = parentVnode.data.scopedSlots;
      var oldScopedSlots = vm.$scopedSlots;
      var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key); // Any static slot children from the parent may have changed during parent's
      // update. Dynamic scoped slots may also have changed. In such cases, a forced
      // update is necessary to ensure correctness.

      var needsForceUpdate = !!(renderChildren || // has new static slots
      vm.$options._renderChildren || // has old static slots
      hasDynamicScopedSlot);
      vm.$options._parentVnode = parentVnode;
      vm.$vnode = parentVnode; // update vm's placeholder node without re-render

      if (vm._vnode) {
        // update child tree's parent
        vm._vnode.parent = parentVnode;
      }

      vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
      // these are also reactive so they may trigger child update if the child
      // used them during render

      vm.$attrs = parentVnode.data.attrs || emptyObject;
      vm.$listeners = listeners || emptyObject; // update props

      if (propsData && vm.$options.props) {
        toggleObserving(false);
        var props = vm._props;
        var propKeys = vm.$options._propKeys || [];

        for (var i = 0; i < propKeys.length; i++) {
          var key = propKeys[i];
          var propOptions = vm.$options.props; // wtf flow?

          props[key] = validateProp(key, propOptions, propsData, vm);
        }

        toggleObserving(true); // keep a copy of raw propsData

        vm.$options.propsData = propsData;
      } // fixed by xxxxxx update properties(mp runtime)


      vm._$updateProperties && vm._$updateProperties(vm); // update listeners

      listeners = listeners || emptyObject;
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

      if (needsForceUpdate) {
        vm.$slots = resolveSlots(renderChildren, parentVnode.context);
        vm.$forceUpdate();
      }

      if (true) {
        isUpdatingChildComponent = false;
      }
    }

    function isInInactiveTree(vm) {
      while (vm && (vm = vm.$parent)) {
        if (vm._inactive) {
          return true;
        }
      }

      return false;
    }

    function activateChildComponent(vm, direct) {
      if (direct) {
        vm._directInactive = false;

        if (isInInactiveTree(vm)) {
          return;
        }
      } else if (vm._directInactive) {
        return;
      }

      if (vm._inactive || vm._inactive === null) {
        vm._inactive = false;

        for (var i = 0; i < vm.$children.length; i++) {
          activateChildComponent(vm.$children[i]);
        }

        callHook(vm, 'activated');
      }
    }

    function deactivateChildComponent(vm, direct) {
      if (direct) {
        vm._directInactive = true;

        if (isInInactiveTree(vm)) {
          return;
        }
      }

      if (!vm._inactive) {
        vm._inactive = true;

        for (var i = 0; i < vm.$children.length; i++) {
          deactivateChildComponent(vm.$children[i]);
        }

        callHook(vm, 'deactivated');
      }
    }

    function callHook(vm, hook) {
      // #7573 disable dep collection when invoking lifecycle hooks
      pushTarget();
      var handlers = vm.$options[hook];
      var info = hook + " hook";

      if (handlers) {
        for (var i = 0, j = handlers.length; i < j; i++) {
          invokeWithErrorHandling(handlers[i], vm, null, vm, info);
        }
      }

      if (vm._hasHookEvent) {
        vm.$emit('hook:' + hook);
      }

      popTarget();
    }
    /*  */


    var MAX_UPDATE_COUNT = 100;
    var queue = [];
    var activatedChildren = [];
    var has = {};
    var circular = {};
    var waiting = false;
    var flushing = false;
    var index = 0;
    /**
     * Reset the scheduler's state.
     */

    function resetSchedulerState() {
      index = queue.length = activatedChildren.length = 0;
      has = {};

      if (true) {
        circular = {};
      }

      waiting = flushing = false;
    } // Async edge case #6566 requires saving the timestamp when event listeners are
    // attached. However, calling performance.now() has a perf overhead especially
    // if the page has thousands of event listeners. Instead, we take a timestamp
    // every time the scheduler flushes and use that for all event listeners
    // attached during that flush.


    var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

    var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
    // timestamp can either be hi-res (relative to page load) or low-res
    // (relative to UNIX epoch), so in order to compare time we have to use the
    // same timestamp type when saving the flush timestamp.
    // All IE versions use low-res event timestamps, and have problematic clock
    // implementations (#9632)

    if (inBrowser && !isIE) {
      var performance = window.performance;

      if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
        // if the event timestamp, although evaluated AFTER the Date.now(), is
        // smaller than it, it means the event is using a hi-res timestamp,
        // and we need to use the hi-res version for event listener timestamps as
        // well.
        getNow = function getNow() {
          return performance.now();
        };
      }
    }
    /**
     * Flush both queues and run the watchers.
     */


    function flushSchedulerQueue() {
      currentFlushTimestamp = getNow();
      flushing = true;
      var watcher, id; // Sort queue before flush.
      // This ensures that:
      // 1. Components are updated from parent to child. (because parent is always
      //    created before the child)
      // 2. A component's user watchers are run before its render watcher (because
      //    user watchers are created before the render watcher)
      // 3. If a component is destroyed during a parent component's watcher run,
      //    its watchers can be skipped.

      queue.sort(function (a, b) {
        return a.id - b.id;
      }); // do not cache length because more watchers might be pushed
      // as we run existing watchers

      for (index = 0; index < queue.length; index++) {
        watcher = queue[index];

        if (watcher.before) {
          watcher.before();
        }

        id = watcher.id;
        has[id] = null;
        watcher.run(); // in dev build, check and stop circular updates.

        if ( true && has[id] != null) {
          circular[id] = (circular[id] || 0) + 1;

          if (circular[id] > MAX_UPDATE_COUNT) {
            warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
            break;
          }
        }
      } // keep copies of post queues before resetting state


      var activatedQueue = activatedChildren.slice();
      var updatedQueue = queue.slice();
      resetSchedulerState(); // call component updated and activated hooks

      callActivatedHooks(activatedQueue);
      callUpdatedHooks(updatedQueue); // devtool hook

      /* istanbul ignore if */

      if (devtools && config.devtools) {
        devtools.emit('flush');
      }
    }

    function callUpdatedHooks(queue) {
      var i = queue.length;

      while (i--) {
        var watcher = queue[i];
        var vm = watcher.vm;

        if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'updated');
        }
      }
    }
    /**
     * Queue a kept-alive component that was activated during patch.
     * The queue will be processed after the entire tree has been patched.
     */


    function queueActivatedComponent(vm) {
      // setting _inactive to false here so that a render function can
      // rely on checking whether it's in an inactive tree (e.g. router-view)
      vm._inactive = false;
      activatedChildren.push(vm);
    }

    function callActivatedHooks(queue) {
      for (var i = 0; i < queue.length; i++) {
        queue[i]._inactive = true;
        activateChildComponent(queue[i], true
        /* true */
        );
      }
    }
    /**
     * Push a watcher into the watcher queue.
     * Jobs with duplicate IDs will be skipped unless it's
     * pushed when the queue is being flushed.
     */


    function queueWatcher(watcher) {
      var id = watcher.id;

      if (has[id] == null) {
        has[id] = true;

        if (!flushing) {
          queue.push(watcher);
        } else {
          // if already flushing, splice the watcher based on its id
          // if already past its id, it will be run next immediately.
          var i = queue.length - 1;

          while (i > index && queue[i].id > watcher.id) {
            i--;
          }

          queue.splice(i + 1, 0, watcher);
        } // queue the flush


        if (!waiting) {
          waiting = true;

          if ( true && !config.async) {
            flushSchedulerQueue();
            return;
          }

          nextTick(flushSchedulerQueue);
        }
      }
    }
    /*  */


    var uid$2 = 0;
    /**
     * A watcher parses an expression, collects dependencies,
     * and fires callback when the expression value changes.
     * This is used for both the $watch() api and directives.
     */

    var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
      this.vm = vm;

      if (isRenderWatcher) {
        vm._watcher = this;
      }

      vm._watchers.push(this); // options


      if (options) {
        this.deep = !!options.deep;
        this.user = !!options.user;
        this.lazy = !!options.lazy;
        this.sync = !!options.sync;
        this.before = options.before;
      } else {
        this.deep = this.user = this.lazy = this.sync = false;
      }

      this.cb = cb;
      this.id = ++uid$2; // uid for batching

      this.active = true;
      this.dirty = this.lazy; // for lazy watchers

      this.deps = [];
      this.newDeps = [];
      this.depIds = new _Set();
      this.newDepIds = new _Set();
      this.expression = true ? expOrFn.toString() : undefined; // parse expression for getter

      if (typeof expOrFn === 'function') {
        this.getter = expOrFn;
      } else {
        this.getter = parsePath(expOrFn);

        if (!this.getter) {
          this.getter = noop;
           true && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
        }
      }

      this.value = this.lazy ? undefined : this.get();
    };
    /**
     * Evaluate the getter, and re-collect dependencies.
     */


    Watcher.prototype.get = function get() {
      pushTarget(this);
      var value;
      var vm = this.vm;

      try {
        value = this.getter.call(vm, vm);
      } catch (e) {
        if (this.user) {
          handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
        } else {
          throw e;
        }
      } finally {
        // "touch" every property so they are all tracked as
        // dependencies for deep watching
        if (this.deep) {
          traverse(value);
        }

        popTarget();
        this.cleanupDeps();
      }

      return value;
    };
    /**
     * Add a dependency to this directive.
     */


    Watcher.prototype.addDep = function addDep(dep) {
      var id = dep.id;

      if (!this.newDepIds.has(id)) {
        this.newDepIds.add(id);
        this.newDeps.push(dep);

        if (!this.depIds.has(id)) {
          dep.addSub(this);
        }
      }
    };
    /**
     * Clean up for dependency collection.
     */


    Watcher.prototype.cleanupDeps = function cleanupDeps() {
      var i = this.deps.length;

      while (i--) {
        var dep = this.deps[i];

        if (!this.newDepIds.has(dep.id)) {
          dep.removeSub(this);
        }
      }

      var tmp = this.depIds;
      this.depIds = this.newDepIds;
      this.newDepIds = tmp;
      this.newDepIds.clear();
      tmp = this.deps;
      this.deps = this.newDeps;
      this.newDeps = tmp;
      this.newDeps.length = 0;
    };
    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */


    Watcher.prototype.update = function update() {
      /* istanbul ignore else */
      if (this.lazy) {
        this.dirty = true;
      } else if (this.sync) {
        this.run();
      } else {
        queueWatcher(this);
      }
    };
    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */


    Watcher.prototype.run = function run() {
      if (this.active) {
        var value = this.get();

        if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) || this.deep) {
          // set new value
          var oldValue = this.value;
          this.value = value;

          if (this.user) {
            try {
              this.cb.call(this.vm, value, oldValue);
            } catch (e) {
              handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
            }
          } else {
            this.cb.call(this.vm, value, oldValue);
          }
        }
      }
    };
    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */


    Watcher.prototype.evaluate = function evaluate() {
      this.value = this.get();
      this.dirty = false;
    };
    /**
     * Depend on all deps collected by this watcher.
     */


    Watcher.prototype.depend = function depend() {
      var i = this.deps.length;

      while (i--) {
        this.deps[i].depend();
      }
    };
    /**
     * Remove self from all dependencies' subscriber list.
     */


    Watcher.prototype.teardown = function teardown() {
      if (this.active) {
        // remove self from vm's watcher list
        // this is a somewhat expensive operation so we skip it
        // if the vm is being destroyed.
        if (!this.vm._isBeingDestroyed) {
          remove(this.vm._watchers, this);
        }

        var i = this.deps.length;

        while (i--) {
          this.deps[i].removeSub(this);
        }

        this.active = false;
      }
    };
    /*  */


    var sharedPropertyDefinition = {
      enumerable: true,
      configurable: true,
      get: noop,
      set: noop
    };

    function proxy(target, sourceKey, key) {
      sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key];
      };

      sharedPropertyDefinition.set = function proxySetter(val) {
        this[sourceKey][key] = val;
      };

      Object.defineProperty(target, key, sharedPropertyDefinition);
    }

    function initState(vm) {
      vm._watchers = [];
      var opts = vm.$options;

      if (opts.props) {
        initProps(vm, opts.props);
      }

      if (opts.methods) {
        initMethods(vm, opts.methods);
      }

      if (opts.data) {
        initData(vm);
      } else {
        observe(vm._data = {}, true
        /* asRootData */
        );
      }

      if (opts.computed) {
        initComputed(vm, opts.computed);
      }

      if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch);
      }
    }

    function initProps(vm, propsOptions) {
      var propsData = vm.$options.propsData || {};
      var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
      // instead of dynamic object key enumeration.

      var keys = vm.$options._propKeys = [];
      var isRoot = !vm.$parent; // root instance props should be converted

      if (!isRoot) {
        toggleObserving(false);
      }

      var loop = function loop(key) {
        keys.push(key);
        var value = validateProp(key, propsOptions, propsData, vm);
        /* istanbul ignore else */

        if (true) {
          var hyphenatedKey = hyphenate(key);

          if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
            warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
          }

          defineReactive$$1(props, key, value, function () {
            if (!isRoot && !isUpdatingChildComponent) {
              {
                if (vm.mpHost === 'mp-baidu') {
                  //百度 observer 在 setData callback 之后触发，直接忽略该 warn
                  return;
                } //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警


                if (key === 'value' && Array.isArray(vm.$options.behaviors) && vm.$options.behaviors.indexOf('uni://form-field') !== -1) {
                  return;
                }

                if (vm._getFormData) {
                  return;
                }

                var $parent = vm.$parent;

                while ($parent) {
                  if ($parent.__next_tick_pending) {
                    return;
                  }

                  $parent = $parent.$parent;
                }
              }
              warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
            }
          });
        } else {} // static props are already proxied on the component's prototype
        // during Vue.extend(). We only need to proxy props defined at
        // instantiation here.


        if (!(key in vm)) {
          proxy(vm, "_props", key);
        }
      };

      for (var key in propsOptions) {
        loop(key);
      }

      toggleObserving(true);
    }

    function initData(vm) {
      var data = vm.$options.data;
      data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

      if (!isPlainObject(data)) {
        data = {};
         true && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
      } // proxy data on instance


      var keys = Object.keys(data);
      var props = vm.$options.props;
      var methods = vm.$options.methods;
      var i = keys.length;

      while (i--) {
        var key = keys[i];

        if (true) {
          if (methods && hasOwn(methods, key)) {
            warn("Method \"" + key + "\" has already been defined as a data property.", vm);
          }
        }

        if (props && hasOwn(props, key)) {
           true && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
        } else if (!isReserved(key)) {
          proxy(vm, "_data", key);
        }
      } // observe data


      observe(data, true
      /* asRootData */
      );
    }

    function getData(data, vm) {
      // #7573 disable dep collection when invoking data getters
      pushTarget();

      try {
        return data.call(vm, vm);
      } catch (e) {
        handleError(e, vm, "data()");
        return {};
      } finally {
        popTarget();
      }
    }

    var computedWatcherOptions = {
      lazy: true
    };

    function initComputed(vm, computed) {
      // $flow-disable-line
      var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

      var isSSR = isServerRendering();

      for (var key in computed) {
        var userDef = computed[key];
        var getter = typeof userDef === 'function' ? userDef : userDef.get;

        if ( true && getter == null) {
          warn("Getter is missing for computed property \"" + key + "\".", vm);
        }

        if (!isSSR) {
          // create internal watcher for the computed property.
          watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
        } // component-defined computed properties are already defined on the
        // component prototype. We only need to define computed properties defined
        // at instantiation here.


        if (!(key in vm)) {
          defineComputed(vm, key, userDef);
        } else if (true) {
          if (key in vm.$data) {
            warn("The computed property \"" + key + "\" is already defined in data.", vm);
          } else if (vm.$options.props && key in vm.$options.props) {
            warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
          }
        }
      }
    }

    function defineComputed(target, key, userDef) {
      var shouldCache = !isServerRendering();

      if (typeof userDef === 'function') {
        sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
        sharedPropertyDefinition.set = noop;
      } else {
        sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
        sharedPropertyDefinition.set = userDef.set || noop;
      }

      if ( true && sharedPropertyDefinition.set === noop) {
        sharedPropertyDefinition.set = function () {
          warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
        };
      }

      Object.defineProperty(target, key, sharedPropertyDefinition);
    }

    function createComputedGetter(key) {
      return function computedGetter() {
        var watcher = this._computedWatchers && this._computedWatchers[key];

        if (watcher) {
          if (watcher.dirty) {
            watcher.evaluate();
          }

          if (Dep.SharedObject.target) {
            // fixed by xxxxxx
            watcher.depend();
          }

          return watcher.value;
        }
      };
    }

    function createGetterInvoker(fn) {
      return function computedGetter() {
        return fn.call(this, this);
      };
    }

    function initMethods(vm, methods) {
      var props = vm.$options.props;

      for (var key in methods) {
        if (true) {
          if (typeof methods[key] !== 'function') {
            warn("Method \"" + key + "\" has type \"" + (0, _typeof2["default"])(methods[key]) + "\" in the component definition. " + "Did you reference the function correctly?", vm);
          }

          if (props && hasOwn(props, key)) {
            warn("Method \"" + key + "\" has already been defined as a prop.", vm);
          }

          if (key in vm && isReserved(key)) {
            warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
          }
        }

        vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
      }
    }

    function initWatch(vm, watch) {
      for (var key in watch) {
        var handler = watch[key];

        if (Array.isArray(handler)) {
          for (var i = 0; i < handler.length; i++) {
            createWatcher(vm, key, handler[i]);
          }
        } else {
          createWatcher(vm, key, handler);
        }
      }
    }

    function createWatcher(vm, expOrFn, handler, options) {
      if (isPlainObject(handler)) {
        options = handler;
        handler = handler.handler;
      }

      if (typeof handler === 'string') {
        handler = vm[handler];
      }

      return vm.$watch(expOrFn, handler, options);
    }

    function stateMixin(Vue) {
      // flow somehow has problems with directly declared definition object
      // when using Object.defineProperty, so we have to procedurally build up
      // the object here.
      var dataDef = {};

      dataDef.get = function () {
        return this._data;
      };

      var propsDef = {};

      propsDef.get = function () {
        return this._props;
      };

      if (true) {
        dataDef.set = function () {
          warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
        };

        propsDef.set = function () {
          warn("$props is readonly.", this);
        };
      }

      Object.defineProperty(Vue.prototype, '$data', dataDef);
      Object.defineProperty(Vue.prototype, '$props', propsDef);
      Vue.prototype.$set = set;
      Vue.prototype.$delete = del;

      Vue.prototype.$watch = function (expOrFn, cb, options) {
        var vm = this;

        if (isPlainObject(cb)) {
          return createWatcher(vm, expOrFn, cb, options);
        }

        options = options || {};
        options.user = true;
        var watcher = new Watcher(vm, expOrFn, cb, options);

        if (options.immediate) {
          try {
            cb.call(vm, watcher.value);
          } catch (error) {
            handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
          }
        }

        return function unwatchFn() {
          watcher.teardown();
        };
      };
    }
    /*  */


    var uid$3 = 0;

    function initMixin(Vue) {
      Vue.prototype._init = function (options) {
        var vm = this; // a uid

        vm._uid = uid$3++;
        var startTag, endTag;
        /* istanbul ignore if */

        if ( true && config.performance && mark) {
          startTag = "vue-perf-start:" + vm._uid;
          endTag = "vue-perf-end:" + vm._uid;
          mark(startTag);
        } // a flag to avoid this being observed


        vm._isVue = true; // merge options

        if (options && options._isComponent) {
          // optimize internal component instantiation
          // since dynamic options merging is pretty slow, and none of the
          // internal component options needs special treatment.
          initInternalComponent(vm, options);
        } else {
          vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
        }
        /* istanbul ignore else */


        if (true) {
          initProxy(vm);
        } else {} // expose real self


        vm._self = vm;
        initLifecycle(vm);
        initEvents(vm);
        initRender(vm);
        callHook(vm, 'beforeCreate');
        !vm._$fallback && initInjections(vm); // resolve injections before data/props  

        initState(vm);
        !vm._$fallback && initProvide(vm); // resolve provide after data/props

        !vm._$fallback && callHook(vm, 'created');
        /* istanbul ignore if */

        if ( true && config.performance && mark) {
          vm._name = formatComponentName(vm, false);
          mark(endTag);
          measure("vue " + vm._name + " init", startTag, endTag);
        }

        if (vm.$options.el) {
          vm.$mount(vm.$options.el);
        }
      };
    }

    function initInternalComponent(vm, options) {
      var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

      var parentVnode = options._parentVnode;
      opts.parent = options.parent;
      opts._parentVnode = parentVnode;
      var vnodeComponentOptions = parentVnode.componentOptions;
      opts.propsData = vnodeComponentOptions.propsData;
      opts._parentListeners = vnodeComponentOptions.listeners;
      opts._renderChildren = vnodeComponentOptions.children;
      opts._componentTag = vnodeComponentOptions.tag;

      if (options.render) {
        opts.render = options.render;
        opts.staticRenderFns = options.staticRenderFns;
      }
    }

    function resolveConstructorOptions(Ctor) {
      var options = Ctor.options;

      if (Ctor["super"]) {
        var superOptions = resolveConstructorOptions(Ctor["super"]);
        var cachedSuperOptions = Ctor.superOptions;

        if (superOptions !== cachedSuperOptions) {
          // super option changed,
          // need to resolve new options.
          Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

          var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

          if (modifiedOptions) {
            extend(Ctor.extendOptions, modifiedOptions);
          }

          options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

          if (options.name) {
            options.components[options.name] = Ctor;
          }
        }
      }

      return options;
    }

    function resolveModifiedOptions(Ctor) {
      var modified;
      var latest = Ctor.options;
      var sealed = Ctor.sealedOptions;

      for (var key in latest) {
        if (latest[key] !== sealed[key]) {
          if (!modified) {
            modified = {};
          }

          modified[key] = latest[key];
        }
      }

      return modified;
    }

    function Vue(options) {
      if ( true && !(this instanceof Vue)) {
        warn('Vue is a constructor and should be called with the `new` keyword');
      }

      this._init(options);
    }

    initMixin(Vue);
    stateMixin(Vue);
    eventsMixin(Vue);
    lifecycleMixin(Vue);
    renderMixin(Vue);
    /*  */

    function initUse(Vue) {
      Vue.use = function (plugin) {
        var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

        if (installedPlugins.indexOf(plugin) > -1) {
          return this;
        } // additional parameters


        var args = toArray(arguments, 1);
        args.unshift(this);

        if (typeof plugin.install === 'function') {
          plugin.install.apply(plugin, args);
        } else if (typeof plugin === 'function') {
          plugin.apply(null, args);
        }

        installedPlugins.push(plugin);
        return this;
      };
    }
    /*  */


    function initMixin$1(Vue) {
      Vue.mixin = function (mixin) {
        this.options = mergeOptions(this.options, mixin);
        return this;
      };
    }
    /*  */


    function initExtend(Vue) {
      /**
       * Each instance constructor, including Vue, has a unique
       * cid. This enables us to create wrapped "child
       * constructors" for prototypal inheritance and cache them.
       */
      Vue.cid = 0;
      var cid = 1;
      /**
       * Class inheritance
       */

      Vue.extend = function (extendOptions) {
        extendOptions = extendOptions || {};
        var Super = this;
        var SuperId = Super.cid;
        var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

        if (cachedCtors[SuperId]) {
          return cachedCtors[SuperId];
        }

        var name = extendOptions.name || Super.options.name;

        if ( true && name) {
          validateComponentName(name);
        }

        var Sub = function VueComponent(options) {
          this._init(options);
        };

        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.cid = cid++;
        Sub.options = mergeOptions(Super.options, extendOptions);
        Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
        // the Vue instances at extension time, on the extended prototype. This
        // avoids Object.defineProperty calls for each instance created.

        if (Sub.options.props) {
          initProps$1(Sub);
        }

        if (Sub.options.computed) {
          initComputed$1(Sub);
        } // allow further extension/mixin/plugin usage


        Sub.extend = Super.extend;
        Sub.mixin = Super.mixin;
        Sub.use = Super.use; // create asset registers, so extended classes
        // can have their private assets too.

        ASSET_TYPES.forEach(function (type) {
          Sub[type] = Super[type];
        }); // enable recursive self-lookup

        if (name) {
          Sub.options.components[name] = Sub;
        } // keep a reference to the super options at extension time.
        // later at instantiation we can check if Super's options have
        // been updated.


        Sub.superOptions = Super.options;
        Sub.extendOptions = extendOptions;
        Sub.sealedOptions = extend({}, Sub.options); // cache constructor

        cachedCtors[SuperId] = Sub;
        return Sub;
      };
    }

    function initProps$1(Comp) {
      var props = Comp.options.props;

      for (var key in props) {
        proxy(Comp.prototype, "_props", key);
      }
    }

    function initComputed$1(Comp) {
      var computed = Comp.options.computed;

      for (var key in computed) {
        defineComputed(Comp.prototype, key, computed[key]);
      }
    }
    /*  */


    function initAssetRegisters(Vue) {
      /**
       * Create asset registration methods.
       */
      ASSET_TYPES.forEach(function (type) {
        Vue[type] = function (id, definition) {
          if (!definition) {
            return this.options[type + 's'][id];
          } else {
            /* istanbul ignore if */
            if ( true && type === 'component') {
              validateComponentName(id);
            }

            if (type === 'component' && isPlainObject(definition)) {
              definition.name = definition.name || id;
              definition = this.options._base.extend(definition);
            }

            if (type === 'directive' && typeof definition === 'function') {
              definition = {
                bind: definition,
                update: definition
              };
            }

            this.options[type + 's'][id] = definition;
            return definition;
          }
        };
      });
    }
    /*  */


    function getComponentName(opts) {
      return opts && (opts.Ctor.options.name || opts.tag);
    }

    function matches(pattern, name) {
      if (Array.isArray(pattern)) {
        return pattern.indexOf(name) > -1;
      } else if (typeof pattern === 'string') {
        return pattern.split(',').indexOf(name) > -1;
      } else if (isRegExp(pattern)) {
        return pattern.test(name);
      }
      /* istanbul ignore next */


      return false;
    }

    function pruneCache(keepAliveInstance, filter) {
      var cache = keepAliveInstance.cache;
      var keys = keepAliveInstance.keys;
      var _vnode = keepAliveInstance._vnode;

      for (var key in cache) {
        var cachedNode = cache[key];

        if (cachedNode) {
          var name = getComponentName(cachedNode.componentOptions);

          if (name && !filter(name)) {
            pruneCacheEntry(cache, key, keys, _vnode);
          }
        }
      }
    }

    function pruneCacheEntry(cache, key, keys, current) {
      var cached$$1 = cache[key];

      if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
        cached$$1.componentInstance.$destroy();
      }

      cache[key] = null;
      remove(keys, key);
    }

    var patternTypes = [String, RegExp, Array];
    var KeepAlive = {
      name: 'keep-alive',
      "abstract": true,
      props: {
        include: patternTypes,
        exclude: patternTypes,
        max: [String, Number]
      },
      created: function created() {
        this.cache = Object.create(null);
        this.keys = [];
      },
      destroyed: function destroyed() {
        for (var key in this.cache) {
          pruneCacheEntry(this.cache, key, this.keys);
        }
      },
      mounted: function mounted() {
        var this$1 = this;
        this.$watch('include', function (val) {
          pruneCache(this$1, function (name) {
            return matches(val, name);
          });
        });
        this.$watch('exclude', function (val) {
          pruneCache(this$1, function (name) {
            return !matches(val, name);
          });
        });
      },
      render: function render() {
        var slot = this.$slots["default"];
        var vnode = getFirstComponentChild(slot);
        var componentOptions = vnode && vnode.componentOptions;

        if (componentOptions) {
          // check pattern
          var name = getComponentName(componentOptions);
          var ref = this;
          var include = ref.include;
          var exclude = ref.exclude;

          if ( // not included
          include && (!name || !matches(include, name)) || // excluded
          exclude && name && matches(exclude, name)) {
            return vnode;
          }

          var ref$1 = this;
          var cache = ref$1.cache;
          var keys = ref$1.keys;
          var key = vnode.key == null // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

          if (cache[key]) {
            vnode.componentInstance = cache[key].componentInstance; // make current key freshest

            remove(keys, key);
            keys.push(key);
          } else {
            cache[key] = vnode;
            keys.push(key); // prune oldest entry

            if (this.max && keys.length > parseInt(this.max)) {
              pruneCacheEntry(cache, keys[0], keys, this._vnode);
            }
          }

          vnode.data.keepAlive = true;
        }

        return vnode || slot && slot[0];
      }
    };
    var builtInComponents = {
      KeepAlive: KeepAlive
    };
    /*  */

    function initGlobalAPI(Vue) {
      // config
      var configDef = {};

      configDef.get = function () {
        return config;
      };

      if (true) {
        configDef.set = function () {
          warn('Do not replace the Vue.config object, set individual fields instead.');
        };
      }

      Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
      // NOTE: these are not considered part of the public API - avoid relying on
      // them unless you are aware of the risk.

      Vue.util = {
        warn: warn,
        extend: extend,
        mergeOptions: mergeOptions,
        defineReactive: defineReactive$$1
      };
      Vue.set = set;
      Vue["delete"] = del;
      Vue.nextTick = nextTick; // 2.6 explicit observable API

      Vue.observable = function (obj) {
        observe(obj);
        return obj;
      };

      Vue.options = Object.create(null);
      ASSET_TYPES.forEach(function (type) {
        Vue.options[type + 's'] = Object.create(null);
      }); // this is used to identify the "base" constructor to extend all plain-object
      // components with in Weex's multi-instance scenarios.

      Vue.options._base = Vue;
      extend(Vue.options.components, builtInComponents);
      initUse(Vue);
      initMixin$1(Vue);
      initExtend(Vue);
      initAssetRegisters(Vue);
    }

    initGlobalAPI(Vue);
    Object.defineProperty(Vue.prototype, '$isServer', {
      get: isServerRendering
    });
    Object.defineProperty(Vue.prototype, '$ssrContext', {
      get: function get() {
        /* istanbul ignore next */
        return this.$vnode && this.$vnode.ssrContext;
      }
    }); // expose FunctionalRenderContext for ssr runtime helper installation

    Object.defineProperty(Vue, 'FunctionalRenderContext', {
      value: FunctionalRenderContext
    });
    Vue.version = '2.6.11';
    /**
     * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
     */

    var ARRAYTYPE = '[object Array]';
    var OBJECTTYPE = '[object Object]'; // const FUNCTIONTYPE = '[object Function]'

    function diff(current, pre) {
      var result = {};
      syncKeys(current, pre);

      _diff(current, pre, '', result);

      return result;
    }

    function syncKeys(current, pre) {
      if (current === pre) {
        return;
      }

      var rootCurrentType = type(current);
      var rootPreType = type(pre);

      if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if (Object.keys(current).length >= Object.keys(pre).length) {
          for (var key in pre) {
            var currentValue = current[key];

            if (currentValue === undefined) {
              current[key] = null;
            } else {
              syncKeys(currentValue, pre[key]);
            }
          }
        }
      } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
          pre.forEach(function (item, index) {
            syncKeys(current[index], item);
          });
        }
      }
    }

    function _diff(current, pre, path, result) {
      if (current === pre) {
        return;
      }

      var rootCurrentType = type(current);
      var rootPreType = type(pre);

      if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
          setResult(result, path, current);
        } else {
          var loop = function loop(key) {
            var currentValue = current[key];
            var preValue = pre[key];
            var currentType = type(currentValue);
            var preType = type(preValue);

            if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
              if (currentValue != pre[key]) {
                setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
              }
            } else if (currentType == ARRAYTYPE) {
              if (preType != ARRAYTYPE) {
                setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
              } else {
                if (currentValue.length < preValue.length) {
                  setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                } else {
                  currentValue.forEach(function (item, index) {
                    _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                  });
                }
              }
            } else if (currentType == OBJECTTYPE) {
              if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
              } else {
                for (var subKey in currentValue) {
                  _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                }
              }
            }
          };

          for (var key in current) {
            loop(key);
          }
        }
      } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
          setResult(result, path, current);
        } else {
          if (current.length < pre.length) {
            setResult(result, path, current);
          } else {
            current.forEach(function (item, index) {
              _diff(item, pre[index], path + '[' + index + ']', result);
            });
          }
        }
      } else {
        setResult(result, path, current);
      }
    }

    function setResult(result, k, v) {
      // if (type(v) != FUNCTIONTYPE) {
      result[k] = v; // }
    }

    function type(obj) {
      return Object.prototype.toString.call(obj);
    }
    /*  */


    function flushCallbacks$1(vm) {
      if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({
          "NODE_ENV": "development",
          "VUE_APP_PLATFORM": "quickapp-webview",
          "BASE_URL": "/"
        }).VUE_APP_DEBUG) {
          var mpInstance = vm.$scope;
          console.log('[' + +new Date() + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid + ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }

        var copies = vm.__next_tick_callbacks.slice(0);

        vm.__next_tick_callbacks.length = 0;

        for (var i = 0; i < copies.length; i++) {
          copies[i]();
        }
      }
    }

    function hasRenderWatcher(vm) {
      return queue.find(function (watcher) {
        return vm._watcher === watcher;
      });
    }

    function nextTick$1(vm, cb) {
      //1.nextTick 之前 已 setData 且 setData 还未回调完成
      //2.nextTick 之前存在 render watcher
      if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if (Object({
          "NODE_ENV": "development",
          "VUE_APP_PLATFORM": "quickapp-webview",
          "BASE_URL": "/"
        }).VUE_APP_DEBUG) {
          var mpInstance = vm.$scope;
          console.log('[' + +new Date() + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid + ']:nextVueTick');
        }

        return nextTick(cb, vm);
      } else {
        if (Object({
          "NODE_ENV": "development",
          "VUE_APP_PLATFORM": "quickapp-webview",
          "BASE_URL": "/"
        }).VUE_APP_DEBUG) {
          var mpInstance$1 = vm.$scope;
          console.log('[' + +new Date() + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid + ']:nextMPTick');
        }
      }

      var _resolve;

      if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
      }

      vm.__next_tick_callbacks.push(function () {
        if (cb) {
          try {
            cb.call(vm);
          } catch (e) {
            handleError(e, vm, 'nextTick');
          }
        } else if (_resolve) {
          _resolve(vm);
        }
      }); // $flow-disable-line


      if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
          _resolve = resolve;
        });
      }
    }
    /*  */


    function cloneWithData(vm) {
      // 确保当前 vm 所有数据被同步
      var ret = Object.create(null);
      var dataKeys = [].concat(Object.keys(vm._data || {}), Object.keys(vm._computedWatchers || {}));
      dataKeys.reduce(function (ret, key) {
        ret[key] = vm[key];
        return ret;
      }, ret); // vue-composition-api

      var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
      var rawBindings = compositionApiState && compositionApiState.rawBindings;

      if (rawBindings) {
        Object.keys(rawBindings).forEach(function (key) {
          ret[key] = vm[key];
        });
      } //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据


      Object.assign(ret, vm.$mp.data || {});

      if (Array.isArray(vm.$options.behaviors) && vm.$options.behaviors.indexOf('uni://form-field') !== -1) {
        //form-field
        ret['name'] = vm.name;
        ret['value'] = vm.value;
      }

      return JSON.parse(JSON.stringify(ret));
    }

    var patch = function patch(oldVnode, vnode) {
      var this$1 = this;

      if (vnode === null) {
        //destroy
        return;
      }

      if (this.mpType === 'page' || this.mpType === 'component') {
        var mpInstance = this.$scope;
        var data = Object.create(null);

        try {
          data = cloneWithData(this);
        } catch (err) {
          console.error(err);
        }

        data.__webviewId__ = mpInstance.data.__webviewId__;
        var mpData = Object.create(null);
        Object.keys(data).forEach(function (key) {
          //仅同步 data 中有的数据
          mpData[key] = mpInstance.data[key];
        });
        var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);

        if (Object.keys(diffData).length) {
          if (Object({
            "NODE_ENV": "development",
            "VUE_APP_PLATFORM": "quickapp-webview",
            "BASE_URL": "/"
          }).VUE_APP_DEBUG) {
            console.log('[' + +new Date() + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid + ']差量更新', JSON.stringify(diffData));
          }

          this.__next_tick_pending = true;
          mpInstance.setData(diffData, function () {
            this$1.__next_tick_pending = false;
            flushCallbacks$1(this$1);
          });
        } else {
          flushCallbacks$1(this);
        }
      }
    };
    /*  */


    function createEmptyRender() {}

    function mountComponent$1(vm, el, hydrating) {
      if (!vm.mpType) {
        //main.js 中的 new Vue
        return vm;
      }

      if (vm.mpType === 'app') {
        vm.$options.render = createEmptyRender;
      }

      if (!vm.$options.render) {
        vm.$options.render = createEmptyRender;

        if (true) {
          /* istanbul ignore if */
          if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
            warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
          } else {
            warn('Failed to mount component: template or render function not defined.', vm);
          }
        }
      }

      !vm._$fallback && callHook(vm, 'beforeMount');

      var updateComponent = function updateComponent() {
        vm._update(vm._render(), hydrating);
      }; // we set this to vm._watcher inside the watcher's constructor
      // since the watcher's initial patch may call $forceUpdate (e.g. inside child
      // component's mounted hook), which relies on vm._watcher being already defined


      new Watcher(vm, updateComponent, noop, {
        before: function before() {
          if (vm._isMounted && !vm._isDestroyed) {
            callHook(vm, 'beforeUpdate');
          }
        }
      }, true
      /* isRenderWatcher */
      );
      hydrating = false;
      return vm;
    }
    /*  */


    function renderClass(staticClass, dynamicClass) {
      if (isDef(staticClass) || isDef(dynamicClass)) {
        return concat(staticClass, stringifyClass(dynamicClass));
      }
      /* istanbul ignore next */


      return '';
    }

    function concat(a, b) {
      return a ? b ? a + ' ' + b : a : b || '';
    }

    function stringifyClass(value) {
      if (Array.isArray(value)) {
        return stringifyArray(value);
      }

      if (isObject(value)) {
        return stringifyObject(value);
      }

      if (typeof value === 'string') {
        return value;
      }
      /* istanbul ignore next */


      return '';
    }

    function stringifyArray(value) {
      var res = '';
      var stringified;

      for (var i = 0, l = value.length; i < l; i++) {
        if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
          if (res) {
            res += ' ';
          }

          res += stringified;
        }
      }

      return res;
    }

    function stringifyObject(value) {
      var res = '';

      for (var key in value) {
        if (value[key]) {
          if (res) {
            res += ' ';
          }

          res += key;
        }
      }

      return res;
    }
    /*  */


    var parseStyleText = cached(function (cssText) {
      var res = {};
      var listDelimiter = /;(?![^(]*\))/g;
      var propertyDelimiter = /:(.+)/;
      cssText.split(listDelimiter).forEach(function (item) {
        if (item) {
          var tmp = item.split(propertyDelimiter);
          tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
        }
      });
      return res;
    }); // normalize possible array / string values into Object

    function normalizeStyleBinding(bindingStyle) {
      if (Array.isArray(bindingStyle)) {
        return toObject(bindingStyle);
      }

      if (typeof bindingStyle === 'string') {
        return parseStyleText(bindingStyle);
      }

      return bindingStyle;
    }
    /*  */


    var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

    function getTarget(obj, path) {
      var parts = path.split('.');
      var key = parts[0];

      if (key.indexOf('__$n') === 0) {
        //number index
        key = parseInt(key.replace('__$n', ''));
      }

      if (parts.length === 1) {
        return obj[key];
      }

      return getTarget(obj[key], parts.slice(1).join('.'));
    }

    function internalMixin(Vue) {
      Vue.config.errorHandler = function (err, vm, info) {
        Vue.util.warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
        console.error(err);
        /* eslint-disable no-undef */

        var app = getApp();

        if (app && app.onError) {
          app.onError(err);
        }
      };

      var oldEmit = Vue.prototype.$emit;

      Vue.prototype.$emit = function (event) {
        if (this.$scope && event) {
          this.$scope['triggerEvent'](event, {
            __args__: toArray(arguments, 1)
          });
        }

        return oldEmit.apply(this, arguments);
      };

      Vue.prototype.$nextTick = function (fn) {
        return nextTick$1(this, fn);
      };

      MP_METHODS.forEach(function (method) {
        Vue.prototype[method] = function (args) {
          if (this.$scope && this.$scope[method]) {
            return this.$scope[method](args);
          } // mp-alipay


          if (typeof my === 'undefined') {
            return;
          }

          if (method === 'createSelectorQuery') {
            /* eslint-disable no-undef */
            return my.createSelectorQuery(args);
          } else if (method === 'createIntersectionObserver') {
            /* eslint-disable no-undef */
            return my.createIntersectionObserver(args);
          } // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent

        };
      });
      Vue.prototype.__init_provide = initProvide;
      Vue.prototype.__init_injections = initInjections;

      Vue.prototype.__call_hook = function (hook, args) {
        var vm = this; // #7573 disable dep collection when invoking lifecycle hooks

        pushTarget();
        var handlers = vm.$options[hook];
        var info = hook + " hook";
        var ret;

        if (handlers) {
          for (var i = 0, j = handlers.length; i < j; i++) {
            ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
          }
        }

        if (vm._hasHookEvent) {
          vm.$emit('hook:' + hook, args);
        }

        popTarget();
        return ret;
      };

      Vue.prototype.__set_model = function (target, key, value, modifiers) {
        if (Array.isArray(modifiers)) {
          if (modifiers.indexOf('trim') !== -1) {
            value = value.trim();
          }

          if (modifiers.indexOf('number') !== -1) {
            value = this._n(value);
          }
        }

        if (!target) {
          target = this;
        }

        target[key] = value;
      };

      Vue.prototype.__set_sync = function (target, key, value) {
        if (!target) {
          target = this;
        }

        target[key] = value;
      };

      Vue.prototype.__get_orig = function (item) {
        if (isPlainObject(item)) {
          return item['$orig'] || item;
        }

        return item;
      };

      Vue.prototype.__get_value = function (dataPath, target) {
        return getTarget(target || this, dataPath);
      };

      Vue.prototype.__get_class = function (dynamicClass, staticClass) {
        return renderClass(staticClass, dynamicClass);
      };

      Vue.prototype.__get_style = function (dynamicStyle, staticStyle) {
        if (!dynamicStyle && !staticStyle) {
          return '';
        }

        var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
        var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
        return Object.keys(styleObj).map(function (name) {
          return hyphenate(name) + ":" + styleObj[name];
        }).join(';');
      };

      Vue.prototype.__map = function (val, iteratee) {
        //TODO 暂不考虑 string
        var ret, i, l, keys, key;

        if (Array.isArray(val)) {
          ret = new Array(val.length);

          for (i = 0, l = val.length; i < l; i++) {
            ret[i] = iteratee(val[i], i);
          }

          return ret;
        } else if (isObject(val)) {
          keys = Object.keys(val);
          ret = Object.create(null);

          for (i = 0, l = keys.length; i < l; i++) {
            key = keys[i];
            ret[key] = iteratee(val[key], key, i);
          }

          return ret;
        } else if (typeof val === 'number') {
          ret = new Array(val);

          for (i = 0, l = val; i < l; i++) {
            // 第一个参数暂时仍和小程序一致
            ret[i] = iteratee(i, i);
          }

          return ret;
        }

        return [];
      };
    }
    /*  */


    var LIFECYCLE_HOOKS$1 = [//App
    'onLaunch', 'onShow', 'onHide', 'onUniNViewMessage', 'onPageNotFound', 'onThemeChange', 'onError', 'onUnhandledRejection', //Page
    'onLoad', // 'onShow',
    'onReady', // 'onHide',
    'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onTabItemTap', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onResize', 'onPageScroll', 'onNavigationBarButtonTap', 'onBackPress', 'onNavigationBarSearchInputChanged', 'onNavigationBarSearchInputConfirmed', 'onNavigationBarSearchInputClicked', //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow', 'onPageHide', 'onPageResize'];

    function lifecycleMixin$1(Vue) {
      //fixed vue-class-component
      var oldExtend = Vue.extend;

      Vue.extend = function (extendOptions) {
        extendOptions = extendOptions || {};
        var methods = extendOptions.methods;

        if (methods) {
          Object.keys(methods).forEach(function (methodName) {
            if (LIFECYCLE_HOOKS$1.indexOf(methodName) !== -1) {
              extendOptions[methodName] = methods[methodName];
              delete methods[methodName];
            }
          });
        }

        return oldExtend.call(this, extendOptions);
      };

      var strategies = Vue.config.optionMergeStrategies;
      var mergeHook = strategies.created;
      LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
      });
      Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
    }
    /*  */
    // install platform patch function


    Vue.prototype.__patch__ = patch; // public mount method

    Vue.prototype.$mount = function (el, hydrating) {
      return mountComponent$1(this, el, hydrating);
    };

    lifecycleMixin$1(Vue);
    internalMixin(Vue);
    /*  */

    /* harmony default export */

    __webpack_exports__["default"] = Vue;
    /* WEBPACK VAR INJECTION */
  }).call(this, __webpack_require__(
  /*! ./../../../../../webpack/buildin/global.js */
  3));
  /***/
},
/* 3 */

/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/

/*! no static exports found */

/***/
function (module, exports) {
  var g; // This works in non-strict mode

  g = function () {
    return this;
  }();

  try {
    // This works if eval is allowed (see CSP)
    g = g || new Function("return this")();
  } catch (e) {
    // This works if the window reference is available
    if ((typeof window === "undefined" ? "undefined" : (0, _typeof2["default"])(window)) === "object") g = window;
  } // g can still be undefined, but nothing to do about it...
  // We return undefined, instead of nothing here, so it's
  // easier to handle this case. if(!global) { ...}


  module.exports = g;
  /***/
},
/* 4 */

/*!******************************************************************!*\
  !*** C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/pages.json ***!
  \******************************************************************/

/*! no static exports found */

/***/
function (module, exports) {
  /***/
},,,,,,
/* 5 */

/* 6 */

/* 7 */

/* 8 */

/* 9 */

/* 10 */

/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/

/*! exports provided: default */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "default", function () {
    return normalizeComponent;
  });
  /* globals __VUE_SSR_CONTEXT__ */
  // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
  // This module is a runtime utility for cleaner component module output and will
  // be included in the final webpack user bundle.


  function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier,
  /* server only */
  shadowMode,
  /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
  ) {
    // Vue.extend constructor export interop
    var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports; // fixed by xxxxxx auto components

    if (components) {
      if (!options.components) {
        options.components = {};
      }

      var hasOwn = Object.prototype.hasOwnProperty;

      for (var name in components) {
        if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
          options.components[name] = components[name];
        }
      }
    } // fixed by xxxxxx renderjs


    if (renderjs) {
      (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function () {
        this[renderjs.__module] = this;
      });
      (options.mixins || (options.mixins = [])).push(renderjs);
    } // render functions


    if (render) {
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      options._compiled = true;
    } // functional template


    if (functionalTemplate) {
      options.functional = true;
    } // scopedId


    if (scopeId) {
      options._scopeId = 'data-v-' + scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (injectStyles) {
          injectStyles.call(this, context);
        } // register component module identifier for async chunk inferrence


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (injectStyles) {
      hook = shadowMode ? function () {
        injectStyles.call(this, this.$root.$options.shadowRoot);
      } : injectStyles;
    }

    if (hook) {
      if (options.functional) {
        // for template-only hot-reload because in that case the render fn doesn't
        // go through the normalizer
        options._injectStyles = hook; // register for functioal component in vue file

        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return {
      exports: scriptExports,
      options: options
    };
  }
  /***/

}]]);

/***/ }),

/***/ "./components/beauty-calendar/beauty-calendar.js":
/*!*******************************************************!*\
  !*** ./components/beauty-calendar/beauty-calendar.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/beauty-calendar/beauty-calendar"], {
  /***/
  19:
  /*!******************************************************************************************************!*\
    !*** C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/components/beauty-calendar/beauty-calendar.vue ***!
    \******************************************************************************************************/

  /*! no static exports found */

  /***/
  function _(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _beauty_calendar_vue_vue_type_template_id_1429bae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./beauty-calendar.vue?vue&type=template&id=1429bae4&scoped=true& */
    20);
    /* harmony import */


    var _beauty_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./beauty-calendar.vue?vue&type=script&lang=js& */
    22);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _beauty_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) {
      if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _beauty_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony import */


    var _beauty_calendar_vue_vue_type_style_index_0_id_1429bae4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./beauty-calendar.vue?vue&type=style&index=0&id=1429bae4&lang=scss&scoped=true& */
    24);
    /* harmony import */


    var _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */
    10);

    var renderjs;
    /* normalize component */

    var component = Object(_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_beauty_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _beauty_calendar_vue_vue_type_template_id_1429bae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"], _beauty_calendar_vue_vue_type_template_id_1429bae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, "1429bae4", null, false, _beauty_calendar_vue_vue_type_template_id_1429bae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"], renderjs);
    component.options.__file = "components/beauty-calendar/beauty-calendar.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  20:
  /*!*************************************************************************************************************************************************!*\
    !*** C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/components/beauty-calendar/beauty-calendar.vue?vue&type=template&id=1429bae4&scoped=true& ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns, recyclableRender, components */

  /***/
  function _(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_beauty_calendar_vue_vue_type_template_id_1429bae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./beauty-calendar.vue?vue&type=template&id=1429bae4&scoped=true& */
    21);
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_beauty_calendar_vue_vue_type_template_id_1429bae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_beauty_calendar_vue_vue_type_template_id_1429bae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "recyclableRender", function () {
      return _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_beauty_calendar_vue_vue_type_template_id_1429bae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_beauty_calendar_vue_vue_type_template_id_1429bae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"];
    });
    /***/

  },

  /***/
  21:
  /*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/components/beauty-calendar/beauty-calendar.vue?vue&type=template&id=1429bae4&scoped=true& ***!
    \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns, recyclableRender, components */

  /***/
  function _(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "recyclableRender", function () {
      return recyclableRender;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return components;
    });

    var components;

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      var g0 = _vm.show && !(_vm.pickerArray.length == 0) && _vm.pickerArray.length == 1 && _vm.multi == false ? _vm.pickerArray[0].slice(5).replace("/", "月") : null;
      var g1 = _vm.show && !(_vm.pickerArray.length == 0) && !(_vm.pickerArray.length == 1 && _vm.multi == false) ? _vm.pickerArray[0].slice(5).replace("/", "月") : null;
      var g2 = _vm.show && !(_vm.pickerArray.length == 0) && !(_vm.pickerArray.length == 1 && _vm.multi == false) && _vm.pickerArray[1] != null ? _vm.pickerArray[1].slice(5).replace("/", "月") : null;
      var l1 = _vm.show ? _vm.__map(_vm.calendarEmptyTempArray, function (v, i) {
        var $orig = _vm.__get_orig(v);

        var m0 = _vm.prefixZero(v[2]);

        var m2 = _vm.prefixZero(v[2]);

        var m4 = _vm.prefixZero(v[2]);

        var m6 = _vm.prefixZero(v[2]);

        var m8 = _vm.prefixZero(v[2]);

        var m10 = _vm.prefixZero(v[2]);

        var m12 = _vm.prefixZero(v[2]);

        var l0 = _vm.__map(v[4], function (d, i) {
          var $orig = _vm.__get_orig(d);

          var m1 = _vm.prefixZero(i + 1);

          var m3 = _vm.prefixZero(i + 1);

          var m5 = _vm.prefixZero(i + 1);

          var m7 = _vm.prefixZero(i + 1);

          var m9 = _vm.prefixZero(i + 1);

          var m11 = _vm.prefixZero(i + 1);

          var m13 = _vm.prefixZero(i + 1);

          return {
            $orig: $orig,
            m1: m1,
            m3: m3,
            m5: m5,
            m7: m7,
            m9: m9,
            m11: m11,
            m13: m13
          };
        });

        return {
          $orig: $orig,
          m0: m0,
          m2: m2,
          m4: m4,
          m6: m6,
          m8: m8,
          m10: m10,
          m12: m12,
          l0: l0
        };
      }) : null;
      _vm.$mp.data = Object.assign({}, {
        $root: {
          g0: g0,
          g1: g1,
          g2: g2,
          l1: l1
        }
      });
    };

    var recyclableRender = false;
    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  22:
  /*!*******************************************************************************************************************************!*\
    !*** C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/components/beauty-calendar/beauty-calendar.vue?vue&type=script&lang=js& ***!
    \*******************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function _(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_beauty_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./beauty-calendar.vue?vue&type=script&lang=js& */
    23);
    /* harmony import */


    var _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_beauty_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_beauty_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_beauty_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) {
      if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_beauty_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony default export */


    __webpack_exports__["default"] = _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_beauty_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a;
    /***/
  },

  /***/
  23:
  /*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/components/beauty-calendar/beauty-calendar.vue?vue&type=script&lang=js& ***!
    \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }

    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    } //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /*
    * @description 组件可以对日期进行单选，多选，使用酒店预定、飞机票火车票预定
    * @__author__:Sorry_hx, __email__:1317205072@qq.com
    * @property {String} starDate 单选为选中日期，多选为选中开始日期，默认选择为今天，需要autoChoose = true, YYYY/MM/DD
    * @property {String} endDate 单选无效，多选为选中结束日期，默认选择为明天， 需要autoChoose = true, YYYY/MM/DD
    * @property {Boolean} multi 多选模式
    * @property {Boolean} autoChoose 自动选择输入日期，默认为false
    * @property {Boolean} autoClear 保存自动清除选择，默认为true
    * @property {Number} range 日历月份数，自本月起的往后几个月的日历，默认为13个月，即明年的本月
    * @event {Array} change 触发change时间，返回日期数组
    */


    var _default = {
      props: {
        startDate: {
          type: String,
          "default": ''
        },
        endDate: {
          type: String,
          "default": ''
        },
        multi: {
          type: Boolean,
          "default": true
        },
        autoChoose: {
          type: Boolean,
          "default": false
        },
        autoClear: {
          type: Boolean,
          "default": true
        },
        range: {
          type: Number,
          "default": 13
        } // 默认显示至下年本月日历,

      },
      data: function data() {
        return {
          weekArray: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
          monthDaysArray: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          year: 1970,
          month: 1,
          date: 1,
          weekDay: 0,
          calendarEmptyTempArray: [],
          // [月份第一天索引，月份最后一天临时变量, 月份，年份.当月天数]
          pickerArray: [],
          // 选择日期的开始与结束
          pickerStartDate: '',
          pickerEndDate: '',
          today: '',
          rangeArray: [],
          pickerStamp: 0,
          show: false
        };
      },
      computed: {},
      methods: {
        getCalendar: function getCalendar() {
          var date = new Date();
          this.year = date.getFullYear();
          this.updateFebruarydays(this.year);
          this.month = date.getMonth() + 1;
          this.date = date.getDate();
          this.weekDay = date.getDay();
          this.today = this.getDate(date);
          var tomorrowDate = this.getDate(new Date(date.getTime() + 24 * 60 * 60 * 1000));

          if (this.multi && this.autoChoose) {
            if (this.startDate != '' && this.endDate != '' && this.startDate < this.endDate && this.startDate.replace(/-/g, '/') >= this.today) {
              this.pickerArray = [this.startDate.replace(/-/g, '/'), this.endDate.replace(/-/g, '/')];
              console.log(this.pickerArray);
            } else {
              this.pickerArray = [this.today, tomorrowDate];
            }
          } else if (!this.multi && this.autoChoose) {
            if (this.startDate != '' && this.startDate.replace(/-/g, '/') >= this.today) {
              this.pickerArray = [this.startDate.replace(/-/g, '/')];
            } else {
              this.pickerArray = [this.today];
            }
          }

          var firstDay = new Date("".concat(this.year, "-").concat(this.month, "-01")).getDay(); //获取本月第一天
          // 获取接下来月份的数组，用于渲染日历 [月份第一天索引，月份最后一天临时变量, 月份，年份.当月天数]

          var month; // 临时月份

          var year = this.year;

          for (var i = 0; i < this.range; i++) {
            if (i > 0) {
              var preDay = (this.calendarEmptyTempArray[i - 1][1] + 1) % 7;
              month = month + 1;

              if (month > 12) {
                year++;
                month = month - 12;
                this.updateFebruarydays(year);
              }

              var monthDays = this.monthDaysArray[month - 1];
              var laterDay = (preDay + monthDays) % 7 - 1;
              this.calendarEmptyTempArray[i] = [preDay, laterDay, month, year, monthDays];
            } else {
              month = this.month;
              var _monthDays = this.monthDaysArray[month - 1];

              var _laterDay = (firstDay + _monthDays) % 7 - 1;

              this.calendarEmptyTempArray[0] = [firstDay, _laterDay, month, year, _monthDays];
            }
          }
        },
        getDate: function getDate(date) {
          return "".concat(date.getFullYear(), "/").concat(this.prefixZero(date.getMonth() + 1), "/").concat(this.prefixZero(date.getDate()));
        },
        updateFebruarydays: function updateFebruarydays(year) {
          // 初步估计侦听器只会在组件的created生命周期侦听最初与最终的值，改动函数手动更新，后续慢慢研究
          if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            this.monthDaysArray[1] = 29;
          } else {
            this.monthDaysArray[1] = 28;
          }
        },
        getDayClass: function getDayClass(date, month, year) {
          // 计算样式
          if (date < this.date && month == this.month && year == this.year) {
            return 'calendar-disable-day';
          } else if (date == this.date && month == this.month && year == this.year) {
            return 'calendar-today';
          }

          return 'calendar-day';
        },
        prefixZero: function prefixZero(num) {
          // 补零,标准化
          if (num > 10) {
            return num;
          } else {
            return (Array(2).join(0) + num).slice(-2);
          }
        },
        getTomorrowDate: function getTomorrowDate(todayDate, month) {
          var d = todayDate + 1; // if (d>)
        },
        dateScope: function dateScope(startDateStr, endDateStr) {
          var startTime = new Date(startDateStr).getTime();
          var endTime = new Date(endDateStr).getTime();
          var oneDay = 24 * 60 * 60 * 1000;
          var l = [];
          var i;

          for (i = startTime; i <= endTime;) {
            l.push(this.getDate(new Date(i)).replace(/\//g, '-'));
            i += oneDay;
          }

          return l;
        },
        picker: function picker(dateArray) {
          var _dateArray = _slicedToArray(dateArray, 3),
              year = _dateArray[0],
              month = _dateArray[1],
              day = _dateArray[2];

          var date = "".concat(year, "/").concat(this.prefixZero(month), "/").concat(this.prefixZero(day));

          if (date < this.today) {
            // 禁止前面日期点击
            return null;
          }

          if (this.multi == true) {
            if (this.pickerStamp == 0) {
              this.pickerArray = [date];
              this.pickerStamp = 1;
            } else {
              if (date > this.pickerArray[0]) {
                this.pickerArray.push(date);
                this.pickerStamp = 0;
              } else {
                // 实现日期小于第一次选择时变为重选
                this.pickerArray = [date];
                this.pickerStamp = 1;
              }
            }
          } else {
            this.pickerArray = [date];
          }
        },
        clear: function clear() {
          // 清除日期选择
          this.pickerArray = [];
        },
        save: function save(e) {
          if (this.multi == true) {
            if (this.pickerArray.length == 2) {
              this.$emit('change', this.dateScope(this.pickerArray[0], this.pickerArray[1]));
              this.show = false;

              if (this.autoClear) {
                this.clear();
              }
            }
          } else {
            this.$emit('change', this.pickerArray);
            this.show = false;

            if (this.autoClear) {
              this.clear();
            }
          }
        },
        close: function close() {
          this.show = false;
        },
        open: function open() {
          this.show = true;
        }
      },
      created: function created() {
        this.getCalendar();
      }
    };
    exports["default"] = _default;
    /***/
  },

  /***/
  24:
  /*!****************************************************************************************************************************************************************!*\
    !*** C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/components/beauty-calendar/beauty-calendar.vue?vue&type=style&index=0&id=1429bae4&lang=scss&scoped=true& ***!
    \****************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function _(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_beauty_calendar_vue_vue_type_style_index_0_id_1429bae4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./beauty-calendar.vue?vue&type=style&index=0&id=1429bae4&lang=scss&scoped=true& */
    25);
    /* harmony import */


    var _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_beauty_calendar_vue_vue_type_style_index_0_id_1429bae4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_beauty_calendar_vue_vue_type_style_index_0_id_1429bae4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_beauty_calendar_vue_vue_type_style_index_0_id_1429bae4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) {
      if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_beauty_calendar_vue_vue_type_style_index_0_id_1429bae4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony default export */


    __webpack_exports__["default"] = _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_beauty_calendar_vue_vue_type_style_index_0_id_1429bae4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;
    /***/
  },

  /***/
  25:
  /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/components/beauty-calendar/beauty-calendar.vue?vue&type=style&index=0&id=1429bae4&lang=scss&scoped=true& ***!
    \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    // extracted by mini-css-extract-plugin
    if (false) { var cssReload; }
    /***/

  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/beauty-calendar/beauty-calendar-create-component', {
  'components/beauty-calendar/beauty-calendar-create-component': function componentsBeautyCalendarBeautyCalendarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('1')['createComponent'](__webpack_require__(19));
  }
}, [['components/beauty-calendar/beauty-calendar-create-component']]]);

/***/ }),

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/index"], [,,,,,,,,,,,
/* 0 */

/* 1 */

/* 2 */

/* 3 */

/* 4 */

/* 5 */

/* 6 */

/* 7 */

/* 8 */

/* 9 */

/* 10 */

/* 11 */

/*!************************************************************************************************!*\
  !*** C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \************************************************************************************************/

/*! no static exports found */

/***/
function (module, exports, __webpack_require__) {
  "use strict";
  /* WEBPACK VAR INJECTION */

  (function (createPage) {
    __webpack_require__(
    /*! uni-pages */
    4);

    var _vue = _interopRequireDefault(__webpack_require__(
    /*! vue */
    2));

    var _index = _interopRequireDefault(__webpack_require__(
    /*! ./pages/index/index.vue */
    12));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }

    createPage(_index["default"]);
    /* WEBPACK VAR INJECTION */
  }).call(this, __webpack_require__(
  /*! ./node_modules/@dcloudio/uni-quickapp-webview/dist/index.js */
  1)["createPage"]);
  /***/
},
/* 12 */

/*!*****************************************************************************!*\
  !*** C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/pages/index/index.vue ***!
  \*****************************************************************************/

/*! no static exports found */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */


  var _index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
  /*! ./index.vue?vue&type=template&id=57280228& */
  13);
  /* harmony import */


  var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
  /*! ./index.vue?vue&type=script&lang=js& */
  15);
  /* harmony reexport (unknown) */


  for (var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) {
    if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
      __webpack_require__.d(__webpack_exports__, key, function () {
        return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key];
      });
    })(__WEBPACK_IMPORT_KEY__);
  }
  /* harmony import */


  var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
  /*! ./index.vue?vue&type=style&index=0&lang=css& */
  17);
  /* harmony import */


  var _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
  /*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */
  10);

  var renderjs;
  /* normalize component */

  var component = Object(_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__["render"], _index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null, false, _index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__["components"], renderjs);
  component.options.__file = "pages/index/index.vue";
  /* harmony default export */

  __webpack_exports__["default"] = component.exports;
  /***/
},
/* 13 */

/*!************************************************************************************************************!*\
  !*** C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/pages/index/index.vue?vue&type=template&id=57280228& ***!
  \************************************************************************************************************/

/*! exports provided: render, staticRenderFns, recyclableRender, components */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */


  var _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
  /*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=57280228& */
  14);
  /* harmony reexport (safe) */


  __webpack_require__.d(__webpack_exports__, "render", function () {
    return _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__["render"];
  });
  /* harmony reexport (safe) */


  __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
    return _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
  });
  /* harmony reexport (safe) */


  __webpack_require__.d(__webpack_exports__, "recyclableRender", function () {
    return _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"];
  });
  /* harmony reexport (safe) */


  __webpack_require__.d(__webpack_exports__, "components", function () {
    return _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228___WEBPACK_IMPORTED_MODULE_0__["components"];
  });
  /***/

},
/* 14 */

/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/pages/index/index.vue?vue&type=template&id=57280228& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

/*! exports provided: render, staticRenderFns, recyclableRender, components */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "render", function () {
    return render;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
    return staticRenderFns;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "recyclableRender", function () {
    return recyclableRender;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "components", function () {
    return components;
  });

  var components = {
    beautyCalendar: function beautyCalendar() {
      return __webpack_require__.e(
      /*! import() | components/beauty-calendar/beauty-calendar */
      "components/beauty-calendar/beauty-calendar").then(__webpack_require__.bind(null,
      /*! @/components/beauty-calendar/beauty-calendar.vue */
      19));
    }
  };

  var render = function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;
  };

  var recyclableRender = false;
  var staticRenderFns = [];
  render._withStripped = true;
  /***/
},
/* 15 */

/*!******************************************************************************************************!*\
  !*** C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/pages/index/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/

/*! no static exports found */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */


  var _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
  /*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */
  16);
  /* harmony import */


  var _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
  /* harmony reexport (unknown) */


  for (var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) {
    if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
      __webpack_require__.d(__webpack_exports__, key, function () {
        return _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key];
      });
    })(__WEBPACK_IMPORT_KEY__);
  }
  /* harmony default export */


  __webpack_exports__["default"] = _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a;
  /***/
},
/* 16 */

/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/pages/index/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

/*! no static exports found */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var beautyCalendar = function beautyCalendar() {
    __webpack_require__.e(
    /*! require.ensure | components/beauty-calendar/beauty-calendar */
    "components/beauty-calendar/beauty-calendar").then(function () {
      return resolve(__webpack_require__(
      /*! @/components/beauty-calendar/beauty-calendar.vue */
      19));
    }.bind(null, __webpack_require__))["catch"](__webpack_require__.oe);
  };

  var _default = {
    components: {
      beautyCalendar: beautyCalendar
    },
    data: function data() {
      return {
        title: 'beauty-calendar',
        multi: true,
        autoChoose: true,
        startDate: "2020-11-02",
        endDate: "2020-11-10",
        rang: 13,
        autoClear: false
      };
    },
    onLoad: function onLoad() {},
    methods: {
      show: function show() {
        this.$refs.calendar.open();
      },
      change: function change(e) {
        console.log(e);
      }
    }
  };
  exports["default"] = _default;
  /***/
},
/* 17 */

/*!**************************************************************************************************************!*\
  !*** C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/pages/index/index.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************/

/*! no static exports found */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */


  var _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
  /*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&lang=css& */
  18);
  /* harmony import */


  var _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
  /* harmony reexport (unknown) */


  for (var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) {
    if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
      __webpack_require__.d(__webpack_exports__, key, function () {
        return _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
      });
    })(__WEBPACK_IMPORT_KEY__);
  }
  /* harmony default export */


  __webpack_exports__["default"] = _D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a;
  /***/
},
/* 18 */

/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/rhsw/Desktop/新建文件夹 (6)/beauty-calendar/pages/index/index.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

/*! no static exports found */

/***/
function (module, exports, __webpack_require__) {
  // extracted by mini-css-extract-plugin
  if (false) { var cssReload; }
  /***/

}], [[11, "common/runtime", "common/vendor"]]]);

/***/ }),

/***/ "d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\runtime\\helpers\\interopRequireDefault.js":
/*!***********************************************************************************************************************************************!*\
  !*** d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\runtime\\helpers\\typeof.js":
/*!********************************************************************************************************************************!*\
  !*** d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAuanNvbiIsIndlYnBhY2s6Ly8vLi9jb21tb24vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vdmVuZG9yLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYmVhdXR5LWNhbGVuZGFyL2JlYXV0eS1jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZDovUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy9kOi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwLmpzb24/cGFja2FnZT1hcHBcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZSgnLi9jb21tb24vcnVudGltZS5qcycpO1xuXG5yZXF1aXJlKCcuL2NvbW1vbi92ZW5kb3IuanMnKTtcblxucmVxdWlyZSgnLi9jb21tb24vbWFpbi5qcycpOyIsImdsb2JhbC5fX2dsb2JhbENvbXBvbmVudHMgPSBbXTtcclxuZ2xvYmFsLl9fcWFSb3V0ZSA9ICdhcHAnO1xyXG5yZXF1aXJlKCcuL2FwcC5qcycpO1xyXG5nbG9iYWwuX19xYVJvdXRlID0gJ2NvbXBvbmVudHMvYmVhdXR5LWNhbGVuZGFyL2JlYXV0eS1jYWxlbmRhcic7XHJcbmdsb2JhbC51c2luZ0NvbXBvbmVudHMgPSBbXTtcclxucmVxdWlyZSgnLi9jb21wb25lbnRzL2JlYXV0eS1jYWxlbmRhci9iZWF1dHktY2FsZW5kYXIuanMnKTtcclxuZ2xvYmFsLl9fcWFSb3V0ZSA9ICdwYWdlcy9pbmRleC9pbmRleCc7XHJcbmdsb2JhbC51c2luZ0NvbXBvbmVudHMgPSBbXCJjb21wb25lbnRzL2JlYXV0eS1jYWxlbmRhci9iZWF1dHktY2FsZW5kYXJcIl07XHJcbnJlcXVpcmUoJy4vcGFnZXMvaW5kZXgvaW5kZXguanMnKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuKGdsb2JhbFtcIndlYnBhY2tKc29ucFwiXSA9IGdsb2JhbFtcIndlYnBhY2tKc29ucFwiXSB8fCBbXSkucHVzaChbW1wiY29tbW9uL21haW5cIl0sIFtcbi8qIDAgKi9cblxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIEM6L1VzZXJzL3Joc3cvRGVza3RvcC/mlrDlu7rmlofku7blpLkgKDYpL2JlYXV0eS1jYWxlbmRhci9tYWluLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuXG4vKioqL1xuZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovXG5cbiAgKGZ1bmN0aW9uIChjcmVhdGVBcHApIHtcbiAgICBfX3dlYnBhY2tfcmVxdWlyZV9fKFxuICAgIC8qISB1bmktcGFnZXMgKi9cbiAgICA0KTtcblxuICAgIHZhciBfdnVlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKFxuICAgIC8qISB2dWUgKi9cbiAgICAyKSk7XG5cbiAgICB2YXIgX0FwcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAvKiEgLi9BcHAgKi9cbiAgICA1KSk7XG5cbiAgICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGtleXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgICAgIGlmIChpICUgMikge1xuICAgICAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIF92dWVbXCJkZWZhdWx0XCJdLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2U7XG4gICAgX0FwcFtcImRlZmF1bHRcIl0ubXBUeXBlID0gJ2FwcCc7XG4gICAgdmFyIGFwcCA9IG5ldyBfdnVlW1wiZGVmYXVsdFwiXShfb2JqZWN0U3ByZWFkKHt9LCBfQXBwW1wiZGVmYXVsdFwiXSkpO1xuICAgIGNyZWF0ZUFwcChhcHApLiRtb3VudCgpO1xuICAgIC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL1xuICB9KS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oXG4gIC8qISAuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXF1aWNrYXBwLXdlYnZpZXcvZGlzdC9pbmRleC5qcyAqL1xuICAxKVtcImNyZWF0ZUFwcFwiXSk7XG4gIC8qKiovXG59LCwsLCxcbi8qIDEgKi9cblxuLyogMiAqL1xuXG4vKiAzICovXG5cbi8qIDQgKi9cblxuLyogNSAqL1xuXG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogQzovVXNlcnMvcmhzdy9EZXNrdG9wL+aWsOW7uuaWh+S7tuWkuSAoNikvYmVhdXR5LWNhbGVuZGFyL0FwcC52dWUgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG5cbi8qKiovXG5mdW5jdGlvbiAobW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIF9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gIHZhciBfQXBwX3Z1ZV92dWVfdHlwZV9zY3JpcHRfbGFuZ19qc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXG4gIC8qISAuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmICovXG4gIDYpO1xuICAvKiBoYXJtb255IHJlZXhwb3J0ICh1bmtub3duKSAqL1xuXG5cbiAgZm9yICh2YXIgX19XRUJQQUNLX0lNUE9SVF9LRVlfXyBpbiBfQXBwX3Z1ZV92dWVfdHlwZV9zY3JpcHRfbGFuZ19qc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXykge1xuICAgIGlmIChfX1dFQlBBQ0tfSU1QT1JUX0tFWV9fICE9PSAnZGVmYXVsdCcpIChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywga2V5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfQXBwX3Z1ZV92dWVfdHlwZV9zY3JpcHRfbGFuZ19qc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1trZXldO1xuICAgICAgfSk7XG4gICAgfSkoX19XRUJQQUNLX0lNUE9SVF9LRVlfXyk7XG4gIH1cbiAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gIHZhciBfQXBwX3Z1ZV92dWVfdHlwZV9zdHlsZV9pbmRleF8wX2xhbmdfY3NzX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgLyohIC4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJiAqL1xuICA4KTtcbiAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gIHZhciBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9ydW50aW1lX2NvbXBvbmVudE5vcm1hbGl6ZXJfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXG4gIC8qISAuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyAqL1xuICAxMCk7XG5cbiAgdmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzO1xuICB2YXIgcmVuZGVyanM7XG4gIC8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cblxuICB2YXIgY29tcG9uZW50ID0gT2JqZWN0KF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX3J1bnRpbWVfY29tcG9uZW50Tm9ybWFsaXplcl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiZGVmYXVsdFwiXSkoX0FwcF92dWVfdnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdLCByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgZmFsc2UsIG51bGwsIG51bGwsIG51bGwsIGZhbHNlLCBjb21wb25lbnRzLCByZW5kZXJqcyk7XG4gIGNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiO1xuICAvKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovXG5cbiAgX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSBjb21wb25lbnQuZXhwb3J0cztcbiAgLyoqKi9cbn0sXG4vKiA2ICovXG5cbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogQzovVXNlcnMvcmhzdy9EZXNrdG9wL+aWsOW7uuaWh+S7tuWkuSAoNikvYmVhdXR5LWNhbGVuZGFyL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cblxuLyoqKi9cbmZ1bmN0aW9uIChtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgdmFyIF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfYmFiZWxfbG9hZGVyX2xpYl9pbmRleF9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzEyXzFfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc2NyaXB0X2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3N0eWxlX2pzX0FwcF92dWVfdnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFxuICAvKiEgLSEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlcj8/cmVmLS0xMi0xIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJiAqL1xuICA3KTtcbiAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gIHZhciBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2JhYmVsX2xvYWRlcl9saWJfaW5kZXhfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl8xMl8xX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3NjcmlwdF9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zdHlsZV9qc19BcHBfdnVlX3Z1ZV90eXBlX3NjcmlwdF9sYW5nX2pzX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfYmFiZWxfbG9hZGVyX2xpYl9pbmRleF9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzEyXzFfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc2NyaXB0X2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3N0eWxlX2pzX0FwcF92dWVfdnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuICAvKiBoYXJtb255IHJlZXhwb3J0ICh1bmtub3duKSAqL1xuXG5cbiAgZm9yICh2YXIgX19XRUJQQUNLX0lNUE9SVF9LRVlfXyBpbiBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2JhYmVsX2xvYWRlcl9saWJfaW5kZXhfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl8xMl8xX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3NjcmlwdF9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zdHlsZV9qc19BcHBfdnVlX3Z1ZV90eXBlX3NjcmlwdF9sYW5nX2pzX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKSB7XG4gICAgaWYgKF9fV0VCUEFDS19JTVBPUlRfS0VZX18gIT09ICdkZWZhdWx0JykgKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBrZXksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfYmFiZWxfbG9hZGVyX2xpYl9pbmRleF9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzEyXzFfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc2NyaXB0X2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3N0eWxlX2pzX0FwcF92dWVfdnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19ba2V5XTtcbiAgICAgIH0pO1xuICAgIH0pKF9fV0VCUEFDS19JTVBPUlRfS0VZX18pO1xuICB9XG4gIC8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi9cblxuXG4gIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19iYWJlbF9sb2FkZXJfbGliX2luZGV4X2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfd2VicGFja19wcmVwcm9jZXNzX2xvYWRlcl9pbmRleF9qc19yZWZfMTJfMV9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zY3JpcHRfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc3R5bGVfanNfQXBwX3Z1ZV92dWVfdHlwZV9zY3JpcHRfbGFuZ19qc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmE7XG4gIC8qKiovXG59LFxuLyogNyAqL1xuXG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlcj8/cmVmLS0xMi0xIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhQzovVXNlcnMvcmhzdy9EZXNrdG9wL+aWsOW7uuaWh+S7tuWkuSAoNikvYmVhdXR5LWNhbGVuZGFyL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG5cbi8qKiovXG5mdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbiAgdmFyIF9kZWZhdWx0ID0ge1xuICAgIG9uTGF1bmNoOiBmdW5jdGlvbiBvbkxhdW5jaCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJyk7XG4gICAgfSxcbiAgICBvblNob3c6IGZ1bmN0aW9uIG9uU2hvdygpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBcHAgU2hvdycpO1xuICAgIH0sXG4gICAgb25IaWRlOiBmdW5jdGlvbiBvbkhpZGUoKSB7XG4gICAgICBjb25zb2xlLmxvZygnQXBwIEhpZGUnKTtcbiAgICB9XG4gIH07XG4gIGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4gIC8qKiovXG59LFxuLyogOCAqL1xuXG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogQzovVXNlcnMvcmhzdy9EZXNrdG9wL+aWsOW7uuaWh+S7tuWkuSAoNikvYmVhdXR5LWNhbGVuZGFyL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyYgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG5cbi8qKiovXG5mdW5jdGlvbiAobW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIF9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gIHZhciBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX21pbmlfY3NzX2V4dHJhY3RfcGx1Z2luX2Rpc3RfbG9hZGVyX2pzX3JlZl82X29uZU9mXzFfMF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfNl9vbmVPZl8xXzFfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3N0eWxlUG9zdExvYWRlcl9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8yX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3N0eWxlX2pzX0FwcF92dWVfdnVlX3R5cGVfc3R5bGVfaW5kZXhfMF9sYW5nX2Nzc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXG4gIC8qISAtIS4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXI/P3JlZi0tNi1vbmVPZi0xLTIhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjPz9yZWYtLTYtb25lT2YtMS0zIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWI/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyYgKi9cbiAgOSk7XG4gIC8qIGhhcm1vbnkgaW1wb3J0ICovXG5cblxuICB2YXIgX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19taW5pX2Nzc19leHRyYWN0X3BsdWdpbl9kaXN0X2xvYWRlcl9qc19yZWZfNl9vbmVPZl8xXzBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfcmVmXzZfb25lT2ZfMV8xX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc19zdHlsZVBvc3RMb2FkZXJfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl82X29uZU9mXzFfMl9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfcG9zdGNzc19sb2FkZXJfc3JjX2luZGV4X2pzX3JlZl82X29uZU9mXzFfM19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zdHlsZV9qc19BcHBfdnVlX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzBfbGFuZ19jc3NfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19taW5pX2Nzc19leHRyYWN0X3BsdWdpbl9kaXN0X2xvYWRlcl9qc19yZWZfNl9vbmVPZl8xXzBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfcmVmXzZfb25lT2ZfMV8xX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc19zdHlsZVBvc3RMb2FkZXJfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl82X29uZU9mXzFfMl9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfcG9zdGNzc19sb2FkZXJfc3JjX2luZGV4X2pzX3JlZl82X29uZU9mXzFfM19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zdHlsZV9qc19BcHBfdnVlX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzBfbGFuZ19jc3NfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuICAvKiBoYXJtb255IHJlZXhwb3J0ICh1bmtub3duKSAqL1xuXG5cbiAgZm9yICh2YXIgX19XRUJQQUNLX0lNUE9SVF9LRVlfXyBpbiBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX21pbmlfY3NzX2V4dHJhY3RfcGx1Z2luX2Rpc3RfbG9hZGVyX2pzX3JlZl82X29uZU9mXzFfMF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfNl9vbmVPZl8xXzFfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3N0eWxlUG9zdExvYWRlcl9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8yX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3N0eWxlX2pzX0FwcF92dWVfdnVlX3R5cGVfc3R5bGVfaW5kZXhfMF9sYW5nX2Nzc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXykge1xuICAgIGlmIChfX1dFQlBBQ0tfSU1QT1JUX0tFWV9fICE9PSAnZGVmYXVsdCcpIChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywga2V5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX21pbmlfY3NzX2V4dHJhY3RfcGx1Z2luX2Rpc3RfbG9hZGVyX2pzX3JlZl82X29uZU9mXzFfMF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfNl9vbmVPZl8xXzFfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3N0eWxlUG9zdExvYWRlcl9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8yX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3N0eWxlX2pzX0FwcF92dWVfdnVlX3R5cGVfc3R5bGVfaW5kZXhfMF9sYW5nX2Nzc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1trZXldO1xuICAgICAgfSk7XG4gICAgfSkoX19XRUJQQUNLX0lNUE9SVF9LRVlfXyk7XG4gIH1cbiAgLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqL1xuXG5cbiAgX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX21pbmlfY3NzX2V4dHJhY3RfcGx1Z2luX2Rpc3RfbG9hZGVyX2pzX3JlZl82X29uZU9mXzFfMF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfNl9vbmVPZl8xXzFfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3N0eWxlUG9zdExvYWRlcl9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8yX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3N0eWxlX2pzX0FwcF92dWVfdnVlX3R5cGVfc3R5bGVfaW5kZXhfMF9sYW5nX2Nzc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmE7XG4gIC8qKiovXG59LFxuLyogOSAqL1xuXG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXI/P3JlZi0tNi1vbmVPZi0xLTIhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjPz9yZWYtLTYtb25lT2YtMS0zIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWI/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyFDOi9Vc2Vycy9yaHN3L0Rlc2t0b3Av5paw5bu65paH5Lu25aS5ICg2KS9iZWF1dHktY2FsZW5kYXIvQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG5cbi8qKiovXG5mdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gIC8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICBpZiAoZmFsc2UpIHtcbiAgICB2YXIgY3NzUmVsb2FkO1xuICB9XG4gIC8qKiovXG5cbn1dLCBbWzAsIFwiY29tbW9uL3J1bnRpbWVcIiwgXCJjb21tb24vdmVuZG9yXCJdXV0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF90eXBlb2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIikpO1xuXG4hZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHZhciBhID0gRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuICAgIGEgJiYgIWEuTWF0aCAmJiAoT2JqZWN0LmFzc2lnbihhLCB7XG4gICAgICBpc0Zpbml0ZTogaXNGaW5pdGUsXG4gICAgICBBcnJheTogQXJyYXksXG4gICAgICBEYXRlOiBEYXRlLFxuICAgICAgRXJyb3I6IEVycm9yLFxuICAgICAgRnVuY3Rpb246IEZ1bmN0aW9uLFxuICAgICAgTWF0aDogTWF0aCxcbiAgICAgIE9iamVjdDogT2JqZWN0LFxuICAgICAgUmVnRXhwOiBSZWdFeHAsXG4gICAgICBTdHJpbmc6IFN0cmluZyxcbiAgICAgIFR5cGVFcnJvcjogVHlwZUVycm9yLFxuICAgICAgc2V0VGltZW91dDogc2V0VGltZW91dCxcbiAgICAgIGNsZWFyVGltZW91dDogY2xlYXJUaW1lb3V0LFxuICAgICAgc2V0SW50ZXJ2YWw6IHNldEludGVydmFsLFxuICAgICAgY2xlYXJJbnRlcnZhbDogY2xlYXJJbnRlcnZhbFxuICAgIH0pLCBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBSZWZsZWN0ICYmIChhLlJlZmxlY3QgPSBSZWZsZWN0KSk7XG4gIH0gY2F0Y2ggKGEpIHt9XG59KCk7XG4vKioqKioqL1xuXG4oZnVuY3Rpb24gKG1vZHVsZXMpIHtcbiAgLy8gd2VicGFja0Jvb3RzdHJhcFxuXG4gIC8qKioqKiovXG4gIC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuXG4gIC8qKioqKiovXG4gIGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiAgICAvKioqKioqL1xuICAgIHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gICAgLyoqKioqKi9cblxuICAgIHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gICAgLyoqKioqKi9cblxuICAgIHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG4gICAgLyoqKioqKi9cblxuICAgIC8qKioqKiovXG4gICAgLy8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cbiAgICAvKioqKioqL1xuICAgIC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXG4gICAgLyoqKioqKi9cblxuICAgIHZhciBtb2R1bGVJZCxcbiAgICAgICAgY2h1bmtJZCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHJlc29sdmVzID0gW107XG4gICAgLyoqKioqKi9cblxuICAgIGZvciAoOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8qKioqKiovXG4gICAgICBjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gICAgICAvKioqKioqL1xuXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiAgICAgICAgLyoqKioqKi9cbiAgICAgIH1cbiAgICAgIC8qKioqKiovXG5cblxuICAgICAgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiAgICAgIC8qKioqKiovXG4gICAgfVxuICAgIC8qKioqKiovXG5cblxuICAgIGZvciAobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiAgICAgIC8qKioqKiovXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiAgICAgICAgLyoqKioqKi9cbiAgICAgICAgbW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gICAgICAgIC8qKioqKiovXG4gICAgICB9XG4gICAgICAvKioqKioqL1xuXG4gICAgfVxuICAgIC8qKioqKiovXG5cblxuICAgIGlmIChwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuICAgIC8qKioqKiovXG5cbiAgICAvKioqKioqL1xuXG4gICAgd2hpbGUgKHJlc29sdmVzLmxlbmd0aCkge1xuICAgICAgLyoqKioqKi9cbiAgICAgIHJlc29sdmVzLnNoaWZ0KCkoKTtcbiAgICAgIC8qKioqKiovXG4gICAgfVxuICAgIC8qKioqKiovXG5cbiAgICAvKioqKioqL1xuICAgIC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcblxuICAgIC8qKioqKiovXG5cblxuICAgIGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuICAgIC8qKioqKiovXG5cbiAgICAvKioqKioqL1xuICAgIC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuXG4gICAgLyoqKioqKi9cblxuICAgIHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuICAgIC8qKioqKiovXG4gIH1cblxuICA7XG4gIC8qKioqKiovXG5cbiAgZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gICAgLyoqKioqKi9cbiAgICB2YXIgcmVzdWx0O1xuICAgIC8qKioqKiovXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgLyoqKioqKi9cbiAgICAgIHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiAgICAgIC8qKioqKiovXG5cbiAgICAgIHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuICAgICAgLyoqKioqKi9cblxuICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuICAgICAgICAvKioqKioqL1xuICAgICAgICB2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICBpZiAoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gICAgICAgIC8qKioqKiovXG4gICAgICB9XG4gICAgICAvKioqKioqL1xuXG5cbiAgICAgIGlmIChmdWxmaWxsZWQpIHtcbiAgICAgICAgLyoqKioqKi9cbiAgICAgICAgZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuICAgICAgICAvKioqKioqL1xuICAgICAgfVxuICAgICAgLyoqKioqKi9cblxuICAgIH1cbiAgICAvKioqKioqL1xuXG4gICAgLyoqKioqKi9cblxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgICAvKioqKioqL1xuICB9XG4gIC8qKioqKiovXG5cbiAgLyoqKioqKi9cbiAgLy8gVGhlIG1vZHVsZSBjYWNoZVxuXG4gIC8qKioqKiovXG5cblxuICB2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuICAvKioqKioqL1xuXG4gIC8qKioqKiovXG4gIC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgQ1NTIGNodW5rc1xuXG4gIC8qKioqKiovXG5cbiAgdmFyIGluc3RhbGxlZENzc0NodW5rcyA9IHtcbiAgICAvKioqKioqL1xuICAgIFwiY29tbW9uL3J1bnRpbWVcIjogMFxuICAgIC8qKioqKiovXG5cbiAgfTtcbiAgLyoqKioqKi9cblxuICAvKioqKioqL1xuICAvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuXG4gIC8qKioqKiovXG4gIC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuXG4gIC8qKioqKiovXG4gIC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG5cbiAgLyoqKioqKi9cblxuICB2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuICAgIC8qKioqKiovXG4gICAgXCJjb21tb24vcnVudGltZVwiOiAwXG4gICAgLyoqKioqKi9cblxuICB9O1xuICAvKioqKioqL1xuXG4gIC8qKioqKiovXG5cbiAgdmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuICAvKioqKioqL1xuXG4gIC8qKioqKiovXG4gIC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG5cbiAgLyoqKioqKi9cblxuICBmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gICAgLyoqKioqKi9cbiAgICByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiO1xuICAgIC8qKioqKiovXG4gIH1cbiAgLyoqKioqKi9cblxuICAvKioqKioqL1xuICAvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuXG4gIC8qKioqKiovXG5cblxuICBmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4gICAgLyoqKioqKi9cblxuICAgIC8qKioqKiovXG4gICAgLy8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cbiAgICAvKioqKioqL1xuICAgIGlmIChpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuICAgICAgLyoqKioqKi9cbiAgICAgIHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuICAgICAgLyoqKioqKi9cbiAgICB9XG4gICAgLyoqKioqKi9cbiAgICAvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXG4gICAgLyoqKioqKi9cblxuXG4gICAgdmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuICAgICAgLyoqKioqKi9cbiAgICAgIGk6IG1vZHVsZUlkLFxuXG4gICAgICAvKioqKioqL1xuICAgICAgbDogZmFsc2UsXG5cbiAgICAgIC8qKioqKiovXG4gICAgICBleHBvcnRzOiB7fVxuICAgICAgLyoqKioqKi9cblxuICAgIH07XG4gICAgLyoqKioqKi9cblxuICAgIC8qKioqKiovXG4gICAgLy8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cbiAgICAvKioqKioqL1xuXG4gICAgbW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gICAgLyoqKioqKi9cblxuICAgIC8qKioqKiovXG4gICAgLy8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXG4gICAgLyoqKioqKi9cblxuICAgIG1vZHVsZS5sID0gdHJ1ZTtcbiAgICAvKioqKioqL1xuXG4gICAgLyoqKioqKi9cbiAgICAvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXG4gICAgLyoqKioqKi9cblxuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiAgICAvKioqKioqL1xuICB9XG4gIC8qKioqKiovXG5cbiAgLyoqKioqKi9cbiAgLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuXG4gIC8qKioqKiovXG4gIC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuXG4gIC8qKioqKiovXG5cblxuICBfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiAgICAvKioqKioqL1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIC8qKioqKiovXG5cbiAgICAvKioqKioqL1xuXG4gICAgLyoqKioqKi9cbiAgICAvLyBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiBDU1MgbG9hZGluZ1xuXG4gICAgLyoqKioqKi9cblxuICAgIHZhciBjc3NDaHVua3MgPSB7XG4gICAgICBcImNvbXBvbmVudHMvYmVhdXR5LWNhbGVuZGFyL2JlYXV0eS1jYWxlbmRhclwiOiAxXG4gICAgfTtcbiAgICAvKioqKioqL1xuXG4gICAgaWYgKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSkgcHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pO1xuICAgIC8qKioqKiovXG4gICAgZWxzZSBpZiAoaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdICE9PSAwICYmIGNzc0NodW5rc1tjaHVua0lkXSkge1xuICAgICAgICAvKioqKioqL1xuICAgICAgICBwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgIHZhciBocmVmID0gXCJcIiArICh7XG4gICAgICAgICAgICBcImNvbXBvbmVudHMvYmVhdXR5LWNhbGVuZGFyL2JlYXV0eS1jYWxlbmRhclwiOiBcImNvbXBvbmVudHMvYmVhdXR5LWNhbGVuZGFyL2JlYXV0eS1jYWxlbmRhclwiXG4gICAgICAgICAgfVtjaHVua0lkXSB8fCBjaHVua0lkKSArIFwiLmNzc1wiO1xuICAgICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgICB2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuICAgICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgICB2YXIgZXhpc3RpbmdMaW5rVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcbiAgICAgICAgICAvKioqKioqL1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGlzdGluZ0xpbmtUYWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgdmFyIHRhZyA9IGV4aXN0aW5nTGlua1RhZ3NbaV07XG4gICAgICAgICAgICAvKioqKioqL1xuXG4gICAgICAgICAgICB2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpIHx8IHRhZy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgICAgICAgLyoqKioqKi9cblxuICAgICAgICAgICAgaWYgKHRhZy5yZWwgPT09IFwic3R5bGVzaGVldFwiICYmIChkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpKSByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgLyoqKioqKi9cblxuXG4gICAgICAgICAgdmFyIGV4aXN0aW5nU3R5bGVUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcbiAgICAgICAgICAvKioqKioqL1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1N0eWxlVGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgIHZhciB0YWcgPSBleGlzdGluZ1N0eWxlVGFnc1tpXTtcbiAgICAgICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgICAgIHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7XG4gICAgICAgICAgICAvKioqKioqL1xuXG4gICAgICAgICAgICBpZiAoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgLyoqKioqKi9cblxuXG4gICAgICAgICAgdmFyIGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICAgICAgICAvKioqKioqL1xuXG4gICAgICAgICAgbGlua1RhZy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgICAgICAgICAvKioqKioqL1xuXG4gICAgICAgICAgbGlua1RhZy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgICBsaW5rVGFnLm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgICAgLyoqKioqKi9cblxuICAgICAgICAgIGxpbmtUYWcub25lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmMgfHwgZnVsbGhyZWY7XG4gICAgICAgICAgICAvKioqKioqL1xuXG4gICAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFwiTG9hZGluZyBDU1MgY2h1bmsgXCIgKyBjaHVua0lkICsgXCIgZmFpbGVkLlxcbihcIiArIHJlcXVlc3QgKyBcIilcIik7XG4gICAgICAgICAgICAvKioqKioqL1xuXG4gICAgICAgICAgICBlcnIuY29kZSA9IFwiQ1NTX0NIVU5LX0xPQURfRkFJTEVEXCI7XG4gICAgICAgICAgICAvKioqKioqL1xuXG4gICAgICAgICAgICBlcnIucmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgICAgICAgICAvKioqKioqL1xuXG4gICAgICAgICAgICBkZWxldGUgaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdO1xuICAgICAgICAgICAgLyoqKioqKi9cblxuICAgICAgICAgICAgbGlua1RhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmtUYWcpO1xuICAgICAgICAgICAgLyoqKioqKi9cblxuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgIH07XG4gICAgICAgICAgLyoqKioqKi9cblxuXG4gICAgICAgICAgbGlua1RhZy5ocmVmID0gZnVsbGhyZWY7XG4gICAgICAgICAgLyoqKioqKi9cblxuICAgICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcbiAgICAgICAgICAvKioqKioqL1xuXG4gICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChsaW5rVGFnKTtcbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgIGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IDA7XG4gICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgfSkpO1xuICAgICAgICAvKioqKioqL1xuICAgICAgfVxuICAgIC8qKioqKiovXG5cbiAgICAvKioqKioqL1xuICAgIC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuICAgIC8qKioqKiovXG5cbiAgICAvKioqKioqL1xuXG4gICAgdmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiAgICAvKioqKioqL1xuXG4gICAgaWYgKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkge1xuICAgICAgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiAgICAgIC8qKioqKiovXG5cbiAgICAgIC8qKioqKiovXG4gICAgICAvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXG4gICAgICAvKioqKioqL1xuICAgICAgaWYgKGluc3RhbGxlZENodW5rRGF0YSkge1xuICAgICAgICAvKioqKioqL1xuICAgICAgICBwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gICAgICAgIC8qKioqKiovXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKioqKioqL1xuICAgICAgICAvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cbiAgICAgICAgLyoqKioqKi9cbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICB9KTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICBwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblxuICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICB2YXIgb25TY3JpcHRDb21wbGV0ZTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICBzY3JpcHQudGltZW91dCA9IDEyMDtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICBpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuICAgICAgICAgIC8qKioqKiovXG4gICAgICAgIH1cbiAgICAgICAgLyoqKioqKi9cblxuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICAvKioqKioqL1xuICAgICAgICAvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICBvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gb25TY3JpcHRDb21wbGV0ZShldmVudCkge1xuICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgLy8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXG4gICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICBzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuICAgICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgLyoqKioqKi9cblxuICAgICAgICAgIHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiAgICAgICAgICAvKioqKioqL1xuXG4gICAgICAgICAgaWYgKGNodW5rICE9PSAwKSB7XG4gICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgaWYgKGNodW5rKSB7XG4gICAgICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgICAgIHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gICAgICAgICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgICAgICAgdmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiAgICAgICAgICAgICAgLyoqKioqKi9cblxuICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuICAgICAgICAgICAgICAvKioqKioqL1xuXG4gICAgICAgICAgICAgIGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuICAgICAgICAgICAgICAvKioqKioqL1xuXG4gICAgICAgICAgICAgIGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gICAgICAgICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgICAgICAgZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gICAgICAgICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgICAgICAgY2h1bmtbMV0oZXJyb3IpO1xuICAgICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqKioqKi9cblxuXG4gICAgICAgICAgICBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIH07XG4gICAgICAgIC8qKioqKiovXG5cblxuICAgICAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgb25TY3JpcHRDb21wbGV0ZSh7XG4gICAgICAgICAgICB0eXBlOiAndGltZW91dCcsXG4gICAgICAgICAgICB0YXJnZXQ6IHNjcmlwdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8qKioqKiovXG4gICAgICAgIH0sIDEyMDAwMCk7XG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIC8qKioqKiovXG4gICAgICB9XG4gICAgICAvKioqKioqL1xuXG4gICAgfVxuICAgIC8qKioqKiovXG5cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgLyoqKioqKi9cbiAgfTtcbiAgLyoqKioqKi9cblxuICAvKioqKioqL1xuICAvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuXG4gIC8qKioqKiovXG5cblxuICBfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuICAvKioqKioqL1xuXG4gIC8qKioqKiovXG4gIC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5cbiAgLyoqKioqKi9cblxuICBfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuICAvKioqKioqL1xuXG4gIC8qKioqKiovXG4gIC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuXG4gIC8qKioqKiovXG5cbiAgX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24gKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuICAgIC8qKioqKiovXG4gICAgaWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiAgICAgIC8qKioqKiovXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGdldHRlclxuICAgICAgfSk7XG4gICAgICAvKioqKioqL1xuICAgIH1cbiAgICAvKioqKioqL1xuXG4gIH07XG4gIC8qKioqKiovXG5cbiAgLyoqKioqKi9cbiAgLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuXG4gIC8qKioqKiovXG5cblxuICBfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbiAoZXhwb3J0cykge1xuICAgIC8qKioqKiovXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuICAgICAgLyoqKioqKi9cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgdmFsdWU6ICdNb2R1bGUnXG4gICAgICB9KTtcbiAgICAgIC8qKioqKiovXG4gICAgfVxuICAgIC8qKioqKiovXG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqKioqKi9cbiAgfTtcbiAgLyoqKioqKi9cblxuICAvKioqKioqL1xuICAvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcblxuICAvKioqKioqL1xuICAvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcblxuICAvKioqKioqL1xuICAvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcblxuICAvKioqKioqL1xuICAvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcblxuICAvKioqKioqL1xuICAvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5cbiAgLyoqKioqKi9cblxuXG4gIF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uICh2YWx1ZSwgbW9kZSkge1xuICAgIC8qKioqKiovXG4gICAgaWYgKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuICAgIC8qKioqKiovXG5cbiAgICBpZiAobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiAgICAvKioqKioqL1xuXG4gICAgaWYgKG1vZGUgJiA0ICYmICgwLCBfdHlwZW9mMltcImRlZmF1bHRcIl0pKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuICAgIC8qKioqKiovXG5cbiAgICB2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIC8qKioqKiovXG5cbiAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuICAgIC8qKioqKiovXG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG4gICAgLyoqKioqKi9cblxuICAgIGlmIChtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlW2tleV07XG4gICAgICB9LmJpbmQobnVsbCwga2V5KSk7XG4gICAgfVxuICAgIC8qKioqKiovXG5cbiAgICByZXR1cm4gbnM7XG4gICAgLyoqKioqKi9cbiAgfTtcbiAgLyoqKioqKi9cblxuICAvKioqKioqL1xuICAvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuXG4gIC8qKioqKiovXG5cblxuICBfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbiAobW9kdWxlKSB7XG4gICAgLyoqKioqKi9cbiAgICB2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiAgICAvKioqKioqL1xuICAgIGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107XG4gICAgfSA6XG4gICAgLyoqKioqKi9cbiAgICBmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkge1xuICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICB9O1xuICAgIC8qKioqKiovXG5cbiAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gICAgLyoqKioqKi9cblxuXG4gICAgcmV0dXJuIGdldHRlcjtcbiAgICAvKioqKioqL1xuICB9O1xuICAvKioqKioqL1xuXG4gIC8qKioqKiovXG4gIC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuXG4gIC8qKioqKiovXG5cblxuICBfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7XG4gIH07XG4gIC8qKioqKiovXG5cbiAgLyoqKioqKi9cbiAgLy8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cblxuICAvKioqKioqL1xuXG5cbiAgX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG4gIC8qKioqKiovXG5cbiAgLyoqKioqKi9cbiAgLy8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcblxuICAvKioqKioqL1xuXG4gIF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgLyoqKioqKi9cblxuICAvKioqKioqL1xuXG5cbiAgdmFyIGpzb25wQXJyYXkgPSBnbG9iYWxbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBnbG9iYWxbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gIC8qKioqKiovXG5cbiAgdmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiAgLyoqKioqKi9cblxuICBqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiAgLyoqKioqKi9cblxuICBqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuICAvKioqKioqL1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuICB9XG4gIC8qKioqKiovXG5cblxuICB2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG4gIC8qKioqKiovXG5cbiAgLyoqKioqKi9cblxuICAvKioqKioqL1xuICAvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyBmcm9tIG90aGVyIGNodW5rc1xuXG4gIC8qKioqKiovXG5cbiAgY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiAgLyoqKioqKi9cbn0pKFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqKioqKi9cbltdKTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQyID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX3R5cGVvZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0MihyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIikpO1xuXG4oZ2xvYmFsW1wid2VicGFja0pzb25wXCJdID0gZ2xvYmFsW1wid2VicGFja0pzb25wXCJdIHx8IFtdKS5wdXNoKFtbXCJjb21tb24vdmVuZG9yXCJdLCBbLFxuLyogMCAqL1xuXG4vKiAxICovXG5cbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1xdWlja2FwcC13ZWJ2aWV3L2Rpc3QvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuXG4vKioqL1xuZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5jcmVhdGVBcHAgPSBjcmVhdGVBcHA7XG4gIGV4cG9ydHMuY3JlYXRlQ29tcG9uZW50ID0gY3JlYXRlQ29tcG9uZW50O1xuICBleHBvcnRzLmNyZWF0ZVBhZ2UgPSBjcmVhdGVQYWdlO1xuICBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxuICB2YXIgX3Z1ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgLyohIHZ1ZSAqL1xuICAyKSk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSk7XG4gICAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXM7XG4gIH1cblxuICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgICAgaWYgKGkgJSAyKSB7XG4gICAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICAgIGlmICghbykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICAgIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gICAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG4gIH1cblxuICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG4gIH1cblxuICBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICAgIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9XG5cbiAgdmFyIF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgZnVuY3Rpb24gaXNGbihmbikge1xuICAgIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N0cihzdHIpIHtcbiAgICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc093bihvYmosIGtleSkge1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vb3AoKSB7fVxuICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgKi9cblxuXG4gIGZ1bmN0aW9uIGNhY2hlZChmbikge1xuICAgIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuKHN0cikge1xuICAgICAgdmFyIGhpdCA9IGNhY2hlW3N0cl07XG4gICAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSk7XG4gICAgfTtcbiAgfVxuICAvKipcclxuICAgICAqIENhbWVsaXplIGEgaHlwaGVuLWRlbGltaXRlZCBzdHJpbmcuXHJcbiAgICAgKi9cblxuXG4gIHZhciBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xuICB2YXIgY2FtZWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCBmdW5jdGlvbiAoXywgYykge1xuICAgICAgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJztcbiAgICB9KTtcbiAgfSk7XG4gIHZhciBIT09LUyA9IFsnaW52b2tlJywgJ3N1Y2Nlc3MnLCAnZmFpbCcsICdjb21wbGV0ZScsICdyZXR1cm5WYWx1ZSddO1xuICB2YXIgZ2xvYmFsSW50ZXJjZXB0b3JzID0ge307XG4gIHZhciBzY29wZWRJbnRlcmNlcHRvcnMgPSB7fTtcblxuICBmdW5jdGlvbiBtZXJnZUhvb2socGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICAgIHZhciByZXMgPSBjaGlsZFZhbCA/IHBhcmVudFZhbCA/IHBhcmVudFZhbC5jb25jYXQoY2hpbGRWYWwpIDogQXJyYXkuaXNBcnJheShjaGlsZFZhbCkgPyBjaGlsZFZhbCA6IFtjaGlsZFZhbF0gOiBwYXJlbnRWYWw7XG4gICAgcmV0dXJuIHJlcyA/IGRlZHVwZUhvb2tzKHJlcykgOiByZXM7XG4gIH1cblxuICBmdW5jdGlvbiBkZWR1cGVIb29rcyhob29rcykge1xuICAgIHZhciByZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZXMuaW5kZXhPZihob29rc1tpXSkgPT09IC0xKSB7XG4gICAgICAgIHJlcy5wdXNoKGhvb2tzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlSG9vayhob29rcywgaG9vaykge1xuICAgIHZhciBpbmRleCA9IGhvb2tzLmluZGV4T2YoaG9vayk7XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBob29rcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlSW50ZXJjZXB0b3JIb29rKGludGVyY2VwdG9yLCBvcHRpb24pIHtcbiAgICBPYmplY3Qua2V5cyhvcHRpb24pLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgIGlmIChIT09LUy5pbmRleE9mKGhvb2spICE9PSAtMSAmJiBpc0ZuKG9wdGlvbltob29rXSkpIHtcbiAgICAgICAgaW50ZXJjZXB0b3JbaG9va10gPSBtZXJnZUhvb2soaW50ZXJjZXB0b3JbaG9va10sIG9wdGlvbltob29rXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVJbnRlcmNlcHRvckhvb2soaW50ZXJjZXB0b3IsIG9wdGlvbikge1xuICAgIGlmICghaW50ZXJjZXB0b3IgfHwgIW9wdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKG9wdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgICAgaWYgKEhPT0tTLmluZGV4T2YoaG9vaykgIT09IC0xICYmIGlzRm4ob3B0aW9uW2hvb2tdKSkge1xuICAgICAgICByZW1vdmVIb29rKGludGVyY2VwdG9yW2hvb2tdLCBvcHRpb25baG9va10pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkSW50ZXJjZXB0b3IobWV0aG9kLCBvcHRpb24pIHtcbiAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycgJiYgaXNQbGFpbk9iamVjdChvcHRpb24pKSB7XG4gICAgICBtZXJnZUludGVyY2VwdG9ySG9vayhzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXSB8fCAoc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF0gPSB7fSksIG9wdGlvbik7XG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KG1ldGhvZCkpIHtcbiAgICAgIG1lcmdlSW50ZXJjZXB0b3JIb29rKGdsb2JhbEludGVyY2VwdG9ycywgbWV0aG9kKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVJbnRlcmNlcHRvcihtZXRob2QsIG9wdGlvbikge1xuICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGlzUGxhaW5PYmplY3Qob3B0aW9uKSkge1xuICAgICAgICByZW1vdmVJbnRlcmNlcHRvckhvb2soc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF0sIG9wdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KG1ldGhvZCkpIHtcbiAgICAgIHJlbW92ZUludGVyY2VwdG9ySG9vayhnbG9iYWxJbnRlcmNlcHRvcnMsIG1ldGhvZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gd3JhcHBlckhvb2soaG9vaykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgcmV0dXJuIGhvb2soZGF0YSkgfHwgZGF0YTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICAgIHJldHVybiAhIW9iaiAmJiAoKDAsIF90eXBlb2YyW1wiZGVmYXVsdFwiXSkob2JqKSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVldWUoaG9va3MsIGRhdGEpIHtcbiAgICB2YXIgcHJvbWlzZSA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGhvb2sgPSBob29rc1tpXTtcblxuICAgICAgaWYgKHByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh3cmFwcGVySG9vayhob29rKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzID0gaG9vayhkYXRhKTtcblxuICAgICAgICBpZiAoaXNQcm9taXNlKHJlcykpIHtcbiAgICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHJlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKCkge31cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2UgfHwge1xuICAgICAgdGhlbjogZnVuY3Rpb24gdGhlbihjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXBwZXJPcHRpb25zKGludGVyY2VwdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIFsnc3VjY2VzcycsICdmYWlsJywgJ2NvbXBsZXRlJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW50ZXJjZXB0b3JbbmFtZV0pKSB7XG4gICAgICAgIHZhciBvbGRDYWxsYmFjayA9IG9wdGlvbnNbbmFtZV07XG5cbiAgICAgICAgb3B0aW9uc1tuYW1lXSA9IGZ1bmN0aW9uIGNhbGxiYWNrSW50ZXJjZXB0b3IocmVzKSB7XG4gICAgICAgICAgcXVldWUoaW50ZXJjZXB0b3JbbmFtZV0sIHJlcykudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cbiAgICAgICAgICAgIHJldHVybiBpc0ZuKG9sZENhbGxiYWNrKSAmJiBvbGRDYWxsYmFjayhyZXMpIHx8IHJlcztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXBwZXJSZXR1cm5WYWx1ZShtZXRob2QsIHJldHVyblZhbHVlKSB7XG4gICAgdmFyIHJldHVyblZhbHVlSG9va3MgPSBbXTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGdsb2JhbEludGVyY2VwdG9ycy5yZXR1cm5WYWx1ZSkpIHtcbiAgICAgIHJldHVyblZhbHVlSG9va3MucHVzaC5hcHBseShyZXR1cm5WYWx1ZUhvb2tzLCBfdG9Db25zdW1hYmxlQXJyYXkoZ2xvYmFsSW50ZXJjZXB0b3JzLnJldHVyblZhbHVlKSk7XG4gICAgfVxuXG4gICAgdmFyIGludGVyY2VwdG9yID0gc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF07XG5cbiAgICBpZiAoaW50ZXJjZXB0b3IgJiYgQXJyYXkuaXNBcnJheShpbnRlcmNlcHRvci5yZXR1cm5WYWx1ZSkpIHtcbiAgICAgIHJldHVyblZhbHVlSG9va3MucHVzaC5hcHBseShyZXR1cm5WYWx1ZUhvb2tzLCBfdG9Db25zdW1hYmxlQXJyYXkoaW50ZXJjZXB0b3IucmV0dXJuVmFsdWUpKTtcbiAgICB9XG5cbiAgICByZXR1cm5WYWx1ZUhvb2tzLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgIHJldHVyblZhbHVlID0gaG9vayhyZXR1cm5WYWx1ZSkgfHwgcmV0dXJuVmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXBpSW50ZXJjZXB0b3JIb29rcyhtZXRob2QpIHtcbiAgICB2YXIgaW50ZXJjZXB0b3IgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIE9iamVjdC5rZXlzKGdsb2JhbEludGVyY2VwdG9ycykuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgICAgaWYgKGhvb2sgIT09ICdyZXR1cm5WYWx1ZScpIHtcbiAgICAgICAgaW50ZXJjZXB0b3JbaG9va10gPSBnbG9iYWxJbnRlcmNlcHRvcnNbaG9va10uc2xpY2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgc2NvcGVkSW50ZXJjZXB0b3IgPSBzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXTtcblxuICAgIGlmIChzY29wZWRJbnRlcmNlcHRvcikge1xuICAgICAgT2JqZWN0LmtleXMoc2NvcGVkSW50ZXJjZXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgICAgaWYgKGhvb2sgIT09ICdyZXR1cm5WYWx1ZScpIHtcbiAgICAgICAgICBpbnRlcmNlcHRvcltob29rXSA9IChpbnRlcmNlcHRvcltob29rXSB8fCBbXSkuY29uY2F0KHNjb3BlZEludGVyY2VwdG9yW2hvb2tdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVyY2VwdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlQXBpKG1ldGhvZCwgYXBpLCBvcHRpb25zKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IG5ldyBBcnJheShfbGVuID4gMyA/IF9sZW4gLSAzIDogMCksIF9rZXkgPSAzOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBwYXJhbXNbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBpbnRlcmNlcHRvciA9IGdldEFwaUludGVyY2VwdG9ySG9va3MobWV0aG9kKTtcblxuICAgIGlmIChpbnRlcmNlcHRvciAmJiBPYmplY3Qua2V5cyhpbnRlcmNlcHRvcikubGVuZ3RoKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpbnRlcmNlcHRvci5pbnZva2UpKSB7XG4gICAgICAgIHZhciByZXMgPSBxdWV1ZShpbnRlcmNlcHRvci5pbnZva2UsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gcmVzLnRoZW4oZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICByZXR1cm4gYXBpLmFwcGx5KHZvaWQgMCwgW3dyYXBwZXJPcHRpb25zKGludGVyY2VwdG9yLCBvcHRpb25zKV0uY29uY2F0KHBhcmFtcykpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhcGkuYXBwbHkodm9pZCAwLCBbd3JhcHBlck9wdGlvbnMoaW50ZXJjZXB0b3IsIG9wdGlvbnMpXS5jb25jYXQocGFyYW1zKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFwaS5hcHBseSh2b2lkIDAsIFtvcHRpb25zXS5jb25jYXQocGFyYW1zKSk7XG4gIH1cblxuICB2YXIgcHJvbWlzZUludGVyY2VwdG9yID0ge1xuICAgIHJldHVyblZhbHVlOiBmdW5jdGlvbiByZXR1cm5WYWx1ZShyZXMpIHtcbiAgICAgIGlmICghaXNQcm9taXNlKHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcy50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgcmV0dXJuIHJlc1sxXTtcbiAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICByZXR1cm4gcmVzWzBdO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICB2YXIgU1lOQ19BUElfUkUgPSAvXlxcJHxzZW5kTmF0aXZlRXZlbnR8cmVzdG9yZUdsb2JhbHxnZXRDdXJyZW50U3ViTlZ1ZXxnZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0fF5yZXBvcnR8aW50ZXJjZXB0b3JzfEludGVyY2VwdG9yJHxnZXRTdWJOVnVlQnlJZHxyZXF1aXJlTmF0aXZlUGx1Z2lufHVweDJweHxoaWRlS2V5Ym9hcmR8Y2FuSVVzZXxeY3JlYXRlfFN5bmMkfE1hbmFnZXIkfGJhc2U2NFRvQXJyYXlCdWZmZXJ8YXJyYXlCdWZmZXJUb0Jhc2U2NC87XG4gIHZhciBDT05URVhUX0FQSV9SRSA9IC9eY3JlYXRlfE1hbmFnZXIkLzsgLy8gQ29udGV4dOS+i+WkluaDheWGtVxuXG4gIHZhciBDT05URVhUX0FQSV9SRV9FWEMgPSBbJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nXTsgLy8g5ZCM5q2l5L6L5aSW5oOF5Ya1XG5cbiAgdmFyIEFTWU5DX0FQSSA9IFsnY3JlYXRlQkxFQ29ubmVjdGlvbiddO1xuICB2YXIgQ0FMTEJBQ0tfQVBJX1JFID0gL15vbnxeb2ZmLztcblxuICBmdW5jdGlvbiBpc0NvbnRleHRBcGkobmFtZSkge1xuICAgIHJldHVybiBDT05URVhUX0FQSV9SRS50ZXN0KG5hbWUpICYmIENPTlRFWFRfQVBJX1JFX0VYQy5pbmRleE9mKG5hbWUpID09PSAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3luY0FwaShuYW1lKSB7XG4gICAgcmV0dXJuIFNZTkNfQVBJX1JFLnRlc3QobmFtZSkgJiYgQVNZTkNfQVBJLmluZGV4T2YobmFtZSkgPT09IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNDYWxsYmFja0FwaShuYW1lKSB7XG4gICAgcmV0dXJuIENBTExCQUNLX0FQSV9SRS50ZXN0KG5hbWUpICYmIG5hbWUgIT09ICdvblB1c2gnO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUHJvbWlzZShwcm9taXNlKSB7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgcmV0dXJuIFtudWxsLCBkYXRhXTtcbiAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHJldHVybiBbZXJyXTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZFByb21pc2UobmFtZSkge1xuICAgIGlmIChpc0NvbnRleHRBcGkobmFtZSkgfHwgaXNTeW5jQXBpKG5hbWUpIHx8IGlzQ2FsbGJhY2tBcGkobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1leHRlbmQtbmF0aXZlICovXG5cblxuICBpZiAoIVByb21pc2UucHJvdG90eXBlW1wiZmluYWxseVwiXSkge1xuICAgIFByb21pc2UucHJvdG90eXBlW1wiZmluYWxseVwiXSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRocm93IHJlYXNvbjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvbWlzaWZ5KG5hbWUsIGFwaSkge1xuICAgIGlmICghc2hvdWxkUHJvbWlzZShuYW1lKSkge1xuICAgICAgcmV0dXJuIGFwaTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gcHJvbWlzZUFwaSgpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBwYXJhbXNbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0ZuKG9wdGlvbnMuc3VjY2VzcykgfHwgaXNGbihvcHRpb25zLmZhaWwpIHx8IGlzRm4ob3B0aW9ucy5jb21wbGV0ZSkpIHtcbiAgICAgICAgcmV0dXJuIHdyYXBwZXJSZXR1cm5WYWx1ZShuYW1lLCBpbnZva2VBcGkuYXBwbHkodm9pZCAwLCBbbmFtZSwgYXBpLCBvcHRpb25zXS5jb25jYXQocGFyYW1zKSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gd3JhcHBlclJldHVyblZhbHVlKG5hbWUsIGhhbmRsZVByb21pc2UobmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpbnZva2VBcGkuYXBwbHkodm9pZCAwLCBbbmFtZSwgYXBpLCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgICAgICBmYWlsOiByZWplY3RcbiAgICAgICAgfSldLmNvbmNhdChwYXJhbXMpKTtcbiAgICAgIH0pKSk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBFUFMgPSAxZS00O1xuICB2YXIgQkFTRV9ERVZJQ0VfV0lEVEggPSA3NTA7XG4gIHZhciBpc0lPUyA9IGZhbHNlO1xuICB2YXIgZGV2aWNlV2lkdGggPSAwO1xuICB2YXIgZGV2aWNlRFBSID0gMDtcblxuICBmdW5jdGlvbiBjaGVja0RldmljZVdpZHRoKCkge1xuICAgIHZhciBfcWEkZ2V0U3lzdGVtSW5mb1N5bmMgPSBxYS5nZXRTeXN0ZW1JbmZvU3luYygpLFxuICAgICAgICBwbGF0Zm9ybSA9IF9xYSRnZXRTeXN0ZW1JbmZvU3luYy5wbGF0Zm9ybSxcbiAgICAgICAgcGl4ZWxSYXRpbyA9IF9xYSRnZXRTeXN0ZW1JbmZvU3luYy5waXhlbFJhdGlvLFxuICAgICAgICB3aW5kb3dXaWR0aCA9IF9xYSRnZXRTeXN0ZW1JbmZvU3luYy53aW5kb3dXaWR0aDsgLy8gdW5pPT5xYSBydW50aW1lIOe8luivkeebruagh+aYryB1bmkg5a+56LGh77yM5YaF6YOo5LiN5YWB6K6455u05o6l5L2/55SoIHVuaVxuXG5cbiAgICBkZXZpY2VXaWR0aCA9IHdpbmRvd1dpZHRoO1xuICAgIGRldmljZURQUiA9IHBpeGVsUmF0aW87XG4gICAgaXNJT1MgPSBwbGF0Zm9ybSA9PT0gJ2lvcyc7XG4gIH1cblxuICBmdW5jdGlvbiB1cHgycHgobnVtYmVyLCBuZXdEZXZpY2VXaWR0aCkge1xuICAgIGlmIChkZXZpY2VXaWR0aCA9PT0gMCkge1xuICAgICAgY2hlY2tEZXZpY2VXaWR0aCgpO1xuICAgIH1cblxuICAgIG51bWJlciA9IE51bWJlcihudW1iZXIpO1xuXG4gICAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IG51bWJlciAvIEJBU0VfREVWSUNFX1dJRFRIICogKG5ld0RldmljZVdpZHRoIHx8IGRldmljZVdpZHRoKTtcblxuICAgIGlmIChyZXN1bHQgPCAwKSB7XG4gICAgICByZXN1bHQgPSAtcmVzdWx0O1xuICAgIH1cblxuICAgIHJlc3VsdCA9IE1hdGguZmxvb3IocmVzdWx0ICsgRVBTKTtcblxuICAgIGlmIChyZXN1bHQgPT09IDApIHtcbiAgICAgIGlmIChkZXZpY2VEUFIgPT09IDEgfHwgIWlzSU9TKSB7XG4gICAgICAgIHJlc3VsdCA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAwLjU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bWJlciA8IDAgPyAtcmVzdWx0IDogcmVzdWx0O1xuICB9XG5cbiAgdmFyIGludGVyY2VwdG9ycyA9IHtcbiAgICBwcm9taXNlSW50ZXJjZXB0b3I6IHByb21pc2VJbnRlcmNlcHRvclxuICB9O1xuICB2YXIgYmFzZUFwaSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgdXB4MnB4OiB1cHgycHgsXG4gICAgYWRkSW50ZXJjZXB0b3I6IGFkZEludGVyY2VwdG9yLFxuICAgIHJlbW92ZUludGVyY2VwdG9yOiByZW1vdmVJbnRlcmNlcHRvcixcbiAgICBpbnRlcmNlcHRvcnM6IGludGVyY2VwdG9yc1xuICB9KTtcblxuICB2YXIgRXZlbnRDaGFubmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudENoYW5uZWwoaWQsIGV2ZW50cykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50Q2hhbm5lbCk7XG5cbiAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgIHRoaXMubGlzdGVuZXIgPSB7fTtcbiAgICAgIHRoaXMuZW1pdENhY2hlID0ge307XG5cbiAgICAgIGlmIChldmVudHMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgX3RoaXMub24obmFtZSwgZXZlbnRzW25hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEV2ZW50Q2hhbm5lbCwgW3tcbiAgICAgIGtleTogXCJlbWl0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZW1pdChldmVudE5hbWUpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zID4gMSA/IF9sZW4zIC0gMSA6IDApLCBfa2V5MyA9IDE7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgICBhcmdzW19rZXkzIC0gMV0gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZucyA9IHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXTtcblxuICAgICAgICBpZiAoIWZucykge1xuICAgICAgICAgIHJldHVybiAodGhpcy5lbWl0Q2FjaGVbZXZlbnROYW1lXSB8fCAodGhpcy5lbWl0Q2FjaGVbZXZlbnROYW1lXSA9IFtdKSkucHVzaChhcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICBvcHQuZm4uYXBwbHkob3B0LmZuLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXSA9IGZucy5maWx0ZXIoZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICAgIHJldHVybiBvcHQudHlwZSAhPT0gJ29uY2UnO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudE5hbWUsIGZuKSB7XG4gICAgICAgIHRoaXMuX2FkZExpc3RlbmVyKGV2ZW50TmFtZSwgJ29uJywgZm4pO1xuXG4gICAgICAgIHRoaXMuX2NsZWFyQ2FjaGUoZXZlbnROYW1lKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25jZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uY2UoZXZlbnROYW1lLCBmbikge1xuICAgICAgICB0aGlzLl9hZGRMaXN0ZW5lcihldmVudE5hbWUsICdvbmNlJywgZm4pO1xuXG4gICAgICAgIHRoaXMuX2NsZWFyQ2FjaGUoZXZlbnROYW1lKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib2ZmXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb2ZmKGV2ZW50TmFtZSwgZm4pIHtcbiAgICAgICAgdmFyIGZucyA9IHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXTtcblxuICAgICAgICBpZiAoIWZucykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmbikge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm5zLmxlbmd0aDspIHtcbiAgICAgICAgICAgIGlmIChmbnNbaV0uZm4gPT09IGZuKSB7XG4gICAgICAgICAgICAgIGZucy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcltldmVudE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9jbGVhckNhY2hlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2NsZWFyQ2FjaGUoZXZlbnROYW1lKSB7XG4gICAgICAgIHZhciBjYWNoZUFyZ3MgPSB0aGlzLmVtaXRDYWNoZVtldmVudE5hbWVdO1xuXG4gICAgICAgIGlmIChjYWNoZUFyZ3MpIHtcbiAgICAgICAgICBmb3IgKDsgY2FjaGVBcmdzLmxlbmd0aCA+IDA7KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgW2V2ZW50TmFtZV0uY29uY2F0KGNhY2hlQXJncy5zaGlmdCgpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hZGRMaXN0ZW5lclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZGRMaXN0ZW5lcihldmVudE5hbWUsIHR5cGUsIGZuKSB7XG4gICAgICAgICh0aGlzLmxpc3RlbmVyW2V2ZW50TmFtZV0gfHwgKHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXSA9IFtdKSkucHVzaCh7XG4gICAgICAgICAgZm46IGZuLFxuICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEV2ZW50Q2hhbm5lbDtcbiAgfSgpO1xuXG4gIHZhciBldmVudENoYW5uZWxzID0ge307XG4gIHZhciBldmVudENoYW5uZWxTdGFjayA9IFtdO1xuICB2YXIgaWQgPSAwO1xuXG4gIGZ1bmN0aW9uIGluaXRFdmVudENoYW5uZWwoZXZlbnRzKSB7XG4gICAgdmFyIGNhY2hlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuICAgIGlkKys7XG4gICAgdmFyIGV2ZW50Q2hhbm5lbCA9IG5ldyBFdmVudENoYW5uZWwoaWQsIGV2ZW50cyk7XG5cbiAgICBpZiAoY2FjaGUpIHtcbiAgICAgIGV2ZW50Q2hhbm5lbHNbaWRdID0gZXZlbnRDaGFubmVsO1xuICAgICAgZXZlbnRDaGFubmVsU3RhY2sucHVzaChldmVudENoYW5uZWwpO1xuICAgIH1cblxuICAgIHJldHVybiBldmVudENoYW5uZWw7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFdmVudENoYW5uZWwoaWQpIHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHZhciBldmVudENoYW5uZWwgPSBldmVudENoYW5uZWxzW2lkXTtcbiAgICAgIGRlbGV0ZSBldmVudENoYW5uZWxzW2lkXTtcbiAgICAgIHJldHVybiBldmVudENoYW5uZWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV2ZW50Q2hhbm5lbFN0YWNrLnNoaWZ0KCk7XG4gIH1cblxuICB2YXIgbmF2aWdhdGVUbyA9IHtcbiAgICBhcmdzOiBmdW5jdGlvbiBhcmdzKGZyb21BcmdzLCB0b0FyZ3MpIHtcbiAgICAgIHZhciBpZCA9IGluaXRFdmVudENoYW5uZWwoZnJvbUFyZ3MuZXZlbnRzKS5pZDtcblxuICAgICAgaWYgKGZyb21BcmdzLnVybCkge1xuICAgICAgICBmcm9tQXJncy51cmwgPSBmcm9tQXJncy51cmwgKyAoZnJvbUFyZ3MudXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgJ19faWRfXz0nICsgaWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICByZXR1cm5WYWx1ZTogZnVuY3Rpb24gcmV0dXJuVmFsdWUoZnJvbVJlcywgdG9SZXMpIHtcbiAgICAgIGZyb21SZXMuZXZlbnRDaGFubmVsID0gZ2V0RXZlbnRDaGFubmVsKCk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGZpbmRFeGlzdHNQYWdlSW5kZXgodXJsKSB7XG4gICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgdmFyIGxlbiA9IHBhZ2VzLmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgdmFyIHBhZ2UgPSBwYWdlc1tsZW5dO1xuXG4gICAgICBpZiAocGFnZS4kcGFnZSAmJiBwYWdlLiRwYWdlLmZ1bGxQYXRoID09PSB1cmwpIHtcbiAgICAgICAgcmV0dXJuIGxlbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICB2YXIgcmVkaXJlY3RUbyA9IHtcbiAgICBuYW1lOiBmdW5jdGlvbiBuYW1lKGZyb21BcmdzKSB7XG4gICAgICBpZiAoZnJvbUFyZ3MuZXhpc3RzID09PSAnYmFjaycgJiYgZnJvbUFyZ3MuZGVsdGEpIHtcbiAgICAgICAgcmV0dXJuICduYXZpZ2F0ZUJhY2snO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJ3JlZGlyZWN0VG8nO1xuICAgIH0sXG4gICAgYXJnczogZnVuY3Rpb24gYXJncyhmcm9tQXJncykge1xuICAgICAgaWYgKGZyb21BcmdzLmV4aXN0cyA9PT0gJ2JhY2snICYmIGZyb21BcmdzLnVybCkge1xuICAgICAgICB2YXIgZXhpc3RzUGFnZUluZGV4ID0gZmluZEV4aXN0c1BhZ2VJbmRleChmcm9tQXJncy51cmwpO1xuXG4gICAgICAgIGlmIChleGlzdHNQYWdlSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgdmFyIGRlbHRhID0gZ2V0Q3VycmVudFBhZ2VzKCkubGVuZ3RoIC0gMSAtIGV4aXN0c1BhZ2VJbmRleDtcblxuICAgICAgICAgIGlmIChkZWx0YSA+IDApIHtcbiAgICAgICAgICAgIGZyb21BcmdzLmRlbHRhID0gZGVsdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICB2YXIgcHJldmlld0ltYWdlID0ge1xuICAgIGFyZ3M6IGZ1bmN0aW9uIGFyZ3MoZnJvbUFyZ3MpIHtcbiAgICAgIHZhciBjdXJyZW50SW5kZXggPSBwYXJzZUludChmcm9tQXJncy5jdXJyZW50KTtcblxuICAgICAgaWYgKGlzTmFOKGN1cnJlbnRJbmRleCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdXJscyA9IGZyb21BcmdzLnVybHM7XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh1cmxzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW4gPSB1cmxzLmxlbmd0aDtcblxuICAgICAgaWYgKCFsZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSAwO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50SW5kZXggPj0gbGVuKSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IGxlbiAtIDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50SW5kZXggPiAwKSB7XG4gICAgICAgIGZyb21BcmdzLmN1cnJlbnQgPSB1cmxzW2N1cnJlbnRJbmRleF07XG4gICAgICAgIGZyb21BcmdzLnVybHMgPSB1cmxzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gaW5kZXggPCBjdXJyZW50SW5kZXggPyBpdGVtICE9PSB1cmxzW2N1cnJlbnRJbmRleF0gOiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyb21BcmdzLmN1cnJlbnQgPSB1cmxzWzBdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmRpY2F0b3I6IGZhbHNlLFxuICAgICAgICBsb29wOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH07XG4gIHZhciBwcm90b2NvbHMgPSB7XG4gICAgbmF2aWdhdGVUbzogbmF2aWdhdGVUbyxcbiAgICByZWRpcmVjdFRvOiByZWRpcmVjdFRvLFxuICAgIHByZXZpZXdJbWFnZTogcHJldmlld0ltYWdlXG4gIH07XG4gIHZhciB0b2RvcyA9IFsncHJlbG9hZFBhZ2UnLCAndW5QcmVsb2FkUGFnZScsICdsb2FkU3ViUGFja2FnZSddO1xuICB2YXIgY2FuSVVzZXMgPSBbXTtcbiAgdmFyIENBTExCQUNLUyA9IFsnc3VjY2VzcycsICdmYWlsJywgJ2NhbmNlbCcsICdjb21wbGV0ZSddO1xuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDYWxsYmFjayhtZXRob2ROYW1lLCBtZXRob2QsIHJldHVyblZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHJldHVybiBtZXRob2QocHJvY2Vzc1JldHVyblZhbHVlKG1ldGhvZE5hbWUsIHJlcywgcmV0dXJuVmFsdWUpKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0FyZ3MobWV0aG9kTmFtZSwgZnJvbUFyZ3MpIHtcbiAgICB2YXIgYXJnc09wdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHJldHVyblZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgICB2YXIga2VlcEZyb21BcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBmYWxzZTtcblxuICAgIGlmIChpc1BsYWluT2JqZWN0KGZyb21BcmdzKSkge1xuICAgICAgLy8g5LiA6IisIGFwaSDnmoTlj4LmlbDop6PmnpBcbiAgICAgIHZhciB0b0FyZ3MgPSBrZWVwRnJvbUFyZ3MgPT09IHRydWUgPyBmcm9tQXJncyA6IHt9OyAvLyByZXR1cm5WYWx1ZSDkuLogZmFsc2Ug5pe277yM6K+05piO5piv5qC85byP5YyW6L+U5Zue5YC877yM55u05o6l5Zyo6L+U5Zue5YC85a+56LGh5LiK5L+u5pS56LWL5YC8XG5cbiAgICAgIGlmIChpc0ZuKGFyZ3NPcHRpb24pKSB7XG4gICAgICAgIGFyZ3NPcHRpb24gPSBhcmdzT3B0aW9uKGZyb21BcmdzLCB0b0FyZ3MpIHx8IHt9O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gZnJvbUFyZ3MpIHtcbiAgICAgICAgaWYgKGhhc093bihhcmdzT3B0aW9uLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGtleU9wdGlvbiA9IGFyZ3NPcHRpb25ba2V5XTtcblxuICAgICAgICAgIGlmIChpc0ZuKGtleU9wdGlvbikpIHtcbiAgICAgICAgICAgIGtleU9wdGlvbiA9IGtleU9wdGlvbihmcm9tQXJnc1trZXldLCBmcm9tQXJncywgdG9BcmdzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWtleU9wdGlvbikge1xuICAgICAgICAgICAgLy8g5LiN5pSv5oyB55qE5Y+C5pWwXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJcXHU1RkVCXFx1NUU5NFxcdTc1MjgoV2VidmlldylcXHU3MjQ4IFwiLmNvbmNhdChtZXRob2ROYW1lLCBcIlxcdTY2ODJcXHU0RTBEXFx1NjUyRlxcdTYzMDFcIikuY29uY2F0KGtleSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNTdHIoa2V5T3B0aW9uKSkge1xuICAgICAgICAgICAgLy8g6YeN5YaZ5Y+C5pWwIGtleVxuICAgICAgICAgICAgdG9BcmdzW2tleU9wdGlvbl0gPSBmcm9tQXJnc1trZXldO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChrZXlPcHRpb24pKSB7XG4gICAgICAgICAgICAvLyB7bmFtZTpuZXdOYW1lLHZhbHVlOnZhbHVlfeWPr+mHjeaWsOaMh+WumuWPguaVsCBrZXk6dmFsdWVcbiAgICAgICAgICAgIHRvQXJnc1trZXlPcHRpb24ubmFtZSA/IGtleU9wdGlvbi5uYW1lIDoga2V5XSA9IGtleU9wdGlvbi52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoQ0FMTEJBQ0tTLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICBpZiAoaXNGbihmcm9tQXJnc1trZXldKSkge1xuICAgICAgICAgICAgdG9BcmdzW2tleV0gPSBwcm9jZXNzQ2FsbGJhY2sobWV0aG9kTmFtZSwgZnJvbUFyZ3Nba2V5XSwgcmV0dXJuVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIWtlZXBGcm9tQXJncykge1xuICAgICAgICAgICAgdG9BcmdzW2tleV0gPSBmcm9tQXJnc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9BcmdzO1xuICAgIH0gZWxzZSBpZiAoaXNGbihmcm9tQXJncykpIHtcbiAgICAgIGZyb21BcmdzID0gcHJvY2Vzc0NhbGxiYWNrKG1ldGhvZE5hbWUsIGZyb21BcmdzLCByZXR1cm5WYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyb21BcmdzO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JldHVyblZhbHVlKG1ldGhvZE5hbWUsIHJlcywgcmV0dXJuVmFsdWUpIHtcbiAgICB2YXIga2VlcFJldHVyblZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBmYWxzZTtcblxuICAgIGlmIChpc0ZuKHByb3RvY29scy5yZXR1cm5WYWx1ZSkpIHtcbiAgICAgIC8vIOWkhOeQhumAmueUqCByZXR1cm5WYWx1ZVxuICAgICAgcmVzID0gcHJvdG9jb2xzLnJldHVyblZhbHVlKG1ldGhvZE5hbWUsIHJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2Nlc3NBcmdzKG1ldGhvZE5hbWUsIHJlcywgcmV0dXJuVmFsdWUsIHt9LCBrZWVwUmV0dXJuVmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcHBlcihtZXRob2ROYW1lLCBtZXRob2QpIHtcbiAgICBpZiAoaGFzT3duKHByb3RvY29scywgbWV0aG9kTmFtZSkpIHtcbiAgICAgIHZhciBwcm90b2NvbCA9IHByb3RvY29sc1ttZXRob2ROYW1lXTtcblxuICAgICAgaWYgKCFwcm90b2NvbCkge1xuICAgICAgICAvLyDmmoLkuI3mlK/mjIHnmoQgYXBpXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlxcdTVGRUJcXHU1RTk0XFx1NzUyOChXZWJ2aWV3KVxcdTcyNDggXFx1NjY4MlxcdTRFMERcXHU2NTJGXFx1NjMwMVwiLmNvbmNhdChtZXRob2ROYW1lKSk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYXJnMSwgYXJnMikge1xuICAgICAgICAvLyDnm67liY0gYXBpIOacgOWkmuS4pOS4quWPguaVsFxuICAgICAgICB2YXIgb3B0aW9ucyA9IHByb3RvY29sO1xuXG4gICAgICAgIGlmIChpc0ZuKHByb3RvY29sKSkge1xuICAgICAgICAgIG9wdGlvbnMgPSBwcm90b2NvbChhcmcxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFyZzEgPSBwcm9jZXNzQXJncyhtZXRob2ROYW1lLCBhcmcxLCBvcHRpb25zLmFyZ3MsIG9wdGlvbnMucmV0dXJuVmFsdWUpO1xuICAgICAgICB2YXIgYXJncyA9IFthcmcxXTtcblxuICAgICAgICBpZiAodHlwZW9mIGFyZzIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgYXJncy5wdXNoKGFyZzIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRm4ob3B0aW9ucy5uYW1lKSkge1xuICAgICAgICAgIG1ldGhvZE5hbWUgPSBvcHRpb25zLm5hbWUoYXJnMSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNTdHIob3B0aW9ucy5uYW1lKSkge1xuICAgICAgICAgIG1ldGhvZE5hbWUgPSBvcHRpb25zLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmV0dXJuVmFsdWUgPSBxYVttZXRob2ROYW1lXS5hcHBseShxYSwgYXJncyk7XG5cbiAgICAgICAgaWYgKGlzU3luY0FwaShtZXRob2ROYW1lKSkge1xuICAgICAgICAgIC8vIOWQjOatpSBhcGlcbiAgICAgICAgICByZXR1cm4gcHJvY2Vzc1JldHVyblZhbHVlKG1ldGhvZE5hbWUsIHJldHVyblZhbHVlLCBvcHRpb25zLnJldHVyblZhbHVlLCBpc0NvbnRleHRBcGkobWV0aG9kTmFtZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0aG9kO1xuICB9XG5cbiAgdmFyIHRvZG9BcGlzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIFRPRE9TID0gWydvblRhYkJhck1pZEJ1dHRvblRhcCcsICdzdWJzY3JpYmVQdXNoJywgJ3Vuc3Vic2NyaWJlUHVzaCcsICdvblB1c2gnLCAnb2ZmUHVzaCcsICdzaGFyZSddO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVRvZG9BcGkobmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiB0b2RvQXBpKF9yZWYpIHtcbiAgICAgIHZhciBmYWlsID0gX3JlZi5mYWlsLFxuICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcbiAgICAgIHZhciByZXMgPSB7XG4gICAgICAgIGVyck1zZzogXCJcIi5jb25jYXQobmFtZSwgXCI6ZmFpbDpcXHU2NjgyXFx1NEUwRFxcdTY1MkZcXHU2MzAxIFwiKS5jb25jYXQobmFtZSwgXCIgXFx1NjVCOVxcdTZDRDVcIilcbiAgICAgIH07XG4gICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcbiAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XG4gICAgfTtcbiAgfVxuXG4gIFRPRE9TLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0b2RvQXBpc1tuYW1lXSA9IGNyZWF0ZVRvZG9BcGkobmFtZSk7XG4gIH0pO1xuICB2YXIgcHJvdmlkZXJzID0ge1xuICAgIG9hdXRoOiBbXSxcbiAgICBzaGFyZTogW10sXG4gICAgcGF5bWVudDogW10sXG4gICAgcHVzaDogW11cbiAgfTtcblxuICBpZiAocWEuY2FuSVVzZSgnZ2V0QWNjb3VudFByb3ZpZGVyJykpIHtcbiAgICBwcm92aWRlcnMub2F1dGgucHVzaChxYS5nZXRBY2NvdW50UHJvdmlkZXIoKSk7XG4gIH1cblxuICBpZiAocWEuY2FuSVVzZSgnZ2V0VmVuZG9yUGF5bWVudFByb3ZpZGVyJykpIHtcbiAgICBwcm92aWRlcnMucGF5bWVudC5wdXNoKHFhLmdldFZlbmRvclBheW1lbnRQcm92aWRlcigpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFByb3ZpZGVyKF9yZWYyKSB7XG4gICAgdmFyIHNlcnZpY2UgPSBfcmVmMi5zZXJ2aWNlLFxuICAgICAgICBzdWNjZXNzID0gX3JlZjIuc3VjY2VzcyxcbiAgICAgICAgZmFpbCA9IF9yZWYyLmZhaWwsXG4gICAgICAgIGNvbXBsZXRlID0gX3JlZjIuY29tcGxldGU7XG4gICAgdmFyIHJlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHByb3ZpZGVyc1tzZXJ2aWNlXSkge1xuICAgICAgcmVzID0ge1xuICAgICAgICBlcnJNc2c6ICdnZXRQcm92aWRlcjpvaycsXG4gICAgICAgIHNlcnZpY2U6IHNlcnZpY2UsXG4gICAgICAgIHByb3ZpZGVyOiBwcm92aWRlcnNbc2VydmljZV1cbiAgICAgIH07XG4gICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzID0ge1xuICAgICAgICBlcnJNc2c6ICdnZXRQcm92aWRlcjpmYWlsOuacjeWKoVsnICsgc2VydmljZSArICdd5LiN5a2Y5ZyoJ1xuICAgICAgfTtcbiAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xuICAgIH1cblxuICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XG4gIH1cblxuICB2YXIgZXh0cmFBcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIGdldFByb3ZpZGVyOiBnZXRQcm92aWRlclxuICB9KTtcblxuICB2YXIgZ2V0RW1pdHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgRW1pdHRlcjtcbiAgICByZXR1cm4gZnVuY3Rpb24gZ2V0VW5pRW1pdHRlcigpIHtcbiAgICAgIGlmICghRW1pdHRlcikge1xuICAgICAgICBFbWl0dGVyID0gbmV3IF92dWVbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBFbWl0dGVyO1xuICAgIH07XG4gIH0oKTtcblxuICBmdW5jdGlvbiBhcHBseShjdHgsIG1ldGhvZCwgYXJncykge1xuICAgIHJldHVybiBjdHhbbWV0aG9kXS5hcHBseShjdHgsIGFyZ3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gJG9uKCkge1xuICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb24nLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uICRvZmYoKSB7XG4gICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uICRvbmNlKCkge1xuICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb25jZScsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICB9XG5cbiAgZnVuY3Rpb24gJGVtaXQoKSB7XG4gICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRlbWl0JywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gIH1cblxuICB2YXIgZXZlbnRBcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgICRvbjogJG9uLFxuICAgICRvZmY6ICRvZmYsXG4gICAgJG9uY2U6ICRvbmNlLFxuICAgICRlbWl0OiAkZW1pdFxuICB9KTtcbiAgdmFyIGFwaSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGxcbiAgfSk7XG4gIHZhciBNUFBhZ2UgPSBQYWdlO1xuICB2YXIgTVBDb21wb25lbnQgPSBDb21wb25lbnQ7XG4gIHZhciBjdXN0b21pemVSRSA9IC86L2c7XG4gIHZhciBjdXN0b21pemUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiBjYW1lbGl6ZShzdHIucmVwbGFjZShjdXN0b21pemVSRSwgJy0nKSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGluaXRUcmlnZ2VyRXZlbnQobXBJbnN0YW5jZSkge1xuICAgIHZhciBvbGRUcmlnZ2VyRXZlbnQgPSBtcEluc3RhbmNlLnRyaWdnZXJFdmVudDtcblxuICAgIG1wSW5zdGFuY2UudHJpZ2dlckV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQgPiAxID8gX2xlbjQgLSAxIDogMCksIF9rZXk0ID0gMTsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgICBhcmdzW19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2xkVHJpZ2dlckV2ZW50LmFwcGx5KG1wSW5zdGFuY2UsIFtjdXN0b21pemUoZXZlbnQpXS5jb25jYXQoYXJncykpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBpbml0SG9vayhuYW1lLCBvcHRpb25zKSB7XG4gICAgdmFyIG9sZEhvb2sgPSBvcHRpb25zW25hbWVdO1xuXG4gICAgaWYgKCFvbGRIb29rKSB7XG4gICAgICBvcHRpb25zW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbml0VHJpZ2dlckV2ZW50KHRoaXMpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uc1tuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5pdFRyaWdnZXJFdmVudCh0aGlzKTtcblxuICAgICAgICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjUpLCBfa2V5NSA9IDA7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICAgICAgICBhcmdzW19rZXk1XSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2xkSG9vay5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgUGFnZSA9IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIGluaXRIb29rKCdvbkxvYWQnLCBvcHRpb25zKTtcbiAgICByZXR1cm4gTVBQYWdlKG9wdGlvbnMpO1xuICB9O1xuXG4gIENvbXBvbmVudCA9IGZ1bmN0aW9uIENvbXBvbmVudCgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgaW5pdEhvb2soJ2NyZWF0ZWQnLCBvcHRpb25zKTtcbiAgICByZXR1cm4gTVBDb21wb25lbnQob3B0aW9ucyk7XG4gIH07XG5cbiAgdmFyIFBBR0VfRVZFTlRfSE9PS1MgPSBbJ29uUHVsbERvd25SZWZyZXNoJywgJ29uUmVhY2hCb3R0b20nLCAnb25BZGRUb0Zhdm9yaXRlcycsICdvblNoYXJlVGltZWxpbmUnLCAnb25TaGFyZUFwcE1lc3NhZ2UnLCAnb25QYWdlU2Nyb2xsJywgJ29uUmVzaXplJywgJ29uVGFiSXRlbVRhcCddO1xuXG4gIGZ1bmN0aW9uIGluaXRNb2Nrcyh2bSwgbW9ja3MpIHtcbiAgICB2YXIgbXBJbnN0YW5jZSA9IHZtLiRtcFt2bS5tcFR5cGVdO1xuICAgIG1vY2tzLmZvckVhY2goZnVuY3Rpb24gKG1vY2spIHtcbiAgICAgIGlmIChoYXNPd24obXBJbnN0YW5jZSwgbW9jaykpIHtcbiAgICAgICAgdm1bbW9ja10gPSBtcEluc3RhbmNlW21vY2tdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzSG9vayhob29rLCB2dWVPcHRpb25zKSB7XG4gICAgaWYgKCF2dWVPcHRpb25zKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoX3Z1ZVtcImRlZmF1bHRcIl0ub3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KF92dWVbXCJkZWZhdWx0XCJdLm9wdGlvbnNbaG9va10pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2dWVPcHRpb25zID0gdnVlT3B0aW9uc1tcImRlZmF1bHRcIl0gfHwgdnVlT3B0aW9ucztcblxuICAgIGlmIChpc0ZuKHZ1ZU9wdGlvbnMpKSB7XG4gICAgICBpZiAoaXNGbih2dWVPcHRpb25zLmV4dGVuZE9wdGlvbnNbaG9va10pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodnVlT3B0aW9uc1tcInN1cGVyXCJdICYmIHZ1ZU9wdGlvbnNbXCJzdXBlclwiXS5vcHRpb25zICYmIEFycmF5LmlzQXJyYXkodnVlT3B0aW9uc1tcInN1cGVyXCJdLm9wdGlvbnNbaG9va10pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzRm4odnVlT3B0aW9uc1tob29rXSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBtaXhpbnMgPSB2dWVPcHRpb25zLm1peGlucztcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG1peGlucykpIHtcbiAgICAgIHJldHVybiAhIW1peGlucy5maW5kKGZ1bmN0aW9uIChtaXhpbikge1xuICAgICAgICByZXR1cm4gaGFzSG9vayhob29rLCBtaXhpbik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0SG9va3MobXBPcHRpb25zLCBob29rcywgdnVlT3B0aW9ucykge1xuICAgIGhvb2tzLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgIGlmIChoYXNIb29rKGhvb2ssIHZ1ZU9wdGlvbnMpKSB7XG4gICAgICAgIG1wT3B0aW9uc1tob29rXSA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuJHZtICYmIHRoaXMuJHZtLl9fY2FsbF9ob29rKGhvb2ssIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFZ1ZUNvbXBvbmVudChWdWUsIHZ1ZU9wdGlvbnMpIHtcbiAgICB2dWVPcHRpb25zID0gdnVlT3B0aW9uc1tcImRlZmF1bHRcIl0gfHwgdnVlT3B0aW9ucztcbiAgICB2YXIgVnVlQ29tcG9uZW50O1xuXG4gICAgaWYgKGlzRm4odnVlT3B0aW9ucykpIHtcbiAgICAgIFZ1ZUNvbXBvbmVudCA9IHZ1ZU9wdGlvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIFZ1ZUNvbXBvbmVudCA9IFZ1ZS5leHRlbmQodnVlT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdnVlT3B0aW9ucyA9IFZ1ZUNvbXBvbmVudC5vcHRpb25zO1xuICAgIHJldHVybiBbVnVlQ29tcG9uZW50LCB2dWVPcHRpb25zXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRTbG90cyh2bSwgdnVlU2xvdHMpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2dWVTbG90cykgJiYgdnVlU2xvdHMubGVuZ3RoKSB7XG4gICAgICB2YXIgJHNsb3RzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHZ1ZVNsb3RzLmZvckVhY2goZnVuY3Rpb24gKHNsb3ROYW1lKSB7XG4gICAgICAgICRzbG90c1tzbG90TmFtZV0gPSB0cnVlO1xuICAgICAgfSk7XG4gICAgICB2bS4kc2NvcGVkU2xvdHMgPSB2bS4kc2xvdHMgPSAkc2xvdHM7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFZ1ZUlkcyh2dWVJZHMsIG1wSW5zdGFuY2UpIHtcbiAgICB2dWVJZHMgPSAodnVlSWRzIHx8ICcnKS5zcGxpdCgnLCcpO1xuICAgIHZhciBsZW4gPSB2dWVJZHMubGVuZ3RoO1xuXG4gICAgaWYgKGxlbiA9PT0gMSkge1xuICAgICAgbXBJbnN0YW5jZS5fJHZ1ZUlkID0gdnVlSWRzWzBdO1xuICAgIH0gZWxzZSBpZiAobGVuID09PSAyKSB7XG4gICAgICBtcEluc3RhbmNlLl8kdnVlSWQgPSB2dWVJZHNbMF07XG4gICAgICBtcEluc3RhbmNlLl8kdnVlUGlkID0gdnVlSWRzWzFdO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXREYXRhKHZ1ZU9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICB2YXIgZGF0YSA9IHZ1ZU9wdGlvbnMuZGF0YSB8fCB7fTtcbiAgICB2YXIgbWV0aG9kcyA9IHZ1ZU9wdGlvbnMubWV0aG9kcyB8fCB7fTtcblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IGRhdGEuY2FsbChjb250ZXh0KTsgLy8g5pSv5oyBIFZ1ZS5wcm90b3R5cGUg5LiK5oyC55qE5pWw5o2uXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChPYmplY3Qoe1xuICAgICAgICAgIFwiTk9ERV9FTlZcIjogXCJkZXZlbG9wbWVudFwiLFxuICAgICAgICAgIFwiVlVFX0FQUF9QTEFURk9STVwiOiBcInF1aWNrYXBwLXdlYnZpZXdcIixcbiAgICAgICAgICBcIkJBU0VfVVJMXCI6IFwiL1wiXG4gICAgICAgIH0pLlZVRV9BUFBfREVCVUcpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ+agueaNriBWdWUg55qEIGRhdGEg5Ye95pWw5Yid5aeL5YyW5bCP56iL5bqPIGRhdGEg5aSx6LSl77yM6K+35bC96YeP56Gu5L+dIGRhdGEg5Ye95pWw5Lit5LiN6K6/6ZeuIHZtIOWvueixoe+8jOWQpuWImeWPr+iDveW9seWTjemmluasoeaVsOaNrua4suafk+mAn+W6puOAgicsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIOWvuSBkYXRhIOagvOW8j+WMllxuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgZGF0YSA9IHt9O1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgICAgIGlmIChjb250ZXh0Ll9fbGlmZWN5Y2xlX2hvb2tzX18uaW5kZXhPZihtZXRob2ROYW1lKSA9PT0gLTEgJiYgIWhhc093bihkYXRhLCBtZXRob2ROYW1lKSkge1xuICAgICAgICBkYXRhW21ldGhvZE5hbWVdID0gbWV0aG9kc1ttZXRob2ROYW1lXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhciBQUk9QX1RZUEVTID0gW1N0cmluZywgTnVtYmVyLCBCb29sZWFuLCBPYmplY3QsIEFycmF5LCBudWxsXTtcblxuICBmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG9ic2VydmVyKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICBpZiAodGhpcy4kdm0pIHtcbiAgICAgICAgdGhpcy4kdm1bbmFtZV0gPSBuZXdWYWw7IC8vIOS4uuS6huinpuWPkeWFtuS7lumdniByZW5kZXIgd2F0Y2hlclxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBpbml0QmVoYXZpb3JzKHZ1ZU9wdGlvbnMsIGluaXRCZWhhdmlvcikge1xuICAgIHZhciB2dWVCZWhhdmlvcnMgPSB2dWVPcHRpb25zLmJlaGF2aW9ycztcbiAgICB2YXIgdnVlRXh0ZW5kcyA9IHZ1ZU9wdGlvbnNbXCJleHRlbmRzXCJdO1xuICAgIHZhciB2dWVNaXhpbnMgPSB2dWVPcHRpb25zLm1peGlucztcbiAgICB2YXIgdnVlUHJvcHMgPSB2dWVPcHRpb25zLnByb3BzO1xuXG4gICAgaWYgKCF2dWVQcm9wcykge1xuICAgICAgdnVlT3B0aW9ucy5wcm9wcyA9IHZ1ZVByb3BzID0gW107XG4gICAgfVxuXG4gICAgdmFyIGJlaGF2aW9ycyA9IFtdO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodnVlQmVoYXZpb3JzKSkge1xuICAgICAgdnVlQmVoYXZpb3JzLmZvckVhY2goZnVuY3Rpb24gKGJlaGF2aW9yKSB7XG4gICAgICAgIGJlaGF2aW9ycy5wdXNoKGJlaGF2aW9yLnJlcGxhY2UoJ3VuaTovLycsIFwicWFcIi5jb25jYXQoXCI6Ly9cIikpKTtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICd1bmk6Ly9mb3JtLWZpZWxkJykge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZ1ZVByb3BzKSkge1xuICAgICAgICAgICAgdnVlUHJvcHMucHVzaCgnbmFtZScpO1xuICAgICAgICAgICAgdnVlUHJvcHMucHVzaCgndmFsdWUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdnVlUHJvcHMubmFtZSA9IHtcbiAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICBcImRlZmF1bHRcIjogJydcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2dWVQcm9wcy52YWx1ZSA9IHtcbiAgICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyLCBCb29sZWFuLCBBcnJheSwgT2JqZWN0LCBEYXRlXSxcbiAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6ICcnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGlzUGxhaW5PYmplY3QodnVlRXh0ZW5kcykgJiYgdnVlRXh0ZW5kcy5wcm9wcykge1xuICAgICAgYmVoYXZpb3JzLnB1c2goaW5pdEJlaGF2aW9yKHtcbiAgICAgICAgcHJvcGVydGllczogaW5pdFByb3BlcnRpZXModnVlRXh0ZW5kcy5wcm9wcywgdHJ1ZSlcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2dWVNaXhpbnMpKSB7XG4gICAgICB2dWVNaXhpbnMuZm9yRWFjaChmdW5jdGlvbiAodnVlTWl4aW4pIHtcbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QodnVlTWl4aW4pICYmIHZ1ZU1peGluLnByb3BzKSB7XG4gICAgICAgICAgYmVoYXZpb3JzLnB1c2goaW5pdEJlaGF2aW9yKHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IGluaXRQcm9wZXJ0aWVzKHZ1ZU1peGluLnByb3BzLCB0cnVlKVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJlaGF2aW9ycztcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlUHJvcFR5cGUoa2V5LCB0eXBlLCBkZWZhdWx0VmFsdWUsIGZpbGUpIHtcbiAgICAvLyBbU3RyaW5nXT0+U3RyaW5nXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkgJiYgdHlwZS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0eXBlWzBdO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFByb3BlcnRpZXMocHJvcHMpIHtcbiAgICB2YXIgaXNCZWhhdmlvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgdmFyIGZpbGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcnO1xuICAgIHZhciBwcm9wZXJ0aWVzID0ge307XG5cbiAgICBpZiAoIWlzQmVoYXZpb3IpIHtcbiAgICAgIHByb3BlcnRpZXMudnVlSWQgPSB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9OyAvLyDnlKjkuo7lrZfoioLot7PliqjlsI/nqIvluo/mqKHmi5/mir3osaHoioLngrlcblxuICAgICAgcHJvcGVydGllcy5nZW5lcmljID0ge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9O1xuICAgICAgcHJvcGVydGllcy52dWVTbG90cyA9IHtcbiAgICAgICAgLy8g5bCP56iL5bqP5LiN6IO955u05o6l5a6a5LmJICRzbG90cyDnmoQgcHJvcHPvvIzmiYDku6XpgJrov4cgdnVlU2xvdHMg6L2s5o2i5YiwICRzbG90c1xuICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiBvYnNlcnZlcihuZXdWYWwsIG9sZFZhbCkge1xuICAgICAgICAgIHZhciAkc2xvdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIG5ld1ZhbC5mb3JFYWNoKGZ1bmN0aW9uIChzbG90TmFtZSkge1xuICAgICAgICAgICAgJHNsb3RzW3Nsb3ROYW1lXSA9IHRydWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICRzbG90czogJHNsb3RzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgICAvLyBbJ3RpdGxlJ11cbiAgICAgIHByb3BzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7XG4gICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICBvYnNlcnZlcjogY3JlYXRlT2JzZXJ2ZXIoa2V5KVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHByb3BzKSkge1xuICAgICAgLy8ge3RpdGxlOnt0eXBlOlN0cmluZyxkZWZhdWx0OicnfSxjb250ZW50OlN0cmluZ31cbiAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIG9wdHMgPSBwcm9wc1trZXldO1xuXG4gICAgICAgIGlmIChpc1BsYWluT2JqZWN0KG9wdHMpKSB7XG4gICAgICAgICAgLy8gdGl0bGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6Jyd9XG4gICAgICAgICAgdmFyIHZhbHVlID0gb3B0c1tcImRlZmF1bHRcIl07XG5cbiAgICAgICAgICBpZiAoaXNGbih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvcHRzLnR5cGUgPSBwYXJzZVByb3BUeXBlKGtleSwgb3B0cy50eXBlKTtcbiAgICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7XG4gICAgICAgICAgICB0eXBlOiBQUk9QX1RZUEVTLmluZGV4T2Yob3B0cy50eXBlKSAhPT0gLTEgPyBvcHRzLnR5cGUgOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6IGNyZWF0ZU9ic2VydmVyKGtleSlcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNvbnRlbnQ6U3RyaW5nXG4gICAgICAgICAgdmFyIHR5cGUgPSBwYXJzZVByb3BUeXBlKGtleSwgb3B0cyk7XG4gICAgICAgICAgcHJvcGVydGllc1trZXldID0ge1xuICAgICAgICAgICAgdHlwZTogUFJPUF9UWVBFUy5pbmRleE9mKHR5cGUpICE9PSAtMSA/IHR5cGUgOiBudWxsLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6IGNyZWF0ZU9ic2VydmVyKGtleSlcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXBwZXIkMShldmVudCkge1xuICAgIC8vIFRPRE8g5Y+I5b6X5YW85a65IG1wdnVlIOeahCBtcCDlr7nosaFcbiAgICB0cnkge1xuICAgICAgZXZlbnQubXAgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV2ZW50KSk7XG4gICAgfSBjYXRjaCAoZSkge31cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbiA9IG5vb3A7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQgPSBub29wO1xuICAgIGV2ZW50LnRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCB7fTtcblxuICAgIGlmICghaGFzT3duKGV2ZW50LCAnZGV0YWlsJykpIHtcbiAgICAgIGV2ZW50LmRldGFpbCA9IHt9O1xuICAgIH1cblxuICAgIGlmIChoYXNPd24oZXZlbnQsICdtYXJrZXJJZCcpKSB7XG4gICAgICBldmVudC5kZXRhaWwgPSAoMCwgX3R5cGVvZjJbXCJkZWZhdWx0XCJdKShldmVudC5kZXRhaWwpID09PSAnb2JqZWN0JyA/IGV2ZW50LmRldGFpbCA6IHt9O1xuICAgICAgZXZlbnQuZGV0YWlsLm1hcmtlcklkID0gZXZlbnQubWFya2VySWQ7XG4gICAgfVxuXG4gICAgaWYgKGlzUGxhaW5PYmplY3QoZXZlbnQuZGV0YWlsKSkge1xuICAgICAgZXZlbnQudGFyZ2V0ID0gT2JqZWN0LmFzc2lnbih7fSwgZXZlbnQudGFyZ2V0LCBldmVudC5kZXRhaWwpO1xuICAgIH1cblxuICAgIHJldHVybiBldmVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEV4dHJhVmFsdWUodm0sIGRhdGFQYXRoc0FycmF5KSB7XG4gICAgdmFyIGNvbnRleHQgPSB2bTtcbiAgICBkYXRhUGF0aHNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhUGF0aEFycmF5KSB7XG4gICAgICB2YXIgZGF0YVBhdGggPSBkYXRhUGF0aEFycmF5WzBdO1xuICAgICAgdmFyIHZhbHVlID0gZGF0YVBhdGhBcnJheVsyXTtcblxuICAgICAgaWYgKGRhdGFQYXRoIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gWycnLCcnLGluZGV4LCdkaXNhYmxlJ11cbiAgICAgICAgdmFyIHByb3BQYXRoID0gZGF0YVBhdGhBcnJheVsxXTtcbiAgICAgICAgdmFyIHZhbHVlUGF0aCA9IGRhdGFQYXRoQXJyYXlbM107XG4gICAgICAgIHZhciB2Rm9yO1xuXG4gICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGRhdGFQYXRoKSkge1xuICAgICAgICAgIHZGb3IgPSBkYXRhUGF0aDtcbiAgICAgICAgfSBlbHNlIGlmICghZGF0YVBhdGgpIHtcbiAgICAgICAgICB2Rm9yID0gY29udGV4dDtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YVBhdGggPT09ICdzdHJpbmcnICYmIGRhdGFQYXRoKSB7XG4gICAgICAgICAgaWYgKGRhdGFQYXRoLmluZGV4T2YoJyNzIycpID09PSAwKSB7XG4gICAgICAgICAgICB2Rm9yID0gZGF0YVBhdGguc3Vic3RyKDMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2Rm9yID0gdm0uX19nZXRfdmFsdWUoZGF0YVBhdGgsIGNvbnRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHZGb3IpKSB7XG4gICAgICAgICAgY29udGV4dCA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFwcm9wUGF0aCkge1xuICAgICAgICAgIGNvbnRleHQgPSB2Rm9yW3ZhbHVlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2Rm9yKSkge1xuICAgICAgICAgICAgY29udGV4dCA9IHZGb3IuZmluZChmdW5jdGlvbiAodkZvckl0ZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZtLl9fZ2V0X3ZhbHVlKHByb3BQYXRoLCB2Rm9ySXRlbSkgPT09IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZGb3IpKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gT2JqZWN0LmtleXModkZvcikuZmluZChmdW5jdGlvbiAodkZvcktleSkge1xuICAgICAgICAgICAgICByZXR1cm4gdm0uX19nZXRfdmFsdWUocHJvcFBhdGgsIHZGb3JbdkZvcktleV0pID09PSB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCd2LWZvciDmmoLkuI3mlK/mjIHlvqrnjq/mlbDmja7vvJonLCB2Rm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWVQYXRoKSB7XG4gICAgICAgICAgY29udGV4dCA9IHZtLl9fZ2V0X3ZhbHVlKHZhbHVlUGF0aCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NFdmVudEV4dHJhKHZtLCBleHRyYSwgZXZlbnQpIHtcbiAgICB2YXIgZXh0cmFPYmogPSB7fTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGV4dHJhKSAmJiBleHRyYS5sZW5ndGgpIHtcbiAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqICAgIFsnZGF0YS5pdGVtcycsICdkYXRhLmlkJywgaXRlbS5kYXRhLmlkXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiAgICBbJ21ldGFzJywgJ2lkJywgbWV0YS5pZF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogICAgWydkYXRhLml0ZW1zJywgJ2RhdGEuaWQnLCBpdGVtLmRhdGEuaWRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqICAgIFsnbWV0YXMnLCAnaWQnLCBtZXRhLmlkXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKid0ZXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgZXh0cmEuZm9yRWFjaChmdW5jdGlvbiAoZGF0YVBhdGgsIGluZGV4KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKCFkYXRhUGF0aCkge1xuICAgICAgICAgICAgLy8gbW9kZWwscHJvcC5zeW5jXG4gICAgICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSB2bTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRhdGFQYXRoID09PSAnJGV2ZW50Jykge1xuICAgICAgICAgICAgICAvLyAkZXZlbnRcbiAgICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gZXZlbnQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFQYXRoID09PSAnYXJndW1lbnRzJykge1xuICAgICAgICAgICAgICBpZiAoZXZlbnQuZGV0YWlsICYmIGV2ZW50LmRldGFpbC5fX2FyZ3NfXykge1xuICAgICAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IGV2ZW50LmRldGFpbC5fX2FyZ3NfXztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSBbZXZlbnRdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFQYXRoLmluZGV4T2YoJyRldmVudC4nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAvLyAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IHZtLl9fZ2V0X3ZhbHVlKGRhdGFQYXRoLnJlcGxhY2UoJyRldmVudC4nLCAnJyksIGV2ZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IHZtLl9fZ2V0X3ZhbHVlKGRhdGFQYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gZ2V0RXh0cmFWYWx1ZSh2bSwgZGF0YVBhdGgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXh0cmFPYmo7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPYmpCeUFycmF5KGFycikge1xuICAgIHZhciBvYmogPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGFycltpXTtcbiAgICAgIG9ialtlbGVtZW50WzBdXSA9IGVsZW1lbnRbMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NFdmVudEFyZ3Modm0sIGV2ZW50KSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuICAgIHZhciBleHRyYSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogW107XG4gICAgdmFyIGlzQ3VzdG9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgPyBhcmd1bWVudHNbNF0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1ldGhvZE5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gNSA/IGFyZ3VtZW50c1s1XSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgaXNDdXN0b21NUEV2ZW50ID0gZmFsc2U7IC8vIHd4Y29tcG9uZW50IOe7hOS7tu+8jOS8oOmAkuWOn+WniyBldmVudCDlr7nosaFcblxuICAgIGlmIChpc0N1c3RvbSkge1xuICAgICAgLy8g6Ieq5a6a5LmJ5LqL5Lu2XG4gICAgICBpc0N1c3RvbU1QRXZlbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0ICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldCAmJiBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY29tVHlwZSA9PT0gJ3d4JztcblxuICAgICAgaWYgKCFhcmdzLmxlbmd0aCkge1xuICAgICAgICAvLyDml6Dlj4LmlbDvvIznm7TmjqXkvKDlhaUgZXZlbnQg5oiWIGRldGFpbCDmlbDnu4RcbiAgICAgICAgaWYgKGlzQ3VzdG9tTVBFdmVudCkge1xuICAgICAgICAgIHJldHVybiBbZXZlbnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV2ZW50LmRldGFpbC5fX2FyZ3NfXyB8fCBldmVudC5kZXRhaWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGV4dHJhT2JqID0gcHJvY2Vzc0V2ZW50RXh0cmEodm0sIGV4dHJhLCBldmVudCk7XG4gICAgdmFyIHJldCA9IFtdO1xuICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICBpZiAoYXJnID09PSAnJGV2ZW50Jykge1xuICAgICAgICBpZiAobWV0aG9kTmFtZSA9PT0gJ19fc2V0X21vZGVsJyAmJiAhaXNDdXN0b20pIHtcbiAgICAgICAgICAvLyBpbnB1dCB2LW1vZGVsIHZhbHVlXG4gICAgICAgICAgcmV0LnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNDdXN0b20gJiYgIWlzQ3VzdG9tTVBFdmVudCkge1xuICAgICAgICAgICAgcmV0LnB1c2goZXZlbnQuZGV0YWlsLl9fYXJnc19fWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gd3hjb21wb25lbnQg57uE5Lu25oiW5YaF572u57uE5Lu2XG4gICAgICAgICAgICByZXQucHVzaChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZ1swXSA9PT0gJ28nKSB7XG4gICAgICAgICAgcmV0LnB1c2goZ2V0T2JqQnlBcnJheShhcmcpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyAmJiBoYXNPd24oZXh0cmFPYmosIGFyZykpIHtcbiAgICAgICAgICByZXQucHVzaChleHRyYU9ialthcmddKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXQucHVzaChhcmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHZhciBPTkNFID0gJ34nO1xuICB2YXIgQ1VTVE9NID0gJ14nO1xuXG4gIGZ1bmN0aW9uIGlzTWF0Y2hFdmVudFR5cGUoZXZlbnRUeXBlLCBvcHRUeXBlKSB7XG4gICAgcmV0dXJuIGV2ZW50VHlwZSA9PT0gb3B0VHlwZSB8fCBvcHRUeXBlID09PSAncmVnaW9uY2hhbmdlJyAmJiAoZXZlbnRUeXBlID09PSAnYmVnaW4nIHx8IGV2ZW50VHlwZSA9PT0gJ2VuZCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29udGV4dFZtKHZtKSB7XG4gICAgdmFyICRwYXJlbnQgPSB2bS4kcGFyZW50OyAvLyDniLbnu4Tku7bmmK8gc2NvcGVkIHNsb3RzIOaIluiAheWFtuS7luiHquWumuS5iee7hOS7tuaXtue7p+e7reafpeaJvlxuXG4gICAgd2hpbGUgKCRwYXJlbnQgJiYgJHBhcmVudC4kcGFyZW50ICYmICgkcGFyZW50LiRvcHRpb25zLmdlbmVyaWMgfHwgJHBhcmVudC4kcGFyZW50LiRvcHRpb25zLmdlbmVyaWMgfHwgJHBhcmVudC4kc2NvcGUuXyR2dWVQaWQpKSB7XG4gICAgICAkcGFyZW50ID0gJHBhcmVudC4kcGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiAkcGFyZW50ICYmICRwYXJlbnQuJHBhcmVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBldmVudCA9IHdyYXBwZXIkMShldmVudCk7IC8vIFtbJ3RhcCcsW1snaGFuZGxlJyxbMSwyLGFdXSxbJ2hhbmRsZTEnLFsxLDIsYV1dXV1dXG5cbiAgICB2YXIgZGF0YXNldCA9IChldmVudC5jdXJyZW50VGFyZ2V0IHx8IGV2ZW50LnRhcmdldCkuZGF0YXNldDtcblxuICAgIGlmICghZGF0YXNldCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUud2Fybign5LqL5Lu25L+h5oGv5LiN5a2Y5ZyoJyk7XG4gICAgfVxuXG4gICAgdmFyIGV2ZW50T3B0cyA9IGRhdGFzZXQuZXZlbnRPcHRzIHx8IGRhdGFzZXRbJ2V2ZW50LW9wdHMnXTsgLy8g5pSv5LuY5a6dIHdlYi12aWV3IOe7hOS7tiBkYXRhc2V0IOmdnumpvOWzsFxuXG4gICAgaWYgKCFldmVudE9wdHMpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLndhcm4oJ+S6i+S7tuS/oeaBr+S4jeWtmOWcqCcpO1xuICAgIH0gLy8gW1snaGFuZGxlJyxbMSwyLGFdXSxbJ2hhbmRsZTEnLFsxLDIsYV1dXVxuXG5cbiAgICB2YXIgZXZlbnRUeXBlID0gZXZlbnQudHlwZTtcbiAgICB2YXIgcmV0ID0gW107XG4gICAgZXZlbnRPcHRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50T3B0KSB7XG4gICAgICB2YXIgdHlwZSA9IGV2ZW50T3B0WzBdO1xuICAgICAgdmFyIGV2ZW50c0FycmF5ID0gZXZlbnRPcHRbMV07XG4gICAgICB2YXIgaXNDdXN0b20gPSB0eXBlLmNoYXJBdCgwKSA9PT0gQ1VTVE9NO1xuICAgICAgdHlwZSA9IGlzQ3VzdG9tID8gdHlwZS5zbGljZSgxKSA6IHR5cGU7XG4gICAgICB2YXIgaXNPbmNlID0gdHlwZS5jaGFyQXQoMCkgPT09IE9OQ0U7XG4gICAgICB0eXBlID0gaXNPbmNlID8gdHlwZS5zbGljZSgxKSA6IHR5cGU7XG5cbiAgICAgIGlmIChldmVudHNBcnJheSAmJiBpc01hdGNoRXZlbnRUeXBlKGV2ZW50VHlwZSwgdHlwZSkpIHtcbiAgICAgICAgZXZlbnRzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRBcnJheSkge1xuICAgICAgICAgIHZhciBtZXRob2ROYW1lID0gZXZlbnRBcnJheVswXTtcblxuICAgICAgICAgIGlmIChtZXRob2ROYW1lKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlckN0eCA9IF90aGlzMi4kdm07XG5cbiAgICAgICAgICAgIGlmIChoYW5kbGVyQ3R4LiRvcHRpb25zLmdlbmVyaWMpIHtcbiAgICAgICAgICAgICAgLy8gbXAtd2VpeGluLG1wLXRvdXRpYW8g5oq96LGh6IqC54K55qih5oufIHNjb3BlZCBzbG90c1xuICAgICAgICAgICAgICBoYW5kbGVyQ3R4ID0gZ2V0Q29udGV4dFZtKGhhbmRsZXJDdHgpIHx8IGhhbmRsZXJDdHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2ROYW1lID09PSAnJGVtaXQnKSB7XG4gICAgICAgICAgICAgIGhhbmRsZXJDdHguJGVtaXQuYXBwbHkoaGFuZGxlckN0eCwgcHJvY2Vzc0V2ZW50QXJncyhfdGhpczIuJHZtLCBldmVudCwgZXZlbnRBcnJheVsxXSwgZXZlbnRBcnJheVsyXSwgaXNDdXN0b20sIG1ldGhvZE5hbWUpKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaGFuZGxlciA9IGhhbmRsZXJDdHhbbWV0aG9kTmFtZV07XG5cbiAgICAgICAgICAgIGlmICghaXNGbihoYW5kbGVyKSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIgX3ZtLlwiLmNvbmNhdChtZXRob2ROYW1lLCBcIiBpcyBub3QgYSBmdW5jdGlvblwiKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc09uY2UpIHtcbiAgICAgICAgICAgICAgaWYgKGhhbmRsZXIub25jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGhhbmRsZXIub25jZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSBwcm9jZXNzRXZlbnRBcmdzKF90aGlzMi4kdm0sIGV2ZW50LCBldmVudEFycmF5WzFdLCBldmVudEFycmF5WzJdLCBpc0N1c3RvbSwgbWV0aG9kTmFtZSk7IC8vIOWPguaVsOWwvumDqOWinuWKoOWOn+Wni+S6i+S7tuWvueixoeeUqOS6juWkjeadguihqOi+vuW8j+WGheiOt+WPlumineWkluaVsOaNrlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNwYXJzZS1hcnJheXNcblxuICAgICAgICAgICAgcmV0LnB1c2goaGFuZGxlci5hcHBseShoYW5kbGVyQ3R4LCAoQXJyYXkuaXNBcnJheShwYXJhbXMpID8gcGFyYW1zIDogW10pLmNvbmNhdChbLCwsLCwsLCwsLCBldmVudF0pKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChldmVudFR5cGUgPT09ICdpbnB1dCcgJiYgcmV0Lmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgcmV0WzBdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHJldFswXTtcbiAgICB9XG4gIH1cblxuICB2YXIgaG9va3MgPSBbJ29uU2hvdycsICdvbkhpZGUnLCAnb25FcnJvcicsICdvblBhZ2VOb3RGb3VuZCcsICdvblRoZW1lQ2hhbmdlJywgJ29uVW5oYW5kbGVkUmVqZWN0aW9uJ107XG5cbiAgZnVuY3Rpb24gcGFyc2VCYXNlQXBwKHZtLCBfcmVmMykge1xuICAgIHZhciBtb2NrcyA9IF9yZWYzLm1vY2tzLFxuICAgICAgICBpbml0UmVmcyA9IF9yZWYzLmluaXRSZWZzO1xuXG4gICAgaWYgKHZtLiRvcHRpb25zLnN0b3JlKSB7XG4gICAgICBfdnVlW1wiZGVmYXVsdFwiXS5wcm90b3R5cGUuJHN0b3JlID0gdm0uJG9wdGlvbnMuc3RvcmU7XG4gICAgfVxuXG4gICAgX3Z1ZVtcImRlZmF1bHRcIl0ucHJvdG90eXBlLm1wSG9zdCA9IFwicXVpY2thcHAtd2Vidmlld1wiO1xuXG4gICAgX3Z1ZVtcImRlZmF1bHRcIl0ubWl4aW4oe1xuICAgICAgYmVmb3JlQ3JlYXRlOiBmdW5jdGlvbiBiZWZvcmVDcmVhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy4kb3B0aW9ucy5tcFR5cGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1wVHlwZSA9IHRoaXMuJG9wdGlvbnMubXBUeXBlO1xuICAgICAgICB0aGlzLiRtcCA9IF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICAgICAgZGF0YToge31cbiAgICAgICAgfSwgdGhpcy5tcFR5cGUsIHRoaXMuJG9wdGlvbnMubXBJbnN0YW5jZSk7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gdGhpcy4kb3B0aW9ucy5tcEluc3RhbmNlO1xuICAgICAgICBkZWxldGUgdGhpcy4kb3B0aW9ucy5tcFR5cGU7XG4gICAgICAgIGRlbGV0ZSB0aGlzLiRvcHRpb25zLm1wSW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKHRoaXMubXBUeXBlICE9PSAnYXBwJykge1xuICAgICAgICAgIGluaXRSZWZzKHRoaXMpO1xuICAgICAgICAgIGluaXRNb2Nrcyh0aGlzLCBtb2Nrcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBhcHBPcHRpb25zID0ge1xuICAgICAgb25MYXVuY2g6IGZ1bmN0aW9uIG9uTGF1bmNoKGFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuJHZtKSB7XG4gICAgICAgICAgLy8g5bey57uP5Yid5aeL5YyW6L+H5LqG77yM5Li76KaB5piv5Li65LqG55m+5bqm77yM55m+5bqmIG9uU2hvdyDlnKggb25MYXVuY2gg5LmL5YmNXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kdm0gPSB2bTtcbiAgICAgICAgdGhpcy4kdm0uJG1wID0ge1xuICAgICAgICAgIGFwcDogdGhpc1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLiR2bS4kc2NvcGUgPSB0aGlzOyAvLyB2bSDkuIrkuZ/mjILovb0gZ2xvYmFsRGF0YVxuXG4gICAgICAgIHRoaXMuJHZtLmdsb2JhbERhdGEgPSB0aGlzLmdsb2JhbERhdGE7XG4gICAgICAgIHRoaXMuJHZtLl9pc01vdW50ZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdtb3VudGVkJywgYXJncyk7XG5cbiAgICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uTGF1bmNoJywgYXJncyk7XG4gICAgICB9XG4gICAgfTsgLy8g5YW85a655pen54mI5pysIGdsb2JhbERhdGFcblxuICAgIGFwcE9wdGlvbnMuZ2xvYmFsRGF0YSA9IHZtLiRvcHRpb25zLmdsb2JhbERhdGEgfHwge307IC8vIOWwhiBtZXRob2RzIOS4reeahOaWueazleaMguWcqCBnZXRBcHAoKSDkuK1cblxuICAgIHZhciBtZXRob2RzID0gdm0uJG9wdGlvbnMubWV0aG9kcztcblxuICAgIGlmIChtZXRob2RzKSB7XG4gICAgICBPYmplY3Qua2V5cyhtZXRob2RzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIGFwcE9wdGlvbnNbbmFtZV0gPSBtZXRob2RzW25hbWVdO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdEhvb2tzKGFwcE9wdGlvbnMsIGhvb2tzKTtcbiAgICByZXR1cm4gYXBwT3B0aW9ucztcbiAgfVxuXG4gIHZhciBtb2NrcyA9IFsnbm9kZUlkJywgJ2NvbXBvbmVudE5hbWUnLCAnX2NvbXBvbmVudElkJywgJ3VuaXF1ZVByZWZpeCddO1xuXG4gIGZ1bmN0aW9uIGlzUGFnZSgpIHtcbiAgICAvLyDnmb7luqblsI/nqIvluo/nu4Tku7bnmoRpZO+8jOafkOS6m+aDheWGteS4i+WPr+iDveaYr251bWJlcuexu+Wei+eahDDvvIzkuI3og73nm7TmjqVyZXR1cm4gIXRoaXMub3duZXJJZCDliKTmlq3lvZPliY3nu4Tku7bmmK/lkKbmmK9QYWdlXG4gICAgLy8g5ZCm5YiZ5Lya5a+86Ie0bW91bnRlZOS4jeaJp+ihjFxuICAgIHJldHVybiB0eXBlb2YgdGhpcy5vd25lcklkID09PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRWbUJ5VnVlSWQodm0sIHZ1ZVBpZCkge1xuICAgIHZhciAkY2hpbGRyZW4gPSB2bS4kY2hpbGRyZW47IC8vIOS8mOWFiOafpeaJvuebtOWxnijlj43lkJHmn6Xmib46aHR0cHM6Ly9naXRodWIuY29tL2RjbG91ZGlvL3VuaS1hcHAvaXNzdWVzLzEyMDApXG5cbiAgICBmb3IgKHZhciBpID0gJGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgY2hpbGRWbSA9ICRjaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkVm0uJHNjb3BlLl8kdnVlSWQgPT09IHZ1ZVBpZCkge1xuICAgICAgICByZXR1cm4gY2hpbGRWbTtcbiAgICAgIH1cbiAgICB9IC8vIOWPjeWQkemAkuW9kuafpeaJvlxuXG5cbiAgICB2YXIgcGFyZW50Vm07XG5cbiAgICBmb3IgKHZhciBfaSA9ICRjaGlsZHJlbi5sZW5ndGggLSAxOyBfaSA+PSAwOyBfaS0tKSB7XG4gICAgICBwYXJlbnRWbSA9IGZpbmRWbUJ5VnVlSWQoJGNoaWxkcmVuW19pXSwgdnVlUGlkKTtcblxuICAgICAgaWYgKHBhcmVudFZtKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnRWbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0QmVoYXZpb3Iob3B0aW9ucykge1xuICAgIHJldHVybiBCZWhhdmlvcihvcHRpb25zKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRSZWZzKHZtKSB7XG4gICAgdmFyIG1wSW5zdGFuY2UgPSB2bS4kc2NvcGU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZtLCAnJHJlZnMnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgdmFyICRyZWZzID0ge307XG4gICAgICAgIHZhciBjb21wb25lbnRzID0gbXBJbnN0YW5jZS5zZWxlY3RBbGxDb21wb25lbnRzKCcudnVlLXJlZicpO1xuICAgICAgICBjb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgICAgIHZhciByZWYgPSBjb21wb25lbnQuZGF0YXNldC5yZWY7XG4gICAgICAgICAgJHJlZnNbcmVmXSA9IGNvbXBvbmVudC4kdm0gfHwgY29tcG9uZW50O1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGZvckNvbXBvbmVudHMgPSBtcEluc3RhbmNlLnNlbGVjdEFsbENvbXBvbmVudHMoJy52dWUtcmVmLWluLWZvcicpO1xuICAgICAgICBmb3JDb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgICAgIHZhciByZWYgPSBjb21wb25lbnQuZGF0YXNldC5yZWY7XG5cbiAgICAgICAgICBpZiAoISRyZWZzW3JlZl0pIHtcbiAgICAgICAgICAgICRyZWZzW3JlZl0gPSBbXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkcmVmc1tyZWZdLnB1c2goY29tcG9uZW50LiR2bSB8fCBjb21wb25lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICRyZWZzO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTGluayhldmVudCkge1xuICAgIHZhciBfcmVmNCA9IGV2ZW50LmRldGFpbCB8fCBldmVudC52YWx1ZSxcbiAgICAgICAgdnVlUGlkID0gX3JlZjQudnVlUGlkLFxuICAgICAgICB2dWVPcHRpb25zID0gX3JlZjQudnVlT3B0aW9uczsgLy8gZGV0YWlsIOaYr+W+ruS/oSx2YWx1ZSDmmK/nmb7luqYoZGlwYXRjaClcblxuXG4gICAgdmFyIHBhcmVudFZtO1xuXG4gICAgaWYgKHZ1ZVBpZCkge1xuICAgICAgcGFyZW50Vm0gPSBmaW5kVm1CeVZ1ZUlkKHRoaXMuJHZtLCB2dWVQaWQpO1xuICAgIH1cblxuICAgIGlmICghcGFyZW50Vm0pIHtcbiAgICAgIHBhcmVudFZtID0gdGhpcy4kdm07XG4gICAgfVxuXG4gICAgdnVlT3B0aW9ucy5wYXJlbnQgPSBwYXJlbnRWbTtcbiAgfVxuXG4gIHZhciBpbnN0YW5jZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIGZ1bmN0aW9uIGluaXRSZWxhdGlvbihfcmVmNSkge1xuICAgIHZhciB2dWVQaWQgPSBfcmVmNS52dWVQaWQsXG4gICAgICAgIG1wSW5zdGFuY2UgPSBfcmVmNS5tcEluc3RhbmNlOyAvLyB0cmlnZ2VyRXZlbnQg5ZCO77yM5o6l5pS25LqL5Lu25pe25py654m55Yir5pma77yM5bey57uP5Yiw5LqGIHJlYWR5IOS5i+WQjlxuXG4gICAgdmFyIG5vZGVJZCA9IG1wSW5zdGFuY2Uubm9kZUlkICsgJyc7XG4gICAgdmFyIHdlYnZpZXdJZCA9IG1wSW5zdGFuY2UucGFnZWluc3RhbmNlLl9fcGFnZUlkX18gKyAnJztcbiAgICBpbnN0YW5jZXNbd2Vidmlld0lkICsgJ18nICsgbm9kZUlkXSA9IG1wSW5zdGFuY2UuJHZtO1xuICAgIHRoaXMudHJpZ2dlckV2ZW50KCdfX2wnLCB7XG4gICAgICB2dWVQaWQ6IHZ1ZVBpZCxcbiAgICAgIG5vZGVJZDogbm9kZUlkLFxuICAgICAgd2Vidmlld0lkOiB3ZWJ2aWV3SWRcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpbmskMShfcmVmNikge1xuICAgIHZhciBfcmVmNiRkZXRhaWwgPSBfcmVmNi5kZXRhaWwsXG4gICAgICAgIG5vZGVJZCA9IF9yZWY2JGRldGFpbC5ub2RlSWQsXG4gICAgICAgIHdlYnZpZXdJZCA9IF9yZWY2JGRldGFpbC53ZWJ2aWV3SWQ7XG4gICAgdmFyIHZtID0gaW5zdGFuY2VzW3dlYnZpZXdJZCArICdfJyArIG5vZGVJZF07XG5cbiAgICBpZiAoIXZtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBhcmVudFZtID0gaW5zdGFuY2VzW3dlYnZpZXdJZCArICdfJyArIHZtLiRzY29wZS5vd25lcklkXTtcblxuICAgIGlmICghcGFyZW50Vm0pIHtcbiAgICAgIHBhcmVudFZtID0gdGhpcy4kdm07XG4gICAgfVxuXG4gICAgdm0uJHBhcmVudCA9IHBhcmVudFZtO1xuICAgIHZtLiRyb290ID0gcGFyZW50Vm0uJHJvb3Q7XG4gICAgcGFyZW50Vm0uJGNoaWxkcmVuLnB1c2godm0pO1xuXG4gICAgdmFyIGNyZWF0ZWRWbSA9IGZ1bmN0aW9uIGNyZWF0ZWRWbSgpIHtcbiAgICAgIHZtLl9fY2FsbF9ob29rKCdjcmVhdGVkJyk7XG4gICAgfTtcblxuICAgIHZhciBtb3VudGVkVm0gPSBmdW5jdGlvbiBtb3VudGVkVm0oKSB7XG4gICAgICAvLyDlpITnkIblvZPliY0gdm0g5a2QXG4gICAgICBpZiAodm0uXyRjaGlsZFZ1ZXMpIHtcbiAgICAgICAgdm0uXyRjaGlsZFZ1ZXMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjcpIHtcbiAgICAgICAgICB2YXIgX3JlZjggPSBfc2xpY2VkVG9BcnJheShfcmVmNywgMSksXG4gICAgICAgICAgICAgIGNyZWF0ZWRWbSA9IF9yZWY4WzBdO1xuXG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZWRWbSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2bS5fJGNoaWxkVnVlcy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmOSkge1xuICAgICAgICAgIHZhciBfcmVmMTAgPSBfc2xpY2VkVG9BcnJheShfcmVmOSwgMiksXG4gICAgICAgICAgICAgIG1vdW50ZWRWbSA9IF9yZWYxMFsxXTtcblxuICAgICAgICAgIHJldHVybiBtb3VudGVkVm0oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGVsZXRlIHZtLl8kY2hpbGRWdWVzO1xuICAgICAgfVxuXG4gICAgICB2bS5fX2NhbGxfaG9vaygnYmVmb3JlTW91bnQnKTtcblxuICAgICAgdm0uX2lzTW91bnRlZCA9IHRydWU7XG5cbiAgICAgIHZtLl9fY2FsbF9ob29rKCdtb3VudGVkJyk7XG5cbiAgICAgIHZtLl9fY2FsbF9ob29rKCdvblJlYWR5Jyk7XG4gICAgfTsgLy8g5b2TIHBhcmVudFZtIOW3sue7jyBtb3VudGVkIOaXtu+8jOebtOaOpeinpuWPke+8jOWQpuWImeW7tui/n1xuXG5cbiAgICBpZiAoIXBhcmVudFZtIHx8IHBhcmVudFZtLl9pc01vdW50ZWQpIHtcbiAgICAgIGNyZWF0ZWRWbSgpO1xuICAgICAgbW91bnRlZFZtKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIChwYXJlbnRWbS5fJGNoaWxkVnVlcyB8fCAocGFyZW50Vm0uXyRjaGlsZFZ1ZXMgPSBbXSkpLnB1c2goW2NyZWF0ZWRWbSwgbW91bnRlZFZtXSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VBcHAodm0pIHtcbiAgICBfdnVlW1wiZGVmYXVsdFwiXS5wcm90b3R5cGUuXyRmYWxsYmFjayA9IHRydWU7IC8vIOmZjee6p++8iOiwg+aVtOWOnyB2dWUg55qE6YOo5YiG55Sf5ZG95ZGo5pyf77yM5aaCIGNyZWF0ZWTvvIxiZWZvcmVNb3VudCxpbmplY3QscHJvdmlkZe+8iVxuXG4gICAgX3Z1ZVtcImRlZmF1bHRcIl0ubWl4aW4oe1xuICAgICAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICAgICAgLy8g5aSE55CGIGluamVjdGlvbnMsIHRyaWdnZXJFdmVudCDmmK/lvILmraXvvIzkuJTop6blj5Hml7bmnLrlvojmhaLvvIzmlYXlu7bov58gcmVsYXRpb24g6K6+572uXG4gICAgICAgIGlmICh0aGlzLm1wVHlwZSAhPT0gJ2FwcCcpIHtcbiAgICAgICAgICBpbml0UmVmcyh0aGlzKTtcblxuICAgICAgICAgIHRoaXMuX19pbml0X2luamVjdGlvbnModGhpcyk7XG5cbiAgICAgICAgICB0aGlzLl9faW5pdF9wcm92aWRlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyc2VCYXNlQXBwKHZtLCB7XG4gICAgICBtb2NrczogbW9ja3MsXG4gICAgICBpbml0UmVmczogZnVuY3Rpb24gaW5pdFJlZnMoKSB7fSAvLyBhdHRhY2hlZCDml7bvvIzlj6/og73mn6Xor6LkuI3liLBcblxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXBwKHZtKSB7XG4gICAgX3Z1ZVtcImRlZmF1bHRcIl0ucHJvdG90eXBlLmdldE9wZW5lckV2ZW50Q2hhbm5lbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghdGhpcy5fX2V2ZW50Q2hhbm5lbF9fKSB7XG4gICAgICAgIHRoaXMuX19ldmVudENoYW5uZWxfXyA9IG5ldyBFdmVudENoYW5uZWwoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX19ldmVudENoYW5uZWxfXztcbiAgICB9O1xuXG4gICAgdmFyIGNhbGxIb29rID0gX3Z1ZVtcImRlZmF1bHRcIl0ucHJvdG90eXBlLl9fY2FsbF9ob29rO1xuXG4gICAgX3Z1ZVtcImRlZmF1bHRcIl0ucHJvdG90eXBlLl9fY2FsbF9ob29rID0gZnVuY3Rpb24gKGhvb2ssIGFyZ3MpIHtcbiAgICAgIGlmIChob29rID09PSAnb25Mb2FkJyAmJiBhcmdzICYmIGFyZ3MuX19pZF9fKSB7XG4gICAgICAgIHRoaXMuX19ldmVudENoYW5uZWxfXyA9IGdldEV2ZW50Q2hhbm5lbChhcmdzLl9faWRfXyk7XG4gICAgICAgIGRlbGV0ZSBhcmdzLl9faWRfXztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhbGxIb29rLmNhbGwodGhpcywgaG9vaywgYXJncyk7XG4gICAgfTtcblxuICAgIEFwcChwYXJzZUFwcCh2bSkpO1xuICAgIHJldHVybiB2bTtcbiAgfVxuXG4gIHZhciBlbmNvZGVSZXNlcnZlUkUgPSAvWyEnKCkqXS9nO1xuXG4gIHZhciBlbmNvZGVSZXNlcnZlUmVwbGFjZXIgPSBmdW5jdGlvbiBlbmNvZGVSZXNlcnZlUmVwbGFjZXIoYykge1xuICAgIHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpO1xuICB9O1xuXG4gIHZhciBjb21tYVJFID0gLyUyQy9nOyAvLyBmaXhlZCBlbmNvZGVVUklDb21wb25lbnQgd2hpY2ggaXMgbW9yZSBjb25mb3JtYW50IHRvIFJGQzM5ODY6XG4gIC8vIC0gZXNjYXBlcyBbIScoKSpdXG4gIC8vIC0gcHJlc2VydmUgY29tbWFzXG5cbiAgdmFyIGVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShzdHIpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZShlbmNvZGVSZXNlcnZlUkUsIGVuY29kZVJlc2VydmVSZXBsYWNlcikucmVwbGFjZShjb21tYVJFLCAnLCcpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeVF1ZXJ5KG9iaikge1xuICAgIHZhciBlbmNvZGVTdHIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGVuY29kZTtcbiAgICB2YXIgcmVzID0gb2JqID8gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVTdHIoa2V5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIHZhbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWwyKSB7XG4gICAgICAgICAgaWYgKHZhbDIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWwyID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVTdHIoa2V5KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVN0cihrZXkpICsgJz0nICsgZW5jb2RlU3RyKHZhbDIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyYnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVuY29kZVN0cihrZXkpICsgJz0nICsgZW5jb2RlU3RyKHZhbCk7XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geC5sZW5ndGggPiAwO1xuICAgIH0pLmpvaW4oJyYnKSA6IG51bGw7XG4gICAgcmV0dXJuIHJlcyA/IFwiP1wiLmNvbmNhdChyZXMpIDogJyc7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUJhc2VDb21wb25lbnQodnVlQ29tcG9uZW50T3B0aW9ucykge1xuICAgIHZhciBfcmVmMTEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgICBpc1BhZ2UgPSBfcmVmMTEuaXNQYWdlLFxuICAgICAgICBpbml0UmVsYXRpb24gPSBfcmVmMTEuaW5pdFJlbGF0aW9uO1xuXG4gICAgdmFyIF9pbml0VnVlQ29tcG9uZW50ID0gaW5pdFZ1ZUNvbXBvbmVudChfdnVlW1wiZGVmYXVsdFwiXSwgdnVlQ29tcG9uZW50T3B0aW9ucyksXG4gICAgICAgIF9pbml0VnVlQ29tcG9uZW50MiA9IF9zbGljZWRUb0FycmF5KF9pbml0VnVlQ29tcG9uZW50LCAyKSxcbiAgICAgICAgVnVlQ29tcG9uZW50ID0gX2luaXRWdWVDb21wb25lbnQyWzBdLFxuICAgICAgICB2dWVPcHRpb25zID0gX2luaXRWdWVDb21wb25lbnQyWzFdO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIG11bHRpcGxlU2xvdHM6IHRydWUsXG4gICAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZVxuICAgIH0sIHZ1ZU9wdGlvbnMub3B0aW9ucyB8fCB7fSk7XG5cbiAgICB2YXIgY29tcG9uZW50T3B0aW9ucyA9IHtcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBkYXRhOiBpbml0RGF0YSh2dWVPcHRpb25zLCBfdnVlW1wiZGVmYXVsdFwiXS5wcm90b3R5cGUpLFxuICAgICAgYmVoYXZpb3JzOiBpbml0QmVoYXZpb3JzKHZ1ZU9wdGlvbnMsIGluaXRCZWhhdmlvciksXG4gICAgICBwcm9wZXJ0aWVzOiBpbml0UHJvcGVydGllcyh2dWVPcHRpb25zLnByb3BzLCBmYWxzZSwgdnVlT3B0aW9ucy5fX2ZpbGUpLFxuICAgICAgbGlmZXRpbWVzOiB7XG4gICAgICAgIGF0dGFjaGVkOiBmdW5jdGlvbiBhdHRhY2hlZCgpIHtcbiAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcztcbiAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1wVHlwZTogaXNQYWdlLmNhbGwodGhpcykgPyAncGFnZScgOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIG1wSW5zdGFuY2U6IHRoaXMsXG4gICAgICAgICAgICBwcm9wc0RhdGE6IHByb3BlcnRpZXNcbiAgICAgICAgICB9O1xuICAgICAgICAgIGluaXRWdWVJZHMocHJvcGVydGllcy52dWVJZCwgdGhpcyk7IC8vIOWkhOeQhueItuWtkOWFs+ezu1xuXG4gICAgICAgICAgaW5pdFJlbGF0aW9uLmNhbGwodGhpcywge1xuICAgICAgICAgICAgdnVlUGlkOiB0aGlzLl8kdnVlUGlkLFxuICAgICAgICAgICAgdnVlT3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgIH0pOyAvLyDliJ3lp4vljJYgdnVlIOWunuS+i1xuXG4gICAgICAgICAgdGhpcy4kdm0gPSBuZXcgVnVlQ29tcG9uZW50KG9wdGlvbnMpOyAvLyDlpITnkIYkc2xvdHMsJHNjb3BlZFNsb3Rz77yI5pqC5LiN5pSv5oyB5Yqo5oCB5Y+Y5YyWJHNsb3Rz77yJXG5cbiAgICAgICAgICBpbml0U2xvdHModGhpcy4kdm0sIHByb3BlcnRpZXMudnVlU2xvdHMpOyAvLyDop6blj5HpppbmrKEgc2V0RGF0YVxuXG4gICAgICAgICAgdGhpcy4kdm0uJG1vdW50KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlYWR5OiBmdW5jdGlvbiByZWFkeSgpIHtcbiAgICAgICAgICAvLyDlvZPnu4Tku7YgcHJvcHMg6buY6K6k5YC85Li6IHRydWXvvIzliJ3lp4vljJbml7bkvKDlhaUgZmFsc2Ug5Lya5a+86Ie0IGNyZWF0ZWQscmVhZHkg6Kem5Y+RLCDkvYYgYXR0YWNoZWQg5LiN6Kem5Y+RXG4gICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vY29tbXVuaXR5L2RldmVsb3AvZG9jLzAwMDY2YWUyODQ0Y2MwZjhlYjg4M2UyYTU1NzgwMFxuICAgICAgICAgIGlmICh0aGlzLiR2bSkge1xuICAgICAgICAgICAgdGhpcy4kdm0uX2lzTW91bnRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdtb3VudGVkJyk7XG5cbiAgICAgICAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblJlYWR5Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZXRhY2hlZDogZnVuY3Rpb24gZGV0YWNoZWQoKSB7XG4gICAgICAgICAgdGhpcy4kdm0gJiYgdGhpcy4kdm0uJGRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHBhZ2VMaWZldGltZXM6IHtcbiAgICAgICAgc2hvdzogZnVuY3Rpb24gc2hvdyhhcmdzKSB7XG4gICAgICAgICAgdGhpcy4kdm0gJiYgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uUGFnZVNob3cnLCBhcmdzKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgICAgICB0aGlzLiR2bSAmJiB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25QYWdlSGlkZScpO1xuICAgICAgICB9LFxuICAgICAgICByZXNpemU6IGZ1bmN0aW9uIHJlc2l6ZShzaXplKSB7XG4gICAgICAgICAgdGhpcy4kdm0gJiYgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uUGFnZVJlc2l6ZScsIHNpemUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICBfX2w6IGhhbmRsZUxpbmssXG4gICAgICAgIF9fZTogaGFuZGxlRXZlbnRcbiAgICAgIH1cbiAgICB9OyAvLyBleHRlcm5hbENsYXNzZXNcblxuICAgIGlmICh2dWVPcHRpb25zLmV4dGVybmFsQ2xhc3Nlcykge1xuICAgICAgY29tcG9uZW50T3B0aW9ucy5leHRlcm5hbENsYXNzZXMgPSB2dWVPcHRpb25zLmV4dGVybmFsQ2xhc3NlcztcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2dWVPcHRpb25zLnd4c0NhbGxNZXRob2RzKSkge1xuICAgICAgdnVlT3B0aW9ucy53eHNDYWxsTWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsTWV0aG9kKSB7XG4gICAgICAgIGNvbXBvbmVudE9wdGlvbnMubWV0aG9kc1tjYWxsTWV0aG9kXSA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuJHZtW2NhbGxNZXRob2RdKGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGlzUGFnZSkge1xuICAgICAgcmV0dXJuIGNvbXBvbmVudE9wdGlvbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtjb21wb25lbnRPcHRpb25zLCBWdWVDb21wb25lbnRdO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VDb21wb25lbnQodnVlT3B0aW9ucykge1xuICAgIHZhciBfcGFyc2VCYXNlQ29tcG9uZW50ID0gcGFyc2VCYXNlQ29tcG9uZW50KHZ1ZU9wdGlvbnMpLFxuICAgICAgICBfcGFyc2VCYXNlQ29tcG9uZW50MiA9IF9zbGljZWRUb0FycmF5KF9wYXJzZUJhc2VDb21wb25lbnQsIDIpLFxuICAgICAgICBjb21wb25lbnRPcHRpb25zID0gX3BhcnNlQmFzZUNvbXBvbmVudDJbMF0sXG4gICAgICAgIFZ1ZUNvbXBvbmVudCA9IF9wYXJzZUJhc2VDb21wb25lbnQyWzFdO1xuXG4gICAgY29tcG9uZW50T3B0aW9ucy5saWZldGltZXMuYXR0YWNoZWQgPSBmdW5jdGlvbiBhdHRhY2hlZCgpIHtcbiAgICAgIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIG1wVHlwZTogaXNQYWdlLmNhbGwodGhpcykgPyAncGFnZScgOiAnY29tcG9uZW50JyxcbiAgICAgICAgbXBJbnN0YW5jZTogdGhpcyxcbiAgICAgICAgcHJvcHNEYXRhOiBwcm9wZXJ0aWVzXG4gICAgICB9O1xuICAgICAgaW5pdFZ1ZUlkcyhwcm9wZXJ0aWVzLnZ1ZUlkLCB0aGlzKTsgLy8g5Yid5aeL5YyWIHZ1ZSDlrp7kvotcblxuICAgICAgdGhpcy4kdm0gPSBuZXcgVnVlQ29tcG9uZW50KG9wdGlvbnMpOyAvLyDlpITnkIYkc2xvdHMsJHNjb3BlZFNsb3Rz77yI5pqC5LiN5pSv5oyB5Yqo5oCB5Y+Y5YyWJHNsb3Rz77yJXG5cbiAgICAgIGluaXRTbG90cyh0aGlzLiR2bSwgcHJvcGVydGllcy52dWVTbG90cyk7IC8vIOWkhOeQhueItuWtkOWFs+ezu1xuXG4gICAgICBpbml0UmVsYXRpb24uY2FsbCh0aGlzLCB7XG4gICAgICAgIHZ1ZVBpZDogdGhpcy5fJHZ1ZVBpZCxcbiAgICAgICAgbXBJbnN0YW5jZTogdGhpc1xuICAgICAgfSk7IC8vIOinpuWPkemmluasoSBzZXREYXRhXG5cbiAgICAgIHRoaXMuJHZtLiRtb3VudCgpO1xuICAgIH07IC8vIHJlYWR5IOavlCBoYW5kbGVMaW5rIOi/mOaXqe+8jOWIneWni+WMlumAu+i+keaUvuWIsCBoYW5kbGVMaW5rIOS4rVxuXG5cbiAgICBkZWxldGUgY29tcG9uZW50T3B0aW9ucy5saWZldGltZXMucmVhZHk7XG4gICAgY29tcG9uZW50T3B0aW9ucy5tZXRob2RzLl9fbCA9IGhhbmRsZUxpbmskMTtcbiAgICByZXR1cm4gY29tcG9uZW50T3B0aW9ucztcbiAgfVxuXG4gIHZhciBob29rcyQxID0gWydvblNob3cnLCAnb25IaWRlJywgJ29uVW5sb2FkJ107XG4gIGhvb2tzJDEucHVzaC5hcHBseShob29rcyQxLCBQQUdFX0VWRU5UX0hPT0tTKTtcblxuICBmdW5jdGlvbiBwYXJzZUJhc2VQYWdlKHZ1ZVBhZ2VPcHRpb25zLCBfcmVmMTIpIHtcbiAgICB2YXIgaXNQYWdlID0gX3JlZjEyLmlzUGFnZSxcbiAgICAgICAgaW5pdFJlbGF0aW9uID0gX3JlZjEyLmluaXRSZWxhdGlvbjtcbiAgICB2YXIgcGFnZU9wdGlvbnMgPSBwYXJzZUNvbXBvbmVudCh2dWVQYWdlT3B0aW9ucyk7XG4gICAgaW5pdEhvb2tzKHBhZ2VPcHRpb25zLm1ldGhvZHMsIGhvb2tzJDEsIHZ1ZVBhZ2VPcHRpb25zKTtcblxuICAgIHBhZ2VPcHRpb25zLm1ldGhvZHMub25Mb2FkID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBxdWVyeTtcbiAgICAgIHZhciBjb3B5UXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSk7XG4gICAgICBkZWxldGUgY29weVF1ZXJ5Ll9faWRfXztcbiAgICAgIHRoaXMuJHBhZ2UgPSB7XG4gICAgICAgIGZ1bGxQYXRoOiAnLycgKyAodGhpcy5yb3V0ZSB8fCB0aGlzLmlzKSArIHN0cmluZ2lmeVF1ZXJ5KGNvcHlRdWVyeSlcbiAgICAgIH07XG4gICAgICB0aGlzLiR2bS4kbXAucXVlcnkgPSBxdWVyeTsgLy8g5YW85a65IG1wdnVlXG5cbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvbkxvYWQnLCBxdWVyeSk7XG4gICAgfTtcblxuICAgIHJldHVybiBwYWdlT3B0aW9ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlUGFnZSh2dWVQYWdlT3B0aW9ucykge1xuICAgIHZhciBwYWdlT3B0aW9ucyA9IHBhcnNlQmFzZVBhZ2UodnVlUGFnZU9wdGlvbnMsIHtcbiAgICAgIGlzUGFnZTogaXNQYWdlLFxuICAgICAgaW5pdFJlbGF0aW9uOiBpbml0UmVsYXRpb25cbiAgICB9KTsgLy8g6aG16Z2i6ZyA6KaB5ZyoIHJlYWR5IOS4reinpuWPke+8jOWFtuS7lue7hOS7tuaYr+WcqCBoYW5kbGVMaW5rIOS4reinpuWPkVxuXG4gICAgcGFnZU9wdGlvbnMubGlmZXRpbWVzLnJlYWR5ID0gZnVuY3Rpb24gcmVhZHkoKSB7XG4gICAgICBpZiAodGhpcy4kdm0gJiYgdGhpcy4kdm0ubXBUeXBlID09PSAncGFnZScpIHtcbiAgICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ2NyZWF0ZWQnKTtcblxuICAgICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnYmVmb3JlTW91bnQnKTtcblxuICAgICAgICB0aGlzLiR2bS5faXNNb3VudGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnbW91bnRlZCcpO1xuXG4gICAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblJlYWR5Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzICYmIGNvbnNvbGUud2Fybih0aGlzLmlzICsgJyBpcyBub3QgcmVhZHknKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcGFnZU9wdGlvbnMubGlmZXRpbWVzLmRldGFjaGVkID0gZnVuY3Rpb24gZGV0YWNoZWQoKSB7XG4gICAgICB0aGlzLiR2bSAmJiB0aGlzLiR2bS4kZGVzdHJveSgpOyAvLyDmuIXnkIZcblxuICAgICAgdmFyIHBhZ2VJZCA9IHRoaXMucGFnZWluc3RhbmNlLl9fcGFnZUlkX187XG4gICAgICBPYmplY3Qua2V5cyhpbnN0YW5jZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoa2V5LmluZGV4T2YocGFnZUlkICsgJ18nKSA9PT0gMCkge1xuICAgICAgICAgIGRlbGV0ZSBpbnN0YW5jZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBwYWdlT3B0aW9ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBhZ2UodnVlUGFnZU9wdGlvbnMpIHtcbiAgICB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50KHBhcnNlUGFnZSh2dWVQYWdlT3B0aW9ucykpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudCh2dWVPcHRpb25zKSB7XG4gICAge1xuICAgICAgcmV0dXJuIENvbXBvbmVudChwYXJzZUNvbXBvbmVudCh2dWVPcHRpb25zKSk7XG4gICAgfVxuICB9XG5cbiAgdG9kb3MuZm9yRWFjaChmdW5jdGlvbiAodG9kb0FwaSkge1xuICAgIHByb3RvY29sc1t0b2RvQXBpXSA9IGZhbHNlO1xuICB9KTtcbiAgY2FuSVVzZXMuZm9yRWFjaChmdW5jdGlvbiAoY2FuSVVzZUFwaSkge1xuICAgIHZhciBhcGlOYW1lID0gcHJvdG9jb2xzW2NhbklVc2VBcGldICYmIHByb3RvY29sc1tjYW5JVXNlQXBpXS5uYW1lID8gcHJvdG9jb2xzW2NhbklVc2VBcGldLm5hbWUgOiBjYW5JVXNlQXBpO1xuXG4gICAgaWYgKCFxYS5jYW5JVXNlKGFwaU5hbWUpKSB7XG4gICAgICBwcm90b2NvbHNbY2FuSVVzZUFwaV0gPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICB2YXIgdW5pID0ge307XG5cbiAgaWYgKHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcgJiYgXCJxdWlja2FwcC13ZWJ2aWV3XCIgIT09ICdhcHAtcGx1cycpIHtcbiAgICB1bmkgPSBuZXcgUHJveHkoe30sIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KHRhcmdldCwgbmFtZSkge1xuICAgICAgICBpZiAoaGFzT3duKHRhcmdldCwgbmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJhc2VBcGlbbmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gYmFzZUFwaVtuYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcGlbbmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG5hbWUsIGFwaVtuYW1lXSk7XG4gICAgICAgIH1cblxuICAgICAgICB7XG4gICAgICAgICAgaWYgKGV4dHJhQXBpW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG5hbWUsIGV4dHJhQXBpW25hbWVdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodG9kb0FwaXNbbmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgdG9kb0FwaXNbbmFtZV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudEFwaVtuYW1lXSkge1xuICAgICAgICAgIHJldHVybiBldmVudEFwaVtuYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzT3duKHFhLCBuYW1lKSAmJiAhaGFzT3duKHByb3RvY29scywgbmFtZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG5hbWUsIHdyYXBwZXIobmFtZSwgcWFbbmFtZV0pKTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBPYmplY3Qua2V5cyhiYXNlQXBpKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB1bmlbbmFtZV0gPSBiYXNlQXBpW25hbWVdO1xuICAgIH0pO1xuICAgIHtcbiAgICAgIE9iamVjdC5rZXlzKHRvZG9BcGlzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCB0b2RvQXBpc1tuYW1lXSk7XG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5rZXlzKGV4dHJhQXBpKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCB0b2RvQXBpc1tuYW1lXSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoZXZlbnRBcGkpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHVuaVtuYW1lXSA9IGV2ZW50QXBpW25hbWVdO1xuICAgIH0pO1xuICAgIE9iamVjdC5rZXlzKGFwaSkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG5hbWUsIGFwaVtuYW1lXSk7XG4gICAgfSk7XG4gICAgT2JqZWN0LmtleXMocWEpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIGlmIChoYXNPd24ocWEsIG5hbWUpIHx8IGhhc093bihwcm90b2NvbHMsIG5hbWUpKSB7XG4gICAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCB3cmFwcGVyKG5hbWUsIHFhW25hbWVdKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBxYS5jcmVhdGVBcHAgPSBjcmVhdGVBcHA7XG4gIHFhLmNyZWF0ZVBhZ2UgPSBjcmVhdGVQYWdlO1xuICBxYS5jcmVhdGVDb21wb25lbnQgPSBjcmVhdGVDb21wb25lbnQ7XG4gIHZhciB1bmkkMSA9IHVuaTtcbiAgdmFyIF9kZWZhdWx0ID0gdW5pJDE7XG4gIGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4gIC8qKiovXG59LFxuLyogMiAqL1xuXG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy9tcC12dWUvZGlzdC9tcC5ydW50aW1lLmVzbS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuXG4vKioqL1xuZnVuY3Rpb24gKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBfX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4gIC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL1xuXG5cbiAgKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAvKiFcbiAgICAqIFZ1ZS5qcyB2Mi42LjExXG4gICAgKiAoYykgMjAxNC0yMDIwIEV2YW4gWW91XG4gICAgKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gICAgKi9cblxuICAgIC8qICAqL1xuICAgIHZhciBlbXB0eU9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pOyAvLyBUaGVzZSBoZWxwZXJzIHByb2R1Y2UgYmV0dGVyIFZNIGNvZGUgaW4gSlMgZW5naW5lcyBkdWUgdG8gdGhlaXJcbiAgICAvLyBleHBsaWNpdG5lc3MgYW5kIGZ1bmN0aW9uIGlubGluaW5nLlxuXG4gICAgZnVuY3Rpb24gaXNVbmRlZih2KSB7XG4gICAgICByZXR1cm4gdiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNEZWYodikge1xuICAgICAgcmV0dXJuIHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzVHJ1ZSh2KSB7XG4gICAgICByZXR1cm4gdiA9PT0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0ZhbHNlKHYpIHtcbiAgICAgIHJldHVybiB2ID09PSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdmFsdWUgaXMgcHJpbWl0aXZlLlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICAgICgwLCBfdHlwZW9mMltcImRlZmF1bHRcIl0pKHZhbHVlKSA9PT0gJ3N5bWJvbCcgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICAgICAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAgICAgKiBpcyBhIEpTT04tY29tcGxpYW50IHR5cGUuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiAoMCwgX3R5cGVvZjJbXCJkZWZhdWx0XCJdKShvYmopID09PSAnb2JqZWN0JztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSByYXcgdHlwZSBzdHJpbmcgb2YgYSB2YWx1ZSwgZS5nLiwgW29iamVjdCBPYmplY3RdLlxuICAgICAqL1xuXG5cbiAgICB2YXIgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuICAgIGZ1bmN0aW9uIHRvUmF3VHlwZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIF90b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAgICAgKiBmb3IgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICAgICAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzUmVnRXhwKHYpIHtcbiAgICAgIHJldHVybiBfdG9TdHJpbmcuY2FsbCh2KSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHZhbCBpcyBhIHZhbGlkIGFycmF5IGluZGV4LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBpc1ZhbGlkQXJyYXlJbmRleCh2YWwpIHtcbiAgICAgIHZhciBuID0gcGFyc2VGbG9hdChTdHJpbmcodmFsKSk7XG4gICAgICByZXR1cm4gbiA+PSAwICYmIE1hdGguZmxvb3IobikgPT09IG4gJiYgaXNGaW5pdGUodmFsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1Byb21pc2UodmFsKSB7XG4gICAgICByZXR1cm4gaXNEZWYodmFsKSAmJiB0eXBlb2YgdmFsLnRoZW4gPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbFtcImNhdGNoXCJdID09PSAnZnVuY3Rpb24nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgdmFsdWUgdG8gYSBzdHJpbmcgdGhhdCBpcyBhY3R1YWxseSByZW5kZXJlZC5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gdG9TdHJpbmcodmFsKSB7XG4gICAgICByZXR1cm4gdmFsID09IG51bGwgPyAnJyA6IEFycmF5LmlzQXJyYXkodmFsKSB8fCBpc1BsYWluT2JqZWN0KHZhbCkgJiYgdmFsLnRvU3RyaW5nID09PSBfdG9TdHJpbmcgPyBKU09OLnN0cmluZ2lmeSh2YWwsIG51bGwsIDIpIDogU3RyaW5nKHZhbCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYW4gaW5wdXQgdmFsdWUgdG8gYSBudW1iZXIgZm9yIHBlcnNpc3RlbmNlLlxuICAgICAqIElmIHRoZSBjb252ZXJzaW9uIGZhaWxzLCByZXR1cm4gb3JpZ2luYWwgc3RyaW5nLlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiB0b051bWJlcih2YWwpIHtcbiAgICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWwpO1xuICAgICAgcmV0dXJuIGlzTmFOKG4pID8gdmFsIDogbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFrZSBhIG1hcCBhbmQgcmV0dXJuIGEgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGEga2V5XG4gICAgICogaXMgaW4gdGhhdCBtYXAuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIG1ha2VNYXAoc3RyLCBleHBlY3RzTG93ZXJDYXNlKSB7XG4gICAgICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHZhciBsaXN0ID0gc3RyLnNwbGl0KCcsJyk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBtYXBbbGlzdFtpXV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZSA/IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgcmV0dXJuIG1hcFt2YWwudG9Mb3dlckNhc2UoKV07XG4gICAgICB9IDogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICByZXR1cm4gbWFwW3ZhbF07XG4gICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIHRhZyBpcyBhIGJ1aWx0LWluIHRhZy5cbiAgICAgKi9cblxuXG4gICAgdmFyIGlzQnVpbHRJblRhZyA9IG1ha2VNYXAoJ3Nsb3QsY29tcG9uZW50JywgdHJ1ZSk7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIGlzIGEgcmVzZXJ2ZWQgYXR0cmlidXRlLlxuICAgICAqL1xuXG4gICAgdmFyIGlzUmVzZXJ2ZWRBdHRyaWJ1dGUgPSBtYWtlTWFwKCdrZXkscmVmLHNsb3Qsc2xvdC1zY29wZSxpcycpO1xuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbiBpdGVtIGZyb20gYW4gYXJyYXkuXG4gICAgICovXG5cbiAgICBmdW5jdGlvbiByZW1vdmUoYXJyLCBpdGVtKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCkge1xuICAgICAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcblxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayB3aGV0aGVyIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICAgICAqL1xuXG5cbiAgICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gICAgZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XG4gICAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gY2FjaGVkKGZuKSB7XG4gICAgICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuKHN0cikge1xuICAgICAgICB2YXIgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICAgICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsaW1pdGVkIHN0cmluZy5cbiAgICAgKi9cblxuXG4gICAgdmFyIGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XG4gICAgdmFyIGNhbWVsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCBmdW5jdGlvbiAoXywgYykge1xuICAgICAgICByZXR1cm4gYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQ2FwaXRhbGl6ZSBhIHN0cmluZy5cbiAgICAgKi9cblxuICAgIHZhciBjYXBpdGFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAgICAgKi9cblxuICAgIHZhciBoeXBoZW5hdGVSRSA9IC9cXEIoW0EtWl0pL2c7XG4gICAgdmFyIGh5cGhlbmF0ZSA9IGNhY2hlZChmdW5jdGlvbiAoc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsICctJDEnKS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFNpbXBsZSBiaW5kIHBvbHlmaWxsIGZvciBlbnZpcm9ubWVudHMgdGhhdCBkbyBub3Qgc3VwcG9ydCBpdCxcbiAgICAgKiBlLmcuLCBQaGFudG9tSlMgMS54LiBUZWNobmljYWxseSwgd2UgZG9uJ3QgbmVlZCB0aGlzIGFueW1vcmVcbiAgICAgKiBzaW5jZSBuYXRpdmUgYmluZCBpcyBub3cgcGVyZm9ybWFudCBlbm91Z2ggaW4gbW9zdCBicm93c2Vycy5cbiAgICAgKiBCdXQgcmVtb3ZpbmcgaXQgd291bGQgbWVhbiBicmVha2luZyBjb2RlIHRoYXQgd2FzIGFibGUgdG8gcnVuIGluXG4gICAgICogUGhhbnRvbUpTIDEueCwgc28gdGhpcyBtdXN0IGJlIGtlcHQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4gICAgICovXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG4gICAgZnVuY3Rpb24gcG9seWZpbGxCaW5kKGZuLCBjdHgpIHtcbiAgICAgIGZ1bmN0aW9uIGJvdW5kRm4oYSkge1xuICAgICAgICB2YXIgbCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHJldHVybiBsID8gbCA+IDEgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cykgOiBmbi5jYWxsKGN0eCwgYSkgOiBmbi5jYWxsKGN0eCk7XG4gICAgICB9XG5cbiAgICAgIGJvdW5kRm4uX2xlbmd0aCA9IGZuLmxlbmd0aDtcbiAgICAgIHJldHVybiBib3VuZEZuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5hdGl2ZUJpbmQoZm4sIGN0eCkge1xuICAgICAgcmV0dXJuIGZuLmJpbmQoY3R4KTtcbiAgICB9XG5cbiAgICB2YXIgYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kID8gbmF0aXZlQmluZCA6IHBvbHlmaWxsQmluZDtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGFuIEFycmF5LWxpa2Ugb2JqZWN0IHRvIGEgcmVhbCBBcnJheS5cbiAgICAgKi9cblxuICAgIGZ1bmN0aW9uIHRvQXJyYXkobGlzdCwgc3RhcnQpIHtcbiAgICAgIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgICAgIHZhciBpID0gbGlzdC5sZW5ndGggLSBzdGFydDtcbiAgICAgIHZhciByZXQgPSBuZXcgQXJyYXkoaSk7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGV4dGVuZCh0bywgX2Zyb20pIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBfZnJvbSkge1xuICAgICAgICB0b1trZXldID0gX2Zyb21ba2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRvO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiB0b09iamVjdChhcnIpIHtcbiAgICAgIHZhciByZXMgPSB7fTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycltpXSkge1xuICAgICAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gbm8gb3BlcmF0aW9uLlxuICAgICAqIFN0dWJiaW5nIGFyZ3MgdG8gbWFrZSBGbG93IGhhcHB5IHdpdGhvdXQgbGVhdmluZyB1c2VsZXNzIHRyYW5zcGlsZWQgY29kZVxuICAgICAqIHdpdGggLi4ucmVzdCAoaHR0cHM6Ly9mbG93Lm9yZy9ibG9nLzIwMTcvMDUvMDcvU3RyaWN0LUZ1bmN0aW9uLUNhbGwtQXJpdHkvKS5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gbm9vcChhLCBiLCBjKSB7fVxuICAgIC8qKlxuICAgICAqIEFsd2F5cyByZXR1cm4gZmFsc2UuXG4gICAgICovXG5cblxuICAgIHZhciBubyA9IGZ1bmN0aW9uIG5vKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgc2FtZSB2YWx1ZS5cbiAgICAgKi9cblxuXG4gICAgdmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gaWRlbnRpdHkoXykge1xuICAgICAgcmV0dXJuIF87XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0d28gdmFsdWVzIGFyZSBsb29zZWx5IGVxdWFsIC0gdGhhdCBpcyxcbiAgICAgKiBpZiB0aGV5IGFyZSBwbGFpbiBvYmplY3RzLCBkbyB0aGV5IGhhdmUgdGhlIHNhbWUgc2hhcGU/XG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGxvb3NlRXF1YWwoYSwgYikge1xuICAgICAgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBpc09iamVjdEEgPSBpc09iamVjdChhKTtcbiAgICAgIHZhciBpc09iamVjdEIgPSBpc09iamVjdChiKTtcblxuICAgICAgaWYgKGlzT2JqZWN0QSAmJiBpc09iamVjdEIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgaXNBcnJheUEgPSBBcnJheS5pc0FycmF5KGEpO1xuICAgICAgICAgIHZhciBpc0FycmF5QiA9IEFycmF5LmlzQXJyYXkoYik7XG5cbiAgICAgICAgICBpZiAoaXNBcnJheUEgJiYgaXNBcnJheUIpIHtcbiAgICAgICAgICAgIHJldHVybiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICAgICAgICByZXR1cm4gbG9vc2VFcXVhbChlLCBiW2ldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKCk7XG4gICAgICAgICAgfSBlbHNlIGlmICghaXNBcnJheUEgJiYgIWlzQXJyYXlCKSB7XG4gICAgICAgICAgICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhhKTtcbiAgICAgICAgICAgIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKGIpO1xuICAgICAgICAgICAgcmV0dXJuIGtleXNBLmxlbmd0aCA9PT0ga2V5c0IubGVuZ3RoICYmIGtleXNBLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGxvb3NlRXF1YWwoYVtrZXldLCBiW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWlzT2JqZWN0QSAmJiAhaXNPYmplY3RCKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcoYSkgPT09IFN0cmluZyhiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBmaXJzdCBpbmRleCBhdCB3aGljaCBhIGxvb3NlbHkgZXF1YWwgdmFsdWUgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIGFycmF5IChpZiB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdCwgdGhlIGFycmF5IG11c3RcbiAgICAgKiBjb250YWluIGFuIG9iamVjdCBvZiB0aGUgc2FtZSBzaGFwZSksIG9yIC0xIGlmIGl0IGlzIG5vdCBwcmVzZW50LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBsb29zZUluZGV4T2YoYXJyLCB2YWwpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsb29zZUVxdWFsKGFycltpXSwgdmFsKSkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5zdXJlIGEgZnVuY3Rpb24gaXMgY2FsbGVkIG9ubHkgb25jZS5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gb25jZShmbikge1xuICAgICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIEFTU0VUX1RZUEVTID0gWydjb21wb25lbnQnLCAnZGlyZWN0aXZlJywgJ2ZpbHRlciddO1xuICAgIHZhciBMSUZFQ1lDTEVfSE9PS1MgPSBbJ2JlZm9yZUNyZWF0ZScsICdjcmVhdGVkJywgJ2JlZm9yZU1vdW50JywgJ21vdW50ZWQnLCAnYmVmb3JlVXBkYXRlJywgJ3VwZGF0ZWQnLCAnYmVmb3JlRGVzdHJveScsICdkZXN0cm95ZWQnLCAnYWN0aXZhdGVkJywgJ2RlYWN0aXZhdGVkJywgJ2Vycm9yQ2FwdHVyZWQnLCAnc2VydmVyUHJlZmV0Y2gnXTtcbiAgICAvKiAgKi9cblxuICAgIHZhciBjb25maWcgPSB7XG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbiBtZXJnZSBzdHJhdGVnaWVzICh1c2VkIGluIGNvcmUvdXRpbC9vcHRpb25zKVxuICAgICAgICovXG4gICAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICAgIG9wdGlvbk1lcmdlU3RyYXRlZ2llczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAgICAgLyoqXG4gICAgICAgKiBXaGV0aGVyIHRvIHN1cHByZXNzIHdhcm5pbmdzLlxuICAgICAgICovXG4gICAgICBzaWxlbnQ6IGZhbHNlLFxuXG4gICAgICAvKipcbiAgICAgICAqIFNob3cgcHJvZHVjdGlvbiBtb2RlIHRpcCBtZXNzYWdlIG9uIGJvb3Q/XG4gICAgICAgKi9cbiAgICAgIHByb2R1Y3Rpb25UaXA6IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nLFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZXRoZXIgdG8gZW5hYmxlIGRldnRvb2xzXG4gICAgICAgKi9cbiAgICAgIGRldnRvb2xzOiBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJyxcblxuICAgICAgLyoqXG4gICAgICAgKiBXaGV0aGVyIHRvIHJlY29yZCBwZXJmXG4gICAgICAgKi9cbiAgICAgIHBlcmZvcm1hbmNlOiBmYWxzZSxcblxuICAgICAgLyoqXG4gICAgICAgKiBFcnJvciBoYW5kbGVyIGZvciB3YXRjaGVyIGVycm9yc1xuICAgICAgICovXG4gICAgICBlcnJvckhhbmRsZXI6IG51bGwsXG5cbiAgICAgIC8qKlxuICAgICAgICogV2FybiBoYW5kbGVyIGZvciB3YXRjaGVyIHdhcm5zXG4gICAgICAgKi9cbiAgICAgIHdhcm5IYW5kbGVyOiBudWxsLFxuXG4gICAgICAvKipcbiAgICAgICAqIElnbm9yZSBjZXJ0YWluIGN1c3RvbSBlbGVtZW50c1xuICAgICAgICovXG4gICAgICBpZ25vcmVkRWxlbWVudHM6IFtdLFxuXG4gICAgICAvKipcbiAgICAgICAqIEN1c3RvbSB1c2VyIGtleSBhbGlhc2VzIGZvciB2LW9uXG4gICAgICAgKi9cbiAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgICAga2V5Q29kZXM6IE9iamVjdC5jcmVhdGUobnVsbCksXG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgaWYgYSB0YWcgaXMgcmVzZXJ2ZWQgc28gdGhhdCBpdCBjYW5ub3QgYmUgcmVnaXN0ZXJlZCBhcyBhXG4gICAgICAgKiBjb21wb25lbnQuIFRoaXMgaXMgcGxhdGZvcm0tZGVwZW5kZW50IGFuZCBtYXkgYmUgb3ZlcndyaXR0ZW4uXG4gICAgICAgKi9cbiAgICAgIGlzUmVzZXJ2ZWRUYWc6IG5vLFxuXG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSB1c2VkIGFzIGEgY29tcG9uZW50XG4gICAgICAgKiBwcm9wLiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgICAgICovXG4gICAgICBpc1Jlc2VydmVkQXR0cjogbm8sXG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgaWYgYSB0YWcgaXMgYW4gdW5rbm93biBlbGVtZW50LlxuICAgICAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgICAgICovXG4gICAgICBpc1Vua25vd25FbGVtZW50OiBubyxcblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgdGhlIG5hbWVzcGFjZSBvZiBhbiBlbGVtZW50XG4gICAgICAgKi9cbiAgICAgIGdldFRhZ05hbWVzcGFjZTogbm9vcCxcblxuICAgICAgLyoqXG4gICAgICAgKiBQYXJzZSB0aGUgcmVhbCB0YWcgbmFtZSBmb3IgdGhlIHNwZWNpZmljIHBsYXRmb3JtLlxuICAgICAgICovXG4gICAgICBwYXJzZVBsYXRmb3JtVGFnTmFtZTogaWRlbnRpdHksXG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG11c3QgYmUgYm91bmQgdXNpbmcgcHJvcGVydHksIGUuZy4gdmFsdWVcbiAgICAgICAqIFBsYXRmb3JtLWRlcGVuZGVudC5cbiAgICAgICAqL1xuICAgICAgbXVzdFVzZVByb3A6IG5vLFxuXG4gICAgICAvKipcbiAgICAgICAqIFBlcmZvcm0gdXBkYXRlcyBhc3luY2hyb25vdXNseS4gSW50ZW5kZWQgdG8gYmUgdXNlZCBieSBWdWUgVGVzdCBVdGlsc1xuICAgICAgICogVGhpcyB3aWxsIHNpZ25pZmljYW50bHkgcmVkdWNlIHBlcmZvcm1hbmNlIGlmIHNldCB0byBmYWxzZS5cbiAgICAgICAqL1xuICAgICAgYXN5bmM6IHRydWUsXG5cbiAgICAgIC8qKlxuICAgICAgICogRXhwb3NlZCBmb3IgbGVnYWN5IHJlYXNvbnNcbiAgICAgICAqL1xuICAgICAgX2xpZmVjeWNsZUhvb2tzOiBMSUZFQ1lDTEVfSE9PS1NcbiAgICB9O1xuICAgIC8qICAqL1xuXG4gICAgLyoqXG4gICAgICogdW5pY29kZSBsZXR0ZXJzIHVzZWQgZm9yIHBhcnNpbmcgaHRtbCB0YWdzLCBjb21wb25lbnQgbmFtZXMgYW5kIHByb3BlcnR5IHBhdGhzLlxuICAgICAqIHVzaW5nIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNTMvc2VtYW50aWNzLXNjcmlwdGluZy5odG1sI3BvdGVudGlhbGN1c3RvbWVsZW1lbnRuYW1lXG4gICAgICogc2tpcHBpbmcgXFx1MTAwMDAtXFx1RUZGRkYgZHVlIHRvIGl0IGZyZWV6aW5nIHVwIFBoYW50b21KU1xuICAgICAqL1xuXG4gICAgdmFyIHVuaWNvZGVSZWdFeHAgPSAvYS16QS1aXFx1MDBCN1xcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwM0YtXFx1MjA0MFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRC87XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBzdHJpbmcgc3RhcnRzIHdpdGggJCBvciBfXG4gICAgICovXG5cbiAgICBmdW5jdGlvbiBpc1Jlc2VydmVkKHN0cikge1xuICAgICAgdmFyIGMgPSAoc3RyICsgJycpLmNoYXJDb2RlQXQoMCk7XG4gICAgICByZXR1cm4gYyA9PT0gMHgyNCB8fCBjID09PSAweDVGO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgYSBwcm9wZXJ0eS5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gZGVmKG9iaiwga2V5LCB2YWwsIGVudW1lcmFibGUpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICBlbnVtZXJhYmxlOiAhIWVudW1lcmFibGUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJzZSBzaW1wbGUgcGF0aC5cbiAgICAgKi9cblxuXG4gICAgdmFyIGJhaWxSRSA9IG5ldyBSZWdFeHAoXCJbXlwiICsgdW5pY29kZVJlZ0V4cC5zb3VyY2UgKyBcIi4kX1xcXFxkXVwiKTtcblxuICAgIGZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gICAgICBpZiAoYmFpbFJFLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvYmogPSBvYmpbc2VnbWVudHNbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH07XG4gICAgfVxuICAgIC8qICAqL1xuICAgIC8vIGNhbiB3ZSB1c2UgX19wcm90b19fP1xuXG5cbiAgICB2YXIgaGFzUHJvdG8gPSAoJ19fcHJvdG9fXycgaW4ge30pOyAvLyBCcm93c2VyIGVudmlyb25tZW50IHNuaWZmaW5nXG5cbiAgICB2YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgdmFyIGluV2VleCA9IHR5cGVvZiBXWEVudmlyb25tZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhIVdYRW52aXJvbm1lbnQucGxhdGZvcm07XG4gICAgdmFyIHdlZXhQbGF0Zm9ybSA9IGluV2VleCAmJiBXWEVudmlyb25tZW50LnBsYXRmb3JtLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIFVBID0gaW5Ccm93c2VyICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIGlzSUUgPSBVQSAmJiAvbXNpZXx0cmlkZW50Ly50ZXN0KFVBKTtcbiAgICB2YXIgaXNJRTkgPSBVQSAmJiBVQS5pbmRleE9mKCdtc2llIDkuMCcpID4gMDtcbiAgICB2YXIgaXNFZGdlID0gVUEgJiYgVUEuaW5kZXhPZignZWRnZS8nKSA+IDA7XG4gICAgdmFyIGlzQW5kcm9pZCA9IFVBICYmIFVBLmluZGV4T2YoJ2FuZHJvaWQnKSA+IDAgfHwgd2VleFBsYXRmb3JtID09PSAnYW5kcm9pZCc7XG4gICAgdmFyIGlzSU9TID0gVUEgJiYgL2lwaG9uZXxpcGFkfGlwb2R8aW9zLy50ZXN0KFVBKSB8fCB3ZWV4UGxhdGZvcm0gPT09ICdpb3MnO1xuICAgIHZhciBpc0Nocm9tZSA9IFVBICYmIC9jaHJvbWVcXC9cXGQrLy50ZXN0KFVBKSAmJiAhaXNFZGdlO1xuICAgIHZhciBpc1BoYW50b21KUyA9IFVBICYmIC9waGFudG9tanMvLnRlc3QoVUEpO1xuICAgIHZhciBpc0ZGID0gVUEgJiYgVUEubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKTsgLy8gRmlyZWZveCBoYXMgYSBcIndhdGNoXCIgZnVuY3Rpb24gb24gT2JqZWN0LnByb3RvdHlwZS4uLlxuXG4gICAgdmFyIG5hdGl2ZVdhdGNoID0ge30ud2F0Y2g7XG5cbiAgICBpZiAoaW5Ccm93c2VyKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgb3B0cyA9IHt9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3B0cywgJ3Bhc3NpdmUnLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7fVxuICAgICAgICB9KTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzI4NVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0LXBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfSAvLyB0aGlzIG5lZWRzIHRvIGJlIGxhenktZXZhbGVkIGJlY2F1c2UgdnVlIG1heSBiZSByZXF1aXJlZCBiZWZvcmVcbiAgICAvLyB2dWUtc2VydmVyLXJlbmRlcmVyIGNhbiBzZXQgVlVFX0VOVlxuXG5cbiAgICB2YXIgX2lzU2VydmVyO1xuXG4gICAgdmFyIGlzU2VydmVyUmVuZGVyaW5nID0gZnVuY3Rpb24gaXNTZXJ2ZXJSZW5kZXJpbmcoKSB7XG4gICAgICBpZiAoX2lzU2VydmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmICghaW5Ccm93c2VyICYmICFpbldlZXggJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBkZXRlY3QgcHJlc2VuY2Ugb2YgdnVlLXNlcnZlci1yZW5kZXJlciBhbmQgYXZvaWRcbiAgICAgICAgICAvLyBXZWJwYWNrIHNoaW1taW5nIHRoZSBwcm9jZXNzXG4gICAgICAgICAgX2lzU2VydmVyID0gZ2xvYmFsWydwcm9jZXNzJ10gJiYgZ2xvYmFsWydwcm9jZXNzJ10uZW52LlZVRV9FTlYgPT09ICdzZXJ2ZXInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9pc1NlcnZlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfaXNTZXJ2ZXI7XG4gICAgfTsgLy8gZGV0ZWN0IGRldnRvb2xzXG5cblxuICAgIHZhciBkZXZ0b29scyA9IGluQnJvd3NlciAmJiB3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG4gICAgZnVuY3Rpb24gaXNOYXRpdmUoQ3Rvcikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBDdG9yID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChDdG9yLnRvU3RyaW5nKCkpO1xuICAgIH1cblxuICAgIHZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTeW1ib2wpICYmIHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShSZWZsZWN0Lm93bktleXMpO1xuXG4gICAgdmFyIF9TZXQ7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG5cblxuICAgIGlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTZXQpKSB7XG4gICAgICAvLyB1c2UgbmF0aXZlIFNldCB3aGVuIGF2YWlsYWJsZS5cbiAgICAgIF9TZXQgPSBTZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGEgbm9uLXN0YW5kYXJkIFNldCBwb2x5ZmlsbCB0aGF0IG9ubHkgd29ya3Mgd2l0aCBwcmltaXRpdmUga2V5cy5cbiAgICAgIF9TZXQgPSAvKkBfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBTZXQoKSB7XG4gICAgICAgICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gPT09IHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQoa2V5KSB7XG4gICAgICAgICAgdGhpcy5zZXRba2V5XSA9IHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gU2V0O1xuICAgICAgfSgpO1xuICAgIH1cbiAgICAvKiAgKi9cblxuXG4gICAgdmFyIHdhcm4gPSBub29wO1xuICAgIHZhciB0aXAgPSBub29wO1xuICAgIHZhciBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlID0gbm9vcDsgLy8gd29yayBhcm91bmQgZmxvdyBjaGVja1xuXG4gICAgdmFyIGZvcm1hdENvbXBvbmVudE5hbWUgPSBub29wO1xuXG4gICAgaWYgKHRydWUpIHtcbiAgICAgIHZhciBoYXNDb25zb2xlID0gdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnO1xuICAgICAgdmFyIGNsYXNzaWZ5UkUgPSAvKD86XnxbLV9dKShcXHcpL2c7XG5cbiAgICAgIHZhciBjbGFzc2lmeSA9IGZ1bmN0aW9uIGNsYXNzaWZ5KHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoY2xhc3NpZnlSRSwgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICByZXR1cm4gYy50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9KS5yZXBsYWNlKC9bLV9dL2csICcnKTtcbiAgICAgIH07XG5cbiAgICAgIHdhcm4gPSBmdW5jdGlvbiB3YXJuKG1zZywgdm0pIHtcbiAgICAgICAgdmFyIHRyYWNlID0gdm0gPyBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlKHZtKSA6ICcnO1xuXG4gICAgICAgIGlmIChjb25maWcud2FybkhhbmRsZXIpIHtcbiAgICAgICAgICBjb25maWcud2FybkhhbmRsZXIuY2FsbChudWxsLCBtc2csIHZtLCB0cmFjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzQ29uc29sZSAmJiAhY29uZmlnLnNpbGVudCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbVnVlIHdhcm5dOiBcIiArIG1zZyArIHRyYWNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGlwID0gZnVuY3Rpb24gdGlwKG1zZywgdm0pIHtcbiAgICAgICAgaWYgKGhhc0NvbnNvbGUgJiYgIWNvbmZpZy5zaWxlbnQpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbVnVlIHRpcF06IFwiICsgbXNnICsgKHZtID8gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkgOiAnJykpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmb3JtYXRDb21wb25lbnROYW1lID0gZnVuY3Rpb24gZm9ybWF0Q29tcG9uZW50TmFtZSh2bSwgaW5jbHVkZUZpbGUpIHtcbiAgICAgICAgaWYgKHZtLiRyb290ID09PSB2bSkge1xuICAgICAgICAgIGlmICh2bS4kb3B0aW9ucyAmJiB2bS4kb3B0aW9ucy5fX2ZpbGUpIHtcbiAgICAgICAgICAgIC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICAgICAgcmV0dXJuICcnICsgdm0uJG9wdGlvbnMuX19maWxlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAnPFJvb3Q+JztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIHZtID09PSAnZnVuY3Rpb24nICYmIHZtLmNpZCAhPSBudWxsID8gdm0ub3B0aW9ucyA6IHZtLl9pc1Z1ZSA/IHZtLiRvcHRpb25zIHx8IHZtLmNvbnN0cnVjdG9yLm9wdGlvbnMgOiB2bTtcbiAgICAgICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgfHwgb3B0aW9ucy5fY29tcG9uZW50VGFnO1xuICAgICAgICB2YXIgZmlsZSA9IG9wdGlvbnMuX19maWxlO1xuXG4gICAgICAgIGlmICghbmFtZSAmJiBmaWxlKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gZmlsZS5tYXRjaCgvKFteL1xcXFxdKylcXC52dWUkLyk7XG4gICAgICAgICAgbmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChuYW1lID8gXCI8XCIgKyBjbGFzc2lmeShuYW1lKSArIFwiPlwiIDogXCI8QW5vbnltb3VzPlwiKSArIChmaWxlICYmIGluY2x1ZGVGaWxlICE9PSBmYWxzZSA/IFwiIGF0IFwiICsgZmlsZSA6ICcnKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciByZXBlYXQgPSBmdW5jdGlvbiByZXBlYXQoc3RyLCBuKSB7XG4gICAgICAgIHZhciByZXMgPSAnJztcblxuICAgICAgICB3aGlsZSAobikge1xuICAgICAgICAgIGlmIChuICUgMiA9PT0gMSkge1xuICAgICAgICAgICAgcmVzICs9IHN0cjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobiA+IDEpIHtcbiAgICAgICAgICAgIHN0ciArPSBzdHI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbiA+Pj0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9O1xuXG4gICAgICBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlID0gZnVuY3Rpb24gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkge1xuICAgICAgICBpZiAodm0uX2lzVnVlICYmIHZtLiRwYXJlbnQpIHtcbiAgICAgICAgICB2YXIgdHJlZSA9IFtdO1xuICAgICAgICAgIHZhciBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuXG4gICAgICAgICAgd2hpbGUgKHZtICYmIHZtLiRvcHRpb25zLm5hbWUgIT09ICdQYWdlQm9keScpIHtcbiAgICAgICAgICAgIGlmICh0cmVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdmFyIGxhc3QgPSB0cmVlW3RyZWUubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgICAgaWYgKGxhc3QuY29uc3RydWN0b3IgPT09IHZtLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlKys7XG4gICAgICAgICAgICAgICAgdm0gPSB2bS4kcGFyZW50O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSA+IDApIHtcbiAgICAgICAgICAgICAgICB0cmVlW3RyZWUubGVuZ3RoIC0gMV0gPSBbbGFzdCwgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlXTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICF2bS4kb3B0aW9ucy5pc1Jlc2VydmVkICYmIHRyZWUucHVzaCh2bSk7XG4gICAgICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuICdcXG5cXG5mb3VuZCBpblxcblxcbicgKyB0cmVlLm1hcChmdW5jdGlvbiAodm0sIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiICsgKGkgPT09IDAgPyAnLS0tPiAnIDogcmVwZWF0KCcgJywgNSArIGkgKiAyKSkgKyAoQXJyYXkuaXNBcnJheSh2bSkgPyBmb3JtYXRDb21wb25lbnROYW1lKHZtWzBdKSArIFwiLi4uIChcIiArIHZtWzFdICsgXCIgcmVjdXJzaXZlIGNhbGxzKVwiIDogZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIlxcblxcbihmb3VuZCBpbiBcIiArIGZvcm1hdENvbXBvbmVudE5hbWUodm0pICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIC8qICAqL1xuXG5cbiAgICB2YXIgdWlkID0gMDtcbiAgICAvKipcbiAgICAgKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAgICAgKiBkaXJlY3RpdmVzIHN1YnNjcmliaW5nIHRvIGl0LlxuICAgICAqL1xuXG4gICAgdmFyIERlcCA9IGZ1bmN0aW9uIERlcCgpIHtcbiAgICAgIHRoaXMuaWQgPSB1aWQrKztcbiAgICAgIHRoaXMuc3VicyA9IFtdO1xuICAgIH07XG5cbiAgICBEZXAucHJvdG90eXBlLmFkZFN1YiA9IGZ1bmN0aW9uIGFkZFN1YihzdWIpIHtcbiAgICAgIHRoaXMuc3Vicy5wdXNoKHN1Yik7XG4gICAgfTtcblxuICAgIERlcC5wcm90b3R5cGUucmVtb3ZlU3ViID0gZnVuY3Rpb24gcmVtb3ZlU3ViKHN1Yikge1xuICAgICAgcmVtb3ZlKHRoaXMuc3Vicywgc3ViKTtcbiAgICB9O1xuXG4gICAgRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQoKSB7XG4gICAgICBpZiAoRGVwLlNoYXJlZE9iamVjdC50YXJnZXQpIHtcbiAgICAgICAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXQuYWRkRGVwKHRoaXMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBEZXAucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICAgIC8vIHN0YWJpbGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gICAgICB2YXIgc3VicyA9IHRoaXMuc3Vicy5zbGljZSgpO1xuXG4gICAgICBpZiAodHJ1ZSAmJiAhY29uZmlnLmFzeW5jKSB7XG4gICAgICAgIC8vIHN1YnMgYXJlbid0IHNvcnRlZCBpbiBzY2hlZHVsZXIgaWYgbm90IHJ1bm5pbmcgYXN5bmNcbiAgICAgICAgLy8gd2UgbmVlZCB0byBzb3J0IHRoZW0gbm93IHRvIG1ha2Ugc3VyZSB0aGV5IGZpcmUgaW4gY29ycmVjdFxuICAgICAgICAvLyBvcmRlclxuICAgICAgICBzdWJzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gYS5pZCAtIGIuaWQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHN1YnNbaV0udXBkYXRlKCk7XG4gICAgICB9XG4gICAgfTsgLy8gVGhlIGN1cnJlbnQgdGFyZ2V0IHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkLlxuICAgIC8vIFRoaXMgaXMgZ2xvYmFsbHkgdW5pcXVlIGJlY2F1c2Ugb25seSBvbmUgd2F0Y2hlclxuICAgIC8vIGNhbiBiZSBldmFsdWF0ZWQgYXQgYSB0aW1lLlxuICAgIC8vIGZpeGVkIGJ5IHh4eHh4eCAobnZ1ZSBzaGFyZWQgdnVleClcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cblxuICAgIERlcC5TaGFyZWRPYmplY3QgPSB7fTtcbiAgICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCA9IG51bGw7XG4gICAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXRTdGFjayA9IFtdO1xuXG4gICAgZnVuY3Rpb24gcHVzaFRhcmdldCh0YXJnZXQpIHtcbiAgICAgIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0U3RhY2sucHVzaCh0YXJnZXQpO1xuICAgICAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICBEZXAudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcFRhcmdldCgpIHtcbiAgICAgIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0U3RhY2sucG9wKCk7XG4gICAgICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCA9IERlcC5TaGFyZWRPYmplY3QudGFyZ2V0U3RhY2tbRGVwLlNoYXJlZE9iamVjdC50YXJnZXRTdGFjay5sZW5ndGggLSAxXTtcbiAgICAgIERlcC50YXJnZXQgPSBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldDtcbiAgICB9XG4gICAgLyogICovXG5cblxuICAgIHZhciBWTm9kZSA9IGZ1bmN0aW9uIFZOb2RlKHRhZywgZGF0YSwgY2hpbGRyZW4sIHRleHQsIGVsbSwgY29udGV4dCwgY29tcG9uZW50T3B0aW9ucywgYXN5bmNGYWN0b3J5KSB7XG4gICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgdGhpcy5lbG0gPSBlbG07XG4gICAgICB0aGlzLm5zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgIHRoaXMuZm5Db250ZXh0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5mbk9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmZuU2NvcGVJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMua2V5ID0gZGF0YSAmJiBkYXRhLmtleTtcbiAgICAgIHRoaXMuY29tcG9uZW50T3B0aW9ucyA9IGNvbXBvbmVudE9wdGlvbnM7XG4gICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnJhdyA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1Jvb3RJbnNlcnQgPSB0cnVlO1xuICAgICAgdGhpcy5pc0NvbW1lbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNDbG9uZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNPbmNlID0gZmFsc2U7XG4gICAgICB0aGlzLmFzeW5jRmFjdG9yeSA9IGFzeW5jRmFjdG9yeTtcbiAgICAgIHRoaXMuYXN5bmNNZXRhID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5pc0FzeW5jUGxhY2Vob2xkZXIgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHtcbiAgICAgIGNoaWxkOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH07IC8vIERFUFJFQ0FURUQ6IGFsaWFzIGZvciBjb21wb25lbnRJbnN0YW5jZSBmb3IgYmFja3dhcmRzIGNvbXBhdC5cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbiAgICBwcm90b3R5cGVBY2Nlc3NvcnMuY2hpbGQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFZOb2RlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzKTtcblxuICAgIHZhciBjcmVhdGVFbXB0eVZOb2RlID0gZnVuY3Rpb24gY3JlYXRlRW1wdHlWTm9kZSh0ZXh0KSB7XG4gICAgICBpZiAodGV4dCA9PT0gdm9pZCAwKSB0ZXh0ID0gJyc7XG4gICAgICB2YXIgbm9kZSA9IG5ldyBWTm9kZSgpO1xuICAgICAgbm9kZS50ZXh0ID0gdGV4dDtcbiAgICAgIG5vZGUuaXNDb21tZW50ID0gdHJ1ZTtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUZXh0Vk5vZGUodmFsKSB7XG4gICAgICByZXR1cm4gbmV3IFZOb2RlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFN0cmluZyh2YWwpKTtcbiAgICB9IC8vIG9wdGltaXplZCBzaGFsbG93IGNsb25lXG4gICAgLy8gdXNlZCBmb3Igc3RhdGljIG5vZGVzIGFuZCBzbG90IG5vZGVzIGJlY2F1c2UgdGhleSBtYXkgYmUgcmV1c2VkIGFjcm9zc1xuICAgIC8vIG11bHRpcGxlIHJlbmRlcnMsIGNsb25pbmcgdGhlbSBhdm9pZHMgZXJyb3JzIHdoZW4gRE9NIG1hbmlwdWxhdGlvbnMgcmVseVxuICAgIC8vIG9uIHRoZWlyIGVsbSByZWZlcmVuY2UuXG5cblxuICAgIGZ1bmN0aW9uIGNsb25lVk5vZGUodm5vZGUpIHtcbiAgICAgIHZhciBjbG9uZWQgPSBuZXcgVk5vZGUodm5vZGUudGFnLCB2bm9kZS5kYXRhLCAvLyAjNzk3NVxuICAgICAgLy8gY2xvbmUgY2hpbGRyZW4gYXJyYXkgdG8gYXZvaWQgbXV0YXRpbmcgb3JpZ2luYWwgaW4gY2FzZSBvZiBjbG9uaW5nXG4gICAgICAvLyBhIGNoaWxkLlxuICAgICAgdm5vZGUuY2hpbGRyZW4gJiYgdm5vZGUuY2hpbGRyZW4uc2xpY2UoKSwgdm5vZGUudGV4dCwgdm5vZGUuZWxtLCB2bm9kZS5jb250ZXh0LCB2bm9kZS5jb21wb25lbnRPcHRpb25zLCB2bm9kZS5hc3luY0ZhY3RvcnkpO1xuICAgICAgY2xvbmVkLm5zID0gdm5vZGUubnM7XG4gICAgICBjbG9uZWQuaXNTdGF0aWMgPSB2bm9kZS5pc1N0YXRpYztcbiAgICAgIGNsb25lZC5rZXkgPSB2bm9kZS5rZXk7XG4gICAgICBjbG9uZWQuaXNDb21tZW50ID0gdm5vZGUuaXNDb21tZW50O1xuICAgICAgY2xvbmVkLmZuQ29udGV4dCA9IHZub2RlLmZuQ29udGV4dDtcbiAgICAgIGNsb25lZC5mbk9wdGlvbnMgPSB2bm9kZS5mbk9wdGlvbnM7XG4gICAgICBjbG9uZWQuZm5TY29wZUlkID0gdm5vZGUuZm5TY29wZUlkO1xuICAgICAgY2xvbmVkLmFzeW5jTWV0YSA9IHZub2RlLmFzeW5jTWV0YTtcbiAgICAgIGNsb25lZC5pc0Nsb25lZCA9IHRydWU7XG4gICAgICByZXR1cm4gY2xvbmVkO1xuICAgIH1cbiAgICAvKlxuICAgICAqIG5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBwbGF5IHdlbGwgd2l0aFxuICAgICAqIGR5bmFtaWNhbGx5IGFjY2Vzc2luZyBtZXRob2RzIG9uIEFycmF5IHByb3RvdHlwZVxuICAgICAqL1xuXG5cbiAgICB2YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbiAgICB2YXIgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKTtcbiAgICB2YXIgbWV0aG9kc1RvUGF0Y2ggPSBbJ3B1c2gnLCAncG9wJywgJ3NoaWZ0JywgJ3Vuc2hpZnQnLCAnc3BsaWNlJywgJ3NvcnQnLCAncmV2ZXJzZSddO1xuICAgIC8qKlxuICAgICAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xuICAgICAqL1xuXG4gICAgbWV0aG9kc1RvUGF0Y2guZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgICAgIHZhciBvcmlnaW5hbCA9IGFycmF5UHJvdG9bbWV0aG9kXTtcbiAgICAgIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvcigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSxcbiAgICAgICAgICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgYXJnc1tsZW5dID0gYXJndW1lbnRzW2xlbl07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0ID0gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIHZhciBvYiA9IHRoaXMuX19vYl9fO1xuICAgICAgICB2YXIgaW5zZXJ0ZWQ7XG5cbiAgICAgICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgICAgIGluc2VydGVkID0gYXJncztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluc2VydGVkKSB7XG4gICAgICAgICAgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKTtcbiAgICAgICAgfSAvLyBub3RpZnkgY2hhbmdlXG5cblxuICAgICAgICBvYi5kZXAubm90aWZ5KCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvKiAgKi9cblxuICAgIHZhciBhcnJheUtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhcnJheU1ldGhvZHMpO1xuICAgIC8qKlxuICAgICAqIEluIHNvbWUgY2FzZXMgd2UgbWF5IHdhbnQgdG8gZGlzYWJsZSBvYnNlcnZhdGlvbiBpbnNpZGUgYSBjb21wb25lbnQnc1xuICAgICAqIHVwZGF0ZSBjb21wdXRhdGlvbi5cbiAgICAgKi9cblxuICAgIHZhciBzaG91bGRPYnNlcnZlID0gdHJ1ZTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZU9ic2VydmluZyh2YWx1ZSkge1xuICAgICAgc2hvdWxkT2JzZXJ2ZSA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPYnNlcnZlciBjbGFzcyB0aGF0IGlzIGF0dGFjaGVkIHRvIGVhY2ggb2JzZXJ2ZWRcbiAgICAgKiBvYmplY3QuIE9uY2UgYXR0YWNoZWQsIHRoZSBvYnNlcnZlciBjb252ZXJ0cyB0aGUgdGFyZ2V0XG4gICAgICogb2JqZWN0J3MgcHJvcGVydHkga2V5cyBpbnRvIGdldHRlci9zZXR0ZXJzIHRoYXRcbiAgICAgKiBjb2xsZWN0IGRlcGVuZGVuY2llcyBhbmQgZGlzcGF0Y2ggdXBkYXRlcy5cbiAgICAgKi9cblxuXG4gICAgdmFyIE9ic2VydmVyID0gZnVuY3Rpb24gT2JzZXJ2ZXIodmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZGVwID0gbmV3IERlcCgpO1xuICAgICAgdGhpcy52bUNvdW50ID0gMDtcbiAgICAgIGRlZih2YWx1ZSwgJ19fb2JfXycsIHRoaXMpO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKGhhc1Byb3RvKSB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8gZml4ZWQgYnkgeHh4eHh4IOW+ruS/oeWwj+eoi+W6j+S9v+eUqCBwbHVnaW5zIOS5i+WQju+8jOaVsOe7hOaWueazleiiq+ebtOaOpeaMgui9veWIsOS6huaVsOe7hOWvueixoeS4iu+8jOmcgOimgeaJp+ihjCBjb3B5QXVnbWVudCDpgLvovpFcbiAgICAgICAgICAgIGlmICh2YWx1ZS5wdXNoICE9PSB2YWx1ZS5fX3Byb3RvX18ucHVzaCkge1xuICAgICAgICAgICAgICBjb3B5QXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHJvdG9BdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb3B5QXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlQXJyYXkodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53YWxrKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdhbGsgdGhyb3VnaCBhbGwgcHJvcGVydGllcyBhbmQgY29udmVydCB0aGVtIGludG9cbiAgICAgKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAgICAgKiB2YWx1ZSB0eXBlIGlzIE9iamVjdC5cbiAgICAgKi9cblxuXG4gICAgT2JzZXJ2ZXIucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiB3YWxrKG9iaikge1xuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGVmaW5lUmVhY3RpdmUkJDEob2JqLCBrZXlzW2ldKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxuICAgICAqL1xuXG5cbiAgICBPYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZUFycmF5ID0gZnVuY3Rpb24gb2JzZXJ2ZUFycmF5KGl0ZW1zKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBvYnNlcnZlKGl0ZW1zW2ldKTtcbiAgICAgIH1cbiAgICB9OyAvLyBoZWxwZXJzXG5cbiAgICAvKipcbiAgICAgKiBBdWdtZW50IGEgdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcbiAgICAgKiB0aGUgcHJvdG90eXBlIGNoYWluIHVzaW5nIF9fcHJvdG9fX1xuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBwcm90b0F1Z21lbnQodGFyZ2V0LCBzcmMpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG4gICAgICB0YXJnZXQuX19wcm90b19fID0gc3JjO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdWdtZW50IGEgdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBkZWZpbmluZ1xuICAgICAqIGhpZGRlbiBwcm9wZXJ0aWVzLlxuICAgICAqL1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG4gICAgZnVuY3Rpb24gY29weUF1Z21lbnQodGFyZ2V0LCBzcmMsIGtleXMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIGRlZih0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0IHRvIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBmb3IgYSB2YWx1ZSxcbiAgICAgKiByZXR1cm5zIHRoZSBuZXcgb2JzZXJ2ZXIgaWYgc3VjY2Vzc2Z1bGx5IG9ic2VydmVkLFxuICAgICAqIG9yIHRoZSBleGlzdGluZyBvYnNlcnZlciBpZiB0aGUgdmFsdWUgYWxyZWFkeSBoYXMgb25lLlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBvYnNlcnZlKHZhbHVlLCBhc1Jvb3REYXRhKSB7XG4gICAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG9iO1xuXG4gICAgICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICAgICAgb2IgPSB2YWx1ZS5fX29iX187XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZE9ic2VydmUgJiYgIWlzU2VydmVyUmVuZGVyaW5nKCkgJiYgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKSAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKSAmJiAhdmFsdWUuX2lzVnVlKSB7XG4gICAgICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFzUm9vdERhdGEgJiYgb2IpIHtcbiAgICAgICAgb2Iudm1Db3VudCsrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlZmluZSBhIHJlYWN0aXZlIHByb3BlcnR5IG9uIGFuIE9iamVjdC5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUkJDEob2JqLCBrZXksIHZhbCwgY3VzdG9tU2V0dGVyLCBzaGFsbG93KSB7XG4gICAgICB2YXIgZGVwID0gbmV3IERlcCgpO1xuICAgICAgdmFyIHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gY2F0ZXIgZm9yIHByZS1kZWZpbmVkIGdldHRlci9zZXR0ZXJzXG5cblxuICAgICAgdmFyIGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldDtcbiAgICAgIHZhciBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXQ7XG5cbiAgICAgIGlmICgoIWdldHRlciB8fCBzZXR0ZXIpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgdmFsID0gb2JqW2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZE9iID0gIXNoYWxsb3cgJiYgb2JzZXJ2ZSh2YWwpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiByZWFjdGl2ZUdldHRlcigpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuXG4gICAgICAgICAgaWYgKERlcC5TaGFyZWRPYmplY3QudGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICAgICAgICAgIGRlcC5kZXBlbmQoKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkT2IpIHtcbiAgICAgICAgICAgICAgY2hpbGRPYi5kZXAuZGVwZW5kKCk7XG5cbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgZGVwZW5kQXJyYXkodmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlU2V0dGVyKG5ld1ZhbCkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlICovXG5cbiAgICAgICAgICBpZiAobmV3VmFsID09PSB2YWx1ZSB8fCBuZXdWYWwgIT09IG5ld1ZhbCAmJiB2YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cblxuXG4gICAgICAgICAgaWYgKHRydWUgJiYgY3VzdG9tU2V0dGVyKSB7XG4gICAgICAgICAgICBjdXN0b21TZXR0ZXIoKTtcbiAgICAgICAgICB9IC8vICM3OTgxOiBmb3IgYWNjZXNzb3IgcHJvcGVydGllcyB3aXRob3V0IHNldHRlclxuXG5cbiAgICAgICAgICBpZiAoZ2V0dGVyICYmICFzZXR0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgICAgICBzZXR0ZXIuY2FsbChvYmosIG5ld1ZhbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbCA9IG5ld1ZhbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZE9iID0gIXNoYWxsb3cgJiYgb2JzZXJ2ZShuZXdWYWwpO1xuICAgICAgICAgIGRlcC5ub3RpZnkoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCBhIHByb3BlcnR5IG9uIGFuIG9iamVjdC4gQWRkcyB0aGUgbmV3IHByb3BlcnR5IGFuZFxuICAgICAqIHRyaWdnZXJzIGNoYW5nZSBub3RpZmljYXRpb24gaWYgdGhlIHByb3BlcnR5IGRvZXNuJ3RcbiAgICAgKiBhbHJlYWR5IGV4aXN0LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBzZXQodGFyZ2V0LCBrZXksIHZhbCkge1xuICAgICAgaWYgKHRydWUgJiYgKGlzVW5kZWYodGFyZ2V0KSB8fCBpc1ByaW1pdGl2ZSh0YXJnZXQpKSkge1xuICAgICAgICB3YXJuKFwiQ2Fubm90IHNldCByZWFjdGl2ZSBwcm9wZXJ0eSBvbiB1bmRlZmluZWQsIG51bGwsIG9yIHByaW1pdGl2ZSB2YWx1ZTogXCIgKyB0YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIGlzVmFsaWRBcnJheUluZGV4KGtleSkpIHtcbiAgICAgICAgdGFyZ2V0Lmxlbmd0aCA9IE1hdGgubWF4KHRhcmdldC5sZW5ndGgsIGtleSk7XG4gICAgICAgIHRhcmdldC5zcGxpY2Uoa2V5LCAxLCB2YWwpO1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuXG4gICAgICBpZiAoa2V5IGluIHRhcmdldCAmJiAhKGtleSBpbiBPYmplY3QucHJvdG90eXBlKSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH1cblxuICAgICAgdmFyIG9iID0gdGFyZ2V0Ll9fb2JfXztcblxuICAgICAgaWYgKHRhcmdldC5faXNWdWUgfHwgb2IgJiYgb2Iudm1Db3VudCkge1xuICAgICAgICB0cnVlICYmIHdhcm4oJ0F2b2lkIGFkZGluZyByZWFjdGl2ZSBwcm9wZXJ0aWVzIHRvIGEgVnVlIGluc3RhbmNlIG9yIGl0cyByb290ICRkYXRhICcgKyAnYXQgcnVudGltZSAtIGRlY2xhcmUgaXQgdXBmcm9udCBpbiB0aGUgZGF0YSBvcHRpb24uJyk7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9XG5cbiAgICAgIGlmICghb2IpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWw7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9XG5cbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKG9iLnZhbHVlLCBrZXksIHZhbCk7XG4gICAgICBvYi5kZXAubm90aWZ5KCk7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYSBwcm9wZXJ0eSBhbmQgdHJpZ2dlciBjaGFuZ2UgaWYgbmVjZXNzYXJ5LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBkZWwodGFyZ2V0LCBrZXkpIHtcbiAgICAgIGlmICh0cnVlICYmIChpc1VuZGVmKHRhcmdldCkgfHwgaXNQcmltaXRpdmUodGFyZ2V0KSkpIHtcbiAgICAgICAgd2FybihcIkNhbm5vdCBkZWxldGUgcmVhY3RpdmUgcHJvcGVydHkgb24gdW5kZWZpbmVkLCBudWxsLCBvciBwcmltaXRpdmUgdmFsdWU6IFwiICsgdGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiBpc1ZhbGlkQXJyYXlJbmRleChrZXkpKSB7XG4gICAgICAgIHRhcmdldC5zcGxpY2Uoa2V5LCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgb2IgPSB0YXJnZXQuX19vYl9fO1xuXG4gICAgICBpZiAodGFyZ2V0Ll9pc1Z1ZSB8fCBvYiAmJiBvYi52bUNvdW50KSB7XG4gICAgICAgIHRydWUgJiYgd2FybignQXZvaWQgZGVsZXRpbmcgcHJvcGVydGllcyBvbiBhIFZ1ZSBpbnN0YW5jZSBvciBpdHMgcm9vdCAkZGF0YSAnICsgJy0ganVzdCBzZXQgaXQgdG8gbnVsbC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgIGlmICghb2IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBvYi5kZXAubm90aWZ5KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbGxlY3QgZGVwZW5kZW5jaWVzIG9uIGFycmF5IGVsZW1lbnRzIHdoZW4gdGhlIGFycmF5IGlzIHRvdWNoZWQsIHNpbmNlXG4gICAgICogd2UgY2Fubm90IGludGVyY2VwdCBhcnJheSBlbGVtZW50IGFjY2VzcyBsaWtlIHByb3BlcnR5IGdldHRlcnMuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGRlcGVuZEFycmF5KHZhbHVlKSB7XG4gICAgICBmb3IgKHZhciBlID0gdm9pZCAwLCBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBlID0gdmFsdWVbaV07XG4gICAgICAgIGUgJiYgZS5fX29iX18gJiYgZS5fX29iX18uZGVwLmRlcGVuZCgpO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XG4gICAgICAgICAgZGVwZW5kQXJyYXkoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLyogICovXG5cbiAgICAvKipcbiAgICAgKiBPcHRpb24gb3ZlcndyaXRpbmcgc3RyYXRlZ2llcyBhcmUgZnVuY3Rpb25zIHRoYXQgaGFuZGxlXG4gICAgICogaG93IHRvIG1lcmdlIGEgcGFyZW50IG9wdGlvbiB2YWx1ZSBhbmQgYSBjaGlsZCBvcHRpb25cbiAgICAgKiB2YWx1ZSBpbnRvIHRoZSBmaW5hbCB2YWx1ZS5cbiAgICAgKi9cblxuXG4gICAgdmFyIHN0cmF0cyA9IGNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7XG4gICAgLyoqXG4gICAgICogT3B0aW9ucyB3aXRoIHJlc3RyaWN0aW9uc1xuICAgICAqL1xuXG4gICAgaWYgKHRydWUpIHtcbiAgICAgIHN0cmF0cy5lbCA9IHN0cmF0cy5wcm9wc0RhdGEgPSBmdW5jdGlvbiAocGFyZW50LCBjaGlsZCwgdm0sIGtleSkge1xuICAgICAgICBpZiAoIXZtKSB7XG4gICAgICAgICAgd2FybihcIm9wdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgaW5zdGFuY2UgXCIgKyAnY3JlYXRpb24gd2l0aCB0aGUgYG5ld2Aga2V5d29yZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWZhdWx0U3RyYXQocGFyZW50LCBjaGlsZCk7XG4gICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgdGhhdCByZWN1cnNpdmVseSBtZXJnZXMgdHdvIGRhdGEgb2JqZWN0cyB0b2dldGhlci5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gbWVyZ2VEYXRhKHRvLCBmcm9tKSB7XG4gICAgICBpZiAoIWZyb20pIHtcbiAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgfVxuXG4gICAgICB2YXIga2V5LCB0b1ZhbCwgZnJvbVZhbDtcbiAgICAgIHZhciBrZXlzID0gaGFzU3ltYm9sID8gUmVmbGVjdC5vd25LZXlzKGZyb20pIDogT2JqZWN0LmtleXMoZnJvbSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBrZXkgPSBrZXlzW2ldOyAvLyBpbiBjYXNlIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBvYnNlcnZlZC4uLlxuXG4gICAgICAgIGlmIChrZXkgPT09ICdfX29iX18nKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB0b1ZhbCA9IHRvW2tleV07XG4gICAgICAgIGZyb21WYWwgPSBmcm9tW2tleV07XG5cbiAgICAgICAgaWYgKCFoYXNPd24odG8sIGtleSkpIHtcbiAgICAgICAgICBzZXQodG8sIGtleSwgZnJvbVZhbCk7XG4gICAgICAgIH0gZWxzZSBpZiAodG9WYWwgIT09IGZyb21WYWwgJiYgaXNQbGFpbk9iamVjdCh0b1ZhbCkgJiYgaXNQbGFpbk9iamVjdChmcm9tVmFsKSkge1xuICAgICAgICAgIG1lcmdlRGF0YSh0b1ZhbCwgZnJvbVZhbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRvO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEYXRhXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIG1lcmdlRGF0YU9yRm4ocGFyZW50VmFsLCBjaGlsZFZhbCwgdm0pIHtcbiAgICAgIGlmICghdm0pIHtcbiAgICAgICAgLy8gaW4gYSBWdWUuZXh0ZW5kIG1lcmdlLCBib3RoIHNob3VsZCBiZSBmdW5jdGlvbnNcbiAgICAgICAgaWYgKCFjaGlsZFZhbCkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRWYWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBhcmVudFZhbCkge1xuICAgICAgICAgIHJldHVybiBjaGlsZFZhbDtcbiAgICAgICAgfSAvLyB3aGVuIHBhcmVudFZhbCAmIGNoaWxkVmFsIGFyZSBib3RoIHByZXNlbnQsXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAgICAgICAvLyBtZXJnZWQgcmVzdWx0IG9mIGJvdGggZnVuY3Rpb25zLi4uIG5vIG5lZWQgdG9cbiAgICAgICAgLy8gY2hlY2sgaWYgcGFyZW50VmFsIGlzIGEgZnVuY3Rpb24gaGVyZSBiZWNhdXNlXG4gICAgICAgIC8vIGl0IGhhcyB0byBiZSBhIGZ1bmN0aW9uIHRvIHBhc3MgcHJldmlvdXMgbWVyZ2VzLlxuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZERhdGFGbigpIHtcbiAgICAgICAgICByZXR1cm4gbWVyZ2VEYXRhKHR5cGVvZiBjaGlsZFZhbCA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkVmFsLmNhbGwodGhpcywgdGhpcykgOiBjaGlsZFZhbCwgdHlwZW9mIHBhcmVudFZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHBhcmVudFZhbC5jYWxsKHRoaXMsIHRoaXMpIDogcGFyZW50VmFsKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWRJbnN0YW5jZURhdGFGbigpIHtcbiAgICAgICAgICAvLyBpbnN0YW5jZSBtZXJnZVxuICAgICAgICAgIHZhciBpbnN0YW5jZURhdGEgPSB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbicgPyBjaGlsZFZhbC5jYWxsKHZtLCB2bSkgOiBjaGlsZFZhbDtcbiAgICAgICAgICB2YXIgZGVmYXVsdERhdGEgPSB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nID8gcGFyZW50VmFsLmNhbGwodm0sIHZtKSA6IHBhcmVudFZhbDtcblxuICAgICAgICAgIGlmIChpbnN0YW5jZURhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXJnZURhdGEoaW5zdGFuY2VEYXRhLCBkZWZhdWx0RGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0RGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RyYXRzLmRhdGEgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCwgdm0pIHtcbiAgICAgIGlmICghdm0pIHtcbiAgICAgICAgaWYgKGNoaWxkVmFsICYmIHR5cGVvZiBjaGlsZFZhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRydWUgJiYgd2FybignVGhlIFwiZGF0YVwiIG9wdGlvbiBzaG91bGQgYmUgYSBmdW5jdGlvbiAnICsgJ3RoYXQgcmV0dXJucyBhIHBlci1pbnN0YW5jZSB2YWx1ZSBpbiBjb21wb25lbnQgJyArICdkZWZpbml0aW9ucy4nLCB2bSk7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZXJnZURhdGFPckZuKHBhcmVudFZhbCwgY2hpbGRWYWwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVyZ2VEYXRhT3JGbihwYXJlbnRWYWwsIGNoaWxkVmFsLCB2bSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIb29rcyBhbmQgcHJvcHMgYXJlIG1lcmdlZCBhcyBhcnJheXMuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIG1lcmdlSG9vayhwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gICAgICB2YXIgcmVzID0gY2hpbGRWYWwgPyBwYXJlbnRWYWwgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKSA6IEFycmF5LmlzQXJyYXkoY2hpbGRWYWwpID8gY2hpbGRWYWwgOiBbY2hpbGRWYWxdIDogcGFyZW50VmFsO1xuICAgICAgcmV0dXJuIHJlcyA/IGRlZHVwZUhvb2tzKHJlcykgOiByZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVkdXBlSG9va3MoaG9va3MpIHtcbiAgICAgIHZhciByZXMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocmVzLmluZGV4T2YoaG9va3NbaV0pID09PSAtMSkge1xuICAgICAgICAgIHJlcy5wdXNoKGhvb2tzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIExJRkVDWUNMRV9IT09LUy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICBzdHJhdHNbaG9va10gPSBtZXJnZUhvb2s7XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQXNzZXRzXG4gICAgICpcbiAgICAgKiBXaGVuIGEgdm0gaXMgcHJlc2VudCAoaW5zdGFuY2UgY3JlYXRpb24pLCB3ZSBuZWVkIHRvIGRvXG4gICAgICogYSB0aHJlZS13YXkgbWVyZ2UgYmV0d2VlbiBjb25zdHJ1Y3RvciBvcHRpb25zLCBpbnN0YW5jZVxuICAgICAqIG9wdGlvbnMgYW5kIHBhcmVudCBvcHRpb25zLlxuICAgICAqL1xuXG4gICAgZnVuY3Rpb24gbWVyZ2VBc3NldHMocGFyZW50VmFsLCBjaGlsZFZhbCwgdm0sIGtleSkge1xuICAgICAgdmFyIHJlcyA9IE9iamVjdC5jcmVhdGUocGFyZW50VmFsIHx8IG51bGwpO1xuXG4gICAgICBpZiAoY2hpbGRWYWwpIHtcbiAgICAgICAgdHJ1ZSAmJiBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZChyZXMsIGNoaWxkVmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgc3RyYXRzW3R5cGUgKyAncyddID0gbWVyZ2VBc3NldHM7XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogV2F0Y2hlcnMuXG4gICAgICpcbiAgICAgKiBXYXRjaGVycyBoYXNoZXMgc2hvdWxkIG5vdCBvdmVyd3JpdGUgb25lXG4gICAgICogYW5vdGhlciwgc28gd2UgbWVyZ2UgdGhlbSBhcyBhcnJheXMuXG4gICAgICovXG5cbiAgICBzdHJhdHMud2F0Y2ggPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCwgdm0sIGtleSkge1xuICAgICAgLy8gd29yayBhcm91bmQgRmlyZWZveCdzIE9iamVjdC5wcm90b3R5cGUud2F0Y2guLi5cbiAgICAgIGlmIChwYXJlbnRWYWwgPT09IG5hdGl2ZVdhdGNoKSB7XG4gICAgICAgIHBhcmVudFZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkVmFsID09PSBuYXRpdmVXYXRjaCkge1xuICAgICAgICBjaGlsZFZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuXG5cbiAgICAgIGlmICghY2hpbGRWYWwpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUocGFyZW50VmFsIHx8IG51bGwpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJ1ZSkge1xuICAgICAgICBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFwYXJlbnRWYWwpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkVmFsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmV0ID0ge307XG4gICAgICBleHRlbmQocmV0LCBwYXJlbnRWYWwpO1xuXG4gICAgICBmb3IgKHZhciBrZXkkMSBpbiBjaGlsZFZhbCkge1xuICAgICAgICB2YXIgcGFyZW50ID0gcmV0W2tleSQxXTtcbiAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRWYWxba2V5JDFdO1xuXG4gICAgICAgIGlmIChwYXJlbnQgJiYgIUFycmF5LmlzQXJyYXkocGFyZW50KSkge1xuICAgICAgICAgIHBhcmVudCA9IFtwYXJlbnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0W2tleSQxXSA9IHBhcmVudCA/IHBhcmVudC5jb25jYXQoY2hpbGQpIDogQXJyYXkuaXNBcnJheShjaGlsZCkgPyBjaGlsZCA6IFtjaGlsZF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPdGhlciBvYmplY3QgaGFzaGVzLlxuICAgICAqL1xuXG5cbiAgICBzdHJhdHMucHJvcHMgPSBzdHJhdHMubWV0aG9kcyA9IHN0cmF0cy5pbmplY3QgPSBzdHJhdHMuY29tcHV0ZWQgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCwgdm0sIGtleSkge1xuICAgICAgaWYgKGNoaWxkVmFsICYmIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXBhcmVudFZhbCkge1xuICAgICAgICByZXR1cm4gY2hpbGRWYWw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcblxuICAgICAgaWYgKGNoaWxkVmFsKSB7XG4gICAgICAgIGV4dGVuZChyZXQsIGNoaWxkVmFsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG4gICAgc3RyYXRzLnByb3ZpZGUgPSBtZXJnZURhdGFPckZuO1xuICAgIC8qKlxuICAgICAqIERlZmF1bHQgc3RyYXRlZ3kuXG4gICAgICovXG5cbiAgICB2YXIgZGVmYXVsdFN0cmF0ID0gZnVuY3Rpb24gZGVmYXVsdFN0cmF0KHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgICAgIHJldHVybiBjaGlsZFZhbCA9PT0gdW5kZWZpbmVkID8gcGFyZW50VmFsIDogY2hpbGRWYWw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBjb21wb25lbnQgbmFtZXNcbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gY2hlY2tDb21wb25lbnRzKG9wdGlvbnMpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgICAgdmFsaWRhdGVDb21wb25lbnROYW1lKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVDb21wb25lbnROYW1lKG5hbWUpIHtcbiAgICAgIGlmICghbmV3IFJlZ0V4cChcIl5bYS16QS1aXVtcXFxcLVxcXFwuMC05X1wiICsgdW5pY29kZVJlZ0V4cC5zb3VyY2UgKyBcIl0qJFwiKS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIHdhcm4oJ0ludmFsaWQgY29tcG9uZW50IG5hbWU6IFwiJyArIG5hbWUgKyAnXCIuIENvbXBvbmVudCBuYW1lcyAnICsgJ3Nob3VsZCBjb25mb3JtIHRvIHZhbGlkIGN1c3RvbSBlbGVtZW50IG5hbWUgaW4gaHRtbDUgc3BlY2lmaWNhdGlvbi4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQnVpbHRJblRhZyhuYW1lKSB8fCBjb25maWcuaXNSZXNlcnZlZFRhZyhuYW1lKSkge1xuICAgICAgICB3YXJuKCdEbyBub3QgdXNlIGJ1aWx0LWluIG9yIHJlc2VydmVkIEhUTUwgZWxlbWVudHMgYXMgY29tcG9uZW50ICcgKyAnaWQ6ICcgKyBuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5zdXJlIGFsbCBwcm9wcyBvcHRpb24gc3ludGF4IGFyZSBub3JtYWxpemVkIGludG8gdGhlXG4gICAgICogT2JqZWN0LWJhc2VkIGZvcm1hdC5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplUHJvcHMob3B0aW9ucywgdm0pIHtcbiAgICAgIHZhciBwcm9wcyA9IG9wdGlvbnMucHJvcHM7XG5cbiAgICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVzID0ge307XG4gICAgICB2YXIgaSwgdmFsLCBuYW1lO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICAgICAgaSA9IHByb3BzLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgdmFsID0gcHJvcHNbaV07XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjYW1lbGl6ZSh2YWwpO1xuICAgICAgICAgICAgcmVzW25hbWVdID0ge1xuICAgICAgICAgICAgICB0eXBlOiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgd2FybigncHJvcHMgbXVzdCBiZSBzdHJpbmdzIHdoZW4gdXNpbmcgYXJyYXkgc3ludGF4LicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHByb3BzKSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICB2YWwgPSBwcm9wc1trZXldO1xuICAgICAgICAgIG5hbWUgPSBjYW1lbGl6ZShrZXkpO1xuICAgICAgICAgIHJlc1tuYW1lXSA9IGlzUGxhaW5PYmplY3QodmFsKSA/IHZhbCA6IHtcbiAgICAgICAgICAgIHR5cGU6IHZhbFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHJ1ZSkge1xuICAgICAgICB3YXJuKFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJwcm9wc1xcXCI6IGV4cGVjdGVkIGFuIEFycmF5IG9yIGFuIE9iamVjdCwgXCIgKyBcImJ1dCBnb3QgXCIgKyB0b1Jhd1R5cGUocHJvcHMpICsgXCIuXCIsIHZtKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5wcm9wcyA9IHJlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogTm9ybWFsaXplIGFsbCBpbmplY3Rpb25zIGludG8gT2JqZWN0LWJhc2VkIGZvcm1hdFxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVJbmplY3Qob3B0aW9ucywgdm0pIHtcbiAgICAgIHZhciBpbmplY3QgPSBvcHRpb25zLmluamVjdDtcblxuICAgICAgaWYgKCFpbmplY3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbm9ybWFsaXplZCA9IG9wdGlvbnMuaW5qZWN0ID0ge307XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGluamVjdCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBub3JtYWxpemVkW2luamVjdFtpXV0gPSB7XG4gICAgICAgICAgICBmcm9tOiBpbmplY3RbaV1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QoaW5qZWN0KSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gaW5qZWN0KSB7XG4gICAgICAgICAgdmFyIHZhbCA9IGluamVjdFtrZXldO1xuICAgICAgICAgIG5vcm1hbGl6ZWRba2V5XSA9IGlzUGxhaW5PYmplY3QodmFsKSA/IGV4dGVuZCh7XG4gICAgICAgICAgICBmcm9tOiBrZXlcbiAgICAgICAgICB9LCB2YWwpIDoge1xuICAgICAgICAgICAgZnJvbTogdmFsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0cnVlKSB7XG4gICAgICAgIHdhcm4oXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcImluamVjdFxcXCI6IGV4cGVjdGVkIGFuIEFycmF5IG9yIGFuIE9iamVjdCwgXCIgKyBcImJ1dCBnb3QgXCIgKyB0b1Jhd1R5cGUoaW5qZWN0KSArIFwiLlwiLCB2bSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE5vcm1hbGl6ZSByYXcgZnVuY3Rpb24gZGlyZWN0aXZlcyBpbnRvIG9iamVjdCBmb3JtYXQuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZURpcmVjdGl2ZXMob3B0aW9ucykge1xuICAgICAgdmFyIGRpcnMgPSBvcHRpb25zLmRpcmVjdGl2ZXM7XG5cbiAgICAgIGlmIChkaXJzKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkaXJzKSB7XG4gICAgICAgICAgdmFyIGRlZiQkMSA9IGRpcnNba2V5XTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZGVmJCQxID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBkaXJzW2tleV0gPSB7XG4gICAgICAgICAgICAgIGJpbmQ6IGRlZiQkMSxcbiAgICAgICAgICAgICAgdXBkYXRlOiBkZWYkJDFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXNzZXJ0T2JqZWN0VHlwZShuYW1lLCB2YWx1ZSwgdm0pIHtcbiAgICAgIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgd2FybihcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiOiBleHBlY3RlZCBhbiBPYmplY3QsIFwiICsgXCJidXQgZ290IFwiICsgdG9SYXdUeXBlKHZhbHVlKSArIFwiLlwiLCB2bSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1lcmdlIHR3byBvcHRpb24gb2JqZWN0cyBpbnRvIGEgbmV3IG9uZS5cbiAgICAgKiBDb3JlIHV0aWxpdHkgdXNlZCBpbiBib3RoIGluc3RhbnRpYXRpb24gYW5kIGluaGVyaXRhbmNlLlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZCwgdm0pIHtcbiAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgIGNoZWNrQ29tcG9uZW50cyhjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5vcHRpb25zO1xuICAgICAgfVxuXG4gICAgICBub3JtYWxpemVQcm9wcyhjaGlsZCwgdm0pO1xuICAgICAgbm9ybWFsaXplSW5qZWN0KGNoaWxkLCB2bSk7XG4gICAgICBub3JtYWxpemVEaXJlY3RpdmVzKGNoaWxkKTsgLy8gQXBwbHkgZXh0ZW5kcyBhbmQgbWl4aW5zIG9uIHRoZSBjaGlsZCBvcHRpb25zLFxuICAgICAgLy8gYnV0IG9ubHkgaWYgaXQgaXMgYSByYXcgb3B0aW9ucyBvYmplY3QgdGhhdCBpc24ndFxuICAgICAgLy8gdGhlIHJlc3VsdCBvZiBhbm90aGVyIG1lcmdlT3B0aW9ucyBjYWxsLlxuICAgICAgLy8gT25seSBtZXJnZWQgb3B0aW9ucyBoYXMgdGhlIF9iYXNlIHByb3BlcnR5LlxuXG4gICAgICBpZiAoIWNoaWxkLl9iYXNlKSB7XG4gICAgICAgIGlmIChjaGlsZFtcImV4dGVuZHNcIl0pIHtcbiAgICAgICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZFtcImV4dGVuZHNcIl0sIHZtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5taXhpbnMpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkLm1peGlucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHBhcmVudCA9IG1lcmdlT3B0aW9ucyhwYXJlbnQsIGNoaWxkLm1peGluc1tpXSwgdm0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgb3B0aW9ucyA9IHt9O1xuICAgICAgdmFyIGtleTtcblxuICAgICAgZm9yIChrZXkgaW4gcGFyZW50KSB7XG4gICAgICAgIG1lcmdlRmllbGQoa2V5KTtcbiAgICAgIH1cblxuICAgICAgZm9yIChrZXkgaW4gY2hpbGQpIHtcbiAgICAgICAgaWYgKCFoYXNPd24ocGFyZW50LCBrZXkpKSB7XG4gICAgICAgICAgbWVyZ2VGaWVsZChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG1lcmdlRmllbGQoa2V5KSB7XG4gICAgICAgIHZhciBzdHJhdCA9IHN0cmF0c1trZXldIHx8IGRlZmF1bHRTdHJhdDtcbiAgICAgICAgb3B0aW9uc1trZXldID0gc3RyYXQocGFyZW50W2tleV0sIGNoaWxkW2tleV0sIHZtLCBrZXkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVzb2x2ZSBhbiBhc3NldC5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYmVjYXVzZSBjaGlsZCBpbnN0YW5jZXMgbmVlZCBhY2Nlc3NcbiAgICAgKiB0byBhc3NldHMgZGVmaW5lZCBpbiBpdHMgYW5jZXN0b3IgY2hhaW4uXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVBc3NldChvcHRpb25zLCB0eXBlLCBpZCwgd2Fybk1pc3NpbmcpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXNzZXRzID0gb3B0aW9uc1t0eXBlXTsgLy8gY2hlY2sgbG9jYWwgcmVnaXN0cmF0aW9uIHZhcmlhdGlvbnMgZmlyc3RcblxuICAgICAgaWYgKGhhc093bihhc3NldHMsIGlkKSkge1xuICAgICAgICByZXR1cm4gYXNzZXRzW2lkXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNhbWVsaXplZElkID0gY2FtZWxpemUoaWQpO1xuXG4gICAgICBpZiAoaGFzT3duKGFzc2V0cywgY2FtZWxpemVkSWQpKSB7XG4gICAgICAgIHJldHVybiBhc3NldHNbY2FtZWxpemVkSWRdO1xuICAgICAgfVxuXG4gICAgICB2YXIgUGFzY2FsQ2FzZUlkID0gY2FwaXRhbGl6ZShjYW1lbGl6ZWRJZCk7XG5cbiAgICAgIGlmIChoYXNPd24oYXNzZXRzLCBQYXNjYWxDYXNlSWQpKSB7XG4gICAgICAgIHJldHVybiBhc3NldHNbUGFzY2FsQ2FzZUlkXTtcbiAgICAgIH0gLy8gZmFsbGJhY2sgdG8gcHJvdG90eXBlIGNoYWluXG5cblxuICAgICAgdmFyIHJlcyA9IGFzc2V0c1tpZF0gfHwgYXNzZXRzW2NhbWVsaXplZElkXSB8fCBhc3NldHNbUGFzY2FsQ2FzZUlkXTtcblxuICAgICAgaWYgKHRydWUgJiYgd2Fybk1pc3NpbmcgJiYgIXJlcykge1xuICAgICAgICB3YXJuKCdGYWlsZWQgdG8gcmVzb2x2ZSAnICsgdHlwZS5zbGljZSgwLCAtMSkgKyAnOiAnICsgaWQsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICAvKiAgKi9cblxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVQcm9wKGtleSwgcHJvcE9wdGlvbnMsIHByb3BzRGF0YSwgdm0pIHtcbiAgICAgIHZhciBwcm9wID0gcHJvcE9wdGlvbnNba2V5XTtcbiAgICAgIHZhciBhYnNlbnQgPSAhaGFzT3duKHByb3BzRGF0YSwga2V5KTtcbiAgICAgIHZhciB2YWx1ZSA9IHByb3BzRGF0YVtrZXldOyAvLyBib29sZWFuIGNhc3RpbmdcblxuICAgICAgdmFyIGJvb2xlYW5JbmRleCA9IGdldFR5cGVJbmRleChCb29sZWFuLCBwcm9wLnR5cGUpO1xuXG4gICAgICBpZiAoYm9vbGVhbkluZGV4ID4gLTEpIHtcbiAgICAgICAgaWYgKGFic2VudCAmJiAhaGFzT3duKHByb3AsICdkZWZhdWx0JykpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gaHlwaGVuYXRlKGtleSkpIHtcbiAgICAgICAgICAvLyBvbmx5IGNhc3QgZW1wdHkgc3RyaW5nIC8gc2FtZSBuYW1lIHRvIGJvb2xlYW4gaWZcbiAgICAgICAgICAvLyBib29sZWFuIGhhcyBoaWdoZXIgcHJpb3JpdHlcbiAgICAgICAgICB2YXIgc3RyaW5nSW5kZXggPSBnZXRUeXBlSW5kZXgoU3RyaW5nLCBwcm9wLnR5cGUpO1xuXG4gICAgICAgICAgaWYgKHN0cmluZ0luZGV4IDwgMCB8fCBib29sZWFuSW5kZXggPCBzdHJpbmdJbmRleCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBjaGVjayBkZWZhdWx0IHZhbHVlXG5cblxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSBnZXRQcm9wRGVmYXVsdFZhbHVlKHZtLCBwcm9wLCBrZXkpOyAvLyBzaW5jZSB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBhIGZyZXNoIGNvcHksXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBvYnNlcnZlIGl0LlxuXG4gICAgICAgIHZhciBwcmV2U2hvdWxkT2JzZXJ2ZSA9IHNob3VsZE9ic2VydmU7XG4gICAgICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICAgICAgb2JzZXJ2ZSh2YWx1ZSk7XG4gICAgICAgIHRvZ2dsZU9ic2VydmluZyhwcmV2U2hvdWxkT2JzZXJ2ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgIGFzc2VydFByb3AocHJvcCwga2V5LCB2YWx1ZSwgdm0sIGFic2VudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIGEgcHJvcC5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvcERlZmF1bHRWYWx1ZSh2bSwgcHJvcCwga2V5KSB7XG4gICAgICAvLyBubyBkZWZhdWx0LCByZXR1cm4gdW5kZWZpbmVkXG4gICAgICBpZiAoIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWYgPSBwcm9wW1wiZGVmYXVsdFwiXTsgLy8gd2FybiBhZ2FpbnN0IG5vbi1mYWN0b3J5IGRlZmF1bHRzIGZvciBPYmplY3QgJiBBcnJheVxuXG4gICAgICBpZiAodHJ1ZSAmJiBpc09iamVjdChkZWYpKSB7XG4gICAgICAgIHdhcm4oJ0ludmFsaWQgZGVmYXVsdCB2YWx1ZSBmb3IgcHJvcCBcIicgKyBrZXkgKyAnXCI6ICcgKyAnUHJvcHMgd2l0aCB0eXBlIE9iamVjdC9BcnJheSBtdXN0IHVzZSBhIGZhY3RvcnkgZnVuY3Rpb24gJyArICd0byByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUuJywgdm0pO1xuICAgICAgfSAvLyB0aGUgcmF3IHByb3AgdmFsdWUgd2FzIGFsc28gdW5kZWZpbmVkIGZyb20gcHJldmlvdXMgcmVuZGVyLFxuICAgICAgLy8gcmV0dXJuIHByZXZpb3VzIGRlZmF1bHQgdmFsdWUgdG8gYXZvaWQgdW5uZWNlc3Nhcnkgd2F0Y2hlciB0cmlnZ2VyXG5cblxuICAgICAgaWYgKHZtICYmIHZtLiRvcHRpb25zLnByb3BzRGF0YSAmJiB2bS4kb3B0aW9ucy5wcm9wc0RhdGFba2V5XSA9PT0gdW5kZWZpbmVkICYmIHZtLl9wcm9wc1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHZtLl9wcm9wc1trZXldO1xuICAgICAgfSAvLyBjYWxsIGZhY3RvcnkgZnVuY3Rpb24gZm9yIG5vbi1GdW5jdGlvbiB0eXBlc1xuICAgICAgLy8gYSB2YWx1ZSBpcyBGdW5jdGlvbiBpZiBpdHMgcHJvdG90eXBlIGlzIGZ1bmN0aW9uIGV2ZW4gYWNyb3NzIGRpZmZlcmVudCBleGVjdXRpb24gY29udGV4dFxuXG5cbiAgICAgIHJldHVybiB0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nICYmIGdldFR5cGUocHJvcC50eXBlKSAhPT0gJ0Z1bmN0aW9uJyA/IGRlZi5jYWxsKHZtKSA6IGRlZjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXNzZXJ0IHdoZXRoZXIgYSBwcm9wIGlzIHZhbGlkLlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBhc3NlcnRQcm9wKHByb3AsIG5hbWUsIHZhbHVlLCB2bSwgYWJzZW50KSB7XG4gICAgICBpZiAocHJvcC5yZXF1aXJlZCAmJiBhYnNlbnQpIHtcbiAgICAgICAgd2FybignTWlzc2luZyByZXF1aXJlZCBwcm9wOiBcIicgKyBuYW1lICsgJ1wiJywgdm0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsICYmICFwcm9wLnJlcXVpcmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGUgPSBwcm9wLnR5cGU7XG4gICAgICB2YXIgdmFsaWQgPSAhdHlwZSB8fCB0eXBlID09PSB0cnVlO1xuICAgICAgdmFyIGV4cGVjdGVkVHlwZXMgPSBbXTtcblxuICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgICAgdHlwZSA9IFt0eXBlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZS5sZW5ndGggJiYgIXZhbGlkOyBpKyspIHtcbiAgICAgICAgICB2YXIgYXNzZXJ0ZWRUeXBlID0gYXNzZXJ0VHlwZSh2YWx1ZSwgdHlwZVtpXSk7XG4gICAgICAgICAgZXhwZWN0ZWRUeXBlcy5wdXNoKGFzc2VydGVkVHlwZS5leHBlY3RlZFR5cGUgfHwgJycpO1xuICAgICAgICAgIHZhbGlkID0gYXNzZXJ0ZWRUeXBlLnZhbGlkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgd2FybihnZXRJbnZhbGlkVHlwZU1lc3NhZ2UobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpLCB2bSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbGlkYXRvciA9IHByb3AudmFsaWRhdG9yO1xuXG4gICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgIGlmICghdmFsaWRhdG9yKHZhbHVlKSkge1xuICAgICAgICAgIHdhcm4oJ0ludmFsaWQgcHJvcDogY3VzdG9tIHZhbGlkYXRvciBjaGVjayBmYWlsZWQgZm9yIHByb3AgXCInICsgbmFtZSArICdcIi4nLCB2bSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc2ltcGxlQ2hlY2tSRSA9IC9eKFN0cmluZ3xOdW1iZXJ8Qm9vbGVhbnxGdW5jdGlvbnxTeW1ib2wpJC87XG5cbiAgICBmdW5jdGlvbiBhc3NlcnRUeXBlKHZhbHVlLCB0eXBlKSB7XG4gICAgICB2YXIgdmFsaWQ7XG4gICAgICB2YXIgZXhwZWN0ZWRUeXBlID0gZ2V0VHlwZSh0eXBlKTtcblxuICAgICAgaWYgKHNpbXBsZUNoZWNrUkUudGVzdChleHBlY3RlZFR5cGUpKSB7XG4gICAgICAgIHZhciB0ID0gKDAsIF90eXBlb2YyW1wiZGVmYXVsdFwiXSkodmFsdWUpO1xuICAgICAgICB2YWxpZCA9IHQgPT09IGV4cGVjdGVkVHlwZS50b0xvd2VyQ2FzZSgpOyAvLyBmb3IgcHJpbWl0aXZlIHdyYXBwZXIgb2JqZWN0c1xuXG4gICAgICAgIGlmICghdmFsaWQgJiYgdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB2YWxpZCA9IHZhbHVlIGluc3RhbmNlb2YgdHlwZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09ICdPYmplY3QnKSB7XG4gICAgICAgIHZhbGlkID0gaXNQbGFpbk9iamVjdCh2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ0FycmF5Jykge1xuICAgICAgICB2YWxpZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbGlkOiB2YWxpZCxcbiAgICAgICAgZXhwZWN0ZWRUeXBlOiBleHBlY3RlZFR5cGVcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVzZSBmdW5jdGlvbiBzdHJpbmcgbmFtZSB0byBjaGVjayBidWlsdC1pbiB0eXBlcyxcbiAgICAgKiBiZWNhdXNlIGEgc2ltcGxlIGVxdWFsaXR5IGNoZWNrIHdpbGwgZmFpbCB3aGVuIHJ1bm5pbmdcbiAgICAgKiBhY3Jvc3MgZGlmZmVyZW50IHZtcyAvIGlmcmFtZXMuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGdldFR5cGUoZm4pIHtcbiAgICAgIHZhciBtYXRjaCA9IGZuICYmIGZuLnRvU3RyaW5nKCkubWF0Y2goL15cXHMqZnVuY3Rpb24gKFxcdyspLyk7XG4gICAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU2FtZVR5cGUoYSwgYikge1xuICAgICAgcmV0dXJuIGdldFR5cGUoYSkgPT09IGdldFR5cGUoYik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VHlwZUluZGV4KHR5cGUsIGV4cGVjdGVkVHlwZXMpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFR5cGVzKSkge1xuICAgICAgICByZXR1cm4gaXNTYW1lVHlwZShleHBlY3RlZFR5cGVzLCB0eXBlKSA/IDAgOiAtMTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV4cGVjdGVkVHlwZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGlzU2FtZVR5cGUoZXhwZWN0ZWRUeXBlc1tpXSwgdHlwZSkpIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW52YWxpZFR5cGVNZXNzYWdlKG5hbWUsIHZhbHVlLCBleHBlY3RlZFR5cGVzKSB7XG4gICAgICB2YXIgbWVzc2FnZSA9IFwiSW52YWxpZCBwcm9wOiB0eXBlIGNoZWNrIGZhaWxlZCBmb3IgcHJvcCBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLlwiICsgXCIgRXhwZWN0ZWQgXCIgKyBleHBlY3RlZFR5cGVzLm1hcChjYXBpdGFsaXplKS5qb2luKCcsICcpO1xuICAgICAgdmFyIGV4cGVjdGVkVHlwZSA9IGV4cGVjdGVkVHlwZXNbMF07XG4gICAgICB2YXIgcmVjZWl2ZWRUeXBlID0gdG9SYXdUeXBlKHZhbHVlKTtcbiAgICAgIHZhciBleHBlY3RlZFZhbHVlID0gc3R5bGVWYWx1ZSh2YWx1ZSwgZXhwZWN0ZWRUeXBlKTtcbiAgICAgIHZhciByZWNlaXZlZFZhbHVlID0gc3R5bGVWYWx1ZSh2YWx1ZSwgcmVjZWl2ZWRUeXBlKTsgLy8gY2hlY2sgaWYgd2UgbmVlZCB0byBzcGVjaWZ5IGV4cGVjdGVkIHZhbHVlXG5cbiAgICAgIGlmIChleHBlY3RlZFR5cGVzLmxlbmd0aCA9PT0gMSAmJiBpc0V4cGxpY2FibGUoZXhwZWN0ZWRUeXBlKSAmJiAhaXNCb29sZWFuKGV4cGVjdGVkVHlwZSwgcmVjZWl2ZWRUeXBlKSkge1xuICAgICAgICBtZXNzYWdlICs9IFwiIHdpdGggdmFsdWUgXCIgKyBleHBlY3RlZFZhbHVlO1xuICAgICAgfVxuXG4gICAgICBtZXNzYWdlICs9IFwiLCBnb3QgXCIgKyByZWNlaXZlZFR5cGUgKyBcIiBcIjsgLy8gY2hlY2sgaWYgd2UgbmVlZCB0byBzcGVjaWZ5IHJlY2VpdmVkIHZhbHVlXG5cbiAgICAgIGlmIChpc0V4cGxpY2FibGUocmVjZWl2ZWRUeXBlKSkge1xuICAgICAgICBtZXNzYWdlICs9IFwid2l0aCB2YWx1ZSBcIiArIHJlY2VpdmVkVmFsdWUgKyBcIi5cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3R5bGVWYWx1ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgaWYgKHR5cGUgPT09ICdTdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBcIlxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCI7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdOdW1iZXInKSB7XG4gICAgICAgIHJldHVybiBcIlwiICsgTnVtYmVyKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIlwiICsgdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNFeHBsaWNhYmxlKHZhbHVlKSB7XG4gICAgICB2YXIgZXhwbGljaXRUeXBlcyA9IFsnc3RyaW5nJywgJ251bWJlcicsICdib29sZWFuJ107XG4gICAgICByZXR1cm4gZXhwbGljaXRUeXBlcy5zb21lKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBlbGVtO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNCb29sZWFuKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXSxcbiAgICAgICAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgYXJnc1tsZW5dID0gYXJndW1lbnRzW2xlbl07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW0udG9Mb3dlckNhc2UoKSA9PT0gJ2Jvb2xlYW4nO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qICAqL1xuXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVFcnJvcihlcnIsIHZtLCBpbmZvKSB7XG4gICAgICAvLyBEZWFjdGl2YXRlIGRlcHMgdHJhY2tpbmcgd2hpbGUgcHJvY2Vzc2luZyBlcnJvciBoYW5kbGVyIHRvIGF2b2lkIHBvc3NpYmxlIGluZmluaXRlIHJlbmRlcmluZy5cbiAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZXgvaXNzdWVzLzE1MDVcbiAgICAgIHB1c2hUYXJnZXQoKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHZtKSB7XG4gICAgICAgICAgdmFyIGN1ciA9IHZtO1xuXG4gICAgICAgICAgd2hpbGUgKGN1ciA9IGN1ci4kcGFyZW50KSB7XG4gICAgICAgICAgICB2YXIgaG9va3MgPSBjdXIuJG9wdGlvbnMuZXJyb3JDYXB0dXJlZDtcblxuICAgICAgICAgICAgaWYgKGhvb2tzKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgdmFyIGNhcHR1cmUgPSBob29rc1tpXS5jYWxsKGN1ciwgZXJyLCB2bSwgaW5mbykgPT09IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgZ2xvYmFsSGFuZGxlRXJyb3IoZSwgY3VyLCAnZXJyb3JDYXB0dXJlZCBob29rJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2xvYmFsSGFuZGxlRXJyb3IoZXJyLCB2bSwgaW5mbyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBwb3BUYXJnZXQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhoYW5kbGVyLCBjb250ZXh0LCBhcmdzLCB2bSwgaW5mbykge1xuICAgICAgdmFyIHJlcztcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzID0gYXJncyA/IGhhbmRsZXIuYXBwbHkoY29udGV4dCwgYXJncykgOiBoYW5kbGVyLmNhbGwoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlcyAmJiAhcmVzLl9pc1Z1ZSAmJiBpc1Byb21pc2UocmVzKSAmJiAhcmVzLl9oYW5kbGVkKSB7XG4gICAgICAgICAgcmVzW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVFcnJvcihlLCB2bSwgaW5mbyArIFwiIChQcm9taXNlL2FzeW5jKVwiKTtcbiAgICAgICAgICB9KTsgLy8gaXNzdWUgIzk1MTFcbiAgICAgICAgICAvLyBhdm9pZCBjYXRjaCB0cmlnZ2VyaW5nIG11bHRpcGxlIHRpbWVzIHdoZW4gbmVzdGVkIGNhbGxzXG5cbiAgICAgICAgICByZXMuX2hhbmRsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCBpbmZvKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnbG9iYWxIYW5kbGVFcnJvcihlcnIsIHZtLCBpbmZvKSB7XG4gICAgICBpZiAoY29uZmlnLmVycm9ySGFuZGxlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBjb25maWcuZXJyb3JIYW5kbGVyLmNhbGwobnVsbCwgZXJyLCB2bSwgaW5mbyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgdXNlciBpbnRlbnRpb25hbGx5IHRocm93cyB0aGUgb3JpZ2luYWwgZXJyb3IgaW4gdGhlIGhhbmRsZXIsXG4gICAgICAgICAgLy8gZG8gbm90IGxvZyBpdCB0d2ljZVxuICAgICAgICAgIGlmIChlICE9PSBlcnIpIHtcbiAgICAgICAgICAgIGxvZ0Vycm9yKGUsIG51bGwsICdjb25maWcuZXJyb3JIYW5kbGVyJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxvZ0Vycm9yKGVyciwgdm0sIGluZm8pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvZ0Vycm9yKGVyciwgdm0sIGluZm8pIHtcbiAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgIHdhcm4oXCJFcnJvciBpbiBcIiArIGluZm8gKyBcIjogXFxcIlwiICsgZXJyLnRvU3RyaW5nKCkgKyBcIlxcXCJcIiwgdm0pO1xuICAgICAgfVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblxuXG4gICAgICBpZiAoKGluQnJvd3NlciB8fCBpbldlZXgpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICAgIC8qICAqL1xuXG5cbiAgICB2YXIgY2FsbGJhY2tzID0gW107XG4gICAgdmFyIHBlbmRpbmcgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGZsdXNoQ2FsbGJhY2tzKCkge1xuICAgICAgcGVuZGluZyA9IGZhbHNlO1xuICAgICAgdmFyIGNvcGllcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgICAgIGNhbGxiYWNrcy5sZW5ndGggPSAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvcGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb3BpZXNbaV0oKTtcbiAgICAgIH1cbiAgICB9IC8vIEhlcmUgd2UgaGF2ZSBhc3luYyBkZWZlcnJpbmcgd3JhcHBlcnMgdXNpbmcgbWljcm90YXNrcy5cbiAgICAvLyBJbiAyLjUgd2UgdXNlZCAobWFjcm8pIHRhc2tzIChpbiBjb21iaW5hdGlvbiB3aXRoIG1pY3JvdGFza3MpLlxuICAgIC8vIEhvd2V2ZXIsIGl0IGhhcyBzdWJ0bGUgcHJvYmxlbXMgd2hlbiBzdGF0ZSBpcyBjaGFuZ2VkIHJpZ2h0IGJlZm9yZSByZXBhaW50XG4gICAgLy8gKGUuZy4gIzY4MTMsIG91dC1pbiB0cmFuc2l0aW9ucykuXG4gICAgLy8gQWxzbywgdXNpbmcgKG1hY3JvKSB0YXNrcyBpbiBldmVudCBoYW5kbGVyIHdvdWxkIGNhdXNlIHNvbWUgd2VpcmQgYmVoYXZpb3JzXG4gICAgLy8gdGhhdCBjYW5ub3QgYmUgY2lyY3VtdmVudGVkIChlLmcuICM3MTA5LCAjNzE1MywgIzc1NDYsICM3ODM0LCAjODEwOSkuXG4gICAgLy8gU28gd2Ugbm93IHVzZSBtaWNyb3Rhc2tzIGV2ZXJ5d2hlcmUsIGFnYWluLlxuICAgIC8vIEEgbWFqb3IgZHJhd2JhY2sgb2YgdGhpcyB0cmFkZW9mZiBpcyB0aGF0IHRoZXJlIGFyZSBzb21lIHNjZW5hcmlvc1xuICAgIC8vIHdoZXJlIG1pY3JvdGFza3MgaGF2ZSB0b28gaGlnaCBhIHByaW9yaXR5IGFuZCBmaXJlIGluIGJldHdlZW4gc3VwcG9zZWRseVxuICAgIC8vIHNlcXVlbnRpYWwgZXZlbnRzIChlLmcuICM0NTIxLCAjNjY5MCwgd2hpY2ggaGF2ZSB3b3JrYXJvdW5kcylcbiAgICAvLyBvciBldmVuIGJldHdlZW4gYnViYmxpbmcgb2YgdGhlIHNhbWUgZXZlbnQgKCM2NTY2KS5cblxuXG4gICAgdmFyIHRpbWVyRnVuYzsgLy8gVGhlIG5leHRUaWNrIGJlaGF2aW9yIGxldmVyYWdlcyB0aGUgbWljcm90YXNrIHF1ZXVlLCB3aGljaCBjYW4gYmUgYWNjZXNzZWRcbiAgICAvLyB2aWEgZWl0aGVyIG5hdGl2ZSBQcm9taXNlLnRoZW4gb3IgTXV0YXRpb25PYnNlcnZlci5cbiAgICAvLyBNdXRhdGlvbk9ic2VydmVyIGhhcyB3aWRlciBzdXBwb3J0LCBob3dldmVyIGl0IGlzIHNlcmlvdXNseSBidWdnZWQgaW5cbiAgICAvLyBVSVdlYlZpZXcgaW4gaU9TID49IDkuMy4zIHdoZW4gdHJpZ2dlcmVkIGluIHRvdWNoIGV2ZW50IGhhbmRsZXJzLiBJdFxuICAgIC8vIGNvbXBsZXRlbHkgc3RvcHMgd29ya2luZyBhZnRlciB0cmlnZ2VyaW5nIGEgZmV3IHRpbWVzLi4uIHNvLCBpZiBuYXRpdmVcbiAgICAvLyBQcm9taXNlIGlzIGF2YWlsYWJsZSwgd2Ugd2lsbCB1c2UgaXQ6XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCwgJGZsb3ctZGlzYWJsZS1saW5lICovXG5cbiAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFByb21pc2UpKSB7XG4gICAgICB2YXIgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgICB0aW1lckZ1bmMgPSBmdW5jdGlvbiB0aW1lckZ1bmMoKSB7XG4gICAgICAgIHAudGhlbihmbHVzaENhbGxiYWNrcyk7IC8vIEluIHByb2JsZW1hdGljIFVJV2ViVmlld3MsIFByb21pc2UudGhlbiBkb2Vzbid0IGNvbXBsZXRlbHkgYnJlYWssIGJ1dFxuICAgICAgICAvLyBpdCBjYW4gZ2V0IHN0dWNrIGluIGEgd2VpcmQgc3RhdGUgd2hlcmUgY2FsbGJhY2tzIGFyZSBwdXNoZWQgaW50byB0aGVcbiAgICAgICAgLy8gbWljcm90YXNrIHF1ZXVlIGJ1dCB0aGUgcXVldWUgaXNuJ3QgYmVpbmcgZmx1c2hlZCwgdW50aWwgdGhlIGJyb3dzZXJcbiAgICAgICAgLy8gbmVlZHMgdG8gZG8gc29tZSBvdGhlciB3b3JrLCBlLmcuIGhhbmRsZSBhIHRpbWVyLiBUaGVyZWZvcmUgd2UgY2FuXG4gICAgICAgIC8vIFwiZm9yY2VcIiB0aGUgbWljcm90YXNrIHF1ZXVlIHRvIGJlIGZsdXNoZWQgYnkgYWRkaW5nIGFuIGVtcHR5IHRpbWVyLlxuXG4gICAgICAgIGlmIChpc0lPUykge1xuICAgICAgICAgIHNldFRpbWVvdXQobm9vcCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICghaXNJRSAmJiB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgKGlzTmF0aXZlKE11dGF0aW9uT2JzZXJ2ZXIpIHx8IC8vIFBoYW50b21KUyBhbmQgaU9TIDcueFxuICAgIE11dGF0aW9uT2JzZXJ2ZXIudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgTXV0YXRpb25PYnNlcnZlckNvbnN0cnVjdG9yXScpKSB7XG4gICAgICAvLyBVc2UgTXV0YXRpb25PYnNlcnZlciB3aGVyZSBuYXRpdmUgUHJvbWlzZSBpcyBub3QgYXZhaWxhYmxlLFxuICAgICAgLy8gZS5nLiBQaGFudG9tSlMsIGlPUzcsIEFuZHJvaWQgNC40XG4gICAgICAvLyAoIzY0NjYgTXV0YXRpb25PYnNlcnZlciBpcyB1bnJlbGlhYmxlIGluIElFMTEpXG4gICAgICB2YXIgY291bnRlciA9IDE7XG4gICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmbHVzaENhbGxiYWNrcyk7XG4gICAgICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcoY291bnRlcikpO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0ZXh0Tm9kZSwge1xuICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgdGltZXJGdW5jID0gZnVuY3Rpb24gdGltZXJGdW5jKCkge1xuICAgICAgICBjb3VudGVyID0gKGNvdW50ZXIgKyAxKSAlIDI7XG4gICAgICAgIHRleHROb2RlLmRhdGEgPSBTdHJpbmcoY291bnRlcik7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNldEltbWVkaWF0ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoc2V0SW1tZWRpYXRlKSkge1xuICAgICAgLy8gRmFsbGJhY2sgdG8gc2V0SW1tZWRpYXRlLlxuICAgICAgLy8gVGVjaG5pY2FsbHkgaXQgbGV2ZXJhZ2VzIHRoZSAobWFjcm8pIHRhc2sgcXVldWUsXG4gICAgICAvLyBidXQgaXQgaXMgc3RpbGwgYSBiZXR0ZXIgY2hvaWNlIHRoYW4gc2V0VGltZW91dC5cbiAgICAgIHRpbWVyRnVuYyA9IGZ1bmN0aW9uIHRpbWVyRnVuYygpIHtcbiAgICAgICAgc2V0SW1tZWRpYXRlKGZsdXNoQ2FsbGJhY2tzKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZhbGxiYWNrIHRvIHNldFRpbWVvdXQuXG4gICAgICB0aW1lckZ1bmMgPSBmdW5jdGlvbiB0aW1lckZ1bmMoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZmx1c2hDYWxsYmFja3MsIDApO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXh0VGljayhjYiwgY3R4KSB7XG4gICAgICB2YXIgX3Jlc29sdmU7XG5cbiAgICAgIGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNiLmNhbGwoY3R4KTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBoYW5kbGVFcnJvcihlLCBjdHgsICduZXh0VGljaycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfcmVzb2x2ZSkge1xuICAgICAgICAgIF9yZXNvbHZlKGN0eCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgICAgcGVuZGluZyA9IHRydWU7XG4gICAgICAgIHRpbWVyRnVuYygpO1xuICAgICAgfSAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcblxuXG4gICAgICBpZiAoIWNiICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiAgKi9cblxuICAgIC8qIG5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBwbGF5IHdlbGwgd2l0aCBQcm94eSAqL1xuXG5cbiAgICB2YXIgaW5pdFByb3h5O1xuXG4gICAgaWYgKHRydWUpIHtcbiAgICAgIHZhciBhbGxvd2VkR2xvYmFscyA9IG1ha2VNYXAoJ0luZmluaXR5LHVuZGVmaW5lZCxOYU4saXNGaW5pdGUsaXNOYU4sJyArICdwYXJzZUZsb2F0LHBhcnNlSW50LGRlY29kZVVSSSxkZWNvZGVVUklDb21wb25lbnQsZW5jb2RlVVJJLGVuY29kZVVSSUNvbXBvbmVudCwnICsgJ01hdGgsTnVtYmVyLERhdGUsQXJyYXksT2JqZWN0LEJvb2xlYW4sU3RyaW5nLFJlZ0V4cCxNYXAsU2V0LEpTT04sSW50bCwnICsgJ3JlcXVpcmUnIC8vIGZvciBXZWJwYWNrL0Jyb3dzZXJpZnlcbiAgICAgICk7XG5cbiAgICAgIHZhciB3YXJuTm9uUHJlc2VudCA9IGZ1bmN0aW9uIHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KSB7XG4gICAgICAgIHdhcm4oXCJQcm9wZXJ0eSBvciBtZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIG5vdCBkZWZpbmVkIG9uIHRoZSBpbnN0YW5jZSBidXQgXCIgKyAncmVmZXJlbmNlZCBkdXJpbmcgcmVuZGVyLiBNYWtlIHN1cmUgdGhhdCB0aGlzIHByb3BlcnR5IGlzIHJlYWN0aXZlLCAnICsgJ2VpdGhlciBpbiB0aGUgZGF0YSBvcHRpb24sIG9yIGZvciBjbGFzcy1iYXNlZCBjb21wb25lbnRzLCBieSAnICsgJ2luaXRpYWxpemluZyB0aGUgcHJvcGVydHkuICcgKyAnU2VlOiBodHRwczovL3Z1ZWpzLm9yZy92Mi9ndWlkZS9yZWFjdGl2aXR5Lmh0bWwjRGVjbGFyaW5nLVJlYWN0aXZlLVByb3BlcnRpZXMuJywgdGFyZ2V0KTtcbiAgICAgIH07XG5cbiAgICAgIHZhciB3YXJuUmVzZXJ2ZWRQcmVmaXggPSBmdW5jdGlvbiB3YXJuUmVzZXJ2ZWRQcmVmaXgodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgd2FybihcIlByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBtdXN0IGJlIGFjY2Vzc2VkIHdpdGggXFxcIiRkYXRhLlwiICsga2V5ICsgXCJcXFwiIGJlY2F1c2UgXCIgKyAncHJvcGVydGllcyBzdGFydGluZyB3aXRoIFwiJFwiIG9yIFwiX1wiIGFyZSBub3QgcHJveGllZCBpbiB0aGUgVnVlIGluc3RhbmNlIHRvICcgKyAncHJldmVudCBjb25mbGljdHMgd2l0aCBWdWUgaW50ZXJuYWxzLiAnICsgJ1NlZTogaHR0cHM6Ly92dWVqcy5vcmcvdjIvYXBpLyNkYXRhJywgdGFyZ2V0KTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBoYXNQcm94eSA9IHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUHJveHkpO1xuXG4gICAgICBpZiAoaGFzUHJveHkpIHtcbiAgICAgICAgdmFyIGlzQnVpbHRJbk1vZGlmaWVyID0gbWFrZU1hcCgnc3RvcCxwcmV2ZW50LHNlbGYsY3RybCxzaGlmdCxhbHQsbWV0YSxleGFjdCcpO1xuICAgICAgICBjb25maWcua2V5Q29kZXMgPSBuZXcgUHJveHkoY29uZmlnLmtleUNvZGVzLCB7XG4gICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoaXNCdWlsdEluTW9kaWZpZXIoa2V5KSkge1xuICAgICAgICAgICAgICB3YXJuKFwiQXZvaWQgb3ZlcndyaXRpbmcgYnVpbHQtaW4gbW9kaWZpZXIgaW4gY29uZmlnLmtleUNvZGVzOiAuXCIgKyBrZXkpO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGFzSGFuZGxlciA9IHtcbiAgICAgICAgaGFzOiBmdW5jdGlvbiBoYXModGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgICB2YXIgaGFzID0gKGtleSBpbiB0YXJnZXQpO1xuICAgICAgICAgIHZhciBpc0FsbG93ZWQgPSBhbGxvd2VkR2xvYmFscyhrZXkpIHx8IHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleS5jaGFyQXQoMCkgPT09ICdfJyAmJiAhKGtleSBpbiB0YXJnZXQuJGRhdGEpO1xuXG4gICAgICAgICAgaWYgKCFoYXMgJiYgIWlzQWxsb3dlZCkge1xuICAgICAgICAgICAgaWYgKGtleSBpbiB0YXJnZXQuJGRhdGEpIHtcbiAgICAgICAgICAgICAgd2FyblJlc2VydmVkUHJlZml4KHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaGFzIHx8ICFpc0FsbG93ZWQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgZ2V0SGFuZGxlciA9IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYgIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgaWYgKGtleSBpbiB0YXJnZXQuJGRhdGEpIHtcbiAgICAgICAgICAgICAgd2FyblJlc2VydmVkUHJlZml4KHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGluaXRQcm94eSA9IGZ1bmN0aW9uIGluaXRQcm94eSh2bSkge1xuICAgICAgICBpZiAoaGFzUHJveHkpIHtcbiAgICAgICAgICAvLyBkZXRlcm1pbmUgd2hpY2ggcHJveHkgaGFuZGxlciB0byB1c2VcbiAgICAgICAgICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuICAgICAgICAgIHZhciBoYW5kbGVycyA9IG9wdGlvbnMucmVuZGVyICYmIG9wdGlvbnMucmVuZGVyLl93aXRoU3RyaXBwZWQgPyBnZXRIYW5kbGVyIDogaGFzSGFuZGxlcjtcbiAgICAgICAgICB2bS5fcmVuZGVyUHJveHkgPSBuZXcgUHJveHkodm0sIGhhbmRsZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2bS5fcmVuZGVyUHJveHkgPSB2bTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgLyogICovXG5cblxuICAgIHZhciBzZWVuT2JqZWN0cyA9IG5ldyBfU2V0KCk7XG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAgICAgKiBnZXR0ZXJzLCBzbyB0aGF0IGV2ZXJ5IG5lc3RlZCBwcm9wZXJ0eSBpbnNpZGUgdGhlIG9iamVjdFxuICAgICAqIGlzIGNvbGxlY3RlZCBhcyBhIFwiZGVlcFwiIGRlcGVuZGVuY3kuXG4gICAgICovXG5cbiAgICBmdW5jdGlvbiB0cmF2ZXJzZSh2YWwpIHtcbiAgICAgIF90cmF2ZXJzZSh2YWwsIHNlZW5PYmplY3RzKTtcblxuICAgICAgc2Vlbk9iamVjdHMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfdHJhdmVyc2UodmFsLCBzZWVuKSB7XG4gICAgICB2YXIgaSwga2V5cztcbiAgICAgIHZhciBpc0EgPSBBcnJheS5pc0FycmF5KHZhbCk7XG5cbiAgICAgIGlmICghaXNBICYmICFpc09iamVjdCh2YWwpIHx8IE9iamVjdC5pc0Zyb3plbih2YWwpIHx8IHZhbCBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbC5fX29iX18pIHtcbiAgICAgICAgdmFyIGRlcElkID0gdmFsLl9fb2JfXy5kZXAuaWQ7XG5cbiAgICAgICAgaWYgKHNlZW4uaGFzKGRlcElkKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlZW4uYWRkKGRlcElkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQSkge1xuICAgICAgICBpID0gdmFsLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgX3RyYXZlcnNlKHZhbFtpXSwgc2Vlbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgICAgICBpID0ga2V5cy5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIF90cmF2ZXJzZSh2YWxba2V5c1tpXV0sIHNlZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG1hcms7XG4gICAgdmFyIG1lYXN1cmU7XG5cbiAgICBpZiAodHJ1ZSkge1xuICAgICAgdmFyIHBlcmYgPSBpbkJyb3dzZXIgJiYgd2luZG93LnBlcmZvcm1hbmNlO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cbiAgICAgIGlmIChwZXJmICYmIHBlcmYubWFyayAmJiBwZXJmLm1lYXN1cmUgJiYgcGVyZi5jbGVhck1hcmtzICYmIHBlcmYuY2xlYXJNZWFzdXJlcykge1xuICAgICAgICBtYXJrID0gZnVuY3Rpb24gbWFyayh0YWcpIHtcbiAgICAgICAgICByZXR1cm4gcGVyZi5tYXJrKHRhZyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbWVhc3VyZSA9IGZ1bmN0aW9uIG1lYXN1cmUobmFtZSwgc3RhcnRUYWcsIGVuZFRhZykge1xuICAgICAgICAgIHBlcmYubWVhc3VyZShuYW1lLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICAgICAgICBwZXJmLmNsZWFyTWFya3Moc3RhcnRUYWcpO1xuICAgICAgICAgIHBlcmYuY2xlYXJNYXJrcyhlbmRUYWcpOyAvLyBwZXJmLmNsZWFyTWVhc3VyZXMobmFtZSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogICovXG5cblxuICAgIHZhciBub3JtYWxpemVFdmVudCA9IGNhY2hlZChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIHBhc3NpdmUgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJyYnO1xuICAgICAgbmFtZSA9IHBhc3NpdmUgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgICAgIHZhciBvbmNlJCQxID0gbmFtZS5jaGFyQXQoMCkgPT09ICd+JzsgLy8gUHJlZml4ZWQgbGFzdCwgY2hlY2tlZCBmaXJzdFxuXG4gICAgICBuYW1lID0gb25jZSQkMSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICAgICAgdmFyIGNhcHR1cmUgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJyEnO1xuICAgICAgbmFtZSA9IGNhcHR1cmUgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIG9uY2U6IG9uY2UkJDEsXG4gICAgICAgIGNhcHR1cmU6IGNhcHR1cmUsXG4gICAgICAgIHBhc3NpdmU6IHBhc3NpdmVcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGbkludm9rZXIoZm5zLCB2bSkge1xuICAgICAgZnVuY3Rpb24gaW52b2tlcigpIHtcbiAgICAgICAgdmFyIGFyZ3VtZW50cyQxID0gYXJndW1lbnRzO1xuICAgICAgICB2YXIgZm5zID0gaW52b2tlci5mbnM7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZm5zKSkge1xuICAgICAgICAgIHZhciBjbG9uZWQgPSBmbnMuc2xpY2UoKTtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xvbmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjbG9uZWRbaV0sIG51bGwsIGFyZ3VtZW50cyQxLCB2bSwgXCJ2LW9uIGhhbmRsZXJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHJldHVybiBoYW5kbGVyIHJldHVybiB2YWx1ZSBmb3Igc2luZ2xlIGhhbmRsZXJzXG4gICAgICAgICAgcmV0dXJuIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGZucywgbnVsbCwgYXJndW1lbnRzLCB2bSwgXCJ2LW9uIGhhbmRsZXJcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW52b2tlci5mbnMgPSBmbnM7XG4gICAgICByZXR1cm4gaW52b2tlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMaXN0ZW5lcnMob24sIG9sZE9uLCBhZGQsIHJlbW92ZSQkMSwgY3JlYXRlT25jZUhhbmRsZXIsIHZtKSB7XG4gICAgICB2YXIgbmFtZSwgZGVmJCQxLCBjdXIsIG9sZCwgZXZlbnQ7XG5cbiAgICAgIGZvciAobmFtZSBpbiBvbikge1xuICAgICAgICBkZWYkJDEgPSBjdXIgPSBvbltuYW1lXTtcbiAgICAgICAgb2xkID0gb2xkT25bbmFtZV07XG4gICAgICAgIGV2ZW50ID0gbm9ybWFsaXplRXZlbnQobmFtZSk7XG5cbiAgICAgICAgaWYgKGlzVW5kZWYoY3VyKSkge1xuICAgICAgICAgIHRydWUgJiYgd2FybihcIkludmFsaWQgaGFuZGxlciBmb3IgZXZlbnQgXFxcIlwiICsgZXZlbnQubmFtZSArIFwiXFxcIjogZ290IFwiICsgU3RyaW5nKGN1ciksIHZtKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc1VuZGVmKG9sZCkpIHtcbiAgICAgICAgICBpZiAoaXNVbmRlZihjdXIuZm5zKSkge1xuICAgICAgICAgICAgY3VyID0gb25bbmFtZV0gPSBjcmVhdGVGbkludm9rZXIoY3VyLCB2bSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzVHJ1ZShldmVudC5vbmNlKSkge1xuICAgICAgICAgICAgY3VyID0gb25bbmFtZV0gPSBjcmVhdGVPbmNlSGFuZGxlcihldmVudC5uYW1lLCBjdXIsIGV2ZW50LmNhcHR1cmUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFkZChldmVudC5uYW1lLCBjdXIsIGV2ZW50LmNhcHR1cmUsIGV2ZW50LnBhc3NpdmUsIGV2ZW50LnBhcmFtcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VyICE9PSBvbGQpIHtcbiAgICAgICAgICBvbGQuZm5zID0gY3VyO1xuICAgICAgICAgIG9uW25hbWVdID0gb2xkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobmFtZSBpbiBvbGRPbikge1xuICAgICAgICBpZiAoaXNVbmRlZihvbltuYW1lXSkpIHtcbiAgICAgICAgICBldmVudCA9IG5vcm1hbGl6ZUV2ZW50KG5hbWUpO1xuICAgICAgICAgIHJlbW92ZSQkMShldmVudC5uYW1lLCBvbGRPbltuYW1lXSwgZXZlbnQuY2FwdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLyogICovXG5cbiAgICAvKiAgKi9cbiAgICAvLyBmaXhlZCBieSB4eHh4eHggKG1wIHByb3BlcnRpZXMpXG5cblxuICAgIGZ1bmN0aW9uIGV4dHJhY3RQcm9wZXJ0aWVzRnJvbVZOb2RlRGF0YShkYXRhLCBDdG9yLCByZXMsIGNvbnRleHQpIHtcbiAgICAgIHZhciBwcm9wT3B0aW9ucyA9IEN0b3Iub3B0aW9ucy5tcE9wdGlvbnMgJiYgQ3Rvci5vcHRpb25zLm1wT3B0aW9ucy5wcm9wZXJ0aWVzO1xuXG4gICAgICBpZiAoaXNVbmRlZihwcm9wT3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgdmFyIGV4dGVybmFsQ2xhc3NlcyA9IEN0b3Iub3B0aW9ucy5tcE9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzIHx8IFtdO1xuICAgICAgdmFyIGF0dHJzID0gZGF0YS5hdHRycztcbiAgICAgIHZhciBwcm9wcyA9IGRhdGEucHJvcHM7XG5cbiAgICAgIGlmIChpc0RlZihhdHRycykgfHwgaXNEZWYocHJvcHMpKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xuICAgICAgICAgIHZhciBhbHRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gY2hlY2tQcm9wKHJlcywgcHJvcHMsIGtleSwgYWx0S2V5LCB0cnVlKSB8fCBjaGVja1Byb3AocmVzLCBhdHRycywga2V5LCBhbHRLZXksIGZhbHNlKTsgLy8gZXh0ZXJuYWxDbGFzc1xuXG4gICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXNba2V5XSAmJiBleHRlcm5hbENsYXNzZXMuaW5kZXhPZihhbHRLZXkpICE9PSAtMSAmJiBjb250ZXh0W2NhbWVsaXplKHJlc1trZXldKV0pIHtcbiAgICAgICAgICAgIC8vIOi1i+WAvCBleHRlcm5hbENsYXNzIOecn+ato+eahOWAvCjmqKHmnb/ph4wgZXh0ZXJuYWxDbGFzcyDnmoTlgLzlj6/og73mmK/lrZfnrKbkuLIpXG4gICAgICAgICAgICByZXNba2V5XSA9IGNvbnRleHRbY2FtZWxpemUocmVzW2tleV0pXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHRhZywgY29udGV4dCAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICApIHtcbiAgICAgIC8vIHdlIGFyZSBvbmx5IGV4dHJhY3RpbmcgcmF3IHZhbHVlcyBoZXJlLlxuICAgICAgLy8gdmFsaWRhdGlvbiBhbmQgZGVmYXVsdCB2YWx1ZXMgYXJlIGhhbmRsZWQgaW4gdGhlIGNoaWxkXG4gICAgICAvLyBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgdmFyIHByb3BPcHRpb25zID0gQ3Rvci5vcHRpb25zLnByb3BzO1xuXG4gICAgICBpZiAoaXNVbmRlZihwcm9wT3B0aW9ucykpIHtcbiAgICAgICAgLy8gZml4ZWQgYnkgeHh4eHh4XG4gICAgICAgIHJldHVybiBleHRyYWN0UHJvcGVydGllc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3Rvciwge30sIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVzID0ge307XG4gICAgICB2YXIgYXR0cnMgPSBkYXRhLmF0dHJzO1xuICAgICAgdmFyIHByb3BzID0gZGF0YS5wcm9wcztcblxuICAgICAgaWYgKGlzRGVmKGF0dHJzKSB8fCBpc0RlZihwcm9wcykpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICAgICAgdmFyIGFsdEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuXG4gICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBrZXlJbkxvd2VyQ2FzZSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBpZiAoa2V5ICE9PSBrZXlJbkxvd2VyQ2FzZSAmJiBhdHRycyAmJiBoYXNPd24oYXR0cnMsIGtleUluTG93ZXJDYXNlKSkge1xuICAgICAgICAgICAgICB0aXAoXCJQcm9wIFxcXCJcIiArIGtleUluTG93ZXJDYXNlICsgXCJcXFwiIGlzIHBhc3NlZCB0byBjb21wb25lbnQgXCIgKyBmb3JtYXRDb21wb25lbnROYW1lKHRhZyB8fCBDdG9yKSArIFwiLCBidXQgdGhlIGRlY2xhcmVkIHByb3AgbmFtZSBpc1wiICsgXCIgXFxcIlwiICsga2V5ICsgXCJcXFwiLiBcIiArIFwiTm90ZSB0aGF0IEhUTUwgYXR0cmlidXRlcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZSBhbmQgY2FtZWxDYXNlZCBcIiArIFwicHJvcHMgbmVlZCB0byB1c2UgdGhlaXIga2ViYWItY2FzZSBlcXVpdmFsZW50cyB3aGVuIHVzaW5nIGluLURPTSBcIiArIFwidGVtcGxhdGVzLiBZb3Ugc2hvdWxkIHByb2JhYmx5IHVzZSBcXFwiXCIgKyBhbHRLZXkgKyBcIlxcXCIgaW5zdGVhZCBvZiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoZWNrUHJvcChyZXMsIHByb3BzLCBrZXksIGFsdEtleSwgdHJ1ZSkgfHwgY2hlY2tQcm9wKHJlcywgYXR0cnMsIGtleSwgYWx0S2V5LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gZml4ZWQgYnkgeHh4eHh4XG5cblxuICAgICAgcmV0dXJuIGV4dHJhY3RQcm9wZXJ0aWVzRnJvbVZOb2RlRGF0YShkYXRhLCBDdG9yLCByZXMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrUHJvcChyZXMsIGhhc2gsIGtleSwgYWx0S2V5LCBwcmVzZXJ2ZSkge1xuICAgICAgaWYgKGlzRGVmKGhhc2gpKSB7XG4gICAgICAgIGlmIChoYXNPd24oaGFzaCwga2V5KSkge1xuICAgICAgICAgIHJlc1trZXldID0gaGFzaFtrZXldO1xuXG4gICAgICAgICAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgICAgICAgICAgZGVsZXRlIGhhc2hba2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNPd24oaGFzaCwgYWx0S2V5KSkge1xuICAgICAgICAgIHJlc1trZXldID0gaGFzaFthbHRLZXldO1xuXG4gICAgICAgICAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgICAgICAgICAgZGVsZXRlIGhhc2hbYWx0S2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qICAqL1xuICAgIC8vIFRoZSB0ZW1wbGF0ZSBjb21waWxlciBhdHRlbXB0cyB0byBtaW5pbWl6ZSB0aGUgbmVlZCBmb3Igbm9ybWFsaXphdGlvbiBieVxuICAgIC8vIHN0YXRpY2FsbHkgYW5hbHl6aW5nIHRoZSB0ZW1wbGF0ZSBhdCBjb21waWxlIHRpbWUuXG4gICAgLy9cbiAgICAvLyBGb3IgcGxhaW4gSFRNTCBtYXJrdXAsIG5vcm1hbGl6YXRpb24gY2FuIGJlIGNvbXBsZXRlbHkgc2tpcHBlZCBiZWNhdXNlIHRoZVxuICAgIC8vIGdlbmVyYXRlZCByZW5kZXIgZnVuY3Rpb24gaXMgZ3VhcmFudGVlZCB0byByZXR1cm4gQXJyYXk8Vk5vZGU+LiBUaGVyZSBhcmVcbiAgICAvLyB0d28gY2FzZXMgd2hlcmUgZXh0cmEgbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQ6XG4gICAgLy8gMS4gV2hlbiB0aGUgY2hpbGRyZW4gY29udGFpbnMgY29tcG9uZW50cyAtIGJlY2F1c2UgYSBmdW5jdGlvbmFsIGNvbXBvbmVudFxuICAgIC8vIG1heSByZXR1cm4gYW4gQXJyYXkgaW5zdGVhZCBvZiBhIHNpbmdsZSByb290LiBJbiB0aGlzIGNhc2UsIGp1c3QgYSBzaW1wbGVcbiAgICAvLyBub3JtYWxpemF0aW9uIGlzIG5lZWRlZCAtIGlmIGFueSBjaGlsZCBpcyBhbiBBcnJheSwgd2UgZmxhdHRlbiB0aGUgd2hvbGVcbiAgICAvLyB0aGluZyB3aXRoIEFycmF5LnByb3RvdHlwZS5jb25jYXQuIEl0IGlzIGd1YXJhbnRlZWQgdG8gYmUgb25seSAxLWxldmVsIGRlZXBcbiAgICAvLyBiZWNhdXNlIGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhbHJlYWR5IG5vcm1hbGl6ZSB0aGVpciBvd24gY2hpbGRyZW4uXG5cblxuICAgIGZ1bmN0aW9uIHNpbXBsZU5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuW2ldKSkge1xuICAgICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH0gLy8gMi4gV2hlbiB0aGUgY2hpbGRyZW4gY29udGFpbnMgY29uc3RydWN0cyB0aGF0IGFsd2F5cyBnZW5lcmF0ZWQgbmVzdGVkIEFycmF5cyxcbiAgICAvLyBlLmcuIDx0ZW1wbGF0ZT4sIDxzbG90Piwgdi1mb3IsIG9yIHdoZW4gdGhlIGNoaWxkcmVuIGlzIHByb3ZpZGVkIGJ5IHVzZXJcbiAgICAvLyB3aXRoIGhhbmQtd3JpdHRlbiByZW5kZXIgZnVuY3Rpb25zIC8gSlNYLiBJbiBzdWNoIGNhc2VzIGEgZnVsbCBub3JtYWxpemF0aW9uXG4gICAgLy8gaXMgbmVlZGVkIHRvIGNhdGVyIHRvIGFsbCBwb3NzaWJsZSB0eXBlcyBvZiBjaGlsZHJlbiB2YWx1ZXMuXG5cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gaXNQcmltaXRpdmUoY2hpbGRyZW4pID8gW2NyZWF0ZVRleHRWTm9kZShjaGlsZHJlbildIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBub3JtYWxpemVBcnJheUNoaWxkcmVuKGNoaWxkcmVuKSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1RleHROb2RlKG5vZGUpIHtcbiAgICAgIHJldHVybiBpc0RlZihub2RlKSAmJiBpc0RlZihub2RlLnRleHQpICYmIGlzRmFsc2Uobm9kZS5pc0NvbW1lbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4oY2hpbGRyZW4sIG5lc3RlZEluZGV4KSB7XG4gICAgICB2YXIgcmVzID0gW107XG4gICAgICB2YXIgaSwgYywgbGFzdEluZGV4LCBsYXN0O1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmIChpc1VuZGVmKGMpIHx8IHR5cGVvZiBjID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RJbmRleCA9IHJlcy5sZW5ndGggLSAxO1xuICAgICAgICBsYXN0ID0gcmVzW2xhc3RJbmRleF07IC8vICBuZXN0ZWRcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjKSkge1xuICAgICAgICAgIGlmIChjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGMgPSBub3JtYWxpemVBcnJheUNoaWxkcmVuKGMsIChuZXN0ZWRJbmRleCB8fCAnJykgKyBcIl9cIiArIGkpOyAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG5cbiAgICAgICAgICAgIGlmIChpc1RleHROb2RlKGNbMF0pICYmIGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgY1swXS50ZXh0KTtcbiAgICAgICAgICAgICAgYy5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXMucHVzaC5hcHBseShyZXMsIGMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZShjKSkge1xuICAgICAgICAgIGlmIChpc1RleHROb2RlKGxhc3QpKSB7XG4gICAgICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgICAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgU1NSIGh5ZHJhdGlvbiBiZWNhdXNlIHRleHQgbm9kZXMgYXJlXG4gICAgICAgICAgICAvLyBlc3NlbnRpYWxseSBtZXJnZWQgd2hlbiByZW5kZXJlZCB0byBIVE1MIHN0cmluZ3NcbiAgICAgICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIGMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYyAhPT0gJycpIHtcbiAgICAgICAgICAgIC8vIGNvbnZlcnQgcHJpbWl0aXZlIHRvIHZub2RlXG4gICAgICAgICAgICByZXMucHVzaChjcmVhdGVUZXh0Vk5vZGUoYykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNUZXh0Tm9kZShjKSAmJiBpc1RleHROb2RlKGxhc3QpKSB7XG4gICAgICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyBjLnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkZWZhdWx0IGtleSBmb3IgbmVzdGVkIGFycmF5IGNoaWxkcmVuIChsaWtlbHkgZ2VuZXJhdGVkIGJ5IHYtZm9yKVxuICAgICAgICAgICAgaWYgKGlzVHJ1ZShjaGlsZHJlbi5faXNWTGlzdCkgJiYgaXNEZWYoYy50YWcpICYmIGlzVW5kZWYoYy5rZXkpICYmIGlzRGVmKG5lc3RlZEluZGV4KSkge1xuICAgICAgICAgICAgICBjLmtleSA9IFwiX192bGlzdFwiICsgbmVzdGVkSW5kZXggKyBcIl9cIiArIGkgKyBcIl9fXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcy5wdXNoKGMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICAvKiAgKi9cblxuXG4gICAgZnVuY3Rpb24gaW5pdFByb3ZpZGUodm0pIHtcbiAgICAgIHZhciBwcm92aWRlID0gdm0uJG9wdGlvbnMucHJvdmlkZTtcblxuICAgICAgaWYgKHByb3ZpZGUpIHtcbiAgICAgICAgdm0uX3Byb3ZpZGVkID0gdHlwZW9mIHByb3ZpZGUgPT09ICdmdW5jdGlvbicgPyBwcm92aWRlLmNhbGwodm0pIDogcHJvdmlkZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0SW5qZWN0aW9ucyh2bSkge1xuICAgICAgdmFyIHJlc3VsdCA9IHJlc29sdmVJbmplY3Qodm0uJG9wdGlvbnMuaW5qZWN0LCB2bSk7XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgICAgICAgT2JqZWN0LmtleXMocmVzdWx0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwga2V5LCByZXN1bHRba2V5XSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB3YXJuKFwiQXZvaWQgbXV0YXRpbmcgYW4gaW5qZWN0ZWQgdmFsdWUgZGlyZWN0bHkgc2luY2UgdGhlIGNoYW5nZXMgd2lsbCBiZSBcIiArIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHByb3ZpZGVkIGNvbXBvbmVudCByZS1yZW5kZXJzLiBcIiArIFwiaW5qZWN0aW9uIGJlaW5nIG11dGF0ZWQ6IFxcXCJcIiArIGtleSArIFwiXFxcIlwiLCB2bSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge31cbiAgICAgICAgfSk7XG4gICAgICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlSW5qZWN0KGluamVjdCwgdm0pIHtcbiAgICAgIGlmIChpbmplY3QpIHtcbiAgICAgICAgLy8gaW5qZWN0IGlzIDphbnkgYmVjYXVzZSBmbG93IGlzIG5vdCBzbWFydCBlbm91Z2ggdG8gZmlndXJlIG91dCBjYWNoZWRcbiAgICAgICAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBrZXlzID0gaGFzU3ltYm9sID8gUmVmbGVjdC5vd25LZXlzKGluamVjdCkgOiBPYmplY3Qua2V5cyhpbmplY3QpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldOyAvLyAjNjU3NCBpbiBjYXNlIHRoZSBpbmplY3Qgb2JqZWN0IGlzIG9ic2VydmVkLi4uXG5cbiAgICAgICAgICBpZiAoa2V5ID09PSAnX19vYl9fJykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHByb3ZpZGVLZXkgPSBpbmplY3Rba2V5XS5mcm9tO1xuICAgICAgICAgIHZhciBzb3VyY2UgPSB2bTtcblxuICAgICAgICAgIHdoaWxlIChzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UuX3Byb3ZpZGVkICYmIGhhc093bihzb3VyY2UuX3Byb3ZpZGVkLCBwcm92aWRlS2V5KSkge1xuICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHNvdXJjZS5fcHJvdmlkZWRbcHJvdmlkZUtleV07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzb3VyY2UgPSBzb3VyY2UuJHBhcmVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBpbmplY3Rba2V5XSkge1xuICAgICAgICAgICAgICB2YXIgcHJvdmlkZURlZmF1bHQgPSBpbmplY3Rba2V5XVtcImRlZmF1bHRcIl07XG4gICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdHlwZW9mIHByb3ZpZGVEZWZhdWx0ID09PSAnZnVuY3Rpb24nID8gcHJvdmlkZURlZmF1bHQuY2FsbCh2bSkgOiBwcm92aWRlRGVmYXVsdDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICB3YXJuKFwiSW5qZWN0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIiBub3QgZm91bmRcIiwgdm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8qICAqL1xuXG4gICAgLyoqXG4gICAgICogUnVudGltZSBoZWxwZXIgZm9yIHJlc29sdmluZyByYXcgY2hpbGRyZW4gVk5vZGVzIGludG8gYSBzbG90IG9iamVjdC5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVNsb3RzKGNoaWxkcmVuLCBjb250ZXh0KSB7XG4gICAgICBpZiAoIWNoaWxkcmVuIHx8ICFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuXG4gICAgICB2YXIgc2xvdHMgPSB7fTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgIHZhciBkYXRhID0gY2hpbGQuZGF0YTsgLy8gcmVtb3ZlIHNsb3QgYXR0cmlidXRlIGlmIHRoZSBub2RlIGlzIHJlc29sdmVkIGFzIGEgVnVlIHNsb3Qgbm9kZVxuXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy5zbG90KSB7XG4gICAgICAgICAgZGVsZXRlIGRhdGEuYXR0cnMuc2xvdDtcbiAgICAgICAgfSAvLyBuYW1lZCBzbG90cyBzaG91bGQgb25seSBiZSByZXNwZWN0ZWQgaWYgdGhlIHZub2RlIHdhcyByZW5kZXJlZCBpbiB0aGVcbiAgICAgICAgLy8gc2FtZSBjb250ZXh0LlxuXG5cbiAgICAgICAgaWYgKChjaGlsZC5jb250ZXh0ID09PSBjb250ZXh0IHx8IGNoaWxkLmZuQ29udGV4dCA9PT0gY29udGV4dCkgJiYgZGF0YSAmJiBkYXRhLnNsb3QgIT0gbnVsbCkge1xuICAgICAgICAgIHZhciBuYW1lID0gZGF0YS5zbG90O1xuICAgICAgICAgIHZhciBzbG90ID0gc2xvdHNbbmFtZV0gfHwgKHNsb3RzW25hbWVdID0gW10pO1xuXG4gICAgICAgICAgaWYgKGNoaWxkLnRhZyA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICAgICAgc2xvdC5wdXNoLmFwcGx5KHNsb3QsIGNoaWxkLmNoaWxkcmVuIHx8IFtdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2xvdC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZml4ZWQgYnkgeHh4eHh4IOS4tOaXtiBoYWNrIOaOiSB1bmktYXBwIOS4reeahOW8guatpSBuYW1lIHNsb3QgcGFnZVxuICAgICAgICAgIGlmIChjaGlsZC5hc3luY01ldGEgJiYgY2hpbGQuYXN5bmNNZXRhLmRhdGEgJiYgY2hpbGQuYXN5bmNNZXRhLmRhdGEuc2xvdCA9PT0gJ3BhZ2UnKSB7XG4gICAgICAgICAgICAoc2xvdHNbJ3BhZ2UnXSB8fCAoc2xvdHNbJ3BhZ2UnXSA9IFtdKSkucHVzaChjaGlsZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIChzbG90c1tcImRlZmF1bHRcIl0gfHwgKHNsb3RzW1wiZGVmYXVsdFwiXSA9IFtdKSkucHVzaChjaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIGlnbm9yZSBzbG90cyB0aGF0IGNvbnRhaW5zIG9ubHkgd2hpdGVzcGFjZVxuXG5cbiAgICAgIGZvciAodmFyIG5hbWUkMSBpbiBzbG90cykge1xuICAgICAgICBpZiAoc2xvdHNbbmFtZSQxXS5ldmVyeShpc1doaXRlc3BhY2UpKSB7XG4gICAgICAgICAgZGVsZXRlIHNsb3RzW25hbWUkMV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNsb3RzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzV2hpdGVzcGFjZShub2RlKSB7XG4gICAgICByZXR1cm4gbm9kZS5pc0NvbW1lbnQgJiYgIW5vZGUuYXN5bmNGYWN0b3J5IHx8IG5vZGUudGV4dCA9PT0gJyAnO1xuICAgIH1cbiAgICAvKiAgKi9cblxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplU2NvcGVkU2xvdHMoc2xvdHMsIG5vcm1hbFNsb3RzLCBwcmV2U2xvdHMpIHtcbiAgICAgIHZhciByZXM7XG4gICAgICB2YXIgaGFzTm9ybWFsU2xvdHMgPSBPYmplY3Qua2V5cyhub3JtYWxTbG90cykubGVuZ3RoID4gMDtcbiAgICAgIHZhciBpc1N0YWJsZSA9IHNsb3RzID8gISFzbG90cy4kc3RhYmxlIDogIWhhc05vcm1hbFNsb3RzO1xuICAgICAgdmFyIGtleSA9IHNsb3RzICYmIHNsb3RzLiRrZXk7XG5cbiAgICAgIGlmICghc2xvdHMpIHtcbiAgICAgICAgcmVzID0ge307XG4gICAgICB9IGVsc2UgaWYgKHNsb3RzLl9ub3JtYWxpemVkKSB7XG4gICAgICAgIC8vIGZhc3QgcGF0aCAxOiBjaGlsZCBjb21wb25lbnQgcmUtcmVuZGVyIG9ubHksIHBhcmVudCBkaWQgbm90IGNoYW5nZVxuICAgICAgICByZXR1cm4gc2xvdHMuX25vcm1hbGl6ZWQ7XG4gICAgICB9IGVsc2UgaWYgKGlzU3RhYmxlICYmIHByZXZTbG90cyAmJiBwcmV2U2xvdHMgIT09IGVtcHR5T2JqZWN0ICYmIGtleSA9PT0gcHJldlNsb3RzLiRrZXkgJiYgIWhhc05vcm1hbFNsb3RzICYmICFwcmV2U2xvdHMuJGhhc05vcm1hbCkge1xuICAgICAgICAvLyBmYXN0IHBhdGggMjogc3RhYmxlIHNjb3BlZCBzbG90cyB3LyBubyBub3JtYWwgc2xvdHMgdG8gcHJveHksXG4gICAgICAgIC8vIG9ubHkgbmVlZCB0byBub3JtYWxpemUgb25jZVxuICAgICAgICByZXR1cm4gcHJldlNsb3RzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzID0ge307XG5cbiAgICAgICAgZm9yICh2YXIga2V5JDEgaW4gc2xvdHMpIHtcbiAgICAgICAgICBpZiAoc2xvdHNba2V5JDFdICYmIGtleSQxWzBdICE9PSAnJCcpIHtcbiAgICAgICAgICAgIHJlc1trZXkkMV0gPSBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXkkMSwgc2xvdHNba2V5JDFdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gZXhwb3NlIG5vcm1hbCBzbG90cyBvbiBzY29wZWRTbG90c1xuXG5cbiAgICAgIGZvciAodmFyIGtleSQyIGluIG5vcm1hbFNsb3RzKSB7XG4gICAgICAgIGlmICghKGtleSQyIGluIHJlcykpIHtcbiAgICAgICAgICByZXNba2V5JDJdID0gcHJveHlOb3JtYWxTbG90KG5vcm1hbFNsb3RzLCBrZXkkMik7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gYXZvcmlheiBzZWVtcyB0byBtb2NrIGEgbm9uLWV4dGVuc2libGUgJHNjb3BlZFNsb3RzIG9iamVjdFxuICAgICAgLy8gYW5kIHdoZW4gdGhhdCBpcyBwYXNzZWQgZG93biB0aGlzIHdvdWxkIGNhdXNlIGFuIGVycm9yXG5cblxuICAgICAgaWYgKHNsb3RzICYmIE9iamVjdC5pc0V4dGVuc2libGUoc2xvdHMpKSB7XG4gICAgICAgIHNsb3RzLl9ub3JtYWxpemVkID0gcmVzO1xuICAgICAgfVxuXG4gICAgICBkZWYocmVzLCAnJHN0YWJsZScsIGlzU3RhYmxlKTtcbiAgICAgIGRlZihyZXMsICcka2V5Jywga2V5KTtcbiAgICAgIGRlZihyZXMsICckaGFzTm9ybWFsJywgaGFzTm9ybWFsU2xvdHMpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXksIGZuKSB7XG4gICAgICB2YXIgbm9ybWFsaXplZCA9IGZ1bmN0aW9uIG5vcm1hbGl6ZWQoKSB7XG4gICAgICAgIHZhciByZXMgPSBhcmd1bWVudHMubGVuZ3RoID8gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IGZuKHt9KTtcbiAgICAgICAgcmVzID0gcmVzICYmICgwLCBfdHlwZW9mMltcImRlZmF1bHRcIl0pKHJlcykgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHJlcykgPyBbcmVzXSAvLyBzaW5nbGUgdm5vZGVcbiAgICAgICAgOiBub3JtYWxpemVDaGlsZHJlbihyZXMpO1xuICAgICAgICByZXR1cm4gcmVzICYmIChyZXMubGVuZ3RoID09PSAwIHx8IHJlcy5sZW5ndGggPT09IDEgJiYgcmVzWzBdLmlzQ29tbWVudCAvLyAjOTY1OFxuICAgICAgICApID8gdW5kZWZpbmVkIDogcmVzO1xuICAgICAgfTsgLy8gdGhpcyBpcyBhIHNsb3QgdXNpbmcgdGhlIG5ldyB2LXNsb3Qgc3ludGF4IHdpdGhvdXQgc2NvcGUuIGFsdGhvdWdoIGl0IGlzXG4gICAgICAvLyBjb21waWxlZCBhcyBhIHNjb3BlZCBzbG90LCByZW5kZXIgZm4gdXNlcnMgd291bGQgZXhwZWN0IGl0IHRvIGJlIHByZXNlbnRcbiAgICAgIC8vIG9uIHRoaXMuJHNsb3RzIGJlY2F1c2UgdGhlIHVzYWdlIGlzIHNlbWFudGljYWxseSBhIG5vcm1hbCBzbG90LlxuXG5cbiAgICAgIGlmIChmbi5wcm94eSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobm9ybWFsU2xvdHMsIGtleSwge1xuICAgICAgICAgIGdldDogbm9ybWFsaXplZCxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJveHlOb3JtYWxTbG90KHNsb3RzLCBrZXkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzbG90c1trZXldO1xuICAgICAgfTtcbiAgICB9XG4gICAgLyogICovXG5cbiAgICAvKipcbiAgICAgKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHYtZm9yIGxpc3RzLlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiByZW5kZXJMaXN0KHZhbCwgcmVuZGVyKSB7XG4gICAgICB2YXIgcmV0LCBpLCBsLCBrZXlzLCBrZXk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0ID0gbmV3IEFycmF5KHZhbC5sZW5ndGgpO1xuXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSB2YWwubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgcmV0W2ldID0gcmVuZGVyKHZhbFtpXSwgaSwgaSwgaSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldCA9IG5ldyBBcnJheSh2YWwpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWw7IGkrKykge1xuICAgICAgICAgIHJldFtpXSA9IHJlbmRlcihpICsgMSwgaSwgaSwgaSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICAgICAgaWYgKGhhc1N5bWJvbCAmJiB2YWxbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgICAgIHJldCA9IFtdO1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IHZhbFtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcblxuICAgICAgICAgIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHJlbmRlcihyZXN1bHQudmFsdWUsIHJldC5sZW5ndGgsIGkrKywgaSkpOyAvLyBmaXhlZCBieSB4eHh4eHhcblxuICAgICAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICAgICAgICByZXQgPSBuZXcgQXJyYXkoa2V5cy5sZW5ndGgpO1xuXG4gICAgICAgICAgZm9yIChpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgcmV0W2ldID0gcmVuZGVyKHZhbFtrZXldLCBrZXksIGksIGkpOyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0RlZihyZXQpKSB7XG4gICAgICAgIHJldCA9IFtdO1xuICAgICAgfVxuXG4gICAgICByZXQuX2lzVkxpc3QgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyogICovXG5cbiAgICAvKipcbiAgICAgKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIDxzbG90PlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiByZW5kZXJTbG90KG5hbWUsIGZhbGxiYWNrLCBwcm9wcywgYmluZE9iamVjdCkge1xuICAgICAgdmFyIHNjb3BlZFNsb3RGbiA9IHRoaXMuJHNjb3BlZFNsb3RzW25hbWVdO1xuICAgICAgdmFyIG5vZGVzO1xuXG4gICAgICBpZiAoc2NvcGVkU2xvdEZuKSB7XG4gICAgICAgIC8vIHNjb3BlZCBzbG90XG4gICAgICAgIHByb3BzID0gcHJvcHMgfHwge307XG5cbiAgICAgICAgaWYgKGJpbmRPYmplY3QpIHtcbiAgICAgICAgICBpZiAodHJ1ZSAmJiAhaXNPYmplY3QoYmluZE9iamVjdCkpIHtcbiAgICAgICAgICAgIHdhcm4oJ3Nsb3Qgdi1iaW5kIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3QnLCB0aGlzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwcm9wcyA9IGV4dGVuZChleHRlbmQoe30sIGJpbmRPYmplY3QpLCBwcm9wcyk7XG4gICAgICAgIH0gLy8gZml4ZWQgYnkgeHh4eHh4IGFwcC1wbHVzIHNjb3BlZFNsb3RcblxuXG4gICAgICAgIG5vZGVzID0gc2NvcGVkU2xvdEZuKHByb3BzLCB0aGlzLCBwcm9wcy5faSkgfHwgZmFsbGJhY2s7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlcyA9IHRoaXMuJHNsb3RzW25hbWVdIHx8IGZhbGxiYWNrO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFyZ2V0ID0gcHJvcHMgJiYgcHJvcHMuc2xvdDtcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnLCB7XG4gICAgICAgICAgc2xvdDogdGFyZ2V0XG4gICAgICAgIH0sIG5vZGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBub2RlcztcbiAgICAgIH1cbiAgICB9XG4gICAgLyogICovXG5cbiAgICAvKipcbiAgICAgKiBSdW50aW1lIGhlbHBlciBmb3IgcmVzb2x2aW5nIGZpbHRlcnNcbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZUZpbHRlcihpZCkge1xuICAgICAgcmV0dXJuIHJlc29sdmVBc3NldCh0aGlzLiRvcHRpb25zLCAnZmlsdGVycycsIGlkLCB0cnVlKSB8fCBpZGVudGl0eTtcbiAgICB9XG4gICAgLyogICovXG5cblxuICAgIGZ1bmN0aW9uIGlzS2V5Tm90TWF0Y2goZXhwZWN0LCBhY3R1YWwpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4cGVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGV4cGVjdC5pbmRleE9mKGFjdHVhbCkgPT09IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGV4cGVjdCAhPT0gYWN0dWFsO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSdW50aW1lIGhlbHBlciBmb3IgY2hlY2tpbmcga2V5Q29kZXMgZnJvbSBjb25maWcuXG4gICAgICogZXhwb3NlZCBhcyBWdWUucHJvdG90eXBlLl9rXG4gICAgICogcGFzc2luZyBpbiBldmVudEtleU5hbWUgYXMgbGFzdCBhcmd1bWVudCBzZXBhcmF0ZWx5IGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrS2V5Q29kZXMoZXZlbnRLZXlDb2RlLCBrZXksIGJ1aWx0SW5LZXlDb2RlLCBldmVudEtleU5hbWUsIGJ1aWx0SW5LZXlOYW1lKSB7XG4gICAgICB2YXIgbWFwcGVkS2V5Q29kZSA9IGNvbmZpZy5rZXlDb2Rlc1trZXldIHx8IGJ1aWx0SW5LZXlDb2RlO1xuXG4gICAgICBpZiAoYnVpbHRJbktleU5hbWUgJiYgZXZlbnRLZXlOYW1lICYmICFjb25maWcua2V5Q29kZXNba2V5XSkge1xuICAgICAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChidWlsdEluS2V5TmFtZSwgZXZlbnRLZXlOYW1lKTtcbiAgICAgIH0gZWxzZSBpZiAobWFwcGVkS2V5Q29kZSkge1xuICAgICAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChtYXBwZWRLZXlDb2RlLCBldmVudEtleUNvZGUpO1xuICAgICAgfSBlbHNlIGlmIChldmVudEtleU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGh5cGhlbmF0ZShldmVudEtleU5hbWUpICE9PSBrZXk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qICAqL1xuXG4gICAgLyoqXG4gICAgICogUnVudGltZSBoZWxwZXIgZm9yIG1lcmdpbmcgdi1iaW5kPVwib2JqZWN0XCIgaW50byBhIFZOb2RlJ3MgZGF0YS5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gYmluZE9iamVjdFByb3BzKGRhdGEsIHRhZywgdmFsdWUsIGFzUHJvcCwgaXNTeW5jKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICB0cnVlICYmIHdhcm4oJ3YtYmluZCB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0IG9yIEFycmF5IHZhbHVlJywgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvT2JqZWN0KHZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgaGFzaDtcblxuICAgICAgICAgIHZhciBsb29wID0gZnVuY3Rpb24gbG9vcChrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdjbGFzcycgfHwga2V5ID09PSAnc3R5bGUnIHx8IGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoa2V5KSkge1xuICAgICAgICAgICAgICBoYXNoID0gZGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciB0eXBlID0gZGF0YS5hdHRycyAmJiBkYXRhLmF0dHJzLnR5cGU7XG4gICAgICAgICAgICAgIGhhc2ggPSBhc1Byb3AgfHwgY29uZmlnLm11c3RVc2VQcm9wKHRhZywgdHlwZSwga2V5KSA/IGRhdGEuZG9tUHJvcHMgfHwgKGRhdGEuZG9tUHJvcHMgPSB7fSkgOiBkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY2FtZWxpemVkS2V5ID0gY2FtZWxpemUoa2V5KTtcbiAgICAgICAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG5cbiAgICAgICAgICAgIGlmICghKGNhbWVsaXplZEtleSBpbiBoYXNoKSAmJiAhKGh5cGhlbmF0ZWRLZXkgaW4gaGFzaCkpIHtcbiAgICAgICAgICAgICAgaGFzaFtrZXldID0gdmFsdWVba2V5XTtcblxuICAgICAgICAgICAgICBpZiAoaXNTeW5jKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9uID0gZGF0YS5vbiB8fCAoZGF0YS5vbiA9IHt9KTtcblxuICAgICAgICAgICAgICAgIG9uW1widXBkYXRlOlwiICsga2V5XSA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlW2tleV0gPSAkZXZlbnQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgIGxvb3Aoa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIC8qICAqL1xuXG4gICAgLyoqXG4gICAgICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyBzdGF0aWMgdHJlZXMuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIHJlbmRlclN0YXRpYyhpbmRleCwgaXNJbkZvcikge1xuICAgICAgdmFyIGNhY2hlZCA9IHRoaXMuX3N0YXRpY1RyZWVzIHx8ICh0aGlzLl9zdGF0aWNUcmVlcyA9IFtdKTtcbiAgICAgIHZhciB0cmVlID0gY2FjaGVkW2luZGV4XTsgLy8gaWYgaGFzIGFscmVhZHktcmVuZGVyZWQgc3RhdGljIHRyZWUgYW5kIG5vdCBpbnNpZGUgdi1mb3IsXG4gICAgICAvLyB3ZSBjYW4gcmV1c2UgdGhlIHNhbWUgdHJlZS5cblxuICAgICAgaWYgKHRyZWUgJiYgIWlzSW5Gb3IpIHtcbiAgICAgICAgcmV0dXJuIHRyZWU7XG4gICAgICB9IC8vIG90aGVyd2lzZSwgcmVuZGVyIGEgZnJlc2ggdHJlZS5cblxuXG4gICAgICB0cmVlID0gY2FjaGVkW2luZGV4XSA9IHRoaXMuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zW2luZGV4XS5jYWxsKHRoaXMuX3JlbmRlclByb3h5LCBudWxsLCB0aGlzIC8vIGZvciByZW5kZXIgZm5zIGdlbmVyYXRlZCBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgdGVtcGxhdGVzXG4gICAgICApO1xuICAgICAgbWFya1N0YXRpYyh0cmVlLCBcIl9fc3RhdGljX19cIiArIGluZGV4LCBmYWxzZSk7XG4gICAgICByZXR1cm4gdHJlZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUnVudGltZSBoZWxwZXIgZm9yIHYtb25jZS5cbiAgICAgKiBFZmZlY3RpdmVseSBpdCBtZWFucyBtYXJraW5nIHRoZSBub2RlIGFzIHN0YXRpYyB3aXRoIGEgdW5pcXVlIGtleS5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gbWFya09uY2UodHJlZSwgaW5kZXgsIGtleSkge1xuICAgICAgbWFya1N0YXRpYyh0cmVlLCBcIl9fb25jZV9fXCIgKyBpbmRleCArIChrZXkgPyBcIl9cIiArIGtleSA6IFwiXCIpLCB0cnVlKTtcbiAgICAgIHJldHVybiB0cmVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcmtTdGF0aWModHJlZSwga2V5LCBpc09uY2UpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRyZWUpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0cmVlW2ldICYmIHR5cGVvZiB0cmVlW2ldICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbWFya1N0YXRpY05vZGUodHJlZVtpXSwga2V5ICsgXCJfXCIgKyBpLCBpc09uY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFya1N0YXRpY05vZGUodHJlZSwga2V5LCBpc09uY2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcmtTdGF0aWNOb2RlKG5vZGUsIGtleSwgaXNPbmNlKSB7XG4gICAgICBub2RlLmlzU3RhdGljID0gdHJ1ZTtcbiAgICAgIG5vZGUua2V5ID0ga2V5O1xuICAgICAgbm9kZS5pc09uY2UgPSBpc09uY2U7XG4gICAgfVxuICAgIC8qICAqL1xuXG5cbiAgICBmdW5jdGlvbiBiaW5kT2JqZWN0TGlzdGVuZXJzKGRhdGEsIHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgIHRydWUgJiYgd2Fybigndi1vbiB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0IHZhbHVlJywgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG9uID0gZGF0YS5vbiA9IGRhdGEub24gPyBleHRlbmQoe30sIGRhdGEub24pIDoge307XG5cbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBleGlzdGluZyA9IG9uW2tleV07XG4gICAgICAgICAgICB2YXIgb3VycyA9IHZhbHVlW2tleV07XG4gICAgICAgICAgICBvbltrZXldID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIG91cnMpIDogb3VycztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIC8qICAqL1xuXG5cbiAgICBmdW5jdGlvbiByZXNvbHZlU2NvcGVkU2xvdHMoZm5zLCAvLyBzZWUgZmxvdy92bm9kZVxuICAgIHJlcywgLy8gdGhlIGZvbGxvd2luZyBhcmUgYWRkZWQgaW4gMi42XG4gICAgaGFzRHluYW1pY0tleXMsIGNvbnRlbnRIYXNoS2V5KSB7XG4gICAgICByZXMgPSByZXMgfHwge1xuICAgICAgICAkc3RhYmxlOiAhaGFzRHluYW1pY0tleXNcbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzbG90ID0gZm5zW2ldO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNsb3QpKSB7XG4gICAgICAgICAgcmVzb2x2ZVNjb3BlZFNsb3RzKHNsb3QsIHJlcywgaGFzRHluYW1pY0tleXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHNsb3QpIHtcbiAgICAgICAgICAvLyBtYXJrZXIgZm9yIHJldmVyc2UgcHJveHlpbmcgdi1zbG90IHdpdGhvdXQgc2NvcGUgb24gdGhpcy4kc2xvdHNcbiAgICAgICAgICBpZiAoc2xvdC5wcm94eSkge1xuICAgICAgICAgICAgc2xvdC5mbi5wcm94eSA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzW3Nsb3Qua2V5XSA9IHNsb3QuZm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRlbnRIYXNoS2V5KSB7XG4gICAgICAgIHJlcy4ka2V5ID0gY29udGVudEhhc2hLZXk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIC8qICAqL1xuXG5cbiAgICBmdW5jdGlvbiBiaW5kRHluYW1pY0tleXMoYmFzZU9iaiwgdmFsdWVzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICB2YXIga2V5ID0gdmFsdWVzW2ldO1xuXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkpIHtcbiAgICAgICAgICBiYXNlT2JqW3ZhbHVlc1tpXV0gPSB2YWx1ZXNbaSArIDFdO1xuICAgICAgICB9IGVsc2UgaWYgKHRydWUgJiYga2V5ICE9PSAnJyAmJiBrZXkgIT09IG51bGwpIHtcbiAgICAgICAgICAvLyBudWxsIGlzIGEgc3BlY2lhbCB2YWx1ZSBmb3IgZXhwbGljaXRseSByZW1vdmluZyBhIGJpbmRpbmdcbiAgICAgICAgICB3YXJuKFwiSW52YWxpZCB2YWx1ZSBmb3IgZHluYW1pYyBkaXJlY3RpdmUgYXJndW1lbnQgKGV4cGVjdGVkIHN0cmluZyBvciBudWxsKTogXCIgKyBrZXksIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiYXNlT2JqO1xuICAgIH0gLy8gaGVscGVyIHRvIGR5bmFtaWNhbGx5IGFwcGVuZCBtb2RpZmllciBydW50aW1lIG1hcmtlcnMgdG8gZXZlbnQgbmFtZXMuXG4gICAgLy8gZW5zdXJlIG9ubHkgYXBwZW5kIHdoZW4gdmFsdWUgaXMgYWxyZWFkeSBzdHJpbmcsIG90aGVyd2lzZSBpdCB3aWxsIGJlIGNhc3RcbiAgICAvLyB0byBzdHJpbmcgYW5kIGNhdXNlIHRoZSB0eXBlIGNoZWNrIHRvIG1pc3MuXG5cblxuICAgIGZ1bmN0aW9uIHByZXBlbmRNb2RpZmllcih2YWx1ZSwgc3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHN5bWJvbCArIHZhbHVlIDogdmFsdWU7XG4gICAgfVxuICAgIC8qICAqL1xuXG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVuZGVySGVscGVycyh0YXJnZXQpIHtcbiAgICAgIHRhcmdldC5fbyA9IG1hcmtPbmNlO1xuICAgICAgdGFyZ2V0Ll9uID0gdG9OdW1iZXI7XG4gICAgICB0YXJnZXQuX3MgPSB0b1N0cmluZztcbiAgICAgIHRhcmdldC5fbCA9IHJlbmRlckxpc3Q7XG4gICAgICB0YXJnZXQuX3QgPSByZW5kZXJTbG90O1xuICAgICAgdGFyZ2V0Ll9xID0gbG9vc2VFcXVhbDtcbiAgICAgIHRhcmdldC5faSA9IGxvb3NlSW5kZXhPZjtcbiAgICAgIHRhcmdldC5fbSA9IHJlbmRlclN0YXRpYztcbiAgICAgIHRhcmdldC5fZiA9IHJlc29sdmVGaWx0ZXI7XG4gICAgICB0YXJnZXQuX2sgPSBjaGVja0tleUNvZGVzO1xuICAgICAgdGFyZ2V0Ll9iID0gYmluZE9iamVjdFByb3BzO1xuICAgICAgdGFyZ2V0Ll92ID0gY3JlYXRlVGV4dFZOb2RlO1xuICAgICAgdGFyZ2V0Ll9lID0gY3JlYXRlRW1wdHlWTm9kZTtcbiAgICAgIHRhcmdldC5fdSA9IHJlc29sdmVTY29wZWRTbG90cztcbiAgICAgIHRhcmdldC5fZyA9IGJpbmRPYmplY3RMaXN0ZW5lcnM7XG4gICAgICB0YXJnZXQuX2QgPSBiaW5kRHluYW1pY0tleXM7XG4gICAgICB0YXJnZXQuX3AgPSBwcmVwZW5kTW9kaWZpZXI7XG4gICAgfVxuICAgIC8qICAqL1xuXG5cbiAgICBmdW5jdGlvbiBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dChkYXRhLCBwcm9wcywgY2hpbGRyZW4sIHBhcmVudCwgQ3Rvcikge1xuICAgICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9uczsgLy8gZW5zdXJlIHRoZSBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGluIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xuICAgICAgLy8gZ2V0cyBhIHVuaXF1ZSBjb250ZXh0IC0gdGhpcyBpcyBuZWNlc3NhcnkgZm9yIGNvcnJlY3QgbmFtZWQgc2xvdCBjaGVja1xuXG4gICAgICB2YXIgY29udGV4dFZtO1xuXG4gICAgICBpZiAoaGFzT3duKHBhcmVudCwgJ191aWQnKSkge1xuICAgICAgICBjb250ZXh0Vm0gPSBPYmplY3QuY3JlYXRlKHBhcmVudCk7IC8vICRmbG93LWRpc2FibGUtbGluZVxuXG4gICAgICAgIGNvbnRleHRWbS5fb3JpZ2luYWwgPSBwYXJlbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGUgY29udGV4dCB2bSBwYXNzZWQgaW4gaXMgYSBmdW5jdGlvbmFsIGNvbnRleHQgYXMgd2VsbC5cbiAgICAgICAgLy8gaW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGFyZSBhYmxlIHRvIGdldCBhIGhvbGQgdG8gdGhlXG4gICAgICAgIC8vIHJlYWwgY29udGV4dCBpbnN0YW5jZS5cbiAgICAgICAgY29udGV4dFZtID0gcGFyZW50OyAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcblxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQuX29yaWdpbmFsO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNDb21waWxlZCA9IGlzVHJ1ZShvcHRpb25zLl9jb21waWxlZCk7XG4gICAgICB2YXIgbmVlZE5vcm1hbGl6YXRpb24gPSAhaXNDb21waWxlZDtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gZGF0YS5vbiB8fCBlbXB0eU9iamVjdDtcbiAgICAgIHRoaXMuaW5qZWN0aW9ucyA9IHJlc29sdmVJbmplY3Qob3B0aW9ucy5pbmplY3QsIHBhcmVudCk7XG5cbiAgICAgIHRoaXMuc2xvdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcyQxLiRzbG90cykge1xuICAgICAgICAgIG5vcm1hbGl6ZVNjb3BlZFNsb3RzKGRhdGEuc2NvcGVkU2xvdHMsIHRoaXMkMS4kc2xvdHMgPSByZXNvbHZlU2xvdHMoY2hpbGRyZW4sIHBhcmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMkMS4kc2xvdHM7XG4gICAgICB9O1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3Njb3BlZFNsb3RzJywge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gbm9ybWFsaXplU2NvcGVkU2xvdHMoZGF0YS5zY29wZWRTbG90cywgdGhpcy5zbG90cygpKTtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIHN1cHBvcnQgZm9yIGNvbXBpbGVkIGZ1bmN0aW9uYWwgdGVtcGxhdGVcblxuICAgICAgaWYgKGlzQ29tcGlsZWQpIHtcbiAgICAgICAgLy8gZXhwb3NpbmcgJG9wdGlvbnMgZm9yIHJlbmRlclN0YXRpYygpXG4gICAgICAgIHRoaXMuJG9wdGlvbnMgPSBvcHRpb25zOyAvLyBwcmUtcmVzb2x2ZSBzbG90cyBmb3IgcmVuZGVyU2xvdCgpXG5cbiAgICAgICAgdGhpcy4kc2xvdHMgPSB0aGlzLnNsb3RzKCk7XG4gICAgICAgIHRoaXMuJHNjb3BlZFNsb3RzID0gbm9ybWFsaXplU2NvcGVkU2xvdHMoZGF0YS5zY29wZWRTbG90cywgdGhpcy4kc2xvdHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5fc2NvcGVJZCkge1xuICAgICAgICB0aGlzLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICAgICAgICB2YXIgdm5vZGUgPSBjcmVhdGVFbGVtZW50KGNvbnRleHRWbSwgYSwgYiwgYywgZCwgbmVlZE5vcm1hbGl6YXRpb24pO1xuXG4gICAgICAgICAgaWYgKHZub2RlICYmICFBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICAgICAgdm5vZGUuZm5TY29wZUlkID0gb3B0aW9ucy5fc2NvcGVJZDtcbiAgICAgICAgICAgIHZub2RlLmZuQ29udGV4dCA9IHBhcmVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdm5vZGU7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChjb250ZXh0Vm0sIGEsIGIsIGMsIGQsIG5lZWROb3JtYWxpemF0aW9uKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnN0YWxsUmVuZGVySGVscGVycyhGdW5jdGlvbmFsUmVuZGVyQ29udGV4dC5wcm90b3R5cGUpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudChDdG9yLCBwcm9wc0RhdGEsIGRhdGEsIGNvbnRleHRWbSwgY2hpbGRyZW4pIHtcbiAgICAgIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuICAgICAgdmFyIHByb3BzID0ge307XG4gICAgICB2YXIgcHJvcE9wdGlvbnMgPSBvcHRpb25zLnByb3BzO1xuXG4gICAgICBpZiAoaXNEZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xuICAgICAgICAgIHByb3BzW2tleV0gPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wT3B0aW9ucywgcHJvcHNEYXRhIHx8IGVtcHR5T2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzRGVmKGRhdGEuYXR0cnMpKSB7XG4gICAgICAgICAgbWVyZ2VQcm9wcyhwcm9wcywgZGF0YS5hdHRycyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNEZWYoZGF0YS5wcm9wcykpIHtcbiAgICAgICAgICBtZXJnZVByb3BzKHByb3BzLCBkYXRhLnByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgcmVuZGVyQ29udGV4dCA9IG5ldyBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dChkYXRhLCBwcm9wcywgY2hpbGRyZW4sIGNvbnRleHRWbSwgQ3Rvcik7XG4gICAgICB2YXIgdm5vZGUgPSBvcHRpb25zLnJlbmRlci5jYWxsKG51bGwsIHJlbmRlckNvbnRleHQuX2MsIHJlbmRlckNvbnRleHQpO1xuXG4gICAgICBpZiAodm5vZGUgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgICAgICByZXR1cm4gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCh2bm9kZSwgZGF0YSwgcmVuZGVyQ29udGV4dC5wYXJlbnQsIG9wdGlvbnMsIHJlbmRlckNvbnRleHQpO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB2YXIgdm5vZGVzID0gbm9ybWFsaXplQ2hpbGRyZW4odm5vZGUpIHx8IFtdO1xuICAgICAgICB2YXIgcmVzID0gbmV3IEFycmF5KHZub2Rlcy5sZW5ndGgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcmVzW2ldID0gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCh2bm9kZXNbaV0sIGRhdGEsIHJlbmRlckNvbnRleHQucGFyZW50LCBvcHRpb25zLCByZW5kZXJDb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCh2bm9kZSwgZGF0YSwgY29udGV4dFZtLCBvcHRpb25zLCByZW5kZXJDb250ZXh0KSB7XG4gICAgICAvLyAjNzgxNyBjbG9uZSBub2RlIGJlZm9yZSBzZXR0aW5nIGZuQ29udGV4dCwgb3RoZXJ3aXNlIGlmIHRoZSBub2RlIGlzIHJldXNlZFxuICAgICAgLy8gKGUuZy4gaXQgd2FzIGZyb20gYSBjYWNoZWQgbm9ybWFsIHNsb3QpIHRoZSBmbkNvbnRleHQgY2F1c2VzIG5hbWVkIHNsb3RzXG4gICAgICAvLyB0aGF0IHNob3VsZCBub3QgYmUgbWF0Y2hlZCB0byBtYXRjaC5cbiAgICAgIHZhciBjbG9uZSA9IGNsb25lVk5vZGUodm5vZGUpO1xuICAgICAgY2xvbmUuZm5Db250ZXh0ID0gY29udGV4dFZtO1xuICAgICAgY2xvbmUuZm5PcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgKGNsb25lLmRldnRvb2xzTWV0YSA9IGNsb25lLmRldnRvb2xzTWV0YSB8fCB7fSkucmVuZGVyQ29udGV4dCA9IHJlbmRlckNvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnNsb3QpIHtcbiAgICAgICAgKGNsb25lLmRhdGEgfHwgKGNsb25lLmRhdGEgPSB7fSkpLnNsb3QgPSBkYXRhLnNsb3Q7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXJnZVByb3BzKHRvLCBmcm9tKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgICAgICB0b1tjYW1lbGl6ZShrZXkpXSA9IGZyb21ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogICovXG5cbiAgICAvKiAgKi9cblxuICAgIC8qICAqL1xuXG4gICAgLyogICovXG4gICAgLy8gaW5saW5lIGhvb2tzIHRvIGJlIGludm9rZWQgb24gY29tcG9uZW50IFZOb2RlcyBkdXJpbmcgcGF0Y2hcblxuXG4gICAgdmFyIGNvbXBvbmVudFZOb2RlSG9va3MgPSB7XG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KHZub2RlLCBoeWRyYXRpbmcpIHtcbiAgICAgICAgaWYgKHZub2RlLmNvbXBvbmVudEluc3RhbmNlICYmICF2bm9kZS5jb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQgJiYgdm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICAgICAgICAvLyBrZXB0LWFsaXZlIGNvbXBvbmVudHMsIHRyZWF0IGFzIGEgcGF0Y2hcbiAgICAgICAgICB2YXIgbW91bnRlZE5vZGUgPSB2bm9kZTsgLy8gd29yayBhcm91bmQgZmxvd1xuXG4gICAgICAgICAgY29tcG9uZW50Vk5vZGVIb29rcy5wcmVwYXRjaChtb3VudGVkTm9kZSwgbW91bnRlZE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBjaGlsZCA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZSh2bm9kZSwgYWN0aXZlSW5zdGFuY2UpO1xuICAgICAgICAgIGNoaWxkLiRtb3VudChoeWRyYXRpbmcgPyB2bm9kZS5lbG0gOiB1bmRlZmluZWQsIGh5ZHJhdGluZyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcmVwYXRjaDogZnVuY3Rpb24gcHJlcGF0Y2gob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICAgICAgdmFyIGNoaWxkID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBvbGRWbm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgICAgdXBkYXRlQ2hpbGRDb21wb25lbnQoY2hpbGQsIG9wdGlvbnMucHJvcHNEYXRhLCAvLyB1cGRhdGVkIHByb3BzXG4gICAgICAgIG9wdGlvbnMubGlzdGVuZXJzLCAvLyB1cGRhdGVkIGxpc3RlbmVyc1xuICAgICAgICB2bm9kZSwgLy8gbmV3IHBhcmVudCB2bm9kZVxuICAgICAgICBvcHRpb25zLmNoaWxkcmVuIC8vIG5ldyBjaGlsZHJlblxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0KHZub2RlKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdm5vZGUuY29udGV4dDtcbiAgICAgICAgdmFyIGNvbXBvbmVudEluc3RhbmNlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKCFjb21wb25lbnRJbnN0YW5jZS5faXNNb3VudGVkKSB7XG4gICAgICAgICAgY2FsbEhvb2soY29tcG9uZW50SW5zdGFuY2UsICdvblNlcnZpY2VDcmVhdGVkJyk7XG4gICAgICAgICAgY2FsbEhvb2soY29tcG9uZW50SW5zdGFuY2UsICdvblNlcnZpY2VBdHRhY2hlZCcpO1xuICAgICAgICAgIGNvbXBvbmVudEluc3RhbmNlLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICAgIGNhbGxIb29rKGNvbXBvbmVudEluc3RhbmNlLCAnbW91bnRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZub2RlLmRhdGEua2VlcEFsaXZlKSB7XG4gICAgICAgICAgaWYgKGNvbnRleHQuX2lzTW91bnRlZCkge1xuICAgICAgICAgICAgLy8gdnVlLXJvdXRlciMxMjEyXG4gICAgICAgICAgICAvLyBEdXJpbmcgdXBkYXRlcywgYSBrZXB0LWFsaXZlIGNvbXBvbmVudCdzIGNoaWxkIGNvbXBvbmVudHMgbWF5XG4gICAgICAgICAgICAvLyBjaGFuZ2UsIHNvIGRpcmVjdGx5IHdhbGtpbmcgdGhlIHRyZWUgaGVyZSBtYXkgY2FsbCBhY3RpdmF0ZWQgaG9va3NcbiAgICAgICAgICAgIC8vIG9uIGluY29ycmVjdCBjaGlsZHJlbi4gSW5zdGVhZCB3ZSBwdXNoIHRoZW0gaW50byBhIHF1ZXVlIHdoaWNoIHdpbGxcbiAgICAgICAgICAgIC8vIGJlIHByb2Nlc3NlZCBhZnRlciB0aGUgd2hvbGUgcGF0Y2ggcHJvY2VzcyBlbmRlZC5cbiAgICAgICAgICAgIHF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSwgdHJ1ZVxuICAgICAgICAgICAgLyogZGlyZWN0ICovXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3kodm5vZGUpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudEluc3RhbmNlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKCFjb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICBpZiAoIXZub2RlLmRhdGEua2VlcEFsaXZlKSB7XG4gICAgICAgICAgICBjb21wb25lbnRJbnN0YW5jZS4kZGVzdHJveSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UsIHRydWVcbiAgICAgICAgICAgIC8qIGRpcmVjdCAqL1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBob29rc1RvTWVyZ2UgPSBPYmplY3Qua2V5cyhjb21wb25lbnRWTm9kZUhvb2tzKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChDdG9yLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbiwgdGFnKSB7XG4gICAgICBpZiAoaXNVbmRlZihDdG9yKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBiYXNlQ3RvciA9IGNvbnRleHQuJG9wdGlvbnMuX2Jhc2U7IC8vIHBsYWluIG9wdGlvbnMgb2JqZWN0OiB0dXJuIGl0IGludG8gYSBjb25zdHJ1Y3RvclxuXG4gICAgICBpZiAoaXNPYmplY3QoQ3RvcikpIHtcbiAgICAgICAgQ3RvciA9IGJhc2VDdG9yLmV4dGVuZChDdG9yKTtcbiAgICAgIH0gLy8gaWYgYXQgdGhpcyBzdGFnZSBpdCdzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIGFuIGFzeW5jIGNvbXBvbmVudCBmYWN0b3J5LFxuICAgICAgLy8gcmVqZWN0LlxuXG5cbiAgICAgIGlmICh0eXBlb2YgQ3RvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgIHdhcm4oXCJJbnZhbGlkIENvbXBvbmVudCBkZWZpbml0aW9uOiBcIiArIFN0cmluZyhDdG9yKSwgY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIGFzeW5jIGNvbXBvbmVudFxuXG5cbiAgICAgIHZhciBhc3luY0ZhY3Rvcnk7XG5cbiAgICAgIGlmIChpc1VuZGVmKEN0b3IuY2lkKSkge1xuICAgICAgICBhc3luY0ZhY3RvcnkgPSBDdG9yO1xuICAgICAgICBDdG9yID0gcmVzb2x2ZUFzeW5jQ29tcG9uZW50KGFzeW5jRmFjdG9yeSwgYmFzZUN0b3IpO1xuXG4gICAgICAgIGlmIChDdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyByZXR1cm4gYSBwbGFjZWhvbGRlciBub2RlIGZvciBhc3luYyBjb21wb25lbnQsIHdoaWNoIGlzIHJlbmRlcmVkXG4gICAgICAgICAgLy8gYXMgYSBjb21tZW50IG5vZGUgYnV0IHByZXNlcnZlcyBhbGwgdGhlIHJhdyBpbmZvcm1hdGlvbiBmb3IgdGhlIG5vZGUuXG4gICAgICAgICAgLy8gdGhlIGluZm9ybWF0aW9uIHdpbGwgYmUgdXNlZCBmb3IgYXN5bmMgc2VydmVyLXJlbmRlcmluZyBhbmQgaHlkcmF0aW9uLlxuICAgICAgICAgIHJldHVybiBjcmVhdGVBc3luY1BsYWNlaG9sZGVyKGFzeW5jRmFjdG9yeSwgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4sIHRhZyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGF0YSA9IGRhdGEgfHwge307IC8vIHJlc29sdmUgY29uc3RydWN0b3Igb3B0aW9ucyBpbiBjYXNlIGdsb2JhbCBtaXhpbnMgYXJlIGFwcGxpZWQgYWZ0ZXJcbiAgICAgIC8vIGNvbXBvbmVudCBjb25zdHJ1Y3RvciBjcmVhdGlvblxuXG4gICAgICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKEN0b3IpOyAvLyB0cmFuc2Zvcm0gY29tcG9uZW50IHYtbW9kZWwgZGF0YSBpbnRvIHByb3BzICYgZXZlbnRzXG5cbiAgICAgIGlmIChpc0RlZihkYXRhLm1vZGVsKSkge1xuICAgICAgICB0cmFuc2Zvcm1Nb2RlbChDdG9yLm9wdGlvbnMsIGRhdGEpO1xuICAgICAgfSAvLyBleHRyYWN0IHByb3BzXG5cblxuICAgICAgdmFyIHByb3BzRGF0YSA9IGV4dHJhY3RQcm9wc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3RvciwgdGFnLCBjb250ZXh0KTsgLy8gZml4ZWQgYnkgeHh4eHh4XG4gICAgICAvLyBmdW5jdGlvbmFsIGNvbXBvbmVudFxuXG4gICAgICBpZiAoaXNUcnVlKEN0b3Iub3B0aW9ucy5mdW5jdGlvbmFsKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudChDdG9yLCBwcm9wc0RhdGEsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuKTtcbiAgICAgIH0gLy8gZXh0cmFjdCBsaXN0ZW5lcnMsIHNpbmNlIHRoZXNlIG5lZWRzIHRvIGJlIHRyZWF0ZWQgYXNcbiAgICAgIC8vIGNoaWxkIGNvbXBvbmVudCBsaXN0ZW5lcnMgaW5zdGVhZCBvZiBET00gbGlzdGVuZXJzXG5cblxuICAgICAgdmFyIGxpc3RlbmVycyA9IGRhdGEub247IC8vIHJlcGxhY2Ugd2l0aCBsaXN0ZW5lcnMgd2l0aCAubmF0aXZlIG1vZGlmaWVyXG4gICAgICAvLyBzbyBpdCBnZXRzIHByb2Nlc3NlZCBkdXJpbmcgcGFyZW50IGNvbXBvbmVudCBwYXRjaC5cblxuICAgICAgZGF0YS5vbiA9IGRhdGEubmF0aXZlT247XG5cbiAgICAgIGlmIChpc1RydWUoQ3Rvci5vcHRpb25zW1wiYWJzdHJhY3RcIl0pKSB7XG4gICAgICAgIC8vIGFic3RyYWN0IGNvbXBvbmVudHMgZG8gbm90IGtlZXAgYW55dGhpbmdcbiAgICAgICAgLy8gb3RoZXIgdGhhbiBwcm9wcyAmIGxpc3RlbmVycyAmIHNsb3RcbiAgICAgICAgLy8gd29yayBhcm91bmQgZmxvd1xuICAgICAgICB2YXIgc2xvdCA9IGRhdGEuc2xvdDtcbiAgICAgICAgZGF0YSA9IHt9O1xuXG4gICAgICAgIGlmIChzbG90KSB7XG4gICAgICAgICAgZGF0YS5zbG90ID0gc2xvdDtcbiAgICAgICAgfVxuICAgICAgfSAvLyBpbnN0YWxsIGNvbXBvbmVudCBtYW5hZ2VtZW50IGhvb2tzIG9udG8gdGhlIHBsYWNlaG9sZGVyIG5vZGVcblxuXG4gICAgICBpbnN0YWxsQ29tcG9uZW50SG9va3MoZGF0YSk7IC8vIHJldHVybiBhIHBsYWNlaG9sZGVyIHZub2RlXG5cbiAgICAgIHZhciBuYW1lID0gQ3Rvci5vcHRpb25zLm5hbWUgfHwgdGFnO1xuICAgICAgdmFyIHZub2RlID0gbmV3IFZOb2RlKFwidnVlLWNvbXBvbmVudC1cIiArIEN0b3IuY2lkICsgKG5hbWUgPyBcIi1cIiArIG5hbWUgOiAnJyksIGRhdGEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHQsIHtcbiAgICAgICAgQ3RvcjogQ3RvcixcbiAgICAgICAgcHJvcHNEYXRhOiBwcm9wc0RhdGEsXG4gICAgICAgIGxpc3RlbmVyczogbGlzdGVuZXJzLFxuICAgICAgICB0YWc6IHRhZyxcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICB9LCBhc3luY0ZhY3RvcnkpO1xuICAgICAgcmV0dXJuIHZub2RlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUodm5vZGUsIC8vIHdlIGtub3cgaXQncyBNb3VudGVkQ29tcG9uZW50Vk5vZGUgYnV0IGZsb3cgZG9lc24ndFxuICAgIHBhcmVudCAvLyBhY3RpdmVJbnN0YW5jZSBpbiBsaWZlY3ljbGUgc3RhdGVcbiAgICApIHtcbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBfaXNDb21wb25lbnQ6IHRydWUsXG4gICAgICAgIF9wYXJlbnRWbm9kZTogdm5vZGUsXG4gICAgICAgIHBhcmVudDogcGFyZW50XG4gICAgICB9OyAvLyBjaGVjayBpbmxpbmUtdGVtcGxhdGUgcmVuZGVyIGZ1bmN0aW9uc1xuXG4gICAgICB2YXIgaW5saW5lVGVtcGxhdGUgPSB2bm9kZS5kYXRhLmlubGluZVRlbXBsYXRlO1xuXG4gICAgICBpZiAoaXNEZWYoaW5saW5lVGVtcGxhdGUpKSB7XG4gICAgICAgIG9wdGlvbnMucmVuZGVyID0gaW5saW5lVGVtcGxhdGUucmVuZGVyO1xuICAgICAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGlubGluZVRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyB2bm9kZS5jb21wb25lbnRPcHRpb25zLkN0b3Iob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbENvbXBvbmVudEhvb2tzKGRhdGEpIHtcbiAgICAgIHZhciBob29rcyA9IGRhdGEuaG9vayB8fCAoZGF0YS5ob29rID0ge30pO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzVG9NZXJnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0gaG9va3NUb01lcmdlW2ldO1xuICAgICAgICB2YXIgZXhpc3RpbmcgPSBob29rc1trZXldO1xuICAgICAgICB2YXIgdG9NZXJnZSA9IGNvbXBvbmVudFZOb2RlSG9va3Nba2V5XTtcblxuICAgICAgICBpZiAoZXhpc3RpbmcgIT09IHRvTWVyZ2UgJiYgIShleGlzdGluZyAmJiBleGlzdGluZy5fbWVyZ2VkKSkge1xuICAgICAgICAgIGhvb2tzW2tleV0gPSBleGlzdGluZyA/IG1lcmdlSG9vayQxKHRvTWVyZ2UsIGV4aXN0aW5nKSA6IHRvTWVyZ2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXJnZUhvb2skMShmMSwgZjIpIHtcbiAgICAgIHZhciBtZXJnZWQgPSBmdW5jdGlvbiBtZXJnZWQoYSwgYikge1xuICAgICAgICAvLyBmbG93IGNvbXBsYWlucyBhYm91dCBleHRyYSBhcmdzIHdoaWNoIGlzIHdoeSB3ZSB1c2UgYW55XG4gICAgICAgIGYxKGEsIGIpO1xuICAgICAgICBmMihhLCBiKTtcbiAgICAgIH07XG5cbiAgICAgIG1lcmdlZC5fbWVyZ2VkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgfSAvLyB0cmFuc2Zvcm0gY29tcG9uZW50IHYtbW9kZWwgaW5mbyAodmFsdWUgYW5kIGNhbGxiYWNrKSBpbnRvXG4gICAgLy8gcHJvcCBhbmQgZXZlbnQgaGFuZGxlciByZXNwZWN0aXZlbHkuXG5cblxuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybU1vZGVsKG9wdGlvbnMsIGRhdGEpIHtcbiAgICAgIHZhciBwcm9wID0gb3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLnByb3AgfHwgJ3ZhbHVlJztcbiAgICAgIHZhciBldmVudCA9IG9wdGlvbnMubW9kZWwgJiYgb3B0aW9ucy5tb2RlbC5ldmVudCB8fCAnaW5wdXQnO1xuICAgICAgKGRhdGEuYXR0cnMgfHwgKGRhdGEuYXR0cnMgPSB7fSkpW3Byb3BdID0gZGF0YS5tb2RlbC52YWx1ZTtcbiAgICAgIHZhciBvbiA9IGRhdGEub24gfHwgKGRhdGEub24gPSB7fSk7XG4gICAgICB2YXIgZXhpc3RpbmcgPSBvbltldmVudF07XG4gICAgICB2YXIgY2FsbGJhY2sgPSBkYXRhLm1vZGVsLmNhbGxiYWNrO1xuXG4gICAgICBpZiAoaXNEZWYoZXhpc3RpbmcpKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4aXN0aW5nKSA/IGV4aXN0aW5nLmluZGV4T2YoY2FsbGJhY2spID09PSAtMSA6IGV4aXN0aW5nICE9PSBjYWxsYmFjaykge1xuICAgICAgICAgIG9uW2V2ZW50XSA9IFtjYWxsYmFja10uY29uY2F0KGV4aXN0aW5nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25bZXZlbnRdID0gY2FsbGJhY2s7XG4gICAgICB9XG4gICAgfVxuICAgIC8qICAqL1xuXG5cbiAgICB2YXIgU0lNUExFX05PUk1BTElaRSA9IDE7XG4gICAgdmFyIEFMV0FZU19OT1JNQUxJWkUgPSAyOyAvLyB3cmFwcGVyIGZ1bmN0aW9uIGZvciBwcm92aWRpbmcgYSBtb3JlIGZsZXhpYmxlIGludGVyZmFjZVxuICAgIC8vIHdpdGhvdXQgZ2V0dGluZyB5ZWxsZWQgYXQgYnkgZmxvd1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChjb250ZXh0LCB0YWcsIGRhdGEsIGNoaWxkcmVuLCBub3JtYWxpemF0aW9uVHlwZSwgYWx3YXlzTm9ybWFsaXplKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSB8fCBpc1ByaW1pdGl2ZShkYXRhKSkge1xuICAgICAgICBub3JtYWxpemF0aW9uVHlwZSA9IGNoaWxkcmVuO1xuICAgICAgICBjaGlsZHJlbiA9IGRhdGE7XG4gICAgICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1RydWUoYWx3YXlzTm9ybWFsaXplKSkge1xuICAgICAgICBub3JtYWxpemF0aW9uVHlwZSA9IEFMV0FZU19OT1JNQUxJWkU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfY3JlYXRlRWxlbWVudChjb250ZXh0LCB0YWcsIGRhdGEsIGNoaWxkcmVuLCBub3JtYWxpemF0aW9uVHlwZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnQoY29udGV4dCwgdGFnLCBkYXRhLCBjaGlsZHJlbiwgbm9ybWFsaXphdGlvblR5cGUpIHtcbiAgICAgIGlmIChpc0RlZihkYXRhKSAmJiBpc0RlZihkYXRhLl9fb2JfXykpIHtcbiAgICAgICAgdHJ1ZSAmJiB3YXJuKFwiQXZvaWQgdXNpbmcgb2JzZXJ2ZWQgZGF0YSBvYmplY3QgYXMgdm5vZGUgZGF0YTogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSArIFwiXFxuXCIgKyAnQWx3YXlzIGNyZWF0ZSBmcmVzaCB2bm9kZSBkYXRhIG9iamVjdHMgaW4gZWFjaCByZW5kZXIhJywgY29udGV4dCk7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbXB0eVZOb2RlKCk7XG4gICAgICB9IC8vIG9iamVjdCBzeW50YXggaW4gdi1iaW5kXG5cblxuICAgICAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEuaXMpKSB7XG4gICAgICAgIHRhZyA9IGRhdGEuaXM7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGFnKSB7XG4gICAgICAgIC8vIGluIGNhc2Ugb2YgY29tcG9uZW50IDppcyBzZXQgdG8gZmFsc3kgdmFsdWVcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgICAgIH0gLy8gd2FybiBhZ2FpbnN0IG5vbi1wcmltaXRpdmUga2V5XG5cblxuICAgICAgaWYgKHRydWUgJiYgaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5rZXkpICYmICFpc1ByaW1pdGl2ZShkYXRhLmtleSkpIHtcbiAgICAgICAge1xuICAgICAgICAgIHdhcm4oJ0F2b2lkIHVzaW5nIG5vbi1wcmltaXRpdmUgdmFsdWUgYXMga2V5LCAnICsgJ3VzZSBzdHJpbmcvbnVtYmVyIHZhbHVlIGluc3RlYWQuJywgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gc3VwcG9ydCBzaW5nbGUgZnVuY3Rpb24gY2hpbGRyZW4gYXMgZGVmYXVsdCBzY29wZWQgc2xvdFxuXG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJiB0eXBlb2YgY2hpbGRyZW5bMF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGF0YSA9IGRhdGEgfHwge307XG4gICAgICAgIGRhdGEuc2NvcGVkU2xvdHMgPSB7XG4gICAgICAgICAgXCJkZWZhdWx0XCI6IGNoaWxkcmVuWzBdXG4gICAgICAgIH07XG4gICAgICAgIGNoaWxkcmVuLmxlbmd0aCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gQUxXQVlTX05PUk1BTElaRSkge1xuICAgICAgICBjaGlsZHJlbiA9IG5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKTtcbiAgICAgIH0gZWxzZSBpZiAobm9ybWFsaXphdGlvblR5cGUgPT09IFNJTVBMRV9OT1JNQUxJWkUpIHtcbiAgICAgICAgY2hpbGRyZW4gPSBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gICAgICB9XG5cbiAgICAgIHZhciB2bm9kZSwgbnM7XG5cbiAgICAgIGlmICh0eXBlb2YgdGFnID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgQ3RvcjtcbiAgICAgICAgbnMgPSBjb250ZXh0LiR2bm9kZSAmJiBjb250ZXh0LiR2bm9kZS5ucyB8fCBjb25maWcuZ2V0VGFnTmFtZXNwYWNlKHRhZyk7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5pc1Jlc2VydmVkVGFnKHRhZykpIHtcbiAgICAgICAgICAvLyBwbGF0Zm9ybSBidWlsdC1pbiBlbGVtZW50c1xuICAgICAgICAgIGlmICh0cnVlICYmIGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEubmF0aXZlT24pKSB7XG4gICAgICAgICAgICB3YXJuKFwiVGhlIC5uYXRpdmUgbW9kaWZpZXIgZm9yIHYtb24gaXMgb25seSB2YWxpZCBvbiBjb21wb25lbnRzIGJ1dCBpdCB3YXMgdXNlZCBvbiA8XCIgKyB0YWcgKyBcIj4uXCIsIGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZub2RlID0gbmV3IFZOb2RlKGNvbmZpZy5wYXJzZVBsYXRmb3JtVGFnTmFtZSh0YWcpLCBkYXRhLCBjaGlsZHJlbiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2UgaWYgKCghZGF0YSB8fCAhZGF0YS5wcmUpICYmIGlzRGVmKEN0b3IgPSByZXNvbHZlQXNzZXQoY29udGV4dC4kb3B0aW9ucywgJ2NvbXBvbmVudHMnLCB0YWcpKSkge1xuICAgICAgICAgIC8vIGNvbXBvbmVudFxuICAgICAgICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KEN0b3IsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuLCB0YWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHVua25vd24gb3IgdW5saXN0ZWQgbmFtZXNwYWNlZCBlbGVtZW50c1xuICAgICAgICAgIC8vIGNoZWNrIGF0IHJ1bnRpbWUgYmVjYXVzZSBpdCBtYXkgZ2V0IGFzc2lnbmVkIGEgbmFtZXNwYWNlIHdoZW4gaXRzXG4gICAgICAgICAgLy8gcGFyZW50IG5vcm1hbGl6ZXMgY2hpbGRyZW5cbiAgICAgICAgICB2bm9kZSA9IG5ldyBWTm9kZSh0YWcsIGRhdGEsIGNoaWxkcmVuLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRpcmVjdCBjb21wb25lbnQgb3B0aW9ucyAvIGNvbnN0cnVjdG9yXG4gICAgICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KHRhZywgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIHZub2RlO1xuICAgICAgfSBlbHNlIGlmIChpc0RlZih2bm9kZSkpIHtcbiAgICAgICAgaWYgKGlzRGVmKG5zKSkge1xuICAgICAgICAgIGFwcGx5TlModm5vZGUsIG5zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgICAgIHJlZ2lzdGVyRGVlcEJpbmRpbmdzKGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseU5TKHZub2RlLCBucywgZm9yY2UpIHtcbiAgICAgIHZub2RlLm5zID0gbnM7XG5cbiAgICAgIGlmICh2bm9kZS50YWcgPT09ICdmb3JlaWduT2JqZWN0Jykge1xuICAgICAgICAvLyB1c2UgZGVmYXVsdCBuYW1lc3BhY2UgaW5zaWRlIGZvcmVpZ25PYmplY3RcbiAgICAgICAgbnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGZvcmNlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGVmKHZub2RlLmNoaWxkcmVuKSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIHZhciBjaGlsZCA9IHZub2RlLmNoaWxkcmVuW2ldO1xuXG4gICAgICAgICAgaWYgKGlzRGVmKGNoaWxkLnRhZykgJiYgKGlzVW5kZWYoY2hpbGQubnMpIHx8IGlzVHJ1ZShmb3JjZSkgJiYgY2hpbGQudGFnICE9PSAnc3ZnJykpIHtcbiAgICAgICAgICAgIGFwcGx5TlMoY2hpbGQsIG5zLCBmb3JjZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyByZWYgIzUzMThcbiAgICAvLyBuZWNlc3NhcnkgdG8gZW5zdXJlIHBhcmVudCByZS1yZW5kZXIgd2hlbiBkZWVwIGJpbmRpbmdzIGxpa2UgOnN0eWxlIGFuZFxuICAgIC8vIDpjbGFzcyBhcmUgdXNlZCBvbiBzbG90IG5vZGVzXG5cblxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRGVlcEJpbmRpbmdzKGRhdGEpIHtcbiAgICAgIGlmIChpc09iamVjdChkYXRhLnN0eWxlKSkge1xuICAgICAgICB0cmF2ZXJzZShkYXRhLnN0eWxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzT2JqZWN0KGRhdGFbXCJjbGFzc1wiXSkpIHtcbiAgICAgICAgdHJhdmVyc2UoZGF0YVtcImNsYXNzXCJdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogICovXG5cblxuICAgIGZ1bmN0aW9uIGluaXRSZW5kZXIodm0pIHtcbiAgICAgIHZtLl92bm9kZSA9IG51bGw7IC8vIHRoZSByb290IG9mIHRoZSBjaGlsZCB0cmVlXG5cbiAgICAgIHZtLl9zdGF0aWNUcmVlcyA9IG51bGw7IC8vIHYtb25jZSBjYWNoZWQgdHJlZXNcblxuICAgICAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcbiAgICAgIHZhciBwYXJlbnRWbm9kZSA9IHZtLiR2bm9kZSA9IG9wdGlvbnMuX3BhcmVudFZub2RlOyAvLyB0aGUgcGxhY2Vob2xkZXIgbm9kZSBpbiBwYXJlbnQgdHJlZVxuXG4gICAgICB2YXIgcmVuZGVyQ29udGV4dCA9IHBhcmVudFZub2RlICYmIHBhcmVudFZub2RlLmNvbnRleHQ7XG4gICAgICB2bS4kc2xvdHMgPSByZXNvbHZlU2xvdHMob3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4sIHJlbmRlckNvbnRleHQpO1xuICAgICAgdm0uJHNjb3BlZFNsb3RzID0gZW1wdHlPYmplY3Q7IC8vIGJpbmQgdGhlIGNyZWF0ZUVsZW1lbnQgZm4gdG8gdGhpcyBpbnN0YW5jZVxuICAgICAgLy8gc28gdGhhdCB3ZSBnZXQgcHJvcGVyIHJlbmRlciBjb250ZXh0IGluc2lkZSBpdC5cbiAgICAgIC8vIGFyZ3Mgb3JkZXI6IHRhZywgZGF0YSwgY2hpbGRyZW4sIG5vcm1hbGl6YXRpb25UeXBlLCBhbHdheXNOb3JtYWxpemVcbiAgICAgIC8vIGludGVybmFsIHZlcnNpb24gaXMgdXNlZCBieSByZW5kZXIgZnVuY3Rpb25zIGNvbXBpbGVkIGZyb20gdGVtcGxhdGVzXG5cbiAgICAgIHZtLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodm0sIGEsIGIsIGMsIGQsIGZhbHNlKTtcbiAgICAgIH07IC8vIG5vcm1hbGl6YXRpb24gaXMgYWx3YXlzIGFwcGxpZWQgZm9yIHRoZSBwdWJsaWMgdmVyc2lvbiwgdXNlZCBpblxuICAgICAgLy8gdXNlci13cml0dGVuIHJlbmRlciBmdW5jdGlvbnMuXG5cblxuICAgICAgdm0uJGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh2bSwgYSwgYiwgYywgZCwgdHJ1ZSk7XG4gICAgICB9OyAvLyAkYXR0cnMgJiAkbGlzdGVuZXJzIGFyZSBleHBvc2VkIGZvciBlYXNpZXIgSE9DIGNyZWF0aW9uLlxuICAgICAgLy8gdGhleSBuZWVkIHRvIGJlIHJlYWN0aXZlIHNvIHRoYXQgSE9DcyB1c2luZyB0aGVtIGFyZSBhbHdheXMgdXBkYXRlZFxuXG5cbiAgICAgIHZhciBwYXJlbnREYXRhID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuZGF0YTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5cbiAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGF0dHJzJywgcGFyZW50RGF0YSAmJiBwYXJlbnREYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCAmJiB3YXJuKFwiJGF0dHJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XG4gICAgICAgIH0sIHRydWUpO1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRsaXN0ZW5lcnMnLCBvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ICYmIHdhcm4oXCIkbGlzdGVuZXJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XG4gICAgICAgIH0sIHRydWUpO1xuICAgICAgfSBlbHNlIHt9XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNaXhpbihWdWUpIHtcbiAgICAgIC8vIGluc3RhbGwgcnVudGltZSBjb252ZW5pZW5jZSBoZWxwZXJzXG4gICAgICBpbnN0YWxsUmVuZGVySGVscGVycyhWdWUucHJvdG90eXBlKTtcblxuICAgICAgVnVlLnByb3RvdHlwZS4kbmV4dFRpY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIG5leHRUaWNrKGZuLCB0aGlzKTtcbiAgICAgIH07XG5cbiAgICAgIFZ1ZS5wcm90b3R5cGUuX3JlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgdmFyIHJlZiA9IHZtLiRvcHRpb25zO1xuICAgICAgICB2YXIgcmVuZGVyID0gcmVmLnJlbmRlcjtcbiAgICAgICAgdmFyIF9wYXJlbnRWbm9kZSA9IHJlZi5fcGFyZW50Vm5vZGU7XG5cbiAgICAgICAgaWYgKF9wYXJlbnRWbm9kZSkge1xuICAgICAgICAgIHZtLiRzY29wZWRTbG90cyA9IG5vcm1hbGl6ZVNjb3BlZFNsb3RzKF9wYXJlbnRWbm9kZS5kYXRhLnNjb3BlZFNsb3RzLCB2bS4kc2xvdHMsIHZtLiRzY29wZWRTbG90cyk7XG4gICAgICAgIH0gLy8gc2V0IHBhcmVudCB2bm9kZS4gdGhpcyBhbGxvd3MgcmVuZGVyIGZ1bmN0aW9ucyB0byBoYXZlIGFjY2Vzc1xuICAgICAgICAvLyB0byB0aGUgZGF0YSBvbiB0aGUgcGxhY2Vob2xkZXIgbm9kZS5cblxuXG4gICAgICAgIHZtLiR2bm9kZSA9IF9wYXJlbnRWbm9kZTsgLy8gcmVuZGVyIHNlbGZcblxuICAgICAgICB2YXIgdm5vZGU7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGVyZSdzIG5vIG5lZWQgdG8gbWFpbnRhaW4gYSBzdGFjayBiZWNhdXNlIGFsbCByZW5kZXIgZm5zIGFyZSBjYWxsZWRcbiAgICAgICAgICAvLyBzZXBhcmF0ZWx5IGZyb20gb25lIGFub3RoZXIuIE5lc3RlZCBjb21wb25lbnQncyByZW5kZXIgZm5zIGFyZSBjYWxsZWRcbiAgICAgICAgICAvLyB3aGVuIHBhcmVudCBjb21wb25lbnQgaXMgcGF0Y2hlZC5cbiAgICAgICAgICBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgPSB2bTtcbiAgICAgICAgICB2bm9kZSA9IHJlbmRlci5jYWxsKHZtLl9yZW5kZXJQcm94eSwgdm0uJGNyZWF0ZUVsZW1lbnQpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwicmVuZGVyXCIpOyAvLyByZXR1cm4gZXJyb3IgcmVuZGVyIHJlc3VsdCxcbiAgICAgICAgICAvLyBvciBwcmV2aW91cyB2bm9kZSB0byBwcmV2ZW50IHJlbmRlciBlcnJvciBjYXVzaW5nIGJsYW5rIGNvbXBvbmVudFxuXG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblxuICAgICAgICAgIGlmICh0cnVlICYmIHZtLiRvcHRpb25zLnJlbmRlckVycm9yKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2bm9kZSA9IHZtLiRvcHRpb25zLnJlbmRlckVycm9yLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCwgZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcInJlbmRlckVycm9yXCIpO1xuICAgICAgICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IG51bGw7XG4gICAgICAgIH0gLy8gaWYgdGhlIHJldHVybmVkIGFycmF5IGNvbnRhaW5zIG9ubHkgYSBzaW5nbGUgbm9kZSwgYWxsb3cgaXRcblxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSAmJiB2bm9kZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB2bm9kZSA9IHZub2RlWzBdO1xuICAgICAgICB9IC8vIHJldHVybiBlbXB0eSB2bm9kZSBpbiBjYXNlIHRoZSByZW5kZXIgZnVuY3Rpb24gZXJyb3JlZCBvdXRcblxuXG4gICAgICAgIGlmICghKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpKSB7XG4gICAgICAgICAgaWYgKHRydWUgJiYgQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICAgICAgICAgIHdhcm4oJ011bHRpcGxlIHJvb3Qgbm9kZXMgcmV0dXJuZWQgZnJvbSByZW5kZXIgZnVuY3Rpb24uIFJlbmRlciBmdW5jdGlvbiAnICsgJ3Nob3VsZCByZXR1cm4gYSBzaW5nbGUgcm9vdCBub2RlLicsIHZtKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2bm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgICAgICAgfSAvLyBzZXQgcGFyZW50XG5cblxuICAgICAgICB2bm9kZS5wYXJlbnQgPSBfcGFyZW50Vm5vZGU7XG4gICAgICAgIHJldHVybiB2bm9kZTtcbiAgICAgIH07XG4gICAgfVxuICAgIC8qICAqL1xuXG5cbiAgICBmdW5jdGlvbiBlbnN1cmVDdG9yKGNvbXAsIGJhc2UpIHtcbiAgICAgIGlmIChjb21wLl9fZXNNb2R1bGUgfHwgaGFzU3ltYm9sICYmIGNvbXBbU3ltYm9sLnRvU3RyaW5nVGFnXSA9PT0gJ01vZHVsZScpIHtcbiAgICAgICAgY29tcCA9IGNvbXBbXCJkZWZhdWx0XCJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXNPYmplY3QoY29tcCkgPyBiYXNlLmV4dGVuZChjb21wKSA6IGNvbXA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQXN5bmNQbGFjZWhvbGRlcihmYWN0b3J5LCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbiwgdGFnKSB7XG4gICAgICB2YXIgbm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgICAgIG5vZGUuYXN5bmNGYWN0b3J5ID0gZmFjdG9yeTtcbiAgICAgIG5vZGUuYXN5bmNNZXRhID0ge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICAgIHRhZzogdGFnXG4gICAgICB9O1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZUFzeW5jQ29tcG9uZW50KGZhY3RvcnksIGJhc2VDdG9yKSB7XG4gICAgICBpZiAoaXNUcnVlKGZhY3RvcnkuZXJyb3IpICYmIGlzRGVmKGZhY3RvcnkuZXJyb3JDb21wKSkge1xuICAgICAgICByZXR1cm4gZmFjdG9yeS5lcnJvckNvbXA7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0RlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICByZXR1cm4gZmFjdG9yeS5yZXNvbHZlZDtcbiAgICAgIH1cblxuICAgICAgdmFyIG93bmVyID0gY3VycmVudFJlbmRlcmluZ0luc3RhbmNlO1xuXG4gICAgICBpZiAob3duZXIgJiYgaXNEZWYoZmFjdG9yeS5vd25lcnMpICYmIGZhY3Rvcnkub3duZXJzLmluZGV4T2Yob3duZXIpID09PSAtMSkge1xuICAgICAgICAvLyBhbHJlYWR5IHBlbmRpbmdcbiAgICAgICAgZmFjdG9yeS5vd25lcnMucHVzaChvd25lcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1RydWUoZmFjdG9yeS5sb2FkaW5nKSAmJiBpc0RlZihmYWN0b3J5LmxvYWRpbmdDb21wKSkge1xuICAgICAgICByZXR1cm4gZmFjdG9yeS5sb2FkaW5nQ29tcDtcbiAgICAgIH1cblxuICAgICAgaWYgKG93bmVyICYmICFpc0RlZihmYWN0b3J5Lm93bmVycykpIHtcbiAgICAgICAgdmFyIG93bmVycyA9IGZhY3Rvcnkub3duZXJzID0gW293bmVyXTtcbiAgICAgICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgICAgICB2YXIgdGltZXJMb2FkaW5nID0gbnVsbDtcbiAgICAgICAgdmFyIHRpbWVyVGltZW91dCA9IG51bGw7XG4gICAgICAgIG93bmVyLiRvbignaG9vazpkZXN0cm95ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHJlbW92ZShvd25lcnMsIG93bmVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGZvcmNlUmVuZGVyID0gZnVuY3Rpb24gZm9yY2VSZW5kZXIocmVuZGVyQ29tcGxldGVkKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvd25lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBvd25lcnNbaV0uJGZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHJlbmRlckNvbXBsZXRlZCkge1xuICAgICAgICAgICAgb3duZXJzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgICAgIGlmICh0aW1lckxvYWRpbmcgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyTG9hZGluZyk7XG4gICAgICAgICAgICAgIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aW1lclRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyVGltZW91dCk7XG4gICAgICAgICAgICAgIHRpbWVyVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZXNvbHZlID0gb25jZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgLy8gY2FjaGUgcmVzb2x2ZWRcbiAgICAgICAgICBmYWN0b3J5LnJlc29sdmVkID0gZW5zdXJlQ3RvcihyZXMsIGJhc2VDdG9yKTsgLy8gaW52b2tlIGNhbGxiYWNrcyBvbmx5IGlmIHRoaXMgaXMgbm90IGEgc3luY2hyb25vdXMgcmVzb2x2ZVxuICAgICAgICAgIC8vIChhc3luYyByZXNvbHZlcyBhcmUgc2hpbW1lZCBhcyBzeW5jaHJvbm91cyBkdXJpbmcgU1NSKVxuXG4gICAgICAgICAgaWYgKCFzeW5jKSB7XG4gICAgICAgICAgICBmb3JjZVJlbmRlcih0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3duZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlamVjdCA9IG9uY2UoZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgIHRydWUgJiYgd2FybihcIkZhaWxlZCB0byByZXNvbHZlIGFzeW5jIGNvbXBvbmVudDogXCIgKyBTdHJpbmcoZmFjdG9yeSkgKyAocmVhc29uID8gXCJcXG5SZWFzb246IFwiICsgcmVhc29uIDogJycpKTtcblxuICAgICAgICAgIGlmIChpc0RlZihmYWN0b3J5LmVycm9yQ29tcCkpIHtcbiAgICAgICAgICAgIGZhY3RvcnkuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgZm9yY2VSZW5kZXIodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlcyA9IGZhY3RvcnkocmVzb2x2ZSwgcmVqZWN0KTtcblxuICAgICAgICBpZiAoaXNPYmplY3QocmVzKSkge1xuICAgICAgICAgIGlmIChpc1Byb21pc2UocmVzKSkge1xuICAgICAgICAgICAgLy8gKCkgPT4gUHJvbWlzZVxuICAgICAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICAgICAgcmVzLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGlzUHJvbWlzZShyZXMuY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmVzLmNvbXBvbmVudC50aGVuKHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICAgICAgICAgIGlmIChpc0RlZihyZXMuZXJyb3IpKSB7XG4gICAgICAgICAgICAgIGZhY3RvcnkuZXJyb3JDb21wID0gZW5zdXJlQ3RvcihyZXMuZXJyb3IsIGJhc2VDdG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzRGVmKHJlcy5sb2FkaW5nKSkge1xuICAgICAgICAgICAgICBmYWN0b3J5LmxvYWRpbmdDb21wID0gZW5zdXJlQ3RvcihyZXMubG9hZGluZywgYmFzZUN0b3IpO1xuXG4gICAgICAgICAgICAgIGlmIChyZXMuZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBmYWN0b3J5LmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRpbWVyTG9hZGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdGltZXJMb2FkaW5nID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkgJiYgaXNVbmRlZihmYWN0b3J5LmVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICBmYWN0b3J5LmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3JjZVJlbmRlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgcmVzLmRlbGF5IHx8IDIwMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzRGVmKHJlcy50aW1lb3V0KSkge1xuICAgICAgICAgICAgICB0aW1lclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aW1lclRpbWVvdXQgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICAgICAgICAgIHJlamVjdCh0cnVlID8gXCJ0aW1lb3V0IChcIiArIHJlcy50aW1lb3V0ICsgXCJtcylcIiA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCByZXMudGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3luYyA9IGZhbHNlOyAvLyByZXR1cm4gaW4gY2FzZSByZXNvbHZlZCBzeW5jaHJvbm91c2x5XG5cbiAgICAgICAgcmV0dXJuIGZhY3RvcnkubG9hZGluZyA/IGZhY3RvcnkubG9hZGluZ0NvbXAgOiBmYWN0b3J5LnJlc29sdmVkO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiAgKi9cblxuXG4gICAgZnVuY3Rpb24gaXNBc3luY1BsYWNlaG9sZGVyKG5vZGUpIHtcbiAgICAgIHJldHVybiBub2RlLmlzQ29tbWVudCAmJiBub2RlLmFzeW5jRmFjdG9yeTtcbiAgICB9XG4gICAgLyogICovXG5cblxuICAgIGZ1bmN0aW9uIGdldEZpcnN0Q29tcG9uZW50Q2hpbGQoY2hpbGRyZW4pIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGMgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICAgIGlmIChpc0RlZihjKSAmJiAoaXNEZWYoYy5jb21wb25lbnRPcHRpb25zKSB8fCBpc0FzeW5jUGxhY2Vob2xkZXIoYykpKSB7XG4gICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLyogICovXG5cbiAgICAvKiAgKi9cblxuXG4gICAgZnVuY3Rpb24gaW5pdEV2ZW50cyh2bSkge1xuICAgICAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICB2bS5faGFzSG9va0V2ZW50ID0gZmFsc2U7IC8vIGluaXQgcGFyZW50IGF0dGFjaGVkIGV2ZW50c1xuXG4gICAgICB2YXIgbGlzdGVuZXJzID0gdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcblxuICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnModm0sIGxpc3RlbmVycyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldDtcblxuICAgIGZ1bmN0aW9uIGFkZChldmVudCwgZm4pIHtcbiAgICAgIHRhcmdldC4kb24oZXZlbnQsIGZuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmUkMShldmVudCwgZm4pIHtcbiAgICAgIHRhcmdldC4kb2ZmKGV2ZW50LCBmbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlT25jZUhhbmRsZXIoZXZlbnQsIGZuKSB7XG4gICAgICB2YXIgX3RhcmdldCA9IHRhcmdldDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBvbmNlSGFuZGxlcigpIHtcbiAgICAgICAgdmFyIHJlcyA9IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgaWYgKHJlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIF90YXJnZXQuJG9mZihldmVudCwgb25jZUhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyh2bSwgbGlzdGVuZXJzLCBvbGRMaXN0ZW5lcnMpIHtcbiAgICAgIHRhcmdldCA9IHZtO1xuICAgICAgdXBkYXRlTGlzdGVuZXJzKGxpc3RlbmVycywgb2xkTGlzdGVuZXJzIHx8IHt9LCBhZGQsIHJlbW92ZSQxLCBjcmVhdGVPbmNlSGFuZGxlciwgdm0pO1xuICAgICAgdGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV2ZW50c01peGluKFZ1ZSkge1xuICAgICAgdmFyIGhvb2tSRSA9IC9eaG9vazovO1xuXG4gICAgICBWdWUucHJvdG90eXBlLiRvbiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdm0uJG9uKGV2ZW50W2ldLCBmbik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICh2bS5fZXZlbnRzW2V2ZW50XSB8fCAodm0uX2V2ZW50c1tldmVudF0gPSBbXSkpLnB1c2goZm4pOyAvLyBvcHRpbWl6ZSBob29rOmV2ZW50IGNvc3QgYnkgdXNpbmcgYSBib29sZWFuIGZsYWcgbWFya2VkIGF0IHJlZ2lzdHJhdGlvblxuICAgICAgICAgIC8vIGluc3RlYWQgb2YgYSBoYXNoIGxvb2t1cFxuXG4gICAgICAgICAgaWYgKGhvb2tSRS50ZXN0KGV2ZW50KSkge1xuICAgICAgICAgICAgdm0uX2hhc0hvb2tFdmVudCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZtO1xuICAgICAgfTtcblxuICAgICAgVnVlLnByb3RvdHlwZS4kb25jZSA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcblxuICAgICAgICBmdW5jdGlvbiBvbigpIHtcbiAgICAgICAgICB2bS4kb2ZmKGV2ZW50LCBvbik7XG4gICAgICAgICAgZm4uYXBwbHkodm0sIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cblxuICAgICAgICBvbi5mbiA9IGZuO1xuICAgICAgICB2bS4kb24oZXZlbnQsIG9uKTtcbiAgICAgICAgcmV0dXJuIHZtO1xuICAgICAgfTtcblxuICAgICAgVnVlLnByb3RvdHlwZS4kb2ZmID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgICAgICB2YXIgdm0gPSB0aGlzOyAvLyBhbGxcblxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICByZXR1cm4gdm07XG4gICAgICAgIH0gLy8gYXJyYXkgb2YgZXZlbnRzXG5cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgICBmb3IgKHZhciBpJDEgPSAwLCBsID0gZXZlbnQubGVuZ3RoOyBpJDEgPCBsOyBpJDErKykge1xuICAgICAgICAgICAgdm0uJG9mZihldmVudFtpJDFdLCBmbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZtO1xuICAgICAgICB9IC8vIHNwZWNpZmljIGV2ZW50XG5cblxuICAgICAgICB2YXIgY2JzID0gdm0uX2V2ZW50c1tldmVudF07XG5cbiAgICAgICAgaWYgKCFjYnMpIHtcbiAgICAgICAgICByZXR1cm4gdm07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZuKSB7XG4gICAgICAgICAgdm0uX2V2ZW50c1tldmVudF0gPSBudWxsO1xuICAgICAgICAgIHJldHVybiB2bTtcbiAgICAgICAgfSAvLyBzcGVjaWZpYyBoYW5kbGVyXG5cblxuICAgICAgICB2YXIgY2I7XG4gICAgICAgIHZhciBpID0gY2JzLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgY2IgPSBjYnNbaV07XG5cbiAgICAgICAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgICAgICAgY2JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2bTtcbiAgICAgIH07XG5cbiAgICAgIFZ1ZS5wcm90b3R5cGUuJGVtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcblxuICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgIHZhciBsb3dlckNhc2VFdmVudCA9IGV2ZW50LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAobG93ZXJDYXNlRXZlbnQgIT09IGV2ZW50ICYmIHZtLl9ldmVudHNbbG93ZXJDYXNlRXZlbnRdKSB7XG4gICAgICAgICAgICB0aXAoXCJFdmVudCBcXFwiXCIgKyBsb3dlckNhc2VFdmVudCArIFwiXFxcIiBpcyBlbWl0dGVkIGluIGNvbXBvbmVudCBcIiArIGZvcm1hdENvbXBvbmVudE5hbWUodm0pICsgXCIgYnV0IHRoZSBoYW5kbGVyIGlzIHJlZ2lzdGVyZWQgZm9yIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLiBcIiArIFwiTm90ZSB0aGF0IEhUTUwgYXR0cmlidXRlcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZSBhbmQgeW91IGNhbm5vdCB1c2UgXCIgKyBcInYtb24gdG8gbGlzdGVuIHRvIGNhbWVsQ2FzZSBldmVudHMgd2hlbiB1c2luZyBpbi1ET00gdGVtcGxhdGVzLiBcIiArIFwiWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgaHlwaGVuYXRlKGV2ZW50KSArIFwiXFxcIiBpbnN0ZWFkIG9mIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2JzID0gdm0uX2V2ZW50c1tldmVudF07XG5cbiAgICAgICAgaWYgKGNicykge1xuICAgICAgICAgIGNicyA9IGNicy5sZW5ndGggPiAxID8gdG9BcnJheShjYnMpIDogY2JzO1xuICAgICAgICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMsIDEpO1xuICAgICAgICAgIHZhciBpbmZvID0gXCJldmVudCBoYW5kbGVyIGZvciBcXFwiXCIgKyBldmVudCArIFwiXFxcIlwiO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjYnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjYnNbaV0sIHZtLCBhcmdzLCB2bSwgaW5mbyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZtO1xuICAgICAgfTtcbiAgICB9XG4gICAgLyogICovXG5cblxuICAgIHZhciBhY3RpdmVJbnN0YW5jZSA9IG51bGw7XG4gICAgdmFyIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlSW5zdGFuY2Uodm0pIHtcbiAgICAgIHZhciBwcmV2QWN0aXZlSW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZTtcbiAgICAgIGFjdGl2ZUluc3RhbmNlID0gdm07XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBhY3RpdmVJbnN0YW5jZSA9IHByZXZBY3RpdmVJbnN0YW5jZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdExpZmVjeWNsZSh2bSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9uczsgLy8gbG9jYXRlIGZpcnN0IG5vbi1hYnN0cmFjdCBwYXJlbnRcblxuICAgICAgdmFyIHBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuXG4gICAgICBpZiAocGFyZW50ICYmICFvcHRpb25zW1wiYWJzdHJhY3RcIl0pIHtcbiAgICAgICAgd2hpbGUgKHBhcmVudC4kb3B0aW9uc1tcImFic3RyYWN0XCJdICYmIHBhcmVudC4kcGFyZW50KSB7XG4gICAgICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQuJGNoaWxkcmVuLnB1c2godm0pO1xuICAgICAgfVxuXG4gICAgICB2bS4kcGFyZW50ID0gcGFyZW50O1xuICAgICAgdm0uJHJvb3QgPSBwYXJlbnQgPyBwYXJlbnQuJHJvb3QgOiB2bTtcbiAgICAgIHZtLiRjaGlsZHJlbiA9IFtdO1xuICAgICAgdm0uJHJlZnMgPSB7fTtcbiAgICAgIHZtLl93YXRjaGVyID0gbnVsbDtcbiAgICAgIHZtLl9pbmFjdGl2ZSA9IG51bGw7XG4gICAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHZtLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgIHZtLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgICAgdm0uX2lzQmVpbmdEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWZlY3ljbGVNaXhpbihWdWUpIHtcbiAgICAgIFZ1ZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uICh2bm9kZSwgaHlkcmF0aW5nKSB7XG4gICAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICAgIHZhciBwcmV2RWwgPSB2bS4kZWw7XG4gICAgICAgIHZhciBwcmV2Vm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICAgIHZhciByZXN0b3JlQWN0aXZlSW5zdGFuY2UgPSBzZXRBY3RpdmVJbnN0YW5jZSh2bSk7XG4gICAgICAgIHZtLl92bm9kZSA9IHZub2RlOyAvLyBWdWUucHJvdG90eXBlLl9fcGF0Y2hfXyBpcyBpbmplY3RlZCBpbiBlbnRyeSBwb2ludHNcbiAgICAgICAgLy8gYmFzZWQgb24gdGhlIHJlbmRlcmluZyBiYWNrZW5kIHVzZWQuXG5cbiAgICAgICAgaWYgKCFwcmV2Vm5vZGUpIHtcbiAgICAgICAgICAvLyBpbml0aWFsIHJlbmRlclxuICAgICAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyh2bS4kZWwsIHZub2RlLCBoeWRyYXRpbmcsIGZhbHNlXG4gICAgICAgICAgLyogcmVtb3ZlT25seSAqL1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdXBkYXRlc1xuICAgICAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyhwcmV2Vm5vZGUsIHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSgpOyAvLyB1cGRhdGUgX192dWVfXyByZWZlcmVuY2VcblxuICAgICAgICBpZiAocHJldkVsKSB7XG4gICAgICAgICAgcHJldkVsLl9fdnVlX18gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZtLiRlbCkge1xuICAgICAgICAgIHZtLiRlbC5fX3Z1ZV9fID0gdm07XG4gICAgICAgIH0gLy8gaWYgcGFyZW50IGlzIGFuIEhPQywgdXBkYXRlIGl0cyAkZWwgYXMgd2VsbFxuXG5cbiAgICAgICAgaWYgKHZtLiR2bm9kZSAmJiB2bS4kcGFyZW50ICYmIHZtLiR2bm9kZSA9PT0gdm0uJHBhcmVudC5fdm5vZGUpIHtcbiAgICAgICAgICB2bS4kcGFyZW50LiRlbCA9IHZtLiRlbDtcbiAgICAgICAgfSAvLyB1cGRhdGVkIGhvb2sgaXMgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIgdG8gZW5zdXJlIHRoYXQgY2hpbGRyZW4gYXJlXG4gICAgICAgIC8vIHVwZGF0ZWQgaW4gYSBwYXJlbnQncyB1cGRhdGVkIGhvb2suXG5cbiAgICAgIH07XG5cbiAgICAgIFZ1ZS5wcm90b3R5cGUuJGZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgICAgIHZtLl93YXRjaGVyLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBWdWUucHJvdG90eXBlLiRkZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgICAgIGlmICh2bS5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlRGVzdHJveScpO1xuICAgICAgICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IHRydWU7IC8vIHJlbW92ZSBzZWxmIGZyb20gcGFyZW50XG5cbiAgICAgICAgdmFyIHBhcmVudCA9IHZtLiRwYXJlbnQ7XG5cbiAgICAgICAgaWYgKHBhcmVudCAmJiAhcGFyZW50Ll9pc0JlaW5nRGVzdHJveWVkICYmICF2bS4kb3B0aW9uc1tcImFic3RyYWN0XCJdKSB7XG4gICAgICAgICAgcmVtb3ZlKHBhcmVudC4kY2hpbGRyZW4sIHZtKTtcbiAgICAgICAgfSAvLyB0ZWFyZG93biB3YXRjaGVyc1xuXG5cbiAgICAgICAgaWYgKHZtLl93YXRjaGVyKSB7XG4gICAgICAgICAgdm0uX3dhdGNoZXIudGVhcmRvd24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpID0gdm0uX3dhdGNoZXJzLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgdm0uX3dhdGNoZXJzW2ldLnRlYXJkb3duKCk7XG4gICAgICAgIH0gLy8gcmVtb3ZlIHJlZmVyZW5jZSBmcm9tIGRhdGEgb2JcbiAgICAgICAgLy8gZnJvemVuIG9iamVjdCBtYXkgbm90IGhhdmUgb2JzZXJ2ZXIuXG5cblxuICAgICAgICBpZiAodm0uX2RhdGEuX19vYl9fKSB7XG4gICAgICAgICAgdm0uX2RhdGEuX19vYl9fLnZtQ291bnQtLTtcbiAgICAgICAgfSAvLyBjYWxsIHRoZSBsYXN0IGhvb2suLi5cblxuXG4gICAgICAgIHZtLl9pc0Rlc3Ryb3llZCA9IHRydWU7IC8vIGludm9rZSBkZXN0cm95IGhvb2tzIG9uIGN1cnJlbnQgcmVuZGVyZWQgdHJlZVxuXG4gICAgICAgIHZtLl9fcGF0Y2hfXyh2bS5fdm5vZGUsIG51bGwpOyAvLyBmaXJlIGRlc3Ryb3llZCBob29rXG5cblxuICAgICAgICBjYWxsSG9vayh2bSwgJ2Rlc3Ryb3llZCcpOyAvLyB0dXJuIG9mZiBhbGwgaW5zdGFuY2UgbGlzdGVuZXJzLlxuXG4gICAgICAgIHZtLiRvZmYoKTsgLy8gcmVtb3ZlIF9fdnVlX18gcmVmZXJlbmNlXG5cbiAgICAgICAgaWYgKHZtLiRlbCkge1xuICAgICAgICAgIHZtLiRlbC5fX3Z1ZV9fID0gbnVsbDtcbiAgICAgICAgfSAvLyByZWxlYXNlIGNpcmN1bGFyIHJlZmVyZW5jZSAoIzY3NTkpXG5cblxuICAgICAgICBpZiAodm0uJHZub2RlKSB7XG4gICAgICAgICAgdm0uJHZub2RlLnBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2hpbGRDb21wb25lbnQodm0sIHByb3BzRGF0YSwgbGlzdGVuZXJzLCBwYXJlbnRWbm9kZSwgcmVuZGVyQ2hpbGRyZW4pIHtcbiAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IHRydWU7XG4gICAgICB9IC8vIGRldGVybWluZSB3aGV0aGVyIGNvbXBvbmVudCBoYXMgc2xvdCBjaGlsZHJlblxuICAgICAgLy8gd2UgbmVlZCB0byBkbyB0aGlzIGJlZm9yZSBvdmVyd3JpdGluZyAkb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4uXG4gICAgICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgZHluYW1pYyBzY29wZWRTbG90cyAoaGFuZC13cml0dGVuIG9yIGNvbXBpbGVkIGJ1dCB3aXRoXG4gICAgICAvLyBkeW5hbWljIHNsb3QgbmFtZXMpLiBTdGF0aWMgc2NvcGVkIHNsb3RzIGNvbXBpbGVkIGZyb20gdGVtcGxhdGUgaGFzIHRoZVxuICAgICAgLy8gXCIkc3RhYmxlXCIgbWFya2VyLlxuXG5cbiAgICAgIHZhciBuZXdTY29wZWRTbG90cyA9IHBhcmVudFZub2RlLmRhdGEuc2NvcGVkU2xvdHM7XG4gICAgICB2YXIgb2xkU2NvcGVkU2xvdHMgPSB2bS4kc2NvcGVkU2xvdHM7XG4gICAgICB2YXIgaGFzRHluYW1pY1Njb3BlZFNsb3QgPSAhIShuZXdTY29wZWRTbG90cyAmJiAhbmV3U2NvcGVkU2xvdHMuJHN0YWJsZSB8fCBvbGRTY29wZWRTbG90cyAhPT0gZW1wdHlPYmplY3QgJiYgIW9sZFNjb3BlZFNsb3RzLiRzdGFibGUgfHwgbmV3U2NvcGVkU2xvdHMgJiYgdm0uJHNjb3BlZFNsb3RzLiRrZXkgIT09IG5ld1Njb3BlZFNsb3RzLiRrZXkpOyAvLyBBbnkgc3RhdGljIHNsb3QgY2hpbGRyZW4gZnJvbSB0aGUgcGFyZW50IG1heSBoYXZlIGNoYW5nZWQgZHVyaW5nIHBhcmVudCdzXG4gICAgICAvLyB1cGRhdGUuIER5bmFtaWMgc2NvcGVkIHNsb3RzIG1heSBhbHNvIGhhdmUgY2hhbmdlZC4gSW4gc3VjaCBjYXNlcywgYSBmb3JjZWRcbiAgICAgIC8vIHVwZGF0ZSBpcyBuZWNlc3NhcnkgdG8gZW5zdXJlIGNvcnJlY3RuZXNzLlxuXG4gICAgICB2YXIgbmVlZHNGb3JjZVVwZGF0ZSA9ICEhKHJlbmRlckNoaWxkcmVuIHx8IC8vIGhhcyBuZXcgc3RhdGljIHNsb3RzXG4gICAgICB2bS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4gfHwgLy8gaGFzIG9sZCBzdGF0aWMgc2xvdHNcbiAgICAgIGhhc0R5bmFtaWNTY29wZWRTbG90KTtcbiAgICAgIHZtLiRvcHRpb25zLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuICAgICAgdm0uJHZub2RlID0gcGFyZW50Vm5vZGU7IC8vIHVwZGF0ZSB2bSdzIHBsYWNlaG9sZGVyIG5vZGUgd2l0aG91dCByZS1yZW5kZXJcblxuICAgICAgaWYgKHZtLl92bm9kZSkge1xuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdHJlZSdzIHBhcmVudFxuICAgICAgICB2bS5fdm5vZGUucGFyZW50ID0gcGFyZW50Vm5vZGU7XG4gICAgICB9XG5cbiAgICAgIHZtLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiA9IHJlbmRlckNoaWxkcmVuOyAvLyB1cGRhdGUgJGF0dHJzIGFuZCAkbGlzdGVuZXJzIGhhc2hcbiAgICAgIC8vIHRoZXNlIGFyZSBhbHNvIHJlYWN0aXZlIHNvIHRoZXkgbWF5IHRyaWdnZXIgY2hpbGQgdXBkYXRlIGlmIHRoZSBjaGlsZFxuICAgICAgLy8gdXNlZCB0aGVtIGR1cmluZyByZW5kZXJcblxuICAgICAgdm0uJGF0dHJzID0gcGFyZW50Vm5vZGUuZGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdDtcbiAgICAgIHZtLiRsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7IC8vIHVwZGF0ZSBwcm9wc1xuXG4gICAgICBpZiAocHJvcHNEYXRhICYmIHZtLiRvcHRpb25zLnByb3BzKSB7XG4gICAgICAgIHRvZ2dsZU9ic2VydmluZyhmYWxzZSk7XG4gICAgICAgIHZhciBwcm9wcyA9IHZtLl9wcm9wcztcbiAgICAgICAgdmFyIHByb3BLZXlzID0gdm0uJG9wdGlvbnMuX3Byb3BLZXlzIHx8IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIga2V5ID0gcHJvcEtleXNbaV07XG4gICAgICAgICAgdmFyIHByb3BPcHRpb25zID0gdm0uJG9wdGlvbnMucHJvcHM7IC8vIHd0ZiBmbG93P1xuXG4gICAgICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTsgLy8ga2VlcCBhIGNvcHkgb2YgcmF3IHByb3BzRGF0YVxuXG4gICAgICAgIHZtLiRvcHRpb25zLnByb3BzRGF0YSA9IHByb3BzRGF0YTtcbiAgICAgIH0gLy8gZml4ZWQgYnkgeHh4eHh4IHVwZGF0ZSBwcm9wZXJ0aWVzKG1wIHJ1bnRpbWUpXG5cblxuICAgICAgdm0uXyR1cGRhdGVQcm9wZXJ0aWVzICYmIHZtLl8kdXBkYXRlUHJvcGVydGllcyh2bSk7IC8vIHVwZGF0ZSBsaXN0ZW5lcnNcblxuICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0O1xuICAgICAgdmFyIG9sZExpc3RlbmVycyA9IHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XG4gICAgICB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzID0gbGlzdGVuZXJzO1xuICAgICAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMsIG9sZExpc3RlbmVycyk7IC8vIHJlc29sdmUgc2xvdHMgKyBmb3JjZSB1cGRhdGUgaWYgaGFzIGNoaWxkcmVuXG5cbiAgICAgIGlmIChuZWVkc0ZvcmNlVXBkYXRlKSB7XG4gICAgICAgIHZtLiRzbG90cyA9IHJlc29sdmVTbG90cyhyZW5kZXJDaGlsZHJlbiwgcGFyZW50Vm5vZGUuY29udGV4dCk7XG4gICAgICAgIHZtLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJ1ZSkge1xuICAgICAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0luSW5hY3RpdmVUcmVlKHZtKSB7XG4gICAgICB3aGlsZSAodm0gJiYgKHZtID0gdm0uJHBhcmVudCkpIHtcbiAgICAgICAgaWYgKHZtLl9pbmFjdGl2ZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHZtLCBkaXJlY3QpIHtcbiAgICAgIGlmIChkaXJlY3QpIHtcbiAgICAgICAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGlzSW5JbmFjdGl2ZVRyZWUodm0pKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZtLl9kaXJlY3RJbmFjdGl2ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh2bS5faW5hY3RpdmUgfHwgdm0uX2luYWN0aXZlID09PSBudWxsKSB7XG4gICAgICAgIHZtLl9pbmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbEhvb2sodm0sICdhY3RpdmF0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQodm0sIGRpcmVjdCkge1xuICAgICAgaWYgKGRpcmVjdCkge1xuICAgICAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIGlmIChpc0luSW5hY3RpdmVUcmVlKHZtKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXZtLl9pbmFjdGl2ZSkge1xuICAgICAgICB2bS5faW5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHZtLiRjaGlsZHJlbltpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsSG9vayh2bSwgJ2RlYWN0aXZhdGVkJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbEhvb2sodm0sIGhvb2spIHtcbiAgICAgIC8vICM3NTczIGRpc2FibGUgZGVwIGNvbGxlY3Rpb24gd2hlbiBpbnZva2luZyBsaWZlY3ljbGUgaG9va3NcbiAgICAgIHB1c2hUYXJnZXQoKTtcbiAgICAgIHZhciBoYW5kbGVycyA9IHZtLiRvcHRpb25zW2hvb2tdO1xuICAgICAgdmFyIGluZm8gPSBob29rICsgXCIgaG9va1wiO1xuXG4gICAgICBpZiAoaGFuZGxlcnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhoYW5kbGVyc1tpXSwgdm0sIG51bGwsIHZtLCBpbmZvKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodm0uX2hhc0hvb2tFdmVudCkge1xuICAgICAgICB2bS4kZW1pdCgnaG9vazonICsgaG9vayk7XG4gICAgICB9XG5cbiAgICAgIHBvcFRhcmdldCgpO1xuICAgIH1cbiAgICAvKiAgKi9cblxuXG4gICAgdmFyIE1BWF9VUERBVEVfQ09VTlQgPSAxMDA7XG4gICAgdmFyIHF1ZXVlID0gW107XG4gICAgdmFyIGFjdGl2YXRlZENoaWxkcmVuID0gW107XG4gICAgdmFyIGhhcyA9IHt9O1xuICAgIHZhciBjaXJjdWxhciA9IHt9O1xuICAgIHZhciB3YWl0aW5nID0gZmFsc2U7XG4gICAgdmFyIGZsdXNoaW5nID0gZmFsc2U7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgc2NoZWR1bGVyJ3Mgc3RhdGUuXG4gICAgICovXG5cbiAgICBmdW5jdGlvbiByZXNldFNjaGVkdWxlclN0YXRlKCkge1xuICAgICAgaW5kZXggPSBxdWV1ZS5sZW5ndGggPSBhY3RpdmF0ZWRDaGlsZHJlbi5sZW5ndGggPSAwO1xuICAgICAgaGFzID0ge307XG5cbiAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgIGNpcmN1bGFyID0ge307XG4gICAgICB9XG5cbiAgICAgIHdhaXRpbmcgPSBmbHVzaGluZyA9IGZhbHNlO1xuICAgIH0gLy8gQXN5bmMgZWRnZSBjYXNlICM2NTY2IHJlcXVpcmVzIHNhdmluZyB0aGUgdGltZXN0YW1wIHdoZW4gZXZlbnQgbGlzdGVuZXJzIGFyZVxuICAgIC8vIGF0dGFjaGVkLiBIb3dldmVyLCBjYWxsaW5nIHBlcmZvcm1hbmNlLm5vdygpIGhhcyBhIHBlcmYgb3ZlcmhlYWQgZXNwZWNpYWxseVxuICAgIC8vIGlmIHRoZSBwYWdlIGhhcyB0aG91c2FuZHMgb2YgZXZlbnQgbGlzdGVuZXJzLiBJbnN0ZWFkLCB3ZSB0YWtlIGEgdGltZXN0YW1wXG4gICAgLy8gZXZlcnkgdGltZSB0aGUgc2NoZWR1bGVyIGZsdXNoZXMgYW5kIHVzZSB0aGF0IGZvciBhbGwgZXZlbnQgbGlzdGVuZXJzXG4gICAgLy8gYXR0YWNoZWQgZHVyaW5nIHRoYXQgZmx1c2guXG5cblxuICAgIHZhciBjdXJyZW50Rmx1c2hUaW1lc3RhbXAgPSAwOyAvLyBBc3luYyBlZGdlIGNhc2UgZml4IHJlcXVpcmVzIHN0b3JpbmcgYW4gZXZlbnQgbGlzdGVuZXIncyBhdHRhY2ggdGltZXN0YW1wLlxuXG4gICAgdmFyIGdldE5vdyA9IERhdGUubm93OyAvLyBEZXRlcm1pbmUgd2hhdCBldmVudCB0aW1lc3RhbXAgdGhlIGJyb3dzZXIgaXMgdXNpbmcuIEFubm95aW5nbHksIHRoZVxuICAgIC8vIHRpbWVzdGFtcCBjYW4gZWl0aGVyIGJlIGhpLXJlcyAocmVsYXRpdmUgdG8gcGFnZSBsb2FkKSBvciBsb3ctcmVzXG4gICAgLy8gKHJlbGF0aXZlIHRvIFVOSVggZXBvY2gpLCBzbyBpbiBvcmRlciB0byBjb21wYXJlIHRpbWUgd2UgaGF2ZSB0byB1c2UgdGhlXG4gICAgLy8gc2FtZSB0aW1lc3RhbXAgdHlwZSB3aGVuIHNhdmluZyB0aGUgZmx1c2ggdGltZXN0YW1wLlxuICAgIC8vIEFsbCBJRSB2ZXJzaW9ucyB1c2UgbG93LXJlcyBldmVudCB0aW1lc3RhbXBzLCBhbmQgaGF2ZSBwcm9ibGVtYXRpYyBjbG9ja1xuICAgIC8vIGltcGxlbWVudGF0aW9ucyAoIzk2MzIpXG5cbiAgICBpZiAoaW5Ccm93c2VyICYmICFpc0lFKSB7XG4gICAgICB2YXIgcGVyZm9ybWFuY2UgPSB3aW5kb3cucGVyZm9ybWFuY2U7XG5cbiAgICAgIGlmIChwZXJmb3JtYW5jZSAmJiB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nICYmIGdldE5vdygpID4gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50JykudGltZVN0YW1wKSB7XG4gICAgICAgIC8vIGlmIHRoZSBldmVudCB0aW1lc3RhbXAsIGFsdGhvdWdoIGV2YWx1YXRlZCBBRlRFUiB0aGUgRGF0ZS5ub3coKSwgaXNcbiAgICAgICAgLy8gc21hbGxlciB0aGFuIGl0LCBpdCBtZWFucyB0aGUgZXZlbnQgaXMgdXNpbmcgYSBoaS1yZXMgdGltZXN0YW1wLFxuICAgICAgICAvLyBhbmQgd2UgbmVlZCB0byB1c2UgdGhlIGhpLXJlcyB2ZXJzaW9uIGZvciBldmVudCBsaXN0ZW5lciB0aW1lc3RhbXBzIGFzXG4gICAgICAgIC8vIHdlbGwuXG4gICAgICAgIGdldE5vdyA9IGZ1bmN0aW9uIGdldE5vdygpIHtcbiAgICAgICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZsdXNoIGJvdGggcXVldWVzIGFuZCBydW4gdGhlIHdhdGNoZXJzLlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBmbHVzaFNjaGVkdWxlclF1ZXVlKCkge1xuICAgICAgY3VycmVudEZsdXNoVGltZXN0YW1wID0gZ2V0Tm93KCk7XG4gICAgICBmbHVzaGluZyA9IHRydWU7XG4gICAgICB2YXIgd2F0Y2hlciwgaWQ7IC8vIFNvcnQgcXVldWUgYmVmb3JlIGZsdXNoLlxuICAgICAgLy8gVGhpcyBlbnN1cmVzIHRoYXQ6XG4gICAgICAvLyAxLiBDb21wb25lbnRzIGFyZSB1cGRhdGVkIGZyb20gcGFyZW50IHRvIGNoaWxkLiAoYmVjYXVzZSBwYXJlbnQgaXMgYWx3YXlzXG4gICAgICAvLyAgICBjcmVhdGVkIGJlZm9yZSB0aGUgY2hpbGQpXG4gICAgICAvLyAyLiBBIGNvbXBvbmVudCdzIHVzZXIgd2F0Y2hlcnMgYXJlIHJ1biBiZWZvcmUgaXRzIHJlbmRlciB3YXRjaGVyIChiZWNhdXNlXG4gICAgICAvLyAgICB1c2VyIHdhdGNoZXJzIGFyZSBjcmVhdGVkIGJlZm9yZSB0aGUgcmVuZGVyIHdhdGNoZXIpXG4gICAgICAvLyAzLiBJZiBhIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQgZHVyaW5nIGEgcGFyZW50IGNvbXBvbmVudCdzIHdhdGNoZXIgcnVuLFxuICAgICAgLy8gICAgaXRzIHdhdGNoZXJzIGNhbiBiZSBza2lwcGVkLlxuXG4gICAgICBxdWV1ZS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLmlkIC0gYi5pZDtcbiAgICAgIH0pOyAvLyBkbyBub3QgY2FjaGUgbGVuZ3RoIGJlY2F1c2UgbW9yZSB3YXRjaGVycyBtaWdodCBiZSBwdXNoZWRcbiAgICAgIC8vIGFzIHdlIHJ1biBleGlzdGluZyB3YXRjaGVyc1xuXG4gICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBxdWV1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgd2F0Y2hlciA9IHF1ZXVlW2luZGV4XTtcblxuICAgICAgICBpZiAod2F0Y2hlci5iZWZvcmUpIHtcbiAgICAgICAgICB3YXRjaGVyLmJlZm9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWQgPSB3YXRjaGVyLmlkO1xuICAgICAgICBoYXNbaWRdID0gbnVsbDtcbiAgICAgICAgd2F0Y2hlci5ydW4oKTsgLy8gaW4gZGV2IGJ1aWxkLCBjaGVjayBhbmQgc3RvcCBjaXJjdWxhciB1cGRhdGVzLlxuXG4gICAgICAgIGlmICh0cnVlICYmIGhhc1tpZF0gIT0gbnVsbCkge1xuICAgICAgICAgIGNpcmN1bGFyW2lkXSA9IChjaXJjdWxhcltpZF0gfHwgMCkgKyAxO1xuXG4gICAgICAgICAgaWYgKGNpcmN1bGFyW2lkXSA+IE1BWF9VUERBVEVfQ09VTlQpIHtcbiAgICAgICAgICAgIHdhcm4oJ1lvdSBtYXkgaGF2ZSBhbiBpbmZpbml0ZSB1cGRhdGUgbG9vcCAnICsgKHdhdGNoZXIudXNlciA/IFwiaW4gd2F0Y2hlciB3aXRoIGV4cHJlc3Npb24gXFxcIlwiICsgd2F0Y2hlci5leHByZXNzaW9uICsgXCJcXFwiXCIgOiBcImluIGEgY29tcG9uZW50IHJlbmRlciBmdW5jdGlvbi5cIiksIHdhdGNoZXIudm0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIGtlZXAgY29waWVzIG9mIHBvc3QgcXVldWVzIGJlZm9yZSByZXNldHRpbmcgc3RhdGVcblxuXG4gICAgICB2YXIgYWN0aXZhdGVkUXVldWUgPSBhY3RpdmF0ZWRDaGlsZHJlbi5zbGljZSgpO1xuICAgICAgdmFyIHVwZGF0ZWRRdWV1ZSA9IHF1ZXVlLnNsaWNlKCk7XG4gICAgICByZXNldFNjaGVkdWxlclN0YXRlKCk7IC8vIGNhbGwgY29tcG9uZW50IHVwZGF0ZWQgYW5kIGFjdGl2YXRlZCBob29rc1xuXG4gICAgICBjYWxsQWN0aXZhdGVkSG9va3MoYWN0aXZhdGVkUXVldWUpO1xuICAgICAgY2FsbFVwZGF0ZWRIb29rcyh1cGRhdGVkUXVldWUpOyAvLyBkZXZ0b29sIGhvb2tcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cbiAgICAgIGlmIChkZXZ0b29scyAmJiBjb25maWcuZGV2dG9vbHMpIHtcbiAgICAgICAgZGV2dG9vbHMuZW1pdCgnZmx1c2gnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsVXBkYXRlZEhvb2tzKHF1ZXVlKSB7XG4gICAgICB2YXIgaSA9IHF1ZXVlLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICB2YXIgd2F0Y2hlciA9IHF1ZXVlW2ldO1xuICAgICAgICB2YXIgdm0gPSB3YXRjaGVyLnZtO1xuXG4gICAgICAgIGlmICh2bS5fd2F0Y2hlciA9PT0gd2F0Y2hlciAmJiB2bS5faXNNb3VudGVkICYmICF2bS5faXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICBjYWxsSG9vayh2bSwgJ3VwZGF0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBRdWV1ZSBhIGtlcHQtYWxpdmUgY29tcG9uZW50IHRoYXQgd2FzIGFjdGl2YXRlZCBkdXJpbmcgcGF0Y2guXG4gICAgICogVGhlIHF1ZXVlIHdpbGwgYmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSBlbnRpcmUgdHJlZSBoYXMgYmVlbiBwYXRjaGVkLlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBxdWV1ZUFjdGl2YXRlZENvbXBvbmVudCh2bSkge1xuICAgICAgLy8gc2V0dGluZyBfaW5hY3RpdmUgdG8gZmFsc2UgaGVyZSBzbyB0aGF0IGEgcmVuZGVyIGZ1bmN0aW9uIGNhblxuICAgICAgLy8gcmVseSBvbiBjaGVja2luZyB3aGV0aGVyIGl0J3MgaW4gYW4gaW5hY3RpdmUgdHJlZSAoZS5nLiByb3V0ZXItdmlldylcbiAgICAgIHZtLl9pbmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgYWN0aXZhdGVkQ2hpbGRyZW4ucHVzaCh2bSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbEFjdGl2YXRlZEhvb2tzKHF1ZXVlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHF1ZXVlW2ldLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQocXVldWVbaV0sIHRydWVcbiAgICAgICAgLyogdHJ1ZSAqL1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdXNoIGEgd2F0Y2hlciBpbnRvIHRoZSB3YXRjaGVyIHF1ZXVlLlxuICAgICAqIEpvYnMgd2l0aCBkdXBsaWNhdGUgSURzIHdpbGwgYmUgc2tpcHBlZCB1bmxlc3MgaXQnc1xuICAgICAqIHB1c2hlZCB3aGVuIHRoZSBxdWV1ZSBpcyBiZWluZyBmbHVzaGVkLlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBxdWV1ZVdhdGNoZXIod2F0Y2hlcikge1xuICAgICAgdmFyIGlkID0gd2F0Y2hlci5pZDtcblxuICAgICAgaWYgKGhhc1tpZF0gPT0gbnVsbCkge1xuICAgICAgICBoYXNbaWRdID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIWZsdXNoaW5nKSB7XG4gICAgICAgICAgcXVldWUucHVzaCh3YXRjaGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpZiBhbHJlYWR5IGZsdXNoaW5nLCBzcGxpY2UgdGhlIHdhdGNoZXIgYmFzZWQgb24gaXRzIGlkXG4gICAgICAgICAgLy8gaWYgYWxyZWFkeSBwYXN0IGl0cyBpZCwgaXQgd2lsbCBiZSBydW4gbmV4dCBpbW1lZGlhdGVseS5cbiAgICAgICAgICB2YXIgaSA9IHF1ZXVlLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICB3aGlsZSAoaSA+IGluZGV4ICYmIHF1ZXVlW2ldLmlkID4gd2F0Y2hlci5pZCkge1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHF1ZXVlLnNwbGljZShpICsgMSwgMCwgd2F0Y2hlcik7XG4gICAgICAgIH0gLy8gcXVldWUgdGhlIGZsdXNoXG5cblxuICAgICAgICBpZiAoIXdhaXRpbmcpIHtcbiAgICAgICAgICB3YWl0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgIGlmICh0cnVlICYmICFjb25maWcuYXN5bmMpIHtcbiAgICAgICAgICAgIGZsdXNoU2NoZWR1bGVyUXVldWUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0VGljayhmbHVzaFNjaGVkdWxlclF1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKiAgKi9cblxuXG4gICAgdmFyIHVpZCQyID0gMDtcbiAgICAvKipcbiAgICAgKiBBIHdhdGNoZXIgcGFyc2VzIGFuIGV4cHJlc3Npb24sIGNvbGxlY3RzIGRlcGVuZGVuY2llcyxcbiAgICAgKiBhbmQgZmlyZXMgY2FsbGJhY2sgd2hlbiB0aGUgZXhwcmVzc2lvbiB2YWx1ZSBjaGFuZ2VzLlxuICAgICAqIFRoaXMgaXMgdXNlZCBmb3IgYm90aCB0aGUgJHdhdGNoKCkgYXBpIGFuZCBkaXJlY3RpdmVzLlxuICAgICAqL1xuXG4gICAgdmFyIFdhdGNoZXIgPSBmdW5jdGlvbiBXYXRjaGVyKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucywgaXNSZW5kZXJXYXRjaGVyKSB7XG4gICAgICB0aGlzLnZtID0gdm07XG5cbiAgICAgIGlmIChpc1JlbmRlcldhdGNoZXIpIHtcbiAgICAgICAgdm0uX3dhdGNoZXIgPSB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2bS5fd2F0Y2hlcnMucHVzaCh0aGlzKTsgLy8gb3B0aW9uc1xuXG5cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZGVlcCA9ICEhb3B0aW9ucy5kZWVwO1xuICAgICAgICB0aGlzLnVzZXIgPSAhIW9wdGlvbnMudXNlcjtcbiAgICAgICAgdGhpcy5sYXp5ID0gISFvcHRpb25zLmxhenk7XG4gICAgICAgIHRoaXMuc3luYyA9ICEhb3B0aW9ucy5zeW5jO1xuICAgICAgICB0aGlzLmJlZm9yZSA9IG9wdGlvbnMuYmVmb3JlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWVwID0gdGhpcy51c2VyID0gdGhpcy5sYXp5ID0gdGhpcy5zeW5jID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2IgPSBjYjtcbiAgICAgIHRoaXMuaWQgPSArK3VpZCQyOyAvLyB1aWQgZm9yIGJhdGNoaW5nXG5cbiAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlydHkgPSB0aGlzLmxhenk7IC8vIGZvciBsYXp5IHdhdGNoZXJzXG5cbiAgICAgIHRoaXMuZGVwcyA9IFtdO1xuICAgICAgdGhpcy5uZXdEZXBzID0gW107XG4gICAgICB0aGlzLmRlcElkcyA9IG5ldyBfU2V0KCk7XG4gICAgICB0aGlzLm5ld0RlcElkcyA9IG5ldyBfU2V0KCk7XG4gICAgICB0aGlzLmV4cHJlc3Npb24gPSB0cnVlID8gZXhwT3JGbi50b1N0cmluZygpIDogdW5kZWZpbmVkOyAvLyBwYXJzZSBleHByZXNzaW9uIGZvciBnZXR0ZXJcblxuICAgICAgaWYgKHR5cGVvZiBleHBPckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuZ2V0dGVyID0gZXhwT3JGbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2V0dGVyID0gcGFyc2VQYXRoKGV4cE9yRm4pO1xuXG4gICAgICAgIGlmICghdGhpcy5nZXR0ZXIpIHtcbiAgICAgICAgICB0aGlzLmdldHRlciA9IG5vb3A7XG4gICAgICAgICAgdHJ1ZSAmJiB3YXJuKFwiRmFpbGVkIHdhdGNoaW5nIHBhdGg6IFxcXCJcIiArIGV4cE9yRm4gKyBcIlxcXCIgXCIgKyAnV2F0Y2hlciBvbmx5IGFjY2VwdHMgc2ltcGxlIGRvdC1kZWxpbWl0ZWQgcGF0aHMuICcgKyAnRm9yIGZ1bGwgY29udHJvbCwgdXNlIGEgZnVuY3Rpb24gaW5zdGVhZC4nLCB2bSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubGF6eSA/IHVuZGVmaW5lZCA6IHRoaXMuZ2V0KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFdmFsdWF0ZSB0aGUgZ2V0dGVyLCBhbmQgcmUtY29sbGVjdCBkZXBlbmRlbmNpZXMuXG4gICAgICovXG5cblxuICAgIFdhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHB1c2hUYXJnZXQodGhpcyk7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICB2YXIgdm0gPSB0aGlzLnZtO1xuXG4gICAgICB0cnkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0dGVyLmNhbGwodm0sIHZtKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcImdldHRlciBmb3Igd2F0Y2hlciBcXFwiXCIgKyB0aGlzLmV4cHJlc3Npb24gKyBcIlxcXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgLy8gXCJ0b3VjaFwiIGV2ZXJ5IHByb3BlcnR5IHNvIHRoZXkgYXJlIGFsbCB0cmFja2VkIGFzXG4gICAgICAgIC8vIGRlcGVuZGVuY2llcyBmb3IgZGVlcCB3YXRjaGluZ1xuICAgICAgICBpZiAodGhpcy5kZWVwKSB7XG4gICAgICAgICAgdHJhdmVyc2UodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9wVGFyZ2V0KCk7XG4gICAgICAgIHRoaXMuY2xlYW51cERlcHMoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGlzIGRpcmVjdGl2ZS5cbiAgICAgKi9cblxuXG4gICAgV2F0Y2hlci5wcm90b3R5cGUuYWRkRGVwID0gZnVuY3Rpb24gYWRkRGVwKGRlcCkge1xuICAgICAgdmFyIGlkID0gZGVwLmlkO1xuXG4gICAgICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhpZCkpIHtcbiAgICAgICAgdGhpcy5uZXdEZXBJZHMuYWRkKGlkKTtcbiAgICAgICAgdGhpcy5uZXdEZXBzLnB1c2goZGVwKTtcblxuICAgICAgICBpZiAoIXRoaXMuZGVwSWRzLmhhcyhpZCkpIHtcbiAgICAgICAgICBkZXAuYWRkU3ViKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbGVhbiB1cCBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICAgICAqL1xuXG5cbiAgICBXYXRjaGVyLnByb3RvdHlwZS5jbGVhbnVwRGVwcyA9IGZ1bmN0aW9uIGNsZWFudXBEZXBzKCkge1xuICAgICAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHZhciBkZXAgPSB0aGlzLmRlcHNbaV07XG5cbiAgICAgICAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoZGVwLmlkKSkge1xuICAgICAgICAgIGRlcC5yZW1vdmVTdWIodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHRtcCA9IHRoaXMuZGVwSWRzO1xuICAgICAgdGhpcy5kZXBJZHMgPSB0aGlzLm5ld0RlcElkcztcbiAgICAgIHRoaXMubmV3RGVwSWRzID0gdG1wO1xuICAgICAgdGhpcy5uZXdEZXBJZHMuY2xlYXIoKTtcbiAgICAgIHRtcCA9IHRoaXMuZGVwcztcbiAgICAgIHRoaXMuZGVwcyA9IHRoaXMubmV3RGVwcztcbiAgICAgIHRoaXMubmV3RGVwcyA9IHRtcDtcbiAgICAgIHRoaXMubmV3RGVwcy5sZW5ndGggPSAwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlciBpbnRlcmZhY2UuXG4gICAgICogV2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRlcGVuZGVuY3kgY2hhbmdlcy5cbiAgICAgKi9cblxuXG4gICAgV2F0Y2hlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmICh0aGlzLmxhenkpIHtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3luYykge1xuICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVXYXRjaGVyKHRoaXMpO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2NoZWR1bGVyIGpvYiBpbnRlcmZhY2UuXG4gICAgICogV2lsbCBiZSBjYWxsZWQgYnkgdGhlIHNjaGVkdWxlci5cbiAgICAgKi9cblxuXG4gICAgV2F0Y2hlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gcnVuKCkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KCk7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlIHx8IC8vIERlZXAgd2F0Y2hlcnMgYW5kIHdhdGNoZXJzIG9uIE9iamVjdC9BcnJheXMgc2hvdWxkIGZpcmUgZXZlblxuICAgICAgICAvLyB3aGVuIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZSwgYmVjYXVzZSB0aGUgdmFsdWUgbWF5XG4gICAgICAgIC8vIGhhdmUgbXV0YXRlZC5cbiAgICAgICAgaXNPYmplY3QodmFsdWUpIHx8IHRoaXMuZGVlcCkge1xuICAgICAgICAgIC8vIHNldCBuZXcgdmFsdWVcbiAgICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBoYW5kbGVFcnJvcihlLCB0aGlzLnZtLCBcImNhbGxiYWNrIGZvciB3YXRjaGVyIFxcXCJcIiArIHRoaXMuZXhwcmVzc2lvbiArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFdmFsdWF0ZSB0aGUgdmFsdWUgb2YgdGhlIHdhdGNoZXIuXG4gICAgICogVGhpcyBvbmx5IGdldHMgY2FsbGVkIGZvciBsYXp5IHdhdGNoZXJzLlxuICAgICAqL1xuXG5cbiAgICBXYXRjaGVyLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uIGV2YWx1YXRlKCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZXBlbmQgb24gYWxsIGRlcHMgY29sbGVjdGVkIGJ5IHRoaXMgd2F0Y2hlci5cbiAgICAgKi9cblxuXG4gICAgV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gZGVwZW5kKCkge1xuICAgICAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHRoaXMuZGVwc1tpXS5kZXBlbmQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZSBzZWxmIGZyb20gYWxsIGRlcGVuZGVuY2llcycgc3Vic2NyaWJlciBsaXN0LlxuICAgICAqL1xuXG5cbiAgICBXYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uIHRlYXJkb3duKCkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAgICAgLy8gdGhpcyBpcyBhIHNvbWV3aGF0IGV4cGVuc2l2ZSBvcGVyYXRpb24gc28gd2Ugc2tpcCBpdFxuICAgICAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgZGVzdHJveWVkLlxuICAgICAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgICAgICByZW1vdmUodGhpcy52bS5fd2F0Y2hlcnMsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICB0aGlzLmRlcHNbaV0ucmVtb3ZlU3ViKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qICAqL1xuXG5cbiAgICB2YXIgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uID0ge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogbm9vcCxcbiAgICAgIHNldDogbm9vcFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwcm94eSh0YXJnZXQsIHNvdXJjZUtleSwga2V5KSB7XG4gICAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gZnVuY3Rpb24gcHJveHlHZXR0ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW3NvdXJjZUtleV1ba2V5XTtcbiAgICAgIH07XG5cbiAgICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBmdW5jdGlvbiBwcm94eVNldHRlcih2YWwpIHtcbiAgICAgICAgdGhpc1tzb3VyY2VLZXldW2tleV0gPSB2YWw7XG4gICAgICB9O1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFN0YXRlKHZtKSB7XG4gICAgICB2bS5fd2F0Y2hlcnMgPSBbXTtcbiAgICAgIHZhciBvcHRzID0gdm0uJG9wdGlvbnM7XG5cbiAgICAgIGlmIChvcHRzLnByb3BzKSB7XG4gICAgICAgIGluaXRQcm9wcyh2bSwgb3B0cy5wcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLm1ldGhvZHMpIHtcbiAgICAgICAgaW5pdE1ldGhvZHModm0sIG9wdHMubWV0aG9kcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLmRhdGEpIHtcbiAgICAgICAgaW5pdERhdGEodm0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZSh2bS5fZGF0YSA9IHt9LCB0cnVlXG4gICAgICAgIC8qIGFzUm9vdERhdGEgKi9cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMuY29tcHV0ZWQpIHtcbiAgICAgICAgaW5pdENvbXB1dGVkKHZtLCBvcHRzLmNvbXB1dGVkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMud2F0Y2ggJiYgb3B0cy53YXRjaCAhPT0gbmF0aXZlV2F0Y2gpIHtcbiAgICAgICAgaW5pdFdhdGNoKHZtLCBvcHRzLndhdGNoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0UHJvcHModm0sIHByb3BzT3B0aW9ucykge1xuICAgICAgdmFyIHByb3BzRGF0YSA9IHZtLiRvcHRpb25zLnByb3BzRGF0YSB8fCB7fTtcbiAgICAgIHZhciBwcm9wcyA9IHZtLl9wcm9wcyA9IHt9OyAvLyBjYWNoZSBwcm9wIGtleXMgc28gdGhhdCBmdXR1cmUgcHJvcHMgdXBkYXRlcyBjYW4gaXRlcmF0ZSB1c2luZyBBcnJheVxuICAgICAgLy8gaW5zdGVhZCBvZiBkeW5hbWljIG9iamVjdCBrZXkgZW51bWVyYXRpb24uXG5cbiAgICAgIHZhciBrZXlzID0gdm0uJG9wdGlvbnMuX3Byb3BLZXlzID0gW107XG4gICAgICB2YXIgaXNSb290ID0gIXZtLiRwYXJlbnQ7IC8vIHJvb3QgaW5zdGFuY2UgcHJvcHMgc2hvdWxkIGJlIGNvbnZlcnRlZFxuXG4gICAgICBpZiAoIWlzUm9vdCkge1xuICAgICAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbG9vcCA9IGZ1bmN0aW9uIGxvb3Aoa2V5KSB7XG4gICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICB2YXIgdmFsdWUgPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wc09wdGlvbnMsIHByb3BzRGF0YSwgdm0pO1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuXG4gICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgdmFyIGh5cGhlbmF0ZWRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcblxuICAgICAgICAgIGlmIChpc1Jlc2VydmVkQXR0cmlidXRlKGh5cGhlbmF0ZWRLZXkpIHx8IGNvbmZpZy5pc1Jlc2VydmVkQXR0cihoeXBoZW5hdGVkS2V5KSkge1xuICAgICAgICAgICAgd2FybihcIlxcXCJcIiArIGh5cGhlbmF0ZWRLZXkgKyBcIlxcXCIgaXMgYSByZXNlcnZlZCBhdHRyaWJ1dGUgYW5kIGNhbm5vdCBiZSB1c2VkIGFzIGNvbXBvbmVudCBwcm9wLlwiLCB2bSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGVmaW5lUmVhY3RpdmUkJDEocHJvcHMsIGtleSwgdmFsdWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghaXNSb290ICYmICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICh2bS5tcEhvc3QgPT09ICdtcC1iYWlkdScpIHtcbiAgICAgICAgICAgICAgICAgIC8v55m+5bqmIG9ic2VydmVyIOWcqCBzZXREYXRhIGNhbGxiYWNrIOS5i+WQjuinpuWPke+8jOebtOaOpeW/veeVpeivpSB3YXJuXG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSAvL2ZpeGVkIGJ5IHh4eHh4eCBfX25leHRfdGlja19wZW5kaW5nLHVuaTovL2Zvcm0tZmllbGQg5pe25LiN5ZGK6K2mXG5cblxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICd2YWx1ZScgJiYgQXJyYXkuaXNBcnJheSh2bS4kb3B0aW9ucy5iZWhhdmlvcnMpICYmIHZtLiRvcHRpb25zLmJlaGF2aW9ycy5pbmRleE9mKCd1bmk6Ly9mb3JtLWZpZWxkJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHZtLl9nZXRGb3JtRGF0YSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciAkcGFyZW50ID0gdm0uJHBhcmVudDtcblxuICAgICAgICAgICAgICAgIHdoaWxlICgkcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJHBhcmVudC5fX25leHRfdGlja19wZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgJHBhcmVudCA9ICRwYXJlbnQuJHBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2FybihcIkF2b2lkIG11dGF0aW5nIGEgcHJvcCBkaXJlY3RseSBzaW5jZSB0aGUgdmFsdWUgd2lsbCBiZSBcIiArIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHBhcmVudCBjb21wb25lbnQgcmUtcmVuZGVycy4gXCIgKyBcIkluc3RlYWQsIHVzZSBhIGRhdGEgb3IgY29tcHV0ZWQgcHJvcGVydHkgYmFzZWQgb24gdGhlIHByb3AncyBcIiArIFwidmFsdWUuIFByb3AgYmVpbmcgbXV0YXRlZDogXFxcIlwiICsga2V5ICsgXCJcXFwiXCIsIHZtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHt9IC8vIHN0YXRpYyBwcm9wcyBhcmUgYWxyZWFkeSBwcm94aWVkIG9uIHRoZSBjb21wb25lbnQncyBwcm90b3R5cGVcbiAgICAgICAgLy8gZHVyaW5nIFZ1ZS5leHRlbmQoKS4gV2Ugb25seSBuZWVkIHRvIHByb3h5IHByb3BzIGRlZmluZWQgYXRcbiAgICAgICAgLy8gaW5zdGFudGlhdGlvbiBoZXJlLlxuXG5cbiAgICAgICAgaWYgKCEoa2V5IGluIHZtKSkge1xuICAgICAgICAgIHByb3h5KHZtLCBcIl9wcm9wc1wiLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHNPcHRpb25zKSB7XG4gICAgICAgIGxvb3Aoa2V5KTtcbiAgICAgIH1cblxuICAgICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXREYXRhKHZtKSB7XG4gICAgICB2YXIgZGF0YSA9IHZtLiRvcHRpb25zLmRhdGE7XG4gICAgICBkYXRhID0gdm0uX2RhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJyA/IGdldERhdGEoZGF0YSwgdm0pIDogZGF0YSB8fCB7fTtcblxuICAgICAgaWYgKCFpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSB7fTtcbiAgICAgICAgdHJ1ZSAmJiB3YXJuKCdkYXRhIGZ1bmN0aW9ucyBzaG91bGQgcmV0dXJuIGFuIG9iamVjdDpcXG4nICsgJ2h0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL2NvbXBvbmVudHMuaHRtbCNkYXRhLU11c3QtQmUtYS1GdW5jdGlvbicsIHZtKTtcbiAgICAgIH0gLy8gcHJveHkgZGF0YSBvbiBpbnN0YW5jZVxuXG5cbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG4gICAgICB2YXIgcHJvcHMgPSB2bS4kb3B0aW9ucy5wcm9wcztcbiAgICAgIHZhciBtZXRob2RzID0gdm0uJG9wdGlvbnMubWV0aG9kcztcbiAgICAgIHZhciBpID0ga2V5cy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICBpZiAobWV0aG9kcyAmJiBoYXNPd24obWV0aG9kcywga2V5KSkge1xuICAgICAgICAgICAgd2FybihcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkIGFzIGEgZGF0YSBwcm9wZXJ0eS5cIiwgdm0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcyAmJiBoYXNPd24ocHJvcHMsIGtleSkpIHtcbiAgICAgICAgICB0cnVlICYmIHdhcm4oXCJUaGUgZGF0YSBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWNsYXJlZCBhcyBhIHByb3AuIFwiICsgXCJVc2UgcHJvcCBkZWZhdWx0IHZhbHVlIGluc3RlYWQuXCIsIHZtKTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgICAgICAgcHJveHkodm0sIFwiX2RhdGFcIiwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBvYnNlcnZlIGRhdGFcblxuXG4gICAgICBvYnNlcnZlKGRhdGEsIHRydWVcbiAgICAgIC8qIGFzUm9vdERhdGEgKi9cbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGF0YShkYXRhLCB2bSkge1xuICAgICAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGRhdGEgZ2V0dGVyc1xuICAgICAgcHVzaFRhcmdldCgpO1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGF0YS5jYWxsKHZtLCB2bSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcImRhdGEoKVwiKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgcG9wVGFyZ2V0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNvbXB1dGVkV2F0Y2hlck9wdGlvbnMgPSB7XG4gICAgICBsYXp5OiB0cnVlXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGluaXRDb21wdXRlZCh2bSwgY29tcHV0ZWQpIHtcbiAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgICAgdmFyIHdhdGNoZXJzID0gdm0uX2NvbXB1dGVkV2F0Y2hlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAvLyBjb21wdXRlZCBwcm9wZXJ0aWVzIGFyZSBqdXN0IGdldHRlcnMgZHVyaW5nIFNTUlxuXG4gICAgICB2YXIgaXNTU1IgPSBpc1NlcnZlclJlbmRlcmluZygpO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gY29tcHV0ZWQpIHtcbiAgICAgICAgdmFyIHVzZXJEZWYgPSBjb21wdXRlZFtrZXldO1xuICAgICAgICB2YXIgZ2V0dGVyID0gdHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicgPyB1c2VyRGVmIDogdXNlckRlZi5nZXQ7XG5cbiAgICAgICAgaWYgKHRydWUgJiYgZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgICB3YXJuKFwiR2V0dGVyIGlzIG1pc3NpbmcgZm9yIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIi5cIiwgdm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc1NTUikge1xuICAgICAgICAgIC8vIGNyZWF0ZSBpbnRlcm5hbCB3YXRjaGVyIGZvciB0aGUgY29tcHV0ZWQgcHJvcGVydHkuXG4gICAgICAgICAgd2F0Y2hlcnNba2V5XSA9IG5ldyBXYXRjaGVyKHZtLCBnZXR0ZXIgfHwgbm9vcCwgbm9vcCwgY29tcHV0ZWRXYXRjaGVyT3B0aW9ucyk7XG4gICAgICAgIH0gLy8gY29tcG9uZW50LWRlZmluZWQgY29tcHV0ZWQgcHJvcGVydGllcyBhcmUgYWxyZWFkeSBkZWZpbmVkIG9uIHRoZVxuICAgICAgICAvLyBjb21wb25lbnQgcHJvdG90eXBlLiBXZSBvbmx5IG5lZWQgdG8gZGVmaW5lIGNvbXB1dGVkIHByb3BlcnRpZXMgZGVmaW5lZFxuICAgICAgICAvLyBhdCBpbnN0YW50aWF0aW9uIGhlcmUuXG5cblxuICAgICAgICBpZiAoIShrZXkgaW4gdm0pKSB7XG4gICAgICAgICAgZGVmaW5lQ29tcHV0ZWQodm0sIGtleSwgdXNlckRlZik7XG4gICAgICAgIH0gZWxzZSBpZiAodHJ1ZSkge1xuICAgICAgICAgIGlmIChrZXkgaW4gdm0uJGRhdGEpIHtcbiAgICAgICAgICAgIHdhcm4oXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBpbiBkYXRhLlwiLCB2bSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh2bS4kb3B0aW9ucy5wcm9wcyAmJiBrZXkgaW4gdm0uJG9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgICAgIHdhcm4oXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBhcyBhIHByb3AuXCIsIHZtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWZpbmVDb21wdXRlZCh0YXJnZXQsIGtleSwgdXNlckRlZikge1xuICAgICAgdmFyIHNob3VsZENhY2hlID0gIWlzU2VydmVyUmVuZGVyaW5nKCk7XG5cbiAgICAgIGlmICh0eXBlb2YgdXNlckRlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gc2hvdWxkQ2FjaGUgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpIDogY3JlYXRlR2V0dGVySW52b2tlcih1c2VyRGVmKTtcbiAgICAgICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IG5vb3A7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gdXNlckRlZi5nZXQgPyBzaG91bGRDYWNoZSAmJiB1c2VyRGVmLmNhY2hlICE9PSBmYWxzZSA/IGNyZWF0ZUNvbXB1dGVkR2V0dGVyKGtleSkgOiBjcmVhdGVHZXR0ZXJJbnZva2VyKHVzZXJEZWYuZ2V0KSA6IG5vb3A7XG4gICAgICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSB1c2VyRGVmLnNldCB8fCBub29wO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJ1ZSAmJiBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID09PSBub29wKSB7XG4gICAgICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgd2FybihcIkNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgYXNzaWduZWQgdG8gYnV0IGl0IGhhcyBubyBzZXR0ZXIuXCIsIHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIoa2V5KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIoKSB7XG4gICAgICAgIHZhciB3YXRjaGVyID0gdGhpcy5fY29tcHV0ZWRXYXRjaGVycyAmJiB0aGlzLl9jb21wdXRlZFdhdGNoZXJzW2tleV07XG5cbiAgICAgICAgaWYgKHdhdGNoZXIpIHtcbiAgICAgICAgICBpZiAod2F0Y2hlci5kaXJ0eSkge1xuICAgICAgICAgICAgd2F0Y2hlci5ldmFsdWF0ZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCkge1xuICAgICAgICAgICAgLy8gZml4ZWQgYnkgeHh4eHh4XG4gICAgICAgICAgICB3YXRjaGVyLmRlcGVuZCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB3YXRjaGVyLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUdldHRlckludm9rZXIoZm4pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlcigpIHtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgdGhpcyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRNZXRob2RzKHZtLCBtZXRob2RzKSB7XG4gICAgICB2YXIgcHJvcHMgPSB2bS4kb3B0aW9ucy5wcm9wcztcblxuICAgICAgZm9yICh2YXIga2V5IGluIG1ldGhvZHMpIHtcbiAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIG1ldGhvZHNba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgd2FybihcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIHR5cGUgXFxcIlwiICsgKDAsIF90eXBlb2YyW1wiZGVmYXVsdFwiXSkobWV0aG9kc1trZXldKSArIFwiXFxcIiBpbiB0aGUgY29tcG9uZW50IGRlZmluaXRpb24uIFwiICsgXCJEaWQgeW91IHJlZmVyZW5jZSB0aGUgZnVuY3Rpb24gY29ycmVjdGx5P1wiLCB2bSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByb3BzICYmIGhhc093bihwcm9wcywga2V5KSkge1xuICAgICAgICAgICAgd2FybihcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkIGFzIGEgcHJvcC5cIiwgdm0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChrZXkgaW4gdm0gJiYgaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgICAgICAgICB3YXJuKFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBjb25mbGljdHMgd2l0aCBhbiBleGlzdGluZyBWdWUgaW5zdGFuY2UgbWV0aG9kLiBcIiArIFwiQXZvaWQgZGVmaW5pbmcgY29tcG9uZW50IG1ldGhvZHMgdGhhdCBzdGFydCB3aXRoIF8gb3IgJC5cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdm1ba2V5XSA9IHR5cGVvZiBtZXRob2RzW2tleV0gIT09ICdmdW5jdGlvbicgPyBub29wIDogYmluZChtZXRob2RzW2tleV0sIHZtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0V2F0Y2godm0sIHdhdGNoKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gd2F0Y2gpIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSB3YXRjaFtrZXldO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGhhbmRsZXIpKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjcmVhdGVXYXRjaGVyKHZtLCBrZXksIGhhbmRsZXJbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjcmVhdGVXYXRjaGVyKHZtLCBrZXksIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlV2F0Y2hlcih2bSwgZXhwT3JGbiwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgICAgaWYgKGlzUGxhaW5PYmplY3QoaGFuZGxlcikpIHtcbiAgICAgICAgb3B0aW9ucyA9IGhhbmRsZXI7XG4gICAgICAgIGhhbmRsZXIgPSBoYW5kbGVyLmhhbmRsZXI7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaGFuZGxlciA9IHZtW2hhbmRsZXJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdm0uJHdhdGNoKGV4cE9yRm4sIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXRlTWl4aW4oVnVlKSB7XG4gICAgICAvLyBmbG93IHNvbWVob3cgaGFzIHByb2JsZW1zIHdpdGggZGlyZWN0bHkgZGVjbGFyZWQgZGVmaW5pdGlvbiBvYmplY3RcbiAgICAgIC8vIHdoZW4gdXNpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5LCBzbyB3ZSBoYXZlIHRvIHByb2NlZHVyYWxseSBidWlsZCB1cFxuICAgICAgLy8gdGhlIG9iamVjdCBoZXJlLlxuICAgICAgdmFyIGRhdGFEZWYgPSB7fTtcblxuICAgICAgZGF0YURlZi5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgICAgfTtcblxuICAgICAgdmFyIHByb3BzRGVmID0ge307XG5cbiAgICAgIHByb3BzRGVmLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb3BzO1xuICAgICAgfTtcblxuICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgZGF0YURlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgd2FybignQXZvaWQgcmVwbGFjaW5nIGluc3RhbmNlIHJvb3QgJGRhdGEuICcgKyAnVXNlIG5lc3RlZCBkYXRhIHByb3BlcnRpZXMgaW5zdGVhZC4nLCB0aGlzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBwcm9wc0RlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgd2FybihcIiRwcm9wcyBpcyByZWFkb25seS5cIiwgdGhpcyk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGRhdGEnLCBkYXRhRGVmKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHByb3BzJywgcHJvcHNEZWYpO1xuICAgICAgVnVlLnByb3RvdHlwZS4kc2V0ID0gc2V0O1xuICAgICAgVnVlLnByb3RvdHlwZS4kZGVsZXRlID0gZGVsO1xuXG4gICAgICBWdWUucHJvdG90eXBlLiR3YXRjaCA9IGZ1bmN0aW9uIChleHBPckZuLCBjYiwgb3B0aW9ucykge1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgICAgIGlmIChpc1BsYWluT2JqZWN0KGNiKSkge1xuICAgICAgICAgIHJldHVybiBjcmVhdGVXYXRjaGVyKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgb3B0aW9ucy51c2VyID0gdHJ1ZTtcbiAgICAgICAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmltbWVkaWF0ZSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjYi5jYWxsKHZtLCB3YXRjaGVyLnZhbHVlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaGFuZGxlRXJyb3IoZXJyb3IsIHZtLCBcImNhbGxiYWNrIGZvciBpbW1lZGlhdGUgd2F0Y2hlciBcXFwiXCIgKyB3YXRjaGVyLmV4cHJlc3Npb24gKyBcIlxcXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVud2F0Y2hGbigpIHtcbiAgICAgICAgICB3YXRjaGVyLnRlYXJkb3duKCk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH1cbiAgICAvKiAgKi9cblxuXG4gICAgdmFyIHVpZCQzID0gMDtcblxuICAgIGZ1bmN0aW9uIGluaXRNaXhpbihWdWUpIHtcbiAgICAgIFZ1ZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgdm0gPSB0aGlzOyAvLyBhIHVpZFxuXG4gICAgICAgIHZtLl91aWQgPSB1aWQkMysrO1xuICAgICAgICB2YXIgc3RhcnRUYWcsIGVuZFRhZztcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cbiAgICAgICAgaWYgKHRydWUgJiYgY29uZmlnLnBlcmZvcm1hbmNlICYmIG1hcmspIHtcbiAgICAgICAgICBzdGFydFRhZyA9IFwidnVlLXBlcmYtc3RhcnQ6XCIgKyB2bS5fdWlkO1xuICAgICAgICAgIGVuZFRhZyA9IFwidnVlLXBlcmYtZW5kOlwiICsgdm0uX3VpZDtcbiAgICAgICAgICBtYXJrKHN0YXJ0VGFnKTtcbiAgICAgICAgfSAvLyBhIGZsYWcgdG8gYXZvaWQgdGhpcyBiZWluZyBvYnNlcnZlZFxuXG5cbiAgICAgICAgdm0uX2lzVnVlID0gdHJ1ZTsgLy8gbWVyZ2Ugb3B0aW9uc1xuXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuX2lzQ29tcG9uZW50KSB7XG4gICAgICAgICAgLy8gb3B0aW1pemUgaW50ZXJuYWwgY29tcG9uZW50IGluc3RhbnRpYXRpb25cbiAgICAgICAgICAvLyBzaW5jZSBkeW5hbWljIG9wdGlvbnMgbWVyZ2luZyBpcyBwcmV0dHkgc2xvdywgYW5kIG5vbmUgb2YgdGhlXG4gICAgICAgICAgLy8gaW50ZXJuYWwgY29tcG9uZW50IG9wdGlvbnMgbmVlZHMgc3BlY2lhbCB0cmVhdG1lbnQuXG4gICAgICAgICAgaW5pdEludGVybmFsQ29tcG9uZW50KHZtLCBvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2bS4kb3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhyZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKHZtLmNvbnN0cnVjdG9yKSwgb3B0aW9ucyB8fCB7fSwgdm0pO1xuICAgICAgICB9XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5cblxuICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgIGluaXRQcm94eSh2bSk7XG4gICAgICAgIH0gZWxzZSB7fSAvLyBleHBvc2UgcmVhbCBzZWxmXG5cblxuICAgICAgICB2bS5fc2VsZiA9IHZtO1xuICAgICAgICBpbml0TGlmZWN5Y2xlKHZtKTtcbiAgICAgICAgaW5pdEV2ZW50cyh2bSk7XG4gICAgICAgIGluaXRSZW5kZXIodm0pO1xuICAgICAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZUNyZWF0ZScpO1xuICAgICAgICAhdm0uXyRmYWxsYmFjayAmJiBpbml0SW5qZWN0aW9ucyh2bSk7IC8vIHJlc29sdmUgaW5qZWN0aW9ucyBiZWZvcmUgZGF0YS9wcm9wcyAgXG5cbiAgICAgICAgaW5pdFN0YXRlKHZtKTtcbiAgICAgICAgIXZtLl8kZmFsbGJhY2sgJiYgaW5pdFByb3ZpZGUodm0pOyAvLyByZXNvbHZlIHByb3ZpZGUgYWZ0ZXIgZGF0YS9wcm9wc1xuXG4gICAgICAgICF2bS5fJGZhbGxiYWNrICYmIGNhbGxIb29rKHZtLCAnY3JlYXRlZCcpO1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuICAgICAgICBpZiAodHJ1ZSAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgICAgIHZtLl9uYW1lID0gZm9ybWF0Q29tcG9uZW50TmFtZSh2bSwgZmFsc2UpO1xuICAgICAgICAgIG1hcmsoZW5kVGFnKTtcbiAgICAgICAgICBtZWFzdXJlKFwidnVlIFwiICsgdm0uX25hbWUgKyBcIiBpbml0XCIsIHN0YXJ0VGFnLCBlbmRUYWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZtLiRvcHRpb25zLmVsKSB7XG4gICAgICAgICAgdm0uJG1vdW50KHZtLiRvcHRpb25zLmVsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0SW50ZXJuYWxDb21wb25lbnQodm0sIG9wdGlvbnMpIHtcbiAgICAgIHZhciBvcHRzID0gdm0uJG9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKHZtLmNvbnN0cnVjdG9yLm9wdGlvbnMpOyAvLyBkb2luZyB0aGlzIGJlY2F1c2UgaXQncyBmYXN0ZXIgdGhhbiBkeW5hbWljIGVudW1lcmF0aW9uLlxuXG4gICAgICB2YXIgcGFyZW50Vm5vZGUgPSBvcHRpb25zLl9wYXJlbnRWbm9kZTtcbiAgICAgIG9wdHMucGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gICAgICBvcHRzLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuICAgICAgdmFyIHZub2RlQ29tcG9uZW50T3B0aW9ucyA9IHBhcmVudFZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgICBvcHRzLnByb3BzRGF0YSA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5wcm9wc0RhdGE7XG4gICAgICBvcHRzLl9wYXJlbnRMaXN0ZW5lcnMgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMubGlzdGVuZXJzO1xuICAgICAgb3B0cy5fcmVuZGVyQ2hpbGRyZW4gPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMuY2hpbGRyZW47XG4gICAgICBvcHRzLl9jb21wb25lbnRUYWcgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMudGFnO1xuXG4gICAgICBpZiAob3B0aW9ucy5yZW5kZXIpIHtcbiAgICAgICAgb3B0cy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcbiAgICAgICAgb3B0cy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZucztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKEN0b3IpIHtcbiAgICAgIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuXG4gICAgICBpZiAoQ3RvcltcInN1cGVyXCJdKSB7XG4gICAgICAgIHZhciBzdXBlck9wdGlvbnMgPSByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKEN0b3JbXCJzdXBlclwiXSk7XG4gICAgICAgIHZhciBjYWNoZWRTdXBlck9wdGlvbnMgPSBDdG9yLnN1cGVyT3B0aW9ucztcblxuICAgICAgICBpZiAoc3VwZXJPcHRpb25zICE9PSBjYWNoZWRTdXBlck9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBzdXBlciBvcHRpb24gY2hhbmdlZCxcbiAgICAgICAgICAvLyBuZWVkIHRvIHJlc29sdmUgbmV3IG9wdGlvbnMuXG4gICAgICAgICAgQ3Rvci5zdXBlck9wdGlvbnMgPSBzdXBlck9wdGlvbnM7IC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgbGF0ZS1tb2RpZmllZC9hdHRhY2hlZCBvcHRpb25zICgjNDk3NilcblxuICAgICAgICAgIHZhciBtb2RpZmllZE9wdGlvbnMgPSByZXNvbHZlTW9kaWZpZWRPcHRpb25zKEN0b3IpOyAvLyB1cGRhdGUgYmFzZSBleHRlbmQgb3B0aW9uc1xuXG4gICAgICAgICAgaWYgKG1vZGlmaWVkT3B0aW9ucykge1xuICAgICAgICAgICAgZXh0ZW5kKEN0b3IuZXh0ZW5kT3B0aW9ucywgbW9kaWZpZWRPcHRpb25zKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvcHRpb25zID0gQ3Rvci5vcHRpb25zID0gbWVyZ2VPcHRpb25zKHN1cGVyT3B0aW9ucywgQ3Rvci5leHRlbmRPcHRpb25zKTtcblxuICAgICAgICAgIGlmIChvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuY29tcG9uZW50c1tvcHRpb25zLm5hbWVdID0gQ3RvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyhDdG9yKSB7XG4gICAgICB2YXIgbW9kaWZpZWQ7XG4gICAgICB2YXIgbGF0ZXN0ID0gQ3Rvci5vcHRpb25zO1xuICAgICAgdmFyIHNlYWxlZCA9IEN0b3Iuc2VhbGVkT3B0aW9ucztcblxuICAgICAgZm9yICh2YXIga2V5IGluIGxhdGVzdCkge1xuICAgICAgICBpZiAobGF0ZXN0W2tleV0gIT09IHNlYWxlZFtrZXldKSB7XG4gICAgICAgICAgaWYgKCFtb2RpZmllZCkge1xuICAgICAgICAgICAgbW9kaWZpZWQgPSB7fTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtb2RpZmllZFtrZXldID0gbGF0ZXN0W2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1vZGlmaWVkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFZ1ZShvcHRpb25zKSB7XG4gICAgICBpZiAodHJ1ZSAmJiAhKHRoaXMgaW5zdGFuY2VvZiBWdWUpKSB7XG4gICAgICAgIHdhcm4oJ1Z1ZSBpcyBhIGNvbnN0cnVjdG9yIGFuZCBzaG91bGQgYmUgY2FsbGVkIHdpdGggdGhlIGBuZXdgIGtleXdvcmQnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faW5pdChvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpbml0TWl4aW4oVnVlKTtcbiAgICBzdGF0ZU1peGluKFZ1ZSk7XG4gICAgZXZlbnRzTWl4aW4oVnVlKTtcbiAgICBsaWZlY3ljbGVNaXhpbihWdWUpO1xuICAgIHJlbmRlck1peGluKFZ1ZSk7XG4gICAgLyogICovXG5cbiAgICBmdW5jdGlvbiBpbml0VXNlKFZ1ZSkge1xuICAgICAgVnVlLnVzZSA9IGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgdmFyIGluc3RhbGxlZFBsdWdpbnMgPSB0aGlzLl9pbnN0YWxsZWRQbHVnaW5zIHx8ICh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zID0gW10pO1xuXG4gICAgICAgIGlmIChpbnN0YWxsZWRQbHVnaW5zLmluZGV4T2YocGx1Z2luKSA+IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gLy8gYWRkaXRpb25hbCBwYXJhbWV0ZXJzXG5cblxuICAgICAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgYXJncy51bnNoaWZ0KHRoaXMpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGx1Z2luLmluc3RhbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBwbHVnaW4uaW5zdGFsbC5hcHBseShwbHVnaW4sIGFyZ3MpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwbHVnaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBwbHVnaW4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICBpbnN0YWxsZWRQbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuICAgIH1cbiAgICAvKiAgKi9cblxuXG4gICAgZnVuY3Rpb24gaW5pdE1peGluJDEoVnVlKSB7XG4gICAgICBWdWUubWl4aW4gPSBmdW5jdGlvbiAobWl4aW4pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gbWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgbWl4aW4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG4gICAgfVxuICAgIC8qICAqL1xuXG5cbiAgICBmdW5jdGlvbiBpbml0RXh0ZW5kKFZ1ZSkge1xuICAgICAgLyoqXG4gICAgICAgKiBFYWNoIGluc3RhbmNlIGNvbnN0cnVjdG9yLCBpbmNsdWRpbmcgVnVlLCBoYXMgYSB1bmlxdWVcbiAgICAgICAqIGNpZC4gVGhpcyBlbmFibGVzIHVzIHRvIGNyZWF0ZSB3cmFwcGVkIFwiY2hpbGRcbiAgICAgICAqIGNvbnN0cnVjdG9yc1wiIGZvciBwcm90b3R5cGFsIGluaGVyaXRhbmNlIGFuZCBjYWNoZSB0aGVtLlxuICAgICAgICovXG4gICAgICBWdWUuY2lkID0gMDtcbiAgICAgIHZhciBjaWQgPSAxO1xuICAgICAgLyoqXG4gICAgICAgKiBDbGFzcyBpbmhlcml0YW5jZVxuICAgICAgICovXG5cbiAgICAgIFZ1ZS5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5kT3B0aW9ucykge1xuICAgICAgICBleHRlbmRPcHRpb25zID0gZXh0ZW5kT3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdmFyIFN1cGVyID0gdGhpcztcbiAgICAgICAgdmFyIFN1cGVySWQgPSBTdXBlci5jaWQ7XG4gICAgICAgIHZhciBjYWNoZWRDdG9ycyA9IGV4dGVuZE9wdGlvbnMuX0N0b3IgfHwgKGV4dGVuZE9wdGlvbnMuX0N0b3IgPSB7fSk7XG5cbiAgICAgICAgaWYgKGNhY2hlZEN0b3JzW1N1cGVySWRdKSB7XG4gICAgICAgICAgcmV0dXJuIGNhY2hlZEN0b3JzW1N1cGVySWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5hbWUgPSBleHRlbmRPcHRpb25zLm5hbWUgfHwgU3VwZXIub3B0aW9ucy5uYW1lO1xuXG4gICAgICAgIGlmICh0cnVlICYmIG5hbWUpIHtcbiAgICAgICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUobmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgU3ViID0gZnVuY3Rpb24gVnVlQ29tcG9uZW50KG9wdGlvbnMpIHtcbiAgICAgICAgICB0aGlzLl9pbml0KG9wdGlvbnMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFN1Yi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN1cGVyLnByb3RvdHlwZSk7XG4gICAgICAgIFN1Yi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdWI7XG4gICAgICAgIFN1Yi5jaWQgPSBjaWQrKztcbiAgICAgICAgU3ViLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoU3VwZXIub3B0aW9ucywgZXh0ZW5kT3B0aW9ucyk7XG4gICAgICAgIFN1Ylsnc3VwZXInXSA9IFN1cGVyOyAvLyBGb3IgcHJvcHMgYW5kIGNvbXB1dGVkIHByb3BlcnRpZXMsIHdlIGRlZmluZSB0aGUgcHJveHkgZ2V0dGVycyBvblxuICAgICAgICAvLyB0aGUgVnVlIGluc3RhbmNlcyBhdCBleHRlbnNpb24gdGltZSwgb24gdGhlIGV4dGVuZGVkIHByb3RvdHlwZS4gVGhpc1xuICAgICAgICAvLyBhdm9pZHMgT2JqZWN0LmRlZmluZVByb3BlcnR5IGNhbGxzIGZvciBlYWNoIGluc3RhbmNlIGNyZWF0ZWQuXG5cbiAgICAgICAgaWYgKFN1Yi5vcHRpb25zLnByb3BzKSB7XG4gICAgICAgICAgaW5pdFByb3BzJDEoU3ViKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChTdWIub3B0aW9ucy5jb21wdXRlZCkge1xuICAgICAgICAgIGluaXRDb21wdXRlZCQxKFN1Yik7XG4gICAgICAgIH0gLy8gYWxsb3cgZnVydGhlciBleHRlbnNpb24vbWl4aW4vcGx1Z2luIHVzYWdlXG5cblxuICAgICAgICBTdWIuZXh0ZW5kID0gU3VwZXIuZXh0ZW5kO1xuICAgICAgICBTdWIubWl4aW4gPSBTdXBlci5taXhpbjtcbiAgICAgICAgU3ViLnVzZSA9IFN1cGVyLnVzZTsgLy8gY3JlYXRlIGFzc2V0IHJlZ2lzdGVycywgc28gZXh0ZW5kZWQgY2xhc3Nlc1xuICAgICAgICAvLyBjYW4gaGF2ZSB0aGVpciBwcml2YXRlIGFzc2V0cyB0b28uXG5cbiAgICAgICAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICAgIFN1Ylt0eXBlXSA9IFN1cGVyW3R5cGVdO1xuICAgICAgICB9KTsgLy8gZW5hYmxlIHJlY3Vyc2l2ZSBzZWxmLWxvb2t1cFxuXG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgU3ViLm9wdGlvbnMuY29tcG9uZW50c1tuYW1lXSA9IFN1YjtcbiAgICAgICAgfSAvLyBrZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBzdXBlciBvcHRpb25zIGF0IGV4dGVuc2lvbiB0aW1lLlxuICAgICAgICAvLyBsYXRlciBhdCBpbnN0YW50aWF0aW9uIHdlIGNhbiBjaGVjayBpZiBTdXBlcidzIG9wdGlvbnMgaGF2ZVxuICAgICAgICAvLyBiZWVuIHVwZGF0ZWQuXG5cblxuICAgICAgICBTdWIuc3VwZXJPcHRpb25zID0gU3VwZXIub3B0aW9ucztcbiAgICAgICAgU3ViLmV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zO1xuICAgICAgICBTdWIuc2VhbGVkT3B0aW9ucyA9IGV4dGVuZCh7fSwgU3ViLm9wdGlvbnMpOyAvLyBjYWNoZSBjb25zdHJ1Y3RvclxuXG4gICAgICAgIGNhY2hlZEN0b3JzW1N1cGVySWRdID0gU3ViO1xuICAgICAgICByZXR1cm4gU3ViO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0UHJvcHMkMShDb21wKSB7XG4gICAgICB2YXIgcHJvcHMgPSBDb21wLm9wdGlvbnMucHJvcHM7XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICBwcm94eShDb21wLnByb3RvdHlwZSwgXCJfcHJvcHNcIiwga2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0Q29tcHV0ZWQkMShDb21wKSB7XG4gICAgICB2YXIgY29tcHV0ZWQgPSBDb21wLm9wdGlvbnMuY29tcHV0ZWQ7XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBjb21wdXRlZCkge1xuICAgICAgICBkZWZpbmVDb21wdXRlZChDb21wLnByb3RvdHlwZSwga2V5LCBjb21wdXRlZFtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogICovXG5cblxuICAgIGZ1bmN0aW9uIGluaXRBc3NldFJlZ2lzdGVycyhWdWUpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlIGFzc2V0IHJlZ2lzdHJhdGlvbiBtZXRob2RzLlxuICAgICAgICovXG4gICAgICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIFZ1ZVt0eXBlXSA9IGZ1bmN0aW9uIChpZCwgZGVmaW5pdGlvbikge1xuICAgICAgICAgIGlmICghZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICAgICAgaWYgKHRydWUgJiYgdHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDb21wb25lbnROYW1lKGlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdjb21wb25lbnQnICYmIGlzUGxhaW5PYmplY3QoZGVmaW5pdGlvbikpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbi5uYW1lID0gZGVmaW5pdGlvbi5uYW1lIHx8IGlkO1xuICAgICAgICAgICAgICBkZWZpbml0aW9uID0gdGhpcy5vcHRpb25zLl9iYXNlLmV4dGVuZChkZWZpbml0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkaXJlY3RpdmUnICYmIHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgYmluZDogZGVmaW5pdGlvbixcbiAgICAgICAgICAgICAgICB1cGRhdGU6IGRlZmluaXRpb25cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zW3R5cGUgKyAncyddW2lkXSA9IGRlZmluaXRpb247XG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyogICovXG5cblxuICAgIGZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUob3B0cykge1xuICAgICAgcmV0dXJuIG9wdHMgJiYgKG9wdHMuQ3Rvci5vcHRpb25zLm5hbWUgfHwgb3B0cy50YWcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hdGNoZXMocGF0dGVybiwgbmFtZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGF0dGVybikpIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm4uaW5kZXhPZihuYW1lKSA+IC0xO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm4uc3BsaXQoJywnKS5pbmRleE9mKG5hbWUpID4gLTE7XG4gICAgICB9IGVsc2UgaWYgKGlzUmVnRXhwKHBhdHRlcm4pKSB7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobmFtZSk7XG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcnVuZUNhY2hlKGtlZXBBbGl2ZUluc3RhbmNlLCBmaWx0ZXIpIHtcbiAgICAgIHZhciBjYWNoZSA9IGtlZXBBbGl2ZUluc3RhbmNlLmNhY2hlO1xuICAgICAgdmFyIGtleXMgPSBrZWVwQWxpdmVJbnN0YW5jZS5rZXlzO1xuICAgICAgdmFyIF92bm9kZSA9IGtlZXBBbGl2ZUluc3RhbmNlLl92bm9kZTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIGNhY2hlKSB7XG4gICAgICAgIHZhciBjYWNoZWROb2RlID0gY2FjaGVba2V5XTtcblxuICAgICAgICBpZiAoY2FjaGVkTm9kZSkge1xuICAgICAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjYWNoZWROb2RlLmNvbXBvbmVudE9wdGlvbnMpO1xuXG4gICAgICAgICAgaWYgKG5hbWUgJiYgIWZpbHRlcihuYW1lKSkge1xuICAgICAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXksIGtleXMsIF92bm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXksIGtleXMsIGN1cnJlbnQpIHtcbiAgICAgIHZhciBjYWNoZWQkJDEgPSBjYWNoZVtrZXldO1xuXG4gICAgICBpZiAoY2FjaGVkJCQxICYmICghY3VycmVudCB8fCBjYWNoZWQkJDEudGFnICE9PSBjdXJyZW50LnRhZykpIHtcbiAgICAgICAgY2FjaGVkJCQxLmNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCk7XG4gICAgICB9XG5cbiAgICAgIGNhY2hlW2tleV0gPSBudWxsO1xuICAgICAgcmVtb3ZlKGtleXMsIGtleSk7XG4gICAgfVxuXG4gICAgdmFyIHBhdHRlcm5UeXBlcyA9IFtTdHJpbmcsIFJlZ0V4cCwgQXJyYXldO1xuICAgIHZhciBLZWVwQWxpdmUgPSB7XG4gICAgICBuYW1lOiAna2VlcC1hbGl2ZScsXG4gICAgICBcImFic3RyYWN0XCI6IHRydWUsXG4gICAgICBwcm9wczoge1xuICAgICAgICBpbmNsdWRlOiBwYXR0ZXJuVHlwZXMsXG4gICAgICAgIGV4Y2x1ZGU6IHBhdHRlcm5UeXBlcyxcbiAgICAgICAgbWF4OiBbU3RyaW5nLCBOdW1iZXJdXG4gICAgICB9LFxuICAgICAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMua2V5cyA9IFtdO1xuICAgICAgfSxcbiAgICAgIGRlc3Ryb3llZDogZnVuY3Rpb24gZGVzdHJveWVkKCkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgICAgIHBydW5lQ2FjaGVFbnRyeSh0aGlzLmNhY2hlLCBrZXksIHRoaXMua2V5cyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICAgICAgdGhpcy4kd2F0Y2goJ2luY2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgcHJ1bmVDYWNoZSh0aGlzJDEsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcyh2YWwsIG5hbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kd2F0Y2goJ2V4Y2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgcHJ1bmVDYWNoZSh0aGlzJDEsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gIW1hdGNoZXModmFsLCBuYW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBzbG90ID0gdGhpcy4kc2xvdHNbXCJkZWZhdWx0XCJdO1xuICAgICAgICB2YXIgdm5vZGUgPSBnZXRGaXJzdENvbXBvbmVudENoaWxkKHNsb3QpO1xuICAgICAgICB2YXIgY29tcG9uZW50T3B0aW9ucyA9IHZub2RlICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudE9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBjaGVjayBwYXR0ZXJuXG4gICAgICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGNvbXBvbmVudE9wdGlvbnMpO1xuICAgICAgICAgIHZhciByZWYgPSB0aGlzO1xuICAgICAgICAgIHZhciBpbmNsdWRlID0gcmVmLmluY2x1ZGU7XG4gICAgICAgICAgdmFyIGV4Y2x1ZGUgPSByZWYuZXhjbHVkZTtcblxuICAgICAgICAgIGlmICggLy8gbm90IGluY2x1ZGVkXG4gICAgICAgICAgaW5jbHVkZSAmJiAoIW5hbWUgfHwgIW1hdGNoZXMoaW5jbHVkZSwgbmFtZSkpIHx8IC8vIGV4Y2x1ZGVkXG4gICAgICAgICAgZXhjbHVkZSAmJiBuYW1lICYmIG1hdGNoZXMoZXhjbHVkZSwgbmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2bm9kZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVmJDEgPSB0aGlzO1xuICAgICAgICAgIHZhciBjYWNoZSA9IHJlZiQxLmNhY2hlO1xuICAgICAgICAgIHZhciBrZXlzID0gcmVmJDEua2V5cztcbiAgICAgICAgICB2YXIga2V5ID0gdm5vZGUua2V5ID09IG51bGwgLy8gc2FtZSBjb25zdHJ1Y3RvciBtYXkgZ2V0IHJlZ2lzdGVyZWQgYXMgZGlmZmVyZW50IGxvY2FsIGNvbXBvbmVudHNcbiAgICAgICAgICAvLyBzbyBjaWQgYWxvbmUgaXMgbm90IGVub3VnaCAoIzMyNjkpXG4gICAgICAgICAgPyBjb21wb25lbnRPcHRpb25zLkN0b3IuY2lkICsgKGNvbXBvbmVudE9wdGlvbnMudGFnID8gXCI6OlwiICsgY29tcG9uZW50T3B0aW9ucy50YWcgOiAnJykgOiB2bm9kZS5rZXk7XG5cbiAgICAgICAgICBpZiAoY2FjaGVba2V5XSkge1xuICAgICAgICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBjYWNoZVtrZXldLmNvbXBvbmVudEluc3RhbmNlOyAvLyBtYWtlIGN1cnJlbnQga2V5IGZyZXNoZXN0XG5cbiAgICAgICAgICAgIHJlbW92ZShrZXlzLCBrZXkpO1xuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlW2tleV0gPSB2bm9kZTtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpOyAvLyBwcnVuZSBvbGRlc3QgZW50cnlcblxuICAgICAgICAgICAgaWYgKHRoaXMubWF4ICYmIGtleXMubGVuZ3RoID4gcGFyc2VJbnQodGhpcy5tYXgpKSB7XG4gICAgICAgICAgICAgIHBydW5lQ2FjaGVFbnRyeShjYWNoZSwga2V5c1swXSwga2V5cywgdGhpcy5fdm5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZub2RlLmRhdGEua2VlcEFsaXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2bm9kZSB8fCBzbG90ICYmIHNsb3RbMF07XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgYnVpbHRJbkNvbXBvbmVudHMgPSB7XG4gICAgICBLZWVwQWxpdmU6IEtlZXBBbGl2ZVxuICAgIH07XG4gICAgLyogICovXG5cbiAgICBmdW5jdGlvbiBpbml0R2xvYmFsQVBJKFZ1ZSkge1xuICAgICAgLy8gY29uZmlnXG4gICAgICB2YXIgY29uZmlnRGVmID0ge307XG5cbiAgICAgIGNvbmZpZ0RlZi5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICB9O1xuXG4gICAgICBpZiAodHJ1ZSkge1xuICAgICAgICBjb25maWdEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHdhcm4oJ0RvIG5vdCByZXBsYWNlIHRoZSBWdWUuY29uZmlnIG9iamVjdCwgc2V0IGluZGl2aWR1YWwgZmllbGRzIGluc3RlYWQuJyk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUsICdjb25maWcnLCBjb25maWdEZWYpOyAvLyBleHBvc2VkIHV0aWwgbWV0aG9kcy5cbiAgICAgIC8vIE5PVEU6IHRoZXNlIGFyZSBub3QgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJIC0gYXZvaWQgcmVseWluZyBvblxuICAgICAgLy8gdGhlbSB1bmxlc3MgeW91IGFyZSBhd2FyZSBvZiB0aGUgcmlzay5cblxuICAgICAgVnVlLnV0aWwgPSB7XG4gICAgICAgIHdhcm46IHdhcm4sXG4gICAgICAgIGV4dGVuZDogZXh0ZW5kLFxuICAgICAgICBtZXJnZU9wdGlvbnM6IG1lcmdlT3B0aW9ucyxcbiAgICAgICAgZGVmaW5lUmVhY3RpdmU6IGRlZmluZVJlYWN0aXZlJCQxXG4gICAgICB9O1xuICAgICAgVnVlLnNldCA9IHNldDtcbiAgICAgIFZ1ZVtcImRlbGV0ZVwiXSA9IGRlbDtcbiAgICAgIFZ1ZS5uZXh0VGljayA9IG5leHRUaWNrOyAvLyAyLjYgZXhwbGljaXQgb2JzZXJ2YWJsZSBBUElcblxuICAgICAgVnVlLm9ic2VydmFibGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIG9ic2VydmUob2JqKTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH07XG5cbiAgICAgIFZ1ZS5vcHRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIEFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgVnVlLm9wdGlvbnNbdHlwZSArICdzJ10gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgfSk7IC8vIHRoaXMgaXMgdXNlZCB0byBpZGVudGlmeSB0aGUgXCJiYXNlXCIgY29uc3RydWN0b3IgdG8gZXh0ZW5kIGFsbCBwbGFpbi1vYmplY3RcbiAgICAgIC8vIGNvbXBvbmVudHMgd2l0aCBpbiBXZWV4J3MgbXVsdGktaW5zdGFuY2Ugc2NlbmFyaW9zLlxuXG4gICAgICBWdWUub3B0aW9ucy5fYmFzZSA9IFZ1ZTtcbiAgICAgIGV4dGVuZChWdWUub3B0aW9ucy5jb21wb25lbnRzLCBidWlsdEluQ29tcG9uZW50cyk7XG4gICAgICBpbml0VXNlKFZ1ZSk7XG4gICAgICBpbml0TWl4aW4kMShWdWUpO1xuICAgICAgaW5pdEV4dGVuZChWdWUpO1xuICAgICAgaW5pdEFzc2V0UmVnaXN0ZXJzKFZ1ZSk7XG4gICAgfVxuXG4gICAgaW5pdEdsb2JhbEFQSShWdWUpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGlzU2VydmVyJywge1xuICAgICAgZ2V0OiBpc1NlcnZlclJlbmRlcmluZ1xuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHNzckNvbnRleHQnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQ7XG4gICAgICB9XG4gICAgfSk7IC8vIGV4cG9zZSBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCBmb3Igc3NyIHJ1bnRpbWUgaGVscGVyIGluc3RhbGxhdGlvblxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZSwgJ0Z1bmN0aW9uYWxSZW5kZXJDb250ZXh0Jywge1xuICAgICAgdmFsdWU6IEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0XG4gICAgfSk7XG4gICAgVnVlLnZlcnNpb24gPSAnMi42LjExJztcbiAgICAvKipcbiAgICAgKiBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vVGVuY2VudC93ZXN0b3JlL21hc3Rlci9wYWNrYWdlcy93ZXN0b3JlL3V0aWxzL2RpZmYuanNcbiAgICAgKi9cblxuICAgIHZhciBBUlJBWVRZUEUgPSAnW29iamVjdCBBcnJheV0nO1xuICAgIHZhciBPQkpFQ1RUWVBFID0gJ1tvYmplY3QgT2JqZWN0XSc7IC8vIGNvbnN0IEZVTkNUSU9OVFlQRSA9ICdbb2JqZWN0IEZ1bmN0aW9uXSdcblxuICAgIGZ1bmN0aW9uIGRpZmYoY3VycmVudCwgcHJlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICBzeW5jS2V5cyhjdXJyZW50LCBwcmUpO1xuXG4gICAgICBfZGlmZihjdXJyZW50LCBwcmUsICcnLCByZXN1bHQpO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN5bmNLZXlzKGN1cnJlbnQsIHByZSkge1xuICAgICAgaWYgKGN1cnJlbnQgPT09IHByZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByb290Q3VycmVudFR5cGUgPSB0eXBlKGN1cnJlbnQpO1xuICAgICAgdmFyIHJvb3RQcmVUeXBlID0gdHlwZShwcmUpO1xuXG4gICAgICBpZiAocm9vdEN1cnJlbnRUeXBlID09IE9CSkVDVFRZUEUgJiYgcm9vdFByZVR5cGUgPT0gT0JKRUNUVFlQRSkge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoY3VycmVudCkubGVuZ3RoID49IE9iamVjdC5rZXlzKHByZSkubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIHByZSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRba2V5XTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRba2V5XSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzeW5jS2V5cyhjdXJyZW50VmFsdWUsIHByZVtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocm9vdEN1cnJlbnRUeXBlID09IEFSUkFZVFlQRSAmJiByb290UHJlVHlwZSA9PSBBUlJBWVRZUEUpIHtcbiAgICAgICAgaWYgKGN1cnJlbnQubGVuZ3RoID49IHByZS5sZW5ndGgpIHtcbiAgICAgICAgICBwcmUuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHN5bmNLZXlzKGN1cnJlbnRbaW5kZXhdLCBpdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9kaWZmKGN1cnJlbnQsIHByZSwgcGF0aCwgcmVzdWx0KSB7XG4gICAgICBpZiAoY3VycmVudCA9PT0gcHJlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHJvb3RDdXJyZW50VHlwZSA9IHR5cGUoY3VycmVudCk7XG4gICAgICB2YXIgcm9vdFByZVR5cGUgPSB0eXBlKHByZSk7XG5cbiAgICAgIGlmIChyb290Q3VycmVudFR5cGUgPT0gT0JKRUNUVFlQRSkge1xuICAgICAgICBpZiAocm9vdFByZVR5cGUgIT0gT0JKRUNUVFlQRSB8fCBPYmplY3Qua2V5cyhjdXJyZW50KS5sZW5ndGggPCBPYmplY3Qua2V5cyhwcmUpLmxlbmd0aCkge1xuICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIHBhdGgsIGN1cnJlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBsb29wID0gZnVuY3Rpb24gbG9vcChrZXkpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBjdXJyZW50W2tleV07XG4gICAgICAgICAgICB2YXIgcHJlVmFsdWUgPSBwcmVba2V5XTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VHlwZSA9IHR5cGUoY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIHZhciBwcmVUeXBlID0gdHlwZShwcmVWYWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50VHlwZSAhPSBBUlJBWVRZUEUgJiYgY3VycmVudFR5cGUgIT0gT0JKRUNUVFlQRSkge1xuICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlICE9IHByZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFR5cGUgPT0gQVJSQVlUWVBFKSB7XG4gICAgICAgICAgICAgIGlmIChwcmVUeXBlICE9IEFSUkFZVFlQRSkge1xuICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5LCBjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUubGVuZ3RoIDwgcHJlVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIF9kaWZmKGl0ZW0sIHByZVZhbHVlW2luZGV4XSwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXkgKyAnWycgKyBpbmRleCArICddJywgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VHlwZSA9PSBPQkpFQ1RUWVBFKSB7XG4gICAgICAgICAgICAgIGlmIChwcmVUeXBlICE9IE9CSkVDVFRZUEUgfHwgT2JqZWN0LmtleXMoY3VycmVudFZhbHVlKS5sZW5ndGggPCBPYmplY3Qua2V5cyhwcmVWYWx1ZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgc3ViS2V5IGluIGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgX2RpZmYoY3VycmVudFZhbHVlW3N1YktleV0sIHByZVZhbHVlW3N1YktleV0sIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5ICsgJy4nICsgc3ViS2V5LCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gY3VycmVudCkge1xuICAgICAgICAgICAgbG9vcChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyb290Q3VycmVudFR5cGUgPT0gQVJSQVlUWVBFKSB7XG4gICAgICAgIGlmIChyb290UHJlVHlwZSAhPSBBUlJBWVRZUEUpIHtcbiAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY3VycmVudC5sZW5ndGggPCBwcmUubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICBfZGlmZihpdGVtLCBwcmVbaW5kZXhdLCBwYXRoICsgJ1snICsgaW5kZXggKyAnXScsIHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFJlc3VsdChyZXN1bHQsIHBhdGgsIGN1cnJlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFJlc3VsdChyZXN1bHQsIGssIHYpIHtcbiAgICAgIC8vIGlmICh0eXBlKHYpICE9IEZVTkNUSU9OVFlQRSkge1xuICAgICAgcmVzdWx0W2tdID0gdjsgLy8gfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHR5cGUob2JqKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XG4gICAgfVxuICAgIC8qICAqL1xuXG5cbiAgICBmdW5jdGlvbiBmbHVzaENhbGxiYWNrcyQxKHZtKSB7XG4gICAgICBpZiAodm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzICYmIHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKE9iamVjdCh7XG4gICAgICAgICAgXCJOT0RFX0VOVlwiOiBcImRldmVsb3BtZW50XCIsXG4gICAgICAgICAgXCJWVUVfQVBQX1BMQVRGT1JNXCI6IFwicXVpY2thcHAtd2Vidmlld1wiLFxuICAgICAgICAgIFwiQkFTRV9VUkxcIjogXCIvXCJcbiAgICAgICAgfSkuVlVFX0FQUF9ERUJVRykge1xuICAgICAgICAgIHZhciBtcEluc3RhbmNlID0gdm0uJHNjb3BlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArICtuZXcgRGF0ZSgpICsgJ11bJyArIChtcEluc3RhbmNlLmlzIHx8IG1wSW5zdGFuY2Uucm91dGUpICsgJ11bJyArIHZtLl91aWQgKyAnXTpmbHVzaENhbGxiYWNrc1snICsgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLmxlbmd0aCArICddJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29waWVzID0gdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLnNsaWNlKDApO1xuXG4gICAgICAgIHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcy5sZW5ndGggPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29waWVzW2ldKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNSZW5kZXJXYXRjaGVyKHZtKSB7XG4gICAgICByZXR1cm4gcXVldWUuZmluZChmdW5jdGlvbiAod2F0Y2hlcikge1xuICAgICAgICByZXR1cm4gdm0uX3dhdGNoZXIgPT09IHdhdGNoZXI7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXh0VGljayQxKHZtLCBjYikge1xuICAgICAgLy8xLm5leHRUaWNrIOS5i+WJjSDlt7Igc2V0RGF0YSDkuJQgc2V0RGF0YSDov5jmnKrlm57osIPlrozmiJBcbiAgICAgIC8vMi5uZXh0VGljayDkuYvliY3lrZjlnKggcmVuZGVyIHdhdGNoZXJcbiAgICAgIGlmICghdm0uX19uZXh0X3RpY2tfcGVuZGluZyAmJiAhaGFzUmVuZGVyV2F0Y2hlcih2bSkpIHtcbiAgICAgICAgaWYgKE9iamVjdCh7XG4gICAgICAgICAgXCJOT0RFX0VOVlwiOiBcImRldmVsb3BtZW50XCIsXG4gICAgICAgICAgXCJWVUVfQVBQX1BMQVRGT1JNXCI6IFwicXVpY2thcHAtd2Vidmlld1wiLFxuICAgICAgICAgIFwiQkFTRV9VUkxcIjogXCIvXCJcbiAgICAgICAgfSkuVlVFX0FQUF9ERUJVRykge1xuICAgICAgICAgIHZhciBtcEluc3RhbmNlID0gdm0uJHNjb3BlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArICtuZXcgRGF0ZSgpICsgJ11bJyArIChtcEluc3RhbmNlLmlzIHx8IG1wSW5zdGFuY2Uucm91dGUpICsgJ11bJyArIHZtLl91aWQgKyAnXTpuZXh0VnVlVGljaycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHRUaWNrKGNiLCB2bSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoT2JqZWN0KHtcbiAgICAgICAgICBcIk5PREVfRU5WXCI6IFwiZGV2ZWxvcG1lbnRcIixcbiAgICAgICAgICBcIlZVRV9BUFBfUExBVEZPUk1cIjogXCJxdWlja2FwcC13ZWJ2aWV3XCIsXG4gICAgICAgICAgXCJCQVNFX1VSTFwiOiBcIi9cIlxuICAgICAgICB9KS5WVUVfQVBQX0RFQlVHKSB7XG4gICAgICAgICAgdmFyIG1wSW5zdGFuY2UkMSA9IHZtLiRzY29wZTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnWycgKyArbmV3IERhdGUoKSArICddWycgKyAobXBJbnN0YW5jZSQxLmlzIHx8IG1wSW5zdGFuY2UkMS5yb3V0ZSkgKyAnXVsnICsgdm0uX3VpZCArICddOm5leHRNUFRpY2snKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgX3Jlc29sdmU7XG5cbiAgICAgIGlmICghdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzKSB7XG4gICAgICAgIHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcyA9IFtdO1xuICAgICAgfVxuXG4gICAgICB2bS5fX25leHRfdGlja19jYWxsYmFja3MucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjYi5jYWxsKHZtKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgJ25leHRUaWNrJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKF9yZXNvbHZlKSB7XG4gICAgICAgICAgX3Jlc29sdmUodm0pO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG5cblxuICAgICAgaWYgKCFjYiAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogICovXG5cblxuICAgIGZ1bmN0aW9uIGNsb25lV2l0aERhdGEodm0pIHtcbiAgICAgIC8vIOehruS/neW9k+WJjSB2bSDmiYDmnInmlbDmja7ooqvlkIzmraVcbiAgICAgIHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgdmFyIGRhdGFLZXlzID0gW10uY29uY2F0KE9iamVjdC5rZXlzKHZtLl9kYXRhIHx8IHt9KSwgT2JqZWN0LmtleXModm0uX2NvbXB1dGVkV2F0Y2hlcnMgfHwge30pKTtcbiAgICAgIGRhdGFLZXlzLnJlZHVjZShmdW5jdGlvbiAocmV0LCBrZXkpIHtcbiAgICAgICAgcmV0W2tleV0gPSB2bVtrZXldO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSwgcmV0KTsgLy8gdnVlLWNvbXBvc2l0aW9uLWFwaVxuXG4gICAgICB2YXIgY29tcG9zaXRpb25BcGlTdGF0ZSA9IHZtLl9fY29tcG9zaXRpb25fYXBpX3N0YXRlX18gfHwgdm0uX19zZWNyZXRfdmZhX3N0YXRlX187XG4gICAgICB2YXIgcmF3QmluZGluZ3MgPSBjb21wb3NpdGlvbkFwaVN0YXRlICYmIGNvbXBvc2l0aW9uQXBpU3RhdGUucmF3QmluZGluZ3M7XG5cbiAgICAgIGlmIChyYXdCaW5kaW5ncykge1xuICAgICAgICBPYmplY3Qua2V5cyhyYXdCaW5kaW5ncykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0W2tleV0gPSB2bVtrZXldO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy9UT0RPIOmcgOimgeaKiuaXoOeUqOaVsOaNruWkhOeQhuaOie+8jOavlOWmgiBsaXN0PT5sMCDliJkgbGlzdCDpnIDopoHnp7vpmaTvvIzlkKbliJnlpJrkvKDovpPkuIDku73mlbDmja5cblxuXG4gICAgICBPYmplY3QuYXNzaWduKHJldCwgdm0uJG1wLmRhdGEgfHwge30pO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2bS4kb3B0aW9ucy5iZWhhdmlvcnMpICYmIHZtLiRvcHRpb25zLmJlaGF2aW9ycy5pbmRleE9mKCd1bmk6Ly9mb3JtLWZpZWxkJykgIT09IC0xKSB7XG4gICAgICAgIC8vZm9ybS1maWVsZFxuICAgICAgICByZXRbJ25hbWUnXSA9IHZtLm5hbWU7XG4gICAgICAgIHJldFsndmFsdWUnXSA9IHZtLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXQpKTtcbiAgICB9XG5cbiAgICB2YXIgcGF0Y2ggPSBmdW5jdGlvbiBwYXRjaChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgICBpZiAodm5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgLy9kZXN0cm95XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubXBUeXBlID09PSAncGFnZScgfHwgdGhpcy5tcFR5cGUgPT09ICdjb21wb25lbnQnKSB7XG4gICAgICAgIHZhciBtcEluc3RhbmNlID0gdGhpcy4kc2NvcGU7XG4gICAgICAgIHZhciBkYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGRhdGEgPSBjbG9uZVdpdGhEYXRhKHRoaXMpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLl9fd2Vidmlld0lkX18gPSBtcEluc3RhbmNlLmRhdGEuX193ZWJ2aWV3SWRfXztcbiAgICAgICAgdmFyIG1wRGF0YSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIC8v5LuF5ZCM5q2lIGRhdGEg5Lit5pyJ55qE5pWw5o2uXG4gICAgICAgICAgbXBEYXRhW2tleV0gPSBtcEluc3RhbmNlLmRhdGFba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBkaWZmRGF0YSA9IHRoaXMuJHNob3VsZERpZmZEYXRhID09PSBmYWxzZSA/IGRhdGEgOiBkaWZmKGRhdGEsIG1wRGF0YSk7XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRpZmZEYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoT2JqZWN0KHtcbiAgICAgICAgICAgIFwiTk9ERV9FTlZcIjogXCJkZXZlbG9wbWVudFwiLFxuICAgICAgICAgICAgXCJWVUVfQVBQX1BMQVRGT1JNXCI6IFwicXVpY2thcHAtd2Vidmlld1wiLFxuICAgICAgICAgICAgXCJCQVNFX1VSTFwiOiBcIi9cIlxuICAgICAgICAgIH0pLlZVRV9BUFBfREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArICtuZXcgRGF0ZSgpICsgJ11bJyArIChtcEluc3RhbmNlLmlzIHx8IG1wSW5zdGFuY2Uucm91dGUpICsgJ11bJyArIHRoaXMuX3VpZCArICdd5beu6YeP5pu05pawJywgSlNPTi5zdHJpbmdpZnkoZGlmZkRhdGEpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fbmV4dF90aWNrX3BlbmRpbmcgPSB0cnVlO1xuICAgICAgICAgIG1wSW5zdGFuY2Uuc2V0RGF0YShkaWZmRGF0YSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcyQxLl9fbmV4dF90aWNrX3BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGZsdXNoQ2FsbGJhY2tzJDEodGhpcyQxKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmbHVzaENhbGxiYWNrcyQxKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICAvKiAgKi9cblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRW1wdHlSZW5kZXIoKSB7fVxuXG4gICAgZnVuY3Rpb24gbW91bnRDb21wb25lbnQkMSh2bSwgZWwsIGh5ZHJhdGluZykge1xuICAgICAgaWYgKCF2bS5tcFR5cGUpIHtcbiAgICAgICAgLy9tYWluLmpzIOS4reeahCBuZXcgVnVlXG4gICAgICAgIHJldHVybiB2bTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZtLm1wVHlwZSA9PT0gJ2FwcCcpIHtcbiAgICAgICAgdm0uJG9wdGlvbnMucmVuZGVyID0gY3JlYXRlRW1wdHlSZW5kZXI7XG4gICAgICB9XG5cbiAgICAgIGlmICghdm0uJG9wdGlvbnMucmVuZGVyKSB7XG4gICAgICAgIHZtLiRvcHRpb25zLnJlbmRlciA9IGNyZWF0ZUVtcHR5UmVuZGVyO1xuXG4gICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgICAgaWYgKHZtLiRvcHRpb25zLnRlbXBsYXRlICYmIHZtLiRvcHRpb25zLnRlbXBsYXRlLmNoYXJBdCgwKSAhPT0gJyMnIHx8IHZtLiRvcHRpb25zLmVsIHx8IGVsKSB7XG4gICAgICAgICAgICB3YXJuKCdZb3UgYXJlIHVzaW5nIHRoZSBydW50aW1lLW9ubHkgYnVpbGQgb2YgVnVlIHdoZXJlIHRoZSB0ZW1wbGF0ZSAnICsgJ2NvbXBpbGVyIGlzIG5vdCBhdmFpbGFibGUuIEVpdGhlciBwcmUtY29tcGlsZSB0aGUgdGVtcGxhdGVzIGludG8gJyArICdyZW5kZXIgZnVuY3Rpb25zLCBvciB1c2UgdGhlIGNvbXBpbGVyLWluY2x1ZGVkIGJ1aWxkLicsIHZtKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2FybignRmFpbGVkIHRvIG1vdW50IGNvbXBvbmVudDogdGVtcGxhdGUgb3IgcmVuZGVyIGZ1bmN0aW9uIG5vdCBkZWZpbmVkLicsIHZtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgIXZtLl8kZmFsbGJhY2sgJiYgY2FsbEhvb2sodm0sICdiZWZvcmVNb3VudCcpO1xuXG4gICAgICB2YXIgdXBkYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50KCkge1xuICAgICAgICB2bS5fdXBkYXRlKHZtLl9yZW5kZXIoKSwgaHlkcmF0aW5nKTtcbiAgICAgIH07IC8vIHdlIHNldCB0aGlzIHRvIHZtLl93YXRjaGVyIGluc2lkZSB0aGUgd2F0Y2hlcidzIGNvbnN0cnVjdG9yXG4gICAgICAvLyBzaW5jZSB0aGUgd2F0Y2hlcidzIGluaXRpYWwgcGF0Y2ggbWF5IGNhbGwgJGZvcmNlVXBkYXRlIChlLmcuIGluc2lkZSBjaGlsZFxuICAgICAgLy8gY29tcG9uZW50J3MgbW91bnRlZCBob29rKSwgd2hpY2ggcmVsaWVzIG9uIHZtLl93YXRjaGVyIGJlaW5nIGFscmVhZHkgZGVmaW5lZFxuXG5cbiAgICAgIG5ldyBXYXRjaGVyKHZtLCB1cGRhdGVDb21wb25lbnQsIG5vb3AsIHtcbiAgICAgICAgYmVmb3JlOiBmdW5jdGlvbiBiZWZvcmUoKSB7XG4gICAgICAgICAgaWYgKHZtLl9pc01vdW50ZWQgJiYgIXZtLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgY2FsbEhvb2sodm0sICdiZWZvcmVVcGRhdGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHRydWVcbiAgICAgIC8qIGlzUmVuZGVyV2F0Y2hlciAqL1xuICAgICAgKTtcbiAgICAgIGh5ZHJhdGluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHZtO1xuICAgIH1cbiAgICAvKiAgKi9cblxuXG4gICAgZnVuY3Rpb24gcmVuZGVyQ2xhc3Moc3RhdGljQ2xhc3MsIGR5bmFtaWNDbGFzcykge1xuICAgICAgaWYgKGlzRGVmKHN0YXRpY0NsYXNzKSB8fCBpc0RlZihkeW5hbWljQ2xhc3MpKSB7XG4gICAgICAgIHJldHVybiBjb25jYXQoc3RhdGljQ2xhc3MsIHN0cmluZ2lmeUNsYXNzKGR5bmFtaWNDbGFzcykpO1xuICAgICAgfVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uY2F0KGEsIGIpIHtcbiAgICAgIHJldHVybiBhID8gYiA/IGEgKyAnICcgKyBiIDogYSA6IGIgfHwgJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RyaW5naWZ5Q2xhc3ModmFsdWUpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gc3RyaW5naWZ5QXJyYXkodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmdpZnlPYmplY3QodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdHJpbmdpZnlBcnJheSh2YWx1ZSkge1xuICAgICAgdmFyIHJlcyA9ICcnO1xuICAgICAgdmFyIHN0cmluZ2lmaWVkO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoaXNEZWYoc3RyaW5naWZpZWQgPSBzdHJpbmdpZnlDbGFzcyh2YWx1ZVtpXSkpICYmIHN0cmluZ2lmaWVkICE9PSAnJykge1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHJlcyArPSAnICc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzICs9IHN0cmluZ2lmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RyaW5naWZ5T2JqZWN0KHZhbHVlKSB7XG4gICAgICB2YXIgcmVzID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWVba2V5XSkge1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHJlcyArPSAnICc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzICs9IGtleTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICAvKiAgKi9cblxuXG4gICAgdmFyIHBhcnNlU3R5bGVUZXh0ID0gY2FjaGVkKGZ1bmN0aW9uIChjc3NUZXh0KSB7XG4gICAgICB2YXIgcmVzID0ge307XG4gICAgICB2YXIgbGlzdERlbGltaXRlciA9IC87KD8hW14oXSpcXCkpL2c7XG4gICAgICB2YXIgcHJvcGVydHlEZWxpbWl0ZXIgPSAvOiguKykvO1xuICAgICAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgdmFyIHRtcCA9IGl0ZW0uc3BsaXQocHJvcGVydHlEZWxpbWl0ZXIpO1xuICAgICAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXNbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pOyAvLyBub3JtYWxpemUgcG9zc2libGUgYXJyYXkgLyBzdHJpbmcgdmFsdWVzIGludG8gT2JqZWN0XG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVTdHlsZUJpbmRpbmcoYmluZGluZ1N0eWxlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShiaW5kaW5nU3R5bGUpKSB7XG4gICAgICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGJpbmRpbmdTdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiaW5kaW5nU3R5bGU7XG4gICAgfVxuICAgIC8qICAqL1xuXG5cbiAgICB2YXIgTVBfTUVUSE9EUyA9IFsnY3JlYXRlU2VsZWN0b3JRdWVyeScsICdjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcicsICdzZWxlY3RBbGxDb21wb25lbnRzJywgJ3NlbGVjdENvbXBvbmVudCddO1xuXG4gICAgZnVuY3Rpb24gZ2V0VGFyZ2V0KG9iaiwgcGF0aCkge1xuICAgICAgdmFyIHBhcnRzID0gcGF0aC5zcGxpdCgnLicpO1xuICAgICAgdmFyIGtleSA9IHBhcnRzWzBdO1xuXG4gICAgICBpZiAoa2V5LmluZGV4T2YoJ19fJG4nKSA9PT0gMCkge1xuICAgICAgICAvL251bWJlciBpbmRleFxuICAgICAgICBrZXkgPSBwYXJzZUludChrZXkucmVwbGFjZSgnX18kbicsICcnKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0VGFyZ2V0KG9ialtrZXldLCBwYXJ0cy5zbGljZSgxKS5qb2luKCcuJykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGludGVybmFsTWl4aW4oVnVlKSB7XG4gICAgICBWdWUuY29uZmlnLmVycm9ySGFuZGxlciA9IGZ1bmN0aW9uIChlcnIsIHZtLCBpbmZvKSB7XG4gICAgICAgIFZ1ZS51dGlsLndhcm4oXCJFcnJvciBpbiBcIiArIGluZm8gKyBcIjogXFxcIlwiICsgZXJyLnRvU3RyaW5nKCkgKyBcIlxcXCJcIiwgdm0pO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cbiAgICAgICAgdmFyIGFwcCA9IGdldEFwcCgpO1xuXG4gICAgICAgIGlmIChhcHAgJiYgYXBwLm9uRXJyb3IpIHtcbiAgICAgICAgICBhcHAub25FcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgb2xkRW1pdCA9IFZ1ZS5wcm90b3R5cGUuJGVtaXQ7XG5cbiAgICAgIFZ1ZS5wcm90b3R5cGUuJGVtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuJHNjb3BlICYmIGV2ZW50KSB7XG4gICAgICAgICAgdGhpcy4kc2NvcGVbJ3RyaWdnZXJFdmVudCddKGV2ZW50LCB7XG4gICAgICAgICAgICBfX2FyZ3NfXzogdG9BcnJheShhcmd1bWVudHMsIDEpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2xkRW1pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcblxuICAgICAgVnVlLnByb3RvdHlwZS4kbmV4dFRpY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIG5leHRUaWNrJDEodGhpcywgZm4pO1xuICAgICAgfTtcblxuICAgICAgTVBfTUVUSE9EUy5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgICAgVnVlLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGVbbWV0aG9kXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlW21ldGhvZF0oYXJncyk7XG4gICAgICAgICAgfSAvLyBtcC1hbGlwYXlcblxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBteSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWV0aG9kID09PSAnY3JlYXRlU2VsZWN0b3JRdWVyeScpIHtcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgICAgICAgICByZXR1cm4gbXkuY3JlYXRlU2VsZWN0b3JRdWVyeShhcmdzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2NyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyJykge1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICAgICAgICAgIHJldHVybiBteS5jcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcihhcmdzKTtcbiAgICAgICAgICB9IC8vIFRPRE8gbXAtYWxpcGF5IOaaguS4jeaUr+aMgSBzZWxlY3RBbGxDb21wb25lbnRzLHNlbGVjdENvbXBvbmVudFxuXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIFZ1ZS5wcm90b3R5cGUuX19pbml0X3Byb3ZpZGUgPSBpbml0UHJvdmlkZTtcbiAgICAgIFZ1ZS5wcm90b3R5cGUuX19pbml0X2luamVjdGlvbnMgPSBpbml0SW5qZWN0aW9ucztcblxuICAgICAgVnVlLnByb3RvdHlwZS5fX2NhbGxfaG9vayA9IGZ1bmN0aW9uIChob29rLCBhcmdzKSB7XG4gICAgICAgIHZhciB2bSA9IHRoaXM7IC8vICM3NTczIGRpc2FibGUgZGVwIGNvbGxlY3Rpb24gd2hlbiBpbnZva2luZyBsaWZlY3ljbGUgaG9va3NcblxuICAgICAgICBwdXNoVGFyZ2V0KCk7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHZtLiRvcHRpb25zW2hvb2tdO1xuICAgICAgICB2YXIgaW5mbyA9IGhvb2sgKyBcIiBob29rXCI7XG4gICAgICAgIHZhciByZXQ7XG5cbiAgICAgICAgaWYgKGhhbmRsZXJzKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICAgIHJldCA9IGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGhhbmRsZXJzW2ldLCB2bSwgYXJncyA/IFthcmdzXSA6IG51bGwsIHZtLCBpbmZvKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodm0uX2hhc0hvb2tFdmVudCkge1xuICAgICAgICAgIHZtLiRlbWl0KCdob29rOicgKyBob29rLCBhcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvcFRhcmdldCgpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfTtcblxuICAgICAgVnVlLnByb3RvdHlwZS5fX3NldF9tb2RlbCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSwgdmFsdWUsIG1vZGlmaWVycykge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtb2RpZmllcnMpKSB7XG4gICAgICAgICAgaWYgKG1vZGlmaWVycy5pbmRleE9mKCd0cmltJykgIT09IC0xKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmluZGV4T2YoJ251bWJlcicpICE9PSAtMSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9uKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgIHRhcmdldCA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgfTtcblxuICAgICAgVnVlLnByb3RvdHlwZS5fX3NldF9zeW5jID0gZnVuY3Rpb24gKHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgIHRhcmdldCA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgfTtcblxuICAgICAgVnVlLnByb3RvdHlwZS5fX2dldF9vcmlnID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QoaXRlbSkpIHtcbiAgICAgICAgICByZXR1cm4gaXRlbVsnJG9yaWcnXSB8fCBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9O1xuXG4gICAgICBWdWUucHJvdG90eXBlLl9fZ2V0X3ZhbHVlID0gZnVuY3Rpb24gKGRhdGFQYXRoLCB0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIGdldFRhcmdldCh0YXJnZXQgfHwgdGhpcywgZGF0YVBhdGgpO1xuICAgICAgfTtcblxuICAgICAgVnVlLnByb3RvdHlwZS5fX2dldF9jbGFzcyA9IGZ1bmN0aW9uIChkeW5hbWljQ2xhc3MsIHN0YXRpY0NsYXNzKSB7XG4gICAgICAgIHJldHVybiByZW5kZXJDbGFzcyhzdGF0aWNDbGFzcywgZHluYW1pY0NsYXNzKTtcbiAgICAgIH07XG5cbiAgICAgIFZ1ZS5wcm90b3R5cGUuX19nZXRfc3R5bGUgPSBmdW5jdGlvbiAoZHluYW1pY1N0eWxlLCBzdGF0aWNTdHlsZSkge1xuICAgICAgICBpZiAoIWR5bmFtaWNTdHlsZSAmJiAhc3RhdGljU3R5bGUpIHtcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZHluYW1pY1N0eWxlT2JqID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKGR5bmFtaWNTdHlsZSk7XG4gICAgICAgIHZhciBzdHlsZU9iaiA9IHN0YXRpY1N0eWxlID8gZXh0ZW5kKHN0YXRpY1N0eWxlLCBkeW5hbWljU3R5bGVPYmopIDogZHluYW1pY1N0eWxlT2JqO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVPYmopLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIHJldHVybiBoeXBoZW5hdGUobmFtZSkgKyBcIjpcIiArIHN0eWxlT2JqW25hbWVdO1xuICAgICAgICB9KS5qb2luKCc7Jyk7XG4gICAgICB9O1xuXG4gICAgICBWdWUucHJvdG90eXBlLl9fbWFwID0gZnVuY3Rpb24gKHZhbCwgaXRlcmF0ZWUpIHtcbiAgICAgICAgLy9UT0RPIOaaguS4jeiAg+iZkSBzdHJpbmdcbiAgICAgICAgdmFyIHJldCwgaSwgbCwga2V5cywga2V5O1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICByZXQgPSBuZXcgQXJyYXkodmFsLmxlbmd0aCk7XG5cbiAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gdmFsLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgcmV0W2ldID0gaXRlcmF0ZWUodmFsW2ldLCBpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICAgICAgICByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgICAgICAgZm9yIChpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgcmV0W2tleV0gPSBpdGVyYXRlZSh2YWxba2V5XSwga2V5LCBpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0ID0gbmV3IEFycmF5KHZhbCk7XG5cbiAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gdmFsOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAvLyDnrKzkuIDkuKrlj4LmlbDmmoLml7bku43lkozlsI/nqIvluo/kuIDoh7RcbiAgICAgICAgICAgIHJldFtpXSA9IGl0ZXJhdGVlKGksIGkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW107XG4gICAgICB9O1xuICAgIH1cbiAgICAvKiAgKi9cblxuXG4gICAgdmFyIExJRkVDWUNMRV9IT09LUyQxID0gWy8vQXBwXG4gICAgJ29uTGF1bmNoJywgJ29uU2hvdycsICdvbkhpZGUnLCAnb25VbmlOVmlld01lc3NhZ2UnLCAnb25QYWdlTm90Rm91bmQnLCAnb25UaGVtZUNoYW5nZScsICdvbkVycm9yJywgJ29uVW5oYW5kbGVkUmVqZWN0aW9uJywgLy9QYWdlXG4gICAgJ29uTG9hZCcsIC8vICdvblNob3cnLFxuICAgICdvblJlYWR5JywgLy8gJ29uSGlkZScsXG4gICAgJ29uVW5sb2FkJywgJ29uUHVsbERvd25SZWZyZXNoJywgJ29uUmVhY2hCb3R0b20nLCAnb25UYWJJdGVtVGFwJywgJ29uQWRkVG9GYXZvcml0ZXMnLCAnb25TaGFyZVRpbWVsaW5lJywgJ29uU2hhcmVBcHBNZXNzYWdlJywgJ29uUmVzaXplJywgJ29uUGFnZVNjcm9sbCcsICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnLCAnb25CYWNrUHJlc3MnLCAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJywgJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJywgJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcsIC8vQ29tcG9uZW50XG4gICAgLy8gJ29uUmVhZHknLCAvLyDlhbzlrrnml6fniYjmnKzvvIzlupTor6Xnp7vpmaTor6Xkuovku7ZcbiAgICAnb25QYWdlU2hvdycsICdvblBhZ2VIaWRlJywgJ29uUGFnZVJlc2l6ZSddO1xuXG4gICAgZnVuY3Rpb24gbGlmZWN5Y2xlTWl4aW4kMShWdWUpIHtcbiAgICAgIC8vZml4ZWQgdnVlLWNsYXNzLWNvbXBvbmVudFxuICAgICAgdmFyIG9sZEV4dGVuZCA9IFZ1ZS5leHRlbmQ7XG5cbiAgICAgIFZ1ZS5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5kT3B0aW9ucykge1xuICAgICAgICBleHRlbmRPcHRpb25zID0gZXh0ZW5kT3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdmFyIG1ldGhvZHMgPSBleHRlbmRPcHRpb25zLm1ldGhvZHM7XG5cbiAgICAgICAgaWYgKG1ldGhvZHMpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhtZXRob2RzKS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAgICAgICAgICBpZiAoTElGRUNZQ0xFX0hPT0tTJDEuaW5kZXhPZihtZXRob2ROYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgZXh0ZW5kT3B0aW9uc1ttZXRob2ROYW1lXSA9IG1ldGhvZHNbbWV0aG9kTmFtZV07XG4gICAgICAgICAgICAgIGRlbGV0ZSBtZXRob2RzW21ldGhvZE5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9sZEV4dGVuZC5jYWxsKHRoaXMsIGV4dGVuZE9wdGlvbnMpO1xuICAgICAgfTtcblxuICAgICAgdmFyIHN0cmF0ZWdpZXMgPSBWdWUuY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztcbiAgICAgIHZhciBtZXJnZUhvb2sgPSBzdHJhdGVnaWVzLmNyZWF0ZWQ7XG4gICAgICBMSUZFQ1lDTEVfSE9PS1MkMS5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgIHN0cmF0ZWdpZXNbaG9va10gPSBtZXJnZUhvb2s7XG4gICAgICB9KTtcbiAgICAgIFZ1ZS5wcm90b3R5cGUuX19saWZlY3ljbGVfaG9va3NfXyA9IExJRkVDWUNMRV9IT09LUyQxO1xuICAgIH1cbiAgICAvKiAgKi9cbiAgICAvLyBpbnN0YWxsIHBsYXRmb3JtIHBhdGNoIGZ1bmN0aW9uXG5cblxuICAgIFZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fID0gcGF0Y2g7IC8vIHB1YmxpYyBtb3VudCBtZXRob2RcblxuICAgIFZ1ZS5wcm90b3R5cGUuJG1vdW50ID0gZnVuY3Rpb24gKGVsLCBoeWRyYXRpbmcpIHtcbiAgICAgIHJldHVybiBtb3VudENvbXBvbmVudCQxKHRoaXMsIGVsLCBoeWRyYXRpbmcpO1xuICAgIH07XG5cbiAgICBsaWZlY3ljbGVNaXhpbiQxKFZ1ZSk7XG4gICAgaW50ZXJuYWxNaXhpbihWdWUpO1xuICAgIC8qICAqL1xuXG4gICAgLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqL1xuXG4gICAgX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSBWdWU7XG4gICAgLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovXG4gIH0pLmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgLyohIC4vLi4vLi4vLi4vLi4vLi4vd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyAqL1xuICAzKSk7XG4gIC8qKiovXG59LFxuLyogMyAqL1xuXG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cblxuLyoqKi9cbmZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbiAgdmFyIGc7IC8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5cbiAgZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSgpO1xuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG4gICAgZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG4gICAgaWYgKCh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMltcImRlZmF1bHRcIl0pKHdpbmRvdykpID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xuICB9IC8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbiAgLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcbiAgLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBnO1xuICAvKioqL1xufSxcbi8qIDQgKi9cblxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIEM6L1VzZXJzL3Joc3cvRGVza3RvcC/mlrDlu7rmlofku7blpLkgKDYpL2JlYXV0eS1jYWxlbmRhci9wYWdlcy5qc29uICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuXG4vKioqL1xuZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuICAvKioqL1xufSwsLCwsLFxuLyogNSAqL1xuXG4vKiA2ICovXG5cbi8qIDcgKi9cblxuLyogOCAqL1xuXG4vKiA5ICovXG5cbi8qIDEwICovXG5cbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG5cbi8qKiovXG5mdW5jdGlvbiAobW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIF9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiAgLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovXG5cblxuICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplQ29tcG9uZW50O1xuICB9KTtcbiAgLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG4gIC8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuICAvLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuICAvLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudChzY3JpcHRFeHBvcnRzLCByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgZnVuY3Rpb25hbFRlbXBsYXRlLCBpbmplY3RTdHlsZXMsIHNjb3BlSWQsIG1vZHVsZUlkZW50aWZpZXIsXG4gIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUsXG4gIC8qIHZ1ZS1jbGkgb25seSAqL1xuICBjb21wb25lbnRzLCAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIHJlbmRlcmpzIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuICApIHtcbiAgICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJyA/IHNjcmlwdEV4cG9ydHMub3B0aW9ucyA6IHNjcmlwdEV4cG9ydHM7IC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcblxuICAgIGlmIChjb21wb25lbnRzKSB7XG4gICAgICBpZiAoIW9wdGlvbnMuY29tcG9uZW50cykge1xuICAgICAgICBvcHRpb25zLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgICAgIGZvciAodmFyIG5hbWUgaW4gY29tcG9uZW50cykge1xuICAgICAgICBpZiAoaGFzT3duLmNhbGwoY29tcG9uZW50cywgbmFtZSkgJiYgIWhhc093bi5jYWxsKG9wdGlvbnMuY29tcG9uZW50cywgbmFtZSkpIHtcbiAgICAgICAgICBvcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnRzW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcblxuXG4gICAgaWYgKHJlbmRlcmpzKSB7XG4gICAgICAocmVuZGVyanMuYmVmb3JlQ3JlYXRlIHx8IChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgPSBbXSkpLnVuc2hpZnQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzW3JlbmRlcmpzLl9fbW9kdWxlXSA9IHRoaXM7XG4gICAgICB9KTtcbiAgICAgIChvcHRpb25zLm1peGlucyB8fCAob3B0aW9ucy5taXhpbnMgPSBbXSkpLnB1c2gocmVuZGVyanMpO1xuICAgIH0gLy8gcmVuZGVyIGZ1bmN0aW9uc1xuXG5cbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlcjtcbiAgICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zO1xuICAgICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlO1xuICAgIH0gLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuXG5cbiAgICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlO1xuICAgIH0gLy8gc2NvcGVkSWRcblxuXG4gICAgaWYgKHNjb3BlSWQpIHtcbiAgICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkO1xuICAgIH1cblxuICAgIHZhciBob29rO1xuXG4gICAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHtcbiAgICAgIC8vIHNlcnZlciBidWlsZFxuICAgICAgaG9vayA9IGZ1bmN0aW9uIGhvb2soY29udGV4dCkge1xuICAgICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgIHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0OyAvLyBmdW5jdGlvbmFsXG4gICAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuXG4gICAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfXztcbiAgICAgICAgfSAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuXG5cbiAgICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICAgICAgICB9IC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuXG5cbiAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH07IC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuXG5cbiAgICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9vaztcbiAgICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgaG9vayA9IHNoYWRvd01vZGUgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCk7XG4gICAgICB9IDogaW5qZWN0U3R5bGVzO1xuICAgIH1cblxuICAgIGlmIChob29rKSB7XG4gICAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9vazsgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcblxuICAgICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcblxuICAgICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbihoLCBjb250ZXh0KSB7XG4gICAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpO1xuICAgICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlO1xuICAgICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKSA6IFtob29rXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICB9O1xuICB9XG4gIC8qKiovXG5cbn1dXSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbihnbG9iYWxbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBnbG9iYWxbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW10pLnB1c2goW1tcImNvbXBvbmVudHMvYmVhdXR5LWNhbGVuZGFyL2JlYXV0eS1jYWxlbmRhclwiXSwge1xuICAvKioqL1xuICAxOTpcbiAgLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAgICEqKiogQzovVXNlcnMvcmhzdy9EZXNrdG9wL+aWsOW7uuaWh+S7tuWkuSAoNikvYmVhdXR5LWNhbGVuZGFyL2NvbXBvbmVudHMvYmVhdXR5LWNhbGVuZGFyL2JlYXV0eS1jYWxlbmRhci52dWUgKioqIVxuICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuXG4gIC8qKiovXG4gIGZ1bmN0aW9uIF8obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4gICAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gICAgdmFyIF9iZWF1dHlfY2FsZW5kYXJfdnVlX3Z1ZV90eXBlX3RlbXBsYXRlX2lkXzE0MjliYWU0X3Njb3BlZF90cnVlX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAvKiEgLi9iZWF1dHktY2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0MjliYWU0JnNjb3BlZD10cnVlJiAqL1xuICAgIDIwKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgICB2YXIgX2JlYXV0eV9jYWxlbmRhcl92dWVfdnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFxuICAgIC8qISAuL2JlYXV0eS1jYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmICovXG4gICAgMjIpO1xuICAgIC8qIGhhcm1vbnkgcmVleHBvcnQgKHVua25vd24pICovXG5cblxuICAgIGZvciAodmFyIF9fV0VCUEFDS19JTVBPUlRfS0VZX18gaW4gX2JlYXV0eV9jYWxlbmRhcl92dWVfdnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18pIHtcbiAgICAgIGlmIChfX1dFQlBBQ0tfSU1QT1JUX0tFWV9fICE9PSAnZGVmYXVsdCcpIChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBrZXksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX2JlYXV0eV9jYWxlbmRhcl92dWVfdnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19ba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICB9KShfX1dFQlBBQ0tfSU1QT1JUX0tFWV9fKTtcbiAgICB9XG4gICAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gICAgdmFyIF9iZWF1dHlfY2FsZW5kYXJfdnVlX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzBfaWRfMTQyOWJhZTRfbGFuZ19zY3NzX3Njb3BlZF90cnVlX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAvKiEgLi9iZWF1dHktY2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTQyOWJhZTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJiAqL1xuICAgIDI0KTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgICB2YXIgX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfcnVudGltZV9jb21wb25lbnROb3JtYWxpemVyX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFxuICAgIC8qISAuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyAqL1xuICAgIDEwKTtcblxuICAgIHZhciByZW5kZXJqcztcbiAgICAvKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5cbiAgICB2YXIgY29tcG9uZW50ID0gT2JqZWN0KF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX3J1bnRpbWVfY29tcG9uZW50Tm9ybWFsaXplcl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fW1wiZGVmYXVsdFwiXSkoX2JlYXV0eV9jYWxlbmRhcl92dWVfdnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdLCBfYmVhdXR5X2NhbGVuZGFyX3Z1ZV92dWVfdHlwZV90ZW1wbGF0ZV9pZF8xNDI5YmFlNF9zY29wZWRfdHJ1ZV9fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcInJlbmRlclwiXSwgX2JlYXV0eV9jYWxlbmRhcl92dWVfdnVlX3R5cGVfdGVtcGxhdGVfaWRfMTQyOWJhZTRfc2NvcGVkX3RydWVfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJzdGF0aWNSZW5kZXJGbnNcIl0sIGZhbHNlLCBudWxsLCBcIjE0MjliYWU0XCIsIG51bGwsIGZhbHNlLCBfYmVhdXR5X2NhbGVuZGFyX3Z1ZV92dWVfdHlwZV90ZW1wbGF0ZV9pZF8xNDI5YmFlNF9zY29wZWRfdHJ1ZV9fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImNvbXBvbmVudHNcIl0sIHJlbmRlcmpzKTtcbiAgICBjb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYmVhdXR5LWNhbGVuZGFyL2JlYXV0eS1jYWxlbmRhci52dWVcIjtcbiAgICAvKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovXG5cbiAgICBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IGNvbXBvbmVudC5leHBvcnRzO1xuICAgIC8qKiovXG4gIH0sXG5cbiAgLyoqKi9cbiAgMjA6XG4gIC8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgISoqKiBDOi9Vc2Vycy9yaHN3L0Rlc2t0b3Av5paw5bu65paH5Lu25aS5ICg2KS9iZWF1dHktY2FsZW5kYXIvY29tcG9uZW50cy9iZWF1dHktY2FsZW5kYXIvYmVhdXR5LWNhbGVuZGFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDI5YmFlNCZzY29wZWQ9dHJ1ZSYgKioqIVxuICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKiEgZXhwb3J0cyBwcm92aWRlZDogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgKi9cblxuICAvKioqL1xuICBmdW5jdGlvbiBfKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovXG5cblxuICAgIHZhciBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3RlbXBsYXRlTG9hZGVyX2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzE2XzBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfdGVtcGxhdGVfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3VuaV9hcHBfbG9hZGVyX3BhZ2VfbWV0YV9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zdHlsZV9qc19iZWF1dHlfY2FsZW5kYXJfdnVlX3Z1ZV90eXBlX3RlbXBsYXRlX2lkXzE0MjliYWU0X3Njb3BlZF90cnVlX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAvKiEgLSEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXI/P3JlZi0tMTYtMCEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWI/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2JlYXV0eS1jYWxlbmRhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQyOWJhZTQmc2NvcGVkPXRydWUmICovXG4gICAgMjEpO1xuICAgIC8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovXG5cblxuICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInJlbmRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc190ZW1wbGF0ZUxvYWRlcl9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl8xNl8wX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3RlbXBsYXRlX2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfd2VicGFja191bmlfYXBwX2xvYWRlcl9wYWdlX21ldGFfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc3R5bGVfanNfYmVhdXR5X2NhbGVuZGFyX3Z1ZV92dWVfdHlwZV90ZW1wbGF0ZV9pZF8xNDI5YmFlNF9zY29wZWRfdHJ1ZV9fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcInJlbmRlclwiXTtcbiAgICB9KTtcbiAgICAvKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqL1xuXG5cbiAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJzdGF0aWNSZW5kZXJGbnNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfdGVtcGxhdGVMb2FkZXJfanNfdnVlX2xvYWRlcl9vcHRpb25zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfd2VicGFja19wcmVwcm9jZXNzX2xvYWRlcl9pbmRleF9qc19yZWZfMTZfMF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl90ZW1wbGF0ZV9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfdW5pX2FwcF9sb2FkZXJfcGFnZV9tZXRhX2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3N0eWxlX2pzX2JlYXV0eV9jYWxlbmRhcl92dWVfdnVlX3R5cGVfdGVtcGxhdGVfaWRfMTQyOWJhZTRfc2NvcGVkX3RydWVfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJzdGF0aWNSZW5kZXJGbnNcIl07XG4gICAgfSk7XG4gICAgLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi9cblxuXG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwicmVjeWNsYWJsZVJlbmRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc190ZW1wbGF0ZUxvYWRlcl9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl8xNl8wX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3RlbXBsYXRlX2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfd2VicGFja191bmlfYXBwX2xvYWRlcl9wYWdlX21ldGFfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc3R5bGVfanNfYmVhdXR5X2NhbGVuZGFyX3Z1ZV92dWVfdHlwZV90ZW1wbGF0ZV9pZF8xNDI5YmFlNF9zY29wZWRfdHJ1ZV9fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcInJlY3ljbGFibGVSZW5kZXJcIl07XG4gICAgfSk7XG4gICAgLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi9cblxuXG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiY29tcG9uZW50c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc190ZW1wbGF0ZUxvYWRlcl9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl8xNl8wX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3RlbXBsYXRlX2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfd2VicGFja191bmlfYXBwX2xvYWRlcl9wYWdlX21ldGFfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc3R5bGVfanNfYmVhdXR5X2NhbGVuZGFyX3Z1ZV92dWVfdHlwZV90ZW1wbGF0ZV9pZF8xNDI5YmFlNF9zY29wZWRfdHJ1ZV9fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImNvbXBvbmVudHNcIl07XG4gICAgfSk7XG4gICAgLyoqKi9cblxuICB9LFxuXG4gIC8qKiovXG4gIDIxOlxuICAvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAgICEqKiogLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyPz9yZWYtLTE2LTAhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhQzovVXNlcnMvcmhzdy9EZXNrdG9wL+aWsOW7uuaWh+S7tuWkuSAoNikvYmVhdXR5LWNhbGVuZGFyL2NvbXBvbmVudHMvYmVhdXR5LWNhbGVuZGFyL2JlYXV0eS1jYWxlbmRhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQyOWJhZTQmc2NvcGVkPXRydWUmICoqKiFcbiAgICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyohIGV4cG9ydHMgcHJvdmlkZWQ6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzICovXG5cbiAgLyoqKi9cbiAgZnVuY3Rpb24gXyhtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIF9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiAgICAvKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi9cblxuXG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwicmVuZGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZW5kZXI7XG4gICAgfSk7XG4gICAgLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovXG5cblxuICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInN0YXRpY1JlbmRlckZuc1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc3RhdGljUmVuZGVyRm5zO1xuICAgIH0pO1xuICAgIC8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqL1xuXG5cbiAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJyZWN5Y2xhYmxlUmVuZGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWN5Y2xhYmxlUmVuZGVyO1xuICAgIH0pO1xuICAgIC8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqL1xuXG5cbiAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJjb21wb25lbnRzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH0pO1xuXG4gICAgdmFyIGNvbXBvbmVudHM7XG5cbiAgICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF92bSA9IHRoaXM7XG5cbiAgICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudDtcblxuICAgICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oO1xuXG4gICAgICB2YXIgZzAgPSBfdm0uc2hvdyAmJiAhKF92bS5waWNrZXJBcnJheS5sZW5ndGggPT0gMCkgJiYgX3ZtLnBpY2tlckFycmF5Lmxlbmd0aCA9PSAxICYmIF92bS5tdWx0aSA9PSBmYWxzZSA/IF92bS5waWNrZXJBcnJheVswXS5zbGljZSg1KS5yZXBsYWNlKFwiL1wiLCBcIuaciFwiKSA6IG51bGw7XG4gICAgICB2YXIgZzEgPSBfdm0uc2hvdyAmJiAhKF92bS5waWNrZXJBcnJheS5sZW5ndGggPT0gMCkgJiYgIShfdm0ucGlja2VyQXJyYXkubGVuZ3RoID09IDEgJiYgX3ZtLm11bHRpID09IGZhbHNlKSA/IF92bS5waWNrZXJBcnJheVswXS5zbGljZSg1KS5yZXBsYWNlKFwiL1wiLCBcIuaciFwiKSA6IG51bGw7XG4gICAgICB2YXIgZzIgPSBfdm0uc2hvdyAmJiAhKF92bS5waWNrZXJBcnJheS5sZW5ndGggPT0gMCkgJiYgIShfdm0ucGlja2VyQXJyYXkubGVuZ3RoID09IDEgJiYgX3ZtLm11bHRpID09IGZhbHNlKSAmJiBfdm0ucGlja2VyQXJyYXlbMV0gIT0gbnVsbCA/IF92bS5waWNrZXJBcnJheVsxXS5zbGljZSg1KS5yZXBsYWNlKFwiL1wiLCBcIuaciFwiKSA6IG51bGw7XG4gICAgICB2YXIgbDEgPSBfdm0uc2hvdyA/IF92bS5fX21hcChfdm0uY2FsZW5kYXJFbXB0eVRlbXBBcnJheSwgZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgICAgdmFyICRvcmlnID0gX3ZtLl9fZ2V0X29yaWcodik7XG5cbiAgICAgICAgdmFyIG0wID0gX3ZtLnByZWZpeFplcm8odlsyXSk7XG5cbiAgICAgICAgdmFyIG0yID0gX3ZtLnByZWZpeFplcm8odlsyXSk7XG5cbiAgICAgICAgdmFyIG00ID0gX3ZtLnByZWZpeFplcm8odlsyXSk7XG5cbiAgICAgICAgdmFyIG02ID0gX3ZtLnByZWZpeFplcm8odlsyXSk7XG5cbiAgICAgICAgdmFyIG04ID0gX3ZtLnByZWZpeFplcm8odlsyXSk7XG5cbiAgICAgICAgdmFyIG0xMCA9IF92bS5wcmVmaXhaZXJvKHZbMl0pO1xuXG4gICAgICAgIHZhciBtMTIgPSBfdm0ucHJlZml4WmVybyh2WzJdKTtcblxuICAgICAgICB2YXIgbDAgPSBfdm0uX19tYXAodls0XSwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICB2YXIgJG9yaWcgPSBfdm0uX19nZXRfb3JpZyhkKTtcblxuICAgICAgICAgIHZhciBtMSA9IF92bS5wcmVmaXhaZXJvKGkgKyAxKTtcblxuICAgICAgICAgIHZhciBtMyA9IF92bS5wcmVmaXhaZXJvKGkgKyAxKTtcblxuICAgICAgICAgIHZhciBtNSA9IF92bS5wcmVmaXhaZXJvKGkgKyAxKTtcblxuICAgICAgICAgIHZhciBtNyA9IF92bS5wcmVmaXhaZXJvKGkgKyAxKTtcblxuICAgICAgICAgIHZhciBtOSA9IF92bS5wcmVmaXhaZXJvKGkgKyAxKTtcblxuICAgICAgICAgIHZhciBtMTEgPSBfdm0ucHJlZml4WmVybyhpICsgMSk7XG5cbiAgICAgICAgICB2YXIgbTEzID0gX3ZtLnByZWZpeFplcm8oaSArIDEpO1xuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRvcmlnOiAkb3JpZyxcbiAgICAgICAgICAgIG0xOiBtMSxcbiAgICAgICAgICAgIG0zOiBtMyxcbiAgICAgICAgICAgIG01OiBtNSxcbiAgICAgICAgICAgIG03OiBtNyxcbiAgICAgICAgICAgIG05OiBtOSxcbiAgICAgICAgICAgIG0xMTogbTExLFxuICAgICAgICAgICAgbTEzOiBtMTNcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICRvcmlnOiAkb3JpZyxcbiAgICAgICAgICBtMDogbTAsXG4gICAgICAgICAgbTI6IG0yLFxuICAgICAgICAgIG00OiBtNCxcbiAgICAgICAgICBtNjogbTYsXG4gICAgICAgICAgbTg6IG04LFxuICAgICAgICAgIG0xMDogbTEwLFxuICAgICAgICAgIG0xMjogbTEyLFxuICAgICAgICAgIGwwOiBsMFxuICAgICAgICB9O1xuICAgICAgfSkgOiBudWxsO1xuICAgICAgX3ZtLiRtcC5kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICAkcm9vdDoge1xuICAgICAgICAgIGcwOiBnMCxcbiAgICAgICAgICBnMTogZzEsXG4gICAgICAgICAgZzI6IGcyLFxuICAgICAgICAgIGwxOiBsMVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZTtcbiAgICB2YXIgc3RhdGljUmVuZGVyRm5zID0gW107XG4gICAgcmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlO1xuICAgIC8qKiovXG4gIH0sXG5cbiAgLyoqKi9cbiAgMjI6XG4gIC8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgISoqKiBDOi9Vc2Vycy9yaHN3L0Rlc2t0b3Av5paw5bu65paH5Lu25aS5ICg2KS9iZWF1dHktY2FsZW5kYXIvY29tcG9uZW50cy9iZWF1dHktY2FsZW5kYXIvYmVhdXR5LWNhbGVuZGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYgKioqIVxuICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cblxuICAvKioqL1xuICBmdW5jdGlvbiBfKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovXG5cblxuICAgIHZhciBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2JhYmVsX2xvYWRlcl9saWJfaW5kZXhfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl8xMl8xX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3NjcmlwdF9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zdHlsZV9qc19iZWF1dHlfY2FsZW5kYXJfdnVlX3Z1ZV90eXBlX3NjcmlwdF9sYW5nX2pzX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAvKiEgLSEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlcj8/cmVmLS0xMi0xIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9iZWF1dHktY2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJiAqL1xuICAgIDIzKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgICB2YXIgX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19iYWJlbF9sb2FkZXJfbGliX2luZGV4X2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfd2VicGFja19wcmVwcm9jZXNzX2xvYWRlcl9pbmRleF9qc19yZWZfMTJfMV9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zY3JpcHRfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc3R5bGVfanNfYmVhdXR5X2NhbGVuZGFyX3Z1ZV92dWVfdHlwZV9zY3JpcHRfbGFuZ19qc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2JhYmVsX2xvYWRlcl9saWJfaW5kZXhfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl8xMl8xX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3NjcmlwdF9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zdHlsZV9qc19iZWF1dHlfY2FsZW5kYXJfdnVlX3Z1ZV90eXBlX3NjcmlwdF9sYW5nX2pzX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcbiAgICAvKiBoYXJtb255IHJlZXhwb3J0ICh1bmtub3duKSAqL1xuXG5cbiAgICBmb3IgKHZhciBfX1dFQlBBQ0tfSU1QT1JUX0tFWV9fIGluIF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfYmFiZWxfbG9hZGVyX2xpYl9pbmRleF9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzEyXzFfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc2NyaXB0X2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3N0eWxlX2pzX2JlYXV0eV9jYWxlbmRhcl92dWVfdnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pIHtcbiAgICAgIGlmIChfX1dFQlBBQ0tfSU1QT1JUX0tFWV9fICE9PSAnZGVmYXVsdCcpIChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBrZXksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19iYWJlbF9sb2FkZXJfbGliX2luZGV4X2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfd2VicGFja19wcmVwcm9jZXNzX2xvYWRlcl9pbmRleF9qc19yZWZfMTJfMV9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zY3JpcHRfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc3R5bGVfanNfYmVhdXR5X2NhbGVuZGFyX3Z1ZV92dWVfdHlwZV9zY3JpcHRfbGFuZ19qc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1trZXldO1xuICAgICAgICB9KTtcbiAgICAgIH0pKF9fV0VCUEFDS19JTVBPUlRfS0VZX18pO1xuICAgIH1cbiAgICAvKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovXG5cblxuICAgIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19iYWJlbF9sb2FkZXJfbGliX2luZGV4X2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfd2VicGFja19wcmVwcm9jZXNzX2xvYWRlcl9pbmRleF9qc19yZWZfMTJfMV9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zY3JpcHRfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc3R5bGVfanNfYmVhdXR5X2NhbGVuZGFyX3Z1ZV92dWVfdHlwZV9zY3JpcHRfbGFuZ19qc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmE7XG4gICAgLyoqKi9cbiAgfSxcblxuICAvKioqL1xuICAyMzpcbiAgLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgISoqKiAuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlcj8/cmVmLS0xMi0xIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhQzovVXNlcnMvcmhzdy9EZXNrdG9wL+aWsOW7uuaWh+S7tuWkuSAoNikvYmVhdXR5LWNhbGVuZGFyL2NvbXBvbmVudHMvYmVhdXR5LWNhbGVuZGFyL2JlYXV0eS1jYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmICoqKiFcbiAgICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuXG4gIC8qKiovXG4gIGZ1bmN0aW9uIF8obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSk7XG4gICAgZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbiAgICBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgICAgIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICAgICAgaWYgKCFvKSByZXR1cm47XG4gICAgICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICAgICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICAgICAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgICAgIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICAgICAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gICAgICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnIyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICAgICAgdmFyIF9hcnIgPSBbXTtcbiAgICAgIHZhciBfbiA9IHRydWU7XG4gICAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZCA9IHRydWU7XG4gICAgICAgIF9lID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2FycjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xuICAgIH0gLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG5cbiAgICAvKlxyXG4gICAgKiBAZGVzY3JpcHRpb24g57uE5Lu25Y+v5Lul5a+55pel5pyf6L+b6KGM5Y2V6YCJ77yM5aSa6YCJ77yM5L2/55So6YWS5bqX6aKE5a6a44CB6aOe5py656Wo54Gr6L2m56Wo6aKE5a6aXHJcbiAgICAqIEBfX2F1dGhvcl9fOlNvcnJ5X2h4LCBfX2VtYWlsX186MTMxNzIwNTA3MkBxcS5jb21cclxuICAgICogQHByb3BlcnR5IHtTdHJpbmd9IHN0YXJEYXRlIOWNlemAieS4uumAieS4reaXpeacn++8jOWkmumAieS4uumAieS4reW8gOWni+aXpeacn++8jOm7mOiupOmAieaLqeS4uuS7iuWkqe+8jOmcgOimgWF1dG9DaG9vc2UgPSB0cnVlLCBZWVlZL01NL0REXHJcbiAgICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBlbmREYXRlIOWNlemAieaXoOaViO+8jOWkmumAieS4uumAieS4ree7k+adn+aXpeacn++8jOm7mOiupOmAieaLqeS4uuaYjuWkqe+8jCDpnIDopoFhdXRvQ2hvb3NlID0gdHJ1ZSwgWVlZWS9NTS9ERFxyXG4gICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IG11bHRpIOWkmumAieaooeW8j1xyXG4gICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGF1dG9DaG9vc2Ug6Ieq5Yqo6YCJ5oup6L6T5YWl5pel5pyf77yM6buY6K6k5Li6ZmFsc2VcclxuICAgICogQHByb3BlcnR5IHtCb29sZWFufSBhdXRvQ2xlYXIg5L+d5a2Y6Ieq5Yqo5riF6Zmk6YCJ5oup77yM6buY6K6k5Li6dHJ1ZVxyXG4gICAgKiBAcHJvcGVydHkge051bWJlcn0gcmFuZ2Ug5pel5Y6G5pyI5Lu95pWw77yM6Ieq5pys5pyI6LW355qE5b6A5ZCO5Yeg5Liq5pyI55qE5pel5Y6G77yM6buY6K6k5Li6MTPkuKrmnIjvvIzljbPmmI7lubTnmoTmnKzmnIhcclxuICAgICogQGV2ZW50IHtBcnJheX0gY2hhbmdlIOinpuWPkWNoYW5nZeaXtumXtO+8jOi/lOWbnuaXpeacn+aVsOe7hFxyXG4gICAgKi9cblxuXG4gICAgdmFyIF9kZWZhdWx0ID0ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgc3RhcnREYXRlOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBlbmREYXRlOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBtdWx0aToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYXV0b0Nob29zZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGF1dG9DbGVhcjoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IDEzXG4gICAgICAgIH0gLy8g6buY6K6k5pi+56S66Iez5LiL5bm05pys5pyI5pel5Y6GLFxuXG4gICAgICB9LFxuICAgICAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3ZWVrQXJyYXk6IFsn5ZGo5pelJywgJ+WRqOS4gCcsICflkajkuownLCAn5ZGo5LiJJywgJ+WRqOWbmycsICflkajkupQnLCAn5ZGo5YWtJ10sXG4gICAgICAgICAgbW9udGhEYXlzQXJyYXk6IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXSxcbiAgICAgICAgICB5ZWFyOiAxOTcwLFxuICAgICAgICAgIG1vbnRoOiAxLFxuICAgICAgICAgIGRhdGU6IDEsXG4gICAgICAgICAgd2Vla0RheTogMCxcbiAgICAgICAgICBjYWxlbmRhckVtcHR5VGVtcEFycmF5OiBbXSxcbiAgICAgICAgICAvLyBb5pyI5Lu956ys5LiA5aSp57Si5byV77yM5pyI5Lu95pyA5ZCO5LiA5aSp5Li05pe25Y+Y6YePLCDmnIjku73vvIzlubTku70u5b2T5pyI5aSp5pWwXVxuICAgICAgICAgIHBpY2tlckFycmF5OiBbXSxcbiAgICAgICAgICAvLyDpgInmi6nml6XmnJ/nmoTlvIDlp4vkuI7nu5PmnZ9cbiAgICAgICAgICBwaWNrZXJTdGFydERhdGU6ICcnLFxuICAgICAgICAgIHBpY2tlckVuZERhdGU6ICcnLFxuICAgICAgICAgIHRvZGF5OiAnJyxcbiAgICAgICAgICByYW5nZUFycmF5OiBbXSxcbiAgICAgICAgICBwaWNrZXJTdGFtcDogMCxcbiAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGNvbXB1dGVkOiB7fSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0Q2FsZW5kYXI6IGZ1bmN0aW9uIGdldENhbGVuZGFyKCkge1xuICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICB0aGlzLnllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgdGhpcy51cGRhdGVGZWJydWFyeWRheXModGhpcy55ZWFyKTtcbiAgICAgICAgICB0aGlzLm1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICB0aGlzLndlZWtEYXkgPSBkYXRlLmdldERheSgpO1xuICAgICAgICAgIHRoaXMudG9kYXkgPSB0aGlzLmdldERhdGUoZGF0ZSk7XG4gICAgICAgICAgdmFyIHRvbW9ycm93RGF0ZSA9IHRoaXMuZ2V0RGF0ZShuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcblxuICAgICAgICAgIGlmICh0aGlzLm11bHRpICYmIHRoaXMuYXV0b0Nob29zZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnREYXRlICE9ICcnICYmIHRoaXMuZW5kRGF0ZSAhPSAnJyAmJiB0aGlzLnN0YXJ0RGF0ZSA8IHRoaXMuZW5kRGF0ZSAmJiB0aGlzLnN0YXJ0RGF0ZS5yZXBsYWNlKC8tL2csICcvJykgPj0gdGhpcy50b2RheSkge1xuICAgICAgICAgICAgICB0aGlzLnBpY2tlckFycmF5ID0gW3RoaXMuc3RhcnREYXRlLnJlcGxhY2UoLy0vZywgJy8nKSwgdGhpcy5lbmREYXRlLnJlcGxhY2UoLy0vZywgJy8nKV07XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGlja2VyQXJyYXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5waWNrZXJBcnJheSA9IFt0aGlzLnRvZGF5LCB0b21vcnJvd0RhdGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMubXVsdGkgJiYgdGhpcy5hdXRvQ2hvb3NlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGFydERhdGUgIT0gJycgJiYgdGhpcy5zdGFydERhdGUucmVwbGFjZSgvLS9nLCAnLycpID49IHRoaXMudG9kYXkpIHtcbiAgICAgICAgICAgICAgdGhpcy5waWNrZXJBcnJheSA9IFt0aGlzLnN0YXJ0RGF0ZS5yZXBsYWNlKC8tL2csICcvJyldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5waWNrZXJBcnJheSA9IFt0aGlzLnRvZGF5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZmlyc3REYXkgPSBuZXcgRGF0ZShcIlwiLmNvbmNhdCh0aGlzLnllYXIsIFwiLVwiKS5jb25jYXQodGhpcy5tb250aCwgXCItMDFcIikpLmdldERheSgpOyAvL+iOt+WPluacrOaciOesrOS4gOWkqVxuICAgICAgICAgIC8vIOiOt+WPluaOpeS4i+adpeaciOS7veeahOaVsOe7hO+8jOeUqOS6jua4suafk+aXpeWOhiBb5pyI5Lu956ys5LiA5aSp57Si5byV77yM5pyI5Lu95pyA5ZCO5LiA5aSp5Li05pe25Y+Y6YePLCDmnIjku73vvIzlubTku70u5b2T5pyI5aSp5pWwXVxuXG4gICAgICAgICAgdmFyIG1vbnRoOyAvLyDkuLTml7bmnIjku71cblxuICAgICAgICAgIHZhciB5ZWFyID0gdGhpcy55ZWFyO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJhbmdlOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICB2YXIgcHJlRGF5ID0gKHRoaXMuY2FsZW5kYXJFbXB0eVRlbXBBcnJheVtpIC0gMV1bMV0gKyAxKSAlIDc7XG4gICAgICAgICAgICAgIG1vbnRoID0gbW9udGggKyAxO1xuXG4gICAgICAgICAgICAgIGlmIChtb250aCA+IDEyKSB7XG4gICAgICAgICAgICAgICAgeWVhcisrO1xuICAgICAgICAgICAgICAgIG1vbnRoID0gbW9udGggLSAxMjtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZlYnJ1YXJ5ZGF5cyh5ZWFyKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBtb250aERheXMgPSB0aGlzLm1vbnRoRGF5c0FycmF5W21vbnRoIC0gMV07XG4gICAgICAgICAgICAgIHZhciBsYXRlckRheSA9IChwcmVEYXkgKyBtb250aERheXMpICUgNyAtIDE7XG4gICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJFbXB0eVRlbXBBcnJheVtpXSA9IFtwcmVEYXksIGxhdGVyRGF5LCBtb250aCwgeWVhciwgbW9udGhEYXlzXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1vbnRoID0gdGhpcy5tb250aDtcbiAgICAgICAgICAgICAgdmFyIF9tb250aERheXMgPSB0aGlzLm1vbnRoRGF5c0FycmF5W21vbnRoIC0gMV07XG5cbiAgICAgICAgICAgICAgdmFyIF9sYXRlckRheSA9IChmaXJzdERheSArIF9tb250aERheXMpICUgNyAtIDE7XG5cbiAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhckVtcHR5VGVtcEFycmF5WzBdID0gW2ZpcnN0RGF5LCBfbGF0ZXJEYXksIG1vbnRoLCB5ZWFyLCBfbW9udGhEYXlzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldERhdGU6IGZ1bmN0aW9uIGdldERhdGUoZGF0ZSkge1xuICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChkYXRlLmdldEZ1bGxZZWFyKCksIFwiL1wiKS5jb25jYXQodGhpcy5wcmVmaXhaZXJvKGRhdGUuZ2V0TW9udGgoKSArIDEpLCBcIi9cIikuY29uY2F0KHRoaXMucHJlZml4WmVybyhkYXRlLmdldERhdGUoKSkpO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVGZWJydWFyeWRheXM6IGZ1bmN0aW9uIHVwZGF0ZUZlYnJ1YXJ5ZGF5cyh5ZWFyKSB7XG4gICAgICAgICAgLy8g5Yid5q2l5Lyw6K6h5L6m5ZCs5Zmo5Y+q5Lya5Zyo57uE5Lu255qEY3JlYXRlZOeUn+WRveWRqOacn+S+puWQrOacgOWIneS4juacgOe7iOeahOWAvO+8jOaUueWKqOWHveaVsOaJi+WKqOabtOaWsO+8jOWQjue7reaFouaFoueglOeptlxuICAgICAgICAgIGlmICh5ZWFyICUgNCA9PSAwICYmIHllYXIgJSAxMDAgIT0gMCB8fCB5ZWFyICUgNDAwID09IDApIHtcbiAgICAgICAgICAgIHRoaXMubW9udGhEYXlzQXJyYXlbMV0gPSAyOTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb250aERheXNBcnJheVsxXSA9IDI4O1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RGF5Q2xhc3M6IGZ1bmN0aW9uIGdldERheUNsYXNzKGRhdGUsIG1vbnRoLCB5ZWFyKSB7XG4gICAgICAgICAgLy8g6K6h566X5qC35byPXG4gICAgICAgICAgaWYgKGRhdGUgPCB0aGlzLmRhdGUgJiYgbW9udGggPT0gdGhpcy5tb250aCAmJiB5ZWFyID09IHRoaXMueWVhcikge1xuICAgICAgICAgICAgcmV0dXJuICdjYWxlbmRhci1kaXNhYmxlLWRheSc7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRlID09IHRoaXMuZGF0ZSAmJiBtb250aCA9PSB0aGlzLm1vbnRoICYmIHllYXIgPT0gdGhpcy55ZWFyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2NhbGVuZGFyLXRvZGF5JztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gJ2NhbGVuZGFyLWRheSc7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZpeFplcm86IGZ1bmN0aW9uIHByZWZpeFplcm8obnVtKSB7XG4gICAgICAgICAgLy8g6KGl6Zu2LOagh+WHhuWMllxuICAgICAgICAgIGlmIChudW0gPiAxMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChBcnJheSgyKS5qb2luKDApICsgbnVtKS5zbGljZSgtMik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXRUb21vcnJvd0RhdGU6IGZ1bmN0aW9uIGdldFRvbW9ycm93RGF0ZSh0b2RheURhdGUsIG1vbnRoKSB7XG4gICAgICAgICAgdmFyIGQgPSB0b2RheURhdGUgKyAxOyAvLyBpZiAoZD4pXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGVTY29wZTogZnVuY3Rpb24gZGF0ZVNjb3BlKHN0YXJ0RGF0ZVN0ciwgZW5kRGF0ZVN0cikge1xuICAgICAgICAgIHZhciBzdGFydFRpbWUgPSBuZXcgRGF0ZShzdGFydERhdGVTdHIpLmdldFRpbWUoKTtcbiAgICAgICAgICB2YXIgZW5kVGltZSA9IG5ldyBEYXRlKGVuZERhdGVTdHIpLmdldFRpbWUoKTtcbiAgICAgICAgICB2YXIgb25lRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICAgICAgICB2YXIgbCA9IFtdO1xuICAgICAgICAgIHZhciBpO1xuXG4gICAgICAgICAgZm9yIChpID0gc3RhcnRUaW1lOyBpIDw9IGVuZFRpbWU7KSB7XG4gICAgICAgICAgICBsLnB1c2godGhpcy5nZXREYXRlKG5ldyBEYXRlKGkpKS5yZXBsYWNlKC9cXC8vZywgJy0nKSk7XG4gICAgICAgICAgICBpICs9IG9uZURheTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbDtcbiAgICAgICAgfSxcbiAgICAgICAgcGlja2VyOiBmdW5jdGlvbiBwaWNrZXIoZGF0ZUFycmF5KSB7XG4gICAgICAgICAgdmFyIF9kYXRlQXJyYXkgPSBfc2xpY2VkVG9BcnJheShkYXRlQXJyYXksIDMpLFxuICAgICAgICAgICAgICB5ZWFyID0gX2RhdGVBcnJheVswXSxcbiAgICAgICAgICAgICAgbW9udGggPSBfZGF0ZUFycmF5WzFdLFxuICAgICAgICAgICAgICBkYXkgPSBfZGF0ZUFycmF5WzJdO1xuXG4gICAgICAgICAgdmFyIGRhdGUgPSBcIlwiLmNvbmNhdCh5ZWFyLCBcIi9cIikuY29uY2F0KHRoaXMucHJlZml4WmVybyhtb250aCksIFwiL1wiKS5jb25jYXQodGhpcy5wcmVmaXhaZXJvKGRheSkpO1xuXG4gICAgICAgICAgaWYgKGRhdGUgPCB0aGlzLnRvZGF5KSB7XG4gICAgICAgICAgICAvLyDnpoHmraLliY3pnaLml6XmnJ/ngrnlh7tcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLm11bHRpID09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBpY2tlclN0YW1wID09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5waWNrZXJBcnJheSA9IFtkYXRlXTtcbiAgICAgICAgICAgICAgdGhpcy5waWNrZXJTdGFtcCA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoZGF0ZSA+IHRoaXMucGlja2VyQXJyYXlbMF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlckFycmF5LnB1c2goZGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXJTdGFtcCA9IDA7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5a6e546w5pel5pyf5bCP5LqO56ys5LiA5qyh6YCJ5oup5pe25Y+Y5Li66YeN6YCJXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXJBcnJheSA9IFtkYXRlXTtcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlclN0YW1wID0gMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBpY2tlckFycmF5ID0gW2RhdGVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICAgIC8vIOa4hemZpOaXpeacn+mAieaLqVxuICAgICAgICAgIHRoaXMucGlja2VyQXJyYXkgPSBbXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gc2F2ZShlKSB7XG4gICAgICAgICAgaWYgKHRoaXMubXVsdGkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGlja2VyQXJyYXkubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5kYXRlU2NvcGUodGhpcy5waWNrZXJBcnJheVswXSwgdGhpcy5waWNrZXJBcnJheVsxXSkpO1xuICAgICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcblxuICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvQ2xlYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5waWNrZXJBcnJheSk7XG4gICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b0NsZWFyKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgb3BlbjogZnVuY3Rpb24gb3BlbigpIHtcbiAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXRDYWxlbmRhcigpO1xuICAgICAgfVxuICAgIH07XG4gICAgZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbiAgICAvKioqL1xuICB9LFxuXG4gIC8qKiovXG4gIDI0OlxuICAvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAgICEqKiogQzovVXNlcnMvcmhzdy9EZXNrdG9wL+aWsOW7uuaWh+S7tuWkuSAoNikvYmVhdXR5LWNhbGVuZGFyL2NvbXBvbmVudHMvYmVhdXR5LWNhbGVuZGFyL2JlYXV0eS1jYWxlbmRhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNDI5YmFlNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmICoqKiFcbiAgICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG5cbiAgLyoqKi9cbiAgZnVuY3Rpb24gXyhtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIF9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiAgICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgICB2YXIgX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19taW5pX2Nzc19leHRyYWN0X3BsdWdpbl9kaXN0X2xvYWRlcl9qc19yZWZfOF9vbmVPZl8xXzBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfcmVmXzhfb25lT2ZfMV8xX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc19zdHlsZVBvc3RMb2FkZXJfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl84X29uZU9mXzFfMl9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfcG9zdGNzc19sb2FkZXJfc3JjX2luZGV4X2pzX3JlZl84X29uZU9mXzFfM19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfc2Fzc19sb2FkZXJfZGlzdF9janNfanNfcmVmXzhfb25lT2ZfMV80X0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfd2VicGFja19wcmVwcm9jZXNzX2xvYWRlcl9pbmRleF9qc19yZWZfOF9vbmVPZl8xXzVfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc3R5bGVfanNfYmVhdXR5X2NhbGVuZGFyX3Z1ZV92dWVfdHlwZV9zdHlsZV9pbmRleF8wX2lkXzE0MjliYWU0X2xhbmdfc2Nzc19zY29wZWRfdHJ1ZV9fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXG4gICAgLyohIC0hLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlcj8/cmVmLS04LW9uZU9mLTEtMiEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmM/P3JlZi0tOC1vbmVPZi0xLTMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyPz9yZWYtLTgtb25lT2YtMS01IS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWI/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2JlYXV0eS1jYWxlbmRhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNDI5YmFlNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmICovXG4gICAgMjUpO1xuICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovXG5cblxuICAgIHZhciBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX21pbmlfY3NzX2V4dHJhY3RfcGx1Z2luX2Rpc3RfbG9hZGVyX2pzX3JlZl84X29uZU9mXzFfMF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfOF9vbmVPZl8xXzFfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3N0eWxlUG9zdExvYWRlcl9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzhfb25lT2ZfMV8yX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfcmVmXzhfb25lT2ZfMV8zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19zYXNzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfOF9vbmVPZl8xXzRfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl84X29uZU9mXzFfNV9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zdHlsZV9qc19iZWF1dHlfY2FsZW5kYXJfdnVlX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzBfaWRfMTQyOWJhZTRfbGFuZ19zY3NzX3Njb3BlZF90cnVlX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfbWluaV9jc3NfZXh0cmFjdF9wbHVnaW5fZGlzdF9sb2FkZXJfanNfcmVmXzhfb25lT2ZfMV8wX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX3JlZl84X29uZU9mXzFfMV9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfc3R5bGVQb3N0TG9hZGVyX2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfd2VicGFja19wcmVwcm9jZXNzX2xvYWRlcl9pbmRleF9qc19yZWZfOF9vbmVPZl8xXzJfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX3Bvc3Rjc3NfbG9hZGVyX3NyY19pbmRleF9qc19yZWZfOF9vbmVPZl8xXzNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX3Nhc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX3JlZl84X29uZU9mXzFfNF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzhfb25lT2ZfMV81X0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3N0eWxlX2pzX2JlYXV0eV9jYWxlbmRhcl92dWVfdnVlX3R5cGVfc3R5bGVfaW5kZXhfMF9pZF8xNDI5YmFlNF9sYW5nX3Njc3Nfc2NvcGVkX3RydWVfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuICAgIC8qIGhhcm1vbnkgcmVleHBvcnQgKHVua25vd24pICovXG5cblxuICAgIGZvciAodmFyIF9fV0VCUEFDS19JTVBPUlRfS0VZX18gaW4gX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19taW5pX2Nzc19leHRyYWN0X3BsdWdpbl9kaXN0X2xvYWRlcl9qc19yZWZfOF9vbmVPZl8xXzBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfcmVmXzhfb25lT2ZfMV8xX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc19zdHlsZVBvc3RMb2FkZXJfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl84X29uZU9mXzFfMl9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfcG9zdGNzc19sb2FkZXJfc3JjX2luZGV4X2pzX3JlZl84X29uZU9mXzFfM19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfc2Fzc19sb2FkZXJfZGlzdF9janNfanNfcmVmXzhfb25lT2ZfMV80X0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfd2VicGFja19wcmVwcm9jZXNzX2xvYWRlcl9pbmRleF9qc19yZWZfOF9vbmVPZl8xXzVfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc3R5bGVfanNfYmVhdXR5X2NhbGVuZGFyX3Z1ZV92dWVfdHlwZV9zdHlsZV9pbmRleF8wX2lkXzE0MjliYWU0X2xhbmdfc2Nzc19zY29wZWRfdHJ1ZV9fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXykge1xuICAgICAgaWYgKF9fV0VCUEFDS19JTVBPUlRfS0VZX18gIT09ICdkZWZhdWx0JykgKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIGtleSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX21pbmlfY3NzX2V4dHJhY3RfcGx1Z2luX2Rpc3RfbG9hZGVyX2pzX3JlZl84X29uZU9mXzFfMF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfOF9vbmVPZl8xXzFfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3N0eWxlUG9zdExvYWRlcl9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzhfb25lT2ZfMV8yX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfcmVmXzhfb25lT2ZfMV8zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19zYXNzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfOF9vbmVPZl8xXzRfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl84X29uZU9mXzFfNV9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zdHlsZV9qc19iZWF1dHlfY2FsZW5kYXJfdnVlX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzBfaWRfMTQyOWJhZTRfbGFuZ19zY3NzX3Njb3BlZF90cnVlX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgfSkoX19XRUJQQUNLX0lNUE9SVF9LRVlfXyk7XG4gICAgfVxuICAgIC8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi9cblxuXG4gICAgX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX21pbmlfY3NzX2V4dHJhY3RfcGx1Z2luX2Rpc3RfbG9hZGVyX2pzX3JlZl84X29uZU9mXzFfMF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfOF9vbmVPZl8xXzFfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3N0eWxlUG9zdExvYWRlcl9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzhfb25lT2ZfMV8yX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfcmVmXzhfb25lT2ZfMV8zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19zYXNzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfOF9vbmVPZl8xXzRfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl84X29uZU9mXzFfNV9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zdHlsZV9qc19iZWF1dHlfY2FsZW5kYXJfdnVlX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzBfaWRfMTQyOWJhZTRfbGFuZ19zY3NzX3Njb3BlZF90cnVlX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYTtcbiAgICAvKioqL1xuICB9LFxuXG4gIC8qKiovXG4gIDI1OlxuICAvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgISoqKiAuL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyPz9yZWYtLTgtb25lT2YtMS0yIS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYz8/cmVmLS04LW9uZU9mLTEtMyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXI/P3JlZi0tOC1vbmVPZi0xLTUhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYj8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIUM6L1VzZXJzL3Joc3cvRGVza3RvcC/mlrDlu7rmlofku7blpLkgKDYpL2JlYXV0eS1jYWxlbmRhci9jb21wb25lbnRzL2JlYXV0eS1jYWxlbmRhci9iZWF1dHktY2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTQyOWJhZTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJiAqKiohXG4gICAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG5cbiAgLyoqKi9cbiAgZnVuY3Rpb24gXyhtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIHZhciBjc3NSZWxvYWQ7XG4gICAgfVxuICAgIC8qKiovXG5cbiAgfVxufV0pO1xuO1xuKGdsb2JhbFtcIndlYnBhY2tKc29ucFwiXSA9IGdsb2JhbFtcIndlYnBhY2tKc29ucFwiXSB8fCBbXSkucHVzaChbJ2NvbXBvbmVudHMvYmVhdXR5LWNhbGVuZGFyL2JlYXV0eS1jYWxlbmRhci1jcmVhdGUtY29tcG9uZW50Jywge1xuICAnY29tcG9uZW50cy9iZWF1dHktY2FsZW5kYXIvYmVhdXR5LWNhbGVuZGFyLWNyZWF0ZS1jb21wb25lbnQnOiBmdW5jdGlvbiBjb21wb25lbnRzQmVhdXR5Q2FsZW5kYXJCZWF1dHlDYWxlbmRhckNyZWF0ZUNvbXBvbmVudChtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICBfX3dlYnBhY2tfcmVxdWlyZV9fKCcxJylbJ2NyZWF0ZUNvbXBvbmVudCddKF9fd2VicGFja19yZXF1aXJlX18oMTkpKTtcbiAgfVxufSwgW1snY29tcG9uZW50cy9iZWF1dHktY2FsZW5kYXIvYmVhdXR5LWNhbGVuZGFyLWNyZWF0ZS1jb21wb25lbnQnXV1dKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuKGdsb2JhbFtcIndlYnBhY2tKc29ucFwiXSA9IGdsb2JhbFtcIndlYnBhY2tKc29ucFwiXSB8fCBbXSkucHVzaChbW1wicGFnZXMvaW5kZXgvaW5kZXhcIl0sIFssLCwsLCwsLCwsLFxuLyogMCAqL1xuXG4vKiAxICovXG5cbi8qIDIgKi9cblxuLyogMyAqL1xuXG4vKiA0ICovXG5cbi8qIDUgKi9cblxuLyogNiAqL1xuXG4vKiA3ICovXG5cbi8qIDggKi9cblxuLyogOSAqL1xuXG4vKiAxMCAqL1xuXG4vKiAxMSAqL1xuXG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogQzovVXNlcnMvcmhzdy9EZXNrdG9wL+aWsOW7uuaWh+S7tuWkuSAoNikvYmVhdXR5LWNhbGVuZGFyL21haW4uanM/e1wicGFnZVwiOlwicGFnZXMlMkZpbmRleCUyRmluZGV4XCJ9ICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuXG4vKioqL1xuZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovXG5cbiAgKGZ1bmN0aW9uIChjcmVhdGVQYWdlKSB7XG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAvKiEgdW5pLXBhZ2VzICovXG4gICAgNCk7XG5cbiAgICB2YXIgX3Z1ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAvKiEgdnVlICovXG4gICAgMikpO1xuXG4gICAgdmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAvKiEgLi9wYWdlcy9pbmRleC9pbmRleC52dWUgKi9cbiAgICAxMikpO1xuXG4gICAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY3JlYXRlUGFnZShfaW5kZXhbXCJkZWZhdWx0XCJdKTtcbiAgICAvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi9cbiAgfSkuY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKFxuICAvKiEgLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1xdWlja2FwcC13ZWJ2aWV3L2Rpc3QvaW5kZXguanMgKi9cbiAgMSlbXCJjcmVhdGVQYWdlXCJdKTtcbiAgLyoqKi9cbn0sXG4vKiAxMiAqL1xuXG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBDOi9Vc2Vycy9yaHN3L0Rlc2t0b3Av5paw5bu65paH5Lu25aS5ICg2KS9iZWF1dHktY2FsZW5kYXIvcGFnZXMvaW5kZXgvaW5kZXgudnVlICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG5cbi8qKiovXG5mdW5jdGlvbiAobW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIF9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gIHZhciBfaW5kZXhfdnVlX3Z1ZV90eXBlX3RlbXBsYXRlX2lkXzU3MjgwMjI4X19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgLyohIC4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3MjgwMjI4JiAqL1xuICAxMyk7XG4gIC8qIGhhcm1vbnkgaW1wb3J0ICovXG5cblxuICB2YXIgX2luZGV4X3Z1ZV92dWVfdHlwZV9zY3JpcHRfbGFuZ19qc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXG4gIC8qISAuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYgKi9cbiAgMTUpO1xuICAvKiBoYXJtb255IHJlZXhwb3J0ICh1bmtub3duKSAqL1xuXG5cbiAgZm9yICh2YXIgX19XRUJQQUNLX0lNUE9SVF9LRVlfXyBpbiBfaW5kZXhfdnVlX3Z1ZV90eXBlX3NjcmlwdF9sYW5nX2pzX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fKSB7XG4gICAgaWYgKF9fV0VCUEFDS19JTVBPUlRfS0VZX18gIT09ICdkZWZhdWx0JykgKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBrZXksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9pbmRleF92dWVfdnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19ba2V5XTtcbiAgICAgIH0pO1xuICAgIH0pKF9fV0VCUEFDS19JTVBPUlRfS0VZX18pO1xuICB9XG4gIC8qIGhhcm1vbnkgaW1wb3J0ICovXG5cblxuICB2YXIgX2luZGV4X3Z1ZV92dWVfdHlwZV9zdHlsZV9pbmRleF8wX2xhbmdfY3NzX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgLyohIC4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmICovXG4gIDE3KTtcbiAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gIHZhciBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9ydW50aW1lX2NvbXBvbmVudE5vcm1hbGl6ZXJfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXG4gIC8qISAuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyAqL1xuICAxMCk7XG5cbiAgdmFyIHJlbmRlcmpzO1xuICAvKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5cbiAgdmFyIGNvbXBvbmVudCA9IE9iamVjdChfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9ydW50aW1lX2NvbXBvbmVudE5vcm1hbGl6ZXJfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX1tcImRlZmF1bHRcIl0pKF9pbmRleF92dWVfdnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdLCBfaW5kZXhfdnVlX3Z1ZV90eXBlX3RlbXBsYXRlX2lkXzU3MjgwMjI4X19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wicmVuZGVyXCJdLCBfaW5kZXhfdnVlX3Z1ZV90eXBlX3RlbXBsYXRlX2lkXzU3MjgwMjI4X19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wic3RhdGljUmVuZGVyRm5zXCJdLCBmYWxzZSwgbnVsbCwgbnVsbCwgbnVsbCwgZmFsc2UsIF9pbmRleF92dWVfdnVlX3R5cGVfdGVtcGxhdGVfaWRfNTcyODAyMjhfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJjb21wb25lbnRzXCJdLCByZW5kZXJqcyk7XG4gIGNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCI7XG4gIC8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi9cblxuICBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IGNvbXBvbmVudC5leHBvcnRzO1xuICAvKioqL1xufSxcbi8qIDEzICovXG5cbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBDOi9Vc2Vycy9yaHN3L0Rlc2t0b3Av5paw5bu65paH5Lu25aS5ICg2KS9iZWF1dHktY2FsZW5kYXIvcGFnZXMvaW5kZXgvaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3MjgwMjI4JiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgKi9cblxuLyoqKi9cbmZ1bmN0aW9uIChtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgdmFyIF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfdGVtcGxhdGVMb2FkZXJfanNfdnVlX2xvYWRlcl9vcHRpb25zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfd2VicGFja19wcmVwcm9jZXNzX2xvYWRlcl9pbmRleF9qc19yZWZfMTZfMF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl90ZW1wbGF0ZV9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfdW5pX2FwcF9sb2FkZXJfcGFnZV9tZXRhX2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3N0eWxlX2pzX2luZGV4X3Z1ZV92dWVfdHlwZV90ZW1wbGF0ZV9pZF81NzI4MDIyOF9fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXG4gIC8qISAtIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlcj8/cmVmLS0xNi0wIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYj8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3MjgwMjI4JiAqL1xuICAxNCk7XG4gIC8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovXG5cblxuICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJyZW5kZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3RlbXBsYXRlTG9hZGVyX2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzE2XzBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfdGVtcGxhdGVfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3VuaV9hcHBfbG9hZGVyX3BhZ2VfbWV0YV9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zdHlsZV9qc19pbmRleF92dWVfdnVlX3R5cGVfdGVtcGxhdGVfaWRfNTcyODAyMjhfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJyZW5kZXJcIl07XG4gIH0pO1xuICAvKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqL1xuXG5cbiAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwic3RhdGljUmVuZGVyRm5zXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc190ZW1wbGF0ZUxvYWRlcl9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl8xNl8wX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3RlbXBsYXRlX2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfd2VicGFja191bmlfYXBwX2xvYWRlcl9wYWdlX21ldGFfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc3R5bGVfanNfaW5kZXhfdnVlX3Z1ZV90eXBlX3RlbXBsYXRlX2lkXzU3MjgwMjI4X19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wic3RhdGljUmVuZGVyRm5zXCJdO1xuICB9KTtcbiAgLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi9cblxuXG4gIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInJlY3ljbGFibGVSZW5kZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3RlbXBsYXRlTG9hZGVyX2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzE2XzBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfdGVtcGxhdGVfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3VuaV9hcHBfbG9hZGVyX3BhZ2VfbWV0YV9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zdHlsZV9qc19pbmRleF92dWVfdnVlX3R5cGVfdGVtcGxhdGVfaWRfNTcyODAyMjhfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJyZWN5Y2xhYmxlUmVuZGVyXCJdO1xuICB9KTtcbiAgLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi9cblxuXG4gIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImNvbXBvbmVudHNcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3RlbXBsYXRlTG9hZGVyX2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzE2XzBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfdGVtcGxhdGVfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3VuaV9hcHBfbG9hZGVyX3BhZ2VfbWV0YV9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zdHlsZV9qc19pbmRleF92dWVfdnVlX3R5cGVfdGVtcGxhdGVfaWRfNTcyODAyMjhfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJjb21wb25lbnRzXCJdO1xuICB9KTtcbiAgLyoqKi9cblxufSxcbi8qIDE0ICovXG5cbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXI/P3JlZi0tMTYtMCEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWI/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyFDOi9Vc2Vycy9yaHN3L0Rlc2t0b3Av5paw5bu65paH5Lu25aS5ICg2KS9iZWF1dHktY2FsZW5kYXIvcGFnZXMvaW5kZXgvaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3MjgwMjI4JiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgKi9cblxuLyoqKi9cbmZ1bmN0aW9uIChtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAvKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi9cblxuXG4gIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInJlbmRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJlbmRlcjtcbiAgfSk7XG4gIC8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqL1xuXG5cbiAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwic3RhdGljUmVuZGVyRm5zXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3RhdGljUmVuZGVyRm5zO1xuICB9KTtcbiAgLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovXG5cblxuICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJyZWN5Y2xhYmxlUmVuZGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVjeWNsYWJsZVJlbmRlcjtcbiAgfSk7XG4gIC8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqL1xuXG5cbiAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiY29tcG9uZW50c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH0pO1xuXG4gIHZhciBjb21wb25lbnRzID0ge1xuICAgIGJlYXV0eUNhbGVuZGFyOiBmdW5jdGlvbiBiZWF1dHlDYWxlbmRhcigpIHtcbiAgICAgIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXG4gICAgICAvKiEgaW1wb3J0KCkgfCBjb21wb25lbnRzL2JlYXV0eS1jYWxlbmRhci9iZWF1dHktY2FsZW5kYXIgKi9cbiAgICAgIFwiY29tcG9uZW50cy9iZWF1dHktY2FsZW5kYXIvYmVhdXR5LWNhbGVuZGFyXCIpLnRoZW4oX193ZWJwYWNrX3JlcXVpcmVfXy5iaW5kKG51bGwsXG4gICAgICAvKiEgQC9jb21wb25lbnRzL2JlYXV0eS1jYWxlbmRhci9iZWF1dHktY2FsZW5kYXIudnVlICovXG4gICAgICAxOSkpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdm0gPSB0aGlzO1xuXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50O1xuXG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oO1xuICB9O1xuXG4gIHZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2U7XG4gIHZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXTtcbiAgcmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlO1xuICAvKioqL1xufSxcbi8qIDE1ICovXG5cbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBDOi9Vc2Vycy9yaHN3L0Rlc2t0b3Av5paw5bu65paH5Lu25aS5ICg2KS9iZWF1dHktY2FsZW5kYXIvcGFnZXMvaW5kZXgvaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cblxuLyoqKi9cbmZ1bmN0aW9uIChtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgdmFyIF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfYmFiZWxfbG9hZGVyX2xpYl9pbmRleF9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzEyXzFfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc2NyaXB0X2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3N0eWxlX2pzX2luZGV4X3Z1ZV92dWVfdHlwZV9zY3JpcHRfbGFuZ19qc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXG4gIC8qISAtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyPz9yZWYtLTEyLTEhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWI/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYgKi9cbiAgMTYpO1xuICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgdmFyIF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfYmFiZWxfbG9hZGVyX2xpYl9pbmRleF9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzEyXzFfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc2NyaXB0X2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3N0eWxlX2pzX2luZGV4X3Z1ZV92dWVfdHlwZV9zY3JpcHRfbGFuZ19qc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2JhYmVsX2xvYWRlcl9saWJfaW5kZXhfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl8xMl8xX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3NjcmlwdF9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zdHlsZV9qc19pbmRleF92dWVfdnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuICAvKiBoYXJtb255IHJlZXhwb3J0ICh1bmtub3duKSAqL1xuXG5cbiAgZm9yICh2YXIgX19XRUJQQUNLX0lNUE9SVF9LRVlfXyBpbiBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2JhYmVsX2xvYWRlcl9saWJfaW5kZXhfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl8xMl8xX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3NjcmlwdF9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zdHlsZV9qc19pbmRleF92dWVfdnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pIHtcbiAgICBpZiAoX19XRUJQQUNLX0lNUE9SVF9LRVlfXyAhPT0gJ2RlZmF1bHQnKSAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIGtleSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19iYWJlbF9sb2FkZXJfbGliX2luZGV4X2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfd2VicGFja19wcmVwcm9jZXNzX2xvYWRlcl9pbmRleF9qc19yZWZfMTJfMV9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zY3JpcHRfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc3R5bGVfanNfaW5kZXhfdnVlX3Z1ZV90eXBlX3NjcmlwdF9sYW5nX2pzX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW2tleV07XG4gICAgICB9KTtcbiAgICB9KShfX1dFQlBBQ0tfSU1QT1JUX0tFWV9fKTtcbiAgfVxuICAvKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovXG5cblxuICBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfYmFiZWxfbG9hZGVyX2xpYl9pbmRleF9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzEyXzFfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc2NyaXB0X2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3N0eWxlX2pzX2luZGV4X3Z1ZV92dWVfdHlwZV9zY3JpcHRfbGFuZ19qc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmE7XG4gIC8qKiovXG59LFxuLyogMTYgKi9cblxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlcj8/cmVmLS0xMi0xIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhQzovVXNlcnMvcmhzdy9EZXNrdG9wL+aWsOW7uuaWh+S7tuWkuSAoNikvYmVhdXR5LWNhbGVuZGFyL3BhZ2VzL2luZGV4L2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuXG4vKioqL1xuZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbiAgdmFyIGJlYXV0eUNhbGVuZGFyID0gZnVuY3Rpb24gYmVhdXR5Q2FsZW5kYXIoKSB7XG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFxuICAgIC8qISByZXF1aXJlLmVuc3VyZSB8IGNvbXBvbmVudHMvYmVhdXR5LWNhbGVuZGFyL2JlYXV0eS1jYWxlbmRhciAqL1xuICAgIFwiY29tcG9uZW50cy9iZWF1dHktY2FsZW5kYXIvYmVhdXR5LWNhbGVuZGFyXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlc29sdmUoX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAgIC8qISBAL2NvbXBvbmVudHMvYmVhdXR5LWNhbGVuZGFyL2JlYXV0eS1jYWxlbmRhci52dWUgKi9cbiAgICAgIDE5KSk7XG4gICAgfS5iaW5kKG51bGwsIF9fd2VicGFja19yZXF1aXJlX18pKVtcImNhdGNoXCJdKF9fd2VicGFja19yZXF1aXJlX18ub2UpO1xuICB9O1xuXG4gIHZhciBfZGVmYXVsdCA9IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBiZWF1dHlDYWxlbmRhcjogYmVhdXR5Q2FsZW5kYXJcbiAgICB9LFxuICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ2JlYXV0eS1jYWxlbmRhcicsXG4gICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICBhdXRvQ2hvb3NlOiB0cnVlLFxuICAgICAgICBzdGFydERhdGU6IFwiMjAyMC0xMS0wMlwiLFxuICAgICAgICBlbmREYXRlOiBcIjIwMjAtMTEtMTBcIixcbiAgICAgICAgcmFuZzogMTMsXG4gICAgICAgIGF1dG9DbGVhcjogZmFsc2VcbiAgICAgIH07XG4gICAgfSxcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHNob3c6IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICAgIHRoaXMuJHJlZnMuY2FsZW5kYXIub3BlbigpO1xuICAgICAgfSxcbiAgICAgIGNoYW5nZTogZnVuY3Rpb24gY2hhbmdlKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuICAvKioqL1xufSxcbi8qIDE3ICovXG5cbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIEM6L1VzZXJzL3Joc3cvRGVza3RvcC/mlrDlu7rmlofku7blpLkgKDYpL2JlYXV0eS1jYWxlbmRhci9wYWdlcy9pbmRleC9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyYgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cblxuLyoqKi9cbmZ1bmN0aW9uIChtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgdmFyIF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfbWluaV9jc3NfZXh0cmFjdF9wbHVnaW5fZGlzdF9sb2FkZXJfanNfcmVmXzZfb25lT2ZfMV8wX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX3JlZl82X29uZU9mXzFfMV9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfc3R5bGVQb3N0TG9hZGVyX2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfd2VicGFja19wcmVwcm9jZXNzX2xvYWRlcl9pbmRleF9qc19yZWZfNl9vbmVPZl8xXzJfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX3Bvc3Rjc3NfbG9hZGVyX3NyY19pbmRleF9qc19yZWZfNl9vbmVPZl8xXzNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc3R5bGVfanNfaW5kZXhfdnVlX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzBfbGFuZ19jc3NfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFxuICAvKiEgLSEuL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyPz9yZWYtLTYtb25lT2YtMS0yIS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYz8/cmVmLS02LW9uZU9mLTEtMyEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyYgKi9cbiAgMTgpO1xuICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgdmFyIF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfbWluaV9jc3NfZXh0cmFjdF9wbHVnaW5fZGlzdF9sb2FkZXJfanNfcmVmXzZfb25lT2ZfMV8wX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX3JlZl82X29uZU9mXzFfMV9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfc3R5bGVQb3N0TG9hZGVyX2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfd2VicGFja19wcmVwcm9jZXNzX2xvYWRlcl9pbmRleF9qc19yZWZfNl9vbmVPZl8xXzJfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX3Bvc3Rjc3NfbG9hZGVyX3NyY19pbmRleF9qc19yZWZfNl9vbmVPZl8xXzNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc3R5bGVfanNfaW5kZXhfdnVlX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzBfbGFuZ19jc3NfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19taW5pX2Nzc19leHRyYWN0X3BsdWdpbl9kaXN0X2xvYWRlcl9qc19yZWZfNl9vbmVPZl8xXzBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfcmVmXzZfb25lT2ZfMV8xX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc19zdHlsZVBvc3RMb2FkZXJfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl82X29uZU9mXzFfMl9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfcG9zdGNzc19sb2FkZXJfc3JjX2luZGV4X2pzX3JlZl82X29uZU9mXzFfM19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zdHlsZV9qc19pbmRleF92dWVfdnVlX3R5cGVfc3R5bGVfaW5kZXhfMF9sYW5nX2Nzc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4gIC8qIGhhcm1vbnkgcmVleHBvcnQgKHVua25vd24pICovXG5cblxuICBmb3IgKHZhciBfX1dFQlBBQ0tfSU1QT1JUX0tFWV9fIGluIF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfbWluaV9jc3NfZXh0cmFjdF9wbHVnaW5fZGlzdF9sb2FkZXJfanNfcmVmXzZfb25lT2ZfMV8wX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX3JlZl82X29uZU9mXzFfMV9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfc3R5bGVQb3N0TG9hZGVyX2pzX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfd2VicGFja19wcmVwcm9jZXNzX2xvYWRlcl9pbmRleF9qc19yZWZfNl9vbmVPZl8xXzJfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX3Bvc3Rjc3NfbG9hZGVyX3NyY19pbmRleF9qc19yZWZfNl9vbmVPZl8xXzNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3dlYnBhY2tfdW5pX21wX2xvYWRlcl9saWJfc3R5bGVfanNfaW5kZXhfdnVlX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzBfbGFuZ19jc3NfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pIHtcbiAgICBpZiAoX19XRUJQQUNLX0lNUE9SVF9LRVlfXyAhPT0gJ2RlZmF1bHQnKSAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIGtleSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19taW5pX2Nzc19leHRyYWN0X3BsdWdpbl9kaXN0X2xvYWRlcl9qc19yZWZfNl9vbmVPZl8xXzBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfcmVmXzZfb25lT2ZfMV8xX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc19zdHlsZVBvc3RMb2FkZXJfanNfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc193ZWJwYWNrX3ByZXByb2Nlc3NfbG9hZGVyX2luZGV4X2pzX3JlZl82X29uZU9mXzFfMl9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfcG9zdGNzc19sb2FkZXJfc3JjX2luZGV4X2pzX3JlZl82X29uZU9mXzFfM19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fd2VicGFja191bmlfbXBfbG9hZGVyX2xpYl9zdHlsZV9qc19pbmRleF92dWVfdnVlX3R5cGVfc3R5bGVfaW5kZXhfMF9sYW5nX2Nzc19fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1trZXldO1xuICAgICAgfSk7XG4gICAgfSkoX19XRUJQQUNLX0lNUE9SVF9LRVlfXyk7XG4gIH1cbiAgLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqL1xuXG5cbiAgX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSBfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX21pbmlfY3NzX2V4dHJhY3RfcGx1Z2luX2Rpc3RfbG9hZGVyX2pzX3JlZl82X29uZU9mXzFfMF9EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19yZWZfNl9vbmVPZl8xXzFfRF9Qcm9ncmFtX0ZpbGVzX0hidWlsZGVyWF9wbHVnaW5zX3VuaWFwcF9jbGlfbm9kZV9tb2R1bGVzX2RjbG91ZGlvX3Z1ZV9jbGlfcGx1Z2luX3VuaV9wYWNrYWdlc192dWVfbG9hZGVyX2xpYl9sb2FkZXJzX3N0eWxlUG9zdExvYWRlcl9qc19EX1Byb2dyYW1fRmlsZXNfSGJ1aWxkZXJYX3BsdWdpbnNfdW5pYXBwX2NsaV9ub2RlX21vZHVsZXNfZGNsb3VkaW9fdnVlX2NsaV9wbHVnaW5fdW5pX3BhY2thZ2VzX3dlYnBhY2tfcHJlcHJvY2Vzc19sb2FkZXJfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8yX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfcmVmXzZfb25lT2ZfMV8zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb192dWVfY2xpX3BsdWdpbl91bmlfcGFja2FnZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX0RfUHJvZ3JhbV9GaWxlc19IYnVpbGRlclhfcGx1Z2luc191bmlhcHBfY2xpX25vZGVfbW9kdWxlc19kY2xvdWRpb193ZWJwYWNrX3VuaV9tcF9sb2FkZXJfbGliX3N0eWxlX2pzX2luZGV4X3Z1ZV92dWVfdHlwZV9zdHlsZV9pbmRleF8wX2xhbmdfY3NzX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYTtcbiAgLyoqKi9cbn0sXG4vKiAxOCAqL1xuXG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlcj8/cmVmLS02LW9uZU9mLTEtMiEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmM/P3JlZi0tNi1vbmVPZi0xLTMhLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYj8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIUM6L1VzZXJzL3Joc3cvRGVza3RvcC/mlrDlu7rmlofku7blpLkgKDYpL2JlYXV0eS1jYWxlbmRhci9wYWdlcy9pbmRleC9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyYgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG5cbi8qKiovXG5mdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gIC8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICBpZiAoZmFsc2UpIHtcbiAgICB2YXIgY3NzUmVsb2FkO1xuICB9XG4gIC8qKiovXG5cbn1dLCBbWzExLCBcImNvbW1vbi9ydW50aW1lXCIsIFwiY29tbW9uL3ZlbmRvclwiXV1dKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdlJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3R4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzF5UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9