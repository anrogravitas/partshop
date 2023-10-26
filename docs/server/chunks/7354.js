"use strict";
exports.id = 7354;
exports.ids = [7354];
exports.modules = {

/***/ 77354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ job_cards_JobPostCard1),
  "S": () => (/* reexport */ job_cards_JobPostCard2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/reuseable/job-cards/JobPostCard1.tsx

// ========================================================================
const JobPostCard1 = (props)=>{
    const { time , title , location , company , avatarColor , badgeColor  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-md-6 col-lg-4",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "card shadow-lg lift h-100",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-body p-5 d-flex flex-row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: `avatar ${avatarColor} text-white w-11 h-11 fs-20 me-4`,
                            children: company
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `badge ${badgeColor} rounded py-1 mb-2`,
                                children: time
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "mb-1",
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-0 text-body",
                                children: location
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const job_cards_JobPostCard1 = (JobPostCard1);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/reuseable/job-cards/JobPostCard2.tsx


// ========================================================================
const JobPostCard2 = (props)=>{
    const { time , location , title , avatarColor , avatar , link  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: link,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "card mb-4 lift",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "card-body p-5",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "row justify-content-between align-items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: `avatar ${avatarColor} text-white w-9 h-9 fs-17 me-3`,
                                    children: avatar
                                }),
                                " ",
                                title
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "col-5 col-md-3 text-body d-flex align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "uil uil-clock me-1"
                                }),
                                " ",
                                time
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "col-7 col-md-4 col-lg-3 text-body d-flex align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "uil uil-location-arrow me-1"
                                }),
                                " ",
                                location
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "d-none d-lg-block col-1 text-center text-body",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "uil uil-angle-right-b"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const job_cards_JobPostCard2 = (JobPostCard2);

;// CONCATENATED MODULE: ./src/components/reuseable/job-cards/index.ts





/***/ })

};
;