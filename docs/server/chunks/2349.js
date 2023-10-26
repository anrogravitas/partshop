"use strict";
exports.id = 2349;
exports.ids = [2349];
exports.modules = {

/***/ 72215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reuseable_FigureImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42744);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99472);


// -------- custom component -------- //


// -------- data -------- //
const comments = [
    {
        id: 1,
        createdAt: "14 Jan 2022",
        user: {
            name: "Connor Gibson",
            image: "/img/avatars/u1.jpg",
            link: "#"
        },
        comment: `Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo
    luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis
    integer posuere erat ante.`,
        reply: null
    },
    {
        id: 2,
        createdAt: "21 Feb 2022",
        user: {
            name: "Nikolas Brooten",
            image: "/img/avatars/u2.jpg",
            link: "#"
        },
        comment: `Quisque tristique tincidunt metus non aliquam. Quisque ac risus sit amet quam sollicitudin vestibulum vitae malesuada libero. Mauris magna elit, suscipit non ornare et, blandit a tellus. Pellentesque dignissim ornare faucibus mollis.`,
        reply: [
            {
                id: 3,
                createdAt: "22 Feb 2022",
                user: {
                    name: "Pearce Frye",
                    image: "/img/avatars/u3.jpg",
                    link: "#"
                },
                comment: `Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis.`,
                reply: [
                    {
                        id: 4,
                        createdAt: "4 Apr 2022",
                        user: {
                            name: "Nikolas Brooten",
                            image: "/img/avatars/u2.jpg",
                            link: "#"
                        },
                        comment: `Nullam id dolor id nibh ultricies vehicula ut id. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia aenean bibendum nulla consectetur.`,
                        reply: null
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        createdAt: "3 May 2022",
        user: {
            name: "Lou Bloxham",
            image: "/img/avatars/u4.jpg",
            link: "#"
        },
        comment: `Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
        reply: null
    }
];
// ========================================================================
const BlogCommentList = ()=>{
    // Dynamically render all comments for a single blog post.
    const renderLevels = (items)=>{
        return items.map(({ id , createdAt , user , reply , comment  })=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: "comment",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "comment-header d-md-flex align-items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex align-items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_reuseable_FigureImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        width: 120,
                                        height: 120,
                                        src: user.image,
                                        className: "user-avatar rounded-circle overflow-hidden"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "comment-author",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    title: user.name,
                                                    href: user.link,
                                                    className: "link-dark"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "post-meta",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "uil uil-calendar-alt"
                                                        }),
                                                        " ",
                                                        dayjs__WEBPACK_IMPORTED_MODULE_1___default()(createdAt).format("DD MMM YYYY")
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-3 mt-md-0 ms-auto",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: "btn btn-soft-ash btn-sm rounded-pill btn-icon btn-icon-start mb-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "uil uil-comments"
                                        }),
                                        " Reply"
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: comment
                    }),
                    reply && Array.isArray(reply) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "children",
                        children: renderLevels(reply)
                    })
                ]
            }, id);
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
        className: "commentlist",
        id: "singlecomments",
        children: renderLevels(comments)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCommentList);


/***/ }),

/***/ 22349:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useLightBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89486);
/* harmony import */ var components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77632);
/* harmony import */ var components_common_ShareButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57409);
/* harmony import */ var components_reuseable_FigureImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42744);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99472);
/* harmony import */ var components_reuseable_SocialLinks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25970);
/* harmony import */ var components_common_BlogCommentList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72215);
/* harmony import */ var components_reuseable_blog_cards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54156);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_4__]);
components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// -------- custom hook -------- //

// -------- custom component -------- //







// -------- data -------- //
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
    }
];
const images = [
    {
        id: 1,
        url: "/img/photos/b8.jpg",
        full: "/img/photos/b8-full.jpg"
    },
    {
        id: 2,
        url: "/img/photos/b9.jpg",
        full: "/img/photos/b9-full.jpg"
    },
    {
        id: 3,
        url: "/img/photos/b10.jpg",
        full: "/img/photos/b10-full.jpg"
    },
    {
        id: 4,
        url: "/img/photos/b11.jpg",
        full: "/img/photos/b11-full.jpg"
    }
];
const blogs = [
    {
        id: 1,
        link: "#",
        category: "Coding",
        date: "14 Apr 2022",
        image: "/img/photos/b4.jpg",
        title: "Ligula tristique quis risus",
        description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
    },
    {
        id: 2,
        link: "#",
        date: "14 Apr 2022",
        category: "Workspace",
        image: "/img/photos/b5.jpg",
        title: "Nullam id dolor elit id nibh",
        description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
    },
    {
        id: 3,
        link: "#",
        date: "14 Apr 2022",
        category: "Meeting",
        image: "/img/photos/b6.jpg",
        title: "Ultricies fusce porta elit",
        description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
    },
    {
        id: 4,
        link: "#",
        date: "14 Apr 2022",
        category: "Business Tips",
        image: "/img/photos/b7.jpg",
        title: "Morbi leo risus porta eget",
        description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
    }
];
const BlogDetailsTemplate = ()=>{
    // used for image lightbox
    (0,hooks_useLightBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "card",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_FigureImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                width: 960,
                height: 600,
                src: "/img/photos/b1.jpg",
                className: "card-img-top"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "card-body",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "classic-view",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                            className: "post",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "post-content mb-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "h1 mb-4",
                                            children: "Cras mattis consectetur purus fermentum"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Donec sed odio dui consectetur adipiscing elit. Etiam adipiscing tincidunt elit, eu convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero, condimentum ac laoreet vitae, varius tempor nisi. Duis non arcu vel lectus urna mollis ornare vel eu leo."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "row g-6 mt-3 mb-10",
                                            children: images.map(({ id , url , full  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-md-6",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                        className: "hover-scale rounded cursor-dark",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: full,
                                                            "data-glightbox": true,
                                                            "data-gallery": "post",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                layout: "responsive",
                                                                width: 460,
                                                                height: 307,
                                                                src: url,
                                                                alt: "demo"
                                                            })
                                                        })
                                                    })
                                                }, id))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                                            className: "fs-lg my-8",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio sem nec elit purus."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                                                    className: "blockquote-footer",
                                                    children: "Very important person"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "h2 mb-4",
                                            children: "Sit Vulputate Bibendum Purus"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "list-unstyled tag-list mb-0",
                                                children: tags.map(({ id , title , url  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                            href: url,
                                                            title: title,
                                                            className: "btn btn-soft-ash btn-sm rounded-pill mb-0"
                                                        })
                                                    }, id))
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mb-0 mb-md-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_ShareButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                btnSize: "btn-sm"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "author-info d-md-flex align-items-center mb-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex align-items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_FigureImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        width: 120,
                                        height: 120,
                                        src: "/img/avatars/u5.jpg",
                                        className: "user-avatar rounded-circle overflow-hidden"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    title: "Nikolas Brooten",
                                                    href: "#",
                                                    className: "link-dark"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "post-meta fs-15",
                                                children: "Sales Manager"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-3 mt-md-0 ms-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "#",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "btn btn-sm btn-soft-ash rounded-pill btn-icon btn-icon-start mb-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "uil uil-file-alt"
                                            }),
                                            " All Posts"
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac. Maecenas faucibus mollis interdum."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_SocialLinks__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        className: "nav social"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "mb-6",
                        children: "You Might Also Like"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_Carousel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        grabCursor: true,
                        slidesPerView: 2,
                        navigation: false,
                        breakpoints: {
                            0: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2
                            }
                        },
                        children: blogs.map(({ id , ...item })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_blog_cards__WEBPACK_IMPORTED_MODULE_10__/* .BlogCard1 */ .nk, {
                                ...item
                            }, id))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        id: "comments",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "mb-6",
                                children: "5 Comments"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_BlogCommentList__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: "comment-form",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-floating mb-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        className: "form-control",
                                        placeholder: "Name*",
                                        id: "c-name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "c-name",
                                        children: "Name *"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-floating mb-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "email",
                                        className: "form-control",
                                        placeholder: "Email*",
                                        id: "c-email"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "c-email",
                                        children: "Email*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-floating mb-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        className: "form-control",
                                        placeholder: "Website",
                                        id: "c-web"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "c-web",
                                        children: "Website"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-floating mb-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        name: "textarea",
                                        placeholder: "Comment",
                                        className: "form-control",
                                        style: {
                                            height: 150
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Comment *"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "btn btn-primary rounded-pill mb-0",
                                children: "Submit"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogDetailsTemplate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


// ====================================================
const FigureImage = (props)=>{
    const { className , src , width , height , ...others } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
        className: className,
        ...others,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            width: width,
            height: height,
            src: src,
            alt: "demo",
            layout: "responsive",
            quality: "100"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FigureImage);


/***/ }),

/***/ 54156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "nk": () => (/* reexport */ blog_cards_BlogCard1),
  "UM": () => (/* reexport */ blog_cards_BlogCard2),
  "WY": () => (/* reexport */ blog_cards_BlogCard3),
  "q0": () => (/* reexport */ blog_cards_BlogCard4),
  "sW": () => (/* reexport */ blog_cards_BlogCard5)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/reuseable/links/NextLink.tsx
var NextLink = __webpack_require__(99472);
;// CONCATENATED MODULE: ./src/components/reuseable/blog-cards/BlogCard1.tsx




// ======================================================
const BlogCard1 = ({ date , image , title , category  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                className: "overlay overlay-1 hover-scale rounded mb-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "#",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    width: 560,
                                    height: 350,
                                    src: image,
                                    alt: title,
                                    layout: "responsive"
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
                            children: "Read More"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "post-header",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "post-title h3 mb-3",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                        title: "Ligula tristique quis risus",
                        className: "link-dark",
                        href: "#"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "post-footer",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "post-meta",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "post-date",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "uil uil-calendar-alt"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: date
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "post-comments",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                href: "#",
                                className: "link-dark",
                                title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "uil uil-file-alt fs-15"
                                        }),
                                        category
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const blog_cards_BlogCard1 = (BlogCard1);

;// CONCATENATED MODULE: ./src/components/reuseable/blog-cards/BlogCard2.tsx



// ========================================================
const BlogCard2 = (props)=>{
    const { cardTop , title , category , description , link  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("article", {
        className: "post",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "card",
            children: [
                cardTop,
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "card-body",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "post-header",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "post-category text-line",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                        title: category,
                                        href: "#",
                                        className: "hover"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "post-title mt-1 mb-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                        title: title,
                                        className: "link-dark",
                                        href: link
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "post-content",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: description
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "card-footer",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "post-meta d-flex mb-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "post-date",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "uil uil-calendar-alt"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "5 Jul 2022"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "post-author",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "#",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "uil uil-user"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "By Sandbox"
                                            })
                                        ]
                                    })
                                })
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
                                            " 3",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: " Comments"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "post-likes ms-auto",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "#",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "uil uil-heart-alt"
                                            }),
                                            "3"
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const blog_cards_BlogCard2 = (BlogCard2);

// EXTERNAL MODULE: ./src/components/reuseable/FigureImage.tsx
var FigureImage = __webpack_require__(42744);
;// CONCATENATED MODULE: ./src/components/reuseable/blog-cards/BlogCard3.tsx




// ========================================================
const BlogCard3 = (props)=>{
    const { title , category , description , link , image  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("article", {
        className: "item post col-md-6",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "card",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                    className: "card-img-top overlay overlay-1 hover-scale",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(FigureImage/* default */.Z, {
                                        width: 560,
                                        height: 350,
                                        src: image
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
                                children: "Read More"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "card-body",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "post-header",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "post-category text-line",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                        title: category,
                                        href: "#",
                                        className: "hover"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "post-title h3 mt-1 mb-3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                        title: title,
                                        className: "link-dark",
                                        href: link
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "post-content",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: description
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "card-footer",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "post-meta d-flex mb-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "post-date",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "uil uil-calendar-alt"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "14 Apr 2022"
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
                                            "4"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "post-likes ms-auto",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "#",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "uil uil-heart-alt"
                                            }),
                                            "5"
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const blog_cards_BlogCard3 = (BlogCard3);

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
;// CONCATENATED MODULE: ./src/components/reuseable/blog-cards/BlogCard4.tsx





// ======================================================
const BlogCard4 = (props)=>{
    const { date , image , title , category , description  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("article", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "card",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                    className: "card-img-top overlay overlay-1 hover-scale",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        width: 560,
                                        height: 350,
                                        src: image,
                                        alt: title,
                                        layout: "responsive"
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
                                children: "Read More"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "card-body",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "post-header",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "post-title h3 mt-1 mb-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                    title: title,
                                    className: "link-dark",
                                    href: "#"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "post-content",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: description
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "card-footer",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "post-meta d-flex mb-0",
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
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                    href: "#",
                                    className: "link-dark",
                                    title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "uil uil-file-alt fs-15"
                                            }),
                                            category
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const blog_cards_BlogCard4 = (BlogCard4);

;// CONCATENATED MODULE: ./src/components/reuseable/blog-cards/BlogCard5.tsx




// ======================================================
const BlogCard5 = (props)=>{
    const { image , title , author , category , createdAt , comments  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
        className: "overlay caption caption-overlay rounded mb-0",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "#",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: image,
                            alt: ""
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "bg"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figcaption", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "badge badge-lg bg-white text-uppercase mb-3",
                        children: category
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "post-title h3 mt-1 mb-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                            title: title,
                            href: "#"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "post-meta text-white mb-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "post-date",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "uil uil-calendar-alt"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: external_dayjs_default()(createdAt).format("DD MMM YYYY")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "post-author",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "#",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "uil uil-user"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "By ",
                                                    author
                                                ]
                                            })
                                        ]
                                    })
                                })
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
                                            comments,
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Comments"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const blog_cards_BlogCard5 = (BlogCard5);

;// CONCATENATED MODULE: ./src/components/reuseable/blog-cards/index.ts








/***/ })

};
;