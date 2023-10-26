"use strict";
exports.id = 4145;
exports.ids = [4145];
exports.modules = {

/***/ 94643:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73153);
/* harmony import */ var hooks_useIsotope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80959);
/* harmony import */ var data_demo_7__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82934);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- custom hook -------- //

// -------- data -------- //

const Testimonial = ()=>{
    // used for masonry layout
    (0,hooks_useIsotope__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "wrapper bg-gradient-reverse-primary",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container py-10 py-md-10",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "fs-15 text-uppercase text-muted mb-3",
                                children: "V\xe1s\xe1rl\xf3ink mondt\xe1k"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "display-4 mb-10 px-xl-10 px-xxl-15",
                                children: "N\xe9zze meg, mit mondanak r\xf3lunk a v\xe1s\xe1rl\xf3ink."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row isotope gy-6",
                        children: data_demo_7__WEBPACK_IMPORTED_MODULE_3__/* .testimonialList.map */ ._3.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item col-md-6 col-xl-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__/* .TestimonialCard3 */ .ZW, {
                                    ...item,
                                    shadow: true
                                })
                            }, item.id))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56308:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99472);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73153);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_2__]);
components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// -------- data -------- //

const Testimonial1 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "wrapper bg-gradient-reverse-primary",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container py-14 py-md-18",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row gx-lg-8 gx-xl-12 gy-10 align-items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-7",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row gx-md-5 gy-5",
                            children: data_testimonial_list__WEBPACK_IMPORTED_MODULE_3__/* .testimonialList1.map */ .c_.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `col-md-6 ${item.columnClasses}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_2__/* .TestimonialCard1 */ .a9, {
                                        ...item
                                    })
                                }, i))
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-lg-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "fs-16 text-uppercase text-muted mb-3 mt-lg-n6",
                                children: "Our Community"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "display-4 mb-5",
                                children: "Don't take our word for it. See what customers are saying about us."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                href: "#",
                                title: "All Testimonials",
                                className: "btn btn-primary rounded-pill mt-3"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65692:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73153);
/* harmony import */ var hooks_useIsotope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80959);
/* harmony import */ var data_demo_7__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82934);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- custom hook -------- //

// -------- data -------- //

const Testimonial10 = ()=>{
    // used for masonry layout
    (0,hooks_useIsotope__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "wrapper bg-soft-primary",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container py-14 py-md-17",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row mt-md-n25",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "fs-15 text-uppercase text-muted mb-3",
                                children: "Happy Customers"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "display-4 mb-10 px-xl-10 px-xxl-15",
                                children: "Don't take our word for it. See what customers are saying about us."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row isotope gy-6",
                        children: data_demo_7__WEBPACK_IMPORTED_MODULE_3__/* .testimonialList.map */ ._3.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item col-md-6 col-xl-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__/* .TestimonialCard3 */ .ZW, {
                                    ...item,
                                    shadow: true
                                })
                            }, item.id))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial10);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52959:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77632);
/* harmony import */ var data_demo_11__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29190);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- data -------- //

const Testimonial11 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row mt-md-n50p text-white text-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-xl-10 mx-auto mb-14 mb-lg-n6",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "card image-wrapper bg-full bg-image bg-overlay bg-overlay-400",
                style: {
                    backgroundImage: "url(/img/photos/bg2.jpg)"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "card-body p-9 p-xl-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row gx-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xxl-9 mx-auto",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                navigation: false,
                                slidesPerView: 1,
                                className: "dots-light dots-closer",
                                children: data_demo_11__WEBPACK_IMPORTED_MODULE_2__/* .testimonialList.map */ ._3.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "ratings five mb-3"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                                                className: "border-0 fs-lg mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        children: [
                                                            "“",
                                                            item.review,
                                                            "”"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "blockquote-details justify-content-center text-center",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info ps-0",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    className: "mb-1 text-white",
                                                                    children: item.name
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "mb-0",
                                                                    children: item.designation
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }, item.id))
                            })
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial11);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73940:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73153);
/* harmony import */ var data_demo_12__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25553);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- data -------- //

const Testimonial12 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid mb-14 mb-md-18 mt-3",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row isotope gy-6 mt-n19 mt-md-n22",
            children: data_demo_12__WEBPACK_IMPORTED_MODULE_2__/* .reviews.map */ .A9.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "item col-md-6 col-xl-3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__/* .TestimonialCard5 */ .X6, {
                        borderBottom: true,
                        ...item
                    })
                }, item.id))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial12);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3670:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77632);
/* harmony import */ var components_reuseable_FigureImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42744);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// -------- data -------- //

const Testimonial13 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "wrapper image-wrapper bg-image bg-overlay bg-overlay-300 text-white",
        style: {
            backgroundImage: "url(/img/photos/bg2.jpg)"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container py-14 py-md-17",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "display-4 mb-5 text-white text-center",
                    children: "Happy Customers"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-10 col-lg-8 mx-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            slidesPerView: 1,
                            navigation: false,
                            className: "dots-light dots-closer text-center",
                            grabCursor: true,
                            children: data_testimonial_list__WEBPACK_IMPORTED_MODULE_3__/* .testimonialList3.map */ .l0.map(({ name , image , designation , review , id  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                                    className: "border-0 fs-lg mb-0",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                "“",
                                                review,
                                                "”"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "blockquote-details justify-content-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_FigureImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                    width: 100,
                                                    height: 100,
                                                    className: "rounded-circle w-12 overflow-hidden",
                                                    src: image
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "mb-1 text-white",
                                                            children: name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mb-0",
                                                            children: designation
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, id))
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial13);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5406:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73153);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- data -------- //

const Testimonial14 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid mb-14 mb-md-17",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row isotope gy-6 mt-n19 mt-md-n22",
            children: data_testimonial_list__WEBPACK_IMPORTED_MODULE_2__/* .testimonialList4.map */ .xZ.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "item col-md-6 col-xl-3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__/* .TestimonialCard5 */ .X6, {
                        ...item
                    })
                }, item.id))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial14);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52753:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73153);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- data -------- //

const Testimonial14 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid mb-18",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row isotope gy-6 mt-n18",
            children: data_testimonial_list__WEBPACK_IMPORTED_MODULE_2__/* .testimonialList4.map */ .xZ.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "item col-md-6 col-xl-3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__/* .TestimonialCard6 */ .xq, {
                        ...item
                    })
                }, item.id))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial14);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67453:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77632);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- data-------- //

const Testimonial16 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "card shadow-lg mt-n21 mt-md-n23",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row gx-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start",
                    style: {
                        backgroundImage: "url(/img/photos/tm2.jpg)"
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "p-10 p-md-11 px-lg-13 py-lg-14",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            slidesPerView: 1,
                            navigation: false,
                            className: "dots-closer",
                            children: data_testimonial_list__WEBPACK_IMPORTED_MODULE_2__/* .testimonialList5.map */ .t_.map(({ id  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "ratings five mt-4 mb-3"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                                            className: "border-0 fs-lg text-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.”"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "blockquote-details justify-content-center text-center",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "info ps-0",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                className: "mb-1",
                                                                children: "Cory Zamora"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "mb-0",
                                                                children: "Marketing Specialist"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }, id))
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial16);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48757:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73153);
/* harmony import */ var hooks_useIsotope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80959);
/* harmony import */ var data_demo_7__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82934);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- custom hook -------- //

// -------- data -------- //

const Testimonial17 = ()=>{
    // used for masonry grid layout
    (0,hooks_useIsotope__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "wrapper bg-gradient-primary",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container pt-12 pt-lg-8 pb-14 pb-md-17",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row text-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-lg-8 offset-lg-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "fs-16 text-uppercase text-primary mb-3",
                                children: "Happy Customers"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "display-3 mb-10 px-xxl-10",
                                children: "Don't take our word for it. See what customers are saying about us."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row isotope gy-6",
                        children: data_demo_7__WEBPACK_IMPORTED_MODULE_3__/* .testimonialList.map */ ._3.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item col-md-6 col-xl-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__/* .TestimonialCard3 */ .ZW, {
                                    ...item,
                                    shadow: true
                                })
                            }, item.id))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial17);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77632);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- data -------- //

const Testimonial18 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "wrapper image-wrapper bg-image bg-overlay text-white",
        style: {
            backgroundImage: "url(/img/photos/bg32.jpg)"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container py-14 py-md-17 text-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "icn-flower text-white fs-30 opacity-50"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row mt-3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-xl-9 col-xxl-8 mx-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            navigation: false,
                            slidesPerView: 1,
                            className: "dots-light dots-closer",
                            children: data_testimonial_list__WEBPACK_IMPORTED_MODULE_2__/* .testimonialList6.map */ .n9.map(({ id , name , review  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                                    className: "border-0 fs-24 mb-0",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                "“",
                                                review,
                                                "”"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "blockquote-details justify-content-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "info p-0",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "mb-0 text-white",
                                                    children: name
                                                })
                                            })
                                        })
                                    ]
                                }, id))
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial18);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43995:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77632);
/* harmony import */ var utils_carouselBreakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32783);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// -------- data -------- //

const Testimonial19 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "testimonials",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "wrapper image-wrapper bg-image bg-overlay",
            style: {
                backgroundImage: "url(/img/photos/bg35.jpg)"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container pt-15 pb-13",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "display-5 mb-4 text-center text-white",
                        children: "Happy Customers"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        spaceBetween: 0,
                        navigation: false,
                        breakpoints: utils_carouselBreakpoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                        className: "dots-closer dots-light dots-light-75",
                        children: data_testimonial_list__WEBPACK_IMPORTED_MODULE_3__/* .testimonialList7.map */ .cu.map(({ id , name , designation , review  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item-inner",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "card border-0 bg-white-900",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "card-body",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "ratings five mb-3"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                                                className: "border-0 mb-0",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        children: [
                                                            "“",
                                                            review,
                                                            "”"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "blockquote-details",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info p-0",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    className: "mb-0",
                                                                    children: name
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "mb-0",
                                                                    children: designation
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }, id))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial19);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48011:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73153);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Testimonial2 = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "position-relative mt-n18 mt-md-n23 mb-16 mb-md-18",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "shape rounded-circle bg-line primary rellax w-18 h-18",
                style: {
                    zIndex: 0,
                    top: "-2rem",
                    right: "-2.7rem"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "shape rounded-circle bg-soft-primary rellax w-18 h-18",
                style: {
                    zIndex: 0,
                    left: "-3rem",
                    bottom: "-1rem"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__/* .TestimonialCard4 */ ._v, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial2);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43562:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77632);
/* harmony import */ var data_demo_26__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88231);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- data -------- //

const Testimonial20 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "card bg-soft-primary mb-15 mb-md-17",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "card-body py-14 px-lg-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row text-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-lg-8 offset-lg-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "fs-16 text-uppercase text-primary mb-3",
                                children: "Happy Customers"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "display-4 mb-10 px-xxl-10",
                                children: "Don't take our word for it. See what customers are saying about us."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row gx-lg-8 gx-xl-12 align-items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-5 ms-auto col-xl-4 d-none d-lg-flex",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "img-mask mask-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/img/photos/about31.jpg",
                                    srcSet: "/img/photos/about31@2x.jpg 2x",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-xl-6 col-xxl-5 me-auto",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "swiper-container",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    spaceBetween: 0,
                                    navigation: false,
                                    slidesPerView: 1,
                                    className: "dots-start",
                                    children: data_demo_26__WEBPACK_IMPORTED_MODULE_2__/* ["default"].testimonialList.map */ .Z.testimonialList.map(({ id , name , designation , review  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "ratings five mb-3"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                                                    className: "border-0 fs-lg mb-0",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            children: [
                                                                "“",
                                                                review,
                                                                "”"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "blockquote-details",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "info ps-0",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                        className: "mb-1",
                                                                        children: name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "mb-0",
                                                                        children: designation
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, id))
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial20);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Testimonial21 = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row position-relative mb-15 mb-md-17",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                className: "rounded position-absolute d-none d-lg-block",
                style: {
                    top: "50%",
                    right: 0,
                    width: "45%",
                    height: "auto",
                    zIndex: 2,
                    transform: "translateY(-50%)"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/img/photos/tei1.jpg",
                    srcSet: "/img/photos/tei1@2x.jpg 2x",
                    alt: ""
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-lg-9 text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "card bg-gray",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "card-body p-md-10 py-xxl-16",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row gx-0",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-8 ps-xl-10",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "ratings five fs-20 mb-3"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                                        className: "border-0 fs-lg mb-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "“Donec id elit non mi porta gravida at eget metus. Vivamus mollis est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis porta est non commodo luctus.”"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "blockquote-details justify-content-center text-center",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "info p-0",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "ls-sm mb-1",
                                                            children: "Coriss Ambady"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mb-0",
                                                            children: "Financial Analyst"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial21);


/***/ }),

/***/ 63146:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_elements_tiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27492);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77632);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73153);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_3__, components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_4__]);
([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_3__, components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// -------- data -------- //

const Testimonial3 = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "display-4 mb-3 text-center",
                children: "What People Say About Us"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "lead fs-lg mb-10 text-center",
                children: "Dont take our word for it. See what customers are saying about us."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row gx-lg-8 gx-xl-12 gy-6 mb-14 align-items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-7",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements_tiles__WEBPACK_IMPORTED_MODULE_2__/* .Tiles3 */ .hg, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-5 mt-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            grabCursor: true,
                            slidesPerView: 1,
                            navigation: false,
                            children: data_testimonial_list__WEBPACK_IMPORTED_MODULE_5__/* .testimonialList2.map */ .qh.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_4__/* .TestimonialCard2 */ .lr, {
                                    ...item
                                }, i))
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial3);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47546:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77632);
/* harmony import */ var utils_carouselBreakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32783);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73153);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__, components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_4__]);
([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__, components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// -------- custom component -------- //



// -------- data -------- //

const Testimonial4 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "wrapper bg-light",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container py-14 py-md-16",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "fs-15 text-uppercase text-muted mb-3",
                                children: "Happy Customers"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "display-4 mb-6 px-xl-10 px-xxl-15",
                                children: "Dont take our word for it. See what customers are saying about us."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    grabCursor: true,
                    className: "p-2",
                    navigation: false,
                    breakpoints: utils_carouselBreakpoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    children: data_testimonial_list__WEBPACK_IMPORTED_MODULE_5__/* .testimonialList2.map */ .qh.map((item, i)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_4__/* .TestimonialCard3 */ .ZW, {
                            ...item,
                            key: i
                        }))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial4);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58342:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77632);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73153);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__, components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_3__]);
([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__, components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// -------- data -------- //

const Testimonial5 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "wrapper bg-soft-primary",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container pt-16 pb-14 pb-md-0",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row gx-lg-8 gx-xl-0 align-items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-5 col-lg-5 col-xl-4 offset-xl-1 d-none d-md-flex position-relative align-self-end",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "shape rounded-circle bg-pale-primary rellax w-21 h-21 d-md-none d-lg-block",
                                style: {
                                    top: "7rem",
                                    left: "1rem"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/img/photos/co1.png",
                                    srcSet: "/img/photos/co1@2x.png 2x",
                                    alt: ""
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-7 col-lg-6 col-xl-6 col-xxl-5 offset-xl-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            grabCursor: true,
                            slidesPerView: 1,
                            navigation: false,
                            className: "dots-start",
                            children: data_testimonial_list__WEBPACK_IMPORTED_MODULE_4__/* .testimonialList2.map */ .qh.map((item, i)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_3__/* .TestimonialCard2 */ .lr, {
                                    ...item,
                                    key: i,
                                    blockClassName: "icon fs-lg",
                                    blockDetailsClassName: "blockquote-details"
                                }))
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial5);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Testimonial6 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "card bg-soft-primary",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "card-body p-md-10 py-xxl-16 position-relative",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "position-absolute d-none d-lg-block",
                    style: {
                        bottom: 0,
                        left: "10%",
                        width: "28%",
                        zIndex: 2
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/img/photos/co2.png",
                            srcSet: "/img/photos/co2@2x.png 2x",
                            alt: "coriss"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row gx-md-0 gx-xl-12 text-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-lg-7 offset-lg-5 col-xl-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ratings five mb-3"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                                className: "border-0 fs-lg mb-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "“Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh ut fermentum massa, justo sit amet vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed”"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "blockquote-details justify-content-center text-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info p-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    className: "mb-1",
                                                    children: "Coriss Ambady"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "meta mb-0",
                                                    children: "Financial Analyst"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial6);


/***/ }),

/***/ 29980:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_elements_tiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27492);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77632);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73153);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__, components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_3__]);
([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__, components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// -------- data -------- //

const Testimonial7 = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row gx-lg-8 gx-xl-12 gy-6 mb-14 align-items-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-lg-7 position-relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "shape bg-dot primary rellax w-18 h-18",
                        style: {
                            top: 0,
                            left: "-1.4rem",
                            zIndex: 0
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements_tiles__WEBPACK_IMPORTED_MODULE_1__/* .Tiles3 */ .hg, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-lg-5 mt-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    grabCursor: true,
                    slidesPerView: 1,
                    navigation: false,
                    children: data_testimonial_list__WEBPACK_IMPORTED_MODULE_4__/* .testimonialList2.map */ .qh.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_3__/* .TestimonialCard2 */ .lr, {
                            ...item
                        }, i))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial7);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78538:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73153);
/* harmony import */ var hooks_useIsotope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80959);
/* harmony import */ var data_demo_7__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82934);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__]);
components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// -------- custom hook -------- //

// -------- data -------- //

const Testimonial8 = ()=>{
    // used for masonry layout
    (0,hooks_useIsotope__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "display-4 text-center mb-8",
                children: "Happy Customers"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row isotope gy-6",
                    children: data_demo_7__WEBPACK_IMPORTED_MODULE_3__/* .testimonialList.map */ ._3.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "item col-md-6 col-xl-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_testimonial_cards__WEBPACK_IMPORTED_MODULE_1__/* .TestimonialCard3 */ .ZW, {
                                ...item,
                                shadow: true
                            })
                        }, item.id))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial8);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Testimonial9 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "card bg-soft-primary rounded-4 mb-14 mb-md-18",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "card-body p-md-10 py-xxl-16 position-relative",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "position-absolute d-none d-lg-block",
                    style: {
                        bottom: 0,
                        left: "10%",
                        width: "28%",
                        zIndex: 2
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/img/photos/co2.png",
                            srcSet: "/img/photos/co2@2x.png 2x",
                            alt: ""
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row gx-md-0 gx-xl-12 text-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-lg-7 offset-lg-5 col-xl-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ratings five mb-3"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                                className: "border-0 fs-lg mb-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "“Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh ut fermentum massa, justo sit amet vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed”"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "blockquote-details justify-content-center text-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info p-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    className: "mb-1",
                                                    children: "Coriss Ambady"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "meta mb-0",
                                                    children: "Financial Analyst"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial9);


/***/ }),

/***/ 4145:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DR": () => (/* reexport safe */ _Testimonial19__WEBPACK_IMPORTED_MODULE_19__.Z),
/* harmony export */   "Id": () => (/* reexport safe */ _Testimonial21__WEBPACK_IMPORTED_MODULE_21__.Z),
/* harmony export */   "Lk": () => (/* reexport safe */ _Testimonial5__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "OM": () => (/* reexport safe */ _Testimonial18__WEBPACK_IMPORTED_MODULE_18__.Z),
/* harmony export */   "Oq": () => (/* reexport safe */ _Testimonial9__WEBPACK_IMPORTED_MODULE_9__.Z),
/* harmony export */   "QU": () => (/* reexport safe */ _Testimonial1__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "Qz": () => (/* reexport safe */ _Testimonial16__WEBPACK_IMPORTED_MODULE_16__.Z),
/* harmony export */   "VW": () => (/* reexport safe */ _Testimonial14__WEBPACK_IMPORTED_MODULE_14__.Z),
/* harmony export */   "XF": () => (/* reexport safe */ _Testimonial8__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   "Yv": () => (/* reexport safe */ _Testimonial15__WEBPACK_IMPORTED_MODULE_15__.Z),
/* harmony export */   "_A": () => (/* reexport safe */ _Testimonial20__WEBPACK_IMPORTED_MODULE_20__.Z),
/* harmony export */   "cn": () => (/* reexport safe */ _Testimonial7__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "dx": () => (/* reexport safe */ _Testimonial13__WEBPACK_IMPORTED_MODULE_13__.Z),
/* harmony export */   "ef": () => (/* reexport safe */ _Testimonial10__WEBPACK_IMPORTED_MODULE_10__.Z),
/* harmony export */   "gc": () => (/* reexport safe */ _Testimonial__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "i8": () => (/* reexport safe */ _Testimonial4__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "kz": () => (/* reexport safe */ _Testimonial6__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "pM": () => (/* reexport safe */ _Testimonial12__WEBPACK_IMPORTED_MODULE_12__.Z),
/* harmony export */   "rf": () => (/* reexport safe */ _Testimonial3__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "rt": () => (/* reexport safe */ _Testimonial11__WEBPACK_IMPORTED_MODULE_11__.Z),
/* harmony export */   "tc": () => (/* reexport safe */ _Testimonial2__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "un": () => (/* reexport safe */ _Testimonial17__WEBPACK_IMPORTED_MODULE_17__.Z)
/* harmony export */ });
/* harmony import */ var _Testimonial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94643);
/* harmony import */ var _Testimonial1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56308);
/* harmony import */ var _Testimonial2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48011);
/* harmony import */ var _Testimonial3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63146);
/* harmony import */ var _Testimonial4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47546);
/* harmony import */ var _Testimonial5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58342);
/* harmony import */ var _Testimonial6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2460);
/* harmony import */ var _Testimonial7__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29980);
/* harmony import */ var _Testimonial8__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78538);
/* harmony import */ var _Testimonial9__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39469);
/* harmony import */ var _Testimonial10__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65692);
/* harmony import */ var _Testimonial11__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52959);
/* harmony import */ var _Testimonial12__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73940);
/* harmony import */ var _Testimonial13__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3670);
/* harmony import */ var _Testimonial14__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5406);
/* harmony import */ var _Testimonial15__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52753);
/* harmony import */ var _Testimonial16__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(67453);
/* harmony import */ var _Testimonial17__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(48757);
/* harmony import */ var _Testimonial18__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6238);
/* harmony import */ var _Testimonial19__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(43995);
/* harmony import */ var _Testimonial20__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(43562);
/* harmony import */ var _Testimonial21__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(19198);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Testimonial__WEBPACK_IMPORTED_MODULE_0__, _Testimonial1__WEBPACK_IMPORTED_MODULE_1__, _Testimonial2__WEBPACK_IMPORTED_MODULE_2__, _Testimonial3__WEBPACK_IMPORTED_MODULE_3__, _Testimonial4__WEBPACK_IMPORTED_MODULE_4__, _Testimonial5__WEBPACK_IMPORTED_MODULE_5__, _Testimonial7__WEBPACK_IMPORTED_MODULE_7__, _Testimonial8__WEBPACK_IMPORTED_MODULE_8__, _Testimonial10__WEBPACK_IMPORTED_MODULE_10__, _Testimonial11__WEBPACK_IMPORTED_MODULE_11__, _Testimonial12__WEBPACK_IMPORTED_MODULE_12__, _Testimonial13__WEBPACK_IMPORTED_MODULE_13__, _Testimonial14__WEBPACK_IMPORTED_MODULE_14__, _Testimonial15__WEBPACK_IMPORTED_MODULE_15__, _Testimonial16__WEBPACK_IMPORTED_MODULE_16__, _Testimonial17__WEBPACK_IMPORTED_MODULE_17__, _Testimonial18__WEBPACK_IMPORTED_MODULE_18__, _Testimonial19__WEBPACK_IMPORTED_MODULE_19__, _Testimonial20__WEBPACK_IMPORTED_MODULE_20__]);
([_Testimonial__WEBPACK_IMPORTED_MODULE_0__, _Testimonial1__WEBPACK_IMPORTED_MODULE_1__, _Testimonial2__WEBPACK_IMPORTED_MODULE_2__, _Testimonial3__WEBPACK_IMPORTED_MODULE_3__, _Testimonial4__WEBPACK_IMPORTED_MODULE_4__, _Testimonial5__WEBPACK_IMPORTED_MODULE_5__, _Testimonial7__WEBPACK_IMPORTED_MODULE_7__, _Testimonial8__WEBPACK_IMPORTED_MODULE_8__, _Testimonial10__WEBPACK_IMPORTED_MODULE_10__, _Testimonial11__WEBPACK_IMPORTED_MODULE_11__, _Testimonial12__WEBPACK_IMPORTED_MODULE_12__, _Testimonial13__WEBPACK_IMPORTED_MODULE_13__, _Testimonial14__WEBPACK_IMPORTED_MODULE_14__, _Testimonial15__WEBPACK_IMPORTED_MODULE_15__, _Testimonial16__WEBPACK_IMPORTED_MODULE_16__, _Testimonial17__WEBPACK_IMPORTED_MODULE_17__, _Testimonial18__WEBPACK_IMPORTED_MODULE_18__, _Testimonial19__WEBPACK_IMPORTED_MODULE_19__, _Testimonial20__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
























__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// =================================================
const TestimonialCard1 = (props)=>{
    const { name , review , designation  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "card shadow-lg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "card-body",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                className: "icon mb-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "“",
                            review,
                            "”"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "blockquote-details",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "info p-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "mb-1",
                                    children: name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-0",
                                    children: designation
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialCard1);


/***/ }),

/***/ 32298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// =================================================
const TestimonialCard2 = (props)=>{
    const { name , review , designation , blockClassName , blockDetailsClassName  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
        className: blockClassName,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "“",
                    review,
                    "”"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: blockDetailsClassName,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "info ps-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            className: "mb-1",
                            children: name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-0",
                            children: designation
                        })
                    ]
                })
            })
        ]
    });
};
// set default props
TestimonialCard2.defaultProps = {
    blockClassName: "icon icon-top fs-lg text-center",
    blockDetailsClassName: "blockquote-details justify-content-center text-center"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialCard2);


/***/ }),

/***/ 75598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// =================================================
const TestimonialCard3 = (props)=>{
    const { name , review , hideRating , shadow  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `card ${shadow ? "shadow-lg" : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "card-body",
            children: [
                !hideRating && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "ratings five mb-3"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("blockquote", {
                    className: "icon mb-0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "“",
                            review,
                            "” ",
                            name
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialCard3);


/***/ }),

/***/ 55159:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77632);
/* harmony import */ var _TestimonialCard2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32298);
/* harmony import */ var data_testimonial_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Carousel__WEBPACK_IMPORTED_MODULE_1__]);
_Carousel__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// ============================================================
const TestimonialCard4 = ({ className ="" , sliderWrapperClassname ="p-10 p-md-11 p-lg-13"  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `card shadow-lg ${className}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row gx-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        backgroundImage: "url(/img/photos/tm1.jpg)"
                    },
                    className: "col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: sliderWrapperClassname,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Carousel__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            grabCursor: true,
                            slidesPerView: 1,
                            navigation: false,
                            className: "dots-closer",
                            children: data_testimonial_list__WEBPACK_IMPORTED_MODULE_3__/* .testimonialList2.map */ .qh.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TestimonialCard2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    ...item
                                }, i))
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialCard4);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// =================================================
const TestimonialCard5 = (props)=>{
    const { name , review , designation , borderBottom  } = props;
    const className = `card shadow-lg ${borderBottom ? "card-border-bottom border-soft-primary" : ""}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: className,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "card-body",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "ratings five mb-3"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                    className: "icon mb-0",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "“",
                                review,
                                "”"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "blockquote-details",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "info ps-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "mb-1",
                                        children: name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-0",
                                        children: designation
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialCard5);


/***/ }),

/***/ 24570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// =================================================
const TestimonialCard6 = (props)=>{
    const { name , review , designation  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "card shadow-lg card-border-bottom border-soft-primary",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "card-body",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                className: "border-0 mb-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "“",
                            review,
                            "”"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "blockquote-details",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "info ps-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "mb-1",
                                    children: name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-0",
                                    children: designation
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialCard6);


/***/ }),

/***/ 73153:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X6": () => (/* reexport safe */ _TestimonialCard5__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "ZW": () => (/* reexport safe */ _TestimonialCard3__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "_v": () => (/* reexport safe */ _TestimonialCard4__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "a9": () => (/* reexport safe */ _TestimonialCard1__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "lr": () => (/* reexport safe */ _TestimonialCard2__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "xq": () => (/* reexport safe */ _TestimonialCard6__WEBPACK_IMPORTED_MODULE_5__.Z)
/* harmony export */ });
/* harmony import */ var _TestimonialCard1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9764);
/* harmony import */ var _TestimonialCard2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32298);
/* harmony import */ var _TestimonialCard3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75598);
/* harmony import */ var _TestimonialCard4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55159);
/* harmony import */ var _TestimonialCard5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26472);
/* harmony import */ var _TestimonialCard6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24570);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TestimonialCard4__WEBPACK_IMPORTED_MODULE_3__]);
_TestimonialCard4__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GB": () => (/* binding */ countList),
/* harmony export */   "_3": () => (/* binding */ testimonialList),
/* harmony export */   "bx": () => (/* binding */ carouselImages)
/* harmony export */ });
/* unused harmony export list */
const countList = [
    {
        id: 1,
        amount: 7518,
        color: "btn-soft-purple",
        title: "Projects Done",
        icon: "uil-presentation-check"
    },
    {
        id: 2,
        amount: 3472,
        color: "btn-soft-red",
        title: "Happy Customers",
        icon: "uil-users-alt"
    },
    {
        id: 3,
        amount: 4537,
        color: "btn-soft-yellow",
        title: "Expert Employees",
        icon: "uil-user-check"
    },
    {
        id: 4,
        amount: 2184,
        color: "btn-soft-aqua",
        title: "Awards Won",
        icon: "uil-trophy"
    }
];
const carouselImages = [
    {
        id: 0,
        url: "#",
        image: "/img/photos/pp17.jpg"
    },
    {
        id: 1,
        url: "#",
        image: "/img/photos/pp18.jpg"
    },
    {
        id: 2,
        url: "#",
        image: "/img/photos/pp19.jpg"
    },
    {
        id: 3,
        url: "#",
        image: "/img/photos/pp20.jpg"
    },
    {
        id: 4,
        url: "#",
        image: "/img/photos/pp21.jpg"
    },
    {
        id: 5,
        url: "#",
        image: "/img/photos/pp22.jpg"
    }
];
const list = (/* unused pure expression or super */ null && ([
    [
        "Aenean quam ornare. Curabitur blandit.",
        "Nullam quis risus eget urna mollis ornare."
    ],
    [
        "Etiam porta euismod malesuada mollis.",
        "Vivamus sagittis lacus vel augue rutrum."
    ]
]));
const testimonialList = [
    {
        id: 1,
        name: "- Kl\xe1ra B.",
        review: `Nagyon elégedett vagyok a termék minőségével és a gyors szállítással. Mindig innen rendelek!`
    },
    {
        id: 2,
        name: "- G\xe1bor T.",
        review: `Az online vásárlás soha nem volt ilyen egyszerű! Csak néhány kattintás és máris a kezemben volt a kívánt termék.`
    },
    {
        id: 3,
        name: "- M\xe1rta S.",
        review: `Egyedülálló választék és kiváló ügyfélszolgálat. Bármikor újra rendelek innen!`
    },
    {
        id: 4,
        name: "- P\xe9ter K.",
        review: `Az oldal könnyen navigálható, és a rendelés menete egyszerű. Mindig megbízhatóan szállítanak.`
    },
    {
        id: 5,
        name: "- Andrea G.",
        review: `Ez az oldal valóban megkönnyítette az életemet. Nem kell már boltokban sorban állnom, csak rendelek, és házhoz szállítják.`
    },
    {
        id: 6,
        name: "- Bence P.",
        review: `A legjobb online vásárlási élmény, amit valaha tapasztaltam. Ajánlom mindenkinek, aki időt és energiát akar megtakarítani.`
    }
];



/***/ }),

/***/ 86152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c_": () => (/* binding */ testimonialList1),
/* harmony export */   "cu": () => (/* binding */ testimonialList7),
/* harmony export */   "l0": () => (/* binding */ testimonialList3),
/* harmony export */   "n9": () => (/* binding */ testimonialList6),
/* harmony export */   "qh": () => (/* binding */ testimonialList2),
/* harmony export */   "t_": () => (/* binding */ testimonialList5),
/* harmony export */   "xZ": () => (/* binding */ testimonialList4)
/* harmony export */ });
// used in the testimonial-1 block
const testimonialList1 = [
    {
        name: "Coriss Ambady",
        designation: "Financial Analyst",
        review: "Cum sociis natoque penatibus et magnis dis parturient montes.",
        columnClasses: "col-xl-5 align-self-end"
    },
    {
        name: "Cory Zamora",
        designation: "Marketing Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod.`,
        columnClasses: "align-self-end"
    },
    {
        name: "Barclay Widerski",
        designation: "Sales Specialist",
        review: `Donec id elit non porta gravida at eget metus. Duis mollis est luctus commodo nisi erat.`,
        columnClasses: "col-xl-5 offset-xl-1"
    },
    {
        name: "Jackie Sanders",
        designation: "Investment Planner",
        review: `Nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo pellentesque.`,
        columnClasses: "align-self-start"
    }
];
const testimonialList2 = [
    {
        name: "Coriss Ambady",
        image: "/img/avatars/te7.jpg",
        designation: "Financial Analyst",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      Vestibulum ligula porta felis euismod semper. Cras justo odio.`
    },
    {
        name: "Cory Zamora",
        image: "/img/avatars/te8.jpg",
        designation: "Marketing Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      Vestibulum ligula porta felis euismod semper. Cras justo odio.`
    },
    {
        name: "Barclay Widerski",
        image: "/img/avatars/te9.jpg",
        designation: "Sales Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      Vestibulum ligula porta felis euismod semper. Cras justo odio.`
    },
    {
        name: "Jackie Sanders",
        image: "/img/avatars/te10.jpg",
        designation: "Investment Planner",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
    }
];
// used in the testimonial-13 block
const testimonialList3 = [
    {
        id: 1,
        name: "Coriss Ambady",
        image: "/img/avatars/te1.jpg",
        designation: "Financial Analyst",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur adipiscing dapibus.`
    },
    {
        id: 2,
        name: "Cory Zamora",
        image: "/img/avatars/te2.jpg",
        designation: "Marketing Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur adipiscing dapibus.`
    },
    {
        id: 3,
        name: "Barclay Widerski",
        image: "/img/avatars/te3.jpg",
        designation: "Sales Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur adipiscing dapibus.`
    }
];
// used in the testimonial-14, testimonial-15 block
const testimonialList4 = [
    {
        id: 1,
        name: "Coriss Ambady",
        designation: "Financial Analyst",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta. Cras mattis consectetur.`
    },
    {
        id: 2,
        name: "Cory Zamora",
        designation: "Marketing Specialist",
        review: `Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet purus fermentum.`
    },
    {
        id: 3,
        name: "Nikolas Brooten",
        designation: "Sales Manager",
        review: `Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor eu rutrum. Nulla vitae libero.`
    },
    {
        id: 4,
        name: "Coriss Ambady",
        designation: "Marketing Manager",
        review: `Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus eu tincidunt auctor nullam rutrum.`
    }
];
// used in the testimonial-16 block
const testimonialList5 = [
    {
        id: 1,
        name: "Coriss Ambady",
        designation: "Financial Analyst",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis
    euismod semper. Cras justo odio.`
    },
    {
        id: 2,
        name: "Cory Zamora",
        designation: "Marketing Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis
    euismod semper. Cras justo odio.`
    },
    {
        id: 3,
        name: "Nikolas Brooten",
        designation: "Sales Manager",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis
    euismod semper. Cras justo odio.`
    }
];
// used in the testimonial-18 block
const testimonialList6 = [
    {
        id: 1,
        name: "Julia & David",
        review: `Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh fermentum massa, justo sit
    amet vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur
    purus.`
    },
    {
        id: 2,
        name: "Jolene & Andrea",
        review: `Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh fermentum massa, justo sit
    amet vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur
    purus.`
    },
    {
        id: 3,
        name: "Eve & Will",
        review: `Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh fermentum massa, justo sit
    amet vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur
    purus.`
    }
];
// used in the testimonial-19 block
const testimonialList7 = [
    {
        id: 1,
        name: "Coriss Ambady",
        designation: "Financial Analyst",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
    },
    {
        id: 2,
        name: "Cory Zamora",
        designation: "Marketing Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
    },
    {
        id: 3,
        name: "Nikolas Brooten",
        designation: "Sales Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
    },
    {
        id: 4,
        name: "Jackie Sanders",
        designation: "Investment Planner",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
    },
    {
        id: 5,
        name: "Laura Widerski",
        designation: "Sales Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
    }
];


/***/ }),

/***/ 80959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useIsotope = ()=>{
    const isotope = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const { 0: filterKey , 1: setFilterKey  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("*");
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (false) {}
        (async function() {
            const Isotope = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 92349, 23))).default;
            const grids = document.querySelectorAll(".grid");
            if (grids !== null) {
                grids.forEach((g)=>{
                    const grid = g.querySelector(".isotope");
                    isotope.current = new Isotope(grid, {
                        itemSelector: ".item",
                        layoutMode: "masonry",
                        masonry: {
                            columnWidth: grid.offsetWidth / 12
                        },
                        percentPosition: true,
                        transitionDuration: "0.7s"
                    });
                });
            }
        })();
        return ()=>isotope.current?.destroy();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const filtered = filterKey === "*" ? {
            filter: "*"
        } : {
            filter: filterKey
        };
        isotope.current?.arrange(filtered);
    }, [
        filterKey
    ]);
    // change filter item
    const handleFilterKeyChange = (key)=>()=>setFilterKey(key);
    return {
        handleFilterKeyChange,
        filterKey
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsotope);


/***/ }),

/***/ 32783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const carouselBreakpoints = {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1200: {
        slidesPerView: 3
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carouselBreakpoints);


/***/ })

};
;