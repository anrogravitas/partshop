"use strict";
exports.id = 3162;
exports.ids = [3162];
exports.modules = {

/***/ 4640:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77632);
/* harmony import */ var data_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25560);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// -------- data -------- //

const Portfolio1 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-fluid px-md-6",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            grabCursor: true,
            className: "blog grid-view mb-15 mb-md-17",
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 3
                }
            },
            children: data_portfolio__WEBPACK_IMPORTED_MODULE_3__/* .portfolioList1.map */ .Zk.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                    className: "rounded",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        width: 900,
                        height: 650,
                        src: item,
                        alt: "project"
                    })
                }, item))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68980:
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
/* harmony import */ var components_reuseable_project_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71079);
/* harmony import */ var data_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25560);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





// -------- data -------- //

const Portfolio10 = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row mt-17",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "fs-16 text-uppercase text-muted mb-3",
                            children: "Latest Projects"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                            className: "display-3 mb-10",
                            children: [
                                "Check out some of our awesome projects with ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "underline-3 style-2 yellow",
                                    children: "creative"
                                }),
                                " ",
                                "ideas and great design."
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                navigation: false,
                grabCursor: true,
                breakpoints: utils_carouselBreakpoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                children: data_portfolio__WEBPACK_IMPORTED_MODULE_5__/* .portfolioList6.map */ .nL.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_project_cards__WEBPACK_IMPORTED_MODULE_4__/* .ProjectCard3 */ .$3, {
                        ...item
                    }, item.id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio10);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99472);
/* harmony import */ var components_reuseable_project_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71079);
/* harmony import */ var data_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25560);



// -------- data -------- //

const Portfolio11 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "wrapper bg-light",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container py-15 py-md-17",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-lg-11 col-xl-10 mx-auto mb-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "fs-16 text-uppercase text-muted text-center mb-3",
                                children: "Our Projects"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "display-3 text-center px-lg-5 px-xl-10 px-xxl-16 mb-0",
                                children: "Check out some of our awesome projects with creative ideas and great design."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-view projects-masonry",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row gx-md-8 gy-10 gy-md-13 isotope",
                        children: data_portfolio__WEBPACK_IMPORTED_MODULE_3__/* .portfolioList6.map */ .nL.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "project item col-md-6 col-xl-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_project_cards__WEBPACK_IMPORTED_MODULE_2__/* .ProjectCard3 */ .$3, {
                                    ...item
                                })
                            }, item.id))
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center mt-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        title: "Start a Project",
                        href: "#",
                        className: "btn btn-lg btn-primary rounded-pill"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio11);


/***/ }),

/***/ 89602:
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
/* harmony import */ var components_reuseable_project_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71079);
/* harmony import */ var data_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25560);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





// -------- data -------- //

const Portfolio12 = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-lg-10 col-xl-8 mx-auto text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "fs-16 text-uppercase text-muted mb-3",
                            children: "Latest Projects"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "display-4 mb-10 px-xxl-10",
                            children: "Check out some of our awesome projects with creative ideas and great design."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                navigation: false,
                grabCursor: true,
                breakpoints: utils_carouselBreakpoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                children: data_portfolio__WEBPACK_IMPORTED_MODULE_5__/* .portfolioList6.map */ .nL.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_project_cards__WEBPACK_IMPORTED_MODULE_4__/* .ProjectCard3 */ .$3, {
                        ...item
                    }, item.id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio12);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87320:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77632);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99472);
/* harmony import */ var data_demo_7__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82934);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// -------- data -------- //

const Portfolio2 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "overflow-hidden",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container pb-9 pb-md-14",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "display-4 mb-8",
                            children: "Our Recent Projects"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "swiper-container grid-view nav-bottom nav-color mb-14",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        grabCursor: true,
                        slidesPerView: 2,
                        pagination: false,
                        className: "overflow-visible",
                        breakpoints: {
                            768: {
                                slidesPerView: 2
                            },
                            0: {
                                slidesPerView: 1
                            }
                        },
                        children: data_demo_7__WEBPACK_IMPORTED_MODULE_4__/* .carouselImages.map */ .bx.map(({ id , url , image  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                className: "rounded",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        width: 1100,
                                        height: 770,
                                        layout: "responsive",
                                        src: image,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "uil uil-link"
                                        }),
                                        className: "item-link",
                                        href: url
                                    })
                                ]
                            }, id))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio2);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3773:
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
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99472);
/* harmony import */ var data_portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25560);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// -------- data -------- //

const Portfolio3 = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "overflow-hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container pt-12 pt-lg-7 pb-14 pb-md-16",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "fs-16 text-uppercase text-primary mb-3",
                                    children: "Latest Projects"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "display-3 mb-10",
                                    children: "Check out some of our awesome projects with creative ideas and great design."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "swiper-container grid-view nav-bottom nav-color mb-14",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            grabCursor: true,
                            slidesPerView: 2,
                            pagination: false,
                            className: "overflow-visible",
                            breakpoints: {
                                768: {
                                    slidesPerView: 2
                                },
                                0: {
                                    slidesPerView: 1
                                }
                            },
                            children: data_portfolio__WEBPACK_IMPORTED_MODULE_4__/* .portfolioList2.map */ .$e.map(({ id , url , image , category , title  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                            className: "rounded mb-7",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: image["1x"],
                                                srcSet: image["2x"],
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "project-details d-flex justify-content-center flex-column",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "post-header",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "post-title h3",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                            title: title,
                                                            className: "link-dark",
                                                            href: url
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "post-category text-ash",
                                                        children: category
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }, id))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "divider text-soft-primary mx-n2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1440 100",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fill: "currentColor",
                        d: "M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio3);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90384:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77632);
/* harmony import */ var data_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25560);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// -------- data -------- //

const Portfolio4 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "wrapper bg-light",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "overflow-hidden",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container py-14 py-md-16",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "icn-flower text-leaf fs-30 opacity-25"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "display-5 text-center mt-2 mb-10",
                                    children: [
                                        "Some of wonderful love stories ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                            className: "d-none d-md-block"
                                        }),
                                        " I witnessed and had the chance to capture"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "swiper-container grid-view nav-bottom nav-color mb-14 text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            className: "overflow-visible pb-2",
                            pagination: false,
                            breakpoints: {
                                0: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: 2
                                }
                            },
                            children: data_portfolio__WEBPACK_IMPORTED_MODULE_3__/* .portfolioList3.map */ .xF.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "card shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                            className: "card-img-top overlay overlay-1",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                className: "img-fluid",
                                                                src: item.image["1x"],
                                                                srcSet: item.image["2x"],
                                                                alt: ""
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "bg"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figcaption", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        className: "from-top mb-0",
                                                        children: "View Gallery"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "card-body p-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "fs-21 mb-1",
                                                    children: item.name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "post-meta fs-16 mb-0",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            children: [
                                                                item.photos,
                                                                " Photos"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: item.category
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, item.id))
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio4);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useIsotope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80959);
/* harmony import */ var data_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25560);



const Portfolio5 = ()=>{
    const { filterKey , handleFilterKeyChange  } = (0,hooks_useIsotope__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    // filter list
    const filterList = [
        {
            id: 1,
            title: "All",
            value: "*"
        },
        {
            id: 2,
            title: "Foods",
            value: ".foods"
        },
        {
            id: 3,
            title: "Drinks",
            value: ".drinks"
        },
        {
            id: 4,
            title: "Events",
            value: ".events"
        },
        {
            id: 5,
            title: "Pastries",
            value: ".pastries"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "portfolio",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "wrapper bg-gray",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container py-15 py-md-17 text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-lg-10 col-xl-8 col-xxl-7 mx-auto mb-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "display-5 mb-3",
                                    children: "My Selected Shots"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "lead fs-lg",
                                    children: "Photography is my passion and I love to turn ideas into beautiful things."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-view projects-masonry",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "isotope-filter filter mb-10",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    children: filterList.map(({ id , title , value  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: handleFilterKeyChange(value),
                                                className: `filter-item ${filterKey === value ? "active" : ""}`,
                                                children: title
                                            })
                                        }, id))
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row gx-md-6 gy-6 isotope",
                                children: data_portfolio__WEBPACK_IMPORTED_MODULE_2__/* .portfolioList4.map */ .Zm.map(({ category , id , image , title  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `project item col-md-6 col-xl-4 ${category}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                            className: "overlay overlay-1 rounded",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    href: `/img/photos/${image}-full.jpg`,
                                                    "data-glightbox": true,
                                                    "data-gallery": "shots-group",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: `/img/photos/${image}.jpg`,
                                                            alt: title
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "bg"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figcaption", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        className: "from-top mb-0",
                                                        children: title
                                                    })
                                                })
                                            ]
                                        })
                                    }, id))
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio5);


/***/ }),

/***/ 41050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Portfolio6 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "projects-tiles",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "project grid grid-view",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row gx-md-8 gx-xl-12 gy-10 gy-md-12 isotope",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item mt-md-7 mt-lg-15",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "project-details d-flex justify-content-center align-self-end flex-column ps-0 pb-0",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "post-header",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "display-4 mb-4 pe-xxl-15",
                                                children: "Check out some of our recent projects below."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "lead fs-lg mb-0",
                                                children: "We love to turn ideas into beautiful things."
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "item mt-12",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                className: "lift rounded mb-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/img/photos/rp2.jpg",
                                                    srcSet: "/img/photos/rp2@2x.jpg 2x",
                                                    alt: "demo"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "post-category text-line mb-3 text-leaf",
                                        children: "Invitation"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "post-title h3",
                                        children: "Mollis Ipsum Mattis"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                className: "lift rounded mb-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/img/photos/rp1.jpg",
                                                    srcSet: "/img/photos/rp1@2x.jpg 2x",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "post-category text-line mb-3 text-violet",
                                        children: "Stationary"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "post-title h3",
                                        children: "Ipsum Ultricies Cursus"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "item mt-12",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                className: "lift rounded mb-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/img/photos/rp3.jpg",
                                                    srcSet: "/img/photos/rp3@2x.jpg 2x",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "post-category text-line mb-3 text-purple",
                                        children: "Notebook"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "post-title h3",
                                        children: "Magna Tristique Inceptos"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio6);


/***/ }),

/***/ 95438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Portfolio7 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "wrapper bg-light",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container py-14 py-md-16",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row align-items-center mb-7",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-8 col-lg-8 col-xl-7 col-xxl-6 pe-lg-17",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "display-4 mb-3",
                                children: "Recent Projects"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "lead fs-lg",
                                children: [
                                    "We love to turn ideas into ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "underline",
                                        children: "beautiful things"
                                    }),
                                    "."
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "projects-tiles",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "project grid grid-view",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row gx-md-8 gx-xl-12 gy-10 gy-md-12 isotope",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-md-5",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                            className: "lift rounded mb-6",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/photos/rp1.jpg",
                                                                srcSet: "/img/photos/rp1@2x.jpg 2x",
                                                                alt: "demo"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "post-category mb-3 text-purple",
                                                    children: "Stationary"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "post-title",
                                                    children: "Ipsum Ultricies Cursus"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item mt-12 mt-md-12",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                            className: "lift rounded mb-6",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/photos/rp3.jpg",
                                                                srcSet: "/img/photos/rp3@2x.jpg 2x",
                                                                alt: "demo"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "post-category mb-3 text-red",
                                                    children: "Notebook"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "post-title",
                                                    children: "Magna Tristique Inceptos"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "item col-md-7 mt-md-17",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                    className: "lift rounded mb-6",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/img/photos/rp2.jpg",
                                                        srcSet: "/img/photos/rp2@2x.jpg 2x",
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "post-category mb-3 text-orange",
                                            children: "Invitation"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "post-title",
                                            children: "Mollis Ipsum Mattis"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio7);


/***/ }),

/***/ 90780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var data_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25560);



// -------- data -------- //

const Portfolio8 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "wrapper bg-light",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container py-14 py-md-17",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row mb-8 text-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-lg-9 col-xl-8 col-xxl-7 mx-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "fs-16 text-uppercase text-primary mb-3",
                                children: "Our Projects"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "display-4",
                                children: "Check out some of our awesome projects with creative ideas and great design."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-view projects-masonry",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row gx-md-8 gy-10 gy-md-13 isotope",
                        children: data_portfolio__WEBPACK_IMPORTED_MODULE_3__/* .portfolioList5.map */ .HV.map(({ id , image , title , category , color  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "project item col-md-6 col-xl-4 product",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                        className: "lift rounded mb-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    width: 1300,
                                                    height: 1132,
                                                    src: image,
                                                    alt: title,
                                                    layout: "responsive"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "project-details d-flex justify-content-center flex-column",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "post-header",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `post-category mb-2 text-${color}`,
                                                    children: category
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "post-title h3",
                                                    children: title
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }, id))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio8);


/***/ }),

/***/ 96185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99472);


const Portfolio9 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "wrapper bg-light wrapper-border",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container py-14 pt-md-18 pb-md-16",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row align-items-center mb-10",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "display-4 mb-3",
                                    children: "Latest Projects"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "lead fs-20 mb-0",
                                    children: "Check out some of my latest projects with creative ideas."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                title: "See All Projects",
                                href: "#",
                                className: "btn btn-outline-primary rounded-pill mb-0"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "card bg-soft-violet mb-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "card-body p-12 pb-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-lg-4 pb-12 align-self-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "post-category mb-3 text-violet",
                                            children: "Web Design"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "h1 post-title mb-3",
                                            children: "Snowlake Theme"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            title: "See Project",
                                            href: "#",
                                            className: "more hover link-violet"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-7 offset-lg-1 align-self-end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "img-fluid",
                                            src: "/img/photos/f1.png",
                                            srcSet: "/img/photos/f1@2x.png 2x",
                                            alt: ""
                                        })
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "card bg-soft-blue mb-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "card-body p-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row gy-10 align-items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-lg-4 order-lg-2 offset-lg-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "post-category mb-3 text-blue",
                                            children: "Mobile Design"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "h1 post-title mb-3",
                                            children: "Budget App"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            title: "See Project",
                                            href: "#",
                                            className: "more hover link-blue"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-7",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "img-fluid",
                                            src: "/img/photos/f2.png",
                                            srcSet: "/img/photos/f2@2x.png 2x",
                                            alt: ""
                                        })
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row gx-md-8 gx-xl-10",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "card bg-soft-leaf mb-10",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "card-body p-12 pb-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "post-category mb-3 text-leaf",
                                                children: "Web Design"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "h1 post-title mb-3",
                                                children: "Missio Theme"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Maecenas faucibus mollis interdum sed posuere porta consectetur cursus porta lobortis. Scelerisque id ligula felis."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                title: "See Project",
                                                href: "#",
                                                className: "more hover link-leaf mb-8"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "card-img-bottom",
                                        src: "/img/photos/f3.png",
                                        srcSet: "/img/photos/f3@2x.png 2x",
                                        alt: ""
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "card bg-soft-pink",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "card-body p-12 pb-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "post-category mb-3 text-pink",
                                                children: "Mobile Design"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "h1 post-title mb-3",
                                                children: "Storage App"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                title: "See Project",
                                                href: "#",
                                                className: "more hover link-pink mb-8"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "card-img-bottom",
                                        src: "/img/photos/f4.png",
                                        srcSet: "/img/photos/f4@2x.png 2x",
                                        alt: ""
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio9);


/***/ }),

/***/ 83162:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IH": () => (/* reexport safe */ _Portfolio5__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "Kh": () => (/* reexport safe */ _Portfolio4__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "Q_": () => (/* reexport safe */ _Portfolio1__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "Qq": () => (/* reexport safe */ _Portfolio7__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "Vi": () => (/* reexport safe */ _Portfolio8__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "W6": () => (/* reexport safe */ _Portfolio6__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "eY": () => (/* reexport safe */ _Portfolio10__WEBPACK_IMPORTED_MODULE_9__.Z),
/* harmony export */   "gZ": () => (/* reexport safe */ _Portfolio11__WEBPACK_IMPORTED_MODULE_10__.Z),
/* harmony export */   "sc": () => (/* reexport safe */ _Portfolio2__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "su": () => (/* reexport safe */ _Portfolio3__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "vb": () => (/* reexport safe */ _Portfolio9__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   "wU": () => (/* reexport safe */ _Portfolio12__WEBPACK_IMPORTED_MODULE_11__.Z)
/* harmony export */ });
/* harmony import */ var _Portfolio1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4640);
/* harmony import */ var _Portfolio2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87320);
/* harmony import */ var _Portfolio3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3773);
/* harmony import */ var _Portfolio4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90384);
/* harmony import */ var _Portfolio5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52669);
/* harmony import */ var _Portfolio6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41050);
/* harmony import */ var _Portfolio7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95438);
/* harmony import */ var _Portfolio8__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90780);
/* harmony import */ var _Portfolio9__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96185);
/* harmony import */ var _Portfolio10__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68980);
/* harmony import */ var _Portfolio11__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40213);
/* harmony import */ var _Portfolio12__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89602);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Portfolio1__WEBPACK_IMPORTED_MODULE_0__, _Portfolio2__WEBPACK_IMPORTED_MODULE_1__, _Portfolio3__WEBPACK_IMPORTED_MODULE_2__, _Portfolio4__WEBPACK_IMPORTED_MODULE_3__, _Portfolio10__WEBPACK_IMPORTED_MODULE_9__, _Portfolio12__WEBPACK_IMPORTED_MODULE_11__]);
([_Portfolio1__WEBPACK_IMPORTED_MODULE_0__, _Portfolio2__WEBPACK_IMPORTED_MODULE_1__, _Portfolio3__WEBPACK_IMPORTED_MODULE_2__, _Portfolio4__WEBPACK_IMPORTED_MODULE_3__, _Portfolio10__WEBPACK_IMPORTED_MODULE_9__, _Portfolio12__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "qu": () => (/* reexport */ project_cards_ProjectCard1),
  "Vy": () => (/* reexport */ project_cards_ProjectCard2),
  "$3": () => (/* reexport */ project_cards_ProjectCard3)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/reuseable/links/NextLink.tsx
var NextLink = __webpack_require__(99472);
;// CONCATENATED MODULE: ./src/components/reuseable/project-cards/ProjectCard1.tsx



// ==============================================================================
const ProjectCard1 = (props)=>{
    const { link , title , category , description , images  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "project grid grid-view",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row g-6 isotope",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "item col-md-6",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "project-details d-flex justify-content-center flex-column",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "post-header",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "post-category text-red mb-3",
                                        children: category
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "post-title mb-3",
                                        children: title
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "post-content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: description
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                        title: "See Project",
                                        href: link,
                                        className: "more hover link-red"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                images.map(({ url , height , width , tooltip , full  }, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "item col-md-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                            className: "itooltip itooltip-light hover-scale rounded",
                            title: tooltip,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: full,
                                "data-glightbox": `title: ${tooltip}`,
                                "data-gallery": "project-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    alt: title,
                                    src: url,
                                    layout: "responsive",
                                    width: width,
                                    height: height
                                })
                            })
                        })
                    }, url + i))
            ]
        })
    });
};
/* harmony default export */ const project_cards_ProjectCard1 = (ProjectCard1);

// EXTERNAL MODULE: ./src/components/reuseable/FigureImage.tsx
var FigureImage = __webpack_require__(42744);
;// CONCATENATED MODULE: ./src/components/reuseable/project-cards/ProjectCard2.tsx



// ==============================================================================
const ProjectCard2 = (props)=>{
    const { link , title , category , description , image , imageClassName , cardStyle , detailsStyle , color  } = props;
    const catColor = color ? `text-${color}` : "text-purple";
    const linkColor = color ? `link-${color}` : "link-purple";
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "project item",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(FigureImage/* default */.Z, {
                    width: image.width,
                    height: image.height,
                    src: image.url,
                    className: imageClassName
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "project-details d-flex justify-content-center flex-column",
                    style: detailsStyle,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "card shadow rellax",
                        "data-rellax-xs-speed": "0",
                        "data-rellax-mobile-speed": "0",
                        style: cardStyle,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card-body",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "post-header",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `post-category text-line ${catColor} mb-3`,
                                            children: category
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "post-title mb-3",
                                            children: title
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "post-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: description
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                            title: "See Project",
                                            href: link,
                                            className: `more hover ${linkColor}`
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const project_cards_ProjectCard2 = (ProjectCard2);

;// CONCATENATED MODULE: ./src/components/reuseable/project-cards/ProjectCard3.tsx



// ==============================================================================
const ProjectCard3 = ({ link , title , image , category , fullImage  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                className: "rounded mb-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        width: 410,
                        height: 440,
                        src: image,
                        alt: title,
                        layout: "responsive"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "item-link",
                        href: fullImage,
                        "data-glightbox": true,
                        "data-gallery": "projects-group",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "uil uil-focus-add"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "project-details d-flex justify-content-center flex-column",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "post-header",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "post-title h3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                href: link,
                                title: title,
                                className: "link-dark"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "post-category text-ash",
                            children: category
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const project_cards_ProjectCard3 = (ProjectCard3);

;// CONCATENATED MODULE: ./src/components/reuseable/project-cards/index.ts






/***/ }),

/***/ 25560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$e": () => (/* binding */ portfolioList2),
/* harmony export */   "HV": () => (/* binding */ portfolioList5),
/* harmony export */   "Zk": () => (/* binding */ portfolioList1),
/* harmony export */   "Zm": () => (/* binding */ portfolioList4),
/* harmony export */   "nL": () => (/* binding */ portfolioList6),
/* harmony export */   "xF": () => (/* binding */ portfolioList3)
/* harmony export */ });
// used in the portfolio-1 block
const portfolioList1 = [
    "/img/photos/pp10.jpg",
    "/img/photos/pp11.jpg",
    "/img/photos/pp12.jpg",
    "/img/photos/pp13.jpg",
    "/img/photos/pp14.jpg",
    "/img/photos/pp15.jpg",
    "/img/photos/pp16.jpg"
];
// used in the portfolio-1 block
const portfolioList2 = [
    {
        id: 0,
        url: "#",
        category: "Mobile Design",
        title: "Cras Fermentum Sem",
        image: {
            "1x": "/img/photos/sp1.jpg",
            "2x": "/img/photos/sp1@2x.jpg 2x"
        }
    },
    {
        id: 1,
        url: "#",
        category: "Web Design",
        title: "Venenatis Euismod Vehicula",
        image: {
            "1x": "/img/photos/sp2.jpg",
            "2x": "/img/photos/sp2@2x.jpg 2x"
        }
    },
    {
        id: 2,
        url: "#",
        category: "Stationary",
        title: "Tortor Tellus Cursus",
        image: {
            "1x": "/img/photos/sp3.jpg",
            "2x": "/img/photos/sp3@2x.jpg 2x"
        }
    },
    {
        id: 3,
        url: "#",
        category: "Web Application",
        title: "Ridiculus Sem Parturient",
        image: {
            "1x": "/img/photos/sp4.jpg",
            "2x": "/img/photos/sp4@2x.jpg 2x"
        }
    },
    {
        id: 4,
        url: "#",
        category: "Web Design",
        title: "Cursus Sollicitudin Adipiscing",
        image: {
            "1x": "/img/photos/sp5.jpg",
            "2x": "/img/photos/sp5@2x.jpg 2x"
        }
    },
    {
        id: 5,
        url: "#",
        category: "Stationary",
        title: "Fringilla Quam Vulputate",
        image: {
            "1x": "/img/photos/sp6.jpg",
            "2x": "/img/photos/sp6@2x.jpg 2x"
        }
    }
];
// used in the portfolio-4 block
const portfolioList3 = [
    {
        id: 1,
        photos: 5,
        category: "Wedding",
        name: "Lucy & David",
        image: {
            "1x": "/img/photos/fc1.jpg",
            "2x": "/img/photos/fc1@2x.jpg 2x"
        }
    },
    {
        id: 2,
        photos: 8,
        category: "Wedding",
        name: "Stacy & Thomas",
        image: {
            "1x": "/img/photos/fc2.jpg",
            "2x": "/img/photos/fc2@2x.jpg 2x"
        }
    },
    {
        id: 3,
        photos: 7,
        category: "Couples",
        name: "Katherine & Jack",
        image: {
            "1x": "/img/photos/fc3.jpg",
            "2x": "/img/photos/fc3@2x.jpg 2x"
        }
    },
    {
        id: 4,
        photos: 9,
        category: "Wedding",
        name: "Jolene & William",
        image: {
            "1x": "/img/photos/fc4.jpg",
            "2x": "/img/photos/fc4@2x.jpg 2x"
        }
    },
    {
        id: 5,
        photos: 6,
        category: "Engagement",
        name: "Jenn & Richard",
        image: {
            "1x": "/img/photos/fc5.jpg",
            "2x": "/img/photos/fc5@2x.jpg 2x"
        }
    },
    {
        id: 6,
        photos: 8,
        category: "Wedding",
        name: "Gloria & Leo",
        image: {
            "1x": "/img/photos/fc6.jpg",
            "2x": "/img/photos/fc6@2x.jpg 2x"
        }
    }
];
// used in the portfolio-5 block
const portfolioList4 = [
    {
        id: 1,
        image: "pf1",
        title: "Fringilla Nullam",
        category: "drinks events"
    },
    {
        id: 2,
        image: "pf2",
        title: "Ridiculus Parturient",
        category: "events"
    },
    {
        id: 3,
        image: "pf3",
        title: "Ornare Ipsum",
        category: "pastries events"
    },
    {
        id: 4,
        image: "pf4",
        title: "Nullam Mollis",
        category: "events"
    },
    {
        id: 5,
        image: "pf5",
        title: "Euismod Risus",
        category: "pastries events"
    },
    {
        id: 6,
        image: "pf6",
        title: "Ridiculus Tristique",
        category: "foods"
    },
    {
        id: 7,
        image: "pf7",
        title: "Sollicitudin Pharetra",
        category: "foods drinks"
    },
    {
        id: 8,
        image: "pf8",
        title: "Tristique Venenatis",
        category: "pastries"
    },
    {
        id: 9,
        image: "pf9",
        title: "Cursus Fusce",
        category: "events"
    },
    {
        id: 10,
        image: "pf10",
        title: "Consectetur Malesuada",
        category: "foods"
    },
    {
        id: 11,
        image: "pf11",
        title: "Ultricies Aenean",
        category: "drinks"
    },
    {
        id: 12,
        image: "pf12",
        title: "Pellentesque Commodo",
        category: "foods"
    },
    {
        id: 13,
        image: "pf13",
        title: "Ultricies Aenean",
        category: "drinks"
    }
];
// used in the portfolio-8 block
const portfolioList5 = [
    {
        id: 1,
        color: "yellow",
        category: "Coffee",
        title: "Cras Fermentum Sem",
        image: "/img/photos/pd1.jpg"
    },
    {
        id: 2,
        color: "red",
        category: "Stationary",
        title: "Mollis Ipsum Mattis",
        image: "/img/photos/pd2.jpg"
    },
    {
        id: 3,
        color: "orange",
        category: "Branding",
        title: "Ipsum Ultricies Cursus",
        image: "/img/photos/pd3.jpg"
    },
    {
        id: 4,
        color: "purple",
        category: "Product",
        title: "Inceptos Euismod Egestas",
        image: "/img/photos/pd4.jpg"
    },
    {
        id: 5,
        color: "leaf",
        category: "Print",
        title: "Sollicitudin Ornare Porta",
        image: "/img/photos/pd5.jpg"
    },
    {
        id: 6,
        color: "aqua",
        category: "Workshop",
        title: "Ipsum Mollis Vulputate",
        image: "/img/photos/pd6.jpg"
    }
];
// used in the portfolio-10, portfolio-11 block
const portfolioList6 = [
    {
        id: 1,
        category: "Stationary",
        link: "/single-project-1",
        title: "Cras Fermentum Sem",
        image: "/img/photos/pd7.jpg",
        fullImage: "/img/photos/pd7-full.jpg"
    },
    {
        id: 2,
        link: "/single-project-1",
        category: "Magazine, Book",
        title: "Mollis Ipsum Mattis",
        image: "/img/photos/pd8.jpg",
        fullImage: "/img/photos/pd8-full.jpg"
    },
    {
        id: 3,
        category: "Packaging",
        link: "/single-project-1",
        title: "Ipsum Ultricies Cursus",
        image: "/img/photos/pd9.jpg",
        fullImage: "/img/photos/pd9-full.jpg"
    },
    {
        id: 4,
        link: "/single-project-1",
        image: "/img/photos/pd10.jpg",
        category: "Stationary, Branding",
        title: "Inceptos Euismod Egestas",
        fullImage: "/img/photos/pd10-full.jpg"
    },
    {
        id: 5,
        category: "Packaging",
        link: "/single-project-1",
        image: "/img/photos/pd11.jpg",
        title: "Ipsum Mollis Vulputate",
        fullImage: "/img/photos/pd11-full.jpg"
    }
];
const projects = [
    {
        id: 1,
        category: "Stationary",
        link: "/single-project-1",
        title: "Cras Fermentum Sem",
        image: "/img/photos/pd7.jpg",
        fullImage: "/img/photos/pd7-full.jpg"
    },
    {
        id: 2,
        link: "/single-project-1",
        category: "Magazine, Book",
        title: "Mollis Ipsum Mattis",
        image: "/img/photos/pd8.jpg",
        fullImage: "/img/photos/pd8-full.jpg"
    },
    {
        id: 3,
        category: "Packaging",
        link: "/single-project-1",
        title: "Ipsum Ultricies Cursus",
        image: "/img/photos/pd9.jpg",
        fullImage: "/img/photos/pd9-full.jpg"
    },
    {
        id: 4,
        link: "/single-project-1",
        image: "/img/photos/pd10.jpg",
        category: "Stationary, Branding",
        title: "Inceptos Euismod Egestas",
        fullImage: "/img/photos/pd10-full.jpg"
    },
    {
        id: 5,
        category: "Packaging",
        link: "/single-project-1",
        image: "/img/photos/pd11.jpg",
        title: "Ipsum Mollis Vulputate",
        fullImage: "/img/photos/pd11-full.jpg"
    }
];


/***/ })

};
;