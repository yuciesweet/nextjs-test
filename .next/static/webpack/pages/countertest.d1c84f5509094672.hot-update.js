"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/countertest",{

/***/ "./components/counter.tsx":
/*!********************************!*\
  !*** ./components/counter.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Counter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Counter() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), count = ref[0], setCount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100), countHundred = ref1[0], setCountH = ref1[1];\n    var countUp = function() {\n        setCount(count + 1);\n    };\n    var countDown = function() {\n        setCountH(countHundred - 1);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Counter\"\n            }, void 0, false, {\n                fileName: \"/workspace/components/counter.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"ui labeled button\",\n                tabIndex: 0,\n                onClick: countUp,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ui red button\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"heart icon\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/components/counter.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 21\n                            }, this),\n                            \" Up\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/components/counter.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"ui basic red left pointing label\",\n                        children: count\n                    }, void 0, false, {\n                        fileName: \"/workspace/components/counter.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/components/counter.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"ui labeled button\",\n                tabIndex: 0,\n                onClick: countDown,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ui basic blue button\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fork icon\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/components/counter.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, this),\n                            \" Down\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/components/counter.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"ui basic left pointing blue label\",\n                        children: countHundred\n                    }, void 0, false, {\n                        fileName: \"/workspace/components/counter.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/components/counter.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Counter, \"eYIJg9qeHIxYkiHBKFn5d0M9PQI=\");\n_c = Counter;\nvar _c;\n$RefreshReg$(_c, \"Counter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvdW50ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQzs7QUFFakIsUUFBUSxDQUFDQyxPQUFPLEdBQUcsQ0FBQzs7SUFDL0IsR0FBSyxDQUFxQkQsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBN0JFLEtBQUssR0FBY0YsR0FBVyxLQUF2QkcsUUFBUSxHQUFJSCxHQUFXO0lBQ3JDLEdBQUssQ0FBNkJBLElBQWEsR0FBYkEsK0NBQVEsQ0FBQyxHQUFHLEdBQXZDSSxZQUFZLEdBQWVKLElBQWEsS0FBMUJLLFNBQVMsR0FBSUwsSUFBYTtJQUMvQyxHQUFLLENBQUNNLE9BQU8sR0FBRyxRQUNwQixHQUQwQixDQUFDO1FBQ25CSCxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxHQUFLLENBQUNLLFNBQVMsR0FBRyxRQUN0QixHQUQ0QixDQUFDO1FBQ3JCRixTQUFTLENBQUNELFlBQVksR0FBRyxDQUFDO0lBQzlCLENBQUM7SUFHRCxNQUFNOzt3RkFFR0ksQ0FBQzswQkFBQyxDQUFPOzs7Ozs7d0ZBQ1RDLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFtQjtnQkFBQ0MsUUFBUSxFQUFFLENBQUM7Z0JBQUVDLE9BQU8sRUFBRU4sT0FBTzs7Z0dBQzNERyxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBZTs7d0dBQ3pCRyxDQUFDO2dDQUFDSCxTQUFTLEVBQUMsQ0FBWTs7Ozs7OzRCQUFHLENBQ2hDOzs7Ozs7O2dHQUNDSSxDQUFDO3dCQUFDSixTQUFTLEVBQUMsQ0FBa0M7a0NBQzFDUixLQUFLOzs7Ozs7Ozs7Ozs7d0ZBR2JPLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFtQjtnQkFBQ0MsUUFBUSxFQUFFLENBQUM7Z0JBQUVDLE9BQU8sRUFBRUwsU0FBUzs7Z0dBQzdERSxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBc0I7O3dHQUNoQ0csQ0FBQztnQ0FBQ0gsU0FBUyxFQUFDLENBQVc7Ozs7Ozs0QkFBRyxDQUMvQjs7Ozs7OztnR0FDQ0ksQ0FBQzt3QkFBQ0osU0FBUyxFQUFDLENBQW1DO2tDQUMzQ04sWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUFLakMsQ0FBQztHQWhDdUJILE9BQU87S0FBUEEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvdW50ZXIudHN4P2U4MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudGVyKCkge1xuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbY291bnRIdW5kcmVkLCBzZXRDb3VudEhdID0gdXNlU3RhdGUoMTAwKVxuICAgIGNvbnN0IGNvdW50VXAgPSAoKSA9PiB7XG4gICAgICAgIHNldENvdW50KGNvdW50ICsgMSlcbiAgICB9XG4gICAgY29uc3QgY291bnREb3duID0gKCkgPT4ge1xuICAgICAgICBzZXRDb3VudEgoY291bnRIdW5kcmVkIC0gMSlcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8cD5Db3VudGVyPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBsYWJlbGVkIGJ1dHRvblwiIHRhYkluZGV4PXswfSBvbkNsaWNrPXtjb3VudFVwfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHJlZCBidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVhcnQgaWNvblwiIC8+IFVwXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWkgYmFzaWMgcmVkIGxlZnQgcG9pbnRpbmcgbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAge2NvdW50fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBsYWJlbGVkIGJ1dHRvblwiIHRhYkluZGV4PXswfSBvbkNsaWNrPXtjb3VudERvd259PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgYmFzaWMgYmx1ZSBidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm9yayBpY29uXCIgLz4gRG93blxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVpIGJhc2ljIGxlZnQgcG9pbnRpbmcgYmx1ZSBsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICB7Y291bnRIdW5kcmVkfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ291bnRlciIsImNvdW50Iiwic2V0Q291bnQiLCJjb3VudEh1bmRyZWQiLCJzZXRDb3VudEgiLCJjb3VudFVwIiwiY291bnREb3duIiwicCIsImRpdiIsImNsYXNzTmFtZSIsInRhYkluZGV4Iiwib25DbGljayIsImkiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/counter.tsx\n");

/***/ })

});