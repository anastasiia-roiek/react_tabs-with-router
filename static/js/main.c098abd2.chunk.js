(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{30:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(23),s=c.n(a),n=c(9),i=(c(28),c(29),c(30),c(2)),b=c(17),j=c.n(b),l=c(3),r=function(e){var t=e.to,c=e.title;return Object(l.jsx)(n.c,{to:t,className:function(e){return j()("navbar-item",{"is-active":e.isActive})},children:c})},d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){var e,t=Object(i.p)().tabId,c=void 0===t?"":t,a=null===(e=d.find((function(e){return e.id===c})))||void 0===e?void 0:e.content;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:d.map((function(e){return Object(l.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":e.id===c}),children:Object(l.jsx)(n.b,{to:e.id,children:e.title})},e.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:a||"Please select a tab"})]})},h=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(r,{to:"/",title:"Home"}),Object(l.jsx)(r,{to:"/tabs",title:"Tabs"})]})})}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/",element:Object(l.jsx)("h1",{className:"title",children:"Home page"})}),Object(l.jsx)(i.b,{path:"/home",element:Object(l.jsx)(i.a,{to:"/",replace:!0})}),Object(l.jsx)(i.b,{path:"*",element:Object(l.jsx)("h1",{className:"title",children:"Page not found"})}),Object(l.jsx)(i.b,{path:"/tabs",element:Object(l.jsx)(o,{}),children:Object(l.jsx)(i.b,{path:":tabId",element:Object(l.jsx)(o,{})})})]})})})]})};s.a.render(Object(l.jsx)(n.a,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c098abd2.chunk.js.map