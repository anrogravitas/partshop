"use strict";
exports.id = 5652;
exports.ids = [5652];
exports.modules = {

/***/ 95219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_blocks_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22334);
/* harmony import */ var components_common_PageProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24924);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99472);






// ====================================================
const filters = [
    {
        id: 1,
        title: "About",
        url: "/docs/blocks/about"
    },
    {
        id: 2,
        title: "Blog",
        url: "/docs/blocks/blog"
    },
    {
        id: 3,
        title: "Call to Action",
        url: "/docs/blocks/call-to-action"
    },
    {
        id: 4,
        title: "Clients",
        url: "/docs/blocks/clients"
    },
    {
        id: 5,
        title: "Contact",
        url: "/docs/blocks/contact"
    },
    {
        id: 6,
        title: "Facts",
        url: "/docs/blocks/facts"
    },
    {
        id: 7,
        title: "FAQ",
        url: "/docs/blocks/faq"
    },
    {
        id: 8,
        title: "Features",
        url: "/docs/blocks/features"
    },
    {
        id: 9,
        title: "Footer",
        url: "/docs/blocks/footer"
    },
    {
        id: 10,
        title: "Hero",
        url: "/docs/blocks/hero"
    },
    // { id: 11, title: 'Misc', url: '/docs/blocks/misc' },
    {
        id: 12,
        title: "Navbar",
        url: "/docs/blocks/navbar"
    },
    {
        id: 13,
        title: "Portfolio",
        url: "/docs/blocks/portfolio"
    },
    {
        id: 14,
        title: "Pricing",
        url: "/docs/blocks/pricing"
    },
    {
        id: 15,
        title: "Process",
        url: "/docs/blocks/process"
    },
    {
        id: 16,
        title: "Team",
        url: "/docs/blocks/team"
    },
    {
        id: 17,
        title: "Testimonials",
        url: "/docs/blocks/testimonials"
    }
];
const BlockLayout = ({ title , children  })=>{
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_PageProgress__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "content-wrapper",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        className: "wrapper bg-soft-primary",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_blocks_navbar__WEBPACK_IMPORTED_MODULE_3__/* .Navbar */ .w, {
                            language: true,
                            button: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                title: "Contact",
                                href: "#",
                                className: "btn btn-sm btn-primary rounded-pill"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "wrapper bg-soft-primary",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container pt-10 pb-12 pt-md-14 pb-md-16 text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-md-9 col-lg-7 col-xl-5 mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            className: "display-1 mb-3",
                                            children: [
                                                "Blocks - ",
                                                title
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "lead px-xxl-10",
                                            children: "Copy any custom block snippet below and paste it on your page to build your website easily."
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "wrapper bg-light wrapper-border",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container py-11",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "h5",
                                    children: "Filter Blocks:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "list-inline mb-0",
                                    children: filters.map(({ id , title , url  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "list-inline-item me-1 mb-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                href: url,
                                                title: title,
                                                className: `btn btn-soft-ash btn-sm rounded ${pathname === url ? "text-primary pe-none" : ""}`
                                            })
                                        }, id))
                                })
                            ]
                        })
                    }),
                    children
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "wrapper bg-dark text-white",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container pt-14 pt-md-16 text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "display-3 text-white mt-3 mb-3 px-lg-8",
                                        children: "Think unique and be creative. Make a difference with Sandbox."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "lead fs-lg mb-6",
                                        children: "Everything you need to create your next unique and professional website, including impressive and ready-made blocks and pages."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        target: "_blank",
                                        className: "btn btn-lg btn-white rounded-pill mb-10",
                                        rel: "noreferrer",
                                        children: "Buy Sandbox"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "img-fluid",
                            src: "/img/demos/f1.png",
                            srcSet: "/img/demos/f1@2x.png 2x",
                            alt: "demo"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockLayout);


/***/ }),

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


/***/ })

};
;