(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6076],{8273:function(t,e,a){"use strict";a.r(e),a.d(e,{CountUp:function(){return i}});var n=function(){return(n=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++)for(var i in e=arguments[a])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,a){var i=this;this.endVal=e,this.options=a,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var a=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=a?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(t){var e,a,n,s,r=t<0?"-":"";e=Math.abs(t).toFixed(i.options.decimalPlaces);var o=(e+="").split(".");if(a=o[0],n=o.length>1?i.options.decimal+o[1]:"",i.options.useGrouping){s="";for(var u=0,l=a.length;u<l;++u)0!==u&&u%3==0&&(s=i.options.separator+s),s=a[l-u-1]+s;a=s}return i.options.numerals&&i.options.numerals.length&&(a=a.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),n=n.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),r+i.options.prefix+a+n+i.options.suffix},this.easeOutExpo=function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e},this.options=n(n({},this.defaults),a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,a=t.el.getBoundingClientRect(),n=a.top+a.height+window.pageYOffset;n<e&&n>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):window.scrollY>n&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},23329:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-1",function(){return a(48769)}])},48769:function(t,e,a){"use strict";a.r(e);var n=a(85893),i=a(67294),s=a(94853),r=a(71686),o=a(66416),u=a(22334),l=a(44807),c=a(10346),m=a(51315),d=a(19154),p=a(42744),f=a(99472);e.default=function(){return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)("header",{className:"wrapper bg-gray",children:(0,n.jsx)(u.w,{language:!0,button:(0,n.jsx)(f.Z,{title:"Contact",href:"#",className:"btn btn-sm btn-primary rounded-pill"})})}),(0,n.jsxs)("main",{className:"content-wrapper",children:[(0,n.jsxs)("section",{className:"wrapper bg-gray",children:[(0,n.jsx)("div",{className:"container pt-10 pt-md-14 text-center",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"col-xl-6 mx-auto",children:[(0,n.jsx)("h1",{className:"display-1 mb-4",children:"Hello! This is Sandbox"}),(0,n.jsx)("p",{className:"lead fs-lg mb-0",children:"A company turning ideas into beautiful things."})]})})}),(0,n.jsx)(p.Z,{width:2800,height:1e3,src:"/img/photos/bg12.jpg",className:"position-absoute",style:{bottom:0,left:0,zIndex:2}})]}),(0,n.jsx)("section",{className:"wrapper bg-light angled upper-end lower-end",children:(0,n.jsxs)("div",{className:"container py-14 py-md-16",children:[(0,n.jsx)(r.UH,{}),(0,n.jsx)(c.$T,{})]})}),(0,n.jsx)(d.Lk,{}),(0,n.jsx)(s.Zu,{}),(0,n.jsx)(o._O,{}),(0,n.jsx)(m.tE,{})]}),(0,n.jsx)(l.M$,{})]})}},42744:function(t,e,a){"use strict";var n=a(41799),i=a(69396),s=a(99534),r=a(85893),o=a(25675),u=a.n(o);e.Z=function(t){var e=t.className,a=t.src,o=t.width,l=t.height,c=(0,s.Z)(t,["className","src","width","height"]);return(0,r.jsx)("figure",(0,i.Z)((0,n.Z)({className:e},c),{children:(0,r.jsx)(u(),{width:o,height:l,src:a,alt:"demo",layout:"responsive",quality:"100"})}))}},29190:function(t,e,a){"use strict";a.d(e,{D1:function(){return s},_3:function(){return o},fo:function(){return r},hB:function(){return i},pb:function(){return n},sb:function(){return u}});var n=[["Aenean quam ornare. Curabitur blandit.","Nullam quis risus eget urna mollis ornare."],["Etiam porta euismod malesuada mollis.","Vivamus sagittis lacus vel augue rutrum."]],i=[{id:1,amount:7518,title:"Completed Projects"},{id:2,amount:3472,title:"Satisfied Customers"},{id:3,amount:2184,title:"Expert Employees"},{id:4,amount:4523,title:"Awards Won"}],s=[{id:1,category:"Coding",date:"14 Apr 2022",image:"/img/photos/b4.jpg",title:"Ligula tristique quis risus",description:"Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor."},{id:2,category:"Workspace",date:"29 Mar 2022",image:"/img/photos/b5.jpg",title:"ullam id dolor elit id nibh",description:"Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor."},{id:3,category:"Meeting",date:"26 Feb 2022",image:"/img/photos/b6.jpg",title:"Ultricies fusce porta elit",description:"Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor."},{id:4,category:"Business Tips",date:"7 Jan 2022",image:"/img/photos/b7.jpg",title:"Morbi leo risus porta eget",description:"Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor."}],r=[{id:1,name:"Coriss Ambady",designation:"Financial Analyst",image:{"1x":"/img/avatars/t1.jpg","2x":"/img/avatars/t1@2x.jpg 2x"}},{id:2,name:"Cory Zamora",designation:"Marketing Specialist",image:{"1x":"/img/avatars/t2.jpg","2x":"/img/avatars/t2@2x.jpg 2x"}},{id:3,name:"Nikolas Brooten",designation:"Sales Manager",image:{"1x":"/img/avatars/t3.jpg","2x":"/img/avatars/t3@2x.jpg 2x"}},{id:4,name:"Jackie Sanders",designation:"Investment Planner",image:{"1x":"/img/avatars/t4.jpg","2x":"/img/avatars/t4@2x.jpg 2x"}}],o=[{id:1,name:"Coriss Ambady",image:"/img/avatars/te7.jpg",designation:"Financial Analyst",review:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio."},{id:2,name:"Cory Zamora",image:"/img/avatars/te8.jpg",designation:"Marketing Specialist",review:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio."},{id:3,name:"Barclay Widerski",image:"/img/avatars/te9.jpg",designation:"Sales Specialist",review:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio."}],u=[{id:1,title:"Can I cancel my subscription?",description:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas."},{id:2,title:"Which payment methods do you accept?",description:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas."},{id:3,title:"How can I manage my Account?",description:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas."},{id:4,title:"Is my credit card information secure?",description:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas."}]},35121:function(t,e,a){"use strict";var n=a(85893);e.Z=function(t){var e=t.className;return(0,n.jsxs)("svg",{viewBox:"0 0 409.6 356.2",xmlns:"http://www.w3.org/2000/svg",className:"svg-inject icon-svg ".concat(e||"icon-svg-sm text-purple me-4"),children:[(0,n.jsx)("path",{className:"lineal-fill",d:"M265.2 180.7H144.4v-17.6c0-33.3 27-60.4 60.4-60.4s60.4 27 60.4 60.4v17.6z"}),(0,n.jsx)("path",{className:"lineal-stroke",d:"M265.2 191.7H144.4c-6.1 0-11.1-5-11.1-11.1V163c-.5-39.5 31.1-71.8 70.6-72.3s71.8 31.1 72.3 70.6v19.3c0 6.2-4.9 11.1-11 11.1zm-109.7-22.1h98.6v-6.5c.4-27.2-21.4-49.6-48.6-50s-49.6 21.4-50 48.6v7.9z"}),(0,n.jsx)("path",{className:"lineal-fill",d:"M250.4 56.7c0 25.2-20.4 45.6-45.6 45.6s-45.6-20.4-45.6-45.6 20.4-45.6 45.6-45.6c25.2 0 45.6 20.4 45.6 45.6z"}),(0,n.jsx)("path",{className:"lineal-stroke",d:"M204.8 113.3c-31.3 0-56.7-25.4-56.7-56.7S173.5-.1 204.8-.1s56.7 25.4 56.7 56.7c-.1 31.3-25.4 56.7-56.7 56.7zm0-91.2c-19.1 0-34.5 15.4-34.5 34.5s15.4 34.5 34.5 34.5 34.5-15.4 34.5-34.5c0-19-15.5-34.4-34.5-34.5zm193.7 334.1H296.8c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.7c-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.4-6 2.3-11.9 8.3-13.3 5.8-1.4 11.7 2.2 13.2 8 1.2 4.9 1.8 9.9 1.8 14.9v14.8c0 6.1-4.9 11.1-11.1 11.1z"}),(0,n.jsx)("path",{className:"lineal-stroke",d:"M347.6 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.2 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.3-27.3 27.4 0 15.1 12.3 27.3 27.4 27.3S375 256 375 241c0-15.1-12.3-27.3-27.4-27.4zM112.8 356.2H11.1c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1.2 10.9 5.3 10.7 11.4-.2 5.9-4.9 10.6-10.7 10.7-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.5-5.9 2.2-11.9 8.1-13.4s11.9 2.2 13.4 8.1c1.2 4.9 1.8 9.9 1.8 14.9v14.8c.1 6.1-4.9 11.1-11.1 11.1.1 0 .1 0 0 0z"}),(0,n.jsx)("path",{className:"lineal-stroke",d:"M61.9 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.1 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.2-27.3 27.4 0 15.1 12.2 27.4 27.4 27.4 15.1 0 27.3-12.2 27.3-27.3 0-15.2-12.3-27.4-27.4-27.5zm142.9 72.1c-6.1 0-11.1-5-11.1-11.1v-56.4c-.2-6.1 4.6-11.2 10.7-11.4 6.1-.2 11.2 4.6 11.4 10.7v57.1c.1 6.2-4.9 11.1-11 11.1z"}),(0,n.jsx)("path",{className:"lineal-stroke",d:"M279.5 285.7H130.1c-6.1.2-11.2-4.6-11.4-10.7s4.6-11.2 10.7-11.4h150.2c6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.8z"})]})}},17857:function(t,e,a){"use strict";var n=a(67294),i=a(8273);function s(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var r=s(n);function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},c.apply(this,arguments)}function m(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var d="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?n.useLayoutEffect:n.useEffect;function p(t){var e=n.useRef(t);return d((function(){e.current=t})),n.useCallback((function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return e.current.apply(void 0,a)}),[])}var f=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],h={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},g=function(t){var e=n.useMemo((function(){return u(u({},h),t)}),[t]),a=e.ref,s=e.startOnMount,r=e.enableReinitialize,o=e.delay,l=e.onEnd,c=e.onStart,d=e.onPauseResume,g=e.onReset,v=e.onUpdate,b=m(e,f),y=n.useRef(),x=n.useRef(),V=n.useRef(!1),j=p((function(){return function(t,e){var a=e.decimal,n=e.decimals,s=e.duration,r=e.easingFn,o=e.end,u=e.formattingFn,l=e.numerals,c=e.prefix,m=e.separator,d=e.start,p=e.suffix,f=e.useEasing,h=e.enableScrollSpy,g=e.scrollSpyDelay;return new i.CountUp(t,o,{startVal:d,duration:s,decimal:a,decimalPlaces:n,easingFn:r,formattingFn:u,numerals:l,separator:m,prefix:c,suffix:p,useEasing:f,useGrouping:!!m,enableScrollSpy:h,scrollSpyDelay:g})}("string"===typeof a?a:a.current,b)})),w=p((function(t){var e=y.current;if(e&&!t)return e;var a=j();return y.current=a,a})),E=p((function(){var t=function(){return w(!0).start((function(){null===l||void 0===l||l({pauseResume:N,reset:O,start:S,update:F})}))};o&&o>0?x.current=setTimeout(t,1e3*o):t(),null===c||void 0===c||c({pauseResume:N,reset:O,update:F})})),N=p((function(){w().pauseResume(),null===d||void 0===d||d({reset:O,start:S,update:F})})),O=p((function(){x.current&&clearTimeout(x.current),w().reset(),null===g||void 0===g||g({pauseResume:N,start:S,update:F})})),F=p((function(t){w().update(t),null===v||void 0===v||v({pauseResume:N,reset:O,start:S})})),S=p((function(){O(),E()})),A=p((function(t){s&&(t&&O(),E())}));return n.useEffect((function(){V.current?r&&A(!0):(V.current=!0,A())}),[r,V,A,o,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),n.useEffect((function(){return function(){O()}}),[O]),{start:S,pauseResume:N,reset:O,update:F,getCountUp:w}},v=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,a=t.redraw,i=t.containerProps,s=t.children,o=t.style,l=m(t,v),d=r.default.useRef(null),f=r.default.useRef(!1),h=g(u(u({},l),{},{ref:d,startOnMount:"function"!==typeof s||0===t.delay,enableReinitialize:!1})),b=h.start,y=h.reset,x=h.update,V=h.pauseResume,j=h.getCountUp,w=p((function(){b()})),E=p((function(e){t.preserveValue||y(),x(e)})),N=p((function(){"function"!==typeof t.children||d.current instanceof Element?j():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));n.useEffect((function(){N()}),[N]),n.useEffect((function(){f.current&&E(t.end)}),[t.end,E]);var O=a&&t;return n.useEffect((function(){a&&f.current&&w()}),[w,a,O]),n.useEffect((function(){!a&&f.current&&w()}),[w,a,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),n.useEffect((function(){f.current=!0}),[]),"function"===typeof s?s({countUpRef:d,start:b,reset:y,update:x,pauseResume:V,getCountUp:j}):r.default.createElement("span",c({className:e,ref:d,style:o},i),t.start?j().formattingFn(t.start):"")}}},function(t){t.O(0,[7410,8494,7727,3106,2334,7492,1315,4807,5344,4823,5553,3182,5029,9118,1686,9154,346,6416,4853,9774,2888,179],(function(){return e=23329,t(t.s=e);var e}));var e=t.O();_N_E=e}]);