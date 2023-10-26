"use strict";
exports.id = 9486;
exports.ids = [9486];
exports.modules = {

/***/ 89486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useLightBox = ()=>{
    const lightboxLoad = ()=>{
        const GLightbox = __webpack_require__(41440);
        GLightbox({
            loop: false,
            moreLength: 0,
            zoomable: false,
            autoplayVideos: true,
            touchNavigation: true,
            selector: "*[data-glightbox]",
            // slideExtraAttributes: { poster: '' },
            plyr: {
                config: {
                    fullscreen: {
                        enabled: false,
                        iosNative: false
                    },
                    youtube: {
                        noCookie: true,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3
                    },
                    vimeo: {
                        byline: false,
                        portrait: false,
                        title: false,
                        transparent: false
                    }
                }
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        lightboxLoad();
    }, []);
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLightBox);


/***/ })

};
;