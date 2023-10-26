"use strict";
exports.id = 6108;
exports.ids = [6108];
exports.modules = {

/***/ 96108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Il": () => (/* reexport */ product_cards_ProductCard),
  "zI": () => (/* reexport */ product_cards_ProductCard2)
});

// UNUSED EXPORTS: ProductCard1

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ./src/utils/currency.ts
var currency = __webpack_require__(82833);
// EXTERNAL MODULE: ./src/components/reuseable/links/NextLink.tsx
var links_NextLink = __webpack_require__(99472);
;// CONCATENATED MODULE: ./src/components/reuseable/product-cards/ProductCard.tsx



// =========================================
const ProductCard = (props)=>{
    const { id , manufacturer , canbeordered , deliveryday , image , imageUrl , title , new: newProduct , sale , category , salePrice , regularPrice , className =""  } = props;
    const saveProductToLocalStorage = ()=>{
    // Construct the product object with the details you want to save
    /*const productToSave = {
      id,
      image,
      title,
      category,
      salePrice,
      regularPrice,
      imageUrl,
      manufacturer,
      canbeordered,
      deliveryday,
    };

    // Convert the product object to JSON
    const productJSON = JSON.stringify(productToSave);*/ // Save the JSON string to localStorage with a unique key (e.g., using the product's ID)
    // localStorage.setItem(`product_${id}`);
    };
    const badge = (title, color)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("span", {
            style: {
                top: "1rem",
                left: "1rem"
            },
            className: `avatar ${color} text-white w-10 h-10 position-absolute text-uppercase fs-13`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: title
            })
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `project item ${className}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "project_item productcard",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: `/products/${id}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                        className: "mb-6 position-relative overflow-hidden aspect-ratio-square",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: imageUrl ? imageUrl : `/img/photos/${image}.jpg`,
                            alt: ""
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "post-header",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "post-title h3 fs-18",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(links_NextLink/* default */.Z, {
                                title: title,
                                href: `/products/${id}`,
                                className: "link-dark"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "price_cart row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "price fs-18",
                                        children: salePrice && salePrice > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("del", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "amount",
                                                        children: (0,currency/* default */.Z)(salePrice)
                                                    })
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("ins", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "amount",
                                                        children: regularPrice
                                                    })
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "amount",
                                            children: [
                                                regularPrice,
                                                " Ft"
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col text-end shopping_basket",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: " button",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "basket_icon text-center icons",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "uil uil-shopping-basket icon-default"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "uil uil-plus icon-hover"
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
        })
    });
};
/* harmony default export */ const product_cards_ProductCard = (ProductCard);

;// CONCATENATED MODULE: ./src/components/reuseable/product-cards/ProductCard1.tsx


// =========================================
const ProductCard1_ProductCard = (props)=>{
    const { image , imageUrl , title , new: newProduct , sale , category , salePrice , regularPrice , rating , className =""  } = props;
    const badge = (title, color)=>{
        return /*#__PURE__*/ _jsx("span", {
            style: {
                top: "1rem",
                left: "1rem"
            },
            className: `avatar ${color} text-white w-10 h-10 position-absolute text-uppercase fs-13`,
            children: /*#__PURE__*/ _jsx("span", {
                children: title
            })
        });
    };
    return /*#__PURE__*/ _jsxs("div", {
        className: `project item ${className}`,
        children: [
            /*#__PURE__*/ _jsx("figure", {
                className: "rounded mb-1 position-relative overflow-hidden aspect-ratio-square",
                children: /*#__PURE__*/ _jsx("img", {
                    src: imageUrl ? imageUrl : `/img/photos/${image}.jpg`,
                    alt: ""
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "post-header",
                children: /*#__PURE__*/ _jsx("h2", {
                    className: "post-title h3 fs-14",
                    children: /*#__PURE__*/ _jsx(NextLink, {
                        title: title,
                        href: "#",
                        className: "link-dark"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const ProductCard1 = ((/* unused pure expression or super */ null && (ProductCard1_ProductCard)));

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/reuseable/product-cards/ProductCard2.tsx





// ======================================================================
const ProductCard2 = (props)=>{
    const { size , image , title , color , price  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "shopping-cart-item d-flex justify-content-between mb-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-flex flex-row d-flex align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                        className: "rounded w-17",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    width: 90,
                                    height: 100,
                                    src: image,
                                    alt: "product"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-100 ms-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "post-title h6 lh-xs mb-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(links_NextLink/* default */.Z, {
                                    title: title,
                                    href: "#",
                                    className: "link-dark"
                                })
                            }),
                            color && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "small",
                                children: [
                                    "Color: ",
                                    color
                                ]
                            }),
                            size && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "small",
                                children: [
                                    "Size: ",
                                    size
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ms-2 d-flex align-items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "price fs-sm",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "amount",
                        children: (0,currency/* default */.Z)(price)
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const product_cards_ProductCard2 = (ProductCard2);

;// CONCATENATED MODULE: ./src/components/reuseable/product-cards/index.ts






/***/ })

};
;