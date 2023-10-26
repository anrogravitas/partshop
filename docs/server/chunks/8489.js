"use strict";
exports.id = 8489;
exports.ids = [8489];
exports.modules = {

/***/ 83106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "lT": () => (/* reexport */ team_cards_TeamCard1),
  "i_": () => (/* reexport */ team_cards_TeamCard2),
  "S$": () => (/* reexport */ team_cards_TeamCard3)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/reuseable/links/IconLink.tsx

// ==============================================================
const IconLink = ({ href , icon  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: href,
        target: "_blank",
        rel: "noreferrer",
        children: icon
    });
};
/* harmony default export */ const links_IconLink = (IconLink);

;// CONCATENATED MODULE: ./src/components/reuseable/team-cards/TeamCard1.tsx



// ==========================================================
const TeamCard1 = (props)=>{
    const { name , description , designation , image , facebookUrl , twitterUrl , dribbbleUrl , shadow =false  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `card ${shadow ? "shadow-lg" : ""}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "card-body",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "rounded-circle w-15 mb-4 overflow-hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        width: 300,
                        height: 300,
                        alt: "Team Member",
                        layout: "responsive",
                        src: image
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    className: "mb-1",
                    children: name
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "meta mb-2",
                    children: designation
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "mb-2",
                    children: description
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "nav social mb-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(links_IconLink, {
                            href: twitterUrl,
                            icon: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "uil uil-twitter"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(links_IconLink, {
                            href: facebookUrl,
                            icon: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "uil uil-facebook-f"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(links_IconLink, {
                            href: dribbbleUrl,
                            icon: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "uil uil-dribbble"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const team_cards_TeamCard1 = (TeamCard1);

;// CONCATENATED MODULE: ./src/components/reuseable/team-cards/TeamCard2.tsx



// ==========================================================
const TeamCard2 = (props)=>{
    const { name , description , designation , image , facebookUrl , twitterUrl , dribbbleUrl  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "text-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "rounded-circle w-20 mx-auto mb-4 overflow-hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    width: 500,
                    height: 500,
                    alt: "Team Member",
                    layout: "responsive",
                    src: image
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "mb-1",
                children: name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "meta mb-2",
                children: designation
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mb-2",
                children: description
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "nav social justify-content-center text-center mb-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(links_IconLink, {
                        href: twitterUrl,
                        icon: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "uil uil-twitter"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(links_IconLink, {
                        href: facebookUrl,
                        icon: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "uil uil-facebook-f"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(links_IconLink, {
                        href: dribbbleUrl,
                        icon: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "uil uil-dribbble"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const team_cards_TeamCard2 = (TeamCard2);

;// CONCATENATED MODULE: ./src/components/reuseable/team-cards/TeamCard3.tsx

// ==========================================================
const TeamCard3 = ({ name , image , designation  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "position-relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "shape rounded bg-soft-primary rellax d-md-block",
                style: {
                    zIndex: 0,
                    width: "98%",
                    height: "98%",
                    right: "-0.75rem",
                    bottom: "-0.75rem"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card shadow-lg",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                        className: "card-img-top",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "img-fluid",
                            src: image["1x"],
                            srcSet: image["2x"],
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "card-body px-6 py-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "mb-1",
                                children: name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-0",
                                children: designation
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const team_cards_TeamCard3 = (TeamCard3);

;// CONCATENATED MODULE: ./src/components/reuseable/team-cards/index.ts






/***/ }),

/***/ 82395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const teams = [
    {
        id: 1,
        name: "Coriss Ambady",
        image: "/img/avatars/t1.jpg",
        designation: "Financial Analyst",
        dribbbleUrl: "https://dribbble.com",
        twitterUrl: "https://www.twitter.com",
        facebookUrl: "https://www.facebook.com",
        description: "Fermentum massa justo sit amet risus morbi leo."
    },
    {
        id: 2,
        name: "Cory Zamora",
        image: "/img/avatars/t2.jpg",
        designation: "Marketing Specialist",
        dribbbleUrl: "https://dribbble.com",
        twitterUrl: "https://www.twitter.com",
        facebookUrl: "https://www.facebook.com",
        description: "Fermentum massa justo sit amet risus morbi leo."
    },
    {
        id: 3,
        name: "Nikolas Brooten",
        image: "/img/avatars/t3.jpg",
        designation: "Sales Manager",
        dribbbleUrl: "https://dribbble.com",
        twitterUrl: "https://www.twitter.com",
        facebookUrl: "https://www.facebook.com",
        description: "Fermentum massa justo sit amet risus morbi leo."
    },
    {
        id: 4,
        name: "Jackie Sanders",
        image: "/img/avatars/t4.jpg",
        designation: "Investment Planner",
        dribbbleUrl: "https://dribbble.com",
        twitterUrl: "https://www.twitter.com",
        facebookUrl: "https://www.facebook.com",
        description: "Fermentum massa justo sit amet risus morbi leo."
    },
    {
        id: 5,
        name: "Cory Smith",
        image: "/img/avatars/t5.jpg",
        designation: "Project Manager",
        dribbbleUrl: "https://dribbble.com",
        twitterUrl: "https://www.twitter.com",
        facebookUrl: "https://www.facebook.com",
        description: "Fermentum massa justo sit amet risus morbi leo."
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (teams);


/***/ })

};
;