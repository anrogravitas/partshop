(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1677],{8273:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return s}});var i=function(){return(i=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},s=function(){function t(t,e,n){var s=this;this.endVal=e,this.options=n,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){s.startTime||(s.startTime=t);var e=t-s.startTime;s.remaining=s.duration-e,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(e,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(e,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(e/s.duration);var n=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=n?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),e<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var e,n,i,r,o=t<0?"-":"";e=Math.abs(t).toFixed(s.options.decimalPlaces);var a=(e+="").split(".");if(n=a[0],i=a.length>1?s.options.decimal+a[1]:"",s.options.useGrouping){r="";for(var l=0,u=n.length;l<u;++l)0!==l&&l%3==0&&(r=s.options.separator+r),r=n[u-l-1]+r;n=r}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]})),i=i.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]}))),o+s.options.prefix+n+i+s.options.suffix},this.easeOutExpo=function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e},this.options=i(i({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return s.handleScroll(s)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):window.scrollY>i&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},47421:function(t){class e{constructor(){window.console.error('iTooltip Error: positionX and positionY properties cannot be "center" at the same time.')}}t.exports=class{constructor(t="*"){const e="*"!==t?t:"*[title]";this.objects=document.querySelectorAll(e)}init(t={}){if(this.settings=Object.assign({className:"tooltip",indentX:10,indentY:15,positionX:"right",positionY:"bottom"},t),"center"===this.settings.positionX&&"center"===this.settings.positionY)throw new e;this.objects.forEach((t=>{t.getAttribute("title")&&(t.addEventListener("mouseenter",(t=>this.createTooltip(t))),t.addEventListener("mouseleave",(t=>this.removeTooltip(t))))}))}createTooltip(t){const e=t.target;this.tooltip=document.createElement("div"),this.tooltip.classList.add(this.settings.className),this.tooltip.innerHTML=e.getAttribute("title"),this.tooltip.style.position="absolute",this.changePosition(t),e.removeAttribute("title"),document.body.appendChild(this.tooltip),e.addEventListener("mousemove",(t=>this.changePosition(t)))}removeTooltip(t){t.target.setAttribute("title",this.tooltip.innerHTML),this.tooltip.remove()}changePosition(t){const[e,n]=this.getSizeTooltip(),i=this.getEdges(t),s=window.pageYOffset||document.documentElement.scrollTop;let r=t.pageY,o=t.pageX;if(o="right"===this.settings.positionX?i.right<=e?t.clientX-e-this.settings.indentX:t.clientX+this.settings.indentX:"left"===this.settings.positionX?i.left<=e?i.left+this.settings.indentX:t.clientX-e-this.settings.indentX:i.left<=Math.round(e/2)?t.clientX-i.left:t.clientX-Math.round(e/2),"top"===this.settings.positionY)r=i.top<=n?s+t.clientY+this.settings.indentY:t.pageY-n-this.settings.indentY;else if("bottom"===this.settings.positionY)r=i.bottom<n&&i.top>n+this.settings.indentY?t.pageY-n-this.settings.indentY:s+t.clientY+this.settings.indentY;else{let t=Math.round(n/2);i.bottom<=t&&(t=Math.round(n-i.bottom)),i.top<=t&&(t=i.top),r-=t}this.tooltip.style.top=`${r}px`,this.tooltip.style.left=`${o}px`}getSizeTooltip(){const t=this.tooltip.getBoundingClientRect();return[t.right-t.left,t.bottom-t.top]}getEdges=t=>{const e=document.documentElement;return{left:t.clientX,right:e.clientWidth-t.clientX,top:t.clientY,bottom:e.clientHeight-t.clientY}}}},17857:function(t,e,n){"use strict";var i=n(67294),s=n(8273);function r(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var o=r(i);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c.apply(this,arguments)}function p(t,e){if(null==t)return{};var n,i,s=function(t,e){if(null==t)return{};var n,i,s={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var f="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?i.useLayoutEffect:i.useEffect;function h(t){var e=i.useRef(t);return f((function(){e.current=t})),i.useCallback((function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.current.apply(void 0,n)}),[])}var d=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],m={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},g=function(t){var e=i.useMemo((function(){return l(l({},m),t)}),[t]),n=e.ref,r=e.startOnMount,o=e.enableReinitialize,a=e.delay,u=e.onEnd,c=e.onStart,f=e.onPauseResume,g=e.onReset,y=e.onUpdate,b=p(e,d),V=i.useRef(),v=i.useRef(),E=i.useRef(!1),w=h((function(){return function(t,e){var n=e.decimal,i=e.decimals,r=e.duration,o=e.easingFn,a=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,p=e.separator,f=e.start,h=e.suffix,d=e.useEasing,m=e.enableScrollSpy,g=e.scrollSpyDelay;return new s.CountUp(t,a,{startVal:f,duration:r,decimal:n,decimalPlaces:i,easingFn:o,formattingFn:l,numerals:u,separator:p,prefix:c,suffix:h,useEasing:d,useGrouping:!!p,enableScrollSpy:m,scrollSpyDelay:g})}("string"===typeof n?n:n.current,b)})),O=h((function(t){var e=V.current;if(e&&!t)return e;var n=w();return V.current=n,n})),F=h((function(){var t=function(){return O(!0).start((function(){null===u||void 0===u||u({pauseResume:S,reset:P,start:x,update:R})}))};a&&a>0?v.current=setTimeout(t,1e3*a):t(),null===c||void 0===c||c({pauseResume:S,reset:P,update:R})})),S=h((function(){O().pauseResume(),null===f||void 0===f||f({reset:P,start:x,update:R})})),P=h((function(){v.current&&clearTimeout(v.current),O().reset(),null===g||void 0===g||g({pauseResume:S,start:x,update:R})})),R=h((function(t){O().update(t),null===y||void 0===y||y({pauseResume:S,reset:P,start:x})})),x=h((function(){P(),F()})),A=h((function(t){r&&(t&&P(),F())}));return i.useEffect((function(){E.current?o&&A(!0):(E.current=!0,A())}),[o,E,A,a,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),i.useEffect((function(){return function(){P()}}),[P]),{start:x,pauseResume:S,reset:P,update:R,getCountUp:O}},y=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,s=t.containerProps,r=t.children,a=t.style,u=p(t,y),f=o.default.useRef(null),d=o.default.useRef(!1),m=g(l(l({},u),{},{ref:f,startOnMount:"function"!==typeof r||0===t.delay,enableReinitialize:!1})),b=m.start,V=m.reset,v=m.update,E=m.pauseResume,w=m.getCountUp,O=h((function(){b()})),F=h((function(e){t.preserveValue||V(),v(e)})),S=h((function(){"function"!==typeof t.children||f.current instanceof Element?w():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));i.useEffect((function(){S()}),[S]),i.useEffect((function(){d.current&&F(t.end)}),[t.end,F]);var P=n&&t;return i.useEffect((function(){n&&d.current&&O()}),[O,n,P]),i.useEffect((function(){!n&&d.current&&O()}),[O,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),i.useEffect((function(){d.current=!0}),[]),"function"===typeof r?r({countUpRef:f,start:b,reset:V,update:v,pauseResume:E,getCountUp:w}):o.default.createElement("span",c({className:e,ref:f,style:a},s),t.start?w().formattingFn(t.start):"")}}}]);