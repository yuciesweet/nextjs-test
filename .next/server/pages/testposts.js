"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/testposts";
exports.ids = ["pages/testposts"];
exports.modules = {

/***/ "./lib/posts.tsx":
/*!***********************!*\
  !*** ./lib/posts.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllAPiData\": () => (/* binding */ getAllAPiData)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_0__]);\nnode_fetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function getAllAPiData() {\n    const zip = \"1000001\";\n    //郵便番号検索API \n    const Url = \"https://zipcloud.ibsnet.co.jp/api/search?zipcode=\" + zip;\n    const res = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Url) //awaitにより、fetch(Url)が完了した段階で値をreturn\n    ;\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcG9zdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThCO0FBRXZCLGVBQWVDLGFBQWEsR0FBRyxDQUFDO0lBRW5DLEtBQUssQ0FBQ0MsR0FBRyxHQUFHLENBQVM7SUFDckIsRUFBWTtJQUNBLEtBQVAsQ0FBQ0MsR0FBRyxHQUFHLENBQW1ELHFEQUFHRCxHQUFHO0lBQ3JFLEtBQUssQ0FBQ0UsR0FBRyxHQUFHLEtBQUssQ0FBQ0osc0RBQUssQ0FBQ0csR0FBRyxDQUFFLENBQXFDOztJQUNsRSxLQUFLLENBQUNFLElBQUksR0FBRyxLQUFLLENBQUNELEdBQUcsQ0FBQ0MsSUFBSTtJQUMzQixNQUFNLENBQUNBLElBQUk7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29ya3NwYWNlLy4vbGliL3Bvc3RzLnRzeD8yYjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQVBpRGF0YSgpIHtcblxuICAgIGNvbnN0IHppcCA9IFwiMTAwMDAwMVwiXG4gICAgLy/pg7Xkvr/nlarlj7fmpJzntKJBUEkgXG4gICAgY29uc3QgVXJsID0gXCJodHRwczovL3ppcGNsb3VkLmlic25ldC5jby5qcC9hcGkvc2VhcmNoP3ppcGNvZGU9XCIgKyB6aXBcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChVcmwpIC8vYXdhaXTjgavjgojjgorjgIFmZXRjaChVcmwp44GM5a6M5LqG44GX44Gf5q616ZqO44Gn5YCk44KScmV0dXJuXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4ganNvblxufVxuIl0sIm5hbWVzIjpbImZldGNoIiwiZ2V0QWxsQVBpRGF0YSIsInppcCIsIlVybCIsInJlcyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/posts.tsx\n");

/***/ }),

/***/ "./pages/testposts.tsx":
/*!*****************************!*\
  !*** ./pages/testposts.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (/* binding */ yubinApiPost)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/posts */ \"./lib/posts.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_posts__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nasync function getServerSideProps() {\n    const allAPiData = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_1__.getAllAPiData)();\n    return {\n        props: {\n            ad1: allAPiData.results[0].address1,\n            ad2: allAPiData.results[0].address2,\n            ad3: allAPiData.results[0].address3,\n            pc: allAPiData.results[0].prefcode,\n            zip: allAPiData.results[0].zipcode,\n            st: allAPiData.status\n        }\n    };\n}\nfunction yubinApiPost({ ad1 , ad2 , ad3 , pc , zip , st  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Yubin Post!\"\n            }, void 0, false, {\n                fileName: \"/workspace/pages/testposts.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        zip,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/workspace/pages/testposts.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        }, this),\n                        ad1,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/workspace/pages/testposts.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        }, this),\n                        ad2\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/pages/testposts.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/pages/testposts.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true));\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0cG9zdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUVqQyxlQUFlQyxrQkFBa0IsR0FBRSxDQUFDO0lBQ3ZDLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLEtBQUssQ0FBQ0YseURBQWE7SUFDdEMsTUFBTSxFQUFDO1FBQ0ZHLEtBQUssRUFBQyxDQUFDO1lBQ0pDLEdBQUcsRUFBRUYsVUFBVSxDQUFDRyxPQUFPLENBQUMsQ0FBQyxFQUFFQyxRQUFRO1lBQ25DQyxHQUFHLEVBQUVMLFVBQVUsQ0FBQ0csT0FBTyxDQUFDLENBQUMsRUFBRUcsUUFBUTtZQUNuQ0MsR0FBRyxFQUFFUCxVQUFVLENBQUNHLE9BQU8sQ0FBQyxDQUFDLEVBQUVLLFFBQVE7WUFDbkNDLEVBQUUsRUFBRVQsVUFBVSxDQUFDRyxPQUFPLENBQUMsQ0FBQyxFQUFFTyxRQUFRO1lBQ2xDQyxHQUFHLEVBQUVYLFVBQVUsQ0FBQ0csT0FBTyxDQUFDLENBQUMsRUFBRVMsT0FBTztZQUNsQ0MsRUFBRSxFQUFHYixVQUFVLENBQUNjLE1BQU07UUFDMUIsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDO0FBRWMsUUFBUSxDQUFDQyxZQUFZLENBQUMsQ0FBQ2IsQ0FBQUEsR0FBRyxHQUFDRyxHQUFHLEdBQUNFLEdBQUcsR0FBQ0UsRUFBRSxHQUFDRSxHQUFHLEdBQUNFLEVBQUUsR0FBQyxFQUFDLENBQUM7SUFDMUQsTUFBTSw2RUFBQzs7d0ZBRUZHLENBQUU7MEJBQUMsQ0FBVzs7Ozs7O3dGQUNkQyxDQUFFO3NHQUNFQyxDQUFFOzt3QkFDRVAsR0FBRztvR0FDSFEsQ0FBRTs7Ozs7d0JBQ0ZqQixHQUFHO29HQUNIaUIsQ0FBRTs7Ozs7d0JBQ0ZkLEdBQUc7Ozs7Ozs7Ozs7Ozs7O0FBTXBCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3Jrc3BhY2UvLi9wYWdlcy90ZXN0cG9zdHMudHN4PzljZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRBbGxBUGlEYXRhfSBmcm9tICcvbGliL3Bvc3RzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XG4gICAgY29uc3QgYWxsQVBpRGF0YSA9IGF3YWl0IGdldEFsbEFQaURhdGEoKVxuICAgIHJldHVybntcbiAgICAgICAgIHByb3BzOntcbiAgICAgICAgICAgIGFkMTogYWxsQVBpRGF0YS5yZXN1bHRzWzBdLmFkZHJlc3MxLFxuICAgICAgICAgICAgYWQyOiBhbGxBUGlEYXRhLnJlc3VsdHNbMF0uYWRkcmVzczIsXG4gICAgICAgICAgICBhZDM6IGFsbEFQaURhdGEucmVzdWx0c1swXS5hZGRyZXNzMyxcbiAgICAgICAgICAgIHBjOiBhbGxBUGlEYXRhLnJlc3VsdHNbMF0ucHJlZmNvZGUsXG4gICAgICAgICAgICB6aXA6IGFsbEFQaURhdGEucmVzdWx0c1swXS56aXBjb2RlLFxuICAgICAgICAgICAgc3QgOiBhbGxBUGlEYXRhLnN0YXR1cyAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24geXViaW5BcGlQb3N0KHthZDEsYWQyLGFkMyxwYyx6aXAsc3R9KXtcbiAgICByZXR1cm4oXG4gICAgPD5cbiAgICAgICAgPGgxPll1YmluIFBvc3QhPC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIHt6aXB9XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAge2FkMX1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICB7YWQyfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cblxuICAgIDwvPlxuICAgICkgXG59Il0sIm5hbWVzIjpbImdldEFsbEFQaURhdGEiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJhbGxBUGlEYXRhIiwicHJvcHMiLCJhZDEiLCJyZXN1bHRzIiwiYWRkcmVzczEiLCJhZDIiLCJhZGRyZXNzMiIsImFkMyIsImFkZHJlc3MzIiwicGMiLCJwcmVmY29kZSIsInppcCIsInppcGNvZGUiLCJzdCIsInN0YXR1cyIsInl1YmluQXBpUG9zdCIsImgxIiwidWwiLCJsaSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/testposts.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/testposts.tsx"));
module.exports = __webpack_exports__;

})();