"use strict";
exports.id = 2334;
exports.ids = [2334];
exports.modules = {

/***/ 22334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* reexport */ navbar_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./src/hooks/useSticky.ts

const useSticky = (height = 100)=>{
    const { 0: sticky , 1: setSticky  } = (0,external_react_.useState)(false);
    // scroll listener
    const listener = (0,external_react_.useCallback)(()=>{
        if (window.scrollY > height) setSticky(true);
        else setSticky(false);
    }, [
        height
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!window) return;
        window.addEventListener("scroll", listener);
        return ()=>window.removeEventListener("scroll", listener);
    }, [
        listener
    ]);
    return sticky;
};
/* harmony default export */ const hooks_useSticky = (useSticky);

// EXTERNAL MODULE: ./src/components/reuseable/links/NextLink.tsx
var NextLink = __webpack_require__(99472);
// EXTERNAL MODULE: ./src/components/reuseable/SocialLinks.tsx
var SocialLinks = __webpack_require__(25970);
;// CONCATENATED MODULE: ./src/components/reuseable/links/ListItemLink.tsx


// =========================================================
const ListItemLink = (props)=>{
    const { linkClassName ="nav-link" , liClassName ="nav-item" , href , title  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: liClassName,
        children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
            className: linkClassName,
            href: href,
            title: title
        })
    });
};
/* harmony default export */ const links_ListItemLink = (ListItemLink);

;// CONCATENATED MODULE: ./src/components/reuseable/links/DropdownToggleLink.tsx

// ==========================================================
const DropdownToggleLink = (props)=>{
    const { title , ...others } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: "#",
        "data-bs-toggle": "dropdown",
        className: "dropdown-item dropdown-toggle",
        ...others,
        children: title
    });
};
/* harmony default export */ const links_DropdownToggleLink = (DropdownToggleLink);

;// CONCATENATED MODULE: ./src/components/blocks/navbar/partials/Info.tsx




// ========================================================
const Info = (props)=>{
    const { title , description , address , phone  } = props;
    const otherPages = [
        {
            title: "Our Story",
            url: "#"
        },
        {
            title: "Terms of Use",
            url: "#"
        },
        {
            title: "Privacy Policy",
            url: "#"
        },
        {
            title: "Contact Us",
            url: "#"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "offcanvas offcanvas-end text-inverse",
        id: "offcanvas-info",
        "data-bs-scroll": "true",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "offcanvas-header",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-white fs-30 mb-0",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "btn-close btn-close-white",
                        "data-bs-dismiss": "offcanvas",
                        "aria-label": "Close"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "offcanvas-body pb-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "widget mb-8",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: description
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "widget mb-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "widget-title text-white mb-3",
                                children: "Contact Info"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                                children: address
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                title: "info@email.com",
                                className: "link-inverse",
                                href: "mailto:first.last@email.com"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                href: "tel:0123456789",
                                title: phone
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "widget mb-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "widget-title text-white mb-3",
                                children: "Learn More"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "list-unstyled",
                                children: otherPages.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                            href: "#",
                                            title: item.title
                                        })
                                    }, item.title))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "widget",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "widget-title text-white mb-3",
                                children: "Follow Us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SocialLinks/* default */.Z, {
                                className: "nav social social-white"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
// set default props
Info.defaultProps = {
    title: "Sandbox",
    phone: "00 (123) 456 78 90",
    description: `Sandbox is a multipurpose HTML5 template with various layouts which will be a great solution for your business.`,
    address: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            "Moonshine St. 14/05 ",
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            " Light City, London"
        ]
    })
};
/* harmony default export */ const partials_Info = (Info);

;// CONCATENATED MODULE: ./src/components/blocks/navbar/partials/Search.tsx

const Search = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "offcanvas offcanvas-top bg-light",
        id: "offcanvas-search",
        "data-bs-scroll": "true",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container d-flex flex-row py-6",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("form", {
                    className: "search-form w-100",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        id: "search-form",
                        className: "form-control",
                        placeholder: "Type keyword and hit enter"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    "aria-label": "Close",
                    className: "btn-close",
                    "data-bs-dismiss": "offcanvas"
                })
            ]
        })
    });
};
/* harmony default export */ const partials_Search = (Search);

// EXTERNAL MODULE: ./src/components/blocks/navbar/partials/Signin.tsx
var Signin = __webpack_require__(90146);
// EXTERNAL MODULE: ./src/components/blocks/navbar/partials/Signup.tsx
var Signup = __webpack_require__(49677);
;// CONCATENATED MODULE: ./src/components/blocks/navbar/partials/Language.tsx


// language list
const supportLanguage = [
    "En",
    "Bn",
    "Es",
    "De"
];
const Language = ()=>{
    const { 0: language , 1: setLanguage  } = (0,external_react_.useState)(supportLanguage[0]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: "nav-item dropdown language-select text-uppercase",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                role: "button",
                "aria-haspopup": "true",
                "aria-expanded": "false",
                "data-bs-toggle": "dropdown",
                className: "nav-link dropdown-item dropdown-toggle",
                children: language
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "dropdown-menu",
                children: supportLanguage.map((lang)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "dropdown-item",
                            onClick: ()=>setLanguage(lang),
                            children: lang
                        })
                    }, lang))
            })
        ]
    });
};
/* harmony default export */ const partials_Language = (Language);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/utils/currency.ts
var currency = __webpack_require__(82833);
;// CONCATENATED MODULE: ./src/components/blocks/navbar/partials/MiniCart.tsx





const cartItems = [
    {
        id: 1,
        stock: 5,
        quantity: 1,
        name: "Nike Air Sneakers",
        image: "/img/photos/sth1.jpg",
        price: {
            sales: 45,
            regular: 55
        }
    },
    {
        id: 2,
        stock: 5,
        quantity: 1,
        name: "Colorful Sneakers",
        image: "/img/photos/sth2.jpg",
        price: {
            sales: 0,
            regular: 45
        }
    },
    {
        id: 3,
        stock: 5,
        quantity: 1,
        name: "Polaroid Camera",
        image: "/img/photos/sth3.jpg",
        price: {
            sales: 0,
            regular: 45
        }
    }
];
const MiniCart = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "offcanvas offcanvas-end bg-light",
        id: "offcanvas-cart",
        "data-bs-scroll": "true",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "offcanvas-header",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "mb-0",
                        children: "Your Cart"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "btn-close",
                        "data-bs-dismiss": "offcanvas",
                        "aria-label": "Close"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "offcanvas-body d-flex flex-column",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shopping-cart",
                        children: cartItems.map(({ id , price , image , quantity , name  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "shopping-cart-item d-flex justify-content-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "d-flex flex-row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                                className: "rounded w-17",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/products/1",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: image,
                                                            width: 90,
                                                            height: 100,
                                                            layout: "responsive",
                                                            alt: name
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "w-100 ms-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "post-title fs-16 lh-xs mb-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                                            title: name,
                                                            href: "/products/1",
                                                            className: "link-dark"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "price fs-sm",
                                                        children: price.sales ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("del", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "amount",
                                                                        children: (0,currency/* default */.Z)(price.regular)
                                                                    })
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("ins", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "amount",
                                                                        children: (0,currency/* default */.Z)(price.sales)
                                                                    })
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "amount",
                                                            children: (0,currency/* default */.Z)(price.regular)
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form-select-wrapper",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                            className: "form-select form-select-sm",
                                                            defaultValue: quantity,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "1",
                                                                    children: "1"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "2",
                                                                    children: "2"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "3",
                                                                    children: "3"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "4",
                                                                    children: "4"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                    value: "5",
                                                                    children: "5"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "ms-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "link-dark",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "uil uil-trash-alt"
                                            })
                                        })
                                    })
                                ]
                            }, id))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "offcanvas-footer flex-column text-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex w-100 justify-content-between mb-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Subtotal:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "h6 mb-0",
                                        children: "$135.99"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/checkout",
                                passHref: true,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "btn btn-primary btn-icon btn-icon-start rounded w-100 mb-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "uil uil-credit-card fs-18"
                                        }),
                                        " Checkout"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "fs-14 mb-0",
                                children: "Free shipping on all orders over $50"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const partials_MiniCart = (MiniCart);

;// CONCATENATED MODULE: ./src/data/navigation.ts
// demos links
/*const demos = [
  { id: 1, url: '/demo-1', title: 'Demo I', thumnail: 'mi1' },
  { id: 2, url: '/demo-2', title: 'Demo II', thumnail: 'mi2' },
  { id: 3, url: '/demo-3', title: 'Demo III', thumnail: 'mi3' },
  { id: 4, url: '/demo-4', title: 'Demo VI', thumnail: 'mi4' },
  { id: 5, url: '/demo-5', title: 'Demo V', thumnail: 'mi5' },
  { id: 6, url: '/demo-6', title: 'Demo VI', thumnail: 'mi6' },
  { id: 7, url: '/demo-7', title: 'Demo VII', thumnail: 'mi7' },
  { id: 8, url: '/demo-8', title: 'Demo VIII', thumnail: 'mi8' },
  { id: 9, url: '/demo-9', title: 'Demo IX', thumnail: 'mi9' },
  { id: 10, url: '/demo-10', title: 'Demo X', thumnail: 'mi10' },
  { id: 11, url: '/demo-11', title: 'Demo XI', thumnail: 'mi11' },
  { id: 12, url: '/demo-12', title: 'Demo XII', thumnail: 'mi12' },
  { id: 13, url: '/demo-13', title: 'Demo XIII', thumnail: 'mi13' },
  { id: 14, url: '/demo-14', title: 'Demo XIV', thumnail: 'mi14' },
  { id: 15, url: '/demo-15', title: 'Demo XV', thumnail: 'mi15' },
  { id: 16, url: '/demo-16', title: 'Demo XVI', thumnail: 'mi16' },
  { id: 17, url: '/demo-17', title: 'Demo XVII', thumnail: 'mi17' },
  { id: 18, url: '/demo-18', title: 'Demo XVIII', thumnail: 'mi18' },
  { id: 19, url: '/demo-19', title: 'Demo XIX', thumnail: 'mi19' },
  { id: 20, url: '/demo-20', title: 'Demo XX', thumnail: 'mi20' },
  { id: 21, url: '/demo-21', title: 'Demo XXI', thumnail: 'mi21' },
  { id: 22, url: '/demo-22', title: 'Demo XXI', thumnail: 'mi22' },
  { id: 23, url: '/demo-23', title: 'Demo XXI', thumnail: 'mi23' },
  { id: 24, url: '/demo-24', title: 'Demo XXI', thumnail: 'mi24' },
  { id: 25, url: '/demo-25', title: 'Demo XXI', thumnail: 'mi25' },
  { id: 26, url: '/demo-26', title: 'Demo XXI', thumnail: 'mi26' },
  { id: 27, url: '/demo-27', title: 'Demo XXI', thumnail: 'mi27' }
];

// pages navigations
const pages = [
  {
    id: 21,
    title: 'Services',
    children: [
      { id: 211, title: 'Services I', url: '/services-1' },
      { id: 212, title: 'Services II', url: '/services-2' }
    ]
  },
  {
    id: 22,
    title: 'About',
    children: [
      { id: 221, title: 'About I', url: '/about-1' },
      { id: 222, title: 'About II', url: '/about-2' }
    ]
  },
  {
    id: 23,
    title: 'Shop',
    children: [
      { id: 231, title: 'Shop I', url: '/shop-1' },
      { id: 232, title: 'Shop II', url: '/shop-2' },
      { id: 232, title: 'Shop III', url: '/shop-3' },
      { id: 233, title: 'Product Page', url: '/products/1' },
      { id: 234, title: 'Shopping Cart', url: '/cart' },
      { id: 235, title: 'Checkout', url: '/checkout' }
    ]
  },
  {
    id: 24,
    title: 'Contact',
    children: [
      { id: 241, title: 'Contact I', url: '/contact-1' },
      { id: 242, title: 'Contact II', url: '/contact-2' },
      { id: 243, title: 'Contact III', url: '/contact-3' }
    ]
  },
  {
    id: 25,
    title: 'Career',
    children: [
      { id: 251, title: 'Job Listing I', url: '/career-1' },
      { id: 252, title: 'Job Listing II', url: '/career-2' },
      { id: 253, title: 'Job Description', url: '/jobs/1' }
    ]
  },
  {
    id: 26,
    title: 'Utility',
    children: [
      { id: 261, title: '404 Not Found', url: '/asdasdasdasd' },
      { id: 262, title: 'Login I', url: '/login-1' },
      { id: 263, title: 'Login II', url: '/login-2' },
      { id: 264, title: 'Register I', url: '/register-1' },
      { id: 265, title: 'Register II', url: '/register-2' },
      { id: 266, title: 'Terms & Condition', url: '/terms' }
    ]
  }
];

// projects pages link
const projectsNavigation = [
  {
    title: 'PROJECT PAGES',
    children: [
      { id: 1, title: 'Project I', url: '/projects-1' },
      { id: 2, title: 'Project II', url: '/projects-2' },
      { id: 3, title: 'Project III', url: '/projects-3' },
      { id: 4, title: 'Project VI', url: '/projects-4' }
    ]
  },
  {
    title: 'SINGLE PROJECTS',
    children: [
      { id: 1, title: 'Single Project I', url: '/single-project-1' },
      { id: 2, title: 'Single Project II', url: '/single-project-2' },
      { id: 3, title: 'Single Project III', url: '/single-project-3' },
      { id: 4, title: 'Single Project VI', url: '/single-project-4' }
    ]
  }
];

// blog pages links
const blogsNavigation = [
  { id: 1, url: '/blog-1', title: 'Blog without Sidebar' },
  { id: 2, url: '/blog-2', title: 'Blog with Sidebar' },
  { id: 3, url: '/blog-3', title: 'Blog with Left Sidebar' },
  {
    id: 4,
    url: null,
    title: 'Blog Posts',
    children: [
      { id: 41, url: '/blog-details-1', title: 'Post without Sidebar' },
      { id: 42, url: '/blog-details-2', title: 'Post with Sidebar' },
      { id: 43, url: '/blog-details-3', title: 'Post with Left Sidebar' }
    ]
  }
];

// documentation pages links
const documentionNavigation = {
  usage: [
    { id: 1, title: 'Get Started', url: '/docs' },
    // { id: 2, title: 'Forms', url: '#' },
    { id: 3, title: 'FAQ', url: '/docs/faq' },
    { id: 4, title: 'Changelog', url: '/docs/changelog' },
    { id: 5, title: 'Credits', url: '/docs/credits' }
  ],
  styleguide: [
    { id: 0, title: 'Theme', url: '/docs/styleguide/theme' },
    { id: 1, title: 'Colors', url: '/docs/styleguide/colors' },
    { id: 2, title: 'Fonts', url: '/docs/styleguide/fonts' },
    { id: 3, title: 'SVG Icons', url: '/docs/styleguide/svg-icons' },
    { id: 4, title: 'Font Icons', url: '/docs/styleguide/font-icons' },
    { id: 5, title: 'Illustrations', url: '/docs/styleguide/illustrations' },
    { id: 6, title: 'Backgrounds', url: '/docs/styleguide/backgrounds' },
    { id: 7, title: 'Misc', url: '/docs/styleguide/misc' }
  ],
  elements: [
    { id: 1, title: 'Accordion', url: '/docs/elements/accordions' },
    { id: 2, title: 'Alerts', url: '/docs/elements/alerts' },
    { id: 3, title: 'Animations', url: '/docs/elements/animations' },
    { id: 4, title: 'Avatars', url: '/docs/elements/avatars' },
    { id: 5, title: 'Background', url: '/docs/elements/background' },
    { id: 6, title: 'Badges', url: '/docs/elements/badges' },
    { id: 7, title: 'Buttons', url: '/docs/elements/buttons' },
    { id: 8, title: 'Card', url: '/docs/elements/card' },
    { id: 9, title: 'Carousel', url: '/docs/elements/carousel' },
    { id: 10, title: 'Dividers', url: '/docs/elements/dividers' },
    { id: 11, title: 'Form Elements', url: '/docs/elements/form-elements' },
    { id: 12, title: 'Image Hover', url: '/docs/elements/image-hover' },
    { id: 13, title: 'Image Mask', url: '/docs/elements/image-mask' },
    { id: 14, title: 'Lightbox', url: '/docs/elements/lightbox' },
    { id: 15, title: 'Media Player', url: '/docs/elements/media-player' },
    { id: 16, title: 'Modal', url: '/docs/elements/modal' },
    { id: 17, title: 'Pagination', url: '/docs/elements/pagination' },
    { id: 18, title: 'Progressbar', url: '/docs/elements/progressbar' },
    { id: 19, title: 'Shadows', url: '/docs/elements/shadows' },
    { id: 20, title: 'Shapes', url: '/docs/elements/shapes' },
    { id: 21, title: 'Tables', url: '/docs/elements/tables' },
    { id: 22, title: 'Tabs', url: '/docs/elements/tabs' },
    { id: 23, title: 'Text Animations', url: '/docs/elements/text-animation' },
    { id: 24, title: 'Text Highlight', url: '/docs/elements/text-highlight' },
    { id: 25, title: 'Tiles', url: '/docs/elements/tiles' },
    // { id: 26, title: 'Tooltips & Popovers', url: '/docs/elements/tooltips-popovers' },
    { id: 27, title: 'Typography', url: '/docs/elements/typography' }
  ]
};

// blocks pages links
const blocksNavigation = [
  { id: 1, url: '/docs/blocks/about', title: 'About', thumnail: '/img/demos/block1.svg' },
  { id: 2, url: '/docs/blocks/blog', title: 'Blog', thumnail: '/img/demos/block2.svg' },
  { id: 3, url: '/docs/blocks/call-to-action', title: 'Call to Action', thumnail: '/img/demos/block3.svg' },
  { id: 4, url: '/docs/blocks/clients', title: 'Clients', thumnail: '/img/demos/block4.svg' },
  { id: 5, url: '/docs/blocks/contact', title: 'Contact', thumnail: '/img/demos/block5.svg' },
  { id: 6, url: '/docs/blocks/facts', title: 'Facts', thumnail: '/img/demos/block6.svg' },
  { id: 7, url: '/docs/blocks/faq', title: 'FAQ', thumnail: '/img/demos/block7.svg' },
  { id: 8, url: '/docs/blocks/features', title: 'Features', thumnail: '/img/demos/block8.svg' },
  { id: 9, url: '/docs/blocks/footer', title: 'Footer', thumnail: '/img/demos/block9.svg' },
  { id: 10, url: '/docs/blocks/hero', title: 'Hero', thumnail: '/img/demos/block10.svg' },
  { id: 11, url: '/docs/blocks/navbar', title: 'Navbar', thumnail: '/img/demos/block11.svg' },
  { id: 12, url: '/docs/blocks/portfolio', title: 'Portfolio', thumnail: '/img/demos/block12.svg' },
  { id: 13, url: '/docs/blocks/pricing', title: 'Pricing', thumnail: '/img/demos/block13.svg' },
  { id: 14, url: '/docs/blocks/process', title: 'Process', thumnail: '/img/demos/block14.svg' },
  { id: 15, url: '/docs/blocks/team', title: 'Team', thumnail: '/img/demos/block15.svg' },
  { id: 16, url: '/docs/blocks/testimonials', title: 'Testimonials', thumnail: '/img/demos/block16.svg' }
];
*/ /*Navigation data for navbar*/ const page = [
    {
        id: 0,
        title: "Főoldal",
        url: "/"
    },
    {
        id: 1,
        title: "Term\xe9kek",
        url: "/shop-3"
    },
    {
        id: 2,
        url: null,
        title: "\xdcgyf\xe9lszolg\xe1lat",
        children: [
            {
                id: 21,
                url: "/contact",
                title: "Kapcsolat"
            },
            {
                id: 22,
                url: "/aboutus",
                title: "R\xf3lunk"
            },
            {
                id: 23,
                url: "/info",
                title: "Inform\xe1ci\xf3k"
            }
        ]
    },
    {
        id: 3,
        url: null,
        title: "Fi\xf3k",
        children: [
            {
                id: 31,
                url: "/register",
                title: "Regisztr\xe1ci\xf3"
            },
            {
                id: 32,
                url: "/login",
                title: "Bejelentkez\xe9s"
            }, 
        ]
    }, 
];


;// CONCATENATED MODULE: ./src/components/blocks/navbar/Navbar.tsx



// -------- custom hook -------- //

// -------- custom component -------- //




// -------- partial header component -------- //






// -------- data -------- //

// ===================================================================
const Navbar = (props)=>{
    const { navClassName , info , search , social , language , button , cart , fancy , navOtherClass , stickyBox , logoAlt  } = props;
    const sticky = hooks_useSticky(350);
    const navbarRef = (0,external_react_.useRef)(null);
    // dynamically render the logo
    const logo = sticky ? "logo-dark" : logoAlt ?? "logo-dark";
    // dynamically added navbar classname
    const fixedClassName = "navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed";
    // render inner nav item links
    const renderLinks = (links)=>{
        return links.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(links_ListItemLink, {
                href: item.url,
                title: item.title,
                linkClassName: "dropdown-item"
            }, item.id));
    };
    // all main header contents
    const headerContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navbar-brand w-20",
                children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                    href: "/",
                    title: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        alt: "logo",
                        src: `/img/${logo}.png`,
                        srcSet: `/img/${logo}@2x.png 2x`
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: navOtherClass + "navbar w-60 px-5",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "navbar-nav flex-row align-items-center ms-auto",
                    children: [
                        language && /*#__PURE__*/ jsx_runtime_.jsx(partials_Language, {}),
                        info && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link",
                                "data-bs-toggle": "offcanvas",
                                "data-bs-target": "#offcanvas-info",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "uil uil-info-circle"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("form", {
                            className: "form-inline .search_bar w-100",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "input-group md-form form-sm form-2 pl-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: "form-control my-0 py-1 ",
                                        type: "text",
                                        placeholder: "Search",
                                        "aria-label": "Search",
                                        style: {
                                            borderTopLeftRadius: "15px",
                                            borderBottomLeftRadius: "15px"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "input-group-prepend bg-primary",
                                        style: {
                                            borderTopRightRadius: "15px",
                                            borderBottomRightRadius: "15px"
                                        },
                                        children: search && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "nav-link" /*data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search"*/ ,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "uil uil-search p-1",
                                                    id: "nav"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        cart && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                /*Show left side*/ /*  data-bs-toggle="offcanvas" 
                  data-bs-target="#offcanvas-cart"*/ className: "nav-link position-relative d-flex flex-row align-items-center",
                                href: "/cart",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "uil uil-shopping-cart"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "badge badge-cart bg-primary",
                                            children: "3"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item d-lg-none",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                "data-bs-toggle": "offcanvas",
                                "data-bs-target": "#offcanvas-nav",
                                className: "hamburger offcanvas-nav-btn",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "offcanvas-nav",
                "data-bs-scroll": "true",
                className: "navbar-collapse offcanvas offcanvas-nav offcanvas-start w-20",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "offcanvas-body ms-lg-auto d-flex flex-column h-100",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "navbar-nav",
                            children: page.map(({ id , url , title , children  })=>{
                                if (!url && children) {
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "nav-item dropdown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(links_DropdownToggleLink, {
                                                title: title,
                                                className: "nav-link dropdown-toggle"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "dropdown-menu ",
                                                children: renderLinks(children)
                                            })
                                        ]
                                    }, id);
                                } else return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "navbar-nav",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(links_ListItemLink, {
                                        href: url,
                                        title: title
                                    })
                                }, id);
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "offcanvas-footer d-lg-none",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                        title: "info@email.com",
                                        className: "link-inverse",
                                        href: "mailto:first.last@email.com"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                        href: "tel:0123456789",
                                        title: "00 (123) 456 78 90"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialLinks/* default */.Z, {})
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            stickyBox && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    paddingTop: sticky ? navbarRef.current?.clientHeight : 0
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                ref: navbarRef,
                className: sticky ? fixedClassName : navClassName,
                children: fancy ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center",
                        children: headerContent
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container flex-lg-row flex-nowrap align-items-center",
                    children: headerContent
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Signin/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Signup/* default */.Z, {}),
            info && /*#__PURE__*/ jsx_runtime_.jsx(partials_Info, {}),
            search && /*#__PURE__*/ jsx_runtime_.jsx(partials_Search, {}),
            cart && /*#__PURE__*/ jsx_runtime_.jsx(partials_MiniCart, {})
        ]
    });
};
// set deafult Props
Navbar.defaultProps = {
    cart: false,
    info: false,
    social: false,
    search: false,
    language: false,
    stickyBox: true,
    navOtherClass: "navbar-other w-100 d-flex",
    navClassName: "navbar navbar-expand-lg center-nav transparent navbar-light"
};
/* harmony default export */ const navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/components/blocks/navbar/index.ts




/***/ }),

/***/ 90146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_elements_forms_LoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61431);


const Signin = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        role: "dialog",
        tabIndex: -1,
        "aria-modal": "true",
        id: "modal-signin",
        className: "modal fade",
        style: {
            display: "none"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "modal-dialog modal-dialog-centered modal-sm",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "modal-content text-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "modal-body",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "btn-close",
                            "data-bs-dismiss": "modal",
                            "aria-label": "Close"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements_forms_LoginForm__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signin);


/***/ }),

/***/ 49677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_elements_forms_RegisterForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83645);


const Signup = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        role: "dialog",
        tabIndex: -1,
        "aria-modal": "true",
        id: "modal-signup",
        className: "modal fade",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "modal-dialog modal-dialog-centered modal-sm",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "modal-content text-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "modal-body",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "btn-close",
                            "data-bs-dismiss": "modal",
                            "aria-label": "Close"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "mb-3 text-start",
                            children: "Sign up to Sandbox"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "lead mb-6 text-start",
                            children: "Registration takes less than a minute."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_elements_forms_RegisterForm__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);


/***/ }),

/***/ 61431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99472);



const LoginForm = ()=>{
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: visiblePassword , 1: setVisiblePassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(email, password);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "mb-3 text-start",
                children: "\xdcdv \xfajra!"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "text-start mb-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-floating mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "email",
                                value: email,
                                id: "loginEmail",
                                placeholder: "Email",
                                className: "form-control",
                                onChange: (e)=>setEmail(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "loginEmail",
                                children: "Email"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-floating password-field mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: password,
                                id: "loginPassword",
                                placeholder: "Password",
                                className: "form-control",
                                type: visiblePassword ? "text" : "password",
                                onChange: (e)=>setPassword(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "password-toggle",
                                onClick: ()=>setVisiblePassword(!visiblePassword),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: `uil  ${visiblePassword ? "uil-eye-slash" : "uil-eye"}`
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "loginPassword",
                                children: "Password"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "btn btn-primary rounded-pill btn-login w-100 mb-2",
                        children: "Bejelentkez\xe9s"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mb-1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    title: "Elfelejtetted a jelszavad?",
                    href: "/register",
                    className: "hover"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "mb-0",
                children: [
                    "Nincs m\xe9g fi\xf3kod? ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        title: "Regisztr\xe1ci\xf3",
                        href: "/register",
                        className: "hover"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);


/***/ }),

/***/ 83645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99472);



const RegisterForm = ()=>{
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: confirmPassword , 1: setConfirmPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: visiblePassword , 1: setVisiblePassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(email, password);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "text-start mb-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-floating mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "name",
                                type: "text",
                                value: name,
                                placeholder: "N\xe9v",
                                className: "form-control",
                                onChange: (e)=>setName(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "name",
                                children: "Name"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-floating mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "email",
                                value: email,
                                id: "loginEmail",
                                placeholder: "Email",
                                className: "form-control",
                                onChange: (e)=>setEmail(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "loginEmail",
                                children: "Email"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-floating password-field mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: password,
                                id: "loginPassword",
                                placeholder: "Password",
                                className: "form-control",
                                type: visiblePassword ? "text" : "password",
                                onChange: (e)=>setPassword(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "password-toggle",
                                onClick: ()=>setVisiblePassword(!visiblePassword),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: `uil  ${visiblePassword ? "uil-eye-slash" : "uil-eye"}`
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "loginPassword",
                                children: "Password"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-floating password-field mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "password-confirm",
                                value: confirmPassword,
                                className: "form-control",
                                placeholder: "Confirm Password",
                                type: visiblePassword ? "text" : "password",
                                onChange: (e)=>setConfirmPassword(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "password-toggle",
                                onClick: ()=>setVisiblePassword(!visiblePassword),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: `uil  ${visiblePassword ? "uil-eye-slash" : "uil-eye"}`
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "password-confirm",
                                children: "Confirm Password"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "btn btn-primary rounded-pill btn-login w-100 mb-2",
                        children: "Regisztr\xe1ci\xf3"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "mb-0",
                children: [
                    "Van m\xe1r fi\xf3kod? ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reuseable_links_NextLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        title: "Bejelentkez\xe9s",
                        href: "/login",
                        className: "hover"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterForm);


/***/ }),

/***/ 82833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const currency = (amount)=>{
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "USD"
    }).format(amount);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currency);


/***/ })

};
;