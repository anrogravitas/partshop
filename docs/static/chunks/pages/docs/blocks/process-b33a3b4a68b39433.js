(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6310],{8273:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return s}});var i=function(){return(i=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},s=function(){function t(t,e,n){var s=this;this.endVal=e,this.options=n,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){s.startTime||(s.startTime=t);var e=t-s.startTime;s.remaining=s.duration-e,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(e,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(e,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(e/s.duration);var n=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=n?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),e<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var e,n,i,r,a=t<0?"-":"";e=Math.abs(t).toFixed(s.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],i=o.length>1?s.options.decimal+o[1]:"",s.options.useGrouping){r="";for(var l=0,c=n.length;l<c;++l)0!==l&&l%3==0&&(r=s.options.separator+r),r=n[c-l-1]+r;n=r}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]})),i=i.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]}))),a+s.options.prefix+n+i+s.options.suffix},this.easeOutExpo=function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e},this.options=i(i({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return s.handleScroll(s)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):window.scrollY>i&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},19845:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/blocks/process",function(){return n(6101)}])},6101:function(t,e,n){"use strict";n.r(e);var i=n(85893),s=n(10346),r=n(95219),a=n(48701),o=function(t){var e=t.id,n=t.children,s="import { Process".concat(e," } from 'components/blocks/process';\n\n<Process").concat(e," />\n");return(0,i.jsxs)("section",{id:"snippet-".concat(e),className:"wrapper bg-light wrapper-border",children:[n,(0,i.jsx)("div",{className:"container pb-15 pb-md-17 position-relative",style:{zIndex:3},children:(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card-footer border-0 position-relative",children:(0,i.jsx)("a",{className:"collapse-link collapsed stretched-link","data-bs-toggle":"collapse",href:"#collapse-snippet-".concat(e),children:"View example's code"})}),(0,i.jsx)("div",{id:"collapse-snippet-".concat(e),className:"card-footer bg-dark p-0 accordion-collapse collapse",children:(0,i.jsx)("div",{className:"code-wrapper",children:(0,i.jsx)("div",{className:"code-wrapper-inner",children:(0,i.jsx)(a.Z,{language:"jsx",children:s})})})})]})})]})};e.default=function(){return(0,i.jsxs)(r.Z,{title:"Pricing",children:[(0,i.jsx)(o,{id:1,children:(0,i.jsx)("div",{className:"container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n18",children:(0,i.jsx)(s.G,{})})}),(0,i.jsx)(o,{id:2,children:(0,i.jsx)("div",{className:"container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n17 mb-lg-n19",children:(0,i.jsx)(s.nZ,{})})}),(0,i.jsx)(o,{id:3,children:(0,i.jsx)("div",{className:"container pt-15 pt-md-17 pb-13 pb-md-15 mb-n16 mb-md-n18",children:(0,i.jsx)(s.Sj,{})})}),(0,i.jsx)(o,{id:4,children:(0,i.jsx)("div",{className:"pt-15 pt-md-17 pb-13 pb-md-15 mt-lg-20 mt-xl-22",children:(0,i.jsx)(s.e5,{})})}),(0,i.jsx)(o,{id:5,children:(0,i.jsx)("div",{className:"container pt-15 pt-md-17 pb-13 pb-md-15 mb-lg-n19 mb-xl-n22",children:(0,i.jsx)(s.J_,{})})}),(0,i.jsx)(o,{id:6,children:(0,i.jsx)("div",{className:"container pt-15 pt-md-17 pb-13 pb-md-15",children:(0,i.jsx)(s.ko,{})})}),(0,i.jsx)(o,{id:7,children:(0,i.jsx)("div",{className:"container pt-15 pt-md-17 pb-13 pb-md-15",children:(0,i.jsx)(s.$T,{})})}),(0,i.jsx)(o,{id:8,children:(0,i.jsx)("div",{className:"container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n16",children:(0,i.jsx)(s.Og,{})})}),(0,i.jsx)(o,{id:9,children:(0,i.jsx)("div",{className:"container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n19",children:(0,i.jsx)(s.Dm,{})})}),(0,i.jsx)(o,{id:10,children:(0,i.jsx)("div",{className:"container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n17",children:(0,i.jsx)(s.Vz,{})})}),(0,i.jsx)(o,{id:11,children:(0,i.jsx)("div",{className:"container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n17",children:(0,i.jsx)(s.kL,{})})}),(0,i.jsx)(o,{id:12,children:(0,i.jsx)("div",{className:"container pt-15 pt-md-17 pb-13 pb-md-15",children:(0,i.jsx)(s.Qx,{})})}),(0,i.jsx)(o,{id:13,children:(0,i.jsx)(s.$3,{})}),(0,i.jsx)(o,{id:14,children:(0,i.jsx)("div",{className:"container pt-15 pt-md-17",children:(0,i.jsx)(s.IC,{})})}),(0,i.jsx)(o,{id:15,children:(0,i.jsx)("div",{className:"container pt-15 pt-md-17 pb-13 pb-md-15 mb-n15 mb-md-n17",children:(0,i.jsx)(s.Fd,{})})}),(0,i.jsx)(o,{id:16,children:(0,i.jsx)("div",{className:"container pt-13 pt-md-15",children:(0,i.jsx)(s.zk,{})})}),(0,i.jsx)(o,{id:17,children:(0,i.jsx)("div",{className:" pb-13 pb-md-15",children:(0,i.jsx)(s.RP,{})})})]})}},24924:function(t,e,n){"use strict";var i=n(85893),s=n(67294);e.Z=function(){var t=(0,s.useRef)(null),e=(0,s.useRef)(null);return(0,s.useEffect)((function(){if(e.current&&t.current){var n=e.current,i=t.current,s=n.getTotalLength();n.style.transition=n.style.transition="none",n.style.strokeDasharray=s+" "+s,n.style.strokeDashoffset=s.toString(),n.getBoundingClientRect(),n.style.transition=n.style.transition="stroke-dashoffset 10ms linear",window.addEventListener("scroll",(function(){var t=document.body.scrollTop||document.documentElement.scrollTop,e=document.documentElement.scrollHeight-document.documentElement.clientHeight,r=s-t*s/e;n.style.strokeDashoffset=r.toString(),(document.body.scrollTop||document.documentElement.scrollTop)>=50?i.classList.add("active-progress"):i.classList.remove("active-progress")})),i.addEventListener("click",(function(t){t.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"})}))}}),[]),(0,i.jsx)("div",{className:"progress-wrap",ref:t,children:(0,i.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,i.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98",ref:e})})})}},95219:function(t,e,n){"use strict";var i=n(85893),s=n(67294),r=n(11163),a=n(22334),o=n(24924),l=n(99472),c=[{id:1,title:"About",url:"/docs/blocks/about"},{id:2,title:"Blog",url:"/docs/blocks/blog"},{id:3,title:"Call to Action",url:"/docs/blocks/call-to-action"},{id:4,title:"Clients",url:"/docs/blocks/clients"},{id:5,title:"Contact",url:"/docs/blocks/contact"},{id:6,title:"Facts",url:"/docs/blocks/facts"},{id:7,title:"FAQ",url:"/docs/blocks/faq"},{id:8,title:"Features",url:"/docs/blocks/features"},{id:9,title:"Footer",url:"/docs/blocks/footer"},{id:10,title:"Hero",url:"/docs/blocks/hero"},{id:12,title:"Navbar",url:"/docs/blocks/navbar"},{id:13,title:"Portfolio",url:"/docs/blocks/portfolio"},{id:14,title:"Pricing",url:"/docs/blocks/pricing"},{id:15,title:"Process",url:"/docs/blocks/process"},{id:16,title:"Team",url:"/docs/blocks/team"},{id:17,title:"Testimonials",url:"/docs/blocks/testimonials"}];e.Z=function(t){var e=t.title,n=t.children,u=(0,r.useRouter)().pathname;return(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)(o.Z,{}),(0,i.jsxs)("div",{className:"content-wrapper",children:[(0,i.jsx)("header",{className:"wrapper bg-soft-primary",children:(0,i.jsx)(a.w,{language:!0,button:(0,i.jsx)(l.Z,{title:"Contact",href:"#",className:"btn btn-sm btn-primary rounded-pill"})})}),(0,i.jsx)("section",{className:"wrapper bg-soft-primary",children:(0,i.jsx)("div",{className:"container pt-10 pb-12 pt-md-14 pb-md-16 text-center",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-md-9 col-lg-7 col-xl-5 mx-auto",children:[(0,i.jsxs)("h1",{className:"display-1 mb-3",children:["Blocks - ",e]}),(0,i.jsx)("p",{className:"lead px-xxl-10",children:"Copy any custom block snippet below and paste it on your page to build your website easily."})]})})})}),(0,i.jsx)("section",{className:"wrapper bg-light wrapper-border",children:(0,i.jsxs)("div",{className:"container py-11",children:[(0,i.jsx)("h2",{className:"h5",children:"Filter Blocks:"}),(0,i.jsx)("ul",{className:"list-inline mb-0",children:c.map((function(t){var e=t.id,n=t.title,s=t.url;return(0,i.jsx)("li",{className:"list-inline-item me-1 mb-2",children:(0,i.jsx)(l.Z,{href:s,title:n,className:"btn btn-soft-ash btn-sm rounded ".concat(u===s?"text-primary pe-none":"")})},e)}))})]})}),n]}),(0,i.jsx)("section",{className:"wrapper bg-dark text-white",children:(0,i.jsxs)("div",{className:"container pt-14 pt-md-16 text-center",children:[(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto",children:[(0,i.jsx)("h2",{className:"display-3 text-white mt-3 mb-3 px-lg-8",children:"Think unique and be creative. Make a difference with Sandbox."}),(0,i.jsx)("p",{className:"lead fs-lg mb-6",children:"Everything you need to create your next unique and professional website, including impressive and ready-made blocks and pages."}),(0,i.jsx)("a",{href:"#",target:"_blank",className:"btn btn-lg btn-white rounded-pill mb-10",rel:"noreferrer",children:"Buy Sandbox"})]})}),(0,i.jsx)("img",{className:"img-fluid",src:"/img/demos/f1.png",srcSet:"/img/demos/f1@2x.png 2x",alt:"demo"})]})})]})}},48701:function(t,e,n){"use strict";var i=n(85893),s=n(5227),r=n(84283);e.Z=function(t){var e=t.children,n=t.language;return(0,i.jsx)(s.Z,{wrapLines:!0,wrapLongLines:!0,style:r.cL,language:n,customStyle:{padding:"2rem",margin:0,borderRadius:"0 0 .4rem .4rem"},children:e})}},50220:function(t,e,n){"use strict";var i=n(85893);e.Z=function(t){var e=t.icon,n=t.className;return(0,i.jsx)("div",{className:n,children:(0,i.jsx)("i",{className:"uil ".concat(e)})})}},89428:function(t,e,n){"use strict";n.d(e,{$Z:function(){return s},St:function(){return a},VO:function(){return r}});var i=function(t){return{animationName:t.name,animationDelay:t.delay,animationFillMode:"both",animationDuration:"700ms",animationDirection:"normal",animationTimingFunction:"ease"}},s=function(t){return i({name:"slideInDown",delay:t})},r=function(t){return i({name:"zoomIn",delay:t})},a=function(t){return i({name:"fadeIn",delay:t})};e.ZP=i},17857:function(t,e,n){"use strict";var i=n(67294),s=n(8273);function r(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var a=r(i);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},u.apply(this,arguments)}function d(t,e){if(null==t)return{};var n,i,s=function(t,e){if(null==t)return{};var n,i,s={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var p="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?i.useLayoutEffect:i.useEffect;function m(t){var e=i.useRef(t);return p((function(){e.current=t})),i.useCallback((function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.current.apply(void 0,n)}),[])}var f=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],h={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},b=function(t){var e=i.useMemo((function(){return l(l({},h),t)}),[t]),n=e.ref,r=e.startOnMount,a=e.enableReinitialize,o=e.delay,c=e.onEnd,u=e.onStart,p=e.onPauseResume,b=e.onReset,g=e.onUpdate,x=d(e,f),v=i.useRef(),j=i.useRef(),y=i.useRef(!1),w=m((function(){return function(t,e){var n=e.decimal,i=e.decimals,r=e.duration,a=e.easingFn,o=e.end,l=e.formattingFn,c=e.numerals,u=e.prefix,d=e.separator,p=e.start,m=e.suffix,f=e.useEasing,h=e.enableScrollSpy,b=e.scrollSpyDelay;return new s.CountUp(t,o,{startVal:p,duration:r,decimal:n,decimalPlaces:i,easingFn:a,formattingFn:l,numerals:c,separator:d,prefix:u,suffix:m,useEasing:f,useGrouping:!!d,enableScrollSpy:h,scrollSpyDelay:b})}("string"===typeof n?n:n.current,x)})),N=m((function(t){var e=v.current;if(e&&!t)return e;var n=w();return v.current=n,n})),V=m((function(){var t=function(){return N(!0).start((function(){null===c||void 0===c||c({pauseResume:E,reset:k,start:F,update:O})}))};o&&o>0?j.current=setTimeout(t,1e3*o):t(),null===u||void 0===u||u({pauseResume:E,reset:k,update:O})})),E=m((function(){N().pauseResume(),null===p||void 0===p||p({reset:k,start:F,update:O})})),k=m((function(){j.current&&clearTimeout(j.current),N().reset(),null===b||void 0===b||b({pauseResume:E,start:F,update:O})})),O=m((function(t){N().update(t),null===g||void 0===g||g({pauseResume:E,reset:k,start:F})})),F=m((function(){k(),V()})),S=m((function(t){r&&(t&&k(),V())}));return i.useEffect((function(){y.current?a&&S(!0):(y.current=!0,S())}),[a,y,S,o,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),i.useEffect((function(){return function(){k()}}),[k]),{start:F,pauseResume:E,reset:k,update:O,getCountUp:N}},g=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,s=t.containerProps,r=t.children,o=t.style,c=d(t,g),p=a.default.useRef(null),f=a.default.useRef(!1),h=b(l(l({},c),{},{ref:p,startOnMount:"function"!==typeof r||0===t.delay,enableReinitialize:!1})),x=h.start,v=h.reset,j=h.update,y=h.pauseResume,w=h.getCountUp,N=m((function(){x()})),V=m((function(e){t.preserveValue||v(),j(e)})),E=m((function(){"function"!==typeof t.children||p.current instanceof Element?w():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));i.useEffect((function(){E()}),[E]),i.useEffect((function(){f.current&&V(t.end)}),[t.end,V]);var k=n&&t;return i.useEffect((function(){n&&f.current&&N()}),[N,n,k]),i.useEffect((function(){!n&&f.current&&N()}),[N,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),i.useEffect((function(){f.current=!0}),[]),"function"===typeof r?r({countUpRef:p,start:x,reset:v,update:j,pauseResume:y,getCountUp:w}):a.default.createElement("span",u({className:e,ref:p,style:o},s),t.start?w().formattingFn(t.start):"")}}},function(t){t.O(0,[7410,9369,7727,3106,2334,5344,4823,5553,3182,346,9774,2888,179],(function(){return e=19845,t(t.s=e);var e}));var e=t.O();_N_E=e}]);