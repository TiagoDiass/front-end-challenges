webpackHotUpdate_N_E("pages/index",{

/***/ "./components/QuestionRow/QuestionRow.js":
/*!***********************************************!*\
  !*** ./components/QuestionRow/QuestionRow.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QuestionRow_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionRow.elements */ "./components/QuestionRow/QuestionRow.elements.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Valore\\Documents\\Studies\\front-end-challenges\\faq-card\\components\\QuestionRow\\QuestionRow.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var QuestionRow = function QuestionRow(_ref) {
  _s();

  var question = _ref.question;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      active = _useState[0],
      setActive = _useState[1];

  var collapseQuestion = function collapseQuestion() {
    setActive(!active);
  };

  return __jsx(_QuestionRow_elements__WEBPACK_IMPORTED_MODULE_1__["QuestionRowWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_QuestionRow_elements__WEBPACK_IMPORTED_MODULE_1__["QuestionTitleWrapper"], {
    active: active,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, question.question), __jsx("img", {
    className: active && 'rotate',
    onClick: collapseQuestion,
    src: "https://raw.githubusercontent.com/TiagoDiass/front-end-challenges/431c50b041c2ef6d65f9f2447dc5eaf5f5ff4d48/faq-card/public/images/icon-arrow-down.svg",
    width: 20,
    height: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), active && __jsx(_QuestionRow_elements__WEBPACK_IMPORTED_MODULE_1__["QuestionAnswer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 18
    }
  }, question.answer));
};

_s(QuestionRow, "1cfVChV6gA1Fk8+xDnwTj3gmgZo=");

_c = QuestionRow;
/* harmony default export */ __webpack_exports__["default"] = (QuestionRow);

var _c;

$RefreshReg$(_c, "QuestionRow");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWVzdGlvblJvdy9RdWVzdGlvblJvdy5qcyJdLCJuYW1lcyI6WyJRdWVzdGlvblJvdyIsInF1ZXN0aW9uIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJjb2xsYXBzZVF1ZXN0aW9uIiwiYW5zd2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFNQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDUkMsc0RBQVEsQ0FBQyxLQUFELENBREE7QUFBQSxNQUM3QkMsTUFENkI7QUFBQSxNQUNyQkMsU0FEcUI7O0FBR3BDLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QkQsYUFBUyxDQUFDLENBQUNELE1BQUYsQ0FBVDtBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBFQUFEO0FBQXNCLFVBQU0sRUFBRUEsTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0YsUUFBUSxDQUFDQSxRQUFkLENBREYsRUFFRTtBQUNFLGFBQVMsRUFBRUUsTUFBTSxJQUFJLFFBRHZCO0FBRUUsV0FBTyxFQUFFRSxnQkFGWDtBQUdFLE9BQUcsRUFBQyx1SkFITjtBQUlFLFNBQUssRUFBRSxFQUpUO0FBS0UsVUFBTSxFQUFFLENBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFXR0YsTUFBTSxJQUFJLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQkYsUUFBUSxDQUFDSyxNQUExQixDQVhiLENBREY7QUFlRCxDQXRCRDs7R0FBTU4sVzs7S0FBQUEsVztBQXdCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjIxZDMwODkwMzJmOWYxM2JhZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBRdWVzdGlvblJvd1dyYXBwZXIsXHJcbiAgUXVlc3Rpb25UaXRsZVdyYXBwZXIsXHJcbiAgUXVlc3Rpb25BbnN3ZXIsXHJcbn0gZnJvbSAnLi9RdWVzdGlvblJvdy5lbGVtZW50cyc7XHJcblxyXG5jb25zdCBRdWVzdGlvblJvdyA9ICh7IHF1ZXN0aW9uIH0pID0+IHtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBjb2xsYXBzZVF1ZXN0aW9uID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKCFhY3RpdmUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UXVlc3Rpb25Sb3dXcmFwcGVyPlxyXG4gICAgICA8UXVlc3Rpb25UaXRsZVdyYXBwZXIgYWN0aXZlPXthY3RpdmV9PlxyXG4gICAgICAgIDxoMz57cXVlc3Rpb24ucXVlc3Rpb259PC9oMz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZSAmJiAncm90YXRlJ31cclxuICAgICAgICAgIG9uQ2xpY2s9e2NvbGxhcHNlUXVlc3Rpb259XHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vVGlhZ29EaWFzcy9mcm9udC1lbmQtY2hhbGxlbmdlcy80MzFjNTBiMDQxYzJlZjZkNjVmOWYyNDQ3ZGM1ZWFmNWY1ZmY0ZDQ4L2ZhcS1jYXJkL3B1YmxpYy9pbWFnZXMvaWNvbi1hcnJvdy1kb3duLnN2Z1wiXHJcbiAgICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezN9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9RdWVzdGlvblRpdGxlV3JhcHBlcj5cclxuICAgICAge2FjdGl2ZSAmJiA8UXVlc3Rpb25BbnN3ZXI+e3F1ZXN0aW9uLmFuc3dlcn08L1F1ZXN0aW9uQW5zd2VyPn1cclxuICAgIDwvUXVlc3Rpb25Sb3dXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvblJvdztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==