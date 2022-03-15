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
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./components/layout.module.css":
/*!**************************************!*\
  !*** ./components/layout.module.css ***!
  \**************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"layout_container__fbLkO\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29ya3NwYWNlLy4vY29tcG9uZW50cy9sYXlvdXQubW9kdWxlLmNzcz9lZTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImxheW91dF9jb250YWluZXJfX2ZiTGtPXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.module.css\n");

/***/ }),

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Div)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Div({ children  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: children\n    }, void 0, false, {\n        fileName: \"/workspace/components/layout.tsx\",\n        lineNumber: 4,\n        columnNumber: 12\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBRXpCLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQ3RDLE1BQU0sNkVBQUVDLENBQUc7UUFBQ0MsU0FBUyxFQUFFSixxRUFBZ0I7a0JBQUdFLFFBQVE7Ozs7OztBQUN0RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29ya3NwYWNlLy4vY29tcG9uZW50cy9sYXlvdXQudHN4P2FmMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXYoeyBjaGlsZHJlbiB9KXtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PntjaGlsZHJlbn08L2Rpdj5cbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJEaXYiLCJjaGlsZHJlbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.tsx\n");

/***/ }),

/***/ "./lib/posts-dynamic.tsx":
/*!*******************************!*\
  !*** ./lib/posts-dynamic.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllAPiData\": () => (/* binding */ getAllAPiData)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_0__]);\nnode_fetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function getAllAPiData(id) {\n    //郵便番号検索API \n    const Url = \"https://zipcloud.ibsnet.co.jp/api/search?zipcode=\" + id;\n    const res = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Url) //awaitにより、fetch(Url)が完了した段階で値をreturn\n    ;\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcG9zdHMtZHluYW1pYy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEI7QUFFdkIsZUFBZUMsYUFBYSxDQUFDQyxFQUFTLEVBQUUsQ0FBQztJQUU1QyxFQUFZO0lBQ0EsS0FBUCxDQUFDQyxHQUFHLEdBQUcsQ0FBbUQscURBQUdELEVBQUU7SUFDcEUsS0FBSyxDQUFDRSxHQUFHLEdBQUcsS0FBSyxDQUFDSixzREFBSyxDQUFDRyxHQUFHLENBQUUsQ0FBcUM7O0lBQ2xFLEtBQUssQ0FBQ0UsSUFBSSxHQUFHLEtBQUssQ0FBQ0QsR0FBRyxDQUFDQyxJQUFJO0lBQzNCLE1BQU0sQ0FBQ0EsSUFBSTtBQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3Jrc3BhY2UvLi9saWIvcG9zdHMtZHluYW1pYy50c3g/MGIxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEFQaURhdGEoaWQ6c3RyaW5nKSB7XG5cbiAgICAvL+mDteS+v+eVquWPt+aknOe0okFQSSBcbiAgICBjb25zdCBVcmwgPSBcImh0dHBzOi8vemlwY2xvdWQuaWJzbmV0LmNvLmpwL2FwaS9zZWFyY2g/emlwY29kZT1cIiArIGlkXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goVXJsKSAvL2F3YWl044Gr44KI44KK44CBZmV0Y2goVXJsKeOBjOWujOS6huOBl+OBn+autemajuOBp+WApOOCknJldHVyblxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIGpzb25cbn0iXSwibmFtZXMiOlsiZmV0Y2giLCJnZXRBbGxBUGlEYXRhIiwiaWQiLCJVcmwiLCJyZXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/posts-dynamic.tsx\n");

/***/ }),

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (/* binding */ Post)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _lib_posts_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/posts-dynamic */ \"./lib/posts-dynamic.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts_dynamic__WEBPACK_IMPORTED_MODULE_2__]);\n_lib_posts_dynamic__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function getServerSideProps(context) {\n    //変数宣言\n    let address1 = \"不明な都道府県\";\n    let address2 = \"不明な市区町村\";\n    let address3 = \"不明な大字\";\n    let zipcode = \"不明な郵便番号\";\n    // URLのうち、post/{id}の{id}を取得。※今回の場合は郵便番号\n    const { id  } = context.query;\n    // 郵便番号APIからデータを取得\n    const allApiData = await (0,_lib_posts_dynamic__WEBPACK_IMPORTED_MODULE_2__.getAllAPiData)(id);\n    //郵便番号APIの取得に成功した場合はそれぞれの値をAPIから取得した値に書き換え\n    if (allApiData.results != null) {\n        address1 = allApiData.results[0].address1;\n        address2 = allApiData.results[0].address2;\n        address3 = allApiData.results[0].address3;\n        zipcode = allApiData.results[0].zipcode;\n    }\n    return {\n        props: {\n            ad1: address1,\n            ad2: address2,\n            ad3: address3,\n            zip: zipcode\n        }\n    };\n}\nfunction Post({ ad1 , ad2 , ad3 , zip  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: [\n                \"都道府県名：\",\n                ad1,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/workspace/pages/posts/[id].tsx\",\n                    lineNumber: 47,\n                    columnNumber: 13\n                }, this),\n                \"市区町村名：\",\n                ad2,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/workspace/pages/posts/[id].tsx\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, this),\n                \"大字　　　：\",\n                ad3,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/workspace/pages/posts/[id].tsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, this),\n                \"郵便番号　：\",\n                zip\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/pages/posts/[id].tsx\",\n            lineNumber: 45,\n            columnNumber: 9\n        }, this)\n    }, void 0, false));\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3VDO0FBQ1M7QUFTekMsZUFBZUUsa0JBQWtCLENBQUNDLE9BQXVCLEVBQUMsQ0FBQztJQUM5RCxFQUFNO0lBQ0UsR0FBTCxDQUFDQyxRQUFRLEdBQVcsQ0FBUztJQUNsQixHQUFYLENBQUNDLFFBQVEsR0FBVyxDQUFTO0lBQ2xCLEdBQVgsQ0FBQ0MsUUFBUSxHQUFXLENBQU87SUFDcEIsR0FBUCxDQUFDQyxPQUFPLEdBQVcsQ0FBUztJQUVqQixFQUF5QjtJQUNDLEtBQW5DLENBQUMsQ0FBQ0MsQ0FBQUEsRUFBRSxHQUFDLEdBQUdMLE9BQU8sQ0FBQ00sS0FBSztJQUUxQixFQUFrQjtJQUNNLEtBQW5CLENBQUNDLFVBQVUsR0FBRyxLQUFLLENBQUNULGlFQUFhLENBQUNPLEVBQUU7SUFFekMsRUFBMEM7SUFDMEIsRUFBbEUsRUFBQ0UsVUFBVSxDQUFDQyxPQUFPLElBQUksSUFBSSxFQUFDLENBQUM7UUFDM0JQLFFBQVEsR0FBR00sVUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxFQUFFUCxRQUFRO1FBQ3pDQyxRQUFNLEdBQUdLLFVBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQUMsRUFBRU4sUUFBUTtRQUN6Q0MsUUFBTSxHQUFHSSxVQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFDLEVBQUVMLFFBQVE7UUFDekNDLE9BQUssR0FBR0csVUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxFQUFFSixPQUFPO0lBQzNDLENBQUQ7SUFDQSxNQUFNLEVBQUM7UUFDSkssS0FBSyxFQUFDLENBQUM7WUFDSEMsR0FBRyxFQUFFVCxRQUFRO1lBQ2JVLEdBQUcsRUFBRVQsUUFBUTtZQUNiVSxHQUFHLEVBQUVULFFBQVE7WUFDYlUsR0FBRyxFQUFFVCxPQUFPO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVjLFFBQVEsQ0FBQ1UsSUFBSSxDQUFDLENBQUNKLENBQUFBLEdBQUcsR0FBQ0MsR0FBRyxHQUFDQyxHQUFHLEdBQUNDLEdBQUcsRUFBTSxDQUFDLEVBQUMsQ0FBQztJQUNsRCxNQUFNOzhGQUVEaEIsMERBQU07O2dCQUFDLENBQ0U7Z0JBQWFhLEdBQUc7NEZBQ1RLLENBQVY7Ozs7O2dCQUFHLENBQ0E7Z0JBQWFKLEdBQUc7NEZBQ1RJLENBQVY7Ozs7O2dCQUFHLENBQ0E7Z0JBQWFILEdBQUc7NEZBQ1RHLENBQVY7Ozs7O2dCQUFHLENBQ0E7Z0JBQUNGLEdBQUc7Ozs7Ozs7O0FBSXRCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3Jrc3BhY2UvLi9wYWdlcy9wb3N0cy9baWRdLnRzeD8yMWUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gJ25leHQnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7Z2V0QWxsQVBpRGF0YX0gZnJvbSAnL2xpYi9wb3N0cy1keW5hbWljJ1xuXG5pbnRlcmZhY2UgUHJvcHN7XG4gICAgYWQxOiBTdHJpbmdcbiAgICBhZDI6IFN0cmluZ1xuICAgIGFkMzogU3RyaW5nXG4gICAgemlwOiBTdHJpbmdcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0Ok5leHRQYWdlQ29udGV4dCl7XG4gICAgLy/lpInmlbDlrqPoqIBcbiAgICBsZXQgYWRkcmVzczE6IHN0cmluZyA9IFwi5LiN5piO44Gq6YO96YGT5bqc55yMXCJcbiAgICBsZXQgYWRkcmVzczI6IHN0cmluZyA9IFwi5LiN5piO44Gq5biC5Yy655S65p2RXCJcbiAgICBsZXQgYWRkcmVzczM6IHN0cmluZyA9IFwi5LiN5piO44Gq5aSn5a2XXCJcbiAgICBsZXQgemlwY29kZTogc3RyaW5nID0gXCLkuI3mmI7jgarpg7Xkvr/nlarlj7dcIlxuXG4gICAgLy8gVVJM44Gu44GG44Gh44CBcG9zdC97aWR944Gue2lkfeOCkuWPluW+l+OAguKAu+S7iuWbnuOBruWgtOWQiOOBr+mDteS+v+eVquWPt1xuICAgIGNvbnN0IHtpZH0gPSBjb250ZXh0LnF1ZXJ5XG5cbiAgICAvLyDpg7Xkvr/nlarlj7dBUEnjgYvjgonjg4fjg7zjgr/jgpLlj5blvpdcbiAgICBjb25zdCBhbGxBcGlEYXRhID0gYXdhaXQgZ2V0QWxsQVBpRGF0YShpZClcblxuICAgIC8v6YO15L6/55Wq5Y+3QVBJ44Gu5Y+W5b6X44Gr5oiQ5Yqf44GX44Gf5aC05ZCI44Gv44Gd44KM44Ge44KM44Gu5YCk44KSQVBJ44GL44KJ5Y+W5b6X44GX44Gf5YCk44Gr5pu444GN5o+b44GIXG4gICAgaWYoYWxsQXBpRGF0YS5yZXN1bHRzICE9IG51bGwpe1xuICAgICAgICBhZGRyZXNzMSA944CAYWxsQXBpRGF0YS5yZXN1bHRzWzBdLmFkZHJlc3MxXG4gICAgICAgIGFkZHJlc3MyID3jgIBhbGxBcGlEYXRhLnJlc3VsdHNbMF0uYWRkcmVzczJcbiAgICAgICAgYWRkcmVzczMgPeOAgGFsbEFwaURhdGEucmVzdWx0c1swXS5hZGRyZXNzM1xuICAgICAgICB6aXBjb2RlID3jgIBhbGxBcGlEYXRhLnJlc3VsdHNbMF0uemlwY29kZVxuICAgIH1cbiAgICAgcmV0dXJue1xuICAgICAgICBwcm9wczp7XG4gICAgICAgICAgICBhZDE6IGFkZHJlc3MxLFxuICAgICAgICAgICAgYWQyOiBhZGRyZXNzMixcbiAgICAgICAgICAgIGFkMzogYWRkcmVzczMsXG4gICAgICAgICAgICB6aXA6IHppcGNvZGUsXG4gICAgICAgIH1cbiAgICB9IFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHthZDEsYWQyLGFkMyx6aXB9OlByb3BzKXtcbiAgICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICDpg73pgZPlupznnIzlkI3vvJp7YWQxfVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICDluILljLrnlLrmnZHlkI3vvJp7YWQyfVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICDlpKflrZfjgIDjgIDjgIDvvJp7YWQzfVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICDpg7Xkvr/nlarlj7fjgIDvvJp7emlwfVxuICAgICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiZ2V0QWxsQVBpRGF0YSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiYWRkcmVzczMiLCJ6aXBjb2RlIiwiaWQiLCJxdWVyeSIsImFsbEFwaURhdGEiLCJyZXN1bHRzIiwicHJvcHMiLCJhZDEiLCJhZDIiLCJhZDMiLCJ6aXAiLCJQb3N0IiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[id].tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = import("node-fetch");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].tsx"));
module.exports = __webpack_exports__;

})();