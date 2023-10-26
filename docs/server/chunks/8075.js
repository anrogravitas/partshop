"use strict";
exports.id = 8075;
exports.ids = [8075];
exports.modules = {

/***/ 38075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "tV": () => (/* reexport */ services_Services1),
  "PA": () => (/* reexport */ services_Services10),
  "qz": () => (/* reexport */ services_Services11),
  "I": () => (/* reexport */ services_Services12),
  "_N": () => (/* reexport */ services_Services13),
  "Y3": () => (/* reexport */ services_Services14),
  "gX": () => (/* reexport */ services_Services15),
  "oi": () => (/* reexport */ services_Services16),
  "vq": () => (/* reexport */ services_Services17),
  "bj": () => (/* reexport */ services_Services18),
  "hi": () => (/* reexport */ services_Services19),
  "uy": () => (/* reexport */ services_Services2),
  "TV": () => (/* reexport */ services_Services20),
  "Db": () => (/* reexport */ services_Services21),
  "m9": () => (/* reexport */ services_Services22),
  "WJ": () => (/* reexport */ services_Services23),
  "Lq": () => (/* reexport */ services_Services24),
  "eS": () => (/* reexport */ services_Services25),
  "o1": () => (/* reexport */ services_Services26),
  "nZ": () => (/* reexport */ services_Services27),
  "bD": () => (/* reexport */ Services28),
  "Xk": () => (/* reexport */ services_Services29),
  "mT": () => (/* reexport */ services_Services3),
  "UL": () => (/* reexport */ services_Services4),
  "Uq": () => (/* reexport */ services_Services5),
  "qN": () => (/* reexport */ services_Services6),
  "Rd": () => (/* reexport */ services_Services7),
  "NG": () => (/* reexport */ services_Services8),
  "FA": () => (/* reexport */ services_Services9)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ./src/components/reuseable/service-cards/index.ts + 6 modules
var service_cards = __webpack_require__(21169);
// EXTERNAL MODULE: ./src/data/service.ts
var service = __webpack_require__(71050);
;// CONCATENATED MODULE: ./src/components/blocks/services/Services1.tsx


// -------- data -------- //

const Services1 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wrapper bg-light",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container pt-14 pt-md-16",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-md-10 offset-md-1 col-lg-8 offset-lg-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "fs-16 text-uppercase text-muted mb-3",
                                children: "What We Do?"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "display-4 mb-10 px-xl-10",
                                children: "The service we offer is specifically designed to meet your needs."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "position-relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "shape rounded-circle bg-soft-blue rellax w-16 h-16",
                            style: {
                                zIndex: 0,
                                right: "-2.2rem",
                                bottom: "-0.5rem"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "shape bg-dot primary rellax w-16 h-17",
                            style: {
                                zIndex: 0,
                                top: "-0.5rem",
                                left: "-2.2rem"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row gx-md-5 gy-5 text-center",
                            children: service/* serviceList1.map */.X$.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(service_cards/* ServiceCard1 */.Is, {
                                    Icon: item.icon,
                                    title: item.title,
                                    linkUrl: item.link,
                                    linkType: item.linkType,
                                    description: item.description
                                }, item.id))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const services_Services1 = (Services1);

// EXTERNAL MODULE: ./src/components/reuseable/ListColumn.tsx
var ListColumn = __webpack_require__(68049);
// EXTERNAL MODULE: ./src/data/about.ts
var about = __webpack_require__(61879);
;// CONCATENATED MODULE: ./src/components/blocks/services/Services2.tsx


// -------- data -------- //

const Services2 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wrapper bg-light",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row gx-lg-8 gx-xl-12 gy-10 align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-7 order-lg-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "w-auto",
                                alt: "our solutions",
                                src: "/img/illustrations/i8.png",
                                srcSet: "/img/illustrations/i8@2x.png 2x"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "fs-16 text-uppercase text-muted mb-3",
                                children: "Our Solutions"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "display-4 mb-5",
                                children: "We make your spending stress-free for you to have the perfect control."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-6",
                                children: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ListColumn/* default */.Z, {
                                list: about/* aboutList1 */.MC
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const services_Services2 = (Services2);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./src/components/blocks/services/Services3.tsx



// -------- data -------- //

const Services3 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "fs-15 text-uppercase text-muted mb-3 ",
                            children: "What We Do?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "display-4 mb-5 mb-10",
                            children: "The service we offer is specifically designed to meet your needs."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row gx-md-8 gy-8 text-center mb-14 mb-md-17",
                children: service/* serviceList2.map */.WW.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(service_cards/* ServiceCard2 */.ce, {
                        ...item
                    }, item.id))
            })
        ]
    });
};
/* harmony default export */ const services_Services3 = (Services3);

;// CONCATENATED MODULE: ./src/components/blocks/services/Services4.tsx




// -------- data -------- //

const Services4 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-lg-8 col-xl-7 col-xxl-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "fs-16 text-uppercase text-line text-primary mb-3",
                            children: "What We Do?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "display-4 mb-9",
                            children: "The service we offer is specifically designed to meet your needs."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row gx-md-8 gy-8 mb-14 mb-md-18",
                children: service/* serviceList3.map */.sT.map((item)=>/*#__PURE__*/ (0,external_react_.createElement)(service_cards/* ServiceCard2 */.ce, {
                        ...item,
                        key: item.id,
                        iconBoxClassNames: "icon btn btn-block btn-lg btn-soft-primary pe-none mb-6"
                    }))
            })
        ]
    });
};
/* harmony default export */ const services_Services4 = (Services4);

// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(10609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
// EXTERNAL MODULE: ./src/components/elements/tiles/index.tsx + 11 modules
var tiles = __webpack_require__(27492);
;// CONCATENATED MODULE: ./src/components/blocks/services/Services5.tsx






// -------- data -------- //


const Services5 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row gx-lg-8 gx-xl-12 gy-12 align-items-center mb-10 mb-md-13",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-6 position-relative",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "btn btn-circle btn-primary pe-none position-absolute counter-wrapper flex-column d-none d-md-flex",
                                style: {
                                    zIndex: 1,
                                    top: "50%",
                                    width: 170,
                                    height: 170,
                                    left: "50%",
                                    transform: "translate(-50%, -50%)"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-white mb-1 mt-n2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "counter counter-lg",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                                end: 20,
                                                suffix: "+"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Year Experience"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(tiles/* Tiles1 */.Rj, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "display-4 mb-5",
                                children: "We bring solutions to make life easier for our customers."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-7",
                                children: "Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ListColumn/* default */.Z, {
                                list: about/* aboutList1 */.MC
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row gx-lg-8 gx-xl-12 gy-8",
                children: service/* serviceList4.map */.bK.map(({ Icon , ...item })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-6 col-lg-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(service_cards/* ServiceCard3 */.oN, {
                            ...item,
                            Icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {})
                        })
                    }, item.id))
            })
        ]
    });
};
/* harmony default export */ const services_Services5 = (Services5);

;// CONCATENATED MODULE: ./src/components/blocks/services/Services6.tsx


// -------- data -------- //

// ============================================================
const Services6 = (props)=>{
    const { colOne , title , description , colTwoClassNames ="" , rowClassNames ="" , bulletColor ="primary"  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row gx-lg-8 gx-xl-12 gy-10 align-items-center " + rowClassNames,
        children: [
            colOne,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-lg-6 " + colTwoClassNames,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "display-4 mb-5",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mb-5",
                        children: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ListColumn/* default */.Z, {
                        list: service/* serviceList5 */.v1,
                        bulletColor: bulletColor
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const services_Services6 = (Services6);

;// CONCATENATED MODULE: ./src/components/blocks/services/Services7.tsx



// -------- data -------- //

const Services7 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row text-center mt-xl-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-md-10 offset-md-1 col-lg-8 offset-lg-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "fs-15 text-uppercase text-muted mb-3",
                            children: "App Features"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "display-4 mb-9 px-xxl-11",
                            children: "Sandbox is the only app you need to track your goals for better health."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row gx-lg-8 gx-xl-12 gy-8 mb-14 mb-md-17",
                children: service/* serviceList6.map */.p8.map(({ Icon , color , ...item })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-6 col-lg-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(service_cards/* ServiceCard3 */.oN, {
                            ...item,
                            Icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                className: `icon-svg-sm text-${color} me-4`
                            })
                        })
                    }, item.id))
            })
        ]
    });
};
/* harmony default export */ const services_Services7 = (Services7);

// EXTERNAL MODULE: ./src/components/reuseable/IconBox.tsx
var IconBox = __webpack_require__(50220);
;// CONCATENATED MODULE: ./src/components/blocks/services/Services8.tsx




// -------- data -------- //

const Services8 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row gx-lg-8 gy-8 mt-5 mt-md-12 mt-lg-0 mb-15 align-items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-6 order-lg-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx(tiles/* Tiles4 */.b2, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-lg-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "display-4 mb-3",
                        children: "What We Do?"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "lead fs-lg mb-8 pe-xxl-2",
                        children: [
                            "The full service we are offering is ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "underline",
                                children: "specifically"
                            }),
                            " designed to meet your business needs and projects."
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row gx-xl-10 gy-6",
                        children: service/* serviceList2.map */.WW.map(({ title , id , icon  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-6 col-lg-12 col-xl-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(service_cards/* ServiceCard3 */.oN, {
                                    title: title,
                                    description: "Nulla vitae elit libero pharetra augue dapibus.",
                                    Icon: /*#__PURE__*/ jsx_runtime_.jsx(IconBox/* default */.Z, {
                                        icon: icon,
                                        className: "icon btn btn-circle btn-lg btn-soft-primary pe-none me-5"
                                    })
                                })
                            }, id))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const services_Services8 = (Services8);

// EXTERNAL MODULE: ./src/components/reuseable/links/NextLink.tsx
var NextLink = __webpack_require__(99472);
;// CONCATENATED MODULE: ./src/components/blocks/services/Services9.tsx

// -------- custom component -------- //


// -------- data -------- //

const Services9 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row gx-lg-8 gx-xl-12 gy-10 mb-lg-22 mb-xl-24 align-items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-7 order-lg-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row gx-md-5 gy-5",
                    children: service/* serviceList7.map */.ww.map(({ id , Icon , color , ...item })=>/*#__PURE__*/ jsx_runtime_.jsx(service_cards/* ServiceCard4 */.PN, {
                            Icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                className: `icon-svg-md text-${color} mb-3`
                            }),
                            ...item
                        }, id))
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-lg-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "fs-15 text-uppercase text-muted mb-3",
                        children: "What We Do?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "display-4 mb-5",
                        children: "The service we offer is specifically designed to meet your needs."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                        title: "More Details",
                        href: "#",
                        className: "btn btn-navy rounded-pill mt-3"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const services_Services9 = (Services9);

;// CONCATENATED MODULE: ./src/components/blocks/services/Services10.tsx



const Services10 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row gx-lg-0 gy-10 mb-15 mb-md-18 align-items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row g-6 text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                            className: "rounded mb-6",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/img/photos/se1.jpg",
                                                srcSet: "/img/photos/se1@2x.jpg 2x",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(service_cards/* ServiceCard5 */.s7, {
                                            url: "#",
                                            icon: "uil-monitor",
                                            title: "Web Design",
                                            description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida."
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-12 order-md-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                            className: "rounded mb-6 mb-md-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/img/photos/se2.jpg",
                                                srcSet: "/img/photos/se2@2x.jpg 2x",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(service_cards/* ServiceCard5 */.s7, {
                                            url: "#",
                                            title: "Mobile Design",
                                            icon: "uil-mobile-android",
                                            className: "card shadow-lg mb-md-6 mt-lg-6",
                                            description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida."
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-lg-5 offset-lg-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "display-4 mb-3",
                        children: "What We Do?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "lead fs-lg lh-sm",
                        children: "The full service we are offering is specifically designed to meet your business needs."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis elit interdum. Duis mollis, est non commodo luctus, nisi erat ligula."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                        title: "More Details",
                        href: "#",
                        className: "btn btn-primary rounded-pill mt-3"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const services_Services10 = (Services10);

// EXTERNAL MODULE: ./src/data/demo-8.ts
var demo_8 = __webpack_require__(75590);
;// CONCATENATED MODULE: ./src/components/blocks/services/Services11.tsx


// -------- data -------- //

const Services11 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-20 align-items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-md-8 col-lg-6 order-lg-2 position-relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shape bg-soft-primary rounded-circle rellax w-20 h-20",
                        style: {
                            top: "-2rem",
                            right: "-1.9rem"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                        className: "rounded",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/img/photos/about11.jpg",
                            srcSet: "/img/photos/about11@2x.jpg 2x",
                            alt: ""
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-lg-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "display-4 mb-3",
                        children: "What We Do?"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "lead fs-lg mb-8 pe-xxl-2",
                        children: [
                            "The full service we are offering is ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "underline",
                                children: "specifically"
                            }),
                            " designed to meet your business needs and projects."
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row gx-xl-10 gy-6",
                        children: demo_8/* services.map */.uZ.map(({ id , title , description , Icon  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-6 col-lg-12 col-xl-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(service_cards/* ServiceCard3 */.oN, {
                                    title: title,
                                    description: description,
                                    Icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                        className: "icon-svg-sm text-primary me-5"
                                    })
                                })
                            }, id))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const services_Services11 = (Services11);

// EXTERNAL MODULE: ./src/icons/lineal/Rocket.tsx
var Rocket = __webpack_require__(5855);
// EXTERNAL MODULE: ./src/icons/lineal/Shield.tsx
var Shield = __webpack_require__(69524);
// EXTERNAL MODULE: ./src/icons/lineal/Savings.tsx
var Savings = __webpack_require__(14545);
;// CONCATENATED MODULE: ./src/components/blocks/services/Services12.tsx


// -------- icons -------- //



// -------- custom component -------- //

const Services12 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "fs-15 text-uppercase text-muted mb-3",
                            children: "Why Choose Sandbox?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "display-4 mb-10 px-xl-10 px-xxl-15",
                            children: "Here are a few reasons why our customers choose Sandbox."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                role: "tablist",
                className: "nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        role: "presentation",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            role: "tab",
                            href: "#tab2-1",
                            "data-bs-toggle": "tab",
                            "aria-selected": "true",
                            className: "nav-link d-flex flex-row active",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Rocket/* default */.Z, {
                                        className: "icon-svg-md text-yellow me-4"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "mb-1",
                                            children: "Easy Usage"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Duis mollis commodo luctus cursus commodo tortor mauris."
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        role: "presentation",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            role: "tab",
                            tabIndex: -1,
                            href: "#tab2-2",
                            "data-bs-toggle": "tab",
                            "aria-selected": "false",
                            className: "nav-link d-flex flex-row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Savings/* default */.Z, {
                                        className: "icon-svg-md text-green me-4"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "mb-1",
                                            children: "Fast Transactions"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Vivamus sagittis lacus augue fusce dapibus tellus nibh."
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        role: "presentation",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            role: "tab",
                            tabIndex: -1,
                            href: "#tab2-3",
                            "data-bs-toggle": "tab",
                            "aria-selected": "false",
                            className: "nav-link d-flex flex-row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Shield/* default */.Z, {
                                        className: "icon-svg-md text-red me-4"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "mb-1",
                                            children: "Secure Payments"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Vestibulum ligula porta felis maecenas faucibus mollis."
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "tab-content mt-6 mt-lg-8 mb-md-9",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "tab-pane fade active show",
                        id: "tab2-1",
                        role: "tabpanel",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row gx-lg-8 gx-xl-12 gy-10 align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row gx-md-5 gy-5 align-items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-6",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    alt: "",
                                                    src: "/img/photos/sa13.jpg",
                                                    srcSet: "/img/photos/sa13@2x.jpg 2x",
                                                    className: "img-fluid rounded shadow-lg d-flex ms-auto"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-6",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        alt: "",
                                                        src: "/img/photos/sa14.jpg",
                                                        srcSet: "/img/photos/sa14@2x.jpg 2x",
                                                        className: "img-fluid rounded shadow-lg mb-5"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        alt: "",
                                                        src: "/img/photos/sa15.jpg",
                                                        srcSet: "/img/photos/sa15@2x.jpg 2x",
                                                        className: "img-fluid rounded shadow-lg d-flex col-10"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(List, {
                                    title: "Easy Usage",
                                    color: "yellow"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "tab-pane fade",
                        id: "tab2-2",
                        role: "tabpanel",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row gx-lg-8 gx-xl-12 gy-10 align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 order-lg-2",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row gx-md-5 gy-5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-5",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        alt: "",
                                                        src: "/img/photos/sa9.jpg",
                                                        srcSet: "/img/photos/sa9@2x.jpg 2x",
                                                        className: "img-fluid rounded shadow-lg my-5 d-flex ms-auto"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        alt: "",
                                                        src: "/img/photos/sa10.jpg",
                                                        srcSet: "/img/photos/sa10@2x.jpg 2x",
                                                        className: "img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-7",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        alt: "",
                                                        src: "/img/photos/sa11.jpg",
                                                        srcSet: "/img/photos/sa11@2x.jpg 2x",
                                                        className: "img-fluid rounded shadow-lg mb-5"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        alt: "",
                                                        src: "/img/photos/sa12.jpg",
                                                        srcSet: "/img/photos/sa12@2x.jpg 2x",
                                                        className: "img-fluid rounded shadow-lg d-flex col-11"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(List, {
                                    title: "Fast Transactions",
                                    color: "green"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "tab-pane fade",
                        id: "tab2-3",
                        role: "tabpanel",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row gx-lg-8 gx-xl-12 gy-10 align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row gx-md-5 gy-5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-6",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        alt: "",
                                                        src: "/img/photos/sa5.jpg",
                                                        srcSet: "/img/photos/sa5@2x.jpg 2x",
                                                        className: "img-fluid rounded shadow-lg mb-5"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        alt: "",
                                                        src: "/img/photos/sa6.jpg",
                                                        srcSet: "/img/photos/sa6@2x.jpg 2x",
                                                        className: "img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-6",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        alt: "",
                                                        src: "/img/photos/sa7.jpg",
                                                        srcSet: "/img/photos/sa7@2x.jpg 2x",
                                                        className: "img-fluid rounded shadow-lg my-5"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        alt: "",
                                                        src: "/img/photos/sa8.jpg",
                                                        srcSet: "/img/photos/sa8@2x.jpg 2x",
                                                        className: "img-fluid rounded shadow-lg d-flex col-10"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(List, {
                                    title: "Secure Payments",
                                    color: "red"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
const List = ({ color , title  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "col-lg-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "mb-3",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: `icon-list bullet-bg bullet-soft-${color}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "uil uil-check"
                            }),
                            " Aenean eu leo quam. Pellentesque ornare."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "uil uil-check"
                            }),
                            " Nullam quis risus eget urna mollis ornare."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "uil uil-check"
                            }),
                            " Donec id elit non mi porta gravida at eget."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                title: "Learn More",
                href: "#",
                className: `btn btn-${color} mt-2`
            })
        ]
    });
};
/* harmony default export */ const services_Services12 = (Services12);

// EXTERNAL MODULE: ./src/utils/animation.ts
var animation = __webpack_require__(89428);
;// CONCATENATED MODULE: ./src/components/blocks/services/Services13.tsx




// -------- data -------- //

const Services13 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wrapper bg-dark",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container py-14 py-md-16",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                    className: "rounded mt-md-n21 mt-lg-n23 mb-14",
                    style: (0,animation/* slideInDownAnimate */.$Z)("900ms"),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/img/photos/about15.jpg",
                        srcSet: "/img/photos/about15@2x.jpg 2x",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "display-4 text-white mb-10",
                            children: "The service we offer is specifically designed to meet your needs."
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row gx-md-8 gy-8 text-center text-white",
                    children: service/* serviceList2.map */.WW.map((item)=>/*#__PURE__*/ (0,external_react_.createElement)(service_cards/* ServiceCard2 */.ce, {
                            ...item,
                            key: item.id,
                            titleColor: "text-white",
                            hiddenBtn: true
                        }))
                })
            ]
        })
    });
};
/* harmony default export */ const services_Services13 = (Services13);

;// CONCATENATED MODULE: ./src/components/blocks/services/Services14.tsx



// -------- data -------- //

const Services14 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-md-10 offset-md-1 col-lg-8 offset-lg-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "fs-15 text-uppercase text-primary mb-3",
                            children: "What We Do?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "display-4 mb-10 px-xl-10",
                            children: "The service we offer is specifically designed to meet your needs."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "position-relative mb-14 mb-md-17",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shape rounded-circle bg-soft-primary rellax w-16 h-16",
                        style: {
                            bottom: "-0.5rem",
                            right: "-2.5rem",
                            zIndex: 0
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shape bg-dot primary rellax w-16 h-17",
                        style: {
                            top: "-0.5rem",
                            left: "-2.5rem",
                            zIndex: 0
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row gx-md-5 gy-5 text-center",
                        children: service/* serviceList2.map */.WW.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(service_cards/* ServiceCard6 */.C0, {
                                ...item
                            }, item.id))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const services_Services14 = (Services14);

// EXTERNAL MODULE: ./src/data/demo-11.ts
var demo_11 = __webpack_require__(29190);
;// CONCATENATED MODULE: ./src/components/blocks/services/Services15.tsx


// -------- data -------- //

const Services15 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row gx-lg-8 gx-xl-12 gy-10 align-items-center mb-md-15",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-7 order-lg-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "w-auto",
                        src: "/img/illustrations/i17.png",
                        srcSet: "/img/illustrations/i17@2x.png 2x",
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-lg-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "fs-15 text-uppercase text-primary mb-3",
                        children: "Our Solutions"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "display-4 mb-5",
                        children: "We make your spending stress-free for you to have the perfect control."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mb-6",
                        children: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ListColumn/* default */.Z, {
                        list: demo_11/* list */.pb
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const services_Services15 = (Services15);

// EXTERNAL MODULE: ./src/data/demo-12.ts
var demo_12 = __webpack_require__(25553);
;// CONCATENATED MODULE: ./src/components/blocks/services/Services16.tsx



// -------- data -------- //

const Services16 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "row gx-md-5 gy-5 mt-n18 mt-md-n21 mb-14 mb-md-17",
        children: demo_12/* services.map */.uZ.map(({ id , Icon , ...item })=>/*#__PURE__*/ (0,external_react_.createElement)(service_cards/* ServiceCard1 */.Is, {
                ...item,
                key: id,
                linkUrl: "#",
                Icon: Icon
            }))
    });
};
/* harmony default export */ const services_Services16 = (Services16);

;// CONCATENATED MODULE: ./src/components/blocks/services/Services17.tsx



// -------- data -------- //

const Services17 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wrapper bg-light",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container pt-14 pt-md-23 pb-14 pb-md-17",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row mb-8 text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-8 col-xl-7 mx-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "fs-16 text-uppercase text-primary mb-3",
                                children: "What We Do"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "display-4",
                                children: "We make your spending stress-free for you to have the perfect control."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-6 position-relative",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "shape bg-dot primary rellax w-17 h-18",
                                    style: {
                                        bottom: "-2rem",
                                        left: "-0.7rem"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                    className: "rounded mb-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/img/photos/se3.jpg",
                                        srcSet: "/img/photos/se3@2x.jpg 2x",
                                        alt: ""
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "display-6 mb-4",
                                    children: "Package Design"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mb-5",
                                    children: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ListColumn/* default */.Z, {
                                    list: about/* aboutList1 */.MC,
                                    bulletColor: "leaf"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                    title: "More Details",
                                    href: "#",
                                    className: "btn btn-soft-leaf rounded-pill mt-6 mb-0"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row gx-lg-8 gx-xl-12 gy-10 align-items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-6 order-lg-2 position-relative",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "shape rounded-circle bg-soft-primary rellax w-18 h-18",
                                    style: {
                                        bottom: "-2.5rem",
                                        right: "-1.5rem"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                    className: "rounded mb-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/img/photos/se4.jpg",
                                        srcSet: "/img/photos/se4@2x.jpg 2x",
                                        alt: ""
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "display-6 mb-4",
                                    children: "Corporate Design"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mb-5",
                                    children: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ListColumn/* default */.Z, {
                                    list: about/* aboutList1 */.MC,
                                    bulletColor: "leaf"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                    title: "More Details",
                                    href: "#",
                                    className: "btn btn-soft-leaf rounded-pill mt-6 mb-0"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const services_Services17 = (Services17);

// EXTERNAL MODULE: ./src/data/skill.ts
var skill = __webpack_require__(62561);
;// CONCATENATED MODULE: ./src/components/blocks/services/Services18.tsx

// -------- data -------- //


const Services18 = ()=>{
    // used for the animated line
    //useProgressbar();
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wrapper bg-light wrapper-border",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container py-14 py-md-18",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row gx-lg-8 gx-xl-12 gy-6 mb-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 order-lg-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "progress-list",
                                children: skill/* skill1.map */.n.map(({ id , title , percent , color  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `progressbar line soft-${color}`,
                                                "data-value": percent
                                            })
                                        ]
                                    }, id))
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "display-4 mb-3",
                                    children: "What I Do?"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "lead fs-20 mb-5",
                                    children: "Duis mollis est commodo luctus nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl."
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row gx-lg-8 gx-xl-12 gy-6 text-center",
                    children: service/* serviceList8.map */.g$.map(({ id , Icon , title , description  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-md-6 col-lg-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                    className: "icon-svg-md text-violet mb-3"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mb-2",
                                    children: description
                                })
                            ]
                        }, id))
                })
            ]
        })
    });
};
/* harmony default export */ const services_Services18 = (Services18);

;// CONCATENATED MODULE: ./src/components/blocks/services/Services19.tsx




// -------- data -------- //

const Services19 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-lg-9 col-xl-8 col-xxl-7 mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "fs-15 text-uppercase text-muted mb-3",
                            children: "What We Do?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "display-4 mb-9",
                            children: "The service we offer is specifically designed to meet your needs."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row gx-md-8 gx-xl-12 gy-8 mb-14 mb-md-16 text-center",
                children: service/* serviceList9.map */.lf.map(({ id , description , icon , linkUrl , title , color  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-md-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(IconBox/* default */.Z, {
                                className: `icon btn btn-block btn-lg btn-soft-${color} pe-none mb-5`,
                                icon: icon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-3",
                                children: description
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                title: "Learn More",
                                href: linkUrl,
                                className: `more hover link-${color}`
                            })
                        ]
                    }, id))
            })
        ]
    });
};
/* harmony default export */ const services_Services19 = (Services19);

;// CONCATENATED MODULE: ./src/components/blocks/services/Services20.tsx


// -------- data -------- //

const Services20 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-md-10 offset-md-1 col-lg-8 offset-lg-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "fs-16 text-uppercase text-gradient gradient-1 mb-3",
                            children: "Our Features"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "display-4 mb-9 px-xl-11",
                            children: "The service we offer is specifically designed to meet your needs."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row gy-8 mb-17",
                children: service/* serviceList10.map */.wL.map(({ id , title , description , Icon  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-6 col-lg-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-flex flex-row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                        className: "icon-svg-sm solid-duo text-grape-fuchsia me-4"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "fs-22 mb-1",
                                            children: title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mb-0",
                                            children: description
                                        })
                                    ]
                                })
                            ]
                        })
                    }, id))
            })
        ]
    });
};
/* harmony default export */ const services_Services20 = (Services20);

;// CONCATENATED MODULE: ./src/components/blocks/services/Services21.tsx



// -------- data -------- //

const Services21 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "row gx-md-5 gy-5 mt-n19 mb-14 mb-md-17",
        children: service/* serviceList11.map */.HV.map(({ id , Icon , ...item })=>/*#__PURE__*/ (0,external_react_.createElement)(service_cards/* ServiceCard1 */.Is, {
                ...item,
                key: id,
                linkUrl: "#",
                Icon: Icon
            }))
    });
};
/* harmony default export */ const services_Services21 = (Services21);

// EXTERNAL MODULE: ./src/icons/solid-mono/Bulb.tsx
var Bulb = __webpack_require__(50417);
// EXTERNAL MODULE: ./src/icons/solid-mono/Compare.tsx
var Compare = __webpack_require__(42415);
// EXTERNAL MODULE: ./src/icons/solid-mono/DeliveryBox.tsx
var DeliveryBox = __webpack_require__(69585);
;// CONCATENATED MODULE: ./src/components/blocks/services/Services22.tsx


// -------- icons -------- //



// -------- custom component -------- //

const Services22 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "fs-16 text-uppercase text-muted mb-3",
                            children: "Why Choose Sandbox?"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                            className: "display-3 mb-10 px-xl-10 px-xxl-15",
                            children: [
                                "Here are a few ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "underline-3 style-2 yellow",
                                    children: "reasons"
                                }),
                                " why our customers choose Sandbox."
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                role: "tablist",
                className: "nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        role: "presentation",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            role: "tab",
                            href: "#tab2-1",
                            "data-bs-toggle": "tab",
                            "aria-selected": "true",
                            className: "nav-link d-flex flex-row active",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Bulb/* default */.Z, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "mb-1",
                                            children: "Collect Ideas"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Duis mollis commodo luctus cursus commodo tortor mauris."
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        role: "presentation",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            role: "tab",
                            tabIndex: -1,
                            href: "#tab2-2",
                            "data-bs-toggle": "tab",
                            "aria-selected": "false",
                            className: "nav-link d-flex flex-row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Compare/* default */.Z, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "mb-1",
                                            children: "Data Analysis"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Vivamus sagittis lacus augue fusce dapibus tellus nibh."
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        role: "presentation",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            role: "tab",
                            tabIndex: -1,
                            href: "#tab2-3",
                            "data-bs-toggle": "tab",
                            "aria-selected": "false",
                            className: "nav-link d-flex flex-row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(DeliveryBox/* default */.Z, {
                                        className: "icon-svg-sm solid-mono text-green me-4"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "mb-1",
                                            children: "Finalize Product"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Vestibulum ligula porta felis maecenas faucibus mollis."
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "tab-content mt-6 mt-lg-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "tab-pane fade active show",
                        id: "tab2-1",
                        role: "tabpanel",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row gx-lg-8 gx-xl-12 gy-10 align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                        className: "rounded shadow-lg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/photos/se5.jpg",
                                            srcSet: "/img/photos/se5@2x.jpg 2x",
                                            alt: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Services22_List, {
                                    title: "Collect Ideas",
                                    color: "fuchsia"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "tab-pane fade",
                        id: "tab2-2",
                        role: "tabpanel",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row gx-lg-8 gx-xl-12 gy-10 align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 order-lg-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                        className: "rounded shadow-lg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/photos/se6.jpg",
                                            srcSet: "/img/photos/se6@2x.jpg 2x",
                                            alt: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Services22_List, {
                                    title: "Data Analysis",
                                    color: "violet"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "tab-pane fade",
                        id: "tab2-3",
                        role: "tabpanel",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row gx-lg-8 gx-xl-12 gy-10 align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                        className: "rounded shadow-lg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/photos/se7.jpg",
                                            srcSet: "/img/photos/se7@2x.jpg 2x",
                                            alt: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Services22_List, {
                                    title: "Finalize Product",
                                    color: "green"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
const Services22_List = ({ color , title  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "col-lg-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "mb-3",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: `icon-list bullet-bg bullet-soft-${color}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "uil uil-check"
                            }),
                            " Aenean eu leo quam. Pellentesque ornare."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "uil uil-check"
                            }),
                            " Nullam quis risus eget urna mollis ornare."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "uil uil-check"
                            }),
                            " Donec id elit non mi porta gravida at eget."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                title: "Learn More",
                href: "#",
                className: `btn btn-${color} mt-2`
            })
        ]
    });
};
/* harmony default export */ const services_Services22 = (Services22);

;// CONCATENATED MODULE: ./src/components/blocks/services/Services23.tsx


const Services23 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wrapper bg-light",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container py-15 py-md-17",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row text-center mb-10",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-md-10 col-lg-9 col-xxl-8 mx-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "fs-16 text-uppercase text-muted mb-3",
                                children: "What We Do?"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "display-3 px-xl-10 mb-0",
                                children: "The service we offer is specifically designed to meet your needs."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row gx-lg-0 gy-10 mb-15 mb-md-17 align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                className: "rounded mb-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    alt: "",
                                    className: "img-fluid",
                                    src: "/img/illustrations/ui4.png",
                                    srcSet: "/img/illustrations/ui4@2x.png 2x"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ColumnTwo, {
                            title: "Web Design",
                            className: "ms-auto"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row gx-lg-0 gy-10 mb-15 mb-md-17 align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 order-lg-2 ms-auto",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                className: "rounded mb-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    alt: "",
                                    className: "img-fluid",
                                    src: "/img/illustrations/ui1.png",
                                    srcSet: "/img/illustrations/ui1@2x.png 2x"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ColumnTwo, {
                            title: "Mobile Development"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row gx-lg-0 gy-10 align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                className: "rounded mb-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    alt: "",
                                    className: "img-fluid",
                                    src: "/img/illustrations/ui5.png",
                                    srcSet: "/img/illustrations/ui5@2x.png 2x"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ColumnTwo, {
                            title: "SEO Optimization",
                            className: "ms-auto"
                        })
                    ]
                })
            ]
        })
    });
};
const ColumnTwo = ({ title , className =""  })=>{
    // list data
    const list = [
        "Aenean quam ornare curabitur blandit.",
        "Nullam quis risus eget urna mollis ornare leo.",
        "Etiam porta euismod mollis natoque ornare."
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `col-lg-5 ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "fs-28 mb-3",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna risus varius."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "icon-list bullet-bg bullet-soft-primary",
                children: list.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "uil uil-check"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: item
                            })
                        ]
                    }, item))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                title: "More Details",
                href: "#",
                className: "btn btn-soft-primary rounded-pill mt-2 mb-0"
            })
        ]
    });
};
/* harmony default export */ const services_Services23 = (Services23);

;// CONCATENATED MODULE: ./src/components/blocks/services/Services24.tsx


// -------- data -------- //

const Services24 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wrapper bg-gradient-primary",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container pt-12 pt-lg-8 pb-14 pb-md-17",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-md-10 offset-md-1 col-lg-8 offset-lg-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "fs-16 text-uppercase text-primary mb-3",
                                children: "What We Do?"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "display-3 mb-10 px-xxl-10",
                                children: "The service we offer is specifically designed to meet your needs."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row gx-lg-8 gx-xl-12 gy-11 px-xxl-5 text-center d-flex align-items-end",
                    children: service/* serviceList12.map */.CO.map(({ id , image , title , description  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "px-md-15 px-lg-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                        className: "mb-6",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "img-fluid",
                                            src: image["1x"],
                                            srcSet: image["2x"],
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-2",
                                        children: description
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                        title: "Learn More",
                                        href: "#",
                                        className: "more hover"
                                    })
                                ]
                            })
                        }, id))
                })
            ]
        })
    });
};
/* harmony default export */ const services_Services24 = (Services24);

;// CONCATENATED MODULE: ./src/components/blocks/services/Services25.tsx



// -------- data -------- //

const Services25 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-lg-9 col-xl-8 mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "fs-16 text-uppercase text-muted mb-3",
                            children: "What We Do?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "display-4 mb-10 px-xxl-10",
                            children: "The full service we are offering is specifically designed to meet your needs."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-xxl-11 mx-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row gx-lg-8 gx-xl-12 gy-11 text-center d-flex align-items-end",
                        children: service/* serviceList13.map */.hd.map(({ id , description , icon , linkUrl , title , color  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-sm-8 col-md-6 col-lg-4 mx-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "px-md-3 px-lg-0 px-xl-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `icon btn btn-block btn-lg btn-soft-${color} pe-none mb-5`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: `uil ${icon}`
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "fs-22",
                                            children: title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mb-2",
                                            children: description
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                            title: "Learn More",
                                            href: linkUrl,
                                            className: `more hover link-${color}`
                                        })
                                    ]
                                })
                            }, id))
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const services_Services25 = (Services25);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/blocks/services/Services26.tsx


// -------- data -------- //

const Services26 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wrapper bg-light",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container py-14 py-md-16",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-12 col-xl-10 col-xxl-7 mx-auto text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "icn-flower text-leaf fs-30 opacity-25"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "display-5 text-center mt-2 mb-10",
                                children: "I absolutely love shooting weddings and couples because there are so many feelings to capture."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 text-center",
                    children: service/* serviceList14.map */.DR.map(({ id , title , image , url  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-sm-8 col-md-6 col-lg-4 mx-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                                        className: "card-img-top overlay overlay-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: url,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            className: "img-fluid",
                                                            src: image["1x"],
                                                            srcSet: image["2x"],
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "bg"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("figcaption", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "from-top mb-0",
                                                    children: "View Gallery"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card-body p-6",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "fs-21 mb-0",
                                            children: title
                                        })
                                    })
                                ]
                            })
                        }, id))
                })
            ]
        })
    });
};
/* harmony default export */ const services_Services26 = (Services26);

;// CONCATENATED MODULE: ./src/components/blocks/services/Services27.tsx



const Services27 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "services",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "wrapper bg-gray",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container py-15 py-md-17",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row gx-lg-0 gy-10 align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row g-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col-md-6",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Card, {
                                                title: "Products",
                                                image: "/img/photos/fs4.jpg",
                                                className: "mb-6"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Card, {
                                                title: "Recipes",
                                                image: "/img/photos/fs6.jpg"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col-md-6",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Card, {
                                                title: "Restaurants",
                                                image: "/img/photos/fs5.jpg",
                                                className: "mt-md-6 mb-6"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Card, {
                                                title: "Still Life",
                                                image: "/img/photos/fs7.jpg"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-5 offset-lg-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "display-5 mb-3",
                                    children: "My Services"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "lead fs-lg",
                                    children: "I would like to give you a unique photography experience, capture your products with excellent composition and lighting skills."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis elit interdum. Duis mollis, est non commodo luctus, nisi erat ligula mollis metus auctor fringilla."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                    title: "More Details",
                                    href: "#",
                                    className: "btn btn-primary rounded-pill mt-2"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
const Card = ({ image , title , className =""  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `card shadow-lg ${className}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                className: "card-img-top overlay overlay-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "#",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "img-fluid",
                                    src: image,
                                    alt: ""
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "bg"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("figcaption", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "from-top mb-0",
                            children: "View Gallery"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "card-body p-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "h4 mb-0",
                    children: title
                })
            })
        ]
    });
/* harmony default export */ const services_Services27 = (Services27);

// EXTERNAL MODULE: ./src/data/demo-26.ts + 4 modules
var demo_26 = __webpack_require__(88231);
;// CONCATENATED MODULE: ./src/components/blocks/services/Services28.tsx



// -------- data -------- //

const Services28_Services27 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-md-10 offset-md-1 col-xxl-8 offset-xxl-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "fs-16 text-uppercase text-primary mb-3",
                            children: "What We Do?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "display-4 mb-9",
                            children: "The full service we are offering is specifically designed to meet your business needs."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row gx-md-8 gy-8 mb-15 mb-md-17 text-center",
                children: demo_26/* default.serviceList.map */.Z.serviceList.map(({ id , Icon , title , description , url  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-6 col-lg-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "px-md-3 px-lg-0 px-xl-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Icon, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mb-2",
                                    children: description
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                    title: "Learn More",
                                    href: url,
                                    className: "more hover"
                                })
                            ]
                        })
                    }, id))
            })
        ]
    });
};
/* harmony default export */ const Services28 = (Services28_Services27);

// EXTERNAL MODULE: ./src/data/demo-27.ts + 6 modules
var demo_27 = __webpack_require__(74823);
;// CONCATENATED MODULE: ./src/components/blocks/services/Services29.tsx

// -------- data -------- //

const Services29 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wrapper bg-light",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container py-15 py-md-17",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-md-10 col-lg-9 col-xxl-8 mx-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "fs-15 text-uppercase text-muted mb-3",
                                children: "What We Do?"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "display-3 ls-sm mb-9 px-xl-11",
                                children: "The service we offer is specifically designed to meet your needs."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row gx-lg-8 gx-xl-12 gy-8",
                    children: demo_27/* default.serviceList.map */.Z.serviceList.map(({ Icon , id , title , color , description  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-6 col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex flex-row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                            className: `icon-svg-md text-${color} me-5 mt-1`
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "fs-20 ls-sm",
                                                children: title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "mb-0",
                                                children: description
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, id))
                })
            ]
        })
    });
};
/* harmony default export */ const services_Services29 = (Services29);

;// CONCATENATED MODULE: ./src/components/blocks/services/index.ts
































/***/ }),

/***/ 68049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// ===========================================================
const ListColumn = ({ list , rowClass ="" , bulletColor ="primary"  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row gy-3 " + rowClass,
        children: list.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-xl-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: `icon-list bullet-bg bullet-soft-${bulletColor} mb-0`,
                    children: item.map((li, i)=>{
                        const liProps = i !== 0 ? {
                            className: "mt-3"
                        } : {};
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            ...liProps,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "uil uil-check"
                                }),
                                " ",
                                li
                            ]
                        }, li);
                    })
                })
            }, i))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListColumn);


/***/ }),

/***/ 61879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MC": () => (/* binding */ aboutList1),
/* harmony export */   "WP": () => (/* binding */ aboutList4),
/* harmony export */   "Wj": () => (/* binding */ aboutList2),
/* harmony export */   "si": () => (/* binding */ aboutList3)
/* harmony export */ });
/* harmony import */ var icons_solid_mono_Lamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13521);
/* harmony import */ var icons_solid_mono_Bulb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50417);
/* harmony import */ var icons_solid_mono_Puzzle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15992);
/* harmony import */ var icons_solid_mono_Headphone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89033);
// -------- icons -------- //




// =========================================================================
// used in the about-2, about-8, about-11, about-13, about-15, about-17 block
const aboutList1 = [
    [
        "\xdcgyf\xe9lorient\xe1lt szeml\xe9let.",
        "Gyors n\xf6veked\xe9s \xe9s fejlőd\xe9s."
    ],
    [
        "Kiemelkedő besz\xe1ll\xedt\xf3i kapcsolatok.",
        "V\xe1s\xe1rl\xf3ink hűs\xe9ge a kulcs."
    ]
];
// used in the about-6, about-19 block
const aboutList2 = [
    [
        "Aenean eu leo quam ornare curabitur blandit tempus.",
        "Nullam quis risus eget urna mollis ornare donec elit."
    ],
    [
        "Etiam porta sem malesuada magna mollis euismod.",
        "Fermentum massa vivamus faucibus amet euismod."
    ]
];
// used in the about-11, about-19 block
const aboutList3 = [
    {
        id: 1,
        title: "Our Vision",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus.`
    },
    {
        id: 2,
        title: "Our Mission",
        description: `Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.`
    },
    {
        id: 3,
        title: "Our Values",
        description: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.`
    }
];
// used in the about-20, about-21 block
const aboutList4 = [
    {
        id: 1,
        Icon: icons_solid_mono_Lamp__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
        color: "fuchsia",
        title: "Creativity",
        description: "Curabitur blandit lacus porttitor ridiculus mus."
    },
    {
        id: 2,
        Icon: icons_solid_mono_Bulb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
        color: "violet",
        title: "Innovative Thinking",
        description: "Curabitur blandit lacus porttitor ridiculus mus."
    },
    {
        id: 3,
        Icon: icons_solid_mono_Puzzle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        color: "orange",
        title: "Rapid Solutions",
        description: "Curabitur blandit lacus porttitor ridiculus mus."
    },
    {
        id: 4,
        Icon: icons_solid_mono_Headphone__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        color: "green",
        title: "Top-Notch Support",
        description: "Curabitur blandit lacus porttitor ridiculus mus."
    }
];


/***/ }),

/***/ 25553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A9": () => (/* binding */ reviews),
/* harmony export */   "Ux": () => (/* binding */ processList),
/* harmony export */   "dd": () => (/* binding */ factList),
/* harmony export */   "uZ": () => (/* binding */ services)
/* harmony export */ });
/* harmony import */ var icons_lineal_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27010);
/* harmony import */ var icons_lineal_Gift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19224);
/* harmony import */ var icons_lineal_Check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30009);
/* harmony import */ var icons_lineal_IdCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4341);
/* harmony import */ var icons_lineal_ChatTwo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92875);
/* harmony import */ var icons_lineal_Browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4630);
/* harmony import */ var types_demo_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74516);
/* harmony import */ var icons_lineal_BriefcaseTwo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77755);








const services = [
    {
        id: 1,
        link: "#",
        Icon: icons_lineal_Browser__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        title: "Content Marketing",
        linkType: types_demo_1__WEBPACK_IMPORTED_MODULE_6__/* .LinkType.yellow */ .U.yellow,
        iconClassName: "icon-svg-md text-yellow mb-3",
        cardClassName: "card-border-bottom border-soft-yellow",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    },
    {
        id: 2,
        link: "#",
        Icon: icons_lineal_ChatTwo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        title: "Social Engagement",
        linkType: types_demo_1__WEBPACK_IMPORTED_MODULE_6__/* .LinkType.green */ .U.green,
        iconClassName: "icon-svg-md text-green mb-3",
        cardClassName: "card-border-bottom border-soft-green",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    },
    {
        id: 3,
        link: "#",
        Icon: icons_lineal_IdCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        linkType: types_demo_1__WEBPACK_IMPORTED_MODULE_6__/* .LinkType.orange */ .U.orange,
        title: "Identity & Branding",
        iconClassName: "icon-svg-md text-orange mb-3",
        cardClassName: "card-border-bottom border-soft-orange",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    },
    {
        id: 4,
        link: "#",
        Icon: icons_lineal_Gift__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
        linkType: types_demo_1__WEBPACK_IMPORTED_MODULE_6__/* .LinkType.blue */ .U.blue,
        title: "Product Design",
        iconClassName: "icon-svg-md text-blue mb-3",
        cardClassName: "card-border-bottom border-soft-blue",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    }
];
const processList = [
    {
        no: "1",
        className: "me-lg-6",
        title: "Collect Ideas",
        subtitle: "Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus."
    },
    {
        no: "2",
        title: "Data Analysis",
        className: "ms-lg-13 mt-6",
        subtitle: "Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna."
    },
    {
        no: "3",
        title: "Finalize Product",
        className: "mx-lg-6 mt-6",
        subtitle: "Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed."
    }
];
const factList = [
    {
        id: 1,
        number: 7518,
        title: "Completed Projects",
        Icon: icons_lineal_Check__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
    },
    {
        id: 2,
        number: 3472,
        title: "Happy Customers",
        Icon: icons_lineal_User__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z
    },
    {
        id: 3,
        number: 2184,
        title: "Expert Employees",
        Icon: icons_lineal_BriefcaseTwo__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
    }
];
const reviews = [
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
        review: `Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet purus sit amet fermentum.`
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
        designation: "Financial Analyst",
        review: `Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus eu tincidunt auctor nullam rutrum, pharetra augue.`
    }
];



/***/ }),

/***/ 88231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ demo_26)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/icons/solid-mono/Code.tsx

const Code = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 255.98 213.34",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-md text-grape mb-5"}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-secondary",
                        d: "M104,213.34a11,11,0,0,1-2.59-.32,10.64,10.64,0,0,1-7.76-12.93l48-192a10.66,10.66,0,0,1,20.68,5.17l-48,192A10.66,10.66,0,0,1,104,213.34Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-primary",
                        d: "M74.66,181.34a10.57,10.57,0,0,1-7.54-3.12l-64-64a10.67,10.67,0,0,1,0-15.08l64-64A10.67,10.67,0,0,1,82.21,50.22L25.75,106.69l56.46,56.46a10.65,10.65,0,0,1-7.55,18.19Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-primary",
                        d: "M181.31,181.34a10.55,10.55,0,0,1-7.53-3.12,10.67,10.67,0,0,1,0-15.08l56.46-56.47L173.78,50.21a10.67,10.67,0,1,1,15.08-15.09l64,64a10.68,10.68,0,0,1,0,15.09l-64,64A10.58,10.58,0,0,1,181.31,181.34Z"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const solid_mono_Code = (Code);

;// CONCATENATED MODULE: ./src/icons/solid-mono/Team.tsx

const Team = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 255.98 256",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-md text-grape mb-5"}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        className: "fill-primary",
                        cx: "128",
                        cy: "26.67",
                        r: "26.67"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        className: "fill-primary",
                        cx: "202.67",
                        cy: "176",
                        r: "26.67"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        className: "fill-primary",
                        cx: "53.33",
                        cy: "176",
                        r: "26.67"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-primary",
                        d: "M173.33,106.67H82.66a8,8,0,0,1-8-8V93.34A29.35,29.35,0,0,1,104,64h48a29.35,29.35,0,0,1,29.33,29.32v5.33A8,8,0,0,1,173.33,106.67Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-primary",
                        d: "M248,256H157.33a8,8,0,0,1-8-8v-5.33a29.36,29.36,0,0,1,29.33-29.33h48A29.36,29.36,0,0,1,256,242.67V248A8,8,0,0,1,248,256Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-primary",
                        d: "M98.67,256H8a8,8,0,0,1-8-8v-5.33a29.36,29.36,0,0,1,29.33-29.33h48a29.37,29.37,0,0,1,29.33,29.33V248a8,8,0,0,1-8,8Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-secondary",
                        d: "M29.33,136.13a8,8,0,0,1-8-8A107.1,107.1,0,0,1,83.06,31.36a8,8,0,1,1,6.73,14.51,91,91,0,0,0-52.48,82.26A8,8,0,0,1,29.33,136.13Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-secondary",
                        d: "M226.67,136.13a8,8,0,0,1-8-8,91,91,0,0,0-52.48-82.26,8,8,0,1,1,6.74-14.51,107.09,107.09,0,0,1,61.73,96.77,8,8,0,0,1-8,8Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-secondary",
                        d: "M128,234.8a105.08,105.08,0,0,1-11.15-.58,8,8,0,0,1,1.66-15.9,93.73,93.73,0,0,0,19.6-.06,8,8,0,0,1,1.76,15.9,110.68,110.68,0,0,1-11.87.64Z"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const solid_mono_Team = (Team);

// EXTERNAL MODULE: ./src/icons/solid-mono/Bulb.tsx
var Bulb = __webpack_require__(50417);
// EXTERNAL MODULE: ./src/icons/solid-mono/Lamp.tsx
var Lamp = __webpack_require__(13521);
// EXTERNAL MODULE: ./src/icons/solid-mono/Puzzle.tsx
var Puzzle = __webpack_require__(15992);
;// CONCATENATED MODULE: ./src/icons/solid-mono/Devices.tsx

const Devices = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-md text-grape mb-5"}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-primary",
                        d: "M226.67,0H80A29.35,29.35,0,0,0,50.67,29.33V42.66H72v-8A13.34,13.34,0,0,1,85.33,21.33h136a13.34,13.34,0,0,1,13.33,13.33V221.33a13.35,13.35,0,0,1-13.33,13.33H138.59A44.07,44.07,0,0,1,132.7,256h94A29.33,29.33,0,0,0,256,226.67V29.33A29.35,29.35,0,0,0,226.67,0Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-secondary",
                        d: "M97.17,64h-77C9,64,0,73.87,0,86V234c0,12.13,9,22,20.16,22h77c11.12,0,20.16-9.87,20.16-22V86C117.33,73.87,108.29,64,97.17,64Zm5.5,168c0,4.42-3.28,8-7.33,8H22c-4.05,0-7.33-3.58-7.33-8V85.33c0-4.42,3.28-8,7.33-8h3.66c4.05,0,7.33,3.58,7.33,8s3.28,8,7.33,8H77c4.05,0,7.33-3.59,7.33-8s3.28-8,7.33-8h3.66c4,0,7.33,3.58,7.33,8V232Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-primary",
                        d: "M154.67,186.67A13.33,13.33,0,1,0,168,200,13.35,13.35,0,0,0,154.67,186.67Z"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const solid_mono_Devices = (Devices);

;// CONCATENATED MODULE: ./src/icons/solid-mono/GlobeTwo.tsx

const GlobeTwo = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256.01 256",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-md text-grape mb-5"}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-secondary",
                        d: "M128.11,256V256h-.24a126.37,126.37,0,0,1-22-1.84,8,8,0,1,1,2.72-15.76A114.68,114.68,0,0,0,128,240a8.06,8.06,0,0,1,8.07,8,8,8,0,0,1-7.94,8Zm33.52-12.5a8,8,0,0,1,4.77-10.25A112.18,112.18,0,0,0,184.06,225a8,8,0,0,1,8,13.85,128.36,128.36,0,0,1-20.19,9.46,8,8,0,0,1-10.26-4.79Zm-97.5-4.56a128.83,128.83,0,0,1-18.27-12.78,8,8,0,1,1,10.25-12.27,114.33,114.33,0,0,0,16,11.2,8,8,0,1,1-8,13.85Zm150.69-27.71a8,8,0,0,1-1-11.26A112.91,112.91,0,0,0,225,184a8,8,0,0,1,13.86,8,130.3,130.3,0,0,1-12.78,18.26,8,8,0,0,1-11.28,1Zm-197.59-19A128.41,128.41,0,0,1,7.76,172a8,8,0,1,1,15-5.49,112.8,112.8,0,0,0,8.29,17.67,8,8,0,1,1-13.84,8ZM244.8,156.7a8,8,0,0,1-6.5-9.26A112.3,112.3,0,0,0,240,128a8.23,8.23,0,0,1,8-8.26,7.81,7.81,0,0,1,8,8.76,124.89,124.89,0,0,1-1.92,21.72,8,8,0,0,1-9.26,6.48ZM8,136.13a7.89,7.89,0,0,1-8-7.87s.61-15,1.86-22.18a8,8,0,1,1,15.76,2.7A114.47,114.47,0,0,0,16,128,8.09,8.09,0,0,1,8,136.13ZM233.1,89.25a110.41,110.41,0,0,0-8.32-17.63,8,8,0,0,1,13.83-8.08,129,129,0,0,1,9.52,20.17,8,8,0,0,1-15,5.54ZM19.9,75.18A8,8,0,0,1,17,64.26,126.41,126.41,0,0,1,29.73,46,8,8,0,1,1,42,56.21a112.72,112.72,0,0,0-11.17,16,8,8,0,0,1-10.93,3ZM199.66,41.94a113.17,113.17,0,0,0-16-11.16,8,8,0,1,1,7.95-13.87,127.39,127.39,0,0,1,18.3,12.75,8,8,0,0,1-10.24,12.28ZM60.78,28.26a8,8,0,0,1,2.88-11A128,128,0,0,1,83.84,7.82a8,8,0,1,1,5.52,15,112.17,112.17,0,0,0-17.63,8.31,8,8,0,0,1-11-2.88Zm86.29-10.64A112.4,112.4,0,0,0,128,16a8.17,8.17,0,0,1-8.19-8,7.84,7.84,0,0,1,7.81-8H128a127.72,127.72,0,0,1,21.8,1.86,8,8,0,0,1-2.71,15.76Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "fill-primary",
                        d: "M128,32a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,32Zm62.61,145.66a103,103,0,0,0-14.49-7.76,160.22,160.22,0,0,0,5-33.9h26.48A79.47,79.47,0,0,1,190.59,177.66ZM48.4,136H74.88a161.6,161.6,0,0,0,5,33.9,104.11,104.11,0,0,0-14.5,7.76A79.47,79.47,0,0,1,48.4,136Zm17-57.66a103.14,103.14,0,0,0,14.5,7.76,160.2,160.2,0,0,0-5,33.9H48.4a79.47,79.47,0,0,1,17-41.66ZM120,79.7a106.49,106.49,0,0,1-20-3.43c5.41-13,12.6-22.11,20-26Zm0,16V120H90.86A145.12,145.12,0,0,1,95,91.49a122.72,122.72,0,0,0,25,4.21Zm0,40.3v24.3a121.26,121.26,0,0,0-25,4.23A144.37,144.37,0,0,1,90.86,136H120Zm0,40.3v29.48c-7.4-3.94-14.59-13-20-26a104.12,104.12,0,0,1,20-3.44Zm16,0a106.21,106.21,0,0,1,20,3.43c-5.4,13-12.59,22.11-20,26Zm0-16V136H165.1a144.37,144.37,0,0,1-4.16,28.51,122.49,122.49,0,0,0-25-4.21Zm0-40.3V95.7a121.14,121.14,0,0,0,25-4.23A142.91,142.91,0,0,1,165.1,120H136Zm0-40.3V50.24c7.41,3.94,14.6,13,20,26A104.36,104.36,0,0,1,136,79.7Zm27.94-23.08a80.19,80.19,0,0,1,15.25,10A88.15,88.15,0,0,1,171,70.83a98.1,98.1,0,0,0-7.12-14.21Zm-79,14.21a86.72,86.72,0,0,1-8.12-4.25,80.12,80.12,0,0,1,15.24-10A95.14,95.14,0,0,0,84.94,70.83Zm0,114.34a98.11,98.11,0,0,0,7.12,14.21,80.12,80.12,0,0,1-15.24-10A86.72,86.72,0,0,1,84.94,185.17Zm86.1,0a88.15,88.15,0,0,1,8.13,4.25,80.19,80.19,0,0,1-15.25,10A99.14,99.14,0,0,0,171,185.17ZM181.1,120a161,161,0,0,0-5-33.9,104.57,104.57,0,0,0,14.49-7.76,79.47,79.47,0,0,1,17,41.66Z"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const solid_mono_GlobeTwo = (GlobeTwo);

// EXTERNAL MODULE: ./src/icons/solid-mono/Headphone.tsx
var Headphone = __webpack_require__(89033);
;// CONCATENATED MODULE: ./src/data/demo-26.ts








const serviceList = [
    {
        id: 1,
        url: "#",
        Icon: solid_mono_GlobeTwo,
        title: "SEO Services",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.`
    },
    {
        id: 2,
        url: "#",
        Icon: solid_mono_Code,
        title: "Web Design",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.`
    },
    {
        id: 3,
        url: "#",
        Icon: solid_mono_Team,
        title: "Social Engagement",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.`
    },
    {
        id: 4,
        url: "#",
        Icon: solid_mono_Devices,
        title: "App Development",
        description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.`
    }
];
const abouts = [
    {
        id: 1,
        Icon: Lamp/* default */.Z,
        title: "Creativity",
        description: "Curabitur blandit lacus porttitor ridiculus mus."
    },
    {
        id: 2,
        Icon: Bulb/* default */.Z,
        title: "Innovative Thinking",
        description: "Curabitur blandit lacus porttitor ridiculus mus."
    },
    {
        id: 3,
        Icon: Puzzle/* default */.Z,
        title: "Rapid Solutions",
        description: "Curabitur blandit lacus porttitor ridiculus mus."
    },
    {
        id: 4,
        Icon: Headphone/* default */.Z,
        title: "Top-Notch Support",
        description: "Curabitur blandit lacus porttitor ridiculus mus."
    }
];
const testimonialList = [
    {
        id: 1,
        name: "Coriss Ambady",
        designation: "Financial Analyst",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur nulla dapibus curabitur blandit faucibus.`
    },
    {
        id: 2,
        name: "Cory Zamora",
        designation: "Marketing Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur nulla dapibus curabitur blandit faucibus.`
    },
    {
        id: 3,
        name: "Nikolas Brooten",
        designation: "Sales Specialist",
        review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur nulla dapibus curabitur blandit faucibus.`
    }
];
/* harmony default export */ const demo_26 = ({
    serviceList,
    abouts,
    testimonialList
});


/***/ }),

/***/ 62561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ skill1),
/* harmony export */   "o": () => (/* binding */ skill2)
/* harmony export */ });
/* harmony import */ var utils_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40516);

const skill1 = [
    {
        id: 1,
        percent: 100,
        title: "Web Design",
        color: utils_color__WEBPACK_IMPORTED_MODULE_0__/* ["default"].violet */ .Z.violet
    },
    {
        id: 2,
        percent: 80,
        title: "Mobile Design",
        color: utils_color__WEBPACK_IMPORTED_MODULE_0__/* ["default"].blue */ .Z.blue
    },
    {
        id: 3,
        percent: 85,
        title: "Development",
        color: utils_color__WEBPACK_IMPORTED_MODULE_0__/* ["default"].leaf */ .Z.leaf
    },
    {
        id: 4,
        percent: 90,
        title: "SEO",
        color: utils_color__WEBPACK_IMPORTED_MODULE_0__/* ["default"].pink */ .Z.pink
    }
];
// used in the about-24 block
const skill2 = [
    {
        id: 1,
        title: "Photoshop",
        value: 100
    },
    {
        id: 2,
        title: "Final Cut",
        value: 80
    },
    {
        id: 3,
        title: "Motion Video",
        value: 85
    },
    {
        id: 4,
        title: "Manupilation",
        value: 75
    }
];


/***/ }),

/***/ 5855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Rocket = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 294.2 409.6",
        className: `svg-inject icon-svg ${className || "icon-svg-sm text-aqua mb-3"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M31.2 342.9c-2.4 1.7-5.8 1.1-7.5-1.3-.6-.9-1-2-1-3.1v-77.1l68.9-77.2V150L5 247.1c-3.2 3.6-5 8.2-5 13v78.4c0 15.5 12.6 28.1 28.1 28.1 5.8 0 11.5-1.8 16.2-5.1l9.6-6.8-13.1-18.6-9.6 6.8zm258.1-95.8L200.7 148v34.2l70.8 79.3v77.1c0 3-2.4 5.4-5.4 5.4-1.1 0-2.2-.3-3.1-1l-9.6-6.7-13.1 18.6 9.6 6.7c12.7 8.9 30.3 5.9 39.2-6.9 3.3-4.7 5.1-10.4 5.1-16.1v-78.4c0-4.8-1.8-9.5-4.9-13.1zM147.1 409.6l-6.1-3.9c-2-1.3-49.3-32-49.3-72.5 0-40 23.3-72.6 53.1-74.2.8 0 1.6-.1 2.3-.1 4.1 0 8.1.6 12.1 1.7 9.1 2.7 17.6 8.4 24.6 16.6 11.9 14 18.7 34.4 18.7 55.9 0 40.5-47.2 71.2-49.3 72.5l-6.1 4zm0-127.9h-1c-17.5.9-31.7 24-31.7 51.5 0 19.6 19.9 39.1 32.6 48.9 12.7-9.8 32.6-29.3 32.6-48.9 0-16.2-4.9-31.2-13.3-41.1-4.1-4.8-8.8-8.1-13.6-9.5-1.8-.6-3.7-.9-5.6-.9z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M147.1 11.4c-13.1 0-96.4 71.4-96.4 143.4 0 24.5 29.3 178.4 29.3 178.4h134.1s29.3-153.9 29.3-178.4c.1-72.4-83.9-143.4-96.3-143.4zm49.8 159.2c-1 4.9-2.7 9.6-5.1 14-.8 1.4-1.6 2.8-2.5 4.2-3.7 5.4-8.3 10.1-13.7 13.7-1.3.9-2.7 1.8-4.2 2.5-24.7 13.4-55.6 4.2-68.9-20.5s-4.2-55.6 20.5-68.9c7.4-4 15.8-6.2 24.3-6.1 3.4 0 6.9.3 10.2 1 4.9 1 9.6 2.7 14 5.1 7.2 3.9 13.4 9.5 17.9 16.3 5.7 8.4 8.7 18.3 8.7 28.4-.1 3.5-.4 6.9-1.2 10.3z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M147.1 222.6c-34.4 0-62.2-28-62.2-62.3 0-34.4 28-62.2 62.3-62.2 10.3 0 20.4 2.6 29.5 7.5 2.6 1.4 5.2 3.1 7.6 4.9 24.8 18.5 32.2 52.4 17.5 79.6-1 1.8-2 3.5-3.1 5.1-4.5 6.6-10.2 12.3-16.8 16.8-1.6 1.1-3.4 2.2-5.1 3.1-9.1 4.9-19.3 7.5-29.7 7.5zm0-101.7c-21.8-.3-39.7 17-40.1 38.8s17 39.7 38.8 40.1h1.3c2.7 0 5.4-.3 8-.8 3.8-.8 7.4-2.1 10.8-4 1.1-.6 2.2-1.3 3.2-2 4.2-2.8 7.8-6.5 10.7-10.7.7-1.1 1.4-2.1 2-3.3 1.9-3.4 3.2-7 4-10.8.5-2.6.8-5.3.8-8 0-12.5-5.9-24.2-15.9-31.6-1.5-1.1-3.1-2.2-4.8-3.1-3.4-1.9-7-3.2-10.8-4-2.6-.5-5.3-.8-8-.8v.2z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M89.5 321.8h115.2c9-47.9 27.4-149.1 27.4-167 0-63-69.5-123.9-85-131.5-6.7 3.3-26.8 18.4-46.8 43.2-24.6 30.4-38.2 61.8-38.2 88.4 0 17.9 18.4 119.1 27.4 166.9zm134.1 22.8H70.7l-1.8-9.3c-3-15.9-29.5-155.7-29.5-180.6 0-42.2 25-80.9 45.9-106C101.1 29.9 131.8 0 147.1 0c15 0 45.7 29.8 61.5 48.6 21.1 25.1 46.2 63.8 46.2 106.2 0 24.9-26.5 164.7-29.5 180.6l-1.7 9.2z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rocket);


/***/ }),

/***/ 14545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Savings = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 512 465.5",
        xmlns: "http://www.w3.org/2000/svg",
        className: `svg-inject icon-svg ${className || "icon-svg-md text-green mb-3"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M156.8 465.5c-9.9 0-24.2-4.8-56.2-40.6-16.2-18.2-29.5-36-30.1-36.8-.4-.5-.7-1-1-1.6-6.1-11-9.3-23.3-9.3-35.8v-90.9c0-7.9 6.4-14.4 14.3-14.4h116c16.5 0 32.4 6.5 44.2 18.1l59.4 58.5c17.2 17.2 17.3 45.1.1 62.3s-45.1 17.3-62.3.1L172.7 325c-5.9 0-15.5-.1-23.1-.1l-10.8-.1c-7.9 0-14.3-6.5-14.3-14.4s6.5-14.3 14.4-14.3h.1l10.8.1c6.8 0 14.1.1 19.6.1h6.9c4.2 0 8.5.1 12.7 4.3l63.5 63.5c6 6 15.7 6 21.7 0s6-15.7 0-21.7L214.6 284c-6.4-6.3-15-9.9-24-9.8H88.9v76.5c0 7.4 1.8 14.6 5.2 21.1 2.6 3.5 13.6 17.9 26.5 32.4 25.5 28.8 35.2 32.2 36.5 32.6h155.1c10.6 0 22.9-5.5 34.6-11.2 9.9-4.8 83.3-54.6 127.3-84.9l.7-.5c8.2-5.1 10.7-15.8 5.6-23.9-4.9-7.9-15.2-10.5-23.3-6L350 381.4c-6.6 4.4-15.5 2.6-19.9-4-4.4-6.6-2.6-15.5 4-19.9l107.5-71.3c.2-.1.3-.2.5-.3 21.8-13.1 50.1-6 63.2 15.8 12.9 21.6 6.2 49.6-15.2 62.8-13.3 9.2-115.8 79.6-130.8 86.9-14.7 7.1-30.5 14.1-47.1 14.1H156.8z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-fill",
                d: "M14.4 242.2h84.2v189.6H14.4z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M98.5 446.1H14.4c-7.9 0-14.4-6.4-14.4-14.4V242.2c0-7.9 6.4-14.4 14.3-14.4h84.1c7.9 0 14.3 6.4 14.3 14.4v189.6c.1 7.9-6.3 14.3-14.2 14.3zm-69.8-28.7h55.4V256.5H28.7v160.9zM273 214.2c-59.2 0-107.1-48-107.1-107.1C165.9 47.9 213.9 0 273.1 0c59.1 0 107.1 48 107.1 107.1-.1 59.1-48.1 107.1-107.2 107.1zm0-185.5c-43.3 0-78.4 35.1-78.4 78.4s35.1 78.4 78.4 78.4c43.3 0 78.4-35.1 78.4-78.4-.1-43.3-35.1-78.3-78.4-78.4z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                className: "lineal-fill",
                cx: "348.9",
                cy: "178.6",
                r: "92.8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M348.9 285.7c-59.1 0-107.1-47.9-107.1-107.1 0-59.1 47.9-107.1 107.1-107.1S456 119.4 456 178.6c-.1 59.1-48 107-107.1 107.1zm0-185.5c-43.3 0-78.4 35.1-78.4 78.4S305.7 257 349 257s78.4-35.1 78.4-78.4c-.1-43.3-35.2-78.4-78.5-78.4z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "lineal-stroke",
                d: "M345.4 224.9c-15.5-.5-28.2-8.5-28.2-16.8 0-4.4 3.9-10.9 8.8-10.9 5.4 0 9.8 7.6 19.4 9.3v-20.9c-11.9-4.5-25.9-10.1-25.9-26.6s12.1-24.3 25.9-26.2v-3.6c0-1.8 2.1-3.5 4.9-3.5 2.5 0 4.9 1.7 4.9 3.5v3.2c8 .3 23.1 2.3 23.1 11.2 0 3.5-2.3 10.6-8 10.6-4.3 0-6.7-4.1-15.1-4.8v18.9c11.8 4.4 25.5 10.5 25.5 27.9 0 16-10.4 25.7-25.5 28.2v3.8c0 1.8-2.5 3.5-4.9 3.5-2.9 0-4.9-1.7-4.9-3.5v-3.3zm1.3-59.7v-15.4c-5.8 1.2-8.3 4.1-8.3 7.2 0 3.8 3.4 6.1 8.3 8.2zm7.2 23.9v17.3c4.4-1 7.9-3.5 7.9-8.1 0-4.3-3.2-7-7.9-9.2z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Savings);


/***/ }),

/***/ 50417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Bulb = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 255.98",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-sm text-fuchsia me-4"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                className: "fill-primary",
                cx: "58.67",
                cy: "149.31",
                r: "32"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M88 202.65H29.33A29.36 29.36 0 000 232v16a8 8 0 008 8h101.33a8 8 0 008-8v-16A29.36 29.36 0 0088 202.65z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                className: "fill-primary",
                cx: "197.33",
                cy: "149.31",
                r: "32"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M226.67 202.65H168A29.36 29.36 0 00138.67 232v16a8 8 0 008 8H248a8 8 0 008-8v-16a29.36 29.36 0 00-29.33-29.35z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M149.76 108.48v7.68A11.9 11.9 0 01137.81 128h-19.63c-5.76 0-12-4.27-12-13.76v-5.76zM176 47.68a47.26 47.26 0 01-17.6 36.91 22.89 22.89 0 00-8.32 13.23H106a20 20 0 00-7.79-12.69A47.13 47.13 0 0180 46.73C80.53 21.34 101.76.33 127.25 0a47.34 47.34 0 0134.56 13.88A46.82 46.82 0 01176 47.68z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bulb);


/***/ }),

/***/ 42415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Compare = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-sm text-violet me-4"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M123.22 148.5A8 8 0 00116 144H19.36a8 8 0 00-8 8c0 57.34 46.94 104 104.66 104a104.67 104.67 0 0045.45-10.29 8 8 0 003.76-10.71z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M152 19a8 8 0 00-8 8v95.39a7.93 7.93 0 00.8 3.49l41.73 85.95a8 8 0 0010.65 3.73c36.29-17.48 58.82-53.19 58.82-93.19C256 65.36 209.34 19 152 19z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M112 104V8a8 8 0 00-8-8A104.13 104.13 0 000 104a8 8 0 008 8h96a8 8 0 008-8z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Compare);


/***/ }),

/***/ 89033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Headphone = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 244.09",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-xs text-green me-4"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M35.72 92.28a92.28 92.28 0 01184.56 0v47.63a8.93 8.93 0 01-17.86 0V92.28a74.42 74.42 0 10-148.84 0v47.63a8.93 8.93 0 11-17.86 0zm175.63 62.51a8.93 8.93 0 018.93 8.93v35.72a32.75 32.75 0 01-32.75 32.75h-35.72a8.94 8.94 0 010-17.87h35.72a14.88 14.88 0 0014.89-14.88v-35.72a8.93 8.93 0 018.93-8.93z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M107.16 223.26A20.84 20.84 0 01128 202.42h11.91a20.84 20.84 0 010 41.67H128a20.84 20.84 0 01-20.84-20.83zm20.84-3a3 3 0 100 5.95h11.91a3 3 0 000-5.95z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M32.74 107.16A32.74 32.74 0 000 139.91v23.81a32.75 32.75 0 0032.74 32.75h11.91a8.93 8.93 0 008.93-8.94v-71.44a8.93 8.93 0 00-8.93-8.93zm190.52 0A32.74 32.74 0 01256 139.91v23.81a32.75 32.75 0 01-32.74 32.75h-11.91a8.93 8.93 0 01-8.93-8.94v-71.44a8.93 8.93 0 018.93-8.93z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Headphone);


/***/ }),

/***/ 15992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Puzzle = ({ className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 255.97 256",
        className: `svg-inject icon-svg solid-mono ${className || "icon-svg-xs text-orange me-4"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-secondary",
                d: "M221.86 91a33.65 33.65 0 01-22.72-8.75v40.21h-27.2a43.26 43.26 0 003.73-17.71 44.8 44.8 0 10-86 17.71H56.85v-111A11.42 11.42 0 0168.26 0h119.47a11.42 11.42 0 0111.41 11.41v20.05A34.1 34.1 0 11221.86 91z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-primary",
                d: "M142.79 181.25a34.13 34.13 0 0033.55 40.62 33.66 33.66 0 0022.75-8.77v31.52A11.41 11.41 0 01187.72 256H68.28a11.41 11.41 0 01-11.38-11.38V213.1a34.12 34.12 0 11-22.75-59.5 33.71 33.71 0 0122.75 8.77v-29.2H112a34.12 34.12 0 1137.76 0h49.37v29.2a34.09 34.09 0 00-56.3 18.88z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Puzzle);


/***/ })

};
;