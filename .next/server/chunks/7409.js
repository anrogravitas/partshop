"use strict";
exports.id = 7409;
exports.ids = [7409];
exports.modules = {

/***/ 57409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// -------- data -------- //
const socialLinks = [
    {
        id: 1,
        title: "Twitter",
        url: "#",
        icon: "uil-twitter"
    },
    {
        id: 2,
        title: "Facebook",
        url: "#",
        icon: "uil-facebook-f"
    },
    {
        id: 3,
        title: "Linkedin",
        url: "#",
        icon: "uil-linkedin"
    }
];
// ===============================================================================
const ShareButton = ({ btnSize =""  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "dropdown share-dropdown btn-group",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                "aria-haspopup": "true",
                "aria-expanded": "false",
                "data-bs-toggle": "dropdown",
                className: `btn ${btnSize} btn-red rounded-pill btn-icon btn-icon-start dropdown-toggle mb-0 me-0`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "uil uil-share-alt"
                    }),
                    " Share"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "dropdown-menu",
                children: socialLinks.map(({ id , title , icon , url  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "dropdown-item",
                        href: url,
                        target: "__blank",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: `uil ${icon}`
                            }),
                            title
                        ]
                    }, id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareButton);


/***/ })

};
;