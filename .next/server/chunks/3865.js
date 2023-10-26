"use strict";
exports.id = 3865;
exports.ids = [3865];
exports.modules = {

/***/ 48701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4794);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_2__);



// =================================================
const CodeHighlight = ({ children , language  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__.Prism, {
        wrapLines: true,
        wrapLongLines: true,
        style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_2__.dracula,
        language: language,
        customStyle: {
            padding: "2rem",
            margin: 0,
            borderRadius: "0 0 .4rem .4rem"
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CodeHighlight);


/***/ }),

/***/ 2353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cn": () => (/* binding */ themeColorMarkup),
/* harmony export */   "U4": () => (/* binding */ textColorMarkup),
/* harmony export */   "kZ": () => (/* binding */ bgColorMarkup),
/* harmony export */   "kl": () => (/* binding */ themeProviderMarkup)
/* harmony export */ });
const bgColorMarkup = `<div className="bg-yellow" />
<div className="bg-pale-yellow" />
<div className="bg-soft-yellow" />
  
<div className="bg-orange" />
<div className="bg-pale-orange" />
<div className="bg-soft-orange" />
  
<div className="bg-red" />
<div className="bg-pale-red" />
<div className="bg-soft-red" />
  
<div className="bg-pink" />
<div className="bg-pale-pink" />
<div className="bg-soft-pink" />
  
<div className="bg-violet" />
<div className="bg-pale-violet" />
<div className="bg-soft-violet" />
  
<div className="bg-purple" />
<div className="bg-pale-purple" />
<div className="bg-soft-purple" />
  
<div className="bg-blue" />
<div className="bg-pale-blue" />
<div className="bg-soft-blue" />
  
<div className="bg-aqua" />
<div className="bg-pale-aqua" />
<div className="bg-soft-aqua" />
  
<div className="bg-green" />
<div className="bg-pale-green" />
<div className="bg-soft-green" />
  
<div className="bg-leaf" />
<div className="bg-pale-leaf" />
<div className="bg-soft-leaf" />
  
<div className="bg-ash" />
<div className="bg-pale-ash" />
<div className="bg-soft-ash" />
  
<div className="bg-navy" />
<div className="bg-pale-navy" />
<div className="bg-soft-navy" />

<div className="bg-fuchsia" />
<div className="bg-pale-fuchsia" />
<div className="bg-soft-fuchsia" />

<div className="bg-sky" />
<div className="bg-pale-sky" />
<div className="bg-soft-sky" />

<div className="bg-grape" />
<div className="bg-pale-grape" />
<div className="bg-soft-grape" />

<div className="gradient-1" />
<div className="gradient-2" />
<div className="gradient-3" />
<div className="gradient-4" />
<div className="gradient-5" />
<div className="gradient-6" />
<div className="gradient-7" />
`;
const textColorMarkup = `<span className="text-yellow" />
<span className="text-orange" />
<span className="text-red" />
<span className="text-pink" />
<span className="text-violet" />
<span className="text-purple" />
<span className="text-blue" />
<span className="text-aqua" />
<span className="text-green" />
<span className="text-leaf" />
<span className="text-ash" />
<span className="text-navy" />
<span className="text-fuchsia" />
<span className="text-sky" />
<span className="text-grape" />

<span className="text-primary" />
<span className="text-muted" />
<span className="text-white" />

<span className="text-gradient gradient-1" />
<span className="text-gradient gradient-2" />
<span className="text-gradient gradient-3" />
<span className="text-gradient gradient-4" />
<span className="text-gradient gradient-5" />
<span className="text-gradient gradient-6" />
<span className="text-gradient gradient-7" />
`;
const themeColorMarkup = `case '/demo-26':
    changeColor('/css/colors/grape.css', '/css/fonts/urbanist.css');
    break;
`;
const themeProviderMarkup = `//_app.tsx

<ThemeProvider> // Remove this
    <div className="page-loader" /> // Remove this
    <Component {...pageProps} />
</ThemeProvider> // Remove this
`;



/***/ })

};
;