(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8178],{8273:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return r}});var i=function(){return(i=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},r=function(){function t(t,e,n){var r=this;this.endVal=e,this.options=n,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){r.startTime||(r.startTime=t);var e=t-r.startTime;r.remaining=r.duration-e,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(e,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(e,r.startVal,r.endVal-r.startVal,r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(e/r.duration);var n=r.countDown?r.frameVal<r.endVal:r.frameVal>r.endVal;r.frameVal=n?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),e<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.callback&&r.callback()},this.formatNumber=function(t){var e,n,i,s,a=t<0?"-":"";e=Math.abs(t).toFixed(r.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],i=o.length>1?r.options.decimal+o[1]:"",r.options.useGrouping){s="";for(var l=0,u=n.length;l<u;++l)0!==l&&l%3==0&&(s=r.options.separator+s),s=n[u-l-1]+s;n=s}return r.options.numerals&&r.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return r.options.numerals[+t]})),i=i.replace(/[0-9]/g,(function(t){return r.options.numerals[+t]}))),a+r.options.prefix+n+i+r.options.suffix},this.easeOutExpo=function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e},this.options=i(i({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return r.handleScroll(r)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):window.scrollY>i&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},46557:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects-4",function(){return n(12660)}])},12660:function(t,e,n){"use strict";n.r(e);var i=n(85893),r=n(41664),s=n.n(r),a=n(25675),o=n.n(a),l=n(67294),u=n(22334),c=n(44807),d=n(24924),p=n(99472),h=n(80959),f=[{id:1,link:"#",color:"purple",type:"product",category:"COSMETIC",title:"Cras Fermentum Sem",image:{width:1300,height:1262,url:"/img/photos/cs16.jpg"}},{id:2,link:"#",color:"leaf",type:"workshop",category:"COFFEE",title:"Mollis Ipsum Mattis",image:{width:1300,height:1435,url:"/img/photos/cs17.jpg"}},{id:3,link:"#",color:"violet",type:"still-life",category:"STILL LIFE",title:"Ipsum Ultricies Cursus",image:{width:1200,height:923,url:"/img/photos/cs18.jpg"}},{id:4,link:"#",color:"yellow",type:"product",category:"PRODUCT",title:"Sollicitudin Ornare Porta",image:{width:1200,height:919,url:"/img/photos/cs19.jpg"}},{id:6,link:"#",color:"green",type:"workshop",category:"WORKSHOP",title:"Ipsum Mollis Vulputate",image:{width:1200,height:960,url:"/img/photos/cs21.jpg"}},{id:5,link:"#",color:"orange",type:"product",category:"PRODUCT",title:"Inceptos Euismod Egestas",image:{width:1300,height:1365,url:"/img/photos/cs20.jpg"}},{id:8,link:"#",color:"red",type:"concept",category:"CONCEPT",title:"Porta Ornare Cras",image:{width:1200,height:1200,url:"/img/photos/cs22.jpg"}},{id:10,link:"#",color:"purple",type:"product",category:"PRODUCT",title:"Magna Tristique Inceptos",image:{width:1200,height:830,url:"/img/photos/cs24.jpg"}},{id:7,link:"#",color:"aqua",type:"concept",category:"CONCEPT",title:"Vulputate Sollicitudin",image:{width:1200,height:1294,url:"/img/photos/cs23.jpg"}}],m=[{id:1,title:"All",value:"*"},{id:2,title:"Concept",value:".concept"},{id:3,title:"Product",value:".product"},{id:4,title:"Workshop",value:".workshop"},{id:5,title:"Still Life",value:".still-life"}];e.default=function(){var t=(0,h.Z)(),e=t.handleFilterKeyChange,n=t.filterKey;return(0,i.jsxs)(l.Fragment,{children:[(0,i.jsx)(d.Z,{}),(0,i.jsx)("header",{className:"wrapper bg-light",children:(0,i.jsx)(u.w,{language:!0,button:(0,i.jsx)(p.Z,{title:"Contact",href:"#",className:"btn btn-sm btn-primary rounded-pill"})})}),(0,i.jsxs)("main",{className:"content-wrapper",children:[(0,i.jsx)("section",{className:"wrapper bg-light",children:(0,i.jsx)("div",{className:"container pt-10 pt-md-14",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-md-8 col-lg-7 col-xl-6 col-xxl-5",children:[(0,i.jsx)("h1",{className:"display-1 mb-3",children:"Projects"}),(0,i.jsx)("p",{className:"lead fs-lg pe-lg-15 pe-xxl-12",children:"Check out some of our awesome projects with creative ideas and great design."})]})})})}),(0,i.jsx)("section",{className:"wrapper bg-light",children:(0,i.jsx)("div",{className:"container py-14 py-md-16",children:(0,i.jsxs)("div",{className:"grid grid-view projects-masonry",children:[(0,i.jsxs)("div",{className:"isotope-filter filter mb-10",children:[(0,i.jsx)("p",{children:"Filter:"}),(0,i.jsx)("ul",{children:m.map((function(t){var r=t.id,s=t.title,a=t.value;return(0,i.jsx)("li",{children:(0,i.jsx)("a",{onClick:e(a),className:"filter-item ".concat(a===n?"active":""),children:s})},r)}))})]}),(0,i.jsx)("div",{className:"row gx-md-8 gy-10 gy-md-13 isotope",children:f.map((function(t){var e=t.id,n=t.image,r=t.title,a=t.category,l=t.color,u=t.link,c=t.type;return(0,i.jsxs)("div",{className:"project item col-md-6 col-xl-4 ".concat(c),children:[(0,i.jsx)(s(),{href:u,children:(0,i.jsx)("a",{children:(0,i.jsx)("figure",{className:"lift rounded mb-6",children:(0,i.jsx)(o(),{alt:r,src:n.url,width:n.width,layout:"responsive",height:n.height})})})}),(0,i.jsx)("div",{className:"project-details d-flex justify-content-center flex-column",children:(0,i.jsxs)("div",{className:"post-header",children:[(0,i.jsx)("div",{className:"post-category text-line mb-3 text-".concat(l),children:a}),(0,i.jsx)("h2",{className:"post-title h3",children:r})]})})]},e)}))})]})})})]}),(0,i.jsx)(c.M$,{})]})}},24924:function(t,e,n){"use strict";var i=n(85893),r=n(67294);e.Z=function(){var t=(0,r.useRef)(null),e=(0,r.useRef)(null);return(0,r.useEffect)((function(){if(e.current&&t.current){var n=e.current,i=t.current,r=n.getTotalLength();n.style.transition=n.style.transition="none",n.style.strokeDasharray=r+" "+r,n.style.strokeDashoffset=r.toString(),n.getBoundingClientRect(),n.style.transition=n.style.transition="stroke-dashoffset 10ms linear",window.addEventListener("scroll",(function(){var t=document.body.scrollTop||document.documentElement.scrollTop,e=document.documentElement.scrollHeight-document.documentElement.clientHeight,s=r-t*r/e;n.style.strokeDashoffset=s.toString(),(document.body.scrollTop||document.documentElement.scrollTop)>=50?i.classList.add("active-progress"):i.classList.remove("active-progress")})),i.addEventListener("click",(function(t){t.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"})}))}}),[]),(0,i.jsx)("div",{className:"progress-wrap",ref:t,children:(0,i.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,i.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98",ref:e})})})}},80959:function(t,e,n){"use strict";var i=n(47568),r=n(97582),s=n(67294);e.Z=function(){var t=(0,s.useRef)(),e=(0,s.useState)("*"),a=e[0],o=e[1];(0,s.useEffect)((function(){return(0,i.Z)((function(){var e,i;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return[4,n.e(3391).then(n.t.bind(n,13391,23))];case 1:return e=r.sent().default,null!==(i=document.querySelectorAll(".grid"))&&i.forEach((function(n){var i=n.querySelector(".isotope");t.current=new e(i,{itemSelector:".item",layoutMode:"masonry",masonry:{columnWidth:i.offsetWidth/12},percentPosition:!0,transitionDuration:"0.7s"})})),[2]}}))}))(),function(){var e;return null===(e=t.current)||void 0===e?void 0:e.destroy()}}),[]),(0,s.useEffect)((function(){var e,n="*"===a?{filter:"*"}:{filter:a};null===(e=t.current)||void 0===e||e.arrange(n)}),[a]);return{handleFilterKeyChange:function(t){return function(){return o(t)}},filterKey:a}}},17857:function(t,e,n){"use strict";var i=n(67294),r=n(8273);function s(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var a=s(i);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c.apply(this,arguments)}function d(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?i.useLayoutEffect:i.useEffect;function h(t){var e=i.useRef(t);return p((function(){e.current=t})),i.useCallback((function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.current.apply(void 0,n)}),[])}var f=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],m={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},g=function(t){var e=i.useMemo((function(){return l(l({},m),t)}),[t]),n=e.ref,s=e.startOnMount,a=e.enableReinitialize,o=e.delay,u=e.onEnd,c=e.onStart,p=e.onPauseResume,g=e.onReset,y=e.onUpdate,v=d(e,f),w=i.useRef(),E=i.useRef(),V=i.useRef(!1),b=h((function(){return function(t,e){var n=e.decimal,i=e.decimals,s=e.duration,a=e.easingFn,o=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,d=e.separator,p=e.start,h=e.suffix,f=e.useEasing,m=e.enableScrollSpy,g=e.scrollSpyDelay;return new r.CountUp(t,o,{startVal:p,duration:s,decimal:n,decimalPlaces:i,easingFn:a,formattingFn:l,numerals:u,separator:d,prefix:c,suffix:h,useEasing:f,useGrouping:!!d,enableScrollSpy:m,scrollSpyDelay:g})}("string"===typeof n?n:n.current,v)})),j=h((function(t){var e=w.current;if(e&&!t)return e;var n=b();return w.current=n,n})),x=h((function(){var t=function(){return j(!0).start((function(){null===u||void 0===u||u({pauseResume:O,reset:N,start:F,update:S})}))};o&&o>0?E.current=setTimeout(t,1e3*o):t(),null===c||void 0===c||c({pauseResume:O,reset:N,update:S})})),O=h((function(){j().pauseResume(),null===p||void 0===p||p({reset:N,start:F,update:S})})),N=h((function(){E.current&&clearTimeout(E.current),j().reset(),null===g||void 0===g||g({pauseResume:O,start:F,update:S})})),S=h((function(t){j().update(t),null===y||void 0===y||y({pauseResume:O,reset:N,start:F})})),F=h((function(){N(),x()})),P=h((function(t){s&&(t&&N(),x())}));return i.useEffect((function(){V.current?a&&P(!0):(V.current=!0,P())}),[a,V,P,o,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),i.useEffect((function(){return function(){N()}}),[N]),{start:F,pauseResume:O,reset:N,update:S,getCountUp:j}},y=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,r=t.containerProps,s=t.children,o=t.style,u=d(t,y),p=a.default.useRef(null),f=a.default.useRef(!1),m=g(l(l({},u),{},{ref:p,startOnMount:"function"!==typeof s||0===t.delay,enableReinitialize:!1})),v=m.start,w=m.reset,E=m.update,V=m.pauseResume,b=m.getCountUp,j=h((function(){v()})),x=h((function(e){t.preserveValue||w(),E(e)})),O=h((function(){"function"!==typeof t.children||p.current instanceof Element?b():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));i.useEffect((function(){O()}),[O]),i.useEffect((function(){f.current&&x(t.end)}),[t.end,x]);var N=n&&t;return i.useEffect((function(){n&&f.current&&j()}),[j,n,N]),i.useEffect((function(){!n&&f.current&&j()}),[j,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),i.useEffect((function(){f.current=!0}),[]),"function"===typeof s?s({countUpRef:p,start:v,reset:w,update:E,pauseResume:V,getCountUp:b}):a.default.createElement("span",c({className:e,ref:p,style:o},r),t.start?b().formattingFn(t.start):"")}}},function(t){t.O(0,[7410,2334,7492,1315,4807,9774,2888,179],(function(){return e=46557,t(t.s=e);var e}));var e=t.O();_N_E=e}]);