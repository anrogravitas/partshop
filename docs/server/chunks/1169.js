"use strict";
exports.id = 1169;
exports.ids = [1169];
exports.modules = {

/***/ 21169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Is": () => (/* reexport */ service_cards_ServiceCard1),
  "ce": () => (/* reexport */ service_cards_ServiceCard2),
  "oN": () => (/* reexport */ service_cards_ServiceCard3),
  "PN": () => (/* reexport */ service_cards_ServiceCard4),
  "s7": () => (/* reexport */ service_cards_ServiceCard5),
  "C0": () => (/* reexport */ service_cards_ServiceCard6)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ./src/components/reuseable/links/NextLink.tsx
var NextLink = __webpack_require__(99472);
;// CONCATENATED MODULE: ./src/components/reuseable/service-cards/ServiceCard1.tsx


// ===============================================================
const ServiceCard1 = (props)=>{
    const { title , description , Icon , linkUrl , linkType , cardClassName ="" , iconClassName  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-md-6 col-xl-3",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `card shadow-lg ${cardClassName}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-body",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                        className: iconClassName
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mb-2",
                        children: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                        title: "Learn More",
                        href: linkUrl,
                        className: `more hover link-${linkType}`
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const service_cards_ServiceCard1 = (ServiceCard1);

// EXTERNAL MODULE: ./src/components/reuseable/IconBox.tsx
var IconBox = __webpack_require__(50220);
;// CONCATENATED MODULE: ./src/components/reuseable/service-cards/ServiceCard2.tsx



// ================================================
const ServiceCard2 = (props)=>{
    const { title , linkUrl , description , icon , iconBoxClassNames , titleColor , hiddenBtn  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "col-md-6 col-lg-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(IconBox/* default */.Z, {
                icon: icon,
                className: iconBoxClassNames
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: titleColor,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mb-3",
                children: description
            }),
            !hiddenBtn && /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                title: "Learn More",
                href: linkUrl,
                className: "more hover"
            })
        ]
    });
};
// set deafult Props
ServiceCard2.defaultProps = {
    iconBoxClassNames: "icon btn btn-circle btn-lg btn-primary pe-none mb-5"
};
/* harmony default export */ const service_cards_ServiceCard2 = (ServiceCard2);

;// CONCATENATED MODULE: ./src/components/reuseable/service-cards/ServiceCard3.tsx

// ================================================
const ServiceCard3 = (props)=>{
    const { title , description , Icon , className ="d-flex flex-row"  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: Icon
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "mb-1",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mb-0",
                        children: description
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const service_cards_ServiceCard3 = (ServiceCard3);

;// CONCATENATED MODULE: ./src/components/reuseable/service-cards/ServiceCard4.tsx

// ==================================================================================
const ServiceCard4 = (props)=>{
    const { title , Icon , cardColor , columnClass , description  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: columnClass,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `card ${cardColor}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-body",
                children: [
                    Icon,
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mb-0",
                        children: description
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const service_cards_ServiceCard4 = (ServiceCard4);

;// CONCATENATED MODULE: ./src/components/reuseable/service-cards/ServiceCard5.tsx


// ==================================================================================
const ServiceCard5 = (props)=>{
    const { icon , title , description , url , className ="card shadow-lg mb-md-6 mt-lg-6"  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: className,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "card-body",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "icon btn btn-circle btn-lg btn-soft-purple pe-none mb-3",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: `uil ${icon}`
                    })
                }),
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
                    className: "more hover link-purple"
                })
            ]
        })
    });
};
/* harmony default export */ const service_cards_ServiceCard5 = (ServiceCard5);

;// CONCATENATED MODULE: ./src/components/reuseable/service-cards/ServiceCard6.tsx



// ================================================
const ServiceCard6 = (props)=>{
    const { title , linkUrl , description , icon , iconBoxClassNames  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-md-6 col-lg-3",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "card",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-body",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(IconBox/* default */.Z, {
                        icon: icon,
                        className: iconBoxClassNames
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
                        className: "more hover"
                    })
                ]
            })
        })
    });
};
// set deafult Props
ServiceCard6.defaultProps = {
    iconBoxClassNames: "icon btn btn-circle btn-lg btn-primary pe-none mb-5"
};
/* harmony default export */ const service_cards_ServiceCard6 = (ServiceCard6);

;// CONCATENATED MODULE: ./src/components/reuseable/service-cards/index.ts









/***/ })

};
;