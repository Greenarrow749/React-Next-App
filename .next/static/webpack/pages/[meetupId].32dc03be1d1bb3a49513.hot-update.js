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


var _jsxFileName = "C:\\Users\\ashish\\react-udemy-23-nextjs-main_proj\\pages\\[meetupId]\\index.js",
    _this = undefined;




var MeetupDetailsPage = function MeetupDetailsPage(_ref) {
  var meetupData = _ref.meetupData;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Head, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: meetupData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: meetupData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: meetupData.title,
      image: meetupData.image,
      description: meetupData.description,
      address: meetupData.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzUGFnZSIsIm1lZXR1cERhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQW9CO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUM1QyxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLElBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFRQSxVQUFVLENBQUNDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFFRCxVQUFVLENBQUNFO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFLHFFQUFDLHlFQUFEO0FBQ0UsV0FBSyxFQUFFRixVQUFVLENBQUNDLEtBRHBCO0FBRUUsV0FBSyxFQUFFRCxVQUFVLENBQUNHLEtBRnBCO0FBR0UsaUJBQVcsRUFBRUgsVUFBVSxDQUFDRSxXQUgxQjtBQUlFLGFBQU8sRUFBRUYsVUFBVSxDQUFDSTtBQUp0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQWZELEMsQ0FpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0F0Qk1MLGlCOztBQW1FU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW21lZXR1cElkXS4zMmRjMDNiZTFkMWJiM2E0OTUxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNZWV0dXBEZXRhaWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsc1wiO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuY29uc3QgTWVldHVwRGV0YWlsc1BhZ2UgPSAoeyBtZWV0dXBEYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e21lZXR1cERhdGEudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXttZWV0dXBEYXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNZWV0dXBEZXRhaWxzXHJcbiAgICAgICAgdGl0bGU9e21lZXR1cERhdGEudGl0bGV9XHJcbiAgICAgICAgaW1hZ2U9e21lZXR1cERhdGEuaW1hZ2V9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e21lZXR1cERhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgYWRkcmVzcz17bWVldHVwRGF0YS5hZGRyZXNzfVxyXG4gICAgICAvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuLy8gVGhpcyBmeG4gaXMgYWx3YXlzIG5lZWRlZCBmb3IgJ3BhZ2VzJyB3aGljaCBuZWVkIHRvIHByZS1yZW5kZXIgZHluYW1pYyBkYXRhIGJ5IHVzaW5nICdnZXRTdGF0aWNQcm9wcycgZnhuLlxyXG4vLyBXZSBuZWVkIHRoaXMgZnhuIGJlY2F1c2UgYnkgdXNpbmcgZ2V0U3RhdGljUHJvcHMgd2UgYXJlIHByZS1yZW5kZXJpbmcgZGF0YSBkdXJpbmcgYnVpbGQgdGltZSxcclxuLy8gYnV0IHdlIG5lZWQgdG8ga2VlcCBpbiBtaW5kIHRoYXQgdGhpcyBpcyBnb25uYSBiZSBhIGR5bmFtaWMgcGFnZSwgc2luY2UgZm9yIGRpZmZlcmVudCBtZWV0dXAgSURzIGRpZmZlcmVudFxyXG4vLyBkYXRhIG5lZWRzIHRvIGJlIGxvYWRlZCBpLmUuIE5leHQuanMgbmVlZHMgdG8gcHJlLWdlbmVyYXRlIGRhdGEgZm9yIGFsbCBwb3NzaWJsZSBJRHMuIEJ1dCBob3cgd2lsbCBOZXh0LmpzXHJcbi8vIGtub3cgd2hhdCBhbGwgZGF0YSB0byBwcmUtZ2VuZXJhdGU/IFRoYXRzIHdoeSB3ZSBuZWVkIHRvIHVzZSBnZXRTdGF0aWNQYXRocyBmeG5cclxuLy8gd2hpY2ggd2lsbCByZXR1cm4gYWxsIHRoZSBwb3NzaWJsZSBkeW5hbWljIHNlZ21lbnQgdmFsdWVzXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL0FzaGlzaDc0OTpHcmVlbmFycm93MTIzQG5vZGUtZGV2Lnc3YjlkNzUubW9uZ29kYi5uZXQvTWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJNZWV0dXBzXCIpO1xyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KCk7XHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAvLyBmYWxzZS13aGVuIHUga25vdyB1IGhhdmUgaW5jbHVkZWQgYWxsIElEcyh3aGVuIGFuIHVubWVudGlvbmVkIElEIGlzIGVudGVyZWQsIDQwNCB3aWxsIGJlIGdpdmVuKVxyXG4gICAgLy8gdHJ1ZS0gd2hlbiB5b3UgaGF2ZSBqdXN0IGVudGVyZWQgZnJlcXVlbnRseSB1c2VkIElEcyh3aGVuIGFuIHVubWVudGlvbmVkIElEIGlzIGVudGVyZWQsIE5leHQuanMgd2lsbCBkeW5hbWljYWxseSBnZW5lcmF0ZSBkYXRhKVxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgcGF0aHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XHJcbiAgICAgIHBhcmFtczogeyBtZWV0dXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpIH0sXHJcbiAgICB9KSksXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgbWVldHVwSWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDtcclxuICAvLyBGZXRjaCBkYXRhIGZyb20gQVBJIGZvciBhIHNpbmdsZSBtZWV0dXBcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL0FzaGlzaDc0OTpHcmVlbmFycm93MTIzQG5vZGUtZGV2Lnc3YjlkNzUubW9uZ29kYi5uZXQvTWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJNZWV0dXBzXCIpO1xyXG4gIGNvbnN0IHNlbGVjdGVkTWVldHVwID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZE9uZSh7XHJcbiAgICBfaWQ6IG5ldyBPYmplY3RJZChtZWV0dXBJZCksXHJcbiAgfSk7XHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cERhdGE6IHtcclxuICAgICAgICBpZDogc2VsZWN0ZWRNZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgdGl0bGU6IHNlbGVjdGVkTWVldHVwLnRpdGxlLFxyXG4gICAgICAgIGltYWdlOiBzZWxlY3RlZE1lZXR1cC5pbWFnZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogc2VsZWN0ZWRNZWV0dXAuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRNZWV0dXAuYWRkcmVzcyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHNQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9