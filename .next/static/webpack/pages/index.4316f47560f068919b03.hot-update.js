webpackHotUpdate_N_E("pages/index", {
  /***/ "./pages/api/flights/Index.js":
    /*!************************************!*\
  !*** ./pages/api/flights/Index.js ***!
  \************************************/
    /*! no exports provided */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar country = "Japan";\nvar originPlace = "NRT-sky";\nvar destinationPlace = "OSAA-sky";\nvar outboundpartialdate = "2020-09-01";\n\nvar fetchPlacesData = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var _yield$axios$get, Places;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/", {\n              headers: {\n                "content-type": "application/json",\n                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",\n                "x-rapidapi-key": "".concat(REACT_APP_PlacesDataKey),\n                useQueryString: true\n              },\n              params: {\n                query: "".concat(country)\n              }\n            });\n\n          case 3:\n            _yield$axios$get = _context.sent;\n            Places = _yield$axios$get.data.Places;\n            console.log(Places);\n            _context.next = 11;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context["catch"](0);\n            console.error(_context.t0);\n\n          case 11:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 8]]);\n  }));\n\n  return function fetchPlacesData() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfetchPlacesData();\n\nvar fetchRoutesAndQuotesData = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n    var _yield$axios$get2, _yield$axios$get2$dat, Quotes, Places, Carriers;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/".concat(originPlace, "/").concat(destinationPlace, "/").concat(outboundpartialdate), {\n              headers: {\n                "content-type": "application/json",\n                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",\n                "x-rapidapi-key": "".concat(process.envREACT_APP_RoutesDataKey),\n                useQueryString: true\n              }\n            });\n\n          case 3:\n            _yield$axios$get2 = _context2.sent;\n            _yield$axios$get2$dat = _yield$axios$get2.data;\n            Quotes = _yield$axios$get2$dat.Quotes;\n            Places = _yield$axios$get2$dat.Places;\n            Carriers = _yield$axios$get2$dat.Carriers;\n            console.log(Quotes);\n            console.log(Places);\n            console.log(Carriers);\n            _context2.next = 16;\n            break;\n\n          case 13:\n            _context2.prev = 13;\n            _context2.t0 = _context2["catch"](0);\n            console.log(_context2.t0);\n\n          case 16:\n          case "end":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 13]]);\n  }));\n\n  return function fetchRoutesAndQuotesData() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nfetchRoutesAndQuotesData();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2ZsaWdodHMvSW5kZXguanM/Y2JkOSJdLCJuYW1lcyI6WyJjb3VudHJ5Iiwib3JpZ2luUGxhY2UiLCJkZXN0aW5hdGlvblBsYWNlIiwib3V0Ym91bmRwYXJ0aWFsZGF0ZSIsImZldGNoUGxhY2VzRGF0YSIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsIlJFQUNUX0FQUF9QbGFjZXNEYXRhS2V5IiwidXNlUXVlcnlTdHJpbmciLCJwYXJhbXMiLCJxdWVyeSIsIlBsYWNlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJmZXRjaFJvdXRlc0FuZFF1b3Rlc0RhdGEiLCJwcm9jZXNzIiwiZW52UkVBQ1RfQVBQX1JvdXRlc0RhdGFLZXkiLCJRdW90ZXMiLCJDYXJyaWVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxPQUFoQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFwQjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLFVBQXpCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsWUFBNUI7O0FBRUEsSUFBTUMsZUFBZTtBQUFBLDhMQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSVZDLDRDQUFLLENBQUNDLEdBQU4sQ0FDUiwwR0FEUSxFQUVSO0FBQ0VDLHFCQUFPLEVBQUU7QUFDUCxnQ0FBZ0Isa0JBRFQ7QUFFUCxtQ0FDRSx1REFISztBQUlQLDRDQUNLQyx1QkFETCxDQUpPO0FBTVBDLDhCQUFjLEVBQUU7QUFOVCxlQURYO0FBU0VDLG9CQUFNLEVBQUU7QUFDTkMscUJBQUssWUFBS1gsT0FBTDtBQURDO0FBVFYsYUFGUSxDQUpVOztBQUFBO0FBQUE7QUFHVlksa0JBSFUsb0JBR2xCQyxJQUhrQixDQUdWRCxNQUhVO0FBcUJwQkUsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0FBckJvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXVCcEJFLG1CQUFPLENBQUNFLEtBQVI7O0FBdkJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmWixlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCOztBQTJCQUEsZUFBZTs7QUFFZixJQUFNYSx3QkFBd0I7QUFBQSwrTEFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUluQlosNENBQUssQ0FBQ0MsR0FBTixvSEFDb0dMLFdBRHBHLGNBQ21IQyxnQkFEbkgsY0FDdUlDLG1CQUR2SSxHQUVSO0FBQ0VJLHFCQUFPLEVBQUU7QUFDUCxnQ0FBZ0Isa0JBRFQ7QUFFUCxtQ0FDRSx1REFISztBQUlQLDRDQUNLVyxPQUFPLENBQUNDLDBCQURiLENBSk87QUFNUFYsOEJBQWMsRUFBRTtBQU5UO0FBRFgsYUFGUSxDQUptQjs7QUFBQTtBQUFBO0FBQUEsc0RBRzNCSSxJQUgyQjtBQUduQk8sa0JBSG1CLHlCQUduQkEsTUFIbUI7QUFHWFIsa0JBSFcseUJBR1hBLE1BSFc7QUFHSFMsb0JBSEcseUJBR0hBLFFBSEc7QUFrQjdCUCxtQkFBTyxDQUFDQyxHQUFSLENBQVlLLE1BQVo7QUFDQU4sbUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0FBQ0FFLG1CQUFPLENBQUNDLEdBQVIsQ0FBWU0sUUFBWjtBQXBCNkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFzQjdCUCxtQkFBTyxDQUFDQyxHQUFSOztBQXRCNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBeEJFLHdCQUF3QjtBQUFBO0FBQUE7QUFBQSxHQUE5Qjs7QUEwQkFBLHdCQUF3QiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9mbGlnaHRzL0luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBjb3VudHJ5ID0gXCJKYXBhblwiO1xuY29uc3Qgb3JpZ2luUGxhY2UgPSBcIk5SVC1za3lcIjtcbmNvbnN0IGRlc3RpbmF0aW9uUGxhY2UgPSBcIk9TQUEtc2t5XCI7XG5jb25zdCBvdXRib3VuZHBhcnRpYWxkYXRlID0gXCIyMDIwLTA5LTAxXCI7XG5cbmNvbnN0IGZldGNoUGxhY2VzRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhOiB7IFBsYWNlcyB9XG4gICAgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIFwiaHR0cHM6Ly9za3lzY2FubmVyLXNreXNjYW5uZXItZmxpZ2h0LXNlYXJjaC12MS5wLnJhcGlkYXBpLmNvbS9hcGlzZXJ2aWNlcy9hdXRvc3VnZ2VzdC92MS4wL1VLL0dCUC9lbi1HQi9cIixcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIFwieC1yYXBpZGFwaS1ob3N0XCI6XG4gICAgICAgICAgICBcInNreXNjYW5uZXItc2t5c2Nhbm5lci1mbGlnaHQtc2VhcmNoLXYxLnAucmFwaWRhcGkuY29tXCIsXG4gICAgICAgICAgXCJ4LXJhcGlkYXBpLWtleVwiOlxuICAgICAgICAgICAgYCR7UkVBQ1RfQVBQX1BsYWNlc0RhdGFLZXl9YCxcbiAgICAgICAgICB1c2VRdWVyeVN0cmluZzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBxdWVyeTogYCR7Y291bnRyeX1gXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc29sZS5sb2coUGxhY2VzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59O1xuXG5mZXRjaFBsYWNlc0RhdGEoKTtcblxuY29uc3QgZmV0Y2hSb3V0ZXNBbmRRdW90ZXNEYXRhID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGE6IHsgUXVvdGVzLCBQbGFjZXMsIENhcnJpZXJzIH1cbiAgICB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYGh0dHBzOi8vc2t5c2Nhbm5lci1za3lzY2FubmVyLWZsaWdodC1zZWFyY2gtdjEucC5yYXBpZGFwaS5jb20vYXBpc2VydmljZXMvYnJvd3Nlcm91dGVzL3YxLjAvVVMvVVNEL2VuLVVTLyR7b3JpZ2luUGxhY2V9LyR7ZGVzdGluYXRpb25QbGFjZX0vJHtvdXRib3VuZHBhcnRpYWxkYXRlfWAsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBcIngtcmFwaWRhcGktaG9zdFwiOlxuICAgICAgICAgICAgXCJza3lzY2FubmVyLXNreXNjYW5uZXItZmxpZ2h0LXNlYXJjaC12MS5wLnJhcGlkYXBpLmNvbVwiLFxuICAgICAgICAgIFwieC1yYXBpZGFwaS1rZXlcIjpcbiAgICAgICAgICAgIGAke3Byb2Nlc3MuZW52UkVBQ1RfQVBQX1JvdXRlc0RhdGFLZXl9YCxcbiAgICAgICAgICB1c2VRdWVyeVN0cmluZzogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKFF1b3Rlcyk7XG4gICAgY29uc29sZS5sb2coUGxhY2VzKTtcbiAgICBjb25zb2xlLmxvZyhDYXJyaWVycyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn07XG5cbmZldGNoUm91dGVzQW5kUXVvdGVzRGF0YSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/flights/Index.js\n'
      );

      /***/
    }
});
