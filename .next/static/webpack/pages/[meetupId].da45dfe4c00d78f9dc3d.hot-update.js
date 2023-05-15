webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ "./components/meetups/MeetupDetails.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\ashish\\react-udemy-23-nextjs-main_proj\\pages\\[meetupId]\\index.js",
    _this = undefined;





var MeetupDetailsPage = function MeetupDetailsPage(_ref) {
  var meetupData = _ref.meetupData;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: meetupData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: meetupData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: meetupData.title,
      image: meetupData.image,
      description: meetupData.description,
      address: meetupData.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
}; // This fxn is always needed for 'pages' which need to pre-render dynamic data by using 'getStaticProps' fxn.
// We need this fxn because by using getStaticProps we are pre-rendering data during build time,
// but we need to keep in mind that this is gonna be a dynamic page, since for different meetup IDs different
// data needs to be loaded i.e. Next.js needs to pre-generate data for all possible IDs. But how will Next.js
// know what all data to pre-generate? Thats why we need to use getStaticPaths fxn
// which will return all the possible dynamic segment values


_c = MeetupDetailsPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetailsPage);

var _c;

$RefreshReg$(_c, "MeetupDetailsPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzUGFnZSIsIm1lZXR1cERhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDNUMsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFBLFVBQVUsQ0FBQ0M7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVELFVBQVUsQ0FBQ0U7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0UscUVBQUMseUVBQUQ7QUFDRSxXQUFLLEVBQUVGLFVBQVUsQ0FBQ0MsS0FEcEI7QUFFRSxXQUFLLEVBQUVELFVBQVUsQ0FBQ0csS0FGcEI7QUFHRSxpQkFBVyxFQUFFSCxVQUFVLENBQUNFLFdBSDFCO0FBSUUsYUFBTyxFQUFFRixVQUFVLENBQUNJO0FBSnRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBZkQsQyxDQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQXRCTUwsaUI7O0FBbUVTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbWVldHVwSWRdLmRhNDVkZmU0YzAwZDc4ZjlkYzNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lZXR1cERldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmNvbnN0IE1lZXR1cERldGFpbHNQYWdlID0gKHsgbWVldHVwRGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnttZWV0dXBEYXRhLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17bWVldHVwRGF0YS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TWVldHVwRGV0YWlsc1xyXG4gICAgICAgIHRpdGxlPXttZWV0dXBEYXRhLnRpdGxlfVxyXG4gICAgICAgIGltYWdlPXttZWV0dXBEYXRhLmltYWdlfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXttZWV0dXBEYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIGFkZHJlc3M9e21lZXR1cERhdGEuYWRkcmVzc31cclxuICAgICAgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIFRoaXMgZnhuIGlzIGFsd2F5cyBuZWVkZWQgZm9yICdwYWdlcycgd2hpY2ggbmVlZCB0byBwcmUtcmVuZGVyIGR5bmFtaWMgZGF0YSBieSB1c2luZyAnZ2V0U3RhdGljUHJvcHMnIGZ4bi5cclxuLy8gV2UgbmVlZCB0aGlzIGZ4biBiZWNhdXNlIGJ5IHVzaW5nIGdldFN0YXRpY1Byb3BzIHdlIGFyZSBwcmUtcmVuZGVyaW5nIGRhdGEgZHVyaW5nIGJ1aWxkIHRpbWUsXHJcbi8vIGJ1dCB3ZSBuZWVkIHRvIGtlZXAgaW4gbWluZCB0aGF0IHRoaXMgaXMgZ29ubmEgYmUgYSBkeW5hbWljIHBhZ2UsIHNpbmNlIGZvciBkaWZmZXJlbnQgbWVldHVwIElEcyBkaWZmZXJlbnRcclxuLy8gZGF0YSBuZWVkcyB0byBiZSBsb2FkZWQgaS5lLiBOZXh0LmpzIG5lZWRzIHRvIHByZS1nZW5lcmF0ZSBkYXRhIGZvciBhbGwgcG9zc2libGUgSURzLiBCdXQgaG93IHdpbGwgTmV4dC5qc1xyXG4vLyBrbm93IHdoYXQgYWxsIGRhdGEgdG8gcHJlLWdlbmVyYXRlPyBUaGF0cyB3aHkgd2UgbmVlZCB0byB1c2UgZ2V0U3RhdGljUGF0aHMgZnhuXHJcbi8vIHdoaWNoIHdpbGwgcmV0dXJuIGFsbCB0aGUgcG9zc2libGUgZHluYW1pYyBzZWdtZW50IHZhbHVlc1xyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9Bc2hpc2g3NDk6R3JlZW5hcnJvdzEyM0Bub2RlLWRldi53N2I5ZDc1Lm1vbmdvZGIubmV0L01lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwiTWVldHVwc1wiKTtcclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpO1xyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLy8gZmFsc2Utd2hlbiB1IGtub3cgdSBoYXZlIGluY2x1ZGVkIGFsbCBJRHMod2hlbiBhbiB1bm1lbnRpb25lZCBJRCBpcyBlbnRlcmVkLCA0MDQgd2lsbCBiZSBnaXZlbilcclxuICAgIC8vIHRydWUtIHdoZW4geW91IGhhdmUganVzdCBlbnRlcmVkIGZyZXF1ZW50bHkgdXNlZCBJRHMod2hlbiBhbiB1bm1lbnRpb25lZCBJRCBpcyBlbnRlcmVkLCBOZXh0LmpzIHdpbGwgZHluYW1pY2FsbHkgZ2VuZXJhdGUgZGF0YSlcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIHBhdGhzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHsgbWVldHVwSWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSB9LFxyXG4gICAgfSkpLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XHJcbiAgLy8gRmV0Y2ggZGF0YSBmcm9tIEFQSSBmb3IgYSBzaW5nbGUgbWVldHVwXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9Bc2hpc2g3NDk6R3JlZW5hcnJvdzEyM0Bub2RlLWRldi53N2I5ZDc1Lm1vbmdvZGIubmV0L01lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwiTWVldHVwc1wiKTtcclxuICBjb25zdCBzZWxlY3RlZE1lZXR1cCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmRPbmUoe1xyXG4gICAgX2lkOiBuZXcgT2JqZWN0SWQobWVldHVwSWQpLFxyXG4gIH0pO1xyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBEYXRhOiB7XHJcbiAgICAgICAgaWQ6IHNlbGVjdGVkTWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIHRpdGxlOiBzZWxlY3RlZE1lZXR1cC50aXRsZSxcclxuICAgICAgICBpbWFnZTogc2VsZWN0ZWRNZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkTWVldHVwLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGFkZHJlc3M6IHNlbGVjdGVkTWVldHVwLmFkZHJlc3MsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==