(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[653],{8273:function(e,t,n){"use strict";n.r(t),n.d(t,{CountUp:function(){return i}});var s=function(){return(s=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=function(){function e(e,t,n){var i=this;this.endVal=t,this.options=n,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){i.startTime||(i.startTime=e);var t=e-i.startTime;i.remaining=i.duration-t,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(t,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(t,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(t/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),t<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(e){var t,n,s,r,a=e<0?"-":"";t=Math.abs(e).toFixed(i.options.decimalPlaces);var o=(t+="").split(".");if(n=o[0],s=o.length>1?i.options.decimal+o[1]:"",i.options.useGrouping){r="";for(var l=0,c=n.length;l<c;++l)0!==l&&l%3==0&&(r=i.options.separator+r),r=n[c-l-1]+r;n=r}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]})),s=s.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]}))),a+i.options.prefix+n+s+i.options.suffix},this.easeOutExpo=function(e,t,n,s){return n*(1-Math.pow(2,-10*e/s))*1024/1023+t},this.options=s(s({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),s=n.top+n.height+window.pageYOffset;s<t&&s>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):window.scrollY>s&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);"INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},57537:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/blocks/about",function(){return n(21359)}])},21359:function(e,t,n){"use strict";n.r(t);var s=n(85893),i=n(95219),r=n(48701),a=n(71686),o=function(e){var t=e.id,n=e.children,i=e.className,a=void 0===i?"":i,o=e.container,l=void 0===o||o,c="import { About".concat(t," } from 'components/blocks/about';\n\n<About").concat(t," />\n");return(0,s.jsxs)("section",{id:"snippet-".concat(t),className:"wrapper bg-light wrapper-border",children:[l&&(0,s.jsx)("div",{className:"container pt-15 pt-md-17 ".concat(a),children:n}),!l&&(0,s.jsx)("div",{className:a,children:n}),(0,s.jsx)("div",{className:"container pb-15 pb-md-17",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("div",{className:"card-footer border-0 position-relative",style:{zIndex:3},children:(0,s.jsx)("a",{className:"collapse-link collapsed stretched-link","data-bs-toggle":"collapse",href:"#collapse-snippet-".concat(t),children:"View example's code"})}),(0,s.jsx)("div",{id:"collapse-snippet-".concat(t),className:"card-footer bg-dark p-0 accordion-collapse collapse",children:(0,s.jsx)("div",{className:"code-wrapper",children:(0,s.jsx)("div",{className:"code-wrapper-inner",children:(0,s.jsx)(r.Z,{language:"jsx",children:c})})})})]})})]})};t.default=function(){return(0,s.jsxs)(i.Z,{title:"About",children:[(0,s.jsx)(o,{id:1,className:"pb-13 pb-md-15 mb-lg-n22 mb-xl-n24",children:(0,s.jsx)(a._M,{})}),(0,s.jsx)(o,{id:2,className:"pb-13 pb-md-15 mb-n14 mb-md-n17 mb-lg-n19",children:(0,s.jsx)(a.fL,{})}),(0,s.jsx)(o,{id:3,className:"pb-13 pb-md-15",children:(0,s.jsx)(a.Xw,{})}),(0,s.jsx)(o,{id:4,className:"pb-13 pb-md-15",children:(0,s.jsx)(a._n,{})}),(0,s.jsx)(o,{id:5,className:"pb-13 pb-md-15",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)(a.sw,{})})}),(0,s.jsx)(o,{id:6,className:"pb-13 pb-md-15 mb-n14 mb-md-n17",children:(0,s.jsx)(a.UH,{})}),(0,s.jsx)(o,{id:7,className:"pb-13 pb-md-15 mb-n15 mb-md-n18",children:(0,s.jsx)(a.Ds,{})}),(0,s.jsx)(o,{id:8,className:"pb-13 pb-md-15 mb-n15 mb-md-n18",children:(0,s.jsx)(a.ep,{})}),(0,s.jsx)(o,{id:9,className:"pb-13 pb-md-15 mb-n14 mb-md-n18",children:(0,s.jsx)(a.Wx,{})}),(0,s.jsx)(o,{id:10,className:"pb-13 pb-md-15 mb-n14 mb-md-n18",children:(0,s.jsx)(a.wf,{})}),(0,s.jsx)(o,{id:11,className:"pb-13 pb-md-15 mb-n14 mb-md-n18",children:(0,s.jsx)(a.K9,{})}),(0,s.jsx)(o,{id:12,className:"pb-13 pb-md-15 mb-n14 mb-md-n17",children:(0,s.jsx)(a.M4,{})}),(0,s.jsx)(o,{id:13,className:"pb-13 pb-md-15 mb-n14 mb-md-n18",children:(0,s.jsx)(a.aP,{})}),(0,s.jsx)(o,{id:14,className:"pb-13 pb-md-15",children:(0,s.jsx)(a.ml,{})}),(0,s.jsx)(o,{id:15,className:"pb-13 pb-md-15",children:(0,s.jsx)(a.EY,{})}),(0,s.jsx)(o,{id:16,className:"pb-13 pb-md-15 mb-n14 mb-md-n16",children:(0,s.jsx)(a.fJ,{})}),(0,s.jsx)(o,{id:17,className:"pb-13 pb-md-15 mb-n15 mb-md-n18",children:(0,s.jsx)(a.LH,{})}),(0,s.jsx)(o,{id:18,className:"pb-13 pb-md-15",children:(0,s.jsx)(a.Nw,{})}),(0,s.jsx)(o,{id:19,className:"pb-13 pb-md-15 mb-n14 mb-md-n18",children:(0,s.jsx)(a.YL,{})}),(0,s.jsx)(o,{id:20,container:!1,className:"container pb-13 pb-md-15",children:(0,s.jsx)(a.fX,{})}),(0,s.jsx)(o,{id:21,className:"pb-13 pb-md-15 mb-n15 mb-md-n17",children:(0,s.jsx)(a.D,{})}),(0,s.jsx)(o,{id:22,className:"pb-13 pb-md-15",container:!1,children:(0,s.jsx)(a.Lx,{})}),(0,s.jsx)(o,{id:23,className:"pb-13 pb-md-15",children:(0,s.jsx)(a.WO,{})}),(0,s.jsx)(o,{id:24,container:!1,children:(0,s.jsx)(a.K7,{})}),(0,s.jsx)(o,{id:25,className:"pb-n14 pb-md-n16 pb-13 pb-md-15",container:!1,children:(0,s.jsx)(a.Cw,{})}),(0,s.jsx)(o,{id:26,className:"pb-13 pb-md-15",children:(0,s.jsx)(a.a7,{})}),(0,s.jsx)(o,{id:27,className:"pb-13 pb-md-15",children:(0,s.jsx)(a.av,{})}),(0,s.jsx)(o,{id:28,className:"pb-n12 pb-md-n14",children:(0,s.jsx)(a.av,{})})]})}},24924:function(e,t,n){"use strict";var s=n(85893),i=n(67294);t.Z=function(){var e=(0,i.useRef)(null),t=(0,i.useRef)(null);return(0,i.useEffect)((function(){if(t.current&&e.current){var n=t.current,s=e.current,i=n.getTotalLength();n.style.transition=n.style.transition="none",n.style.strokeDasharray=i+" "+i,n.style.strokeDashoffset=i.toString(),n.getBoundingClientRect(),n.style.transition=n.style.transition="stroke-dashoffset 10ms linear",window.addEventListener("scroll",(function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight,r=i-e*i/t;n.style.strokeDashoffset=r.toString(),(document.body.scrollTop||document.documentElement.scrollTop)>=50?s.classList.add("active-progress"):s.classList.remove("active-progress")})),s.addEventListener("click",(function(e){e.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"})}))}}),[]),(0,s.jsx)("div",{className:"progress-wrap",ref:e,children:(0,s.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,s.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98",ref:t})})})}},95219:function(e,t,n){"use strict";var s=n(85893),i=n(67294),r=n(11163),a=n(22334),o=n(24924),l=n(99472),c=[{id:1,title:"About",url:"/docs/blocks/about"},{id:2,title:"Blog",url:"/docs/blocks/blog"},{id:3,title:"Call to Action",url:"/docs/blocks/call-to-action"},{id:4,title:"Clients",url:"/docs/blocks/clients"},{id:5,title:"Contact",url:"/docs/blocks/contact"},{id:6,title:"Facts",url:"/docs/blocks/facts"},{id:7,title:"FAQ",url:"/docs/blocks/faq"},{id:8,title:"Features",url:"/docs/blocks/features"},{id:9,title:"Footer",url:"/docs/blocks/footer"},{id:10,title:"Hero",url:"/docs/blocks/hero"},{id:12,title:"Navbar",url:"/docs/blocks/navbar"},{id:13,title:"Portfolio",url:"/docs/blocks/portfolio"},{id:14,title:"Pricing",url:"/docs/blocks/pricing"},{id:15,title:"Process",url:"/docs/blocks/process"},{id:16,title:"Team",url:"/docs/blocks/team"},{id:17,title:"Testimonials",url:"/docs/blocks/testimonials"}];t.Z=function(e){var t=e.title,n=e.children,u=(0,r.useRouter)().pathname;return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)(o.Z,{}),(0,s.jsxs)("div",{className:"content-wrapper",children:[(0,s.jsx)("header",{className:"wrapper bg-soft-primary",children:(0,s.jsx)(a.w,{language:!0,button:(0,s.jsx)(l.Z,{title:"Contact",href:"#",className:"btn btn-sm btn-primary rounded-pill"})})}),(0,s.jsx)("section",{className:"wrapper bg-soft-primary",children:(0,s.jsx)("div",{className:"container pt-10 pb-12 pt-md-14 pb-md-16 text-center",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col-md-9 col-lg-7 col-xl-5 mx-auto",children:[(0,s.jsxs)("h1",{className:"display-1 mb-3",children:["Blocks - ",t]}),(0,s.jsx)("p",{className:"lead px-xxl-10",children:"Copy any custom block snippet below and paste it on your page to build your website easily."})]})})})}),(0,s.jsx)("section",{className:"wrapper bg-light wrapper-border",children:(0,s.jsxs)("div",{className:"container py-11",children:[(0,s.jsx)("h2",{className:"h5",children:"Filter Blocks:"}),(0,s.jsx)("ul",{className:"list-inline mb-0",children:c.map((function(e){var t=e.id,n=e.title,i=e.url;return(0,s.jsx)("li",{className:"list-inline-item me-1 mb-2",children:(0,s.jsx)(l.Z,{href:i,title:n,className:"btn btn-soft-ash btn-sm rounded ".concat(u===i?"text-primary pe-none":"")})},t)}))})]})}),n]}),(0,s.jsx)("section",{className:"wrapper bg-dark text-white",children:(0,s.jsxs)("div",{className:"container pt-14 pt-md-16 text-center",children:[(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto",children:[(0,s.jsx)("h2",{className:"display-3 text-white mt-3 mb-3 px-lg-8",children:"Think unique and be creative. Make a difference with Sandbox."}),(0,s.jsx)("p",{className:"lead fs-lg mb-6",children:"Everything you need to create your next unique and professional website, including impressive and ready-made blocks and pages."}),(0,s.jsx)("a",{href:"#",target:"_blank",className:"btn btn-lg btn-white rounded-pill mb-10",rel:"noreferrer",children:"Buy Sandbox"})]})}),(0,s.jsx)("img",{className:"img-fluid",src:"/img/demos/f1.png",srcSet:"/img/demos/f1@2x.png 2x",alt:"demo"})]})})]})}},48701:function(e,t,n){"use strict";var s=n(85893),i=n(5227),r=n(84283);t.Z=function(e){var t=e.children,n=e.language;return(0,s.jsx)(i.Z,{wrapLines:!0,wrapLongLines:!0,style:r.cL,language:n,customStyle:{padding:"2rem",margin:0,borderRadius:"0 0 .4rem .4rem"},children:t})}},50220:function(e,t,n){"use strict";var s=n(85893);t.Z=function(e){var t=e.icon,n=e.className;return(0,s.jsx)("div",{className:n,children:(0,s.jsx)("i",{className:"uil ".concat(t)})})}},17857:function(e,t,n){"use strict";var s=n(67294),i=n(8273);function r(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var a=r(s);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?s.useLayoutEffect:s.useEffect;function m(e){var t=s.useRef(e);return p((function(){t.current=e})),s.useCallback((function(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return t.current.apply(void 0,n)}),[])}var f=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],h={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},b=function(e){var t=s.useMemo((function(){return l(l({},h),e)}),[e]),n=t.ref,r=t.startOnMount,a=t.enableReinitialize,o=t.delay,c=t.onEnd,u=t.onStart,p=t.onPauseResume,b=t.onReset,x=t.onUpdate,g=d(t,f),j=s.useRef(),v=s.useRef(),y=s.useRef(!1),w=m((function(){return function(e,t){var n=t.decimal,s=t.decimals,r=t.duration,a=t.easingFn,o=t.end,l=t.formattingFn,c=t.numerals,u=t.prefix,d=t.separator,p=t.start,m=t.suffix,f=t.useEasing,h=t.enableScrollSpy,b=t.scrollSpyDelay;return new i.CountUp(e,o,{startVal:p,duration:r,decimal:n,decimalPlaces:s,easingFn:a,formattingFn:l,numerals:c,separator:d,prefix:u,suffix:m,useEasing:f,useGrouping:!!d,enableScrollSpy:h,scrollSpyDelay:b})}("string"===typeof n?n:n.current,g)})),N=m((function(e){var t=j.current;if(t&&!e)return t;var n=w();return j.current=n,n})),V=m((function(){var e=function(){return N(!0).start((function(){null===c||void 0===c||c({pauseResume:E,reset:k,start:F,update:O})}))};o&&o>0?v.current=setTimeout(e,1e3*o):e(),null===u||void 0===u||u({pauseResume:E,reset:k,update:O})})),E=m((function(){N().pauseResume(),null===p||void 0===p||p({reset:k,start:F,update:O})})),k=m((function(){v.current&&clearTimeout(v.current),N().reset(),null===b||void 0===b||b({pauseResume:E,start:F,update:O})})),O=m((function(e){N().update(e),null===x||void 0===x||x({pauseResume:E,reset:k,start:F})})),F=m((function(){k(),V()})),S=m((function(e){r&&(e&&k(),V())}));return s.useEffect((function(){y.current?a&&S(!0):(y.current=!0,S())}),[a,y,S,o,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),s.useEffect((function(){return function(){k()}}),[k]),{start:F,pauseResume:E,reset:k,update:O,getCountUp:N}},x=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,n=e.redraw,i=e.containerProps,r=e.children,o=e.style,c=d(e,x),p=a.default.useRef(null),f=a.default.useRef(!1),h=b(l(l({},c),{},{ref:p,startOnMount:"function"!==typeof r||0===e.delay,enableReinitialize:!1})),g=h.start,j=h.reset,v=h.update,y=h.pauseResume,w=h.getCountUp,N=m((function(){g()})),V=m((function(t){e.preserveValue||j(),v(t)})),E=m((function(){"function"!==typeof e.children||p.current instanceof Element?w():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));s.useEffect((function(){E()}),[E]),s.useEffect((function(){f.current&&V(e.end)}),[e.end,V]);var k=n&&e;return s.useEffect((function(){n&&f.current&&N()}),[N,n,k]),s.useEffect((function(){!n&&f.current&&N()}),[N,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),s.useEffect((function(){f.current=!0}),[]),"function"===typeof r?r({countUpRef:p,start:g,reset:j,update:v,pauseResume:y,getCountUp:w}):a.default.createElement("span",u({className:t,ref:p,style:o},i),e.start?w().formattingFn(e.start):"")}}},function(e){e.O(0,[7410,9369,7727,3106,2334,7492,5344,4823,5553,3182,5029,1686,9774,2888,179],(function(){return t=57537,e(e.s=t);var t}));var t=e.O();_N_E=t}]);