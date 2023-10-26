"use strict";
exports.id = 3458;
exports.ids = [3458];
exports.modules = {

/***/ 43458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var icons_solid_mono_Verify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24424);
/* harmony import */ var icons_solid_mono_PushCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28319);
/* harmony import */ var icons_solid_mono_Shipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34820);

// -------- icons -------- //



// -------- data -------- //
const services = [
    {
        id: 1,
        Icon: icons_solid_mono_Shipment__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        title: "Ingyenes kisz\xe1ll\xedt\xe1s",
        description: "30.000 forint feletti v\xe1s\xe1rl\xe1s eset\xe9n ingyensen kisz\xe1ll\xedtjuk a rendel\xe9sed."
    },
    {
        id: 2,
        Icon: icons_solid_mono_PushCart__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        title: "30 napos visszat\xe9r\xedt\xe9s",
        description: "30 napon bel\xfcli v\xe1s\xe1rl\xe1st ingyenesen visszat\xe9r\xedt\xfcnk."
    },
    {
        id: 3,
        Icon: icons_solid_mono_Verify__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
        title: "2 \xe9v garancia",
        description: "Minden term\xe9kre 2 \xe9v garanci\xe1t v\xe1llalunk."
    }
];
const ShopService = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "wrapper bg-gray",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container py-12 py-md-14",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row gx-lg-8 gx-xl-12 gy-8",
                children: services.map(({ id , Icon , title , description  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-6 col-lg-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex flex-row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {})
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "mb-1",
                                            children: title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mb-0",
                                            children: description
                                        })
                                    ]
                                })
                            ]
                        })
                    }, id))
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopService);


/***/ })

};
;