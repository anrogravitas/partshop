"use strict";
exports.id = 5624;
exports.ids = [5624];
exports.modules = {

/***/ 95624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_blocks_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22334);
/* harmony import */ var components_common_PageProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24924);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99472);
/* harmony import */ var hooks_useClipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44429);




// -------- custom component -------- //




// -------- data -------- //
const navigations = [
    {
        title: "Usage",
        id: "collapse-usage",
        children: [
            {
                title: "Get Started",
                url: "/docs"
            },
            // { title: 'Forms', url: '#' },
            {
                title: "FAQ",
                url: "/docs/faq"
            },
            {
                title: "Changelog",
                url: "/docs/changelog"
            },
            {
                title: "Credits",
                url: "/docs/credits"
            }
        ]
    },
    {
        title: "Styleguide",
        id: "collapse-style",
        children: [
            {
                title: "Theme",
                url: "/docs/styleguide/theme"
            },
            {
                title: "Colors",
                url: "/docs/styleguide/colors"
            },
            {
                title: "Fonts",
                url: "/docs/styleguide/fonts"
            },
            {
                title: "SVG Icons",
                url: "/docs/styleguide/svg-icons"
            },
            {
                title: "Font Icons",
                url: "/docs/styleguide/font-icons"
            },
            {
                title: "Illustrations",
                url: "/docs/styleguide/illustrations"
            },
            {
                title: "Backgrounds",
                url: "/docs/styleguide/backgrounds"
            },
            {
                title: "Misc",
                url: "/docs/styleguide/misc"
            }
        ]
    },
    {
        title: "Elements",
        id: "collapse-elements",
        children: [
            {
                title: "Accordion",
                url: "/docs/elements/accordions"
            },
            {
                title: "Alerts",
                url: "/docs/elements/alerts"
            },
            {
                title: "Animations",
                url: "/docs/elements/animations"
            },
            {
                title: "Avatars",
                url: "/docs/elements/avatars"
            },
            {
                title: "Background",
                url: "/docs/elements/background"
            },
            {
                title: "Badges",
                url: "/docs/elements/badges"
            },
            {
                title: "Buttons",
                url: "/docs/elements/buttons"
            },
            {
                title: "Card",
                url: "/docs/elements/card"
            },
            {
                title: "Carousel",
                url: "/docs/elements/carousel"
            },
            {
                title: "Dividers",
                url: "/docs/elements/dividers"
            },
            {
                title: "Form Elements",
                url: "/docs/elements/form-elements"
            },
            {
                title: "Image Hover",
                url: "/docs/elements/image-hover"
            },
            {
                title: "Image Mask",
                url: "/docs/elements/image-mask"
            },
            {
                title: "Lightbox",
                url: "/docs/elements/lightbox"
            },
            {
                title: "Media Player",
                url: "/docs/elements/media-player"
            },
            {
                title: "Modal",
                url: "/docs/elements/modal"
            },
            {
                title: "Pagination",
                url: "/docs/elements/pagination"
            },
            {
                title: "Progressbar",
                url: "/docs/elements/progressbar"
            },
            {
                title: "Shadows",
                url: "/docs/elements/shadows"
            },
            {
                title: "Shapes",
                url: "/docs/elements/shapes"
            },
            {
                title: "Tables",
                url: "/docs/elements/tables"
            },
            {
                title: "Tabs",
                url: "/docs/elements/tabs"
            },
            {
                title: "Text Animations",
                url: "/docs/elements/text-animation"
            },
            {
                title: "Text Highlight",
                url: "/docs/elements/text-highlight"
            },
            {
                title: "Tiles",
                url: "/docs/elements/tiles"
            },
            // { title: 'Tooltips & Popovers', url: '/docs/elements/tooltips-popovers' },
            {
                title: "Typography",
                url: "/docs/elements/typography"
            }
        ]
    },
    {
        title: "Others",
        id: "collapse-others",
        children: [
            {
                title: "Blog Cards",
                url: "/docs/others/blog-card"
            },
            {
                title: "Counters",
                url: "/docs/others/counter"
            },
            {
                title: "Job Cards",
                url: "/docs/others/job-card"
            },
            {
                title: "Product Cards",
                url: "/docs/others/product-card"
            },
            {
                title: "Project Cards",
                url: "/docs/others/project-card"
            },
            {
                title: "Service Cards",
                url: "/docs/others/service-card"
            },
            {
                title: "Team Cards",
                url: "/docs/others/team-card"
            },
            {
                title: "Testimonial Cards",
                url: "/docs/others/testimonial-card"
            }
        ]
    }
];
// ====================================================
const DocLayout = ({ pageTitle , children , description , quickAccssLinks , descriptionClass ="lead px-xxl-10" , headingColClass ="col-md-9 col-lg-7 col-xl-6 mx-auto"  })=>{
    // used for copy button
    (0,hooks_useClipboard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    // render the links
    const renderLinks = (data)=>{
        return data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    title: item.title,
                    href: item.url,
                    className: pathname === item.url ? "active" : ""
                })
            }, item.title));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_PageProgress__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "content-wrapper",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        className: "wrapper bg-soft-primary",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_blocks_navbar__WEBPACK_IMPORTED_MODULE_4__/* .Navbar */ .w, {
                            language: true,
                            button: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                title: "Contact",
                                href: "/contact-1",
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
                                    className: headingColClass,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "display-1 mb-3",
                                            children: pageTitle
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: descriptionClass,
                                            children: description
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                                    className: "col-xl-2 sidebar doc-sidebar mt-md-0 py-16 d-none d-xl-block",
                                    children: navigations.map(({ id , title , children  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "widget pb-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "widget-title fs-17 mb-2",
                                                    children: title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                                    id: id,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "list-unstyled fs-sm lh-sm text-reset",
                                                        children: renderLinks(children)
                                                    })
                                                })
                                            ]
                                        }, id))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xl-8 order-xl-2",
                                    children: children
                                }),
                                quickAccssLinks && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                                    className: "col-xl-2 order-xl-3 sidebar sticky-sidebar mt-md-0 py-16 d-none d-xl-block",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "widget",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "widget-title fs-17 mb-2 ps-xl-5",
                                                children: "On this page"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                                className: "ps-xl-5",
                                                id: "sidebar-nav",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "list-unstyled fs-sm lh-sm text-reset",
                                                    children: quickAccssLinks.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                                smooth: true,
                                                                spy: true,
                                                                activeClass: "active",
                                                                to: item.url,
                                                                className: "nav-link scroll",
                                                                children: item.title
                                                            })
                                                        }, i))
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocLayout);


/***/ }),

/***/ 44429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useClipboard = ()=>{
    const clipboard = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const copyIconCode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        (async ()=>{
            const ClipboardJS = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 4071, 23))).default;
            const btnHtml = '<button type="button" class="btn btn-sm btn-white rounded-pill btn-clipboard">Copy</button>';
            document.querySelectorAll(".code-wrapper-inner").forEach(function(element) {
                element.insertAdjacentHTML("beforebegin", btnHtml);
            });
            clipboard.current = new ClipboardJS(".btn-clipboard", {
                target: function(trigger) {
                    return trigger.nextElementSibling;
                }
            });
            clipboard.current.on("success", (event)=>{
                event.trigger.textContent = "Copied!";
                event.clearSelection();
                const timeout = setTimeout(function() {
                    event.trigger.textContent = "Copy";
                }, 2000);
                return ()=>clearTimeout(timeout);
            });
            copyIconCode.current = new ClipboardJS(".btn-copy-icon");
            copyIconCode.current.on("success", function(event) {
                event.clearSelection();
                event.trigger.textContent = "Copied!";
                const timeout = setTimeout(function() {
                    event.trigger.textContent = "Copy";
                }, 2300);
                return ()=>clearTimeout(timeout);
            });
        })();
        return ()=>{
            clipboard.current?.destroy();
            copyIconCode.current?.destroy();
        };
    }, []);
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClipboard);


/***/ })

};
;