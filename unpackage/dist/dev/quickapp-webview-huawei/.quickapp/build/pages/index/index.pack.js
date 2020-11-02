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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index/index.qxml");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index/index.css?type=page":
/*!*****************************************!*\
  !*** ./pages/index/index.css?type=page ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
            segs:[".content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n\n.logo {\n  height: ",[2,200],";\n  width: ",[2,200],";\n  margin-top: ",[2,200],";\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: ",[2,50],";\n}\n\n.text-area {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n\n.title {\n  font-size: ",[2,36],";\n  color: #8f8f94;\n}"],
            info:{path:"pages/index/index", type:"page"}
        }

/***/ }),

/***/ "./pages/index/index.qxml":
/*!********************************!*\
  !*** ./pages/index/index.qxml ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var render = function render() {
  var _vm = this,
      _o = _vm._o,
      _n = _vm._n,
      _s = _vm._s,
      _l = _vm._l,
      _t = _vm._t,
      _q = _vm._q,
      _i = _vm._i,
      _m = _vm._m,
      _f = _vm._f,
      _k = _vm._k,
      _b = _vm._b,
      _v = _vm._v,
      _e = _vm._e,
      _u = _vm._u,
      _g = _vm._g,
      _d = _vm._d,
      _p = _vm._p,
      _c = _vm._c,
      $style = _vm.$style,
      $class = _vm.$class,
      eventHappen = _vm.eventHappen;

  return _c('q-page', {
    attrs: {
      "data-internal-update-trigger": _vm.$dataprops.internal__updateTrigger
    }
  }, [_c('q-view', {
    staticClass: "content"
  }, [_c('q-image', {
    directives: [{
      name: "dataset",
      rawName: "v-dataset:eventOpts",
      value: [['tap', [['show', ['$event']]]]],
      expression: "[['tap', [['show', ['$event']]]]]",
      arg: "eventOpts"
    }, {
      name: "touch",
      rawName: "v-touch:tap",
      value: '__e',
      expression: "'__e'",
      arg: "tap"
    }],
    staticClass: "logo",
    attrs: {
      "src": "/static/logo.png"
    },
    on: {
      "tap": function tap($event) {
        return eventHappen('__e', $event);
      }
    }
  }), _c('q-view', {
    staticClass: "text-area"
  }, [_c('q-text', {
    staticClass: "title"
  }, [_v(_s(_vm.$dataprops.title))])], 1), _c('q-beauty-calendar', {
    directives: [{
      name: "dataset",
      rawName: "v-dataset:ref",
      value: 'calendar',
      expression: "'calendar'",
      arg: "ref"
    }, {
      name: "dataset",
      rawName: "v-dataset:eventOpts",
      value: [['^change', [['change']]]],
      expression: "[['^change', [['change']]]]",
      arg: "eventOpts"
    }],
    staticClass: "vue-ref",
    attrs: {
      "vue-id": "8ddcb540-1",
      "auto-choose": _vm.$dataprops.autoChoose,
      "multi": _vm.$dataprops.multi,
      "start-date": _vm.$dataprops.startDate,
      "end-date": _vm.$dataprops.endDate,
      "range": _vm.$dataprops.rang,
      "auto-clear": _vm.$dataprops.autoClear
    },
    on: {
      "change": function change($event) {
        return eventHappen('__e', $event);
      },
      "__l": function __l($event) {
        return eventHappen('__l', $event);
      }
    }
  })], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;
var pageConfig = {
  path: "pages/index/index",
  globalComponents: {},
  components: {
    "q-beauty-calendar": __pageComponentInfos['components/beauty-calendar/beauty-calendar']
  },
  render: render,
  type: "page",
  staticRenderFns: staticRenderFns,
  _scopeId: "data-q-c0abb794"
};
global.pageLoaded(pageConfig);

var cssData = __webpack_require__(/*! ./pages/index/index.css?type=page */ "./pages/index/index.css?type=page");

injectStyle(cssData.segs, cssData.sourcemap, cssData.info);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXgvaW5kZXgucGFjay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvaW5kZXgucXhtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC9pbmRleC5xeG1sXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgICAgICBzZWdzOltcIi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgaGVpZ2h0OiBcIixbMiwyMDBdLFwiO1xcbiAgd2lkdGg6IFwiLFsyLDIwMF0sXCI7XFxuICBtYXJnaW4tdG9wOiBcIixbMiwyMDBdLFwiO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiBcIixbMiw1MF0sXCI7XFxufVxcblxcbi50ZXh0LWFyZWEge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiBcIixbMiwzNl0sXCI7XFxuICBjb2xvcjogIzhmOGY5NDtcXG59XCJdLFxuICAgICAgICAgICAgaW5mbzp7cGF0aDpcInBhZ2VzL2luZGV4L2luZGV4XCIsIHR5cGU6XCJwYWdlXCJ9XG4gICAgICAgIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9vID0gX3ZtLl9vLFxuICAgICAgX24gPSBfdm0uX24sXG4gICAgICBfcyA9IF92bS5fcyxcbiAgICAgIF9sID0gX3ZtLl9sLFxuICAgICAgX3QgPSBfdm0uX3QsXG4gICAgICBfcSA9IF92bS5fcSxcbiAgICAgIF9pID0gX3ZtLl9pLFxuICAgICAgX20gPSBfdm0uX20sXG4gICAgICBfZiA9IF92bS5fZixcbiAgICAgIF9rID0gX3ZtLl9rLFxuICAgICAgX2IgPSBfdm0uX2IsXG4gICAgICBfdiA9IF92bS5fdixcbiAgICAgIF9lID0gX3ZtLl9lLFxuICAgICAgX3UgPSBfdm0uX3UsXG4gICAgICBfZyA9IF92bS5fZyxcbiAgICAgIF9kID0gX3ZtLl9kLFxuICAgICAgX3AgPSBfdm0uX3AsXG4gICAgICBfYyA9IF92bS5fYyxcbiAgICAgICRzdHlsZSA9IF92bS4kc3R5bGUsXG4gICAgICAkY2xhc3MgPSBfdm0uJGNsYXNzLFxuICAgICAgZXZlbnRIYXBwZW4gPSBfdm0uZXZlbnRIYXBwZW47XG5cbiAgcmV0dXJuIF9jKCdxLXBhZ2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YS1pbnRlcm5hbC11cGRhdGUtdHJpZ2dlclwiOiBfdm0uJGRhdGFwcm9wcy5pbnRlcm5hbF9fdXBkYXRlVHJpZ2dlclxuICAgIH1cbiAgfSwgW19jKCdxLXZpZXcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiXG4gIH0sIFtfYygncS1pbWFnZScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJkYXRhc2V0XCIsXG4gICAgICByYXdOYW1lOiBcInYtZGF0YXNldDpldmVudE9wdHNcIixcbiAgICAgIHZhbHVlOiBbWyd0YXAnLCBbWydzaG93JywgWyckZXZlbnQnXV1dXV0sXG4gICAgICBleHByZXNzaW9uOiBcIltbJ3RhcCcsIFtbJ3Nob3cnLCBbJyRldmVudCddXV1dXVwiLFxuICAgICAgYXJnOiBcImV2ZW50T3B0c1wiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ0b3VjaFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXRvdWNoOnRhcFwiLFxuICAgICAgdmFsdWU6ICdfX2UnLFxuICAgICAgZXhwcmVzc2lvbjogXCInX19lJ1wiLFxuICAgICAgYXJnOiBcInRhcFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwibG9nb1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBcIi9zdGF0aWMvbG9nby5wbmdcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwidGFwXCI6IGZ1bmN0aW9uIHRhcCgkZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50SGFwcGVuKCdfX2UnLCAkZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSksIF9jKCdxLXZpZXcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1hcmVhXCJcbiAgfSwgW19jKCdxLXRleHQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3YoX3MoX3ZtLiRkYXRhcHJvcHMudGl0bGUpKV0pXSwgMSksIF9jKCdxLWJlYXV0eS1jYWxlbmRhcicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJkYXRhc2V0XCIsXG4gICAgICByYXdOYW1lOiBcInYtZGF0YXNldDpyZWZcIixcbiAgICAgIHZhbHVlOiAnY2FsZW5kYXInLFxuICAgICAgZXhwcmVzc2lvbjogXCInY2FsZW5kYXInXCIsXG4gICAgICBhcmc6IFwicmVmXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcImRhdGFzZXRcIixcbiAgICAgIHJhd05hbWU6IFwidi1kYXRhc2V0OmV2ZW50T3B0c1wiLFxuICAgICAgdmFsdWU6IFtbJ15jaGFuZ2UnLCBbWydjaGFuZ2UnXV1dXSxcbiAgICAgIGV4cHJlc3Npb246IFwiW1snXmNoYW5nZScsIFtbJ2NoYW5nZSddXV1dXCIsXG4gICAgICBhcmc6IFwiZXZlbnRPcHRzXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ2dWUtcmVmXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidnVlLWlkXCI6IFwiOGRkY2I1NDAtMVwiLFxuICAgICAgXCJhdXRvLWNob29zZVwiOiBfdm0uJGRhdGFwcm9wcy5hdXRvQ2hvb3NlLFxuICAgICAgXCJtdWx0aVwiOiBfdm0uJGRhdGFwcm9wcy5tdWx0aSxcbiAgICAgIFwic3RhcnQtZGF0ZVwiOiBfdm0uJGRhdGFwcm9wcy5zdGFydERhdGUsXG4gICAgICBcImVuZC1kYXRlXCI6IF92bS4kZGF0YXByb3BzLmVuZERhdGUsXG4gICAgICBcInJhbmdlXCI6IF92bS4kZGF0YXByb3BzLnJhbmcsXG4gICAgICBcImF1dG8tY2xlYXJcIjogX3ZtLiRkYXRhcHJvcHMuYXV0b0NsZWFyXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24gY2hhbmdlKCRldmVudCkge1xuICAgICAgICByZXR1cm4gZXZlbnRIYXBwZW4oJ19fZScsICRldmVudCk7XG4gICAgICB9LFxuICAgICAgXCJfX2xcIjogZnVuY3Rpb24gX19sKCRldmVudCkge1xuICAgICAgICByZXR1cm4gZXZlbnRIYXBwZW4oJ19fbCcsICRldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSwgMSk7XG59O1xuXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW107XG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWU7XG52YXIgcGFnZUNvbmZpZyA9IHtcbiAgcGF0aDogXCJwYWdlcy9pbmRleC9pbmRleFwiLFxuICBnbG9iYWxDb21wb25lbnRzOiB7fSxcbiAgY29tcG9uZW50czoge1xuICAgIFwicS1iZWF1dHktY2FsZW5kYXJcIjogX19wYWdlQ29tcG9uZW50SW5mb3NbJ2NvbXBvbmVudHMvYmVhdXR5LWNhbGVuZGFyL2JlYXV0eS1jYWxlbmRhciddXG4gIH0sXG4gIHJlbmRlcjogcmVuZGVyLFxuICB0eXBlOiBcInBhZ2VcIixcbiAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMsXG4gIF9zY29wZUlkOiBcImRhdGEtcS1jMGFiYjc5NFwiXG59O1xuZ2xvYmFsLnBhZ2VMb2FkZWQocGFnZUNvbmZpZyk7XG5cbnZhciBjc3NEYXRhID0gcmVxdWlyZShcImM6L1VzZXJzL3Joc3cvRGVza3RvcC/mlrDlu7rmlofku7blpLkgKDYpL2JlYXV0eS1jYWxlbmRhci91bnBhY2thZ2UvZGlzdC9kZXYvcXVpY2thcHAtd2Vidmlldy1odWF3ZWkvcGFnZXMvaW5kZXgvaW5kZXguY3NzP3R5cGU9cGFnZVwiKTtcblxuaW5qZWN0U3R5bGUoY3NzRGF0YS5zZWdzLCBjc3NEYXRhLnNvdXJjZW1hcCwgY3NzRGF0YS5pbmZvKTsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9