"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2334],{22334:function(e,s,a){a.d(s,{w:function(){return E}});var l=a(85893),n=a(41664),i=a.n(n),t=a(67294),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,s=(0,t.useState)(!1),a=s[0],l=s[1],n=(0,t.useCallback)((function(){window.scrollY>e?l(!0):l(!1)}),[e]);return(0,t.useEffect)((function(){if(window)return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[n]),a},c=a(99472),o=a(25970),d=function(e){var s=e.linkClassName,a=void 0===s?"nav-link":s,n=e.liClassName,i=void 0===n?"nav-item":n,t=e.href,r=e.title;return(0,l.jsx)("li",{className:i,children:(0,l.jsx)(c.Z,{className:a,href:t,title:r})})},m=a(41799),u=a(69396),h=a(99534),f=function(e){var s=e.title,a=(0,h.Z)(e,["title"]);return(0,l.jsx)("a",(0,u.Z)((0,m.Z)({href:"#","data-bs-toggle":"dropdown",className:"dropdown-item dropdown-toggle"},a),{children:s}))},x=function(e){var s=e.title,a=e.description,n=e.address,i=e.phone;return(0,l.jsxs)("div",{className:"offcanvas offcanvas-end text-inverse",id:"offcanvas-info","data-bs-scroll":"true",children:[(0,l.jsxs)("div",{className:"offcanvas-header",children:[(0,l.jsx)("h3",{className:"text-white fs-30 mb-0",children:s}),(0,l.jsx)("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),(0,l.jsxs)("div",{className:"offcanvas-body pb-6",children:[(0,l.jsx)("div",{className:"widget mb-8",children:(0,l.jsx)("p",{children:a})}),(0,l.jsxs)("div",{className:"widget mb-8",children:[(0,l.jsx)("h4",{className:"widget-title text-white mb-3",children:"Contact Info"}),(0,l.jsx)("address",{children:n}),(0,l.jsx)(c.Z,{title:"info@email.com",className:"link-inverse",href:"mailto:first.last@email.com"}),(0,l.jsx)("br",{}),(0,l.jsx)(c.Z,{href:"tel:0123456789",title:i})]}),(0,l.jsxs)("div",{className:"widget mb-8",children:[(0,l.jsx)("h4",{className:"widget-title text-white mb-3",children:"Learn More"}),(0,l.jsx)("ul",{className:"list-unstyled",children:[{title:"Our Story",url:"#"},{title:"Terms of Use",url:"#"},{title:"Privacy Policy",url:"#"},{title:"Contact Us",url:"#"}].map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(c.Z,{href:"#",title:e.title})},e.title)}))})]}),(0,l.jsxs)("div",{className:"widget",children:[(0,l.jsx)("h4",{className:"widget-title text-white mb-3",children:"Follow Us"}),(0,l.jsx)(o.Z,{className:"nav social social-white"})]})]})]})};x.defaultProps={title:"Sandbox",phone:"00 (123) 456 78 90",description:"Sandbox is a multipurpose HTML5 template with various layouts which will be a great solution for your business.",address:(0,l.jsxs)(t.Fragment,{children:["Moonshine St. 14/05 ",(0,l.jsx)("br",{})," Light City, London"]})};var j=x,v=function(){return(0,l.jsx)("div",{className:"offcanvas offcanvas-top bg-light",id:"offcanvas-search","data-bs-scroll":"true",children:(0,l.jsxs)("div",{className:"container d-flex flex-row py-6",children:[(0,l.jsx)("form",{className:"search-form w-100",children:(0,l.jsx)("input",{type:"text",id:"search-form",className:"form-control",placeholder:"Type keyword and hit enter"})}),(0,l.jsx)("button",{type:"button","aria-label":"Close",className:"btn-close","data-bs-dismiss":"offcanvas"})]})})},p=a(90146),b=a(49677),g=["En","Bn","Es","De"],N=function(){var e=(0,t.useState)(g[0]),s=e[0],a=e[1];return(0,l.jsxs)("li",{className:"nav-item dropdown language-select text-uppercase",children:[(0,l.jsx)("a",{role:"button","aria-haspopup":"true","aria-expanded":"false","data-bs-toggle":"dropdown",className:"nav-link dropdown-item dropdown-toggle",children:s}),(0,l.jsx)("ul",{className:"dropdown-menu",children:g.map((function(e){return(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("button",{className:"dropdown-item",onClick:function(){return a(e)},children:e})},e)}))})]})},w=a(25675),y=a.n(w),k=a(82833),C=[{id:1,stock:5,quantity:1,name:"Nike Air Sneakers",image:"/img/photos/sth1.jpg",price:{sales:45,regular:55}},{id:2,stock:5,quantity:1,name:"Colorful Sneakers",image:"/img/photos/sth2.jpg",price:{sales:0,regular:45}},{id:3,stock:5,quantity:1,name:"Polaroid Camera",image:"/img/photos/sth3.jpg",price:{sales:0,regular:45}}],Z=function(){return(0,l.jsxs)("div",{className:"offcanvas offcanvas-end bg-light",id:"offcanvas-cart","data-bs-scroll":"true",children:[(0,l.jsxs)("div",{className:"offcanvas-header",children:[(0,l.jsx)("h3",{className:"mb-0",children:"Your Cart"}),(0,l.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),(0,l.jsxs)("div",{className:"offcanvas-body d-flex flex-column",children:[(0,l.jsx)("div",{className:"shopping-cart",children:C.map((function(e){var s=e.id,a=e.price,n=e.image,t=e.quantity,r=e.name;return(0,l.jsxs)("div",{className:"shopping-cart-item d-flex justify-content-between mb-4",children:[(0,l.jsxs)("div",{className:"d-flex flex-row",children:[(0,l.jsx)("figure",{className:"rounded w-17",children:(0,l.jsx)(i(),{href:"/products/1",passHref:!0,children:(0,l.jsx)("a",{children:(0,l.jsx)(y(),{src:n,width:90,height:100,layout:"responsive",alt:r})})})}),(0,l.jsxs)("div",{className:"w-100 ms-4",children:[(0,l.jsx)("h3",{className:"post-title fs-16 lh-xs mb-1",children:(0,l.jsx)(c.Z,{title:r,href:"/products/1",className:"link-dark"})}),(0,l.jsx)("p",{className:"price fs-sm",children:a.sales?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("del",{children:(0,l.jsx)("span",{className:"amount",children:(0,k.Z)(a.regular)})})," ",(0,l.jsx)("ins",{children:(0,l.jsx)("span",{className:"amount",children:(0,k.Z)(a.sales)})})]}):(0,l.jsx)("span",{className:"amount",children:(0,k.Z)(a.regular)})}),(0,l.jsx)("div",{className:"form-select-wrapper",children:(0,l.jsxs)("select",{className:"form-select form-select-sm",defaultValue:t,children:[(0,l.jsx)("option",{value:"1",children:"1"}),(0,l.jsx)("option",{value:"2",children:"2"}),(0,l.jsx)("option",{value:"3",children:"3"}),(0,l.jsx)("option",{value:"4",children:"4"}),(0,l.jsx)("option",{value:"5",children:"5"})]})})]})]}),(0,l.jsx)("div",{className:"ms-2",children:(0,l.jsx)("a",{href:"#",className:"link-dark",children:(0,l.jsx)("i",{className:"uil uil-trash-alt"})})})]},s)}))}),(0,l.jsxs)("div",{className:"offcanvas-footer flex-column text-center",children:[(0,l.jsxs)("div",{className:"d-flex w-100 justify-content-between mb-4",children:[(0,l.jsx)("span",{children:"Subtotal:"}),(0,l.jsx)("span",{className:"h6 mb-0",children:"$135.99"})]}),(0,l.jsx)(i(),{href:"/checkout",passHref:!0,children:(0,l.jsxs)("a",{className:"btn btn-primary btn-icon btn-icon-start rounded w-100 mb-4",children:[(0,l.jsx)("i",{className:"uil uil-credit-card fs-18"})," Checkout"]})}),(0,l.jsx)("p",{className:"fs-14 mb-0",children:"Free shipping on all orders over $50"})]})]})]})},S=[{id:0,title:"F\u0151oldal",url:"/"},{id:1,title:"Term\xe9kek",url:"/shop-3"},{id:2,url:null,title:"\xdcgyf\xe9lszolg\xe1lat",children:[{id:21,url:"/contact",title:"Kapcsolat"},{id:22,url:"/aboutus",title:"R\xf3lunk"},{id:23,url:"/info",title:"Inform\xe1ci\xf3k"}]},{id:3,url:null,title:"Fi\xf3k",children:[{id:31,url:"/register",title:"Regisztr\xe1ci\xf3"},{id:32,url:"/login",title:"Bejelentkez\xe9s"}]}],F=function(e){var s,a=e.navClassName,n=e.info,m=e.search,u=(e.social,e.language),h=(e.button,e.cart),x=e.fancy,g=e.navOtherClass,w=e.stickyBox,y=e.logoAlt,k=r(350),C=(0,t.useRef)(null),F=k?"logo-dark":null!==y&&void 0!==y?y:"logo-dark",E=(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)("div",{className:"navbar-brand w-20",children:(0,l.jsx)(c.Z,{href:"/",title:(0,l.jsx)("img",{alt:"logo",src:"/img/".concat(F,".png"),srcSet:"/img/".concat(F,"@2x.png 2x")})})}),(0,l.jsx)("div",{className:g+"navbar w-60 px-5",children:(0,l.jsxs)("ul",{className:"navbar-nav flex-row align-items-center ms-auto",children:[u&&(0,l.jsx)(N,{}),n&&(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{className:"nav-link","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvas-info",children:(0,l.jsx)("i",{className:"uil uil-info-circle"})})}),(0,l.jsx)("form",{className:"form-inline .search_bar w-100",children:(0,l.jsxs)("div",{className:"input-group md-form form-sm form-2 pl-0",children:[(0,l.jsx)("input",{className:"form-control my-0 py-1 ",type:"text",placeholder:"Search","aria-label":"Search",style:{borderTopLeftRadius:"15px",borderBottomLeftRadius:"15px"}}),(0,l.jsx)("div",{className:"input-group-prepend bg-primary",style:{borderTopRightRadius:"15px",borderBottomRightRadius:"15px"},children:m&&(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{className:"nav-link",children:(0,l.jsx)("i",{className:"uil uil-search p-1",id:"nav"})})})})]})}),h&&(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(i(),{className:"nav-link position-relative d-flex flex-row align-items-center",href:"/cart",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("i",{className:"uil uil-shopping-cart"}),(0,l.jsx)("span",{className:"badge badge-cart bg-primary",children:"3"})]})})}),(0,l.jsx)("li",{className:"nav-item d-lg-none",children:(0,l.jsx)("button",{"data-bs-toggle":"offcanvas","data-bs-target":"#offcanvas-nav",className:"hamburger offcanvas-nav-btn",children:(0,l.jsx)("span",{})})})]})}),(0,l.jsx)("div",{id:"offcanvas-nav","data-bs-scroll":"true",className:"navbar-collapse offcanvas offcanvas-nav offcanvas-start w-20",children:(0,l.jsxs)("div",{className:"offcanvas-body ms-lg-auto d-flex flex-column h-100",children:[(0,l.jsx)("ul",{className:"navbar-nav",children:S.map((function(e){var s,a=e.id,n=e.url,i=e.title,t=e.children;return!n&&t?(0,l.jsxs)("li",{className:"nav-item dropdown",children:[(0,l.jsx)(f,{title:i,className:"nav-link dropdown-toggle"}),(0,l.jsx)("ul",{className:"dropdown-menu ",children:(s=t,s.map((function(e){return(0,l.jsx)(d,{href:e.url,title:e.title,linkClassName:"dropdown-item"},e.id)})))})]},a):(0,l.jsx)("ul",{className:"navbar-nav",children:(0,l.jsx)(d,{href:n,title:i})},a)}))}),(0,l.jsx)("div",{className:"offcanvas-footer d-lg-none",children:(0,l.jsxs)("div",{children:[(0,l.jsx)(c.Z,{title:"info@email.com",className:"link-inverse",href:"mailto:first.last@email.com"}),(0,l.jsx)("br",{}),(0,l.jsx)(c.Z,{href:"tel:0123456789",title:"00 (123) 456 78 90"}),(0,l.jsx)("br",{}),(0,l.jsx)(o.Z,{})]})})]})})]});return(0,l.jsxs)(t.Fragment,{children:[w&&(0,l.jsx)("div",{style:{paddingTop:k?null===(s=C.current)||void 0===s?void 0:s.clientHeight:0}}),(0,l.jsx)("nav",{ref:C,className:k?"navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed":a,children:x?(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center",children:E})}):(0,l.jsx)("div",{className:"container flex-lg-row flex-nowrap align-items-center",children:E})}),(0,l.jsx)(p.Z,{}),(0,l.jsx)(b.Z,{}),n&&(0,l.jsx)(j,{}),m&&(0,l.jsx)(v,{}),h&&(0,l.jsx)(Z,{})]})};F.defaultProps={cart:!1,info:!1,social:!1,search:!1,language:!1,stickyBox:!0,navOtherClass:"navbar-other w-100 d-flex",navClassName:"navbar navbar-expand-lg center-nav transparent navbar-light"};var E=F},90146:function(e,s,a){var l=a(85893),n=a(61431);s.Z=function(){return(0,l.jsx)("div",{role:"dialog",tabIndex:-1,"aria-modal":"true",id:"modal-signin",className:"modal fade",style:{display:"none"},children:(0,l.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-sm",children:(0,l.jsx)("div",{className:"modal-content text-center",children:(0,l.jsxs)("div",{className:"modal-body",children:[(0,l.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"}),(0,l.jsx)(n.Z,{})]})})})})}},49677:function(e,s,a){var l=a(85893),n=a(83645);s.Z=function(){return(0,l.jsx)("div",{role:"dialog",tabIndex:-1,"aria-modal":"true",id:"modal-signup",className:"modal fade",children:(0,l.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-sm",children:(0,l.jsx)("div",{className:"modal-content text-center",children:(0,l.jsxs)("div",{className:"modal-body",children:[(0,l.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"}),(0,l.jsx)("h2",{className:"mb-3 text-start",children:"Sign up to Sandbox"}),(0,l.jsx)("p",{className:"lead mb-6 text-start",children:"Registration takes less than a minute."}),(0,l.jsx)(n.Z,{})]})})})})}},61431:function(e,s,a){var l=a(85893),n=a(67294),i=a(99472);s.Z=function(){var e=(0,n.useState)(""),s=e[0],a=e[1],t=(0,n.useState)(""),r=t[0],c=t[1],o=(0,n.useState)(!1),d=o[0],m=o[1];return(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)("h2",{className:"mb-3 text-start",children:"\xdcdv \xfajra!"}),(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(s,r)},className:"text-start mb-3",children:[(0,l.jsxs)("div",{className:"form-floating mb-4",children:[(0,l.jsx)("input",{type:"email",value:s,id:"loginEmail",placeholder:"Email",className:"form-control",onChange:function(e){return a(e.target.value)}}),(0,l.jsx)("label",{htmlFor:"loginEmail",children:"Email"})]}),(0,l.jsxs)("div",{className:"form-floating password-field mb-4",children:[(0,l.jsx)("input",{value:r,id:"loginPassword",placeholder:"Password",className:"form-control",type:d?"text":"password",onChange:function(e){return c(e.target.value)}}),(0,l.jsx)("span",{className:"password-toggle",onClick:function(){return m(!d)},children:(0,l.jsx)("i",{className:"uil  ".concat(d?"uil-eye-slash":"uil-eye")})}),(0,l.jsx)("label",{htmlFor:"loginPassword",children:"Password"})]}),(0,l.jsx)("button",{type:"submit",className:"btn btn-primary rounded-pill btn-login w-100 mb-2",children:"Bejelentkez\xe9s"})]}),(0,l.jsx)("p",{className:"mb-1",children:(0,l.jsx)(i.Z,{title:"Elfelejtetted a jelszavad?",href:"/register",className:"hover"})}),(0,l.jsxs)("p",{className:"mb-0",children:["Nincs m\xe9g fi\xf3kod? ",(0,l.jsx)(i.Z,{title:"Regisztr\xe1ci\xf3",href:"/register",className:"hover"})]})]})}},83645:function(e,s,a){var l=a(85893),n=a(67294),i=a(99472);s.Z=function(){var e=(0,n.useState)(""),s=e[0],a=e[1],t=(0,n.useState)(""),r=t[0],c=t[1],o=(0,n.useState)(""),d=o[0],m=o[1],u=(0,n.useState)(""),h=u[0],f=u[1],x=(0,n.useState)(!1),j=x[0],v=x[1];return(0,l.jsxs)(n.Fragment,{children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(r,d)},className:"text-start mb-3",children:[(0,l.jsxs)("div",{className:"form-floating mb-4",children:[(0,l.jsx)("input",{id:"name",type:"text",value:s,placeholder:"N\xe9v",className:"form-control",onChange:function(e){return a(e.target.value)}}),(0,l.jsx)("label",{htmlFor:"name",children:"Name"})]}),(0,l.jsxs)("div",{className:"form-floating mb-4",children:[(0,l.jsx)("input",{type:"email",value:r,id:"loginEmail",placeholder:"Email",className:"form-control",onChange:function(e){return c(e.target.value)}}),(0,l.jsx)("label",{htmlFor:"loginEmail",children:"Email"})]}),(0,l.jsxs)("div",{className:"form-floating password-field mb-4",children:[(0,l.jsx)("input",{value:d,id:"loginPassword",placeholder:"Password",className:"form-control",type:j?"text":"password",onChange:function(e){return m(e.target.value)}}),(0,l.jsx)("span",{className:"password-toggle",onClick:function(){return v(!j)},children:(0,l.jsx)("i",{className:"uil  ".concat(j?"uil-eye-slash":"uil-eye")})}),(0,l.jsx)("label",{htmlFor:"loginPassword",children:"Password"})]}),(0,l.jsxs)("div",{className:"form-floating password-field mb-4",children:[(0,l.jsx)("input",{id:"password-confirm",value:h,className:"form-control",placeholder:"Confirm Password",type:j?"text":"password",onChange:function(e){return f(e.target.value)}}),(0,l.jsx)("span",{className:"password-toggle",onClick:function(){return v(!j)},children:(0,l.jsx)("i",{className:"uil  ".concat(j?"uil-eye-slash":"uil-eye")})}),(0,l.jsx)("label",{htmlFor:"password-confirm",children:"Confirm Password"})]}),(0,l.jsx)("button",{type:"submit",className:"btn btn-primary rounded-pill btn-login w-100 mb-2",children:"Regisztr\xe1ci\xf3"})]}),(0,l.jsxs)("p",{className:"mb-0",children:["Van m\xe1r fi\xf3kod? ",(0,l.jsx)(i.Z,{title:"Bejelentkez\xe9s",href:"/login",className:"hover"})]})]})}},25970:function(e,s,a){var l=a(85893),n=[{id:1,icon:"uil uil-twitter",url:"https://twitter.com/uilibofficial"},{id:2,icon:"uil uil-facebook-f",url:"https://facebook.com/uiLibOfficial/"},{id:3,icon:"uil uil-dribbble",url:"#"},{id:4,icon:"uil uil-instagram",url:"https://www.instagram.com/uilibofficial/"},{id:5,icon:"uil uil-youtube",url:"https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg"}];s.Z=function(e){var s=e.className,a=void 0===s?"nav social social-white mt-4":s;return(0,l.jsx)("nav",{className:a,children:n.map((function(e){var s=e.id,a=e.icon,n=e.url;return(0,l.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:(0,l.jsx)("i",{className:a})},s)}))})}},99472:function(e,s,a){var l=a(85893),n=a(41664),i=a.n(n);s.Z=function(e){var s=e.href,a=e.className,n=e.title;return(0,l.jsx)(i(),{href:s,children:(0,l.jsx)("a",{className:a,children:n})})}},82833:function(e,s){s.Z=function(e){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"USD"}).format(e)}}}]);