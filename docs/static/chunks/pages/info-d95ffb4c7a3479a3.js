(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9776],{8273:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return s}});var a=function(){return(a=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},s=function(){function t(t,e,n){var s=this;this.endVal=e,this.options=n,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){s.startTime||(s.startTime=t);var e=t-s.startTime;s.remaining=s.duration-e,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(e,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(e,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(e/s.duration);var n=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=n?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),e<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var e,n,a,r,i=t<0?"-":"";e=Math.abs(t).toFixed(s.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],a=o.length>1?s.options.decimal+o[1]:"",s.options.useGrouping){r="";for(var u=0,l=n.length;u<l;++u)0!==u&&u%3==0&&(r=s.options.separator+r),r=n[l-u-1]+r;n=r}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]})),a=a.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]}))),i+s.options.prefix+n+a+s.options.suffix},this.easeOutExpo=function(t,e,n,a){return n*(1-Math.pow(2,-10*t/a))*1024/1023+e},this.options=a(a({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return s.handleScroll(s)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),a=n.top+n.height+window.pageYOffset;a<e&&a>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):window.scrollY>a&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},38300:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/info",function(){return n(7108)}])},7108:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var a=n(85893),s=n(67294),r=n(22334),i=n(44807),o=n(96815);function u(){return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)("header",{className:"wrapper bg-light",children:(0,a.jsx)(r.w,{search:!0,cart:!0,navClassName:"navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"})}),(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col-lg-12 text-center",children:[(0,a.jsx)("h2",{className:"fs-16 text-uppercase text-muted mb-12",children:"Mi\xe9rt v\xe1lasszon minket?"}),(0,a.jsx)("h3",{className:"display-4 mb-12",children:"Olyan megold\xe1sokat k\xedn\xe1lunk, ami az \xfcgyfeleink \xe9let\xe9t k\xf6nnyebb\xe9 teszik."}),(0,a.jsx)(o.Z,{})]})})}),(0,a.jsx)(i.M$,{})]})}},96815:function(t,e,n){"use strict";var a=n(41799),s=n(85893),r=n(71718),i=[{no:"One",expand:!0,heading:"Rendel\xe9s",body:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."},{no:"Two",expand:!1,heading:"Fizet\xe9s",body:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."},{no:"Three",expand:!1,heading:"Sz\xe1ll\xedt\xe1s",body:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."},{no:"Four",expand:!1,heading:"Vissz\xe1ru",body:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."}];e.Z=function(){return(0,s.jsx)("div",{className:"accordion accordion-wrapper",id:"accordionExample",children:i.map((function(t){return(0,s.jsx)(r.Z,(0,a.Z)({type:"plain"},t),t.no)}))})}},71718:function(t,e,n){"use strict";var a=n(85893);e.Z=function(t){var e=t.no,n=t.body,s=t.heading,r=t.expand,i=t.type,o=void 0===i?"":i;return(0,a.jsxs)("div",{className:"card ".concat(o," accordion-item"),children:[(0,a.jsx)("div",{className:"card-header",id:"heading".concat(e),children:(0,a.jsx)("button",{"data-bs-toggle":"collapse","aria-controls":"collapse".concat(e),"data-bs-target":"#collapse".concat(e),"aria-expanded":r?"true":"false",className:r?"accordion-button":"collapsed",children:s})}),(0,a.jsx)("div",{id:"collapse".concat(e),"aria-labelledby":"heading".concat(e),"data-bs-parent":"#accordionExample",className:"accordion-collapse collapse ".concat(r&&"show"),children:(0,a.jsx)("div",{className:"card-body",children:(0,a.jsx)("p",{children:n})})})]})}},17857:function(t,e,n){"use strict";var a=n(67294),s=n(8273);function r(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var i=r(a);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},c.apply(this,arguments)}function d(t,e){if(null==t)return{};var n,a,s=function(t,e){if(null==t)return{};var n,a,s={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var m="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?a.useLayoutEffect:a.useEffect;function f(t){var e=a.useRef(t);return m((function(){e.current=t})),a.useCallback((function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return e.current.apply(void 0,n)}),[])}var p=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],h={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},g=function(t){var e=a.useMemo((function(){return u(u({},h),t)}),[t]),n=e.ref,r=e.startOnMount,i=e.enableReinitialize,o=e.delay,l=e.onEnd,c=e.onStart,m=e.onPauseResume,g=e.onReset,b=e.onUpdate,y=d(e,p),v=a.useRef(),V=a.useRef(),w=a.useRef(!1),E=f((function(){return function(t,e){var n=e.decimal,a=e.decimals,r=e.duration,i=e.easingFn,o=e.end,u=e.formattingFn,l=e.numerals,c=e.prefix,d=e.separator,m=e.start,f=e.suffix,p=e.useEasing,h=e.enableScrollSpy,g=e.scrollSpyDelay;return new s.CountUp(t,o,{startVal:m,duration:r,decimal:n,decimalPlaces:a,easingFn:i,formattingFn:u,numerals:l,separator:d,prefix:c,suffix:f,useEasing:p,useGrouping:!!d,enableScrollSpy:h,scrollSpyDelay:g})}("string"===typeof n?n:n.current,y)})),x=f((function(t){var e=v.current;if(e&&!t)return e;var n=E();return v.current=n,n})),j=f((function(){var t=function(){return x(!0).start((function(){null===l||void 0===l||l({pauseResume:O,reset:F,start:P,update:N})}))};o&&o>0?V.current=setTimeout(t,1e3*o):t(),null===c||void 0===c||c({pauseResume:O,reset:F,update:N})})),O=f((function(){x().pauseResume(),null===m||void 0===m||m({reset:F,start:P,update:N})})),F=f((function(){V.current&&clearTimeout(V.current),x().reset(),null===g||void 0===g||g({pauseResume:O,start:P,update:N})})),N=f((function(t){x().update(t),null===b||void 0===b||b({pauseResume:O,reset:F,start:P})})),P=f((function(){F(),j()})),S=f((function(t){r&&(t&&F(),j())}));return a.useEffect((function(){w.current?i&&S(!0):(w.current=!0,S())}),[i,w,S,o,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),a.useEffect((function(){return function(){F()}}),[F]),{start:P,pauseResume:O,reset:F,update:N,getCountUp:x}},b=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,s=t.containerProps,r=t.children,o=t.style,l=d(t,b),m=i.default.useRef(null),p=i.default.useRef(!1),h=g(u(u({},l),{},{ref:m,startOnMount:"function"!==typeof r||0===t.delay,enableReinitialize:!1})),y=h.start,v=h.reset,V=h.update,w=h.pauseResume,E=h.getCountUp,x=f((function(){y()})),j=f((function(e){t.preserveValue||v(),V(e)})),O=f((function(){"function"!==typeof t.children||m.current instanceof Element?E():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));a.useEffect((function(){O()}),[O]),a.useEffect((function(){p.current&&j(t.end)}),[t.end,j]);var F=n&&t;return a.useEffect((function(){n&&p.current&&x()}),[x,n,F]),a.useEffect((function(){!n&&p.current&&x()}),[x,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),a.useEffect((function(){p.current=!0}),[]),"function"===typeof r?r({countUpRef:m,start:y,reset:v,update:V,pauseResume:w,getCountUp:E}):i.default.createElement("span",c({className:e,ref:m,style:o},s),t.start?E().formattingFn(t.start):"")}}},function(t){t.O(0,[7410,2334,7492,1315,4807,9774,2888,179],(function(){return e=38300,t(t.s=e);var e}));var e=t.O();_N_E=e}]);