"use strict";
exports.id = 6416;
exports.ids = [6416];
exports.modules = {

/***/ 66416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Uq": () => (/* reexport */ facts_Facts),
  "oi": () => (/* reexport */ facts_Facts1),
  "eI": () => (/* reexport */ facts_Facts10),
  "Dw": () => (/* reexport */ facts_Facts11),
  "MK": () => (/* reexport */ facts_Facts12),
  "J7": () => (/* reexport */ facts_Facts13),
  "Rr": () => (/* reexport */ facts_Facts14),
  "Rh": () => (/* reexport */ facts_Facts15),
  "kX": () => (/* reexport */ facts_Facts16),
  "yb": () => (/* reexport */ facts_Facts17),
  "UJ": () => (/* reexport */ facts_Facts2),
  "TL": () => (/* reexport */ facts_Facts3),
  "ij": () => (/* reexport */ facts_Facts4),
  "_O": () => (/* reexport */ facts_Facts5),
  "Ck": () => (/* reexport */ facts_Facts6),
  "SY": () => (/* reexport */ facts_Facts7),
  "ji": () => (/* reexport */ facts_Facts8),
  "XK": () => (/* reexport */ facts_Facts9)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/components/reuseable/counter/index.ts + 3 modules
var counter = __webpack_require__(52411);
// EXTERNAL MODULE: ./src/data/facts.ts
var facts = __webpack_require__(29184);
// EXTERNAL MODULE: ./src/components/reuseable/IconBox.tsx
var IconBox = __webpack_require__(50220);
;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts.tsx



// -------- data -------- //


// ===========================================================================
const Facts = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-11",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-lg-12 text-center text-lg-start",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "fs-16 text-uppercase text-primary mb-3 text-center",
                        children: "C\xe9g inform\xe1ci\xf3k"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "display-3 mb-4 pe-xxl-5 text-center",
                        children: "Eddigi eredm\xe9nyeink"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-12 mt-lg-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row align-items-center counter-wrapper gy-6 text-center",
                    children: facts/* factList.map */.dd.map(({ id , icon , ...item })=>/*#__PURE__*/ (0,external_react_.createElement)(counter/* Counter3 */.l9, {
                            ...item,
                            key: id,
                            Icon: /*#__PURE__*/ jsx_runtime_.jsx(IconBox/* default */.Z, {
                                className: "icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4",
                                icon: icon
                            })
                        }))
                })
            })
        ]
    });
};
/* harmony default export */ const facts_Facts = (Facts);

;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts1.tsx


const Facts1 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wrapper bg-soft-primary",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container py-14 pt-md-17 pb-md-21",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-2 align-items-end",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "fs-16 text-uppercase text-line text-primary mb-3",
                                children: "Company Facts"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "display-4 mb-0 pe-xxl-15",
                                children: "We are proud of our works"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8 mt-lg-2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-center counter-wrapper gy-6 text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(counter/* Counter1 */.Dv, {
                                    title: "Completed Projects",
                                    number: 1000
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(counter/* Counter1 */.Dv, {
                                    title: "Happy Clients",
                                    number: 500
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(counter/* Counter1 */.Dv, {
                                    title: "Awards Won",
                                    number: 150
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const facts_Facts1 = (Facts1);

;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts2.tsx


// -------- data -------- //

// ===========================================================================
const Facts2 = ({ title ="We are proud of our creative team" , subtitle ="Just sit back and relax while we take care of your business needs."  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-11",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-lg-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "display-4 mb-3 pe-xl-10",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "lead fs-lg mb-0 pe-xxl-10",
                        children: subtitle
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-8 mt-lg-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row align-items-center counter-wrapper gy-6 text-center",
                    children: facts/* factList1.map */.mA.map(({ id , number , title , Icon  })=>/*#__PURE__*/ jsx_runtime_.jsx(counter/* Counter3 */.l9, {
                            title: title,
                            number: number,
                            Icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {})
                        }, id))
                })
            })
        ]
    });
};
/* harmony default export */ const facts_Facts2 = (Facts2);

;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts3.tsx


// -------- data -------- //

const Facts3 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "col-xl-10 mx-auto",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    backgroundImage: "url(/img/photos/bg3.jpg)"
                },
                className: "card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 text-white mt-n5 mt-lg-0 mt-lg-n50p mb-lg-n50p border-radius-lg-top",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "card-body p-9 p-xl-10",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row align-items-center counter-wrapper gy-4 text-center",
                        children: facts/* factList2.map */.Sw.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(counter/* Counter2 */.YS, {
                                ...item
                            }, item.id))
                    })
                })
            })
        })
    });
};
/* harmony default export */ const facts_Facts3 = (Facts3);

// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(10609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts4.tsx


// -------- data -------- //

const Facts4 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wrapper image-wrapper bg-auto no-overlay bg-image text-center bg-map",
        style: {
            backgroundImage: "url(/img/map.png)"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container pt-0 pb-14 pt-md-16 pb-md-18",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-10 col-xl-9 col-xxl-8 mx-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "fs-15 text-uppercase text-muted mb-3",
                                children: "Join Our Community"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "display-4 mb-8 px-lg-12",
                                children: "We are trusted by over 5000+ clients. Join them now and grow your business."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-10 col-lg-9 col-xl-7 mx-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row align-items-center counter-wrapper gy-4 gy-md-0",
                            children: facts/* factList3.map */.a4.map(({ id , title , value  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-md-4 text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "counter counter-lg text-primary",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                                end: value
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: title
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
/* harmony default export */ const facts_Facts4 = (Facts4);

;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts5.tsx


// -------- data -------- //

const Facts5 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wrapper bg-soft-primary",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container py-14 py-md-16",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row mb-10",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-xl-10 mx-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row align-items-center counter-wrapper gy-6 text-center",
                        children: facts/* factList4.map */.bs.map(({ value , title , Icon , id  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-md-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                        className: "icon-svg-lg text-primary mb-3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "counter",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                            end: value
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: title
                                    })
                                ]
                            }, id))
                    })
                })
            })
        })
    });
};
/* harmony default export */ const facts_Facts5 = (Facts5);

// EXTERNAL MODULE: ./src/data/demo-7.ts
var demo_7 = __webpack_require__(82934);
;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts6.tsx


// -------- data -------- //

const Facts6 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row gx-lg-0 gy-10 align-items-center mb-15 mb-lg-18",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-6 order-lg-2 offset-lg-1",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row gx-md-5 gy-5 align-items-center counter-wrapper",
                    children: demo_7/* countList.map */.GB.map(({ id , icon , title , amount , color  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "card shadow-lg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "card-body",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "d-flex d-lg-block d-xl-flex flex-row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: `icon btn btn-circle btn-lg ${color} pe-none mx-auto me-4 mb-lg-3 mb-xl-0`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: `uil ${icon}`
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "counter mb-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                                            end: amount
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "mb-0",
                                                        children: title
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        }, id))
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-lg-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "display-4 mb-3",
                        children: "Join Our Community"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "lead fs-lg lh-sm",
                        children: "We have considered our business solutions to support you on every stage of your growth."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mb-0",
                        children: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur."
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const facts_Facts6 = (Facts6);

;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts7.tsx


// -------- data -------- //

const Facts7 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wrapper bg-dark",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container py-14 pt-md-17 pb-md-21",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-2 text-white align-items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "display-4 text-white mb-3 pe-xxl-15",
                                children: "We are proud of our projects"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "lead fs-lg mb-0 pe-xxl-10",
                                children: "We bring solutions to make life easier for our customers."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8 mt-lg-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row align-items-center counter-wrapper gy-6 text-center",
                            children: facts/* factList5.map */.D3.map(({ id , title , amount  })=>/*#__PURE__*/ jsx_runtime_.jsx(counter/* Counter1 */.Dv, {
                                    title: title,
                                    number: amount,
                                    titleColor: "text-white"
                                }, id))
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const facts_Facts7 = (Facts7);

// EXTERNAL MODULE: ./src/data/demo-12.ts
var demo_12 = __webpack_require__(25553);
;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts8.tsx


// -------- data -------- //

const Facts8 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wrapper bg-soft-primary",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container py-14 pt-md-17 pb-md-20",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row gx-lg-8 gx-xl-12 gy-10 gy-lg-0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-4 text-center text-lg-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "display-4 mb-3 pe-xl-15",
                                children: "We are proud of our works"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "lead fs-lg mb-0 pe-xxl-10",
                                children: "We bring solutions to make life easier for our customers."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8 mt-lg-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row align-items-center counter-wrapper gy-6 text-center",
                            children: demo_12/* factList.map */.dd.map(({ id , number , title , Icon  })=>/*#__PURE__*/ jsx_runtime_.jsx(counter/* Counter3 */.l9, {
                                    title: title,
                                    number: number,
                                    Icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {})
                                }, id))
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const facts_Facts8 = (Facts8);

// EXTERNAL MODULE: ./src/utils/animation.ts
var animation = __webpack_require__(89428);
;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts9.tsx



// -------- data -------- //

const Facts9 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "row",
        style: (0,animation/* default */.ZP)({
            name: "slideInUp",
            delay: "100ms"
        }),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "col-12 mt-n20",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                    className: "rounded",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/img/photos/about5.jpg",
                        srcSet: "/img/photos/about5@2x.jpg 2x",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-xl-10 mx-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            backgroundImage: "url(/img/photos/bg2.jpg)"
                        },
                        className: "card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 text-white mt-n5 mt-lg-0 mt-lg-n50p mb-lg-n50p border-radius-lg-top",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "card-body p-9 p-xl-10",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row align-items-center counter-wrapper gy-4 text-center",
                                children: facts/* factList6.map */.Fg.map(({ id , ...item })=>/*#__PURE__*/ jsx_runtime_.jsx(counter/* Counter2 */.YS, {
                                        ...item
                                    }, id))
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const facts_Facts9 = (Facts9);

;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts10.tsx


// -------- data -------- //

const Facts10 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wrapper bg-soft-primary",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container py-14 pt-md-17 pb-md-19",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 align-items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-4 text-center text-lg-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "fs-16 text-uppercase text-primary mb-3",
                                children: "Company Facts"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "display-4 mb-3 pe-xxl-15",
                                children: "We are proud of our projects"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8 mt-lg-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row align-items-center counter-wrapper gy-6 text-center",
                            children: facts/* factList5.map */.D3.map(({ id , title , amount  })=>/*#__PURE__*/ jsx_runtime_.jsx(counter/* Counter1 */.Dv, {
                                    title: title,
                                    number: amount
                                }, id))
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const facts_Facts10 = (Facts10);

;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts11.tsx


// -------- data -------- //

const Facts11 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-11 align-items-end",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-lg-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "fs-15 text-uppercase text-muted mb-3",
                        children: "Company Facts"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "display-4 mb-0",
                        children: "We are proud of our works"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-8 mt-lg-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row align-items-center counter-wrapper gy-6 text-center",
                    children: facts/* factList5.map */.D3.map(({ id , title , amount  })=>/*#__PURE__*/ jsx_runtime_.jsx(counter/* Counter1 */.Dv, {
                            number: amount,
                            title: title
                        }, id))
                })
            })
        ]
    });
};
/* harmony default export */ const facts_Facts11 = (Facts11);

// EXTERNAL MODULE: ./src/icons/solid-duo/TargetTwo.tsx
var TargetTwo = __webpack_require__(63063);
// EXTERNAL MODULE: ./src/icons/solid-duo/BarChartTwo.tsx
var BarChartTwo = __webpack_require__(71110);
// EXTERNAL MODULE: ./src/icons/solid-duo/EmployeesTwo.tsx
var EmployeesTwo = __webpack_require__(761);
;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts12.tsx





const Facts12 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container-card",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 pb-15",
            style: {
                backgroundImage: "url(/img/photos/bg22.png)"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "card-body py-14 px-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row gx-lg-8 gx-xl-12 gy-10 gy-lg-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-4 text-center text-lg-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "display-4 mb-3 pe-xxl-15",
                                        children: "We are proud of our works"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "lead fs-lg mb-0 pe-xxl-10",
                                        children: "We bring solutions to make life easier for our customers."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-8 mt-lg-2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row align-items-center counter-wrapper gy-6 text-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "col-md-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TargetTwo/* default */.Z, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "counter",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                                        end: 1000,
                                                        suffix: "+"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mb-0",
                                                    children: "Completed Projects"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "col-md-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(BarChartTwo/* default */.Z, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "counter",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                                        end: 4,
                                                        suffix: "x"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mb-0",
                                                    children: "Revenue Growth"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "col-md-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(EmployeesTwo/* default */.Z, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "counter",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                                        end: 99.7,
                                                        suffix: "%"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mb-0",
                                                    children: "Customer Satisfaction"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const facts_Facts12 = (Facts12);

;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts13.tsx

const Facts13 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wrapper bg-gray",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container py-15 py-md-17 pb-md-19",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row align-items-center gy-8 mb-13",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-7 text-center text-lg-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "fs-16 text-uppercase text-muted mb-3",
                                children: "Save Time and Money"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                className: "display-3 mb-0 pe-xl-10 pe-xxl-15",
                                children: [
                                    "Save your time and money by choosing our ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "underline-3 style-2 yellow",
                                        children: "professional"
                                    }),
                                    " ",
                                    "team."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row gy-6 text-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-md-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "progressbar semi-circle fuchsia",
                                            "data-value": "95"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "mb-0",
                                            children: "Customer Satisfaction"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-md-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "progressbar semi-circle orange",
                                            "data-value": "80"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "mb-0",
                                            children: "Increased Revenue"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const facts_Facts13 = (Facts13);

;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts14.tsx



// -------- data -------- //

const Facts14 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row text-center mb-7",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-lg-11 col-xl-10 col-xxl-9 mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "fs-16 text-uppercase text-muted mb-3",
                            children: "Join Our Community"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "display-3 px-lg-12 px-xxl-14",
                            children: "We are trusted by over 5000+ clients. Join them now and grow your business."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row mb-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-md-10 col-lg-9 col-xl-7 mx-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row align-items-center counter-wrapper gy-4 gy-md-0",
                        children: facts/* factList7.map */.DD.map(({ id , title , amount , suffix  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-md-4 text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "counter counter-lg text-primary",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                            end: amount,
                                            suffix: suffix
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: title
                                    })
                                ]
                            }, id))
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/img/photos/about26.png",
                    srcSet: "/img/photos/about26@2x.png 2x",
                    alt: ""
                })
            })
        ]
    });
};
/* harmony default export */ const facts_Facts14 = (Facts14);

;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts15.tsx




// -------- data -------- //

const Facts15 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-11",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-lg-4 text-center text-lg-start",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "fs-16 text-uppercase text-primary mb-3",
                        children: "Company Facts"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "display-3 mb-4 pe-xxl-5",
                        children: "We are proud of our design team"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mb-0 pe-xxl-11",
                        children: "Just sit back and relax while we take care of your business needs for you."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-8 mt-lg-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row align-items-center counter-wrapper gy-6 text-center",
                    children: facts/* factList8.map */.cO.map(({ id , icon , ...item })=>/*#__PURE__*/ (0,external_react_.createElement)(counter/* Counter3 */.l9, {
                            ...item,
                            key: id,
                            Icon: /*#__PURE__*/ jsx_runtime_.jsx(IconBox/* default */.Z, {
                                className: "icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4",
                                icon: icon
                            })
                        }))
                })
            })
        ]
    });
};
/* harmony default export */ const facts_Facts15 = (Facts15);

;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts16.tsx

// -------- data -------- //

const Facts16 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section-frame overflow-hidden",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "wrapper bg-soft-primary",
            style: {
                borderRadius: "1rem"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container py-17",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-xl-11 col-xxl-10 mx-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "fs-16 text-uppercase text-muted mb-3",
                                children: "Company Facts"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "display-4 mb-10 px-lg-20 px-xl-20",
                                children: "Save your time and money by choosing our professional team."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row gy-6 text-center",
                                children: facts/* factList9.map */.Ov.map(({ id , value , title , description , color  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col-md-6 col-lg-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `progressbar semi-circle ${color}`,
                                                "data-value": value
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "mb-0",
                                                children: description
                                            })
                                        ]
                                    }, id))
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const facts_Facts16 = (Facts16);

;// CONCATENATED MODULE: ./src/components/blocks/facts/Facts17.tsx


const Facts17 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "wrapper bg-gray position-relative min-vh-60 d-lg-flex align-items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-6 position-lg-absolute top-0 end-0 image-wrapper bg-image bg-cover h-100",
                style: {
                    backgroundImage: "url(/img/photos/bg39.jpg)"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "divider text-gray divider-v-start d-none d-lg-block",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 54 1200",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("g", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                        fill: "currentColor",
                                        points: "6 0 0 0 0 1200 6 1200 54 0 6 0"
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row gx-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "pt-13 pb-15 pb-md-17 py-lg-16 pe-lg-15",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "fs-16 text-uppercase text-muted mb-3",
                                    children: "Our Solutions"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "display-3 ls-sm mb-5",
                                    children: "Just sit & relax while we take care of your business needs."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mb-6",
                                    children: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row align-items-center counter-wrapper gy-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "col-md-6",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "counter counter-lg mb-1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                                        end: 99,
                                                        suffix: "%"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: "fs-17 mb-1",
                                                    children: "Customer Satisfaction"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "ratings five"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "col-md-6",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "counter counter-lg mb-1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                                        end: 4,
                                                        suffix: "x"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: "fs-17 mb-1",
                                                    children: "New Visitors"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "ratings five"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const facts_Facts17 = (Facts17);

;// CONCATENATED MODULE: ./src/components/blocks/facts/index.ts





















/***/ }),

/***/ 52411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Dv": () => (/* reexport */ counter_Counter1),
  "YS": () => (/* reexport */ counter_Counter2),
  "l9": () => (/* reexport */ counter_Counter3)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(10609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
;// CONCATENATED MODULE: ./src/components/reuseable/counter/Counter1.tsx


// ====================================================
const Counter1 = ({ title , number , titleColor =""  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "col-md-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: `counter counter-lg ${titleColor}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                    end: number,
                    suffix: "+"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: title
            })
        ]
    });
};
/* harmony default export */ const counter_Counter1 = (Counter1);

;// CONCATENATED MODULE: ./src/components/reuseable/counter/Counter2.tsx


// ===================================================
const Counter2 = ({ amount , title  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "col-6 col-lg-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "counter counter-lg text-white",
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                    end: amount
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: title
            })
        ]
    });
};
/* harmony default export */ const counter_Counter2 = (Counter2);

;// CONCATENATED MODULE: ./src/components/reuseable/counter/Counter3.tsx


// ====================================================
const Counter3 = ({ title , number , Icon , suffix  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "col-md-4",
        children: [
            Icon,
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "counter",
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                    end: number,
                    ...suffix && {
                        suffix
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: title
            })
        ]
    });
};
/* harmony default export */ const counter_Counter3 = (Counter3);

;// CONCATENATED MODULE: ./src/components/reuseable/counter/index.ts






/***/ }),

/***/ 71110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BarChartTwo = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 256 245.34",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg solid-duo ${className || "icon-svg-sm text-grape-fuchsia mb-3"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M32 106.67A10.67 10.67 0 0124.91 88l48-42.67a10.62 10.62 0 018.37-2.61l83 10.07 47-44.56A10.66 10.66 0 01226 23.74l-50.67 48a10.73 10.73 0 01-8.61 2.85L83.49 64.5 39.09 104a10.61 10.61 0 01-7.09 2.7z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M226.67 53.34A8 8 0 01221 51l-37.32-37.34A8 8 0 01189.33 0h37.33a8 8 0 018 8v37.33a8 8 0 01-4.95 7.39 7.66 7.66 0 01-3.04.62z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M74.67 184v29.33h-64V184A13.33 13.33 0 0124 170.67h37.33A13.34 13.34 0 0174.67 184zM160 120v93.33H96V120a13.33 13.33 0 0113.33-13.33h37.33A13.33 13.33 0 01160 120zm85.33 21.34v72h-64v-72A13.32 13.32 0 01194.66 128H232a13.31 13.31 0 0113.33 13.34z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M248 245.34H8a8 8 0 010-16h240a8 8 0 010 16z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarChartTwo);


/***/ }),

/***/ 761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const EmployeesTwo = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 256 256",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg solid-duo ${className || "icon-svg-sm text-grape-fuchsia mb-3"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M72.11 86.51l-3.52-21 1.41-1.4-4.36-4.48a24.12 24.12 0 01-5.78-24.43c.11-.32.2-.53.32-.85l-1.4-.21-9-18.88a8 8 0 00-14.49 0l-8.88 19-19.69 3.07a8 8 0 00-6.29 5.44 7.94 7.94 0 001.92 8.11l14.51 14.83-3.42 21A8.07 8.07 0 0021.33 96a8.33 8.33 0 004-1l17.49-9.81 17.6 9.6a8.2 8.2 0 008.53-.43 8 8 0 003.21-7.89zm183.46-44.06a7.85 7.85 0 00-6.4-5.33l-19.73-3-9-18.88a8 8 0 00-14.5 0l-8.86 19-1.17.21c0 .11.11.21.11.32a23.76 23.76 0 01-5.44 24.32L185.81 64l1.71 1.71-3.41 21A8.07 8.07 0 00192 96a8.33 8.33 0 004-1l17.49-9.81 17.6 9.6a8.2 8.2 0 008.53-.43 8.06 8.06 0 003.2-7.89l-3.52-21 14.51-14.92a8.09 8.09 0 001.81-8.13z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M100.18 106.67a8 8 0 01-7.91-9.25l4.61-28.8L77 48.37a8 8 0 014.46-13.51l27.09-4.22 12.11-26a8 8 0 017.2-4.64 8 8 0 017.23 4.58l12.29 25.9 27.12 4.05A8 8 0 01179.09 48l-19.78 20.38 4.8 28.77a8 8 0 01-11.74 8.34l-24.19-13.25-24.12 13.42a7.94 7.94 0 01-3.88 1z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                className: "fill-secondary",
                cx: "42.67",
                cy: "160",
                r: "21.33"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M71.15 196.27A44.71 44.71 0 0053.34 232v2.67H8a8.06 8.06 0 01-8-8v-5.33A29.32 29.32 0 0129.33 192H56a29.13 29.13 0 0115.15 4.27z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                className: "fill-secondary",
                cx: "213.33",
                cy: "160",
                r: "21.33"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M256 221.33v5.33a8.07 8.07 0 01-8 8h-45.33V232a44.69 44.69 0 00-17.81-35.73A29.07 29.07 0 01200 192h26.67A29.32 29.32 0 01256 221.33z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                className: "fill-primary",
                cx: "128",
                cy: "154.67",
                r: "32"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M157.33 202.67H98.66A29.35 29.35 0 0069.33 232v16a8 8 0 008 8h101.33a8 8 0 008-8v-16a29.35 29.35 0 00-29.33-29.33z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeesTwo);


/***/ }),

/***/ 63063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const TargetTwo = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256.1 256.01",
        className: `svg-inject icon-svg solid-duo ${className || "icon-svg-sm text-grape-fuchsia mb-3"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M178.66 79.37L166.93 91.1a76.68 76.68 0 014.91 11.52 85.77 85.77 0 0114.93-1.28h1.39a93.65 93.65 0 00-9.5-21.97zM0 128a96.1 96.1 0 00109.65 95 82.93 82.93 0 01-5.65-15.42 67 67 0 01-8 .43A80 80 0 0196 48a79 79 0 0137 9.17l11.73-11.73A94.73 94.73 0 0096 32a96.14 96.14 0 00-96 96z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M37.33 128A58.78 58.78 0 0096 186.68a47.26 47.26 0 005.44-.32A82.71 82.71 0 01103 170a37.32 37.32 0 01-7 .64 42.67 42.67 0 010-85.34 32.88 32.88 0 018 .84l12.91-12.91a57 57 0 00-20.91-4A58.81 58.81 0 0037.33 128z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M96 106.68A21.33 21.33 0 10117.33 128 21.39 21.39 0 0096 106.68zm0 26.66a5.33 5.33 0 115.33-5.33 5.28 5.28 0 01-5.33 5.33z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M96.1 136a8 8 0 01-5.67-13.65L159.76 53a8 8 0 0111.31 11.31l-69.33 69.33A8 8 0 0196.1 136z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M194.77 64H168.1a8 8 0 01-8-8V29.34a8.08 8.08 0 012.33-5.67l21.33-21.33A8 8 0 01197.42 8v18.68h18.68a8 8 0 015.66 13.66l-21.33 21.33a8 8 0 01-5.66 2.33zm-8 53.34a69.34 69.34 0 1069.33 69.34 69.4 69.4 0 00-69.33-69.34zm29.87 56.11L182 210.78a8 8 0 01-11.09.64l-18.67-16a8 8 0 1110.41-12.15l12.84 11 29.44-31.69a8 8 0 0111.74 10.88z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TargetTwo);


/***/ })

};
;