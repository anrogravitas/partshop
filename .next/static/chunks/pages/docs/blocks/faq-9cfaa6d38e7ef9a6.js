(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6649],{8273:function(e,t,n){"use strict";n.r(t),n.d(t,{CountUp:function(){return a}});var i=function(){return(i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=function(){function e(e,t,n){var a=this;this.endVal=t,this.options=n,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){a.startTime||(a.startTime=e);var t=e-a.startTime;a.remaining=a.duration-t,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(t,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(t,a.startVal,a.endVal-a.startVal,a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(t/a.duration);var n=a.countDown?a.frameVal<a.endVal:a.frameVal>a.endVal;a.frameVal=n?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),t<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.callback&&a.callback()},this.formatNumber=function(e){var t,n,i,s,r=e<0?"-":"";t=Math.abs(e).toFixed(a.options.decimalPlaces);var o=(t+="").split(".");if(n=o[0],i=o.length>1?a.options.decimal+o[1]:"",a.options.useGrouping){s="";for(var l=0,c=n.length;l<c;++l)0!==l&&l%3==0&&(s=a.options.separator+s),s=n[c-l-1]+s;n=s}return a.options.numerals&&a.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return a.options.numerals[+e]})),i=i.replace(/[0-9]/g,(function(e){return a.options.numerals[+e]}))),r+a.options.prefix+n+i+a.options.suffix},this.easeOutExpo=function(e,t,n,i){return n*(1-Math.pow(2,-10*e/i))*1024/1023+t},this.options=i(i({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return a.handleScroll(a)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),i=n.top+n.height+window.pageYOffset;i<t&&i>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):window.scrollY>i&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);"INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},42411:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/blocks/faq",function(){return n(94304)}])},94304:function(e,t,n){"use strict";n.r(t);var i=n(85893),a=n(95219),s=n(48701),r=n(70851),o=function(e){var t=e.id,n=e.children,a="import { FAQ".concat(t," } from 'components/blocks/faq';\n\n<FAQ").concat(t," />\n");return(0,i.jsxs)("section",{id:"snippet-".concat(t),className:"wrapper bg-light wrapper-border",children:[n,(0,i.jsx)("div",{className:"container pb-15 pb-md-17 position-relative",style:{zIndex:3},children:(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card-footer border-0 position-relative",children:(0,i.jsx)("a",{className:"collapse-link collapsed stretched-link","data-bs-toggle":"collapse",href:"#collapse-snippet-".concat(t),children:"View example's code"})}),(0,i.jsx)("div",{id:"collapse-snippet-".concat(t),className:"card-footer bg-dark p-0 accordion-collapse collapse",children:(0,i.jsx)("div",{className:"code-wrapper",children:(0,i.jsx)("div",{className:"code-wrapper-inner",children:(0,i.jsx)(s.Z,{language:"jsx",children:a})})})})]})})]})};t.default=function(){return(0,i.jsxs)(a.Z,{title:"FAQ",children:[(0,i.jsx)(o,{id:1,children:(0,i.jsx)("div",{className:"container pt-15 pt-md-17 pb-13 pb-md-15",children:(0,i.jsx)(r.ep,{})})}),(0,i.jsx)(o,{id:2,children:(0,i.jsx)("div",{className:"pb-13 pb-md-15",children:(0,i.jsx)(r.PU,{})})}),(0,i.jsx)(o,{id:3,children:(0,i.jsx)("div",{className:"container pt-15 pt-md-17 pb-13 pb-md-15",children:(0,i.jsx)(r.n8,{})})}),(0,i.jsx)(o,{id:5,children:(0,i.jsx)("div",{className:"container pt-15 pt-md-17 pb-13 pb-md-15",children:(0,i.jsx)(r.YK,{})})}),(0,i.jsx)(o,{id:6,children:(0,i.jsx)("div",{className:"pt-15 pt-md-17 pb-13 pb-md-15",children:(0,i.jsx)(r.mO,{})})}),(0,i.jsx)(o,{id:7,children:(0,i.jsx)("div",{className:"container pt-15 pt-md-17 pb-13 pb-md-15",children:(0,i.jsx)(r.KJ,{})})})]})}},24924:function(e,t,n){"use strict";var i=n(85893),a=n(67294);t.Z=function(){var e=(0,a.useRef)(null),t=(0,a.useRef)(null);return(0,a.useEffect)((function(){if(t.current&&e.current){var n=t.current,i=e.current,a=n.getTotalLength();n.style.transition=n.style.transition="none",n.style.strokeDasharray=a+" "+a,n.style.strokeDashoffset=a.toString(),n.getBoundingClientRect(),n.style.transition=n.style.transition="stroke-dashoffset 10ms linear",window.addEventListener("scroll",(function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight,s=a-e*a/t;n.style.strokeDashoffset=s.toString(),(document.body.scrollTop||document.documentElement.scrollTop)>=50?i.classList.add("active-progress"):i.classList.remove("active-progress")})),i.addEventListener("click",(function(e){e.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"})}))}}),[]),(0,i.jsx)("div",{className:"progress-wrap",ref:e,children:(0,i.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,i.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98",ref:t})})})}},95219:function(e,t,n){"use strict";var i=n(85893),a=n(67294),s=n(11163),r=n(22334),o=n(24924),l=n(99472),c=[{id:1,title:"About",url:"/docs/blocks/about"},{id:2,title:"Blog",url:"/docs/blocks/blog"},{id:3,title:"Call to Action",url:"/docs/blocks/call-to-action"},{id:4,title:"Clients",url:"/docs/blocks/clients"},{id:5,title:"Contact",url:"/docs/blocks/contact"},{id:6,title:"Facts",url:"/docs/blocks/facts"},{id:7,title:"FAQ",url:"/docs/blocks/faq"},{id:8,title:"Features",url:"/docs/blocks/features"},{id:9,title:"Footer",url:"/docs/blocks/footer"},{id:10,title:"Hero",url:"/docs/blocks/hero"},{id:12,title:"Navbar",url:"/docs/blocks/navbar"},{id:13,title:"Portfolio",url:"/docs/blocks/portfolio"},{id:14,title:"Pricing",url:"/docs/blocks/pricing"},{id:15,title:"Process",url:"/docs/blocks/process"},{id:16,title:"Team",url:"/docs/blocks/team"},{id:17,title:"Testimonials",url:"/docs/blocks/testimonials"}];t.Z=function(e){var t=e.title,n=e.children,u=(0,s.useRouter)().pathname;return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(o.Z,{}),(0,i.jsxs)("div",{className:"content-wrapper",children:[(0,i.jsx)("header",{className:"wrapper bg-soft-primary",children:(0,i.jsx)(r.w,{language:!0,button:(0,i.jsx)(l.Z,{title:"Contact",href:"#",className:"btn btn-sm btn-primary rounded-pill"})})}),(0,i.jsx)("section",{className:"wrapper bg-soft-primary",children:(0,i.jsx)("div",{className:"container pt-10 pb-12 pt-md-14 pb-md-16 text-center",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-md-9 col-lg-7 col-xl-5 mx-auto",children:[(0,i.jsxs)("h1",{className:"display-1 mb-3",children:["Blocks - ",t]}),(0,i.jsx)("p",{className:"lead px-xxl-10",children:"Copy any custom block snippet below and paste it on your page to build your website easily."})]})})})}),(0,i.jsx)("section",{className:"wrapper bg-light wrapper-border",children:(0,i.jsxs)("div",{className:"container py-11",children:[(0,i.jsx)("h2",{className:"h5",children:"Filter Blocks:"}),(0,i.jsx)("ul",{className:"list-inline mb-0",children:c.map((function(e){var t=e.id,n=e.title,a=e.url;return(0,i.jsx)("li",{className:"list-inline-item me-1 mb-2",children:(0,i.jsx)(l.Z,{href:a,title:n,className:"btn btn-soft-ash btn-sm rounded ".concat(u===a?"text-primary pe-none":"")})},t)}))})]})}),n]}),(0,i.jsx)("section",{className:"wrapper bg-dark text-white",children:(0,i.jsxs)("div",{className:"container pt-14 pt-md-16 text-center",children:[(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto",children:[(0,i.jsx)("h2",{className:"display-3 text-white mt-3 mb-3 px-lg-8",children:"Think unique and be creative. Make a difference with Sandbox."}),(0,i.jsx)("p",{className:"lead fs-lg mb-6",children:"Everything you need to create your next unique and professional website, including impressive and ready-made blocks and pages."}),(0,i.jsx)("a",{href:"#",target:"_blank",className:"btn btn-lg btn-white rounded-pill mb-10",rel:"noreferrer",children:"Buy Sandbox"})]})}),(0,i.jsx)("img",{className:"img-fluid",src:"/img/demos/f1.png",srcSet:"/img/demos/f1@2x.png 2x",alt:"demo"})]})})]})}},48701:function(e,t,n){"use strict";var i=n(85893),a=n(5227),s=n(84283);t.Z=function(e){var t=e.children,n=e.language;return(0,i.jsx)(a.Z,{wrapLines:!0,wrapLongLines:!0,style:s.cL,language:n,customStyle:{padding:"2rem",margin:0,borderRadius:"0 0 .4rem .4rem"},children:t})}},71718:function(e,t,n){"use strict";var i=n(85893);t.Z=function(e){var t=e.no,n=e.body,a=e.heading,s=e.expand,r=e.type,o=void 0===r?"":r;return(0,i.jsxs)("div",{className:"card ".concat(o," accordion-item"),children:[(0,i.jsx)("div",{className:"card-header",id:"heading".concat(t),children:(0,i.jsx)("button",{"data-bs-toggle":"collapse","aria-controls":"collapse".concat(t),"data-bs-target":"#collapse".concat(t),"aria-expanded":s?"true":"false",className:s?"accordion-button":"collapsed",children:a})}),(0,i.jsx)("div",{id:"collapse".concat(t),"aria-labelledby":"heading".concat(t),"data-bs-parent":"#accordionExample",className:"accordion-collapse collapse ".concat(s&&"show"),children:(0,i.jsx)("div",{className:"card-body",children:(0,i.jsx)("p",{children:n})})})]})}},52411:function(e,t,n){"use strict";n.d(t,{Dv:function(){return s},YS:function(){return r},l9:function(){return l}});var i=n(85893),a=n(17857),s=function(e){var t=e.title,n=e.number,s=e.titleColor,r=void 0===s?"":s;return(0,i.jsxs)("div",{className:"col-md-4",children:[(0,i.jsx)("h3",{className:"counter counter-lg ".concat(r),children:(0,i.jsx)(a.ZP,{end:n,suffix:"+"})}),(0,i.jsx)("p",{children:t})]})},r=function(e){var t=e.amount,n=e.title;return(0,i.jsxs)("div",{className:"col-6 col-lg-3",children:[(0,i.jsx)("h3",{className:"counter counter-lg text-white",children:(0,i.jsx)(a.ZP,{end:t})}),(0,i.jsx)("p",{children:n})]})},o=n(41799),l=function(e){var t=e.title,n=e.number,s=e.Icon,r=e.suffix;return(0,i.jsxs)("div",{className:"col-md-4",children:[s,(0,i.jsx)("h3",{className:"counter",children:(0,i.jsx)(a.ZP,(0,o.Z)({end:n},r&&{suffix:r}))}),(0,i.jsx)("p",{children:t})]})}},29190:function(e,t,n){"use strict";n.d(t,{D1:function(){return s},_3:function(){return o},fo:function(){return r},hB:function(){return a},pb:function(){return i},sb:function(){return l}});var i=[["Aenean quam ornare. Curabitur blandit.","Nullam quis risus eget urna mollis ornare."],["Etiam porta euismod malesuada mollis.","Vivamus sagittis lacus vel augue rutrum."]],a=[{id:1,amount:7518,title:"Completed Projects"},{id:2,amount:3472,title:"Satisfied Customers"},{id:3,amount:2184,title:"Expert Employees"},{id:4,amount:4523,title:"Awards Won"}],s=[{id:1,category:"Coding",date:"14 Apr 2022",image:"/img/photos/b4.jpg",title:"Ligula tristique quis risus",description:"Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor."},{id:2,category:"Workspace",date:"29 Mar 2022",image:"/img/photos/b5.jpg",title:"ullam id dolor elit id nibh",description:"Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor."},{id:3,category:"Meeting",date:"26 Feb 2022",image:"/img/photos/b6.jpg",title:"Ultricies fusce porta elit",description:"Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor."},{id:4,category:"Business Tips",date:"7 Jan 2022",image:"/img/photos/b7.jpg",title:"Morbi leo risus porta eget",description:"Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor."}],r=[{id:1,name:"Coriss Ambady",designation:"Financial Analyst",image:{"1x":"/img/avatars/t1.jpg","2x":"/img/avatars/t1@2x.jpg 2x"}},{id:2,name:"Cory Zamora",designation:"Marketing Specialist",image:{"1x":"/img/avatars/t2.jpg","2x":"/img/avatars/t2@2x.jpg 2x"}},{id:3,name:"Nikolas Brooten",designation:"Sales Manager",image:{"1x":"/img/avatars/t3.jpg","2x":"/img/avatars/t3@2x.jpg 2x"}},{id:4,name:"Jackie Sanders",designation:"Investment Planner",image:{"1x":"/img/avatars/t4.jpg","2x":"/img/avatars/t4@2x.jpg 2x"}}],o=[{id:1,name:"Coriss Ambady",image:"/img/avatars/te7.jpg",designation:"Financial Analyst",review:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio."},{id:2,name:"Cory Zamora",image:"/img/avatars/te8.jpg",designation:"Marketing Specialist",review:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio."},{id:3,name:"Barclay Widerski",image:"/img/avatars/te9.jpg",designation:"Sales Specialist",review:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio."}],l=[{id:1,title:"Can I cancel my subscription?",description:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas."},{id:2,title:"Which payment methods do you accept?",description:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas."},{id:3,title:"How can I manage my Account?",description:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas."},{id:4,title:"Is my credit card information secure?",description:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas."}]},75590:function(e,t,n){"use strict";n.d(t,{ZT:function(){return c},Zt:function(){return p},fo:function(){return d},oc:function(){return m},uZ:function(){return u},yj:function(){return l}});var i=n(79708),a=n(7885),s=n(63842),r=n(30058),o=n(1856),l=[{id:1,image:"/img/brands/c1.png"},{id:2,image:"/img/brands/c2.png"},{id:3,image:"/img/brands/c3.png"},{id:4,image:"/img/brands/c4.png"},{id:5,image:"/img/brands/c5.png"},{id:6,image:"/img/brands/c6.png"},{id:7,image:"/img/brands/c7.png"},{id:8,image:"/img/brands/c8.png"}],c=[{id:1,Icon:i.Z,title:"Our Mission",description:"Dapibus eu leo quam ornare curabitur blandit tempus."},{id:2,Icon:a.Z,title:"Our Values",description:"Aenean lacinia bibendum nulla sed consectetur."}],u=[{id:1,Icon:r.Z,title:"Marketing",description:"Nulla vitae elit libero pharetra augue dapibus."},{id:2,Icon:i.Z,title:"Strategy",description:"Vivamus sagittis lacus augue laoreet vel."},{id:3,Icon:o.Z,title:"Development",description:"Cras mattis consectetur purus sit amet."},{id:4,Icon:s.Z,title:"Data Analysis",description:"Aenean lacinia bibendum nulla sed consectetur."}],d=[{id:1,name:"Coriss Ambady",designation:"Financial Analyst",image:{"1x":"/img/avatars/t1.jpg","2x":"/img/avatars/t1@2x.jpg 2x"}},{id:2,name:"Cory Zamora",designation:"Marketing Specialist",image:{"1x":"/img/avatars/t2.jpg","2x":"/img/avatars/t2@2x.jpg 2x"}},{id:3,name:"Nikolas Brooten",designation:"Sales Manager",image:{"1x":"/img/avatars/t3.jpg","2x":"/img/avatars/t3@2x.jpg 2x"}},{id:4,name:"Jackie Sanders",designation:"Investment Planner",image:{"1x":"/img/avatars/t4.jpg","2x":"/img/avatars/t4@2x.jpg 2x"}}],m=[{id:1,percent:100,title:"Marketing"},{id:2,percent:80,title:"Strategy"},{id:3,percent:85,title:"Development"}],p=[{no:"One",expand:!1,heading:"How do I get my subscription receipt?",body:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."},{no:"Two",expand:!1,heading:"Are there any discounts for people in need?",body:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."},{no:"Three",expand:!1,heading:"Do you offer a free trial edit?",body:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."},{no:"Four",expand:!1,heading:"How do I reset my Account password?",body:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."}]},63842:function(e,t,n){"use strict";var i=n(85893);t.Z=function(e){var t=e.className;return(0,i.jsxs)("svg",{viewBox:"0 0 512 431.2",xmlns:"http://www.w3.org/2000/svg",className:"svg-inject icon-svg ".concat(t||"icon-svg-md text-orange mb-3"),children:[(0,i.jsx)("path",{className:"lineal-fill",d:"M125.8 121.3h86.6v296.4h-86.6zM299 13.5h86.6v404.2H299z"}),(0,i.jsx)("path",{className:"lineal-stroke",d:"M498.5 404.2h-11.8V161.7c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v242.5h-59.6V94.3h73.1c7.4 0 13.5-6 13.5-13.5s-6-13.5-13.5-13.5h-74.1V13.5c0-7.4-6-13.5-13.5-13.5H299c-7.4 0-13.5 6-13.5 13.5v134.8h-59.7v-27c0-7.4-6-13.5-13.5-13.5h-73.6V33.7c0-7.4-6-13.5-13.5-13.5H38.7c-7.4 0-13.5 6-13.5 13.5v294.4c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5V47.2h59.7v357.1H13.5c-7.4.2-13.3 6.4-13.1 13.8.2 7.2 6 12.9 13.1 13.1h485.1c7.4-.2 13.3-6.4 13.1-13.8-.3-7.2-6-13-13.2-13.2zM139.3 134.7H199v269.5h-59.7V134.7zm86.6 40.5h59.7v229h-59.7v-229zm86.6 229V27h59.7v377.2h-59.7z"})]})}},1856:function(e,t,n){"use strict";var i=n(85893);t.Z=function(e){var t=e.className;return(0,i.jsxs)("svg",{viewBox:"0 0 512 427.5",xmlns:"http://www.w3.org/2000/svg",className:"svg-inject icon-svg ".concat(t||"icon-svg-md text-yellow mb-3"),children:[(0,i.jsx)("path",{className:"lineal-fill",d:"M186.9 353.4h138.3V413H186.9z"}),(0,i.jsx)("path",{className:"lineal-stroke",d:"M460.2 0H51.8C23.2 0 0 23.2 0 51.7v264.4c0 28.6 23.2 51.7 51.8 51.8h120.6v30.7h-28.8c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5h224.9c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5h-28.8v-41.9c.3-1.2.4-2.4.4-3.6-.2-8-6.9-14.3-14.8-14.1H51.8C39.2 339 29 328.8 29 316.2V51.7c0-12.6 10.2-22.8 22.8-22.8h408.5c12.6 0 22.8 10.2 22.8 22.8v264.4c0 12.6-10.2 22.8-22.8 22.8h-46.7c-8 .2-14.3 6.9-14.1 14.8.2 8 6.9 14.3 14.8 14.1h45.9c28.6 0 51.7-23.2 51.8-51.7V51.7C512 23.2 488.8 0 460.2 0zM310.7 367.9v30.7H201.3v-30.7h109.4z"}),(0,i.jsx)("path",{className:"lineal-fill",d:"M220.1 271.6c-12.7-19.8-6.9-46.3 12.9-59s46.3-6.9 59 12.9c9 14 9 32 0 46.1h100.6v-50.3l-30.4-4.9c-4.9-16.3-13.6-31.3-25.3-43.7l11-28.7-47.3-27.3-19.4 23.8c-16.6-3.9-33.9-3.9-50.5 0l-19.4-23.8-47.2 27.3 11 28.7c-11.7 12.4-20.3 27.4-25.3 43.7l-30.3 4.9v50.3h100.6z"}),(0,i.jsx)("path",{className:"lineal-stroke",d:"M392.5 286.1H291.9c-8 0-14.5-6.5-14.5-14.5 0-2.8.8-5.5 2.3-7.8 8.4-13.1 4.6-30.6-8.6-39-13.1-8.4-30.6-4.6-39 8.6-5.9 9.3-5.9 21.1 0 30.4 4.3 6.7 2.4 15.7-4.3 20-2.3 1.5-5.1 2.3-7.8 2.3H119.4c-8 0-14.5-6.5-14.4-14.5v-50.3c0-7.1 5.2-13.1 12.2-14.3l21.8-3.5c4.7-12.2 11.3-23.6 19.5-33.7l-7.9-20.6c-2.5-6.6.1-14.1 6.3-17.7l47.3-27.3c6.2-3.5 14-2.1 18.5 3.4l13.9 17.1c12.9-2 26.1-2 39 0l13.9-17.1c4.5-5.5 12.3-7 18.5-3.4l47.3 27.3c6.2 3.6 8.8 11.1 6.3 17.7l-7.9 20.6c8.2 10.2 14.7 21.5 19.4 33.7l21.8 3.5c7 1.1 12.2 7.2 12.2 14.3v50.3c-.1 8-6.6 14.5-14.6 14.5zm-80-29h65.6v-23.5l-18.2-2.9c-5.5-.9-10-4.8-11.6-10.1-4.3-14.2-11.9-27.2-22-38-3.8-4-5-9.9-3-15.1l6.6-17.2-25.9-15-11.6 14.3c-3.5 4.3-9.1 6.2-14.5 5-14.5-3.3-29.5-3.3-43.9 0-5.4 1.2-11-.7-14.5-5l-11.6-14.3-25.9 15 6.6 17.2c2 5.2.8 11-3 15.1-10.1 10.8-17.7 23.8-22 38-1.6 5.3-6.1 9.2-11.6 10.1l-18.2 2.9v23.5h65.6c-.4-2.8-.6-5.7-.6-8.6.4-31.6 26.3-56.8 57.9-56.4 31 .4 56 25.4 56.4 56.4 0 2.9-.2 5.8-.6 8.6z"})]})}},17857:function(e,t,n){"use strict";var i=n(67294),a=n(8273);function s(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var r=s(i);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?i.useLayoutEffect:i.useEffect;function p(e){var t=i.useRef(e);return m((function(){t.current=e})),i.useCallback((function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.current.apply(void 0,n)}),[])}var h=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],f={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},g=function(e){var t=i.useMemo((function(){return l(l({},f),e)}),[e]),n=t.ref,s=t.startOnMount,r=t.enableReinitialize,o=t.delay,c=t.onEnd,u=t.onStart,m=t.onPauseResume,g=t.onReset,v=t.onUpdate,b=d(t,h),x=i.useRef(),j=i.useRef(),y=i.useRef(!1),w=p((function(){return function(e,t){var n=t.decimal,i=t.decimals,s=t.duration,r=t.easingFn,o=t.end,l=t.formattingFn,c=t.numerals,u=t.prefix,d=t.separator,m=t.start,p=t.suffix,h=t.useEasing,f=t.enableScrollSpy,g=t.scrollSpyDelay;return new a.CountUp(e,o,{startVal:m,duration:s,decimal:n,decimalPlaces:i,easingFn:r,formattingFn:l,numerals:c,separator:d,prefix:u,suffix:p,useEasing:h,useGrouping:!!d,enableScrollSpy:f,scrollSpyDelay:g})}("string"===typeof n?n:n.current,b)})),V=p((function(e){var t=x.current;if(t&&!e)return t;var n=w();return x.current=n,n})),N=p((function(){var e=function(){return V(!0).start((function(){null===c||void 0===c||c({pauseResume:E,reset:k,start:S,update:F})}))};o&&o>0?j.current=setTimeout(e,1e3*o):e(),null===u||void 0===u||u({pauseResume:E,reset:k,update:F})})),E=p((function(){V().pauseResume(),null===m||void 0===m||m({reset:k,start:S,update:F})})),k=p((function(){j.current&&clearTimeout(j.current),V().reset(),null===g||void 0===g||g({pauseResume:E,start:S,update:F})})),F=p((function(e){V().update(e),null===v||void 0===v||v({pauseResume:E,reset:k,start:S})})),S=p((function(){k(),N()})),O=p((function(e){s&&(e&&k(),N())}));return i.useEffect((function(){y.current?r&&O(!0):(y.current=!0,O())}),[r,y,O,o,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),i.useEffect((function(){return function(){k()}}),[k]),{start:S,pauseResume:E,reset:k,update:F,getCountUp:V}},v=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,n=e.redraw,a=e.containerProps,s=e.children,o=e.style,c=d(e,v),m=r.default.useRef(null),h=r.default.useRef(!1),f=g(l(l({},c),{},{ref:m,startOnMount:"function"!==typeof s||0===e.delay,enableReinitialize:!1})),b=f.start,x=f.reset,j=f.update,y=f.pauseResume,w=f.getCountUp,V=p((function(){b()})),N=p((function(t){e.preserveValue||x(),j(t)})),E=p((function(){"function"!==typeof e.children||m.current instanceof Element?w():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));i.useEffect((function(){E()}),[E]),i.useEffect((function(){h.current&&N(e.end)}),[e.end,N]);var k=n&&e;return i.useEffect((function(){n&&h.current&&V()}),[V,n,k]),i.useEffect((function(){!n&&h.current&&V()}),[V,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),i.useEffect((function(){h.current=!0}),[]),"function"===typeof s?s({countUpRef:m,start:b,reset:x,update:j,pauseResume:y,getCountUp:w}):r.default.createElement("span",u({className:t,ref:m,style:o},a),e.start?w().formattingFn(e.start):"")}}},function(e){e.O(0,[7410,9369,2334,5344,4823,851,9774,2888,179],(function(){return t=42411,e(e.s=t);var t}));var t=e.O();_N_E=t}]);