(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9190],{8273:function(e,t,n){"use strict";n.r(t),n.d(t,{CountUp:function(){return a}});var s=function(){return(s=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=function(){function e(e,t,n){var a=this;this.endVal=t,this.options=n,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){a.startTime||(a.startTime=e);var t=e-a.startTime;a.remaining=a.duration-t,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(t,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(t,a.startVal,a.endVal-a.startVal,a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(t/a.duration);var n=a.countDown?a.frameVal<a.endVal:a.frameVal>a.endVal;a.frameVal=n?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),t<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.callback&&a.callback()},this.formatNumber=function(e){var t,n,s,r,i=e<0?"-":"";t=Math.abs(e).toFixed(a.options.decimalPlaces);var l=(t+="").split(".");if(n=l[0],s=l.length>1?a.options.decimal+l[1]:"",a.options.useGrouping){r="";for(var o=0,c=n.length;o<c;++o)0!==o&&o%3==0&&(r=a.options.separator+r),r=n[c-o-1]+r;n=r}return a.options.numerals&&a.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return a.options.numerals[+e]})),s=s.replace(/[0-9]/g,(function(e){return a.options.numerals[+e]}))),i+a.options.prefix+n+s+a.options.suffix},this.easeOutExpo=function(e,t,n,s){return n*(1-Math.pow(2,-10*e/s))*1024/1023+t},this.options=s(s({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return a.handleScroll(a)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),s=n.top+n.height+window.pageYOffset;s<t&&s>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):window.scrollY>s&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);"INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},61742:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return n(55744)}])},55744:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var s=n(41799),a=n(85893),r=n(67294),i=n(82833),l=n(22334),o=n(44807),c=n(43458),u=n(3366),d=n(24924),h=n(41664),m=n.n(h),p=n(25675),f=n.n(p),g=n(99472),v=function(e){e.id;var t=e.title,n=e.image,s=e.size,l=e.color,o=e.quantity,c=e.salePrice,u=e.regularPrice,d=+o*(c||u);return(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{className:"option text-start d-flex flex-row align-items-center ps-0",children:[(0,a.jsx)("figure",{className:"rounded w-17",children:(0,a.jsx)(m(),{href:"#",children:(0,a.jsx)("a",{children:(0,a.jsx)(f(),{width:90,height:100,src:n,alt:"product"})})})}),(0,a.jsxs)("div",{className:"w-100 ms-4",children:[(0,a.jsx)("h3",{className:"post-title h6 lh-xs mb-1",children:(0,a.jsx)(g.Z,{title:t,href:"#",className:"link-dark"})}),l&&(0,a.jsxs)("div",{className:"small",children:["Color: ",l]}),s&&(0,a.jsxs)("div",{className:"small",children:["Size: ",s]})]})]}),(0,a.jsx)("td",{children:(0,a.jsx)("p",{className:"price",children:c?(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("del",{children:(0,a.jsx)("span",{className:"amount",children:(0,i.Z)(u)})})," ",(0,a.jsx)("ins",{children:(0,a.jsx)("span",{className:"amount",children:(0,i.Z)(c)})})]}):(0,a.jsx)("span",{className:"amount",children:(0,i.Z)(u)})})}),(0,a.jsx)("td",{children:(0,a.jsx)("div",{className:"form-select-wrapper",children:(0,a.jsx)("select",{className:"form-select form-select-sm mx-auto",defaultValue:1,children:[1,2,3,4,5].map((function(e){return(0,a.jsx)("option",{value:e,children:e},e)}))})})}),(0,a.jsx)("td",{children:(0,a.jsx)("p",{className:"price",children:(0,a.jsx)("span",{className:"amount",children:(0,i.Z)(d)})})}),(0,a.jsx)("td",{className:"pe-0",children:(0,a.jsx)(g.Z,{title:(0,a.jsx)("i",{className:"uil uil-trash-alt"}),href:"#",className:"link-dark"})})]})},x=[{id:1,title:"Home",url:"/"},{id:2,title:"Shop",url:"/shop"},{id:3,title:"Cart",url:"/cart"}],j=[{id:1,title:"Product"},{id:2,title:"Price"},{id:3,title:"Quantity"},{id:4,title:"Total"}],y=[{size:43,quantity:1,salePrice:45,color:"Black",regularPrice:55,title:"Nike Air Sneakers",image:"/img/photos/sth1.jpg",id:"62f3bac114a90b9c05bce066"},{size:43,quantity:1,salePrice:0,color:"Misc",regularPrice:55,title:"Headphones",image:"/img/photos/sth2.jpg",id:"62f3bad7afb837063e6e3de6"},{quantity:1,salePrice:0,color:"Black",regularPrice:55,title:"Apple Watch",image:"/img/photos/sth3.jpg",id:"62f3bb3a8ee7c0fd2d072f52"}],b=[{name:"Subtotal",value:{amount:135.99,parentClass:"pe-0 text-end",childClass:"price"}},{name:"Discount",value:{amount:6.8,parentClass:"pe-0 text-end",childClass:"price text-red"}},{name:"Shipping",value:{amount:10,parentClass:"pe-0 text-end",childClass:"price"}},{name:"Grand Total",value:{amount:152.79,parentClass:"pe-0 text-end",childClass:"price text-dark fw-bold"}}],N=function(){return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("div",{children:(0,a.jsx)(d.Z,{})}),(0,a.jsx)("header",{className:"wrapper bg-light",children:(0,a.jsx)(l.w,{search:!0,cart:!0,navClassName:"navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"})}),(0,a.jsxs)("main",{className:"content-wrapper",children:[(0,a.jsx)("section",{className:"wrapper bg-gray",children:(0,a.jsx)("div",{className:"container py-3 py-md-5",children:(0,a.jsx)(u.Z,{data:x,className:"mb-0"})})}),(0,a.jsx)("div",{className:"wrapper bg-light",children:(0,a.jsx)("div",{className:"container pt-12 pt-md-14 pb-14 pb-md-16",children:(0,a.jsxs)("div",{className:"row gx-md-8 gx-xl-12 gy-12",children:[(0,a.jsxs)("div",{className:"col-lg-8",children:[(0,a.jsx)("div",{className:"table-responsive",children:(0,a.jsxs)("table",{className:"table text-center shopping-cart",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[j.map((function(e){var t=e.id,n=e.title,s=1===t;return(0,a.jsx)("th",{className:s?"ps-0 w-25":"",children:(0,a.jsx)("div",{className:"h4 mb-0 ".concat(s?"text-start":""),children:n})},t)})),(0,a.jsx)("th",{})]})}),(0,a.jsx)("tbody",{children:y.map((function(e){return(0,a.jsx)(v,(0,s.Z)({},e),e.id)}))})]})}),(0,a.jsxs)("div",{className:"row mt-0 gy-4",children:[(0,a.jsx)("div",{className:"col-md-8 col-lg-7",children:(0,a.jsxs)("div",{className:"form-floating input-group",children:[(0,a.jsx)("input",{type:"url",className:"form-control",placeholder:"Enter promo code",id:"seo-check"}),(0,a.jsx)("label",{htmlFor:"seo-check",children:"Enter promo code"}),(0,a.jsx)("button",{className:"btn btn-primary",type:"button",children:"Apply"})]})}),(0,a.jsx)("div",{className:"col-md-4 col-lg-5 ms-auto ms-lg-0 text-md-end",children:(0,a.jsx)("button",{className:"btn btn-primary rounded",children:"Update Cart"})})]})]}),(0,a.jsxs)("div",{className:"col-lg-4",children:[(0,a.jsx)("h3",{className:"mb-4",children:"Order Summary"}),(0,a.jsx)("div",{className:"table-responsive",children:(0,a.jsx)("table",{className:"table table-order",children:(0,a.jsx)("tbody",{children:b.map((function(e){var t=e.name,n=e.value;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"ps-0",children:(0,a.jsx)("strong",{className:"text-dark",children:t})}),(0,a.jsx)("td",{className:n.parentClass,children:(0,a.jsxs)("p",{className:n.childClass,children:["Discount"===t&&"-",(0,i.Z)(n.amount)]})})]},t)}))})})}),(0,a.jsx)("button",{className:"btn btn-primary rounded w-100 mt-4",children:"Proceed to Checkout"})]})]})})}),(0,a.jsx)(c.Z,{})]}),(0,a.jsx)(o.M$,{})]})}},24924:function(e,t,n){"use strict";var s=n(85893),a=n(67294);t.Z=function(){var e=(0,a.useRef)(null),t=(0,a.useRef)(null);return(0,a.useEffect)((function(){if(t.current&&e.current){var n=t.current,s=e.current,a=n.getTotalLength();n.style.transition=n.style.transition="none",n.style.strokeDasharray=a+" "+a,n.style.strokeDashoffset=a.toString(),n.getBoundingClientRect(),n.style.transition=n.style.transition="stroke-dashoffset 10ms linear",window.addEventListener("scroll",(function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight,r=a-e*a/t;n.style.strokeDashoffset=r.toString(),(document.body.scrollTop||document.documentElement.scrollTop)>=50?s.classList.add("active-progress"):s.classList.remove("active-progress")})),s.addEventListener("click",(function(e){e.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"})}))}}),[]),(0,s.jsx)("div",{className:"progress-wrap",ref:e,children:(0,s.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,s.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98",ref:t})})})}},43458:function(e,t,n){"use strict";var s=n(85893),a=n(24424),r=n(28319),i=[{id:1,Icon:n(34820).Z,title:"Ingyenes kisz\xe1ll\xedt\xe1s",description:"30.000 forint feletti v\xe1s\xe1rl\xe1s eset\xe9n ingyensen kisz\xe1ll\xedtjuk a rendel\xe9sed."},{id:2,Icon:r.Z,title:"30 napos visszat\xe9r\xedt\xe9s",description:"30 napon bel\xfcli v\xe1s\xe1rl\xe1st ingyenesen visszat\xe9r\xedt\xfcnk."},{id:3,Icon:a.Z,title:"2 \xe9v garancia",description:"Minden term\xe9kre 2 \xe9v garanci\xe1t v\xe1llalunk."}];t.Z=function(){return(0,s.jsx)("section",{className:"wrapper bg-gray",children:(0,s.jsx)("div",{className:"container py-12 py-md-14",children:(0,s.jsx)("div",{className:"row gx-lg-8 gx-xl-12 gy-8",children:i.map((function(e){var t=e.id,n=e.Icon,a=e.title,r=e.description;return(0,s.jsx)("div",{className:"col-md-6 col-lg-4",children:(0,s.jsxs)("div",{className:"d-flex flex-row",children:[(0,s.jsx)("div",{children:(0,s.jsx)(n,{})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"mb-1",children:a}),(0,s.jsx)("p",{className:"mb-0",children:r})]})]})},t)}))})})})}},3366:function(e,t,n){"use strict";var s=n(85893),a=n(99472),r=[{id:1,title:"Home",url:"/"},{id:2,title:"Shop",url:"/shop"}];t.Z=function(e){var t=e.data,n=void 0===t?r:t,i=e.className,l=void 0===i?"":i;return(0,s.jsx)("nav",{className:"d-inline-block","aria-label":"breadcrumb",children:(0,s.jsx)("ol",{className:"breadcrumb ".concat(l),children:n.map((function(e,t){var r=e.id,i=e.title,l=e.url;return n.length-1===t?(0,s.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:i},r):(0,s.jsx)("li",{className:"breadcrumb-item",children:(0,s.jsx)(a.Z,{title:i,href:l})},r)}))})})}},28319:function(e,t,n){"use strict";var s=n(85893);t.Z=function(e){var t=e.className;return(0,s.jsxs)("svg",{viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",className:"svg-inject icon-svg solid-mono ".concat(t||"icon-svg-sm text-navy me-4"),children:[(0,s.jsx)("path",{className:"fill-secondary",d:"M216 101.33H82.67a8.06 8.06 0 00-8 8v75.2a41.94 41.94 0 0120.91 18.13H216a8.07 8.07 0 008-8v-85.33a8.06 8.06 0 00-8-8zm-21.33 69.34h-32a8 8 0 010-16h32a8 8 0 010 16zM173.33 0H82.66a8 8 0 00-8 8v74.67a8 8 0 008 8h90.67a8 8 0 008-8V8a8 8 0 00-8-8zM152 74.67h-21.33a8 8 0 110-16H152a8 8 0 010 16z"}),(0,s.jsx)("path",{className:"fill-primary",d:"M252.43 237.38l-14.33-12.79a31.8 31.8 0 00-24.35-11.25H88.7A31.94 31.94 0 0064 192.51V21.76A21.38 21.38 0 0042.91.43L10.82 0h-.15a10.67 10.67 0 00-.16 21.33l32.15.43v174.66a31.91 31.91 0 1046 38.25h125.09a10.63 10.63 0 018.33 4 11.38 11.38 0 001.22 1.33l14.93 13.33a10.69 10.69 0 007.1 2.7 10.67 10.67 0 007.1-18.62z"})]})}},34820:function(e,t,n){"use strict";var s=n(85893);t.Z=function(e){var t=e.className;return(0,s.jsxs)("svg",{viewBox:"0 0 256 202.66",xmlns:"http://www.w3.org/2000/svg",className:"svg-inject icon-svg solid-mono ".concat(t||"icon-svg-sm text-navy me-4"),children:[(0,s.jsx)("path",{className:"fill-primary",d:"M235.33 170.66h-13a10.68 10.68 0 110-21.35h12.33V115l-29.94-40.65-34.05.29v74.69H176a10.67 10.67 0 110 21.33h-16A10.68 10.68 0 01149.33 160V73.58A20.49 20.49 0 01170 53.31h35.12a20.88 20.88 0 0116.82 8.47l30.19 41.44A19.87 19.87 0 01256 115v35.4a20.48 20.48 0 01-20.67 20.26z"}),(0,s.jsx)("path",{className:"fill-primary",d:"M160 170.66H89.81a10.68 10.68 0 010-21.35h59.52V20.59l-128.71.74.71 128.72 19.67-.72a10.67 10.67 0 110 21.34H20.62A20.66 20.66 0 010 150.05V20.62A20.64 20.64 0 0120.62 0h129.43a20.64 20.64 0 0120.62 20.62V160A10.67 10.67 0 01160 170.66z"}),(0,s.jsx)("path",{className:"fill-primary",d:"M200 202.66a32 32 0 1132-32 32 32 0 01-32 32zm-136 0a32 32 0 1132-32 32 32 0 01-32 32z"}),(0,s.jsx)("path",{className:"fill-secondary",d:"M41.47 89.33A9.29 9.29 0 0136 87.52 9.84 9.84 0 0133.76 74l23.71-33.94a9.35 9.35 0 0113.22-2.25 9.85 9.85 0 012.21 13.52L49.18 85.26a9.35 9.35 0 01-7.71 4.07zm64 32a9.29 9.29 0 01-5.5-1.81A9.86 9.86 0 0197.76 106l23.71-33.93a9.36 9.36 0 0113.22-2.26 9.87 9.87 0 012.21 13.54l-23.72 33.93a9.35 9.35 0 01-7.71 4.07zm-42.3 0a9.65 9.65 0 01-5.6-1.79 10.17 10.17 0 01-2.5-14l44.31-65.22a9.7 9.7 0 0113.69-2.54 10.16 10.16 0 012.5 14L71.26 117a9.73 9.73 0 01-8.09 4.33z"})]})}},24424:function(e,t,n){"use strict";var s=n(85893);t.Z=function(e){var t=e.className;return(0,s.jsxs)("svg",{viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",className:"svg-inject icon-svg solid-mono ".concat(t||"icon-svg-sm text-navy me-4"),children:[(0,s.jsx)("path",{className:"fill-secondary",d:"M186.67 117.33A69.34 69.34 0 10256 186.68a69.43 69.43 0 00-69.33-69.35zm37.34 55L186.68 215a10.65 10.65 0 01-7.68 3.63h-.35a10.67 10.67 0 01-7.53-3.12l-21.33-21.33a10.67 10.67 0 0115.09-15.09l13.26 13.27L208 158.3a10.67 10.67 0 1116 14.07z"}),(0,s.jsx)("path",{className:"fill-primary",d:"M177.92 32.32L92.58.32a5.88 5.88 0 00-3.84 0l-85.35 32a5.36 5.36 0 00-3.39 5v68.59c0 97.28 88.64 117.76 89.5 118a6.28 6.28 0 002.34 0 73.48 73.48 0 0010.77-3.41A89.34 89.34 0 0196 186.68a90.78 90.78 0 0185.34-90.56V37.35a5.38 5.38 0 00-3.42-5z"})]})}},17857:function(e,t,n){"use strict";var s=n(67294),a=n(8273);function r(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var i=r(s);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?s.useLayoutEffect:s.useEffect;function m(e){var t=s.useRef(e);return h((function(){t.current=e})),s.useCallback((function(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return t.current.apply(void 0,n)}),[])}var p=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],f={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},g=function(e){var t=s.useMemo((function(){return o(o({},f),e)}),[e]),n=t.ref,r=t.startOnMount,i=t.enableReinitialize,l=t.delay,c=t.onEnd,u=t.onStart,h=t.onPauseResume,g=t.onReset,v=t.onUpdate,x=d(t,p),j=s.useRef(),y=s.useRef(),b=s.useRef(!1),N=m((function(){return function(e,t){var n=t.decimal,s=t.decimals,r=t.duration,i=t.easingFn,l=t.end,o=t.formattingFn,c=t.numerals,u=t.prefix,d=t.separator,h=t.start,m=t.suffix,p=t.useEasing,f=t.enableScrollSpy,g=t.scrollSpyDelay;return new a.CountUp(e,l,{startVal:h,duration:r,decimal:n,decimalPlaces:s,easingFn:i,formattingFn:o,numerals:c,separator:d,prefix:u,suffix:m,useEasing:p,useGrouping:!!d,enableScrollSpy:f,scrollSpyDelay:g})}("string"===typeof n?n:n.current,x)})),w=m((function(e){var t=j.current;if(t&&!e)return t;var n=N();return j.current=n,n})),V=m((function(){var e=function(){return w(!0).start((function(){null===c||void 0===c||c({pauseResume:E,reset:O,start:F,update:S})}))};l&&l>0?y.current=setTimeout(e,1e3*l):e(),null===u||void 0===u||u({pauseResume:E,reset:O,update:S})})),E=m((function(){w().pauseResume(),null===h||void 0===h||h({reset:O,start:F,update:S})})),O=m((function(){y.current&&clearTimeout(y.current),w().reset(),null===g||void 0===g||g({pauseResume:E,start:F,update:S})})),S=m((function(e){w().update(e),null===v||void 0===v||v({pauseResume:E,reset:O,start:F})})),F=m((function(){O(),V()})),P=m((function(e){r&&(e&&O(),V())}));return s.useEffect((function(){b.current?i&&P(!0):(b.current=!0,P())}),[i,b,P,l,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),s.useEffect((function(){return function(){O()}}),[O]),{start:F,pauseResume:E,reset:O,update:S,getCountUp:w}},v=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,n=e.redraw,a=e.containerProps,r=e.children,l=e.style,c=d(e,v),h=i.default.useRef(null),p=i.default.useRef(!1),f=g(o(o({},c),{},{ref:h,startOnMount:"function"!==typeof r||0===e.delay,enableReinitialize:!1})),x=f.start,j=f.reset,y=f.update,b=f.pauseResume,N=f.getCountUp,w=m((function(){x()})),V=m((function(t){e.preserveValue||j(),y(t)})),E=m((function(){"function"!==typeof e.children||h.current instanceof Element?N():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));s.useEffect((function(){E()}),[E]),s.useEffect((function(){p.current&&V(e.end)}),[e.end,V]);var O=n&&e;return s.useEffect((function(){n&&p.current&&w()}),[w,n,O]),s.useEffect((function(){!n&&p.current&&w()}),[w,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),s.useEffect((function(){p.current=!0}),[]),"function"===typeof r?r({countUpRef:h,start:x,reset:j,update:y,pauseResume:b,getCountUp:N}):i.default.createElement("span",u({className:t,ref:h,style:l},a),e.start?N().formattingFn(e.start):"")}}},function(e){e.O(0,[7410,2334,7492,1315,4807,9774,2888,179],(function(){return t=61742,e(e.s=t);var t}));var t=e.O();_N_E=t}]);