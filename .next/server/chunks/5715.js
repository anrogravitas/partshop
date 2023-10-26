"use strict";
exports.id = 5715;
exports.ids = [5715];
exports.modules = {

/***/ 35715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ reuseable_BlogSidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/components/reuseable/FigureImage.tsx
var FigureImage = __webpack_require__(42744);
// EXTERNAL MODULE: ./src/components/reuseable/links/NextLink.tsx
var NextLink = __webpack_require__(99472);
// EXTERNAL MODULE: ./src/components/reuseable/SocialLinks.tsx
var SocialLinks = __webpack_require__(25970);
;// CONCATENATED MODULE: ./src/data/blog-sidebar.ts
const popularPosts = [
    {
        id: 1,
        comment: 3,
        date: "26 Mar 2022",
        image: "/img/photos/a1.jpg",
        title: "Magna Mollis Ultricies"
    },
    {
        id: 2,
        comment: 6,
        date: "16 Feb 2022",
        image: "/img/photos/a2.jpg",
        title: "Ornare Nullam Risus"
    },
    {
        id: 3,
        comment: 5,
        date: "8 Jan 2022",
        image: "/img/photos/a3.jpg",
        title: "Euismod Nullam Fusce"
    }
];
const categories = [
    {
        id: 1,
        post: 21,
        title: "Teamwork",
        url: "#"
    },
    {
        id: 2,
        post: 19,
        title: "Ideas",
        url: "#"
    },
    {
        id: 3,
        post: 16,
        title: "Workspace",
        url: "#"
    },
    {
        id: 4,
        post: 7,
        title: "Coding",
        url: "#"
    },
    {
        id: 5,
        post: 12,
        title: "Meeting",
        url: "#"
    },
    {
        id: 6,
        post: 14,
        title: "Business Tips",
        url: "#"
    }
];
const tags = [
    {
        id: 1,
        title: "Still Life",
        url: "#"
    },
    {
        id: 2,
        title: "Urban",
        url: "#"
    },
    {
        id: 3,
        title: "Nature",
        url: "#"
    },
    {
        id: 4,
        title: "Landscape",
        url: "#"
    },
    {
        id: 5,
        title: "Macro",
        url: "#"
    },
    {
        id: 6,
        title: "Fun",
        url: "#"
    },
    {
        id: 7,
        title: "Workshop",
        url: "#"
    },
    {
        id: 8,
        title: "Photography",
        url: "#"
    }
];
const archieve = [
    {
        id: 1,
        title: "February 2019",
        url: "#"
    },
    {
        id: 2,
        title: "January 2019",
        url: "#"
    },
    {
        id: 3,
        title: "December 2018",
        url: "#"
    },
    {
        id: 4,
        title: "November 2018",
        url: "#"
    },
    {
        id: 5,
        title: "October 2018",
        url: "#"
    }
];
/* harmony default export */ const blog_sidebar = ({
    popularPosts,
    tags,
    archieve,
    categories
});

;// CONCATENATED MODULE: ./src/components/reuseable/BlogSidebar.tsx




// -------- custom component -------- //



// -------- data -------- //

// ========================================================
const BlogSidebar = ({ thumbnail  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "widget",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "widget-title mb-3",
                        children: "About Us"
                    }),
                    thumbnail && /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                        className: "rounded mb-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "img-fluid",
                            src: thumbnail,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialLinks/* default */.Z, {
                        className: "nav social"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "widget",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "widget-title mb-3",
                        children: "Popular Posts"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "image-list",
                        children: blog_sidebar.popularPosts.map(({ id , title , image , comment , date  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                        title: /*#__PURE__*/ jsx_runtime_.jsx(FigureImage/* default */.Z, {
                                            width: 100,
                                            height: 100,
                                            className: "rounded",
                                            src: image
                                        }),
                                        href: "#"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "post-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "mb-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                                    className: "link-dark",
                                                    title: title,
                                                    href: "#"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "post-meta",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "post-date",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "uil uil-calendar-alt"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: external_dayjs_default()(date).format("DD MMM YYYY")
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "post-comments",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "uil uil-comment"
                                                                    }),
                                                                    " ",
                                                                    comment
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, id))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "widget",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "widget-title mb-3",
                        children: "Categories"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "unordered-list bullet-primary text-reset",
                        children: blog_sidebar.categories.map(({ id , title , post , url  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                    title: `${title} (${post})`,
                                    href: url
                                })
                            }, id))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "widget",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "widget-title mb-3",
                        children: "Tags"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "list-unstyled tag-list",
                        children: blog_sidebar.tags.map(({ id , title , url  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                    title: title,
                                    href: url,
                                    className: "btn btn-soft-ash btn-sm rounded-pill"
                                })
                            }, id))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "widget",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "widget-title mb-3",
                        children: "Archive"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "unordered-list bullet-primary text-reset",
                        children: blog_sidebar.archieve.map(({ id , title , url  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                    title: title,
                                    href: url
                                })
                            }, id))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const reuseable_BlogSidebar = (BlogSidebar);


/***/ })

};
;