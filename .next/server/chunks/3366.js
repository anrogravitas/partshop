"use strict";
exports.id = 3366;
exports.ids = [3366];
exports.modules = {

/***/ 3366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99472);


// ========================================================
const breadcrumb = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Shop",
        url: "/shop"
    }
];
const Breadcrumb = ({ data =breadcrumb , className =""  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "d-inline-block",
        "aria-label": "breadcrumb",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
            className: `breadcrumb ${className}`,
            children: data.map(({ id , title , url  }, i)=>{
                return data.length - 1 === i ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "breadcrumb-item active",
                    "aria-current": "page",
                    children: title
                }, id) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "breadcrumb-item",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        title: title,
                        href: url
                    })
                }, id);
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);


/***/ })

};
;