"use strict";
exports.id = 7159;
exports.ids = [7159];
exports.modules = {

/***/ 67159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _links_NextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99472);


// ==========================================================
const Pagination = (props)=>{
    const { className ="justify-content-center" , altStyle =false  } = props;
    const NextPreviousBtn = (url, icon)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_links_NextLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            href: url,
            className: "page-link",
            title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: `uil ${icon}`
            })
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: `d-flex ${className}`,
        "aria-label": "pagination",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: `pagination ${altStyle ? "pagination-alt" : ""}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "page-item disabled",
                    children: NextPreviousBtn("#", "uil-arrow-left")
                }),
                [
                    1,
                    2,
                    3
                ].map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: `page-item ${i === 0 ? "active" : ""}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "page-link",
                            children: item
                        })
                    }, item)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "page-item",
                    children: NextPreviousBtn("#", "uil-arrow-right")
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ })

};
;